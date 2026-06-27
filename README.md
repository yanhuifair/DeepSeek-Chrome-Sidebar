# DeepSeek Chrome Sidebar / DeepSeek Chrome 侧边栏

[![GitHub](https://img.shields.io/badge/GitHub-yanhuifair%2FDeepSeek--Chrome--Sidebar-blue?logo=github)](https://github.com/yanhuifair/DeepSeek-Chrome-Sidebar)

在 Chrome 侧边栏中使用 DeepSeek，无需切换标签页。
Open DeepSeek in Chrome's side panel — no more tab switching.

![alt text](images/preview.png)

---

## ✨ 功能 / Features

- **一键打开** — 点击扩展图标，DeepSeek 在侧边栏即时弹出
- **Cookie 自动登录** — 自动检测 DeepSeek 官网登录状态，无需重复登录
- **始终可见** — 写代码、查资料时 AI 助手始终在侧边栏待命
- **原生体验** — 直接加载官方页面，保留完整功能

- **One-click access** — Click the extension icon, DeepSeek pops up instantly in the sidebar
- **Auto login via cookie** — Detects DeepSeek login status automatically, no repeated login needed
- **Always visible** — Keep your AI assistant at your side while coding or researching
- **Native experience** — Loads the official page directly, preserving all features

---

## 📦 安装 / Installation

### Chrome Web Store（推荐 / Recommended）

> 前往 [Chrome Web Store](https://chrome.google.com/webstore) 搜索 "DeepSeek Sidebar"

> Go to [Chrome Web Store](https://chrome.google.com/webstore) and search "DeepSeek Sidebar"

### 开发者模式手动安装 / Manual Installation (Developer Mode)

1. `git clone https://github.com/yanhuifair/DeepSeek-Chrome-Sidebar.git`
2. 打开 `chrome://extensions/`，开启右上角「开发者模式」
3. 点击「加载已解压的扩展程序」，选择项目文件夹

1. `git clone https://github.com/yanhuifair/DeepSeek-Chrome-Sidebar.git`
2. Open `chrome://extensions/`, enable "Developer mode" in the top right
3. Click "Load unpacked", select the project folder

---

## 🔒 隐私 / Privacy

本扩展**不收集、不存储、不传输**任何用户数据。详见 [隐私政策](privacy-policy.html)。

This extension does **NOT collect, store, or transmit** any user data. See [Privacy Policy](privacy-policy.html).

---

## 📋 权限说明 / Permissions

| 权限 / Permission | 用途 / Purpose |
|------|------|
| `sidePanel` | 在 Chrome 侧边栏中展示页面 / Display page in Chrome side panel |
| `cookies` | 仅检测 `chat.deepseek.com` 登录状态，不读取其他域名 / Only check login status, no other domains |
| `declarativeNetRequest` | 移除 X-Frame-Options 限制，使页面能在侧栏正常显示 / Remove X-Frame-Options to allow embedding |

---

## 🛠 技术栈 / Tech Stack

- Chrome Extension Manifest V3
- Service Worker (background.js)
- Side Panel API
- Declarative Net Request

> Chrome 扩展 Manifest V3 · Service Worker · Side Panel API · Declarative Net Request

---

## 📁 项目结构 / Structure

```
├── manifest.json          # 扩展配置 / Extension config
├── background.js          # Service Worker（Cookie 检测 + 侧栏控制）
├── sidepanel.html         # 侧栏页面 / Side panel page
├── sidepanel.js           # 侧栏逻辑 / Side panel logic
├── sidepanel.css          # 侧栏样式 / Side panel styles
├── rules.json             # 网络请求规则 / Net request rules
├── icons/                 # 扩展图标 / Extension icons
├── store-assets/          # 商店素材（截图、文案） / Store assets
└── privacy-policy.html    # 隐私政策 / Privacy policy
```
