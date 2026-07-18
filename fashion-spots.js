const f = (id, name, category, categoryLabel, day, date, area, lat, lng, priority, nav, note, tags) => ({
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
  f("beams-takamatsu", "BEAMS 高松｜瓦町 FLAG", "shopping", "購物", "D3", "7/20", "高松中央商店街 / 瓦町", 34.33886, 134.05245, "main", "ビームス 高松 瓦町FLAG", "位於瓦町 FLAG 1F・2F，通常 10:00–20:00，男裝、女裝、雜貨與配件皆有。就在 D3 高松中央商店街與瓦町站動線內，是本次最順路的 BEAMS。", ["BEAMS", "ビームス", "男裝", "女裝", "瓦町FLAG", "高松中央商店街", "D3順路", "免稅"]),
  f("nikoand-youme-takamatsu", "niko and ... ゆめタウン高松", "shopping", "購物", "D3", "7/20 備案", "ゆめタウン高松 1F", 34.3186, 134.0455, "backup", "niko and ... ゆめタウン高松", "官方店舖列有女裝、男裝、家具與生活雜貨，通常 10:00–21:00。位於高松市區南側，可與 UNIQLO、無印良品、超市及餐飲一次逛完。", ["niko and ...", "ニコアンド", "男裝", "女裝", "家具", "生活雜貨", "ゆめタウン高松", "大型商場"]),
  f("beams-matsuyama", "BEAMS 松山｜大街道 AVA", "shopping", "購物", "D5", "7/22", "大街道 / AVA 2F", 33.840887, 132.768611, "main", "ビームス 松山 AVA", "位於 AVA 2F，距大街道站很近。週一至週六通常 11:00–20:00，週日通常至 19:00；男裝、女裝、雜貨與配件齊全，可直接接松山城、大街道與午餐動線。", ["BEAMS", "ビームス", "男裝", "女裝", "大街道", "AVA", "松山城順路", "D5主線"]),
  f("nikoand-emifull-masaki", "niko and ... エミフルMASAKI", "shopping", "購物", "D5", "7/22 備案", "Emifull MASAKI 1F", 33.789388, 132.716007, "backup", "niko and ... エミフルMASAKI", "位於 Emifull MASAKI 1F，通常 10:00–21:00，可與松山 Loft 一起逛。官方店舖清單標示以女裝、家具與生活雜貨為主，未標示 MEN；需另外開車離開松山市中心。", ["niko and ...", "ニコアンド", "女裝", "家具", "生活雜貨", "Emifull MASAKI", "松山Loft同棟", "需開車"])
);

window.TRIP_SPOT_META = {
  ...(window.TRIP_SPOT_META || {}),
  updatedAt: "2026-07-19 07:51",
  version: "nearby spots v10 niko and BEAMS"
};

const fashionSearchPlaceholder = "搜尋：niko and、ニコアンド、BEAMS、ビームス、豬排、LILAY、Loft、藥妝、休息站...";
const fashionSearchInput = typeof document !== "undefined" ? document.getElementById("searchInput") : null;
if (fashionSearchInput) fashionSearchInput.placeholder = fashionSearchPlaceholder;
