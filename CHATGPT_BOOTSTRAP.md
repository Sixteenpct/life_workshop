# 生活工坊｜小雀接手入口

1. 先從最新預設分支讀 `Sixteenpct/dev_garden/CHATGPT_GLOBAL_WORKFLOW_RULES.md` 及 `CHATGPT_GIT_GLOBAL_RULES.md`。
2. 讀本 Repo 的 `README.md → docs/MIGRATION_STATUS.md → docs/MIGRATION_SOURCES.json`，確認最新 main 及實際部署狀態。
3. 一般工作依 MICRO_CHECKPOINT 保存、讀回驗證及回報；本人明確授權連續施工時可跨階段，仍須留下可恢復點。
4. Git 寫入以最新 base tree 為準，非強制更新 ref；有 SHA 衝突、適用 CI failure、權限或資料完整性疑慮時，停相依寫入並明報 checkpoint。

## 本 Repo 的邊界

`life_workshop` 是獨立工具與創作工坊，不是 life_base 的人生資料治理子系統。
兩套應用程式各自獨立；未經本人要求，不重新設計既有功能、不改快取鍵或資料邏輯。
Supabase、正式資料與舊 Repo／舊網站均受保護。退役舊站需要另一次本人同意。

## 驗證

檔案保存需以剛提交版本核對 tree／blob。歷史搬遷需檢查全部原 commit 可从 main 追溯及來源 tree 一致。
本 Repo 沒有一般應用程式測試 CI；一次性歷史匯入 workflow 只適用搬遷階段。
Pages 要確認實際 deployment；有安全登入狀態才驗證正式資料讀取，不任意增刪正式資料。
缺少登入狀態時明列待驗收，不能以原碼相同冒稱登入／資料驗收通過。
