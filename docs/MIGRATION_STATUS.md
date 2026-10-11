# 搬遷驗收｜2026-10-11

狀態：MIGRATED / PAGES_DEPLOYED / USER_ACCEPTANCE_CONFIRMED / OLD_REPOS_DELETED。

2026-10-11 本人回報「驗收正常 可以刪除舊REPO」，其後另行核准刪除已完成。
這是本人驗收回報，不將先前代理端未登入／手機未實測項目改寫成代理端測試通過。
退役詳見 [RETIREMENT_20261011.md](RETIREMENT_20261011.md)；下方舊站保留描述為最初搬遷 checkpoint 的歷史狀態。

後續介面更新：[UI_CHANGES_20261011.md](UI_CHANGES_20261011.md)。
以下原檔／tree／HTTP bytes 一致性驗證描述首次搬遷 checkpoint；
之後已授權的導航、footer、favicon 與捲動工具修改以介面更新紀錄及最新 main 為準，
不再把最新版頁面稱為與來源 index.html 完全相同。

## 保存與歷史 checkpoint

- 起始 checkpoint：`20729fdbc52bebd8a433438b620def7f254b9efb`。
- 首頁、兩套應用程式與來源 bundle：`5c15f28216b66d454f230c9fdc6ff84de84c0d1f`。
- 小棉倉不 squash 合併：`5d0ecaba2c3e4a9c0f4b3549e05145d258c65990`。
- 小日倉不 squash 合併／歷史驗證 checkpoint：`7f419b59ea8e7c02991e28229039de9021cad4f6`。
- 一次性匯入 run `38141266323`：SUCCESS。
- Pages 部署 run `38141320645`，對應 `7f419b5`：SUCCESS。
- 最終文件保存的 Pages 部署以最新 main 的實際 run 為準。

已從遠端 fetch 驗證全部 27 個原 commit 能從 main 追溯；原 SHA、作者、日期及 parent graph 保留。
兩個新子目錄 tree 與各來源 HEAD tree 完全相同；所有搬遷檔案已逐位元讀回比對。
來源完整 Git bundle 及全部 commit 清單留存於 docs/history 與 MIGRATION_SOURCES.json。
一次性匯入 workflow 完成後移至 docs/history/import-history.workflow.yml，不再啟用。

## 網站驗收結果

| 項目 | 結果與限制 |
| --- | --- |
| 首頁 | HTTP 200；正式頁 bytes 與保存內容相同；瀏覽器可正常開啟 |
| 小棉倉新網址 | HTTP 200；bytes 與來源原檔相同；登入畫面正常開啟 |
| 小日倉新網址 | HTTP 200；bytes 與來源原檔相同；登入畫面正常開啟 |
| 首頁導航 | 兩張卡片均實際點選，正確進入對應子目錄網址 |
| 桌機排版 | 1363px 瀏覽器畫面驗收；首頁、兩 app 登入狀態無水平溢出 |
| JavaScript | 兩套原 inline script 通過 node 語法檢查；瀏覽器未觀察到應用程式錯誤，只有瀏覽器擴充套件 metadata 訊息 |
| Supabase 初始化 | SDK CDN 與 Auth health 可讀性另有檢查；頁面進入正常登入 gate，未出現 SDK 未載入訊息；尚未驗證已登入資料流程 |
| 帳號登入及原資料讀取／同步 | 待本人驗收；目前沒有安全可用的登入狀態，未輸入帳密或改動正式資料 |
| 原應用程式基本功能 | 登入前頁面正常；採購、盤點、庫存、記錄等登入後操作待本人驗收 |
| 手機排版 | viewport 與響應式 CSS 已檢查；兩 app 原樣保留 520～760px 等斷點，首頁 600px 改單欄；實際手機寬度瀏覽器驗收待完成 |
| 舊網站 | 兩者 HTTP 200；回應 bytes 與來源原檔相同 |
| 舊 Repo | 無任何修改；來源 main SHA 保持原基線；未刪除、封存、停用或重新導向 |

正式網址：

- https://sixteenpct.github.io/life_workshop/
- https://sixteenpct.github.io/life_workshop/xiaomiancang/
- https://sixteenpct.github.io/life_workshop/xiaorichang/

## Supabase 與快取保護

兩份 index.html 均原樣搬入。Supabase 專案、publishable key、資料表、RLS、帳號、資料邏輯及本機快取鍵全部不變。
同一瀏覽器相同 sixteenpct.github.io origin 的 localStorage 不因子路徑而分割；這是平台行為及原碼判斷，並非已登入資料測試。
此次沒有執行資料表、RLS、帳號、使用者資料的修改、清空或重建。

## 驗證限制與待本人測試

目前 Supabase 無登入狀態；登入成功、既有資料完整與跨裝置同步不可宣稱通過。
手機窄版原擬以正式頁的 390px frame 檢查；瀏覽器安全政策禁止 data: 預覽 URL，
未繞過此限制，也未將靜態 CSS 檢查冒稱為手機實測。請用手機開啟上述三頁，
确认首頁單欄、登入視窗及登入後各頁排版，再以原帳號確認庫存／記錄及同步。
不必為驗收新增、刪除或修改正式資料。

初次 README 寫入曾因 403 Resource not accessible by integration 阻塞；本人更新授權後，
原權限故障已由成功写入與讀回解除，後續歷史匯入及 Pages 部署也已成功。

## 接手與舊站退役

SAFE_TO_RESUME：以最新 main 讀回此文件與來源清單；不要重搬已驗證歷史或重建首頁。
下一步是補登入後資料／功能及實際手機排版驗收；有問題先以仍完整保留的舊站比對。

舊 Repo 和舊站目前保持原狀。只有新站日常使用與資料驗收成功、清點書籤及相關入口、
保存來源基線後，再取得本人另外明確同意，才討論封存或停用；Supabase 不随 Repo 退役而刪除。
