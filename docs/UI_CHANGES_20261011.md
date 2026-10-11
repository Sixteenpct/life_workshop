# LiouLiou 生活工坊介面更新｜2026-10-11

來源基線：`3ee51f176490992e97ba1d3d0a6238445df90245`。
FF14 參考：`Sixteenpct/ffxiv_journey@9b25840416a18266475345290510f991e09ca6f5`。

## 本次修改

- 首頁加入金色工坊 SVG favicon。
- 收緊首頁垂直留白與卡片高度，讓圖 1 的 27 吋桌機畫面顯示完整頁面與 footer；保留窄版自然捲動，不裁切內容或隱藏 overflow。
- 三頁 footer 置中，沿用職業養成學院 11.48px、淡灰藍文字與 650 字重 credit，加入 `© sixteenpct · LIFE WORKSHOP`。
- 移除首頁原始碼入口；小倉入口與麵包屑的跨頁連結使用新分頁及 noopener noreferrer。
- 兩個小倉加入麵包屑，對齊原標題橫幅外框左邊緣；沿用學院 11.48px 及金色連結／灰藍目前頁樣式。
- 兩個小倉加入工坊同款藍色「捲到底部 ↓」、綠色「TOP ↑」，共用 180ms ease-out 動畫；窄版避開固定底部功能列。
- 尊重系統減少動態效果設定時立即到達；連續點選會取消前一個動畫。

## 本地驗證

- 三頁 HTML ID 不重複，新增資源路徑可解析，跨頁連結 target／rel 正確。
- 兩套應用程式原有 inline script 逐位元相同；只新增導航、footer、共用樣式及獨立捲動 script。
- JavaScript 語法檢查通過。
- 捲動驗證：180ms 結束、90ms ease-out 中點、頁首／頁底精確位置、連點取消、減少動態效果。

## 部署後驗收

介面 checkpoint：`4b4f9c629c7acf2e61bd8ee440335d697a1cd56d`。

- GitHub Pages run `38142774869`：completed / success，部署 commit 與介面 checkpoint 一致。
- 九個修改／新增檔案從遠端讀回逐位元相同；兩個來源 HEAD 仍是 main 的 ancestor。
- 首頁實際瀏覽器 1363 × 936：scrollHeight = 936，footer bottom = 924；整頁不需垂直捲動，footer 11.48px 置中，原始碼入口已移除。
- 實際點選兩張卡片均開啟不同新分頁，三頁網址與頁面標題正常。
- 兩小倉麵包屑 x = 107.5，與原標題橫幅 x = 107.5 對齊；footer 置中、11.48px。
- 按鈕實際套用 13px、750 字重、8.2px 圓角及工坊藍／綠色；共用 180ms script 路徑正常。
- 兩小倉登入窗正常顯示；未提供安全登入狀態，不宣稱已通過登入後資料、同步或實際長頁捲動。
- 手機規則已加入單欄與固定導覽避讓；此瀏覽器未提供 viewport 調整功能，手機實機畫面仍待驗收。
登入後庫存／記錄／同步仍需安全登入狀態；本次不修改正式資料、Supabase、舊 Repo 或舊站。
原 MIGRATION_SOURCES.json 的 tree／index 指紋代表最初搬遷基線；本次已授權的介面修改不覆寫歷史來源證據。
