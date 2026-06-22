window.TRIP_DATA = {
  "meta": {
    "title": "2026 四國自駕行",
    "subtitle": "7/18–7/23｜高松・鳴門・直島・松山",
    "description": "2026 四國六天五夜自駕行程，提供每日行程、住宿、停車提醒與 Google Maps 即時導航。",
    "tripStart": "2026-07-18T00:00:00+09:00",
    "tripEnd": "2026-07-23T23:59:59+09:00",
    "statusDateText": "2026/07/18",
    "departureText": "7/18 出發",
    "durationText": "6 天 5 夜",
    "heroImage": "./assets/naruto-strait.jpg",
    "heroAlt": "從渦之道眺望鳴門海峽與大鳴門橋",
    "eyebrow": "6 DAYS · 5 NIGHTS · SELF DRIVE",
    "heroTitle": "瀨戶內海到道後溫泉的夏日公路旅行",
    "heroText": "以住宿與實際車程為核心，提供每日停靠順序、停車提醒及 Google Maps 一鍵自駕導航。",
    "updatedAt": "2026-06-22 23:13",
    "version": "資料分離修正版 v5",
    "bookingCode": "FRNJVB",
    "photoCreditText": "Soramimi / Wikimedia Commons，CC BY-SA 4.0",
    "photoCreditUrl": "https://commons.wikimedia.org/wiki/File:Naruto_Strait_from_Uzunomichi_Promenade.jpg",
    "disclaimer": "現場時間、船班、潮汐與交通狀況以官方資訊及 Google Maps 為準。"
  },
  "quickActions": [
    { "icon": "plane", "label": "高松機場", "nav": "高松空港" },
    { "icon": "bed-double", "label": "高松住宿", "nav": "ホテルルートイン高松屋島" },
    { "icon": "waves", "label": "道後住宿", "nav": "道後温泉 ホテル古湧園 遥" },
    { "icon": "map", "label": "景點清單", "url": "https://www.google.com/maps/@33.7593704,133.0204664,9z/data=!4m6!1m2!10m1!1e1!11m2!2sdigkfYKJXHUNUL35KhqZbQ!3e3" }
  ],
  "essentials": [
    { "icon": "plane-takeoff", "title": "CI0178｜桃園 → 高松", "meta": "7/18 14:30 起飛 · 18:05 抵達", "nav": "高松空港" },
    { "icon": "plane-landing", "title": "CI0179｜高松 → 桃園", "meta": "7/23 19:05 起飛 · 20:55 抵達", "nav": "高松空港" },
    { "icon": "hotel", "title": "Hotel Route Inn Takamatsu Yashima", "meta": "7/18 15:00–7/21 10:00 · 3 晚", "nav": "ホテルルートイン高松屋島" },
    { "icon": "bath", "title": "Kowakuen Haruka", "meta": "7/21 15:00–7/23 11:00 · 2 晚", "nav": "道後温泉 ホテル古湧園 遥" }
  ],
  "days": [
    {
      "id": "day1",
      "tab": "7/18",
      "number": "D1",
      "title": "7/18 六｜抵達高松・取車",
      "subtitle": "桃園 → 高松機場 → 屋島住宿",
      "route": "抵達日晚間不排長途；先熟悉右駕、車況及 ETC，再依體力購物。",
      "stops": [
        { "time": "14:30", "type": "alert", "title": "CI0178 桃園起飛", "description": "預計 18:05 抵達高松機場，訂位代號 FRNJVB。", "tags": [{ "text": "航班", "kind": "warning" }] },
        { "time": "18:05", "title": "高松機場・租車", "description": "領車時確認 ETC 卡、車損、油種與還車位置；手機先連接車機。", "tags": [{ "text": "取車", "kind": "parking" }, { "text": "右駕適應", "kind": "warning" }], "actions": [{ "label": "導航", "icon": "navigation", "nav": "高松空港" }] },
        { "time": "約 20:00", "type": "hotel", "title": "Hotel Route Inn Takamatsu Yashima", "description": "辦理入住、停車並吃晚餐。若延誤，購物直接移到 7/19。", "tags": [{ "text": "飯店停車", "kind": "parking" }, { "text": "連住 3 晚" }], "actions": [{ "label": "導航住宿", "icon": "navigation", "nav": "ホテルルートイン高松屋島" }] },
        { "time": "備選", "type": "shopping", "title": "唐吉訶德屋島店", "description": "住宿附近、營業至凌晨 2:00；抵達日有精神再去。", "tags": [{ "text": "購物", "kind": "shop" }, { "text": "有停車場", "kind": "parking" }], "actions": [{ "label": "開車前往", "icon": "shopping-bag", "nav": "ドン・キホーテ屋島店", "kind": "shop" }] }
      ]
    },
    {
      "id": "day2",
      "tab": "7/19",
      "number": "D2",
      "title": "7/19 日｜鳴門海峽一日遊",
      "subtitle": "屋島 → 鳴門公園 → 屋島購物",
      "route": "觀潮時間優先於固定時刻。出發前以渦之道官方潮見表調整抵達時間。",
      "stops": [
        { "time": "上午", "title": "大鳴門橋遊步道・渦之道", "description": "先看潮汐，再倒推飯店出發時間。鳴門公園停車後步行前往。", "tags": [{ "text": "鳴門公園停車", "kind": "parking" }, { "text": "依潮汐調整", "kind": "warning" }], "actions": [{ "label": "導航", "icon": "navigation", "nav": "大鳴門橋遊歩道 渦の道" }, { "label": "潮汐資訊", "icon": "waves", "url": "https://www.uzunomichi.jp/", "kind": "secondary" }] },
        { "time": "接續", "title": "鳴門山展望台", "description": "與渦之道同區域，安排海峽全景與短程散步。", "tags": [{ "text": "展望台" }, { "text": "夏季補水", "kind": "warning" }], "actions": [{ "label": "導航", "icon": "navigation", "nav": "鳴門山展望台" }] },
        { "time": "18:00 前", "type": "shopping", "title": "WORKMAN 高松新田店", "description": "鳴門回程優先逛，20:00 關門；想買防曬、機能服與鞋類可多留時間。", "tags": [{ "text": "優先購物", "kind": "shop" }, { "text": "8 個車位", "kind": "parking" }], "actions": [{ "label": "導航", "icon": "shopping-bag", "nav": "ワークマン高松新田店", "kind": "shop" }] },
        { "time": "備選", "type": "shopping", "title": "Yamada Denki 高松春日本店", "description": "四國沒有 Bic Camera，這間是住宿附近的大型免稅家電替代店，營業至 21:00。", "tags": [{ "text": "家電", "kind": "shop" }, { "text": "免稅", "kind": "shop" }], "actions": [{ "label": "導航", "icon": "monitor-smartphone", "nav": "Tecc LIFE SELECT 高松春日本店", "kind": "shop" }] },
        { "time": "晚間", "type": "shopping", "title": "唐吉訶德屋島店", "description": "Workman 關門後再逛；若 7/18 已完成可直接回飯店。", "tags": [{ "text": "營業至 02:00", "kind": "shop" }], "actions": [{ "label": "導航", "icon": "shopping-cart", "nav": "ドン・キホーテ屋島店", "kind": "shop" }] }
      ]
    },
    {
      "id": "day3",
      "tab": "7/20",
      "number": "D3",
      "title": "7/20 一｜直島藝術日",
      "subtitle": "屋島 → 高松港停車 → 直島 → 屋島",
      "route": "海之日國定假日。汽車留在高松港，不開上島；船班與美術館預約是本日核心。",
      "stops": [
        { "time": "早上", "type": "alert", "title": "高松港周邊停車", "description": "至少比預定船班提早 45–60 分鐘抵達，假日需預留找停車位與步行時間。", "tags": [{ "text": "汽車留高松", "kind": "parking" }, { "text": "海之日", "kind": "warning" }], "actions": [{ "label": "導航港口", "icon": "navigation", "nav": "高松港旅客ターミナルビル" }, { "label": "船班官網", "icon": "ship", "url": "https://www.shikokukisen.com/", "kind": "secondary" }] },
        { "time": "依船班", "title": "四國汽船・宮浦港", "description": "抵達後依預約時段安排島內巴士、步行或租借腳踏車。", "tags": [{ "text": "宮浦港" }, { "text": "留意末班船", "kind": "warning" }], "actions": [{ "label": "Google Maps", "icon": "map-pin", "nav": "直島 宮浦港" }] },
        { "time": "預約時段", "title": "地中美術館", "description": "以預約入場時間作為全日行程錨點，避免島上交通延誤。", "tags": [{ "text": "網路預約制", "kind": "warning" }], "actions": [{ "label": "Google Maps", "icon": "map-pin", "nav": "地中美術館 直島" }, { "label": "官方資訊", "icon": "ticket-check", "url": "https://benesse-artsite.jp/art/chichu.html", "kind": "secondary" }] },
        { "time": "下午", "title": "Benesse House Museum・南瓜作品", "description": "依體力安排美術館、戶外作品、黃南瓜與回宮浦港前的赤南瓜。", "tags": [{ "text": "藝術" }, { "text": "戶外防曬", "kind": "warning" }], "actions": [{ "label": "美術館", "icon": "map-pin", "nav": "Benesse House Museum Naoshima" }, { "label": "赤南瓜", "icon": "map-pin", "nav": "草間彌生 赤かぼちゃ 直島", "kind": "secondary" }] }
      ]
    },
    {
      "id": "day4",
      "tab": "7/21",
      "number": "D4",
      "title": "7/21 二｜香川文化線 → 道後",
      "subtitle": "屋島 → 善通寺 → 琴平 → 丸龜 → 松山",
      "route": "本次最長的多站移動日。金刀比羅宮優先，時間不足時縮短善通寺或丸龜城。",
      "stops": [
        { "time": "08:30", "type": "hotel", "title": "高松住宿退房", "description": "雖然最晚 10:00 退房，建議提早出發避開金刀比羅宮正午暑熱。", "tags": [{ "text": "退房" }, { "text": "行李放車內", "kind": "warning" }], "actions": [{ "label": "前往善通寺", "icon": "navigation", "nav": "総本山善通寺" }] },
        { "time": "09:30", "title": "總本山善通寺", "description": "文化停靠點，建議停留約 45–60 分鐘。", "tags": [{ "text": "周邊停車", "kind": "parking" }], "actions": [{ "label": "導航", "icon": "navigation", "nav": "総本山善通寺" }] },
        { "time": "11:00", "type": "alert", "title": "琴平・金刀比羅宮", "description": "表參道、階梯參拜與午餐。夏季炎熱，補水並依體力決定攀登高度。", "tags": [{ "text": "表參道停車", "kind": "parking" }, { "text": "785 階", "kind": "warning" }], "actions": [{ "label": "導航", "icon": "navigation", "nav": "金刀比羅宮" }] },
        { "time": "14:30", "title": "丸龜城", "description": "以天守與城景為主，預計停留 60–90 分鐘。", "tags": [{ "text": "市營停車場", "kind": "parking" }], "actions": [{ "label": "導航", "icon": "navigation", "nav": "丸亀城" }] },
        { "time": "備選", "type": "shopping", "title": "唐吉訶德丸龜店", "description": "只有景點提早完成才加入；不應壓縮前往松山與道後晚餐時間。", "tags": [{ "text": "購物備案", "kind": "shop" }, { "text": "215 車位", "kind": "parking" }], "actions": [{ "label": "導航", "icon": "shopping-cart", "nav": "ドン・キホーテ丸亀店", "kind": "shop" }] },
        { "time": "17:30–18:30", "type": "hotel", "title": "Kowakuen Haruka 入住", "description": "入住後把車留飯店，晚上步行逛道後商店街與泡湯。", "tags": [{ "text": "飯店停車", "kind": "parking" }, { "text": "連住 2 晚" }], "actions": [{ "label": "導航住宿", "icon": "navigation", "nav": "道後温泉 ホテル古湧園 遥" }] }
      ]
    },
    {
      "id": "day5",
      "tab": "7/22",
      "number": "D5",
      "title": "7/22 三｜松山城・大街道・道後",
      "subtitle": "松山市區觀光與購物日",
      "route": "市區停車後以步行或路面電車串聯。晚上回道後溫泉，不必一直移動車輛。",
      "stops": [
        { "time": "09:00", "title": "松山城・纜車街", "description": "上午先登城避開暑熱；導航至纜車東雲口附近停車場。", "tags": [{ "text": "市區收費停車", "kind": "parking" }, { "text": "上午優先", "kind": "warning" }], "actions": [{ "label": "導航", "icon": "navigation", "nav": "松山城ロープウェイのりば東雲口" }] },
        { "time": "中午起", "type": "shopping", "title": "大街道・唐吉訶德松山大街道店", "description": "午餐後沿大街道逛街，唐吉訶德直接排在步行動線中。", "tags": [{ "text": "購物", "kind": "shop" }, { "text": "松山鯛飯" }], "actions": [{ "label": "導航", "icon": "shopping-cart", "nav": "ドン・キホーテ松山大街道店", "kind": "shop" }] },
        { "time": "下午", "title": "銀天街", "description": "從大街道接續逛街與咖啡，依體力決定停留時間。", "tags": [{ "text": "商店街" }], "actions": [{ "label": "Google Maps", "icon": "map-pin", "nav": "松山銀天街" }] },
        { "time": "傍晚", "type": "hotel", "title": "道後溫泉本館・道後商店街", "description": "返回飯店後步行前往，安排泡湯、晚餐與伴手禮。", "tags": [{ "text": "步行" }, { "text": "溫泉" }], "actions": [{ "label": "道後本館", "icon": "map-pin", "nav": "道後温泉本館" }] }
      ]
    },
    {
      "id": "day6",
      "tab": "7/23",
      "number": "D6",
      "title": "7/23 四｜松山 → 高松機場",
      "subtitle": "退房・高速移動・還車・返台",
      "route": "建議 15:30 抵達租車公司附近。還車前加滿指定油種，保留塞車與接駁緩衝。",
      "stops": [
        { "time": "11:00 前", "type": "hotel", "title": "Kowakuen Haruka 退房", "description": "確認行李、停車券與車內物品後出發。", "tags": [{ "text": "退房" }], "actions": [{ "label": "前往下一站", "icon": "navigation", "nav": "WORKMAN Plus 松山インター店" }] },
        { "time": "備選", "type": "shopping", "title": "WORKMAN Plus 松山交流道店", "description": "高松店未買齊才停靠；逛完直接由松山交流道上高速。", "tags": [{ "text": "最後補買", "kind": "shop" }, { "text": "17 車位", "kind": "parking" }], "actions": [{ "label": "導航", "icon": "shopping-bag", "nav": "WORKMAN Plus 松山インター店", "kind": "shop" }] },
        { "time": "15:00 前後", "type": "alert", "title": "機場附近加油・租車還車", "description": "依租車公司規定加滿油並保留收據；確認 ETC、車機與座椅縫隙沒有遺留物。", "tags": [{ "text": "加滿油", "kind": "warning" }, { "text": "保留收據", "kind": "warning" }], "actions": [{ "label": "導航機場", "icon": "navigation", "nav": "高松空港" }] },
        { "time": "19:05", "title": "CI0179 高松起飛", "description": "預計 20:55 抵達桃園機場。", "tags": [{ "text": "國際線", "kind": "warning" }] }
      ]
    }
  ],
  "drive": {
    "notes": [
      { "icon": "badge-japanese-yen", "title": "高速與 ETC", "description": "確認租車是否附 ETC 卡；交流道依導航走 ETC 或一般車道，保留現金與信用卡備用。" },
      { "icon": "fuel", "title": "加油與還車", "description": "確認汽油種類。7/23 還車前加滿，收據留到完成驗車為止。" },
      { "icon": "parking-circle", "title": "停車策略", "description": "直島日把車留高松港；松山市區固定停一次，再改用步行或路面電車。" }
    ],
    "details": [
      { "icon": "shield-alert", "title": "右駕與夏季安全", "items": ["轉彎後提醒自己回到左側車道，路口特別注意。", "山路或窄路不勉強超車，導航若導入小路可改走較大的國道。", "每 90–120 分鐘安排休息；車內不可留下行李或電子產品曝曬。"] },
      { "icon": "cloud-rain", "title": "雨天替代原則", "text": "鳴門強風或直島船班異動時，優先保留安全與預約；購物點可移到雨天，戶外景點縮短。" },
      { "icon": "lock-keyhole", "title": "公開頁面隱私", "text": "GitHub Pages 是公開網站。不要加入護照、房號、訂房姓名、租車合約編號或私人電話。" }
    ]
  }
};
