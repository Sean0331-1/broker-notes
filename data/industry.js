// 產業與技術筆記索引 — 一份報告一筆，新增時加在陣列最後（格式見 CLAUDE.md §7.4）
window.INDUSTRY = [
  {
    id: "2025-07-07-ai-server-asic-kgi", source: "kgi", sourceType: "本土券商", date: "2025-07-07",
    group: "AI 伺服器", kind: "產業報告",
    title: "2025–26 年 ASIC 伺服器市場成長為亮點",
    summary: "CSP 積極開發自用 ASIC，凱基估 2024–26 年 ASIC 出貨年複合成長 70%，訓練用 ASIC 市場成長遠快於 GPU。",
    related: ["3017"],
    tags: ["ASIC", "Trainium", "機櫃"]
  },
  {
    id: "2025-07-25-abf-supply-kgi", source: "kgi", sourceType: "本土券商", date: "2025-07-25",
    group: "載板", kind: "產業報告",
    title: "AI 驅動高階 ABF 需求，供需失衡加速改善",
    summary: "凱基估 ABF 載板 2025 年供給過剩 20%，2026 年收斂至 8%，2027 年轉為平衡至微幅短缺。",
    related: ["3037", "8046", "3189"],
    tags: ["ABF", "供需", "T-glass"]
  },
  {
    id: "2025-10-14-abf-glass-kgi", source: "kgi", sourceType: "本土券商", date: "2025-10-14",
    group: "載板", kind: "產業報告",
    title: "缺布效應擴大，ABF 載板提早開啟漲價週期",
    summary: "T-glass 玻纖布短缺拉長 CCL 交期，ABF 載板由 10 月起接棒 BT 漲價，替代供應商 1Q26 上線後緩解部分缺口。",
    related: ["8046", "3189", "3037"],
    tags: ["T-glass", "漲價", "缺布"]
  },
  {
    id: "2025-10-23-pcb-tpca-yuanta", source: "yuanta", sourceType: "本土券商", date: "2025-10-23",
    group: "PCB/CCL", kind: "產業概況更新",
    title: "AI 伺服器需求仍為 PCB、CCL 產業 2026 年主要成長動能",
    summary: "TPCA Show 2025 展出大量 30 層以上 AI 主板；M7/M8 仍是主流，M9 有望 2027 年導入 AI GPU 伺服器。",
    related: ["2383", "3037"],
    tags: ["TPCA", "M9", "展會"]
  },
  {
    id: "2025-11-18-pcb-materials-yuanta", source: "yuanta", sourceType: "本土券商", date: "2025-11-18",
    group: "PCB/CCL", kind: "產業概況更新",
    title: "PCB 上游材料 2026 年展望：銅箔與玻纖布升級",
    summary: "2026 年 ASIC 晶片量估成長 67%，CCL 由 M7 升至 M8/M9，玻纖布升級到 LDK、Q 布，銅箔升級到 HVLP3/4。",
    related: ["2383", "6274"],
    tags: ["玻纖布", "銅箔", "Q 布"]
  },
  {
    id: "2025-12-02-ai-semi-server-nomura", source: "nomura", sourceType: "外資", date: "2025-12-02",
    group: "AI 伺服器", kind: "外資主題報告（英文）",
    title: "AI 泡沫？供給受限下可能性較低",
    summary: "野村認為 AI 需求真實，供應鏈來不及準備，供給受限會延續亞洲半導體與伺服器的上行循環到 1H26。",
    related: ["3711", "2383", "3037", "3017", "3324"],
    tags: ["AI 泡沫", "供給受限", "首選股"]
  },
  {
    id: "2025-12-05-dlc-ubs", source: "ubs", sourceType: "外資", date: "2025-12-05",
    group: "散熱", kind: "外資首次覆蓋（英文）",
    title: "AI 最酷的主題：AI 加速器直接液冷",
    summary: "瑞銀估直接液冷（DLC）市場 2025–30 年 CAGR 51%、達 310 億美元，首次覆蓋奇鋐、雙鴻、健策皆給買進。",
    related: ["3017", "3324"],
    tags: ["液冷", "DLC", "市場規模"]
  },
  {
    id: "2025-12-05-trainium3-semianalysis", source: "semianalysis", sourceType: "研究機構", date: "2025-12-05",
    group: "AI 伺服器", kind: "技術深度分析（英文）",
    title: "AWS Trainium3 深度分析：潛在挑戰者逼近",
    summary: "AWS 在 re:Invent 推出 Trainium3 並預告 Trainium4，軟體與系統大幅改善，以每單位總擁有成本效能挑戰 Nvidia。",
    related: [],
    tags: ["Trainium", "ASIC", "技術"]
  },
  {
    id: "2025-12-05-ai-server-deck-yuanta", source: "yuanta", sourceType: "本土券商", date: "2025-12-05",
    group: "AI 伺服器", kind: "產業簡報",
    title: "AI 投資浪潮持續，產業升級趨勢明確",
    summary: "CSP 資本支出 2025 年年增 58%、2026 年再增 31%；CSP 自研晶片興起，水冷散熱成為 AI 關鍵技術。",
    related: ["3017"],
    tags: ["資本支出", "自研晶片", "簡報"]
  },
  {
    id: "2025-12-11-liquid-cooling-citi", source: "citi", sourceType: "外資", date: "2025-12-11",
    group: "散熱", kind: "外資首次覆蓋（英文）",
    title: "搭上液冷週期：首次覆蓋奇鋐與雙鴻",
    summary: "AI 伺服器隨功耗提高由氣冷轉液冷，每櫃散熱價值擴大，花旗首次覆蓋奇鋐與雙鴻皆給買進。",
    related: ["3017", "3324"],
    tags: ["液冷", "首評", "散熱"]
  },
  {
    id: "2025-12-30-server-tpu-yuanta", source: "yuanta", sourceType: "本土券商", date: "2025-12-30",
    group: "散熱", kind: "產業概況更新",
    title: "Google TPU 大躍進，鍍金水冷板成主流",
    summary: "2026 年 TPU 出貨估 370 萬顆、年增 76%；Rubin 與 TPU 2H26 改用銦複合散熱介質，水冷板需要鍍金。",
    related: ["3017"],
    tags: ["TPU", "鍍金", "均熱片"]
  },
  {
    id: "2026-01-06-ai-supply-chain-ms", source: "ms", sourceType: "外資", date: "2026-01-06",
    group: "AI 伺服器", kind: "外資觀點（英文）",
    title: "AI 供應鏈：CES 啟示、ASIC 生產與中國 AI 晶片",
    summary: "AI GPU 與 ASIC 需求都強，大摩認為 2026 年是「供給決定」的一年，瓶頸在記憶體、台積電 3 奈米與 T-glass。",
    related: ["8046", "3189"],
    tags: ["CES", "供給瓶頸", "CoWoS"]
  },
  {
    id: "2026-01-06-pcb-ccl-gs", source: "gs", sourceType: "外資", date: "2026-01-06",
    group: "PCB/CCL", kind: "外資產業報告（英文）",
    title: "AI PCB/CCL 市場規模大幅上修",
    summary: "高盛把 2027 年 AI PCB/CCL 市場上修到 266 億、183 億美元，主因 VR200/300 機櫃新增 midplane 等板子取代線材。",
    related: ["2383", "6274", "3037"],
    tags: ["市場規模", "midplane", "VR200"]
  },
  {
    id: "2026-02-22-abf-upgrade-ms", source: "ms", sourceType: "外資", date: "2026-02-22",
    group: "載板", kind: "外資產業洞察（英文）",
    title: "ABF 載板：調升欣興與南電至加碼",
    summary: "大摩認為 AI 驅動的 ABF 上行循環會持續到 2030 年左右，比過去更強更持久，帶動評價倍數擴張。",
    related: ["3037", "8046"],
    tags: ["調升評等", "ABF", "上行循環"]
  },
  {
    id: "2026-02-23-test-interface-citi", source: "citi", sourceType: "外資", date: "2026-02-23",
    group: "測試", kind: "外資投資人回饋（英文）",
    title: "首次覆蓋穎崴與旺矽後的投資人回饋",
    summary: "市場越來越把測試介面視為 AI 基礎建設的「良率保險」；花旗以 40 倍本益比評價，認為 PEG 低於 0.6 倍仍具吸引力。",
    related: ["6515"],
    tags: ["測試介面", "評價", "PEG"]
  },
  {
    id: "2026-02-25-serdes-cpo-dwzq", source: "dwzq", sourceType: "中國券商", date: "2026-02-25",
    group: "光通訊", kind: "行業深度報告（簡體）",
    title: "AI 基建：SerDes 演進、Rubin Ultra 與 CPO 交換機",
    summary: "SerDes 由 56G 演進到 224G，高頻衰減驅動 PCB 升級到 M9，功耗瓶頸則推動 CPO 與「光入櫃內」。",
    related: ["2383"],
    tags: ["SerDes", "CPO", "M9"]
  },
  {
    id: "2026-03-13-optical-gfortune", source: "gfortune", sourceType: "本土券商", date: "2026-03-13",
    group: "光通訊", kind: "產業展望簡報",
    title: "2026 年光通訊產業展望：800G 主流、1.6T 出量、CPO 蓄勢待發",
    summary: "全球資料量 2024–29 年 CAGR 28%；2026 年 800G 占比升至 43%、1.6T 開始量產，CPO 交換機仍在初期。",
    related: [],
    tags: ["800G", "1.6T", "CPO"]
  },
  {
    id: "2026-03-25-scaleup-cpo-forum", source: "forum", sourceType: "論壇簡報", date: "2026-03-25",
    group: "光通訊", kind: "論壇簡報（英文）",
    title: "Scale-Up CPO 時代：光電共封裝如何突破 AI 基礎設施瓶頸",
    summary: "依 GTC 2026 路線圖，Nvidia 將同時發展銅與光的 scale-up；Feynman 世代的 NVL1152 將採用 CPO 光學 scale-up。",
    related: [],
    tags: ["CPO", "Scale-up", "GTC"]
  },
  {
    id: "2026-04-08-abf-pscnet", source: "pscnet", sourceType: "本土券商", date: "2026-04-08",
    group: "載板", kind: "產業專題簡報",
    title: "ABF 載板專題：算力時代兵家必爭的關鍵材料",
    summary: "T-glass 由日東紡獨家供應是缺料源頭，Resonac、MGC 相繼調漲 CCL 30%，成本層層轉嫁到載板。",
    related: ["3037", "8046", "3189"],
    tags: ["T-glass", "日東紡", "漲價"]
  },
  {
    id: "2026-04-23-optical-test-student", source: "student", sourceType: "學生報告", date: "2026-04-23",
    group: "測試", kind: "學生期中產業報告",
    title: "光測試產業報告",
    summary: "CPO 光電整合良率壓力大，光測試由終端驗證前移到晶圓與封裝；2027 年光學引擎需求估年增 6.4 倍。",
    related: ["2360"],
    tags: ["光測試", "CPO", "學生報告"]
  },
  {
    id: "2026-03-01-passive-ai-epci", source: "epci", sourceType: "研究機構", date: "2026-03-01",
    group: "被動元件", kind: "技術論文（英文）",
    title: "AI 硬體發展對被動元件的影響",
    summary: "AI 資料中心耗電驚人，供電由 12V 轉向 48V 架構以降低損耗，被動元件須朝高功率、低損耗與新拓撲調整。",
    related: ["2327"],
    tags: ["48V", "電源", "論文"]
  },
  {
    id: "2026-03-01-passive-challenges-epci", source: "epci", sourceType: "研究機構", date: "2026-03-01",
    group: "被動元件", kind: "技術簡報（英文）",
    title: "AI 系統中的被動元件挑戰",
    summary: "晶片製程微縮讓供電電壓下降，去耦合電容更關鍵；電容技術由電解＋MLCC 走向 MLCC＋矽電容，未來整合進晶片。",
    related: ["2327"],
    tags: ["MLCC", "矽電容", "GaN"]
  },
  {
    id: "2026-07-08-abf-pricing-ms", source: "ms", sourceType: "外資", date: "2026-07-08",
    group: "載板", kind: "外資觀點（英文）",
    title: "ABF 載板：漲價週期正在加速",
    summary: "載板漲價比預期更強更早，大摩上修獲利並調高欣興、南電、臻鼎目標價。",
    related: ["3037", "8046"],
    tags: ["漲價", "目標價上調", "ABF"]
  },
  {
    id: "2026-07-13-abf-tam-gs", source: "gs", sourceType: "外資", date: "2026-07-13",
    group: "載板", kind: "外資產業報告（英文）",
    title: "ABF 載板漲幅超預期，毛利率擴張",
    summary: "高盛估 ABF 市場 2025–28 年 CAGR 62%、2028 年達 330 億美元，供需缺口由 2026 年 8% 擴大到 2028 年 51%。",
    related: ["3037", "8046", "3189"],
    tags: ["市場規模", "供需缺口", "交期"]
  }
];
