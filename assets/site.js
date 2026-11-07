/* =========================================================
   研報筆記站 — 唯一腳本（規則見 CLAUDE.md §2）
   頁面只用 data-* 屬性，這裡負責所有渲染：
   - body[data-page="index"]     首頁卡片 + 篩選
   - body[data-page="company"]   公司頁（?code=XXXX）
   - body[data-page="glossary"]  名詞庫
   - body[data-page="report"]    報告頁（data-report="id"）
   - [data-terms="A,B"]          任何頁面都可用的名詞區塊
   ========================================================= */
(function () {
  "use strict";

  var REPORTS = window.REPORTS || [];
  var COMPANIES = window.COMPANIES || [];
  var BROKERS = window.BROKERS || [];
  var GLOSSARY = window.GLOSSARY || [];
  var INDUSTRY = window.INDUSTRY || [];
  var PAGE_SIZE = 24;

  var RATING_LABEL = { positive: "正向", neutral: "中性", negative: "負向" };
  var ROOT = document.body.getAttribute("data-root") || "";

  /* ---------- 小工具 ---------- */
  function indexBy(list, key) {
    var m = {};
    list.forEach(function (x) { m[x[key]] = x; });
    return m;
  }
  var companyBy = indexBy(COMPANIES, "code");
  var brokerBy = indexBy(BROKERS, "id");
  var termBy = indexBy(GLOSSARY, "term");

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function fmt(n) {
    if (n == null || isNaN(n)) return "—";
    return Number(n).toLocaleString("zh-TW", { maximumFractionDigits: 2 });
  }
  function brokerName(id) { return brokerBy[id] ? brokerBy[id].name : id; }
  function companyName(code) { return companyBy[code] ? companyBy[code].name : code; }
  function byDateDesc(a, b) { return a.date < b.date ? 1 : a.date > b.date ? -1 : 0; }

  /* 目標價：區間型取中位數計算潛在空間 */
  function targetMid(r) {
    if (r.targetPrice != null) return r.targetPrice;
    if (r.targetRange) return (r.targetRange[0] + r.targetRange[1]) / 2;
    return null;
  }
  function targetText(r) {
    if (r.targetPrice != null) return fmt(r.targetPrice);
    if (r.targetRange) return fmt(r.targetRange[0]) + "–" + fmt(r.targetRange[1]);
    return "—";
  }
  function upside(r) {
    var t = targetMid(r);
    if (t == null || !r.price) return null;
    return (t / r.price - 1) * 100;
  }
  function upsideHtml(r) {
    var u = upside(r);
    if (u == null) return '<span class="num muted">—</span>';
    var cls = u > 0 ? "up" : u < 0 ? "down" : "";
    return '<span class="num ' + cls + '">' + (u > 0 ? "+" : "") + u.toFixed(1) + "%</span>";
  }
  function badge(r) {
    return '<span class="badge badge--' + esc(r.rating) + '">' + esc(RATING_LABEL[r.rating] || r.rating) + "</span>";
  }
  function reportUrl(r) { return ROOT + "reports/" + r.id + ".html"; }
  function companyUrl(code) { return ROOT + "company.html?code=" + encodeURIComponent(code); }
  function industryUrl(x) { return ROOT + "industry/" + x.id + ".html"; }

  /* ---------- 產業筆記卡片 ---------- */
  function industryCard(x) {
    var tags = (x.tags || []).map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join("");
    var rel = (x.related || []).map(function (c) { return esc(companyName(c)); }).join("、");
    return (
      '<a class="card" href="' + industryUrl(x) + '">' +
        '<div class="card-top"><span class="ticker"><b>' + esc(x.group) + "</b></span>" +
        '<span class="badge badge--neutral">' + esc(x.sourceType) + "</span></div>" +
        "<h3>" + esc(x.title) + "</h3>" +
        "<p>" + esc(x.summary) + "</p>" +
        (rel ? '<div class="card-meta"><span>相關公司：' + rel + "</span></div>" : "") +
        '<div class="tags">' + tags + "</div>" +
        '<div class="card-meta"><span>' + esc(brokerName(x.source)) + "｜" + esc(x.kind) + '</span><span class="num">' + esc(x.date) + "</span></div>" +
      "</a>"
    );
  }

  /* ---------- 卡片 ---------- */
  function card(r) {
    var tags = (r.tags || []).map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join("");
    return (
      '<a class="card" href="' + reportUrl(r) + '">' +
        '<div class="card-top"><span class="ticker"><b>' + esc(companyName(r.code)) + "</b>" + esc(r.code) + "</span>" + badge(r) + "</div>" +
        "<h3>" + esc(r.title) + "</h3>" +
        "<p>" + esc(r.summary) + "</p>" +
        '<div class="card-nums">' +
          "<div>目標價<b>" + targetText(r) + "</b></div>" +
          "<div>當時股價<b>" + fmt(r.price) + "</b></div>" +
          "<div>潛在空間<b>" + upsideHtml(r) + "</b></div>" +
        "</div>" +
        '<div class="tags">' + tags + "</div>" +
        '<div class="card-meta"><span>' + esc(brokerName(r.broker)) + "｜" + esc(r.ratingRaw) + '</span><span class="num">' + esc(r.date) + "</span></div>" +
      "</a>"
    );
  }

  /* ---------- 名詞區塊 ---------- */
  function renderTerms() {
    document.querySelectorAll("[data-terms]").forEach(function (el) {
      var names = el.getAttribute("data-terms").split(",").map(function (s) { return s.trim(); }).filter(Boolean);
      el.classList.add("terms");
      el.innerHTML = names.map(function (n) {
        var t = termBy[n];
        if (!t) return '<p class="term-missing">⚠ 名詞庫缺少「' + esc(n) + "」，請在 data/glossary.js 新增。</p>";
        return '<dl class="term"><dt>' + esc(t.term) + "<small>" + esc(t.full) + "</small></dt><dd>" + esc(t.def) + "</dd></dl>";
      }).join("");
    });
  }

  /* ---------- 首頁 ---------- */
  function renderIndex() {
    var list = REPORTS.slice().sort(byDateDesc);

    var stats = document.querySelector("[data-stats]");
    if (stats) {
      var srcs = new Set(list.map(function (r) { return r.broker; }).concat(INDUSTRY.map(function (x) { return x.source; })));
      stats.innerHTML =
        "<div><b>" + list.length + "</b><span>個股報告筆記</span></div>" +
        "<div><b>" + INDUSTRY.length + "</b><span>產業與技術筆記</span></div>" +
        "<div><b>" + COMPANIES.length + "</b><span>追蹤公司</span></div>" +
        "<div><b>" + srcs.size + "</b><span>券商與資料來源</span></div>";
    }

    var latest = document.querySelector("[data-industry-latest]");
    if (latest) latest.innerHTML = INDUSTRY.slice().sort(byDateDesc).slice(0, 6).map(industryCard).join("");

    var fGroup = document.getElementById("f-group");
    var fCompany = document.getElementById("f-company");
    var more = document.querySelector("[data-more]");
    var limit = PAGE_SIZE;
    var fBroker = document.getElementById("f-broker");
    var fRating = document.getElementById("f-rating");
    var fText = document.getElementById("f-text");
    var out = document.querySelector("[data-report-list]");
    var count = document.querySelector("[data-count]");

    function opts(sel, values) {
      values.forEach(function (v) {
        var o = document.createElement("option");
        o.value = v[0]; o.textContent = v[1];
        sel.appendChild(o);
      });
    }
    var groups = [];
    COMPANIES.forEach(function (c) { if (groups.indexOf(c.industryGroup) < 0) groups.push(c.industryGroup); });
    opts(fGroup, groups.map(function (g) { return [g, g]; }));
    var usedBrokers = BROKERS.filter(function (b) { return list.some(function (r) { return r.broker === b.id; }); });
    opts(fBroker, usedBrokers.map(function (b) { return [b.id, b.name]; }));
    opts(fRating, Object.keys(RATING_LABEL).map(function (k) { return [k, RATING_LABEL[k]]; }));
    opts(fCompany, COMPANIES.map(function (c) { return [c.code, c.name + " " + c.code]; }));

    function apply(keepLimit) {
      if (keepLimit !== true) limit = PAGE_SIZE;
      var g = fGroup.value, co = fCompany.value, b = fBroker.value, rt = fRating.value, q = fText.value.trim().toLowerCase();
      var shown = list.filter(function (r) {
        var c = companyBy[r.code] || {};
        if (g && c.industryGroup !== g) return false;
        if (co && r.code !== co) return false;
        if (b && r.broker !== b) return false;
        if (rt && r.rating !== rt) return false;
        if (q) {
          var hay = [r.code, c.name, c.nameEn, r.title, r.summary, brokerName(r.broker)].concat(r.tags || []).join(" ").toLowerCase();
          if (hay.indexOf(q) < 0) return false;
        }
        return true;
      });
      out.innerHTML = shown.length ? shown.slice(0, limit).map(card).join("") : '<div class="empty">沒有符合條件的筆記</div>';
      count.textContent = "符合 " + shown.length + " / " + list.length + " 篇";
      if (more) {
        more.innerHTML = shown.length > limit
          ? '<button type="button" class="btn">顯示更多（還有 ' + (shown.length - limit) + " 篇）</button>"
          : "";
      }
    }
    if (more) more.addEventListener("click", function (e) {
      if (e.target.closest("button")) { limit += PAGE_SIZE; apply(true); }
    });
    [fGroup, fCompany, fBroker, fRating].forEach(function (el) { el.addEventListener("change", apply); });
    fText.addEventListener("input", apply);
    var qs = new URLSearchParams(location.search);
    if (qs.get("company")) fCompany.value = qs.get("company");
    apply();

    var cl = document.querySelector("[data-company-list]");
    if (cl) {
      cl.innerHTML = COMPANIES.map(function (c) {
        var n = list.filter(function (r) { return r.code === c.code; }).length;
        var ni = INDUSTRY.filter(function (x) { return (x.related || []).indexOf(c.code) >= 0; }).length;
        return '<a class="card" href="' + companyUrl(c.code) + '">' +
          '<div class="card-top"><span class="ticker"><b>' + esc(c.name) + "</b>" + esc(c.code) + '</span><span class="tag">' + esc(c.industryGroup) + "</span></div>" +
          "<p>" + esc(c.desc) + "</p>" +
          '<div class="card-meta"><span>' + esc(c.sector) + '</span><span class="num">個股 ' + n + " · 產業 " + ni + "</span></div></a>";
      }).join("");
    }
  }

  /* ---------- 報告頁 ---------- */
  function renderReport() {
    var id = document.body.getAttribute("data-report");
    var r = REPORTS.filter(function (x) { return x.id === id; })[0];
    var facts = document.querySelector("[data-facts]");
    var lead = document.querySelector("[data-summary]");
    if (!r) {
      if (facts) facts.innerHTML = '<p class="term-missing">⚠ data/reports.js 找不到 id「' + esc(id) + "」。</p>";
      return;
    }
    if (facts) {
      var rows = [
        ["券商", esc(brokerName(r.broker))],
        ["報告日期", '<span class="num">' + esc(r.date) + "</span>"],
        ["評等", esc(r.ratingRaw) + " " + badge(r)],
        ["目標價", '<span class="num big">' + targetText(r) + "</span>"],
        ["前次目標價", '<span class="num">' + fmt(r.prevTargetPrice) + "</span>"],
        ["報告時股價", '<span class="num">' + fmt(r.price) + "</span>"],
        ["潛在空間", upsideHtml(r)],
        ["評價方法", '<span class="num">' + esc(r.valuation || "—") + "</span>"]
      ];
      facts.innerHTML = rows.map(function (x) { return "<dt>" + x[0] + "</dt><dd>" + x[1] + "</dd>"; }).join("");
    }
    if (lead) lead.textContent = r.summary;

    var others = document.querySelector("[data-related]");
    if (others) {
      var rel = REPORTS.filter(function (x) { return x.code === r.code && x.id !== r.id; }).sort(byDateDesc);
      others.innerHTML = rel.length
        ? "<ul>" + rel.map(function (x) {
            return '<li><a href="' + reportUrl(x) + '">' + esc(brokerName(x.broker)) + ' <span class="num">' + esc(x.date) + "</span></a> " + badge(x) + "</li>";
          }).join("") + "</ul>"
        : '<p class="muted">目前只有這一篇。</p>';
    }
  }

  /* ---------- 公司頁 ---------- */
  function renderCompany() {
    var code = new URLSearchParams(location.search).get("code") || (COMPANIES[0] && COMPANIES[0].code);
    var c = companyBy[code];
    var head = document.querySelector("[data-company-head]");
    if (!c) {
      head.innerHTML = "<h1>找不到公司</h1><p>data/companies.js 中沒有代號「" + esc(code) + "」。</p>";
      return;
    }
    document.title = c.name + "(" + c.code + ")｜研報筆記站";
    var list = REPORTS.filter(function (r) { return r.code === code; }).sort(byDateDesc);
    var crumb = document.querySelector("[data-crumb]");
    if (crumb) crumb.textContent = c.name + "(" + c.code + ")";

    head.innerHTML =
      "<div><h1>" + esc(c.name) + '<span class="code">' + esc(c.code) + " · " + esc(c.nameEn) + "</span></h1>" +
      '<p class="muted">' + esc(c.sector) + "｜" + esc(c.desc) + "</p></div>" +
      '<span class="tag">' + esc(c.industryGroup) + "</span>";

    var chart = document.querySelector("[data-chart]");
    if (chart) chart.innerHTML = list.length ? chartSvg(list.slice().reverse()) : '<p class="muted">尚無資料</p>';

    var tbody = document.querySelector("[data-company-table]");
    if (tbody) {
      tbody.innerHTML = list.map(function (r) {
        return "<tr>" +
          '<td class="num">' + esc(r.date) + "</td>" +
          '<td><a href="' + reportUrl(r) + '">' + esc(brokerName(r.broker)) + "</a></td>" +
          "<td>" + esc(r.ratingRaw) + " " + badge(r) + "</td>" +
          '<td class="num">' + targetText(r) + "</td>" +
          '<td class="num">' + fmt(r.price) + "</td>" +
          '<td class="num">' + upsideHtml(r) + "</td>" +
          '<td class="num">' + esc(r.valuation || "—") + "</td>" +
        "</tr>";
      }).join("");
    }
    var cards = document.querySelector("[data-company-cards]");
    if (cards) cards.innerHTML = list.map(card).join("");

    var ind = document.querySelector("[data-company-industry]");
    if (ind) {
      var rel = INDUSTRY.filter(function (x) { return (x.related || []).indexOf(code) >= 0; }).sort(byDateDesc);
      ind.innerHTML = rel.length ? rel.map(industryCard).join("") : '<div class="empty">目前沒有相關的產業筆記</div>';
    }
  }

  /* ---------- 產業列表頁 ---------- */
  function renderIndustryList() {
    var list = INDUSTRY.slice().sort(byDateDesc);
    var fG = document.getElementById("i-group"), fT = document.getElementById("i-type"), fQ = document.getElementById("i-text");
    var out = document.querySelector("[data-industry-list]"), count = document.querySelector("[data-count]");
    function uniq(key) { var u = []; list.forEach(function (x) { if (u.indexOf(x[key]) < 0) u.push(x[key]); }); return u; }
    uniq("group").forEach(function (v) { var o = document.createElement("option"); o.value = o.textContent = v; fG.appendChild(o); });
    uniq("sourceType").forEach(function (v) { var o = document.createElement("option"); o.value = o.textContent = v; fT.appendChild(o); });
    function apply() {
      var g = fG.value, t = fT.value, q = fQ.value.trim().toLowerCase();
      var shown = list.filter(function (x) {
        if (g && x.group !== g) return false;
        if (t && x.sourceType !== t) return false;
        if (q && [x.title, x.summary, x.group, brokerName(x.source)].concat(x.tags || []).join(" ").toLowerCase().indexOf(q) < 0) return false;
        return true;
      });
      out.innerHTML = shown.length ? shown.map(industryCard).join("") : '<div class="empty">沒有符合條件的筆記</div>';
      count.textContent = "符合 " + shown.length + " / " + list.length + " 篇";
    }
    [fG, fT].forEach(function (el) { el.addEventListener("change", apply); });
    fQ.addEventListener("input", apply);
    apply();
  }

  /* ---------- 產業筆記頁 ---------- */
  function renderIndustryPage() {
    var id = document.body.getAttribute("data-industry");
    var x = INDUSTRY.filter(function (i) { return i.id === id; })[0];
    var facts = document.querySelector("[data-facts]");
    if (!x) {
      if (facts) facts.innerHTML = '<p class="term-missing">⚠ data/industry.js 找不到 id「' + esc(id) + "」。</p>";
      return;
    }
    if (facts) {
      facts.innerHTML = [
        ["來源", esc(brokerName(x.source))],
        ["來源類型", '<span class="badge badge--neutral">' + esc(x.sourceType) + "</span>"],
        ["日期", '<span class="num">' + esc(x.date) + "</span>"],
        ["主題", esc(x.group)],
        ["報告類型", esc(x.kind)]
      ].map(function (r) { return "<dt>" + r[0] + "</dt><dd>" + r[1] + "</dd>"; }).join("");
    }
    var lead = document.querySelector("[data-summary]");
    if (lead) lead.textContent = x.summary;
    var rc = document.querySelector("[data-related-companies]");
    if (rc) {
      rc.innerHTML = (x.related || []).length
        ? "<ul>" + x.related.map(function (c) {
            var n = REPORTS.filter(function (r) { return r.code === c; }).length;
            return '<li><a href="' + companyUrl(c) + '">' + esc(companyName(c)) + " " + esc(c) + '</a> <span class="muted">（' + n + " 篇個股筆記）</span></li>";
          }).join("") + "</ul>"
        : '<p class="muted">這份報告沒有對應到本站追蹤的公司。</p>';
    }
  }

  /* 目標價 vs 報告時股價 走勢圖（純 SVG） */
  function chartSvg(list) {
    var W = 720, H = 300, L = 64, R = 20, T = 24, B = 36;
    var t = function (d) { return new Date(d + "T00:00:00").getTime(); };
    var xs = list.map(function (r) { return t(r.date); });
    var vals = [];
    list.forEach(function (r) {
      if (r.price) vals.push(r.price);
      if (r.targetPrice != null) vals.push(r.targetPrice);
      if (r.targetRange) vals.push(r.targetRange[0], r.targetRange[1]);
    });
    var x0 = Math.min.apply(null, xs), x1 = Math.max.apply(null, xs);
    if (x0 === x1) { x0 -= 864e5 * 15; x1 += 864e5 * 15; }
    var pad = (x1 - x0) * 0.06; x0 -= pad; x1 += pad;
    var vmax = Math.max.apply(null, vals) * 1.1, vmin = 0;
    var X = function (v) { return L + (v - x0) / (x1 - x0) * (W - L - R); };
    var Y = function (v) { return T + (1 - (v - vmin) / (vmax - vmin)) * (H - T - B); };

    var step = niceStep(vmax / 5), g = "";
    for (var v = 0; v <= vmax; v += step) {
      g += '<line class="grid-line" x1="' + L + '" x2="' + (W - R) + '" y1="' + Y(v) + '" y2="' + Y(v) + '"/>' +
           '<text x="' + (L - 8) + '" y="' + (Y(v) + 4) + '" text-anchor="end">' + fmt(v) + "</text>";
    }
    g += '<line class="axis" x1="' + L + '" x2="' + (W - R) + '" y1="' + Y(0) + '" y2="' + Y(0) + '"/>';

    var months = {}, ticks = "";
    list.forEach(function (r) {
      var m = r.date.slice(0, 7);
      if (months[m]) return; months[m] = 1;
      var mx = Math.max(t(m + "-01"), x0);
      ticks += '<text x="' + X(mx) + '" y="' + (H - 12) + '" text-anchor="middle">' + m + "</text>";
    });

    var pricePts = list.filter(function (r) { return r.price; }).map(function (r) { return X(t(r.date)) + "," + Y(r.price); });
    var tpPts = list.filter(function (r) { return targetMid(r) != null; }).map(function (r) { return X(t(r.date)) + "," + Y(targetMid(r)); });

    var marks = "", seen = {}, showLabels = list.length <= 8;
    list.forEach(function (r) {
      var x = X(t(r.date));
      var k = r.date; seen[k] = (seen[k] || 0) + 1;
      var dx = (seen[k] - 1) * 14;
      if (r.targetRange) {
        marks += '<line class="range" x1="' + (x + dx) + '" x2="' + (x + dx) + '" y1="' + Y(r.targetRange[0]) + '" y2="' + Y(r.targetRange[1]) + '"/>';
      }
      var tm = targetMid(r);
      if (tm != null) {
        marks += '<circle class="dot--' + esc(r.rating) + '" cx="' + (x + dx) + '" cy="' + Y(tm) + '" r="5"><title>' +
          esc(brokerName(r.broker)) + " " + esc(r.date) + "｜目標價 " + targetText(r) + "</title></circle>" +
          (showLabels ? '<text x="' + (x + dx) + '" y="' + (Y(tm) - 10) + '" text-anchor="middle">' + esc(brokerName(r.broker).replace("投顧", "")) + "</text>" : "");
      }
      if (r.price) marks += '<circle class="px-dot" cx="' + x + '" cy="' + Y(r.price) + '" r="3.5"><title>' + esc(r.date) + " 股價 " + fmt(r.price) + "</title></circle>";
    });

    return '<svg class="chart" viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="各券商目標價與報告當時股價">' +
      g + ticks +
      (pricePts.length > 1 ? '<polyline class="px-line" points="' + pricePts.join(" ") + '"/>' : "") +
      (tpPts.length > 1 ? '<polyline class="tp-line" points="' + tpPts.join(" ") + '"/>' : "") +
      marks + "</svg>";
  }
  function niceStep(raw) {
    var p = Math.pow(10, Math.floor(Math.log10(raw))), n = raw / p;
    return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * p;
  }

  /* ---------- 名詞庫 ---------- */
  function renderGlossary() {
    var out = document.querySelector("[data-glossary]");
    var q = document.getElementById("g-text");
    var sorted = GLOSSARY.slice().sort(function (a, b) { return a.term.localeCompare(b.term, "zh-Hant"); });
    function apply() {
      var s = (q && q.value.trim().toLowerCase()) || "";
      var shown = sorted.filter(function (t) { return !s || (t.term + t.full + t.def).toLowerCase().indexOf(s) >= 0; });
      out.innerHTML = shown.map(function (t) {
        return '<dl class="term"><dt>' + esc(t.term) + "<small>" + esc(t.full) + "</small></dt><dd>" + esc(t.def) + "</dd></dl>";
      }).join("") || '<div class="empty">找不到名詞</div>';
    }
    if (q) q.addEventListener("input", apply);
    apply();
  }

  /* ---------- 啟動 ---------- */
  var page = document.body.getAttribute("data-page");
  if (page === "index") renderIndex();
  if (page === "company") renderCompany();
  if (page === "report") renderReport();
  if (page === "glossary") renderGlossary();
  if (page === "industry-list") renderIndustryList();
  if (page === "industry") renderIndustryPage();
  renderTerms();
})();
