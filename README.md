# 2026 四國自駕行程導航

2026/7/18–7/23 四國六天五夜自駕旅行的 GitHub Pages 手機版行程工具。

## 功能

- 六天行程與住宿、航班資訊
- 每個目的地一鍵開啟 Google Maps 自駕導航
- 停車、潮汐、船班、加油與還車提醒
- Workman、唐吉訶德及大型家電店建議動線
- 手機優先版面與 PWA 離線快取
- 自動顯示出發倒數或目前旅程日數

本專案專為日本自駕設計，不包含 Uber、Naver Map 或 KakaoMap。

## GitHub Pages

建立新的 GitHub repository，例如：

```text
shikoku-roadtrip-2026
```

將本資料夾內容推送到 repository 的預設分支，並在 GitHub 的 `Settings > Pages` 選擇從該分支根目錄部署。預計網址：

```text
https://bedstv.github.io/shikoku-roadtrip-2026/
```

## 檔案

- `index.html`：行程、導航與手機介面
- `assets/naruto-strait.jpg`：頁首鳴門海峽照片
- `assets/lucide.min.js`：離線可用的介面圖示
- `manifest.webmanifest`：PWA 設定
- `sw.js`：離線快取
- `robots.txt`：要求搜尋引擎不要索引
- `.nojekyll`：避免 GitHub Pages 套用 Jekyll

## 現場使用

1. 旅行前先在手機開啟一次網站，讓行程內容進入快取。
2. iPhone 可從 Safari 分享選單加入主畫面；Android 可由瀏覽器安裝網站。
3. 導航按鈕會以目前位置為起點，開啟 Google Maps 的自駕路線。
4. 建議預先下載香川、德島與愛媛地區的 Google Maps 離線地圖。

## 隱私

GitHub Pages 是公開網站。雖然已加入 `noindex`，仍請勿放入護照、房號、訂房姓名、租車合約編號或私人電話。

## 圖片授權

頁首照片為 [Naruto Strait from Uzunomichi Promenade](https://commons.wikimedia.org/wiki/File:Naruto_Strait_from_Uzunomichi_Promenade.jpg)，作者 Soramimi，授權 CC BY-SA 4.0。
