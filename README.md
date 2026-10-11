# LiouLiou 生活工坊

LiouLiou 與小雀共同開發的實用工具、小程式與創意作品。

這是獨立的應用程式與創作工坊，不隸屬於 `life_base` 的人生資料治理體系。

## 入口

- [LiouLiou 生活工坊](https://sixteenpct.github.io/life_workshop/)
- [小棉倉](https://sixteenpct.github.io/life_workshop/xiaomiancang/)：衛生棉庫存、補貨與使用記錄。
- [小日倉](https://sixteenpct.github.io/life_workshop/xiaorichang/)：生活用品、位置與保存期限管理。

Pages 已部署；完整驗收狀態與待本人測試項目請讀 [施工紀錄](docs/MIGRATION_STATUS.md)。

## 目錄與維護

- `index.html`：工坊入口，純 HTML/CSS，無資料存取。
- `xiaomiancang/index.html`、`xiaorichang/index.html`：各自獨立的原應用程式（已加入工坊導航、footer 與捲動工具）。
- `CHATGPT_BOOTSTRAP.md`：小雀接手入口。
- `docs/MIGRATION_SOURCES.json`：來源 SHA、全部原 commit、檔案與 bundle 指紋。
- `docs/history/`：兩套完整 Git bundle；保留原 SHA、作者、日期及 parent graph。

沒有 build 或 npm 安裝需求。GitHub Pages 使用 `main` 根目錄，`.nojekyll` 保留靜態站部署行為。
介面維護共用 `assets/site-chrome.css` 與 `assets/scroll-tools.js`；本次修改詳見 [介面更新](docs/UI_CHANGES_20261011.md)。
新增作品時建立自己的子目錄，再加入首頁入口；不強行合併應用程式。

## 資料保護

此次只整合 Repo 與網站部署。原 Supabase 專案、資料表、RLS、帳號、使用者資料與本機快取識別都不變。
2026-10-11 本人回報新站驗收正常並另行核准退役；兩個舊 Repo 已刪除，舊 Pages 退役。詳見 [退役紀錄](docs/RETIREMENT_20261011.md)。
同一瀏覽器、相同 `sixteenpct.github.io` origin 的本機儲存不因子路徑而分割。登入仍使用原本的帳號密碼流程。
公開頁面僅含原本的 Supabase publishable key；不得加入私人 token、密碼或 service role key。

## Git 歷史

採用不 squash 的 subtree 方式：原檔放入對應子目錄，匯入 bundle 中的原 Git objects，
再建立保留來源 HEAD 作為第二親的合併 commit。所有來源 commit 須成為新 `main` 的 ancestor 才算完成。
一次性歷史匯入已成功，原程序已移至 `docs/history/import-history.workflow.yml` 留存，
不再置於啟用中的 workflow 目錄。程序包含版本、數量、tree 一致性與非強制 push 檢查。
全部 27 個原 commit 已成為新 main 的 ancestor，原 SHA 與 parent graph 均保留。
程序未修改來源 Repo 或 Supabase，也未執行正式資料修改測試。

追溯匯入前路徑可使用：

```bash
git log 7351dd92ec5899350952ba7cb5ed00be5042976a -- index.html
git log 617bc719f8803a127fe57571b671fbb739b261bf -- index.html
```

來源在原 commit 的路徑仍是 `index.html`，不可把只顯示新子目錄的 log 當成完整歷史。
