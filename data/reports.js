// 報告索引 — 一份報告一筆，新增時加在陣列最後（格式見 CLAUDE.md §7.1）
window.REPORTS = [
  {
    id: "2025-11-21-6515-concords", code: "6515", broker: "concords", date: "2025-11-21",
    title: "測試座具領導地位，2026 年維持高成長動能",
    ratingRaw: "買進（調升）", rating: "positive",
    targetPrice: 2830, targetRange: null, prevTargetPrice: 1375, price: 2350, currency: "TWD",
    valuation: "40x 2026F EPS",
    epsForecast: { "2025F": 44.85, "2026F": 70.8 },
    summary: "3Q25 毛利率因 MEMS 探針卡初期成本高而下滑，但測試座龍頭地位與 AI 測試時間拉長的趨勢不變，評等調升為買進。",
    tags: ["測試座", "MEMS 探針卡", "擴產"]
  },
  {
    id: "2026-02-04-6515-kgi", code: "6515", broker: "kgi", date: "2026-02-04",
    title: "打入 SLT 供應鏈，獲利預估大幅上修",
    ratingRaw: "增加持股", rating: "positive",
    targetPrice: 5300, targetRange: null, prevTargetPrice: 2900, price: 4555, currency: "TWD",
    valuation: "40x 2027F EPS",
    epsForecast: { "2026F": 91.32, "2027F": 133.10 },
    summary: "穎崴切入 AI GPU 的 SLT 測試座市場，市場規模約為 FT 的 4–5 倍，凱基因此上修兩年獲利並把目標價拉高八成。",
    tags: ["SLT", "AI GPU", "上修預估"]
  },
  {
    id: "2026-03-20-6515-citi", code: "6515", broker: "citi", date: "2026-03-20",
    title: "產能擴充與訂單能見度推升獲利潛力",
    ratingRaw: "Buy / High Risk", rating: "positive",
    targetPrice: 10000, targetRange: null, prevTargetPrice: 6000, price: 7210, currency: "TWD",
    valuation: "45x 2027F EPS",
    epsForecast: { "2027F": 220 },
    summary: "花旗認為仁武擴產反映客戶訂單能見度高，除 GPU 外 CPU 與 ASIC 需求同樣強勁，目標本益比由 40 倍提高到 45 倍。",
    tags: ["擴產", "ASIC", "外資"]
  },
  {
    id: "2026-05-27-6515-masterlink", code: "6515", broker: "masterlink", date: "2026-05-27",
    title: "AI 測試規格升級，擴產進度加速推進",
    ratingRaw: "維持買進", rating: "positive",
    targetPrice: 14000, targetRange: null, prevTargetPrice: 12500, price: 8905, currency: "TWD",
    valuation: "33x 2028F EPS",
    epsForecast: { "2026F": 106.74, "2027F": 229.63, "2028F": 416.16 },
    summary: "1Q26 獲利創新高，彈簧針與測試座加工產能擴充速度優於預期，元富以 2028 年 EPS 評價，目標價上修至 14,000 元。",
    tags: ["公司拜訪", "產能", "長線評價"]
  },
  {
    id: "2026-05-27-6515-tcb", code: "6515", broker: "tcb", date: "2026-05-27",
    title: "多重成長動能，營收獲利高雙位數成長",
    ratingRaw: "區間操作", rating: "neutral",
    targetPrice: null, targetRange: [7215, 10190], prevTargetPrice: null, price: 8905, currency: "TWD",
    valuation: "80–113x 2026F EPS",
    epsForecast: { "2025A": 46.93, "2026F": 90.15 },
    summary: "合庫同樣看好 AI/HPC 帶動的成長，但股價已反映不少預期，因此給區間操作，與同日元富的買進形成對比。",
    tags: ["區間操作", "AI/HPC", "評價分歧"]
  },
  {
    id: "2026-02-26-2327-pscnet", code: "2327", broker: "pscnet", date: "2026-02-26",
    title: "記憶體漲價為被動元件市場增添變數",
    ratingRaw: "中立（維持）", rating: "neutral",
    targetPrice: 230, targetRange: null, prevTargetPrice: 200, price: 298, currency: "TWD",
    valuation: "15x 2026F EPS",
    epsForecast: { "2026F": 15.16 },
    summary: "漲價帶動獲利上修，但統一認為電阻電感漲價只是成本轉嫁、非缺貨，且記憶體漲價可能壓抑消費需求，維持中立。",
    tags: ["漲價", "記憶體", "保守派"]
  },
  {
    id: "2026-02-26-2327-megas", code: "2327", broker: "megas", date: "2026-02-26",
    title: "鉭質電容 AI 佔比突破三成，Shibaura 併入推升營收",
    ratingRaw: "區間操作", rating: "neutral",
    targetPrice: 343, targetRange: null, prevTargetPrice: 277, price: 300, currency: "TWD",
    valuation: "24x 2026F EPS",
    epsForecast: { "2025F": 11.52, "2026F": 14.29 },
    summary: "4Q25 營收與毛利率同創新高、鉭質電容 AI 佔比超過三成，兆豐上修本益比至 24 倍，但仍維持區間操作。",
    tags: ["鉭質電容", "併購", "被動元件漲價"]
  },
  {
    id: "2026-02-26-2360-sinopac", code: "2360", broker: "sinopac", date: "2026-02-26",
    title: "兩大業務挹注強勁動能",
    ratingRaw: "買進（首評）", rating: "positive",
    targetPrice: 1645, targetRange: null, prevTargetPrice: null, price: 1255, currency: "TWD",
    valuation: "34x 2027F EPS",
    epsForecast: { "2026F": 32.80, "2027F": 48.37 },
    summary: "AI 資料中心電源測試（BBU、PSU）與半導體 SLT 設備兩大業務同步成長，永豐首次評等即給予買進。",
    tags: ["首評", "電源測試", "SLT"]
  },
  {
    id: "2026-02-06-3711-gfortune", code: "3711", broker: "gfortune", date: "2026-02-06",
    title: "先進封裝與測試帶動產品組合優化",
    ratingRaw: "買進", rating: "positive",
    targetPrice: 360, targetRange: null, prevTargetPrice: null, price: 284, currency: "TWD",
    valuation: "19x 2H26–1H27 EPS",
    epsForecast: { "2H26–1H27": 19 },
    summary: "4Q25 封測產能利用率回升至約八成、EPS 優於預期，自研類 CoWoS 技術將量產，高毛利業務比重提升帶動評價。",
    tags: ["先進封裝", "產能利用率", "早報"]
  },
  {
    id: "2026-01-09-2383-yuanta", code: "2383", broker: "yuanta", date: "2026-01-09",
    title: "龍頭地位無虞，高階產品持續出貨",
    ratingRaw: "買進", rating: "positive",
    targetPrice: 1940, targetRange: null, prevTargetPrice: null, price: 1545, currency: "TWD",
    valuation: "26x 2026–27F 平均 EPS",
    epsForecast: { "2026F": 60.54, "2027F": 88.68 },
    summary: "台光電營收已轉向 AI 伺服器與交換器，2026–27 年持續擴產並受惠 M8/M9 高階材料滲透，元大維持買進。",
    tags: ["CCL", "擴產", "高速材料"]
  },
  {
    id: "2026-05-27-6515-yuanta", code: "6515", broker: "yuanta", date: "2026-05-27",
    title: "產能擴增延續至 2028 年，兩大 AI 客戶成長強勁",
    ratingRaw: "買進", rating: "positive",
    targetPrice: 11000, targetRange: null, prevTargetPrice: null, price: 8905, currency: "TWD",
    valuation: "52x 2027F EPS",
    epsForecast: {"2026F": 102.61, "2027F": 212.83},
    summary: "1Q26 EPS 符合預期，新廠提前投產滿足 CPU/GPU/ASIC 測試座需求，元大估 2025–28 年獲利年複合成長約九成。",
    tags: ["產能", "HyperSocket", "CPU 測試"]
  },
  {
    id: "2025-10-31-2383-yuanta", code: "2383", broker: "yuanta", date: "2025-10-31",
    title: "AI 需求正向，2026 年龍頭地位依舊穩固",
    ratingRaw: "買進（維持）", rating: "positive",
    targetPrice: 1500, targetRange: null, prevTargetPrice: 1300, price: 1275, currency: "TWD",
    valuation: "26x 2026F EPS",
    epsForecast: {"2025F": 41.15, "2026F": 56.16},
    summary: "3Q25 受 A 客戶 ASIC 平台轉換影響毛利率，但 A、G、M 三家 ASIC 客戶與 GB300 需求強，元大上修目標價至 1,500 元。",
    tags: ["ASIC", "GB300", "800G"]
  },
  {
    id: "2026-01-07-2383-kgi", code: "2383", broker: "kgi", date: "2026-01-07",
    title: "M9 滲透率持續擴張將為營運帶來上調",
    ratingRaw: "增加持股", rating: "positive",
    targetPrice: 1950, targetRange: null, prevTargetPrice: 1425, price: 1580, currency: "TWD",
    valuation: "30x 2026F EPS",
    epsForecast: {"2026F": 64.99, "2027F": 88.5},
    summary: "市場傳 Rubin 平台 CCL 降規，凱基認為不實，M9 用量反而擴大，加上 AWS T3 出貨與昆山擴產，目標價大幅上調。",
    tags: ["M9", "Rubin", "擴產"]
  },
  {
    id: "2025-10-30-2383-kgi", code: "2383", broker: "kgi", date: "2025-10-30",
    title: "4Q25 展望優預期，1Q26 起逐季成長無淡季",
    ratingRaw: "增加持股", rating: "positive",
    targetPrice: 1425, targetRange: null, prevTargetPrice: 1300, price: 1275, currency: "TWD",
    valuation: "22x 2026F EPS",
    epsForecast: {"2025F": 42.22, "2026F": 64.74},
    summary: "3Q25 獲利略低於預期，但 4Q25 營收持平、1Q26 起逐季成長，凱基上修 2026 年獲利 14.5%。",
    tags: ["財報", "M9", "無淡季"]
  },
  {
    id: "2025-10-22-2383-kgi", code: "2383", broker: "kgi", date: "2025-10-22",
    title: "短期新舊產品轉換調整期，中期 M9 材料穩居領先",
    ratingRaw: "增加持股", rating: "positive",
    targetPrice: 1300, targetRange: null, prevTargetPrice: 1140, price: 1120, currency: "TWD",
    valuation: "22x 2026F EPS",
    epsForecast: {"2025F": 43.62, "2026F": 59.0},
    summary: "4Q25 因 AWS 新舊產品轉換營收將下滑，但 Rubin CPX 導入 M9 與 2026 年擴產計畫不變，凱基上調目標價。",
    tags: ["AWS", "M9", "擴產"]
  },
  {
    id: "2025-08-25-6274-yuanta", code: "6274", broker: "yuanta", date: "2025-08-25",
    title: "短期受惠中低階 CCL 漲價，長期 M8 銅箔有望升級",
    ratingRaw: "買進（維持）", rating: "positive",
    targetPrice: 385, targetRange: null, prevTargetPrice: 287, price: 320.5, currency: "TWD",
    valuation: "21x 2026F EPS",
    epsForecast: {"2025F": 11.51, "2026F": 18.22},
    summary: "2Q25 受匯率與泰國廠試產影響毛利率，但中低階 CCL 開始漲價、M8 銅箔升級在即，元大上修目標價至 385 元。",
    tags: ["CCL 漲價", "HVLP", "泰國廠"]
  },
  {
    id: "2026-01-26-6274-yuanta", code: "6274", broker: "yuanta", date: "2026-01-26",
    title: "泰國廠新產能 2Q26 加入貢獻，產品組合改善",
    ratingRaw: "買進", rating: "positive",
    targetPrice: 600, targetRange: null, prevTargetPrice: null, price: 504, currency: "TWD",
    valuation: "22x 2H26–1H27 EPS",
    epsForecast: {"2026F": 22.29, "2027F": 32.11},
    summary: "ASIC、800G 持續放量，PCIe 6.0 帶動一般伺服器 CCL 升級，泰國新產能 2Q26 加入，元大給予買進、目標價 600 元。",
    tags: ["泰國廠", "800G", "PCIe 6.0"]
  },
  {
    id: "2026-01-19-6274-kgi", code: "6274", broker: "kgi", date: "2026-01-19",
    title: "AI 伺服器及 800G 交換機帶動 4Q25 營收優預期",
    ratingRaw: "增加持股", rating: "positive",
    targetPrice: 572, targetRange: null, prevTargetPrice: 530, price: 470.5, currency: "TWD",
    valuation: "20x 2026–27F 平均 EPS",
    epsForecast: {"2026F": 23.39, "2027F": 33.83},
    summary: "4Q25 營收年增 45% 優於預期，1Q26 漲價加上 AWS Trainium3 放量，凱基上調兩年獲利與目標價。",
    tags: ["800G", "Trainium3", "電源板"]
  },
  {
    id: "2025-11-17-6274-kgi", code: "6274", broker: "kgi", date: "2025-11-17",
    title: "受惠 AI 伺服器 PCB 高速多層趨勢帶動營運向上",
    ratingRaw: "增加持股（重啟評等）", rating: "positive",
    targetPrice: 530, targetRange: null, prevTargetPrice: null, price: 411.5, currency: "TWD",
    valuation: "20x 2026–27F 平均 EPS",
    epsForecast: {"2026F": 21.54, "2027F": 31.42},
    summary: "凱基重啟台燿評等，看好 AI 伺服器 PCB 層數與材料升級，以及切入美系 ASIC 伺服器 UBB 主板。",
    tags: ["重啟評等", "HVLP", "1.6T"]
  },
  {
    id: "2025-11-21-6515-masterlink", code: "6515", broker: "masterlink", date: "2025-11-21",
    title: "AI 推動測試需求成長，營運展望正向",
    ratingRaw: "BUY", rating: "positive",
    targetPrice: 2900, targetRange: null, prevTargetPrice: 2600, price: 2310, currency: "TWD",
    valuation: "40x 2026F EPS",
    epsForecast: {"2025F": 43.92, "2026F": 73.46},
    summary: "4Q25 主要客戶測試座拉貨強、MEMS 持續放量，元富預估 2026 年 EPS 年增 67%，目標價上修至 2,900 元。",
    tags: ["MEMS 探針卡", "彈簧針", "海外布局"]
  },
  {
    id: "2025-11-21-6515-fubon", code: "6515", broker: "fubon", date: "2025-11-21",
    title: "新業務開始湧現，目標價上修至 2,700 元",
    ratingRaw: "買進", rating: "positive",
    targetPrice: 2700, targetRange: null, prevTargetPrice: 2600, price: 2350, currency: "TWD",
    valuation: "37x 2026F EPS",
    epsForecast: {"2025F": 46.38, "2026F": 73.3, "2027F": 92.81},
    summary: "3Q25 毛利率不如預期，但 MEMS 探針卡比預期提早放量、產能將擴至每月 600–700 萬針，富邦重申買進。",
    tags: ["MEMS 探針卡", "HyperSocket", "產能"]
  },
  {
    id: "2026-01-08-6515-gs", code: "6515", broker: "gs", date: "2026-01-08",
    title: "新 SLT 市場突破支撐多年成長",
    ratingRaw: "Buy", rating: "positive",
    targetPrice: 4500, targetRange: null, prevTargetPrice: 2550, price: 3175, currency: "TWD",
    valuation: "34x 2027E EPS",
    epsForecast: {"2026E": 90.98, "2027E": 131.2},
    summary: "高盛認為穎崴已打入美系 AI GPU/ASIC 客戶的 SLT 市場，2026 年營收可望年增 66%，目標價由 2,550 元調到 4,500 元。",
    tags: ["SLT", "MEMS", "外資"]
  },
  {
    id: "2026-01-28-6515-bofa", code: "6515", broker: "bofa", date: "2026-01-28",
    title: "晶片測試重要性提升下的領導者",
    ratingRaw: "Buy（首評）", rating: "positive",
    targetPrice: 5300, targetRange: null, prevTargetPrice: null, price: 4275, currency: "TWD",
    valuation: "33x 2027E EPS",
    epsForecast: {"2026E":  96.17, "2027E":  158.7},
    summary: "美銀首次覆蓋即給買進，看好穎崴聚焦 AI/HPC，以及透過 HyperSocket 切入規模為 FT 4–5 倍的 SLT 市場。",
    tags: ["首評", "HyperSocket", "Coaxial Socket"]
  },
  {
    id: "2026-02-25-6515-citi", code: "6515", broker: "citi", date: "2026-02-25",
    title: "4Q25 符合預期，結構性成長不變",
    ratingRaw: "Buy / High Risk", rating: "positive",
    targetPrice: 6000, targetRange: null, prevTargetPrice: null, price: 5000, currency: "TWD",
    valuation: "40x 2027E EPS",
    epsForecast: {},
    summary: "4Q25 淨利符合花旗預估，毛利率被 MEMS 第一階段稀釋；與 Technoprobe 合作進入第二階段後利潤可望明顯改善。",
    tags: ["財報", "Technoprobe", "股利"]
  },
  {
    id: "2026-02-26-6515-gs", code: "6515", broker: "gs", date: "2026-02-26",
    title: "MEMS 放量與新 AI 專案推升 2027 年成長",
    ratingRaw: "Buy", rating: "positive",
    targetPrice: 6300, targetRange: null, prevTargetPrice: 4500, price: 5000, currency: "TWD",
    valuation: "34x 2027E EPS",
    epsForecast: {"2026E": 91.63, "2027E": 183.67},
    summary: "4Q25 毛利率低於預期，但新 MEMS 採購合約 1Q26 生效、FT/SLT 放量，高盛大幅上修 2027 年 EPS 並調高目標價。",
    tags: ["財報", "MEMS", "2027 成長"]
  },
  {
    id: "2026-05-05-6515-ms", code: "6515", broker: "ms", date: "2026-05-05",
    title: "AI 成長與手機市占提升推動 2Q 前景",
    ratingRaw: "Overweight", rating: "positive",
    targetPrice: 12000, targetRange: null, prevTargetPrice: null, price: 10700, currency: "TWD",
    valuation: "剩餘收益模型",
    epsForecast: {"2026e":  103.9, "2027e":  196.87, "2028e":  347.54},
    summary: "1Q26 EPS 19.54 元符合預期，手機 SoC 市占提升與下一代 AI GPU/CPU 帶動 2Q 營收再季增約兩成。",
    tags: ["手機", "Cobra", "CPO"]
  },
  {
    id: "2026-05-05-6515-gs", code: "6515", broker: "gs", date: "2026-05-05",
    title: "1Q26 本業符合預期，強勁成長延續至 2027 年後",
    ratingRaw: "Buy", rating: "positive",
    targetPrice: 15000, targetRange: null, prevTargetPrice: null, price: 10700, currency: "TWD",
    valuation: "—",
    epsForecast: {"2026E": 103.68, "2027E": 224.1, "2028E": 426.09},
    summary: "1Q26 營收比高盛預估高 4%，高盛把 2026 年營收成長預估從 71% 拉高到 90%，並首次給出 2028 年預估，目標價升至 15,000 元。",
    tags: ["財報", "AI 加速器", "2028 預估"]
  },
  {
    id: "2026-05-04-6515-kgi", code: "6515", broker: "kgi", date: "2026-05-04",
    title: "AI 強勁動能延續，營運能見度延伸至未來三年",
    ratingRaw: "增加持股", rating: "positive",
    targetPrice: 13000, targetRange: null, prevTargetPrice: 8500, price: 10700, currency: "TWD",
    valuation: "50x 2028F EPS",
    epsForecast: {"2026F":  91.71, "2027F":  169.35, "2028F":  268.63},
    summary: "Agentic AI 讓美系 server CPU 客戶兩度上修訂單，凱基估 2025–28 年獲利年複合成長 79%，目標價調升至 13,000 元。",
    tags: ["Agentic AI", "Server CPU", "探針卡潛力"]
  },
  {
    id: "2026-05-11-6515-esun", code: "6515", broker: "esun", date: "2026-05-11",
    title: "AI 需求強勁推升營收成長，調升評等",
    ratingRaw: "增加持股（調升）", rating: "positive",
    targetPrice: 11200, targetRange: null, prevTargetPrice: null, price: 9630, currency: "TWD",
    valuation: "55x 2028F EPS",
    epsForecast: {"2026F":  86.79, "2027F":  143.55, "2028F":  203.66},
    summary: "AI 推論與代理式 AI 帶動 server CPU 需求大增，SLT 測試座用量約為 FT 的 5 倍，玉山調升評等至增加持股。",
    tags: ["AI 推論", "Server CPU", "調升評等"]
  },
  {
    id: "2026-05-14-6515-gs", code: "6515", broker: "gs", date: "2026-05-14",
    title: "CPO 測試的瓶頸與機會",
    ratingRaw: "Buy", rating: "positive",
    targetPrice: 15000, targetRange: null, prevTargetPrice: null, price: 10540, currency: "TWD",
    valuation: "—",
    epsForecast: {"2026E": 103.68, "2027E": 224.1},
    summary: "高盛參加穎崴 CPO 論壇，管理層說明矽光子/CPO 架構與測試流程，穎崴在新興 CPO 生態系中具備測試介面切入點。",
    tags: ["CPO", "矽光子", "論壇"]
  },
  {
    id: "2026-05-15-6515-ms", code: "6515", broker: "ms", date: "2026-05-15",
    title: "CPO 論壇重點：測試瓶頸與解決方案",
    ratingRaw: "Overweight", rating: "positive",
    targetPrice: 12000, targetRange: null, prevTargetPrice: null, price: 10540, currency: "TWD",
    valuation: "剩餘收益模型",
    epsForecast: {},
    summary: "CPO 可望擴展到 12.8T 以上，光學對位與模組測試仍是瓶頸；穎崴聚焦 CPO/CPC 測試座，更大中介層與玻璃基板支撐未來擴展。",
    tags: ["CPO", "玻璃基板", "技術路線"]
  },
  {
    id: "2026-05-25-6515-ms", code: "6515", broker: "ms", date: "2026-05-25",
    title: "基本面不變，測試座產能持續提升",
    ratingRaw: "Overweight", rating: "positive",
    targetPrice: 12000, targetRange: null, prevTargetPrice: null, price: 8700, currency: "TWD",
    valuation: "剩餘收益模型",
    epsForecast: {},
    summary: "股價因 Vera CPU 探針卡市占疑慮與 4 月營收偏弱單日跌 8.5%，摩根士丹利認為市占沒有變化，回檔是布局點。",
    tags: ["股價回檔", "Vera CPU", "探針卡"]
  },
  {
    id: "2026-05-26-6515-gs", code: "6515", broker: "gs", date: "2026-05-26",
    title: "長期市場加速擴張，擴產能見度延伸至 2030 年",
    ratingRaw: "Buy", rating: "positive",
    targetPrice: 15000, targetRange: null, prevTargetPrice: null, price: 8905, currency: "TWD",
    valuation: "—",
    epsForecast: {"2026E": 103.68, "2027E": 224.1, "2028E": 426.09},
    summary: "管理層認為年成長 50–60% 可能仍偏保守，擴產規劃延伸到 2030 年，高盛維持買進、目標價 15,000 元。",
    tags: ["法說會", "擴產", "MEMS"]
  },
  {
    id: "2026-05-26-6515-kgi", code: "6515", broker: "kgi", date: "2026-05-26",
    title: "AI 需求強勁擴產能，獲利顯著提升",
    ratingRaw: "增加持股", rating: "positive",
    targetPrice: 13000, targetRange: null, prevTargetPrice: null, price: 8905, currency: "TWD",
    valuation: "50x 2028F EPS",
    epsForecast: {},
    summary: "1Q26 營收季增 33%，MEMS 訂單量為 2025 年兩倍；仁武二廠提前至 2Q27 投產，公司目標每年產能倍增到 2030 年。",
    tags: ["法說會", "HyperSocket", "擴產"]
  },
  {
    id: "2026-05-27-6515-hnc", code: "6515", broker: "hnc", date: "2026-05-27",
    title: "成長動能明確，產品組合持續優化",
    ratingRaw: "買進", rating: "positive",
    targetPrice: 10000, targetRange: null, prevTargetPrice: 2600, price: 8905, currency: "TWD",
    valuation: "100x 2026F EPS",
    epsForecast: {"2026F": 105.38},
    summary: "AI 晶片帶動精密微鑽孔需求，單一組件孔數由 1 萬升到 2 萬孔，形成技術門檻；華南估 2026 年 EPS 105 元，給買進。",
    tags: ["微鑽孔", "技術護城河", "法說會"]
  },
  {
    id: "2026-06-02-6515-ms", code: "6515", broker: "ms", date: "2026-06-02",
    title: "亞洲 AI 峰會回饋：大封裝推升測試介面需求",
    ratingRaw: "Overweight", rating: "positive",
    targetPrice: 15000, targetRange: null, prevTargetPrice: 12000, price: 8665, currency: "TWD",
    valuation: "剩餘收益模型",
    epsForecast: {"2026e":  94.88, "2027e":  205.18, "2028e":  436.93},
    summary: "每座測試座腳數由 4–6K 升到 10K 以上，Burn-in 與 SLT 擴大市場；彈簧針自製率長期目標 50–60%。",
    tags: ["Burn-in", "腳數", "自製率"]
  },
  {
    id: "2026-06-10-6515-ms", code: "6515", broker: "ms", date: "2026-06-10",
    title: "5 月營收優於擔憂，新產能與 AI 需求強勁",
    ratingRaw: "Overweight", rating: "positive",
    targetPrice: 15000, targetRange: null, prevTargetPrice: null, price: 8610, currency: "TWD",
    valuation: "剩餘收益模型",
    epsForecast: {},
    summary: "5 月營收年增 120%，優於買方預期的持平；新測試座產能陸續開出，大摩認為以 2026 年 42 倍本益比是布局點。",
    tags: ["月營收", "Google TPU", "回檔布局"]
  },
  {
    id: "2026-01-20-2449-yuanta", code: "2449", broker: "yuanta", date: "2026-01-20",
    title: "AI GPU/ASIC 測試主導地位不變",
    ratingRaw: "買進", rating: "positive",
    targetPrice: 330, targetRange: null, prevTargetPrice: null, price: 271.5, currency: "TWD",
    valuation: "—",
    epsForecast: {"2026F": 9.9, "2027F": 13.7},
    summary: "京元電自製 Burn-in 爐，已通過 R 世代驗證並量產，對手短期難以取代；高毛利的 CP 業務將成為另一個成長加速器。",
    tags: ["Burn-in", "AI GPU", "CP"]
  },
  {
    id: "2026-01-27-2449-kgi", code: "2449", broker: "kgi", date: "2026-01-27",
    title: "AI 晶片的把關者",
    ratingRaw: "增加持股（首評）", rating: "positive",
    targetPrice: 350, targetRange: null, prevTargetPrice: null, price: 300, currency: "TWD",
    valuation: "26x 2027F EPS",
    epsForecast: {"2026F":  9.81, "2027F":  13.46},
    summary: "凱基首次覆蓋京元電，認為測試被市場低估；Rubin 測試時間比 Blackwell 多 50–100%，Google TPU 也將導入 Burn-in。",
    tags: ["首評", "TPU", "CP 外溢"]
  },
  {
    id: "2025-10-31-3711-yuanta", code: "3711", broker: "yuanta", date: "2025-10-31",
    title: "準備迎接先進封測成長周期",
    ratingRaw: "買進（維持）", rating: "positive",
    targetPrice: 260, targetRange: null, prevTargetPrice: 173, price: 225, currency: "TWD",
    valuation: "—",
    epsForecast: {"2025F": 8.78, "2026F": 14.1},
    summary: "3Q25 EPS 優於預期 22%，ATM 產能利用率升至七成多，LEAP 毛利改善與報價回升，元大大幅上修目標價。",
    tags: ["產能利用率", "LEAP", "匯率"]
  },
  {
    id: "2025-10-30-3711-kgi", code: "3711", broker: "kgi", date: "2025-10-30",
    title: "多項營收動能正在浮現",
    ratingRaw: "持有", rating: "neutral",
    targetPrice: 230, targetRange: null, prevTargetPrice: 155, price: 225, currency: "TWD",
    valuation: "17x 本益比",
    epsForecast: {"2026F":  13.38, "2027F":  16.2},
    summary: "3Q25 因新台幣升值幅度遠低於預期而大幅優於預估，凱基上調目標價 48%，但上檔空間有限，維持持有。",
    tags: ["匯率", "資本支出", "CoW 外溢"]
  },
  {
    id: "2026-02-02-3711-yuanta", code: "3711", broker: "yuanta", date: "2026-02-02",
    title: "被低估的 LEAP 業務將進入快速上升週期",
    ratingRaw: "買進（首選）", rating: "positive",
    targetPrice: 400, targetRange: null, prevTargetPrice: 260, price: 297, currency: "TWD",
    valuation: "—",
    epsForecast: {"2026F": 16.95, "2027F": 22.21},
    summary: "元大認為公司 LEAP 指引過於保守，台積電 CoWoS-S 產能受限、ASIC 客戶轉向日月光，估 LEAP 營收 2024–27 年 CAGR 達 126%。",
    tags: ["首選", "CoWoS", "LEAP"]
  },
  {
    id: "2026-02-05-3711-kgi", code: "3711", broker: "kgi", date: "2026-02-05",
    title: "更強的需求、更好的產品組合及更高的資本支出",
    ratingRaw: "增加持股（調升）", rating: "positive",
    targetPrice: 345, targetRange: null, prevTargetPrice: 230, price: 284, currency: "TWD",
    valuation: "17x 2027F EPS",
    epsForecast: {"2026F":  14.85, "2027F":  20.32},
    summary: "4Q25 EPS 3.37 元優於預期三成，LEAP 2026 年營收目標上調至 32 億美元，凱基把評等從持有調升為增加持股。",
    tags: ["調升評等", "LEAP", "資本支出"]
  },
  {
    id: "2026-02-06-3711-yuanta", code: "3711", broker: "yuanta", date: "2026-02-06",
    title: "LEAP 長期成長趨勢不變",
    ratingRaw: "買進", rating: "positive",
    targetPrice: 400, targetRange: null, prevTargetPrice: null, price: 284, currency: "TWD",
    valuation: "—",
    epsForecast: {"2026F": 16.95, "2027F": 22.21},
    summary: "1Q26 財測優於預期，公司將 LEAP 2026 年營收目標上修至 32 億美元，一站式封裝業務年增 300%。",
    tags: ["法說會", "LEAP", "毛利率"]
  },
  {
    id: "2025-11-07-6561-masterlink", code: "6561", broker: "masterlink", date: "2025-11-07",
    title: "短期獲利亂流，無礙 LY2 長期營運助益",
    ratingRaw: "BUY", rating: "positive",
    targetPrice: 490, targetRange: null, prevTargetPrice: 550, price: 356, currency: "TWD",
    valuation: "—",
    epsForecast: {"2025F":  15.49, "2026F":  17.51},
    summary: "大型客戶客製化建置多已完成、部分客戶因 AI 伺服器缺貨延後進駐，3Q25 低於預期；長期仍看月租收入成長。",
    tags: ["IDC", "資料中心", "下修"]
  },
  {
    id: "2025-06-27-2360-jpm", code: "2360", broker: "jpm", date: "2025-06-27",
    title: "對量測業務前景信心提升",
    ratingRaw: "Overweight", rating: "positive",
    targetPrice: 480, targetRange: null, prevTargetPrice: 425, price: 429.5, currency: "TWD",
    valuation: "25x 2026E EPS",
    epsForecast: {"2025E":  16.81, "2026E":  19.16},
    summary: "小摩看好致茂量測（Metrology）業務在關鍵日系客戶帶動下成長，以 2026 年 EPS 25 倍評價，目標價 480 元。",
    tags: ["量測", "外資", "早期報告"]
  },
  {
    id: "2026-02-09-2360-yuanta", code: "2360", broker: "yuanta", date: "2026-02-09",
    title: "CSP 上修資本支出，AI 產品動能持續上修",
    ratingRaw: "買進（首選）", rating: "positive",
    targetPrice: 1300, targetRange: null, prevTargetPrice: 960, price: 967, currency: "TWD",
    valuation: "—",
    epsForecast: {"2026F": 35.44, "2027F": 48.4},
    summary: "電源廠擴充測試產能、AI GPU/ASIC 備置 SLT、CoWoS 設備提前拉貨、光通訊 Burn-in，元大估 1Q26 營收年增 59%。",
    tags: ["首選", "SLT", "Power testing"]
  },
  {
    id: "2026-02-26-2360-yuanta", code: "2360", broker: "yuanta", date: "2026-02-26",
    title: "AI 業務維持強勁，CPO 新設備通過大客戶驗證",
    ratingRaw: "買進（首選）", rating: "positive",
    targetPrice: 1600, targetRange: null, prevTargetPrice: 1300, price: 1255, currency: "TWD",
    valuation: "—",
    epsForecast: {"2026F": 37.53, "2027F": 54.98},
    summary: "CPO 測試機通過美系客戶驗證，光收發模組 Burn-in 訂單已超越量測業務，元大估 2026 年營收年增 61%。",
    tags: ["CPO", "法說會", "Burn-in"]
  },
  {
    id: "2026-01-12-7769-yuanta", code: "7769", broker: "yuanta", date: "2026-01-12",
    title: "基本面上行加速，SLT 市占擴張確立",
    ratingRaw: "買進（首選）", rating: "positive",
    targetPrice: 4500, targetRange: null, prevTargetPrice: 3800, price: 3295, currency: "TWD",
    valuation: "—",
    epsForecast: {"2026F": 129.0, "2027F": 176.81},
    summary: "市場誤傳 TPU 全數改用同業 SLT 分選機，元大查證後認為 v7 仍獨家採用鴻勁 FT 分選機，v8e 也確定採用鴻勁 SLT。",
    tags: ["分選機", "TPU", "SLT"]
  },
  {
    id: "2026-05-10-7769-aletheia", code: "7769", broker: "aletheia", date: "2026-05-10",
    title: "多晶粒架構推升測試需求持續加速",
    ratingRaw: "Buy", rating: "positive",
    targetPrice: 10000, targetRange: null, prevTargetPrice: 6200, price: 5800, currency: "TWD",
    valuation: "—",
    epsForecast: {},
    summary: "Aletheia 認為多晶粒架構帶來全新失效模式，測試需求只會加速，上修 2026–28 年 EPS 12–44%，目標價升至 10,000 元。",
    tags: ["多晶粒", "高風險", "外資"]
  },
  {
    id: "2026-05-11-3481-ms", code: "3481", broker: "ms", date: "2026-05-11",
    title: "1Q26 利潤率優於預期，2Q26 指引符合",
    ratingRaw: "Equal-weight", rating: "neutral",
    targetPrice: 19.5, targetRange: null, prevTargetPrice: null, price: 32.3, currency: "TWD",
    valuation: "—",
    epsForecast: {},
    summary: "群創 1Q26 營業利益轉正、優於預期，但大摩目標價 19.5 元遠低於股價 32.3 元，維持中立。",
    tags: ["面板", "轉虧為盈", "目標價低於股價"]
  },
  {
    id: "2025-11-12-3017-fubon", code: "3017", broker: "fubon", date: "2025-11-12",
    title: "GB300、ASIC 延續高供應份額",
    ratingRaw: "買進", rating: "positive",
    targetPrice: 1820, targetRange: null, prevTargetPrice: 1500, price: 1505, currency: "TWD",
    valuation: "26x 2026F EPS",
    epsForecast: {"2025F": 50.5, "2026F": 70.0, "2027F": 80.0},
    summary: "3Q25 毛利率與營益率創新高，GB300、ASIC 新品 4Q25 放量；下一代 Vera Rubin 散熱採用 MCCP 對奇鋐有利。",
    tags: ["GB300", "MCCP", "機箱"]
  },
  {
    id: "2025-11-19-3017-ms", code: "3017", broker: "ms", date: "2025-11-19",
    title: "亞太峰會回饋：AI 伺服器液冷模組展望佳",
    ratingRaw: "Overweight", rating: "positive",
    targetPrice: 1800, targetRange: null, prevTargetPrice: null, price: 1340, currency: "TWD",
    valuation: "23x 2026e EPS",
    epsForecast: {"2026e":  77.6, "2027e":  100.32},
    summary: "大摩在亞太峰會後維持奇鋐加碼，看好 AI 資料中心液冷散熱需求；風險在於散熱需求放緩與競爭加劇。",
    tags: ["峰會", "液冷", "5G"]
  },
  {
    id: "2025-11-24-3017-ms", code: "3017", broker: "ms", date: "2025-11-24",
    title: "2026 年獲利如何年增逾五成",
    ratingRaw: "Overweight", rating: "positive",
    targetPrice: 1800, targetRange: null, prevTargetPrice: null, price: 1245, currency: "TWD",
    valuation: "23x 2026e EPS",
    epsForecast: {},
    summary: "大摩估奇鋐 2026 年營業利益年增 41%、淨利年增 54%，營益率擴至 22%；2026 年本益比 16 倍低於一年均值 21 倍。",
    tags: ["液冷", "獲利成長", "Nvidia 直供"]
  },
  {
    id: "2025-11-27-3017-kgi", code: "3017", broker: "kgi", date: "2025-11-27",
    title: "GPU 與 ASIC 對 2026–27 年液冷營收更加正向",
    ratingRaw: "增加持股", rating: "positive",
    targetPrice: 1800, targetRange: null, prevTargetPrice: 1695, price: 1395, currency: "TWD",
    valuation: "24x 2026F EPS",
    epsForecast: {"2026F":  75.0, "2027F":  107.65},
    summary: "Vera Rubin 採全液冷設計，水冷板單價雖降三成，但分歧管與快接頭價值提升，每運算托盤液冷價值較 GB300 增逾三成。",
    tags: ["Vera Rubin", "分歧管", "快接頭"]
  },
  {
    id: "2025-12-09-3017-gs", code: "3017", broker: "gs", date: "2025-12-09",
    title: "液冷滲透與規格升級，研發強化競爭力",
    ratingRaw: "Buy", rating: "positive",
    targetPrice: 1734, targetRange: null, prevTargetPrice: null, price: 1410, currency: "TWD",
    valuation: "近期本益比",
    epsForecast: {},
    summary: "高盛亞洲科技之旅會晤奇鋐管理層，管理層對 2026 年保持正向，將研發資源集中在領先客戶並持續擴產。",
    tags: ["研發", "擴產", "法說"]
  },
  {
    id: "2025-12-11-3017-jpm", code: "3017", broker: "jpm", date: "2025-12-11",
    title: "液冷專案與手機 VC 成長動能強勁",
    ratingRaw: "Overweight", rating: "positive",
    targetPrice: 1770, targetRange: null, prevTargetPrice: 1700, price: 1430, currency: "TWD",
    valuation: "20x 2027E EPS",
    epsForecast: {},
    summary: "小摩認為奇鋐作為內部分歧管主要供應商，可抵銷水冷板降價影響；手機均熱板（VC）內容成長是另一動能。",
    tags: ["分歧管", "手機 VC", "外資"]
  },
  {
    id: "2025-11-24-3324-jpm", code: "3324", broker: "jpm", date: "2025-11-24",
    title: "調降至中立：MCL 將限制估值",
    ratingRaw: "Neutral（調降）", rating: "neutral",
    targetPrice: 870, targetRange: null, prevTargetPrice: 810, price: 892, currency: "TWD",
    valuation: "18x 2H26–1H27E EPS",
    epsForecast: {"2025E":  30.24, "2026E":  47.79},
    summary: "小摩認為 2H26 起部分 Rubin GPU 改用微通道蓋板（MCL）取代冷板，將壓抑雙鴻的成長與評價，調降為中立。",
    tags: ["調降評等", "MCL", "冷板"]
  },
  {
    id: "2025-12-09-3324-gs", code: "3324", broker: "gs", date: "2025-12-09",
    title: "2026 年液冷滲透提升，AI ASIC 伺服器轉向液冷",
    ratingRaw: "Buy", rating: "positive",
    targetPrice: 1283, targetRange: null, prevTargetPrice: null, price: 901, currency: "TWD",
    valuation: "近期本益比",
    epsForecast: {},
    summary: "11 月營收年增 78%，AI ASIC 伺服器轉向液冷，雙鴻持續開發新 ASIC 客戶；高盛與小摩看法分歧。",
    tags: ["ASIC", "MCL", "月營收"]
  },
  {
    id: "2026-01-06-2383-clsa", code: "2383", broker: "clsa", date: "2026-01-06",
    title: "Nvidia Rubin 架構推升 M9 CCL 需求",
    ratingRaw: "Outperform", rating: "positive",
    targetPrice: 2130, targetRange: null, prevTargetPrice: null, price: 1590, currency: "TWD",
    valuation: "—",
    epsForecast: {"2026F":  62.11, "2027F":  85.43},
    summary: "台光電滿載運作，原料成本上漲可轉嫁，提升議價能力；Rubin 架構新增 M9 用量，CLSA 上修兩年 EPS 9–10%。",
    tags: ["Rubin", "M9", "外資"]
  },
  {
    id: "2025-10-31-2327-fubon", code: "2327", broker: "fubon", date: "2025-10-31",
    title: "鉭電容需求非常強勁",
    ratingRaw: "買進", rating: "positive",
    targetPrice: 300, targetRange: null, prevTargetPrice: 221, price: 249, currency: "TWD",
    valuation: "21x 2026F EPS",
    epsForecast: {"2025F": 11.41, "2026F": 14.34, "2027F": 15.66},
    summary: "3Q25 毛利率 36.2% 優於預期，鉭電容因 AI 需求出貨比重升至 23%，富邦上調目標價至 300 元。",
    tags: ["鉭質電容", "AI", "庫存健康"]
  },
  {
    id: "2026-02-26-2327-fubon", code: "2327", broker: "fubon", date: "2026-02-26",
    title: "1Q26 營運將繼續向上",
    ratingRaw: "買進", rating: "positive",
    targetPrice: 362, targetRange: null, prevTargetPrice: 300, price: 300, currency: "TWD",
    valuation: "23.5x 2026F EPS",
    epsForecast: {"2025A": 11.51, "2026F": 15.42, "2027F": 16.6},
    summary: "4Q25 與 2025 全年獲利創新高，農曆年淡季不淡，漲價效益逐步顯現，富邦上調目標價至 362 元。",
    tags: ["漲價", "創新高", "淡季不淡"]
  },
  {
    id: "2026-02-26-2327-horizon", code: "2327", broker: "horizon", date: "2026-02-26",
    title: "2025 年 EPS 創次高，2026 年全產品線成長",
    ratingRaw: "買進", rating: "positive",
    targetPrice: 350, targetRange: null, prevTargetPrice: 300, price: null, currency: "TWD",
    valuation: "25x 2026F EPS",
    epsForecast: {"2025A": 11.51, "2026F": 14.0},
    summary: "AI 相關營收約占 13%，客戶庫存健康、1Q26 接單暢旺，宏遠估 2026 年營收逾 1,500 億元，目標價 350 元。",
    tags: ["AI 占比", "配息", "全產品線"]
  },
  {
    id: "2026-02-26-2327-masterlink", code: "2327", broker: "masterlink", date: "2026-02-26",
    title: "4Q25 財報優於預期，調升至買進",
    ratingRaw: "BUY（由 HOLD 調升）", rating: "positive",
    targetPrice: 350, targetRange: null, prevTargetPrice: 280, price: 298, currency: "TWD",
    valuation: "—",
    epsForecast: {"2026F": 16.2},
    summary: "4Q25 EPS 3.29 元優於預估，產能利用率提升與產品組合優化，1Q26 淡季不淡，元富把評等從 HOLD 調升為 BUY。",
    tags: ["調升評等", "稼動率", "BB 值"]
  },
  {
    id: "2025-10-14-8046-kgi", code: "8046", broker: "kgi", date: "2025-10-14",
    title: "缺布效應擴大，ABF 迎來漲價",
    ratingRaw: "增加持股（調升）", rating: "positive",
    targetPrice: 330, targetRange: null, prevTargetPrice: 206, price: 256, currency: "TWD",
    valuation: "28x 2026F EPS",
    epsForecast: {"2026F":  11.79, "2027F":  18.16},
    summary: "T-glass 玻纖布缺貨讓 BT 與 ABF 載板提前漲價，凱基把南電從持有調升為增加持股，目標價上調六成。",
    tags: ["T-glass", "ABF 漲價", "調升評等"]
  },
  {
    id: "2025-11-05-8046-kgi", code: "8046", broker: "kgi", date: "2025-11-05",
    title: "3Q25 受匯率影響，ABF 與 BT 漲價可延續",
    ratingRaw: "增加持股", rating: "positive",
    targetPrice: 330, targetRange: null, prevTargetPrice: null, price: 272, currency: "TWD",
    valuation: "28x 2026F EPS",
    epsForecast: {},
    summary: "3Q25 毛利率受匯率影響略低於共識，但業外匯兌利益讓 EPS 符合共識；ABF 與 BT 漲價可持續到 1Q26。",
    tags: ["財報", "匯率", "漲價"]
  },
  {
    id: "2025-11-18-8046-yuanta", code: "8046", broker: "yuanta", date: "2025-11-18",
    title: "T-glass 緊缺、高階 ABF 及記憶體需求為 2026 年動能",
    ratingRaw: "買進（維持）", rating: "positive",
    targetPrice: 340, targetRange: null, prevTargetPrice: 210, price: 272.5, currency: "TWD",
    valuation: "—",
    epsForecast: {"2025F": 2.37, "2026F": 8.97},
    summary: "3Q25 匯兌利益讓 EPS 優於預期，T-glass 緊缺推升 BT 與 ABF 報價，元大估 2026 年 EPS 成長近四倍。",
    tags: ["T-glass", "ABF", "記憶體"]
  },
  {
    id: "2026-01-21-8046-kgi", code: "8046", broker: "kgi", date: "2026-01-21",
    title: "漲價效應使 12 月獲利優預期",
    ratingRaw: "增加持股", rating: "positive",
    targetPrice: 455, targetRange: null, prevTargetPrice: 330, price: 361, currency: "TWD",
    valuation: "25x 2026–27F 平均 EPS",
    epsForecast: {"2026F":  13.58, "2027F":  22.87},
    summary: "12 月單月 EPS 0.84 元，漲價、匯兌與低稅率讓 4Q25 獲利優於預期；樹林廠 1Q26 可望滿載，凱基上調目標價至 455 元。",
    tags: ["漲價", "樹林廠", "大尺寸載板"]
  },
  {
    id: "2025-10-14-3189-kgi", code: "3189", broker: "kgi", date: "2025-10-14",
    title: "受惠缺布效應擴大，ABF 展開漲價週期",
    ratingRaw: "增加持股（調升）", rating: "positive",
    targetPrice: 168, targetRange: null, prevTargetPrice: null, price: 122.5, currency: "TWD",
    valuation: "22x 2026F EPS",
    epsForecast: {"2026F":  7.67, "2027F":  10.9},
    summary: "BT 與 ABF 因 T-glass 缺布提前漲價，凱基把景碩由持有調升為增加持股，預期 2026 年 ABF 每季漲 2–4%。",
    tags: ["T-glass", "漲價", "調升評等"]
  },
  {
    id: "2025-10-27-3189-kgi", code: "3189", broker: "kgi", date: "2025-10-27",
    title: "3Q25 毛利率受匯率影響，4Q25 載板漲價持續",
    ratingRaw: "增加持股", rating: "positive",
    targetPrice: 168, targetRange: null, prevTargetPrice: 168, price: 148.5, currency: "TWD",
    valuation: "22x 2026F EPS",
    epsForecast: {},
    summary: "營收認列遞延兩個月讓匯率影響放大，3Q25 EPS 0.74 元低於共識；4Q25 ABF 與 BT 持續漲價約 3%。",
    tags: ["財報", "匯率", "缺布"]
  },
  {
    id: "2025-11-05-3189-kgi", code: "3189", broker: "kgi", date: "2025-11-05",
    title: "2026 年營收目標年增 15%，漲價延續至 1Q26",
    ratingRaw: "增加持股", rating: "positive",
    targetPrice: 168, targetRange: null, prevTargetPrice: null, price: 132.5, currency: "TWD",
    valuation: "22x 2026F EPS",
    epsForecast: {},
    summary: "公司目標 2026 年營收年增 15%、毛利率 25%；每季平均漲價 3–5% 反映原料成本，並辦現金增資擴充高層數 ABF 產能。",
    tags: ["法說", "擴產", "現金增資"]
  },
  {
    id: "2025-11-07-3189-yuanta", code: "3189", broker: "yuanta", date: "2025-11-07",
    title: "2026 年 AI 業務正向成長，漲價至少延續至 1H26",
    ratingRaw: "買進（維持）", rating: "positive",
    targetPrice: 155, targetRange: null, prevTargetPrice: 125, price: 130, currency: "TWD",
    valuation: "—",
    epsForecast: {"2025F": 3.01, "2026F": 5.58},
    summary: "旺季與漲價讓 3Q25 營收優於預期，但匯率讓毛利率低於預期；元大看好 2026 年 AI 業務並上修目標價。",
    tags: ["AI 載板", "漲價", "匯率"]
  },
  {
    id: "2026-06-30-3189-esun", code: "3189", broker: "esun", date: "2026-06-30",
    title: "受惠 CPU 及記憶體強勁需求，產能積極擴增",
    ratingRaw: "增加持股（調升）", rating: "positive",
    targetPrice: 950, targetRange: null, prevTargetPrice: null, price: 810, currency: "TWD",
    valuation: "35x 2027F EPS",
    epsForecast: {"2026F":  9.22, "2027F":  26.96, "2028F":  57.66},
    summary: "Agentic AI 帶動 CPU 需求，管理層預估 2027 年 CPU 營收占比升至 15%；ABF 2H26 進入供不應求，擴產規劃到 2029 年。",
    tags: ["CPU 載板", "TPU", "擴產"]
  },
  {
    id: "2026-06-30-3189-masterlink", code: "3189", broker: "masterlink", date: "2026-06-30",
    title: "積極擴產搶市占",
    ratingRaw: "BUY", rating: "positive",
    targetPrice: 1250, targetRange: null, prevTargetPrice: null, price: 891, currency: "TWD",
    valuation: "42x 2027F EPS",
    epsForecast: {"2026F":  12.3, "2027F":  29.7},
    summary: "5 月自結 EPS 0.91 元優於預期，元富上調 2Q26 EPS 至 2.59 元，給予買進、目標價 1,250 元。",
    tags: ["5 月獲利", "擴產", "市占"]
  },
  {
    id: "2025-10-29-3037-kgi", code: "3037", broker: "kgi", date: "2025-10-29",
    title: "3Q25 毛利率受匯率干擾，4Q25 價格續揚",
    ratingRaw: "增加持股", rating: "positive",
    targetPrice: 202, targetRange: null, prevTargetPrice: null, price: 166, currency: "TWD",
    valuation: "22x 2026F EPS",
    epsForecast: {"2026F":  9.16, "2027F":  13.32},
    summary: "匯率讓 3Q25 毛利率低於共識，但業外收益使 EPS 優於共識；4Q25 載板漲價、稼動率提升，毛利率可望回升。",
    tags: ["財報", "匯率", "大尺寸載板"]
  },
  {
    id: "2025-11-13-3037-yuanta", code: "3037", broker: "yuanta", date: "2025-11-13",
    title: "AI 載板、AI HDI 仍為 2026 年主要成長動能",
    ratingRaw: "買進（維持）", rating: "positive",
    targetPrice: 200, targetRange: null, prevTargetPrice: 165, price: 167.5, currency: "TWD",
    valuation: "—",
    epsForecast: {"2025F": 3.56, "2026F": 9.38},
    summary: "匯率讓 3Q25 EPS 低於預期 18%，但 AI 載板持續出貨、AI HDI 良率進步，元大估 2026 年 EPS 成長逾 1.6 倍。",
    tags: ["AI HDI", "AI 載板", "匯率"]
  },
  {
    id: "2025-12-04-3037-kgi", code: "3037", broker: "kgi", date: "2025-12-04",
    title: "HDI 調整進度落後，載板採策略定價",
    ratingRaw: "增加持股", rating: "positive",
    targetPrice: 202, targetRange: null, prevTargetPrice: null, price: 198.5, currency: "TWD",
    valuation: "22x 2026F EPS",
    epsForecast: {},
    summary: "台灣 HDI/PCB 產線轉換落後，需再 1–2 季；載板新單改用策略定價模型，高階 ABF 材料仍仰賴日本供應商。",
    tags: ["論壇", "策略定價", "日系材料"]
  },
  {
    id: "2026-01-21-3037-kgi", code: "3037", broker: "kgi", date: "2026-01-21",
    title: "稼動率提升及漲價將使 4Q25 獲利大幅改善",
    ratingRaw: "增加持股", rating: "positive",
    targetPrice: 405, targetRange: null, prevTargetPrice: 202, price: 321, currency: "TWD",
    valuation: "25x 2026–27F 平均 EPS",
    epsForecast: {"2026F":  12.44, "2027F":  20.18},
    summary: "12 月單月 EPS 0.78 元，ABF 稼動率 90%，凱基上修 2026–27 年獲利 36%、52%，目標價翻倍至 405 元。",
    tags: ["漲價", "光復廠", "楊梅廠"]
  },
  {
    id: "2026-06-29-8046-esun", code: "8046", broker: "esun", date: "2026-06-29",
    title: "ABF 供不應求，2027 年重返獲利高峰",
    ratingRaw: "買進（調升）", rating: "positive",
    targetPrice: 1600, targetRange: null, prevTargetPrice: null, price: 1125, currency: "TWD",
    valuation: "30x 2027F EPS",
    epsForecast: {"2026F":  17.98, "2027F":  54.37, "2028F":  94.47},
    summary: "南電為 Broadcom 高階交換器第二大 ABF 供應商，ABF 每季漲價約 10%，玉山估 2027 年 EPS 54 元。",
    tags: ["供不應求", "Broadcom", "T-glass"]
  },
  {
    id: "2026-06-29-8046-citi", code: "8046", broker: "citi", date: "2026-06-29",
    title: "5 月獲利顯著擴張，未來數季具上行潛力",
    ratingRaw: "Buy", rating: "positive",
    targetPrice: 1100, targetRange: null, prevTargetPrice: null, price: 1080, currency: "TWD",
    valuation: "—",
    epsForecast: {},
    summary: "5 月獲利顯著擴張，花旗認為毛利率還有上行空間；目標價 1,100 元與股價接近，預期報酬僅約 2%。",
    tags: ["月獲利", "ABF", "外資"]
  },
  {
    id: "2026-06-30-8046-daiwa", code: "8046", broker: "daiwa", date: "2026-06-30",
    title: "5 月獲利強勁，看好 ABF 漲價",
    ratingRaw: "Buy (1)", rating: "positive",
    targetPrice: 1444, targetRange: null, prevTargetPrice: null, price: 1080, currency: "TWD",
    valuation: "49x 未來一年 EPS",
    epsForecast: {},
    summary: "大和重申買進，以未來一年 EPS 的 49 倍本益比評價，目標價 1,444 元，看好 ABF 漲價帶動毛利率擴張。",
    tags: ["ABF 漲價", "毛利率", "外資"]
  },
  {
    id: "2026-06-29-7795-yuanta", code: "7795", broker: "yuanta", date: "2026-06-29",
    title: "載板擴產明確，高階設備需求吃緊",
    ratingRaw: "買進（初次報告）", rating: "positive",
    targetPrice: 605, targetRange: null, prevTargetPrice: null, price: 460.5, currency: "TWD",
    valuation: "—",
    epsForecast: {"2026F": 5.29, "2027F": 17.27},
    summary: "長廣是載板真空壓膜設備商，1H26 機台尚未進入認列，4Q26 與 2027 年將密集認列，元大首次評等給買進。",
    tags: ["設備", "真空壓膜", "首評"]
  },
  {
    id: "2026-06-29-7795-daiwa", code: "7795", broker: "daiwa", date: "2026-06-29",
    title: "ABF 升級週期下的真空壓膜龍頭",
    ratingRaw: "Buy (1)", rating: "positive",
    targetPrice: 600, targetRange: null, prevTargetPrice: null, price: 460.5, currency: "TWD",
    valuation: "40x EPS",
    epsForecast: {"2026E": 4.47, "2027E": 17.05, "2028E": 22.76},
    summary: "長廣在高階真空壓膜機市占約 95%，直接受惠 ABF 擴產；大和首評買進，以 40 倍本益比給目標價 600 元。",
    tags: ["首評", "市占 95%", "設備"]
  }
];
