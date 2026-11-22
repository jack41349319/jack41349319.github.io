# 彬台科技經營管理儀表板｜部署檔案

## 檔案內容
- `index.html`：完整單頁網站，LOGO 已內嵌，無需額外圖片或建置工具。

## GitHub Pages 部署
1. 將 `index.html` 上傳至 GitHub 儲存庫根目錄。
2. 開啟儲存庫 **Settings → Pages**。
3. 在 **Build and deployment** 選擇 **Deploy from a branch**。
4. 選擇要部署的分支（通常為 `main`）及資料夾 **/(root)**，儲存設定。
5. 等待 GitHub Pages 完成部署，再從 Pages 頁面開啟網站網址。

## Vercel 靜態部署
1. 將此資料夾內容放入 Git 儲存庫並推送。
2. 在 Vercel 匯入該儲存庫。
3. Framework Preset 選 **Other**；Build Command 留空；Output Directory 設為 `.`。
4. 部署完成後使用 Vercel 提供的網址檢視。

此網站為純 HTML/CSS/JavaScript，不需要安裝套件或設定環境變數。
