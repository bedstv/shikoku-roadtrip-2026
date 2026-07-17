const l = (id, name, category, categoryLabel, day, date, area, lat, lng, priority, nav, note, tags) => ({
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
  l("takamatsu-loft-lilay", "高松 Loft｜LILAY 第一站", "shopping", "購物", "D3", "7/20", "高松中央商店街 / 丸龜町 Green", 34.342357, 134.049357, "main", "高松ロフト 丸亀町グリーン", "丸龜町 Green 西館 3F，通常 11:00–20:00，位於 D3 中央商店街步行動線內。可詢問「リレイ トリートメントバーム 40g」；LILAY 官方經銷頁未列此分店，庫存須現場確認。", ["LILAY", "リレイ", "Treatment Balm", "髮蠟", "Loft", "丸龜町", "最順路", "庫存確認"]),
  l("takamatsu-orne-loft-lilay", "高松 ORNE Loft｜LILAY 備選", "shopping", "購物", "D3", "7/20", "JR 高松站 / 高松 ORNE 北館", 34.351335, 134.046622, "backup", "高松オルネロフト", "高松 ORNE 北館 2F，JR 高松站直結，通常 10:00–20:00。可接玉藻公園、港區與 Symbol Tower；LILAY 庫存須現場詢問。", ["LILAY", "リレイ", "Treatment Balm", "髮蠟", "Loft", "高松站", "港區順路", "庫存確認"]),
  l("hands-matsuyama-lilay", "Hands 松山店｜LILAY 詢問點", "shopping", "購物", "D5", "7/22", "松山市站 / いよてつ髙島屋", 33.83565, 132.7630, "backup", "ハンズ松山店", "いよてつ髙島屋本館 7F，松山市站直結，通常 10:00–19:00。可沿銀天街步行前往詢問 LILAY；官方經銷頁未列此店，不能保證有貨。", ["LILAY", "リレイ", "Treatment Balm", "髮蠟", "Hands", "松山市站", "銀天街", "庫存不保證"]),
  l("matsuyama-loft-lilay", "松山 Loft｜LILAY 官方經銷", "shopping", "購物", "D5", "7/22 備案", "Emifull MASAKI / 松前町", 33.789388, 132.716007, "backup", "松山ロフト エミフルMASAKI", "LILAY 官方經銷頁列名門市，位於 Emifull MASAKI 1F，通常 10:00–21:00。它不在松山市中心，建議先確認 Treatment Balm 40g 庫存，再決定是否開車前往。", ["LILAY 官方經銷", "リレイ", "Treatment Balm", "髮蠟", "Loft", "Emifull MASAKI", "需開車", "先確認庫存"])
);

window.TRIP_SPOT_META = {
  ...(window.TRIP_SPOT_META || {}),
  updatedAt: "2026-07-18 00:09",
  version: "nearby spots v8 LILAY stores"
};

const lilaySearchPlaceholder = "搜尋：LILAY、リレイ、Loft、Hands、AEON、UNIQLO、無印良品、藥妝、休息站...";
const lilaySearchInput = typeof document !== "undefined" ? document.getElementById("searchInput") : null;
if (lilaySearchInput) lilaySearchInput.placeholder = lilaySearchPlaceholder;
