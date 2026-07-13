const r = (id, name, category, categoryLabel, day, date, area, lat, lng, priority, nav, note, tags) => ({
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
  r("uniqlo-takamatsu-yashima", "UNIQLO 高松屋島店", "shopping", "購物", "D1/D2/D3", "高松住宿期間", "屋島 / 住宿附近", 34.3402, 134.1098, "main", "ユニクロ 高松屋島店", "住宿區附近的 UNIQLO 候選，適合晚間或回飯店前順路補買衣物、防曬外套與 AIRism。", ["UNIQLO", "屋島", "住宿附近", "衣物補給"]),
  r("uniqlo-youme-takamatsu", "UNIQLO ゆめタウン高松店", "shopping", "購物", "D3", "7/20 備案", "ゆめタウン高松", 34.3186, 134.0455, "backup", "ユニクロ ゆめタウン高松店", "高松市區南側大型商場內候選，可與ゆめタウン高松大型超市、餐飲一起使用。", ["UNIQLO", "ゆめタウン", "高松", "商場"]),
  r("muji-youme-takamatsu", "無印良品 ゆめタウン高松", "shopping", "購物", "D3", "7/20 備案", "ゆめタウン高松", 34.3186, 134.0455, "backup", "無印良品 ゆめタウン高松", "高松市區南側無印良品候選，適合買旅行收納、文具、食品與生活用品。", ["無印良品", "MUJI", "ゆめタウン", "高松"]),
  r("muji-aeon-takamatsu", "無印良品 イオンモール高松", "shopping", "購物", "D3", "7/20 晚間備案", "AEON Mall 高松", 34.3523, 134.0056, "backup", "無印良品 イオンモール高松", "若在 AEON Mall 高松逛 mont-bell / Snow Peak，可順手確認無印良品；以 Google Maps 現況為準。", ["無印良品", "MUJI", "AEON Mall 高松", "商場"]),
  r("uniqlo-aeon-ayagawa", "UNIQLO イオンモール綾川店", "shopping", "購物", "D1/D4/D6", "機場・琴平線備案", "綾川 / 高松機場西側", 34.2496, 133.9320, "backup", "ユニクロ イオンモール綾川店", "高松機場、琴平、國道 32 號周邊可用的大型商場 UNIQLO 候選。", ["UNIQLO", "イオンモール綾川", "機場線", "商場"]),
  r("muji-aeon-ayagawa", "無印良品 イオンモール綾川", "shopping", "購物", "D1/D4/D6", "機場・琴平線備案", "綾川 / 高松機場西側", 34.2496, 133.9320, "backup", "無印良品 イオンモール綾川", "高松機場與琴平線備案，適合時間多時把 UNIQLO、無印、餐飲與超市一次處理。", ["無印良品", "MUJI", "イオンモール綾川", "機場線"]),
  r("uniqlo-youme-marugame", "UNIQLO ゆめタウン丸亀店", "shopping", "購物", "D4", "7/21 備案", "丸龜 / ゆめタウン丸亀", 34.2679, 133.8134, "backup", "ユニクロ ゆめタウン丸亀店", "D4 丸龜、琴平移動日的 UNIQLO 候選；只有景點提早完成時再加，避免壓縮往道後時間。", ["UNIQLO", "丸龜", "ゆめタウン", "時間夠再去"]),
  r("muji-youme-marugame", "無印良品 ゆめタウン丸亀", "shopping", "購物", "D4", "7/21 備案", "丸龜 / ゆめタウン丸亀", 34.2679, 133.8134, "backup", "無印良品 ゆめタウン丸亀", "D4 丸龜商場型備案，可和大型超市、餐飲一起處理；不建議影響道後入住時間。", ["無印良品", "MUJI", "丸龜", "ゆめタウン"]),
  r("uniqlo-matsuyama-kume", "UNIQLO 松山久米店", "shopping", "購物", "D5/D6", "松山備案", "松山東側 / 久米", 33.8130, 132.8005, "backup", "ユニクロ 松山久米店", "松山東側自駕備案，若 D5 或 D6 需要補衣物、內搭、防曬外套可搜尋此店。", ["UNIQLO", "松山", "久米", "自駕備案"]),
  r("uniqlo-matsuyama-houmen", "UNIQLO 松山保免店", "shopping", "購物", "D5/D6", "松山備案", "松山市區南西側", 33.8178, 132.7425, "backup", "ユニクロ 松山保免店", "松山市區南西側 UNIQLO 候選，比較適合開車移動時臨時補買，不建議步行安排。", ["UNIQLO", "松山", "保免", "自駕備案"]),
  r("muji-fuji-grand-matsuyama", "無印良品 フジグラン松山", "shopping", "購物", "D5", "7/22", "松山市區 / フジグラン松山", 33.8462, 132.7551, "main", "無印良品 フジグラン松山", "松山市區最實用的無印良品候選，可和フジグラン松山食品補給一起安排。", ["無印良品", "MUJI", "松山", "フジグラン"]),
  r("uniqlo-youme-tokushima", "UNIQLO ゆめタウン徳島店", "shopping", "購物", "D2 備案", "鳴門日遠程備案", "德島藍住 / ゆめタウン徳島", 34.1266, 134.5040, "optional", "ユニクロ ゆめタウン徳島店", "若 D2 改成德島藍住購物線，可和 Snow Peak 德島藍住、商場餐飲一起處理；不建議為它特地繞。", ["UNIQLO", "德島", "藍住", "遠程備案"]),
  r("muji-youme-tokushima", "無印良品 ゆめタウン徳島", "shopping", "購物", "D2 備案", "鳴門日遠程備案", "德島藍住 / ゆめタウン徳島", 34.1266, 134.5040, "optional", "無印良品 ゆめタウン徳島", "德島藍住商場型備案；只有 D2 改走購物線時才考慮。", ["無印良品", "MUJI", "德島", "遠程備案"])
);

window.TRIP_SPOT_META = {
  ...(window.TRIP_SPOT_META || {}),
  updatedAt: "2026-07-07 14:10",
  version: "nearby spots v5 retail UNIQLO MUJI"
};
