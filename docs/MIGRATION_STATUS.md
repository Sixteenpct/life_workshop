# 搬遷狀態｜2026-10-11

目前：SOURCE_VERIFIED / IMPORT_PREPARED / PAGES_PENDING。

## 已確認

- 新 Public Repo 已建立。
- 初次寫入曾回傳 403；本人更新授權後，checkpoint `20729fdbc52bebd8a433438b620def7f254b9efb` 已寫入及讀回驗證，原權限故障已解除。
- 兩個來源最新 main 與本人提供的 SHA 相同（详見 MIGRATION_SOURCES.json）。
- 完整 bundle 已由 `git bundle verify` 確認包含完整歷史；來源 index.html 原檔未改。
- 原始碼檢查：同一 Supabase 專案、不同應用程式資料表／快取鍵，密碼登入；未发现子路徑相依的資源 URL。
- 舊 Repo、舊 Pages 及 Supabase 尚未修改。

## 接續與驗收

1. 等一次性歷史匯入 workflow 成功，再 fetch 最新 main，確認全部 27 個原 commit ancestor 與 subtree tree。
2. 設定 main 根目錄 Pages，確認實際部署及首頁／兩個 app URL。
3. 驗收首頁導航、登入畫面與安全的基本操作、桌機／手機排版及 Supabase JS 初始化。
4. 登入及原資料讀取：尚未實測。無安全登入狀態時保留待本人驗收。
5. 舊 Pages 可用性與來源 SHA 須讀回確認。

## 舊站退役

目前禁止退役。新站驗收、本人確認資料及日常使用正常後，先保留來源 SHA 與完整歷史，
清點書籤與相關入口，再取得本人另外同意才討論封存或停用。Supabase 不随 Repo 退役而刪除。
