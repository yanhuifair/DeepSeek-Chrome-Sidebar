# DeepSeek Chrome 侧边栏

[English](README.md)

[![GitHub](https://img.shields.io/badge/GitHub-yanhuifair%2FDeepSeek--Chrome--Sidebar-blue?logo=github)](https://github.com/yanhuifair/DeepSeek-Chrome-Sidebar)

在 Chrome 侧边栏中使用 DeepSeek，无需切换标签页。

![alt text](images/preview.png)

---

## ✨ 功能

- **一键打开** — 点击扩展图标，DeepSeek 在侧边栏即时弹出
- **Cookie 自动登录** — 自动检测 DeepSeek 官网登录状态，无需重复登录
- **始终可见** — 写代码、查资料时 AI 助手始终在侧边栏待命
- **原生体验** — 直接加载官方页面，保留完整功能

---

## 📦 安装

### Chrome Web Store（推荐）

> 前往 [Chrome Web Store](https://chrome.google.com/webstore) 搜索 "DeepSeek Sidebar"

### 开发者模式手动安装

1. `git clone https://github.com/yanhuifair/DeepSeek-Chrome-Sidebar.git`
2. 打开 `chrome://extensions/`，开启右上角「开发者模式」
3. 点击「加载已解压的扩展程序」，选择项目文件夹

---

## 🔒 隐私

本扩展**不收集、不存储、不传输**任何用户数据。详见 [隐私政策](privacy-policy.html)。

---

## 📋 权限说明

| 权限 | 用途 |
|------|------|
| `sidePanel` | 在 Chrome 侧边栏中展示页面 |
| `cookies` | 仅检测 `chat.deepseek.com` 登录状态，不读取其他域名 |
| `declarativeNetRequest` | 移除 X-Frame-Options 限制，使页面能在侧栏正常显示 |

---

## 🛠 技术栈

- Chrome Extension Manifest V3
- Service Worker (background.js)
- Side Panel API
- Declarative Net Request

---

## 📁 项目结构

```
├── manifest.json          # 扩展配置
├── background.js          # Service Worker（Cookie 检测 + 侧栏控制）
├── sidepanel.html         # 侧栏页面
├── sidepanel.js           # 侧栏逻辑
├── sidepanel.css          # 侧栏样式
├── rules.json             # 网络请求规则
├── icons/                 # 扩展图标
├── store-assets/          # 商店素材（截图、文案）
└── privacy-policy.html    # 隐私政策
```
