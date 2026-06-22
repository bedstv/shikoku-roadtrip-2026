# 四國旅行 GitHub Pages 異動方式

本專案已改成「版面與資料分離」：

- `index.html`：手機版網頁版面與顯示邏輯，通常不要手動改。
- `data.js`：行程資料主檔，之後大多數行程異動只要改這裡。
- `sw.js`：離線快取與更新策略，已改成 `index.html` / `data.js` 優先抓最新版，降低手機看到舊資料的機率。

## 最建議的修改流程

之後要改行程時，優先修改 `data.js`：

1. 找到 `window.TRIP_DATA`
2. 找到要修改的日期，例如 `day2`、`day3`
3. 修改 `stops` 裡面的景點、時間、說明、標籤或導航地址
4. 同步更新 `meta.updatedAt` 與 `meta.version`
5. 若有變更 `data.js` 檔名參數，也同步調整 `index.html` 裡的 `data.js?v=...`

## 版本資訊 / 快取辨識

頁面上方會顯示：

```text
更新：YYYY-MM-DD HH:mm｜資料分離版 v4
```

如果手機看到的時間不是最新時間，通常代表瀏覽器或 Service Worker 還讀到舊快取。

建議每次正式更新都修改 `data.js` 內的：

```js
updatedAt: "YYYY-MM-DD HH:mm"
version: "資料分離版 v4"
```

## 快取排除方式

若手機仍看到舊版，可嘗試：

1. 關閉再重新開啟瀏覽器分頁
2. 在網址後面加上 `?v=YYYYMMDDHHmm`
3. iPhone Safari 可到「設定 → Safari → 清除瀏覽資料」
4. Chrome 可長按重新整理或清除該網站資料

## 修改範例

```js
{
  time: "下午",
  type: "shopping",
  title: "新景點名稱",
  description: "這裡填寫簡短提醒。",
  tags: [
    { text: "購物", kind: "shop" },
    { text: "有停車場", kind: "parking" }
  ],
  actions: [
    { label: "導航", icon: "navigation", nav: "Google Maps 可搜尋的地址或店名" }
  ]
}
```

## 注意事項

GitHub Pages 是公開網站，請不要放入：

- 護照號碼
- 房號
- 訂房姓名
- 租車合約編號
- 私人電話
- 信用卡或付款資料
