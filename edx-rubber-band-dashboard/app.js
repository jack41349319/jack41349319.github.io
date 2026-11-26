const cases = [
  {
    id: "miniland-2023",
    date: "2023-07-25",
    dateNote: "EDX 首次收到客訴",
    type: "客戶客訴",
    customer: "Miniland",
    sales: "Amy",
    supplier: "少年玩具",
    item: "#201221／訂單 220525",
    product: "橡皮圈組（6 色小包；產品名稱待補證）",
    boardColor: "沒有釘板；本案為橡皮圈組，異常色：綠色（後續全檢另見紅色 2 包；日曬測試白色變黏）",
    quantity: "7 月先提 528 組、後確認補 550 組；12/14 再要求補 100 組",
    issue: "不同終端客戶反映橡皮筋由塑袋取出即斷裂；以綠色融化、掉色最明顯。",
    cause: "上游稱由粉改加油降低黏性，並猜測棕櫚油安定性不足；屬假說，未見實驗／批次證明。",
    reply: "少年抽驗釘板 200 片、橡皮筋 500 包與綠色材料 12 kg 未見液化；越南廠稱配方／製程未變並將研究。後以新批製作 550 組補貨。",
    action: "客戶需 100% 檢驗重工；EDX 進行日曬測試，25 天時白色橡皮圈變黏；少年後續全檢 2022 舊批發現紅色 2 包液化。12/14 客戶再要求補 100 組，少年回覆隔日可備妥。",
    gaps: ["客訴產品正式名稱待確認", "528／550 組差異待確認", "影響批號、入庫日與完整流向未回覆", "上游配方與試驗報告待補"],
    sources: ["【Miniland客訴】訂單220525_#201221橡皮圈溶解斷掉.msg", "RE  【Miniland客訴】…系列郵件"],
    summary: "綠色橡皮筋融化、掉色、斷裂；客戶要求整批重工與補貨。",
    chronology: [
      ["2023-07-25", "Amy 首次轉報 Miniland 客訴：綠色融化、掉色、取出即斷，客戶需 100% 檢驗重工。"],
      ["2023-07-26～07-27", "補貨數由 528 組改為 550 組，指定新批次；少年預告 8/3 完成。"],
      ["2023-07-28", "少年回覆抽驗釘板 200 片、橡皮筋 500 包及綠色材料 12 kg，未再現液化。"],
      ["2023-08-08", "上游提出由粉改油、棕櫚油安定性不足的可能性，並稱新批將調整添加劑、後續加入抗老劑。"],
      ["2023-08-29", "EDX 日光曝曬 25 天後發現白色橡皮圈變黏。"],
      ["2023-09-12", "少年回報全檢 2022 舊批，發現紅色 2 包液化，綠色未見。"],
      ["2023-12-14", "Miniland 再要求補 100 組；少年回覆隔日可備妥。"]
    ],
    media: [
      {src: "assets/miniland-01.jpg", kind: "image", title: "Miniland 異常照片 1", original: "IMG_7348.JPG", evidence: "客戶異常照片", observation: "袋內綠色橡皮筋可見黏附／液化與材料聚集。", relates: "對應：#201221／訂單 220525；綠色融化、掉色、取出即斷。", limit: "可支持異常外觀；不能單獨證明配方、批號或根因。", caption: "來源：Miniland 客訴原始郵件附件。"},
      {src: "assets/miniland-02.jpg", kind: "image", title: "Miniland 異常照片 2", original: "IMG_7347.JPG", evidence: "客戶異常照片", observation: "多包橡皮筋可見綠色材料黏著，呈現同類型外觀異常。", relates: "對應：#201221／訂單 220525；與不同終端客戶反映相互對照。", limit: "照片未提供完整批號與拍攝環境，不能推定所有庫存均同樣異常。", caption: "來源：Miniland 客訴原始郵件附件。"}
    ]
  },
  {
    id: "eai-2023",
    date: "2023-08-08",
    dateNote: "EDX 首次收到客訴",
    type: "客戶客訴",
    customer: "EAI",
    sales: "Vanessa",
    supplier: "少年玩具",
    item: "#202301／訂單 220144",
    product: "5\" 雙面釘板，6 色 6 片",
    boardColor: "釘板：5\" 雙面釘板；顏色：綠色異常（產品為 6 色配置，其餘顏色未見明確客訴）",
    quantity: "原訂單 1,000 組；客戶要求補 1,000 包橡皮筋",
    issue: "客戶陸續收到客訴，綠色橡皮筋有損壞及溶化。",
    cause: "本案郵件未提供獨立根因；與同期 Miniland 綠色異常相似，但是否同批／同配方待確認。",
    reply: "少年同意重新補 1,000 包，快遞費比照 Miniland 與 EDX 各半；補貨箱抽樣另發現破袋，要求出貨前加強逐包檢視。",
    action: "補貨 1,000 包並安排寄送；EDX 要求避免二次缺失。",
    gaps: ["實際異常包數未見", "客戶首次發現日期待確認", "批號、製造日與配方版本待補", "補貨後成效未見客戶確認"],
    sources: ["EAI 客訴 - 202301 5 雙面釘板之橡皮筋.msg", "RE  EAI雙面釘板橡皮筋…系列郵件"],
    summary: "訂單 1,000 組之綠色橡皮筋損壞／溶化，客戶要求補 1,000 包。",
    chronology: [
      ["2023-08-08", "Vanessa 轉報 EAI 客訴；原訂單 2022-08-03 出貨 1,000 組，要求補 1,000 包。"],
      ["2023-08-24", "建立品質異常處理單 NG23008。"],
      ["2023-08-25～08-31", "少年擬以 Jacky 驗過的同批庫存補貨；EDX 同意並要求逐包確認。"],
      ["2023-09-05", "少年同意與 EDX 各半負擔快遞費。"],
      ["2023-09-19", "首箱補貨抽樣發現破袋；少年安排重新補 1,000 包，改採平鋪裝箱。"],
      ["2023-09-22", "重補品到 EDX，Vanessa 初看未見問題；後續客戶收貨成效待確認。"]
    ],
    media: [
      {src: "assets/eai-01.jpg", kind: "image", title: "EAI 異常照片 1", original: "534209-1.jpg", evidence: "客戶異常照片", observation: "釘板袋內橡皮筋可見黏著、變形與顏色異常。", relates: "對應：#202301／訂單 220144；客戶要求補 1,000 包。", limit: "實際異常包數、批號與客戶拍攝日期未在照片本身確認。", caption: "來源：EAI 客訴原始郵件附件。"},
      {src: "assets/eai-02.jpg", kind: "image", title: "EAI 異常照片 2", original: "534209-2.jpg", evidence: "客戶異常照片", observation: "不同包裝中的橡皮筋呈現黏附／失去原有形狀的狀態。", relates: "對應：#202301／訂單 220144；綠色損壞／溶化客訴。", limit: "後續郵件另有補貨破袋，照片本身不宜直接等同於液化根因。", caption: "來源：EAI 客訴原始郵件附件。"}
    ]
  },
  {
    id: "ss-2023",
    date: "2023-09-04",
    dateNote: "Jacky 實際驗貨日；郵件串始於 8/29",
    type: "內部攔截",
    customer: "S&S",
    sales: "Elena",
    supplier: "少年玩具",
    item: "#20140／訂單 230298",
    product: "6 吋雙面釘板",
    boardColor: "釘板：6 吋雙面釘板；顏色：綠色液化（其餘顏色未見明確異常）",
    quantity: "訂單資料 84 組；驗貨／後續品檢記錄 6 箱、144 片（數量不一致）",
    issue: "Jacky 出貨前驗貨發現 1 包綠色橡皮筋液化；該批全數更換後出貨。",
    cause: "郵件稱為 2022 年舊批，但未見精確製造／入庫日，無法判定是否已達供應商後稱的 8–12 個月週期。熱縮爐溫度被列為風險，但未證明是液化根因。",
    reply: "少年承諾完成全批更換；另將收縮溫度由 160°C 降至 130°C，以降低 PE 袋變形與黏附風險。",
    action: "全批橡皮筋更換；9/7 預計完成，不影響 9/15 交期。",
    gaps: ["橡皮筋批號／製造日期待補", "訂單 84 組與品檢 144 片之差異待校正", "熱縮條件與液化之因果未驗證"],
    sources: ["20140橡皮筋驗貨 S&S#230298.msg", "RE  20140橡皮筋驗貨 S&S#230298…系列郵件"],
    summary: "出貨前攔截：1 包綠色橡皮筋液化，全批更換。",
    chronology: [
      ["2023-08-29", "Elena 安排 #20140 共 6 箱供 Jacky 驗貨；另一路訂單表記載 84 組。"],
      ["2023-09-04", "Jacky 驗貨發現 1 包綠色液化，決定全批橡皮筋更換後再出貨。"],
      ["2023-09-05", "對內通報為 2022 舊批；熱風測試見舊批較不耐熱，並要求檢討熱縮爐條件。"],
      ["2023-09-07", "郵件預計完成橡皮筋更換。"],
      ["2023-09-14～09-15", "後續現場品檢記為 6 箱共 144 片；少年稱收縮溫度由 160°C 降至 130°C。"]
    ],
    media: [
      {src: "assets/ss-01.jpg", kind: "image", title: "S&S 驗貨照片", original: "image003.jpg／image008.jpg／image010.jpg／image022.jpg 等同附件檔名", evidence: "EDX／供應商驗貨照片", observation: "可見 #20140 驗貨現場的袋裝橡皮筋、釘板與包裝狀態。", relates: "對應：#20140／訂單 230298；9/4 出貨前發現 1 包綠色液化。", limit: "此圖用於現場與包裝脈絡；異常數量以郵件文字 1 包及 84／144 數量矛盾另行判讀。", caption: "來源：S&S 驗貨郵件附件；同一影像在轉寄鏈中使用多個附件檔名。"}
    ]
  },
  {
    id: "mlc-2024",
    date: "2024-05-11",
    dateNote: "Ada 首次轉報客訴",
    type: "客戶客訴",
    customer: "MLC",
    sales: "Ada",
    supplier: "少年玩具／北福（供應關係待追溯）",
    item: "客訴品號待確認；當時出貨：#200611 / #20061",
    product: "客訴產品名稱待確認；同期在製為 7\" OH Geoboards with 2 × 8\" Rubber Bands",
    boardColor: "釘板：產品為 OH Geoboards；顏色：綠色主要異常，後續另見紅色；實際各色不良比例待確認",
    quantity: "客訴為「多袋」；補貨 100 袋。當時在製 2,300 + 600 組",
    issue: "客戶反映多袋釘板橡皮筋融化，主要為綠色；Jacky 後續另指出紅色也有異常。",
    cause: "批次資料不足，未能確認根因。供應商熱風測試未再現不代表排除長期老化／配方問題。",
    reply: "少年稱 2023 年底以拉力測試重檢庫存；200°C 直吹 60 秒未融化／變形，線上全檢未發現不良；交付 100 袋完整 6 色橡皮筋補貨。",
    action: "Jacky 到白雞廠確認現品；要求提供各色不良比例、進料日期、數量及隔離管制，並評估透明橡皮筋替代。",
    gaps: ["客訴實際品號待確認", "異常袋數待確認", "批號／進料日／顏色不良率未見完整回覆", "北福現有庫存與正式回覆待補"],
    sources: ["釘板橡皮筋融化.msg", "RE  釘板橡皮筋融化…系列郵件", "補貨 MLC.msg"],
    summary: "多袋橡皮筋融化，主要為綠色；供應商補 100 袋並進行現場抽檢。",
    chronology: [
      ["2024-05-11", "Ada 轉報 MLC 多袋融化，主要為綠色；同期在製 #200611 2,300 組、#20061 600 組。"],
      ["2024-05-11", "要求先補 100 袋完整 6 色橡皮筋；Jacky 補充紅色亦見異常。"],
      ["2024-05-14", "少年回覆拉力重檢、200°C 熱風 60 秒與線上全檢均未見不良，並交付 100 袋。"],
      ["2024-05-14～05-15", "Jacky 要求補批次、不良比例、隔離資料並赴白雞確認；補貨由 EDX 安排轉交。"]
    ],
    media: [
      {src: "assets/mlc-01.jpg", kind: "image", title: "MLC 異常照片", original: "image002.jpg／image016.jpg／image021.jpg／image022.jpg／image037.jpg 等同附件檔名", evidence: "客戶／EDX 異常照片", observation: "透明袋內綠色橡皮筋呈現液化、流湯與黏附狀態；後續文字另指出紅色也有異常。", relates: "對應：MLC 2024-05-11；同期在製 #200611 2,300 組、#20061 600 組，補貨 100 袋。", limit: "客訴實際品號、異常袋數與照片對應批次仍待確認。", caption: "來源：MLC 客訴往來郵件附件；同一影像在轉寄鏈中使用多個附件檔名。"}
    ]
  },
  {
    id: "wiemann-2026",
    date: "2026-07-22",
    dateNote: "客戶原信日；EDX 於 7/23 轉辦",
    type: "客戶客訴",
    customer: "Wiemann",
    sales: "Emily",
    supplier: "少年玩具",
    item: "#20120／#20210（郵件記載不一致）",
    product: "6\" OH Geoboard／6 英吋透明小釘板－方格",
    boardColor: "釘板：6\" OH Geoboard；顏色：綠色異常（其餘顏色待確認）",
    quantity: "2,436 組（另有 2,346 組記載）；10 月另要求約 2,000 組整品",
    issue: "2024 年購買批次，綠色橡皮筋熔化、易碎，黏在小袋內側及其他橡皮筋；客人表示檢查庫存均有問題。",
    cause: "少年主張自然老化 8–12 個月及溫濕度所致，並否認製程瑕疵；這是供應商立場，尚未有批次或試驗證據支持。",
    reply: "7/23 14:11 先表示會安排補貨並請確認數量；14:54 再次評估後，以出貨逾 1.5 年為由拒絕整批補貨。後續 EDX 評估寄替換橡皮筋、客戶重工費或 Credit Note。",
    action: "估算北福替換橡皮筋 NT$2.5／包；需另計約 20 kg DHL 運費及客戶拆包、換料與重新熱縮膜人工。10 月客戶改要求約 2,000 組完整新品，EDX 轉管理階層評估。",
    gaps: ["正確品號 20120／20210 待確認", "正確數量 2,436／2,346 待確認", "客戶實際檢查及受影響數待確認", "自然老化說法需材料／環境證據驗證"],
    sources: ["Wiemann客訴_item#20120_6英吋透明小釘板-方格.msg", "FW  Wiemann Complaint  20120 (Geoboards).msg", "FW  Claim to item 20120.msg"],
    summary: "2024 年批次之綠色橡皮筋熔化易碎；供應商先允補、後以老化為由拒絕整批補貨。",
    chronology: [
      ["2026-07-22", "Wiemann 原始客訴：2024 年購買 2,436 組，綠色熔化、易碎、黏袋。"],
      ["2026-07-23", "EDX 轉少年；14:11 少年先稱會安排補貨，14:54 改以逾 1.5 年／自然老化拒絕整批補貨。"],
      ["2026-07-28", "客戶回覆跨箱抽查均有同樣問題，推定 2,436 組均受影響。"],
      ["2026-09-08～09-09", "內部估算時改寫 2,346 組；評估北福／元貞替換包、DHL 與重工費，客戶表示自行更換工作量過大。"],
      ["2026-10-12～10-13", "客戶希望改補約 2,000 組完整 Geoboards；EDX 轉管理階層評估成本與處置。"],
      ["2026-10-19", "Pony 要求將案件登錄不合格品管制。"]
    ],
    media: [
      {src: "assets/wiemann-video.mov", kind: "video", title: "Wiemann 客訴影片", original: "Video.mov", evidence: "客戶原始影片", observation: "影片呈現綠色橡皮筋熔化、易碎並黏附於小袋內側／其他橡皮筋的客訴情況。", relates: "對應：Wiemann 2026-07-22 原始客訴；品號／數量記載為 #20120／#20210、2,436／2,346 組。", limit: "影片未能單獨確認製造批號、保存環境或責任歸屬。", caption: "來源：Wiemann 客戶提供的原始 QuickTime 影片；瀏覽器若無法播放，可下載後以本機播放器開啟。"},
      {src: "assets/wiemann-reply.jpg", kind: "image", title: "Wiemann 往來重點截圖", original: "image002.jpg／image020.jpg", evidence: "郵件證據截圖", observation: "截圖保留客訴處理、替換橡皮筋方案、供應商老化說法與後續補貨爭議脈絡。", relates: "對應：Wiemann 2026-07-23～10-19；先允補，後以逾 1.5 年／自然老化拒絕整批補貨。", limit: "截圖是文字往來證據，不是材料試驗或批次鑑定結果。", caption: "來源：Wiemann 往來郵件附件；同一影像在轉寄鏈中使用多個附件檔名。"}
    ]
  },
  {
    id: "us-toy-2026",
    date: "2026-10-29",
    dateNote: "客戶原信日；EDX 於 10/30 轉辦",
    type: "客戶客訴",
    customer: "US TOY／Constructive Playthings",
    sales: "Vanessa",
    supplier: "少年玩具（舊貨成品；橡皮筋批號待確認）／東幸＋北福（新貨）",
    item: "#20230／PO 50497391",
    product: "5\" 雙面釘板",
    boardColor: "釘板：5\" 雙面釘板；顏色：客訴／照片未明確指出，待確認",
    quantity: "2022 年出貨 560 組；現有庫存 86 組全數異常；另有新單 240 組",
    issue: "客戶倉庫盤點 86 組，橡皮筋全部融化並黏在一起，無法銷售，要求 USD 344.86 Credit。",
    cause: "舊貨存放時間可能為風險因子，但未見供應商針對此批次的調查結論。新單由東幸生產、北福供應橡皮筋，不代表已證明與舊批相同。",
    reply: "現有資料未找到少年或北福對本案的正式書面回覆；EDX 內部已將事件轉交管理階層並啟動北福／工廠庫存調查。",
    action: "客戶要求 Credit；另需追蹤已出貨 240 組是否發生同樣問題。",
    gaps: ["舊批橡皮筋實際供應批號與供應商待確認", "86 組以外已售商品狀態待確認", "北福正式調查回覆待補", "新單 240 組攔截／追蹤結果待補"],
    sources: ["FW  EDX-23 Geoboards.msg", "FW  EDX-23 Geoboards (86).msg", "橡皮筋調查.msg", "【橡皮筋液化】問題.msg"],
    summary: "庫存 86 組全數融化黏結；客戶要求 Credit，另有 240 組新貨需追蹤。",
    chronology: [
      ["2026-10-29", "Constructive Playthings 原信：盤點 86 組全數融化黏結，要求 Credit。"],
      ["2026-10-30", "Vanessa 轉報：2022-01 出貨 560 組，86 組 Credit 金額 USD 344.86。"],
      ["2026-10-30", "同品項新單 240 組已出貨，由東幸製造、北福供橡皮筋，已來不及攔截。"],
      ["2026-11-25", "EDX 對工廠／北福供應鏈發出庫存、來源、批號與液化調查；資料截點前未見正式回覆。"]
    ],
    media: [
      {src: "assets/us-toy-01.jpg", kind: "image", title: "US TOY 異常照片 1", original: "EDX-23.jpeg", evidence: "客戶庫存照片", observation: "橡皮筋在袋內融化並黏結，呈現無法正常販售的外觀。", relates: "對應：US TOY／Constructive Playthings；#20230／PO 50497391，現有庫存 86 組。", limit: "舊批橡皮筋實際供應商／批號未由照片確認；北福關聯目前只明確指向新單。", caption: "來源：Constructive Playthings 客訴附件。"},
      {src: "assets/us-toy-02.jpg", kind: "image", title: "US TOY 異常照片 2", original: "EDX-23 (1).jpeg", evidence: "客戶庫存照片", observation: "多組釘板庫存可見相同黏結情況，與客戶稱 86 組全數異常相符。", relates: "對應：2022-01 出貨 560 組；86 組要求 USD 344.86 Credit，另有新單 240 組需追蹤。", limit: "照片支持庫存外觀異常，不足以證明舊貨與新貨使用同一批橡皮筋。", caption: "來源：Constructive Playthings 客訴附件。"}
    ]
  }
];

const state = { search: "", type: "all", supplier: "all", sales: "all" };
const $ = (selector) => document.querySelector(selector);

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[ch]));
}

function filteredCases() {
  const q = state.search.trim().toLowerCase();
  return cases.filter(item => {
    const text = Object.values(item).flat(3).join(" ").toLowerCase();
    return (!q || text.includes(q))
      && (state.type === "all" || item.type === state.type)
      && (state.supplier === "all" || item.supplier.includes(state.supplier))
      && (state.sales === "all" || item.sales === state.sales);
  });
}

function renderKpis() {
  const complaintCount = cases.filter(x => x.type === "客戶客訴").length;
  const internalCount = cases.filter(x => x.type === "內部攔截").length;
  const greenCount = cases.filter(x => /綠色/.test(x.issue)).length;
  const pendingCount = cases.reduce((sum, x) => sum + x.gaps.length, 0);
  $("#kpis").innerHTML = [
    [complaintCount, "國外客戶客訴"],
    [internalCount, "出貨前內部攔截"],
    [greenCount, "事件明確涉及綠色"],
    [pendingCount, "待確認／待補證項目"]
  ].map(([value, label]) => `<article class="kpi"><span class="value">${value}</span><span class="label">${label}</span></article>`).join("");
}

function renderTimeline(items) {
  $("#resultCount").textContent = `顯示 ${items.length} / ${cases.length} 起事件`;
  $("#timeline").innerHTML = items.length ? items.map(item => `
    <article class="timeline-item ${item.type === "內部攔截" ? "internal" : ""}">
      <div class="timeline-date">${escapeHtml(item.date)}<span class="date-note">${escapeHtml(item.dateNote)}</span></div>
      <div class="timeline-content">
        <span class="badge ${item.type === "內部攔截" ? "internal" : "complaint"}">${escapeHtml(item.type)}</span>
        <h3>${escapeHtml(item.customer)} · ${escapeHtml(item.item)}</h3>
        <p>${escapeHtml(item.summary)}</p>
        <div class="timeline-tags"><span>業務 ${escapeHtml(item.sales)}</span><span>${escapeHtml(item.supplier)}</span><span>${escapeHtml(item.quantity)}</span><span>釘板／顏色：${escapeHtml(item.boardColor)}</span></div>
      </div>
    </article>`).join("") : `<div class="empty">沒有符合目前篩選條件的事件。</div>`;
}

function renderTable(items) {
  $("#caseRows").innerHTML = items.length ? items.map(item => `
    <tr>
      <td><strong>${escapeHtml(item.date)}</strong><span class="cell-sub">${escapeHtml(item.type)}｜${escapeHtml(item.dateNote)}</span></td>
      <td><strong>${escapeHtml(item.customer)}</strong><span class="cell-sub">${escapeHtml(item.sales)}</span></td>
      <td><strong>${escapeHtml(item.item)}</strong><span class="cell-sub">${escapeHtml(item.product)}</span></td>
      <td>${escapeHtml(item.boardColor)}</td>
      <td>${escapeHtml(item.quantity)}</td>
      <td>${escapeHtml(item.supplier)}</td>
      <td>${escapeHtml(item.issue)}</td>
      <td><button class="detail-button" data-id="${item.id}">查看</button></td>
    </tr>`).join("") : `<tr><td colspan="8" class="empty">沒有符合的事件。</td></tr>`;
  document.querySelectorAll(".detail-button").forEach(button => button.addEventListener("click", () => showDetail(button.dataset.id)));
}

function showDetail(id) {
  const item = cases.find(x => x.id === id);
  if (!item) return;
  const detail = $("#caseDetail");
  detail.hidden = false;
  detail.innerHTML = `
    <span class="badge ${item.type === "內部攔截" ? "internal" : "complaint"}">${escapeHtml(item.type)}</span>
    <h3>${escapeHtml(item.customer)}｜${escapeHtml(item.item)}</h3>
    <p>${escapeHtml(item.product)} · 業務：${escapeHtml(item.sales)} · 供應鏈：${escapeHtml(item.supplier)}</p>
    <div class="detail-grid">
      <article><h4>釘板／顏色對應</h4><p>${escapeHtml(item.boardColor)}</p></article>
      <article><h4>直接觀察／客戶反映</h4><p>${escapeHtml(item.issue)}</p></article>
      <article><h4>可能原因（未定論）</h4><p>${escapeHtml(item.cause)}</p></article>
      <article><h4>供應商重點回覆</h4><p>${escapeHtml(item.reply)}</p></article>
      <article><h4>處置</h4><p>${escapeHtml(item.action)}</p></article>
      <article><h4>待確認／待補證</h4><ul>${item.gaps.map(g => `<li>${escapeHtml(g)}</li>`).join("")}</ul></article>
      <article><h4>原始郵件依據</h4><ul class="source-list">${item.sources.map(s => `<li>${escapeHtml(s)}</li>`).join("")}</ul></article>
      <article class="chronology-card"><h4>事件處理節點</h4><ol class="chronology-list">${item.chronology.map(([date, text]) => `<li><strong>${escapeHtml(date)}</strong><span>${escapeHtml(text)}</span></li>`).join("")}</ol></article>
    </div>`;
  detail.scrollIntoView({behavior: "smooth", block: "nearest"});
}

function renderGallery(items) {
  const media = items.flatMap(item => item.media.map(m => ({...m, customer: item.customer, date: item.date, caseId: item.id, supplier: item.supplier, boardColor: item.boardColor})));
  $("#gallery").innerHTML = media.length ? media.map((m, i) => `
    <article class="media-card">
      <button type="button" data-media="${escapeHtml(m.src)}" data-kind="${m.kind}" data-title="${escapeHtml(m.title)}" data-caption="${escapeHtml(`${m.caption} 事件日期：${m.date}。釘板／顏色：${m.boardColor} ${m.observation} ${m.relates} 原始附件：${m.original} 判讀界線：${m.limit}`)}">
        ${m.kind === "video" ? `<span class="video-thumb">播放客訴影片</span>` : `<img class="media-thumb" src="${escapeHtml(m.src)}" alt="${escapeHtml(m.title)}" loading="lazy">`}
        <span class="media-info">
          <span class="media-event"><strong>${escapeHtml(m.customer)}</strong><em>${escapeHtml(m.evidence)}</em></span>
          <strong class="media-title">${escapeHtml(m.title)}</strong>
          <span class="media-date">事件日期：${escapeHtml(m.date)}</span>
          <span class="media-board"><b>釘板／顏色：</b>${escapeHtml(m.boardColor)}</span>
          <span class="media-observation"><b>可觀察：</b>${escapeHtml(m.observation)}</span>
        <span class="media-relates">${escapeHtml(m.relates)}</span>
          <span class="media-source"><b>原始附件：</b>${escapeHtml(m.original)}</span>
          <span class="media-limit"><b>判讀界線：</b>${escapeHtml(m.limit)}</span>
        </span>
      </button>
    </article>`).join("") : `<div class="empty">目前篩選結果沒有對應照片。</div>`;
  document.querySelectorAll("[data-media]").forEach(button => button.addEventListener("click", () => openMedia(button.dataset)));
}

function openMedia(data) {
  const host = $("#dialogMedia");
  host.innerHTML = data.kind === "video"
    ? `<video controls preload="metadata"><source src="${escapeHtml(data.media)}" type="video/quicktime">瀏覽器無法播放此影片。<a href="${escapeHtml(data.media)}" download>下載原始影片</a></video>`
    : `<img src="${escapeHtml(data.media)}" alt="${escapeHtml(data.title)}">`;
  $("#dialogCaption").innerHTML = `<strong>${escapeHtml(data.title)}</strong><br>${escapeHtml(data.caption)}${data.kind === "video" ? `<br><a href="${escapeHtml(data.media)}" download>下載原始影片</a>` : ""}`;
  $("#mediaDialog").showModal();
}

function render() {
  const items = filteredCases();
  renderTimeline(items);
  renderTable(items);
  renderGallery(items);
  $("#caseDetail").hidden = true;
}

function setupFilters() {
  const sales = [...new Set(cases.map(x => x.sales))].sort();
  $("#salesFilter").innerHTML += sales.map(name => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`).join("");
  $("#search").addEventListener("input", event => { state.search = event.target.value; render(); });
  $("#typeFilter").addEventListener("change", event => { state.type = event.target.value; render(); });
  $("#supplierFilter").addEventListener("change", event => { state.supplier = event.target.value; render(); });
  $("#salesFilter").addEventListener("change", event => { state.sales = event.target.value; render(); });
  $("#resetFilters").addEventListener("click", () => {
    Object.assign(state, {search: "", type: "all", supplier: "all", sales: "all"});
    $("#search").value = "";
    $("#typeFilter").value = "all";
    $("#supplierFilter").value = "all";
    $("#salesFilter").value = "all";
    render();
  });
}

$("#closeDialog").addEventListener("click", () => $("#mediaDialog").close());
$("#mediaDialog").addEventListener("click", event => {
  if (event.target === $("#mediaDialog")) $("#mediaDialog").close();
});

renderKpis();
setupFilters();
render();
