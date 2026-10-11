# 舊 Repo 退役｜2026-10-11

狀態：USER_ACCEPTANCE_CONFIRMED / DELETION_AUTHORIZED / BOTH_REPOS_DELETED。

- 本人於 Asia/Taipei 2026-10-11 21:43 回報「驗收正常 可以刪除舊REPO」。
- 刪除前另行告知舊 Pages 停止，以及 GitHub Repo 的 Issues、Wiki、設定與執行記錄隨之刪除；Git bundle 只保存 Git 原始碼與歷史。
- 小棉倉最新 main：`7351dd92ec5899350952ba7cb5ed00be5042976a`。
- 小日倉最新 main：`617bc719f8803a127fe57571b671fbb739b261bf`。
- 兩個最新來源 HEAD 與先前匯入版本相同，皆可從生活工坊 main 追溯；兩套完整 bundle verify 通過。
- 刪除前生活工坊 checkpoint：`af0553885109b78793e2adbd6bfc495e3c4fd4e7`。
- GitHub Mobile 再驗證後，小棉倉刪除成功；GitHub 明確顯示 `Your repository "Sixteenpct/xiaomiancang" was successfully deleted.`。
- 小日倉刪除成功；GitHub 明確顯示 `Your repository "Sixteenpct/xiaorichang" was successfully deleted.`。
- 兩個舊 Repo 已從帳號 repository 清單移除；舊 GitHub Pages 隨 Repo 刪除退役。
- Supabase 專案、帳號、資料表、RLS 及正式資料均未操作；新站繼續使用原服務。

## 接手與還原

唯一維護入口為 `Sixteenpct/life_workshop`；不要再使用已刪除來源 Repo 的 URL 當成可讀取的現況來源。
原始來源 SHA／指紋／27 個原 commit 清單仍保存在 MIGRATION_SOURCES.json，原 graph 仍在新 repo。
完整 bundle 保存在 `docs/history/xiaomiancang.bundle` 與 `docs/history/xiaorichang.bundle`。
需要還原時，從 bundle clone 到新的本機目錄，再另行建立／上傳 Repo；不要將 metadata 或舊部署設定視為已備份。

本人驗收與代理端檢查分開：本人回報驗收正常；代理端未取得 Supabase 登入狀態，未代替本人測試正式資料。
