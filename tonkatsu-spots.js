const t = (id, name, category, categoryLabel, day, date, area, lat, lng, priority, nav, note, tags) => ({
  id,
  name,
  category,
  categoryLabel,
  day,
  date,
  area,
  lat,
  lng,
  priority,
  nav,
  note,
  tags
});

window.TRIP_SPOTS = window.TRIP_SPOTS || [];
window.TRIP_SPOTS.push(
  t("yamakatsu-yashima", "山かつ 屋島店｜住宿附近首選", "food", "美食", "D1/D2/D3", "7/18-7/20", "屋島 / 住宿附近", 34.3373769, 134.0906834, "main", "山かつ 屋島店", "高松住宿區附近的炸豬排專門店，有停車場、釜炊飯與沙拉吧，適合 7/19 鳴門回程或 7/20 屋島行程後晚餐。星期三公休，不影響本次高松住宿期間。", ["炸豬排", "とんかつ", "豬排飯", "屋島", "住宿附近", "停車", "沙拉吧", "長輩友善"]),
  t("tonkatsu-kehare", "創作とんかつ ケ晴レ｜高松站首選", "food", "美食", "D3", "7/20", "JR 高松站 / COM高松 2F", 34.35075, 134.0468208, "main", "創作とんかつ ケ晴レ", "JR 高松站直結，適合接玉藻公園、高松 ORNE Loft 與 Symbol Tower。供應炸豬排定食、豬排丼、豬排咖哩與炸豬排三明治，通常 11:00–21:00。", ["炸豬排", "とんかつ", "かつ丼", "豬排飯", "高松站", "COM高松", "D3順路"]),
  t("tonkatsu-tonton-matsuyama", "とんかつ とんとん｜松山首選", "food", "美食", "D5", "7/22", "大街道 / ANA Crowne Plaza 松山 B1F", 33.8407255, 132.76859, "main", "とんかつ とんとん ANAクラウンプラザホテル松山", "2026 年 4 月移至 ANA Crowne Plaza 松山地下 1 樓，距大街道很近。本次最推薦，可吃愛媛縣產豬與伊予いも豚厚切里肌豬排定食；午餐與晚餐之間有休息時段。", ["炸豬排", "とんかつ", "豬排飯", "伊予いも豚", "愛媛在地豬", "大街道", "松山首選"]),
  t("katsuretsutei-minatomachi", "かつれつ亭 湊町店｜松山老字號", "food", "美食", "D5", "7/22 備案", "銀天街 / 松山市站", 33.8358, 132.7660, "backup", "かつれつ亭 湊町店", "松山老字號炸豬排與豬排丼店，位於銀天街靠松山市站一側，可和 Hands 松山店一起安排。通常 11:30–20:30，沒有專用停車場，適合步行前往。", ["炸豬排", "とんかつ", "かつ丼", "豬排飯", "老字號", "銀天街", "松山市站", "Hands順路"]),
  t("yamakatsu-airport", "山かつ 空港店｜鳴門日特別備案", "food", "美食", "D2", "7/19 遠程備案", "德島阿波舞機場 / 松茂町", 34.1440963, 134.5782312, "optional", "山かつ 空港店", "山かつ第一號店，靠近德島阿波舞機場。從鳴門公園返回高松需往南繞行，只有觀潮行程提早完成、特別想吃山かつ時再考慮。", ["炸豬排", "とんかつ", "豬排飯", "山かつ創始店", "德島", "鳴門日", "需繞路", "遠程備案"])
);

window.TRIP_SPOT_META = {
  ...(window.TRIP_SPOT_META || {}),
  updatedAt: "2026-07-18 00:43",
  version: "nearby spots v9 tonkatsu restaurants"
};

const tonkatsuSearchPlaceholder = "搜尋：豬排、炸豬排、豬排飯、とんかつ、かつ丼、LILAY、Loft、Hands、藥妝、休息站...";
const tonkatsuSearchInput = typeof document !== "undefined" ? document.getElementById("searchInput") : null;
if (tonkatsuSearchInput) tonkatsuSearchInput.placeholder = tonkatsuSearchPlaceholder;
