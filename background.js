/**
 * DeepSeek Sidebar - Background Service Worker
 * 1. 点击扩展图标 → 打开侧栏
 * 2. 定时扫描 DeepSeek Cookie，检测到登录后通知侧栏刷新
 */

// 点击扩展图标 → 打开侧栏
chrome.action.onClicked.addListener((tab) => {
  chrome.sidePanel.open({ windowId: tab.windowId }).catch(() => {});

  // 打开侧栏后延迟检测一次 Cookie
  setTimeout(checkAndNotify, 2000);
});

// ---- Cookie 自动登录检测 ----
// 每 5 秒扫描一次 chat.deepseek.com 的 auth cookie
// 检测到登录后通知侧栏刷新 iframe（让 iframe 继承 cookie 会话）

let wasLoggedIn = false;

// 启动定时检测
setInterval(checkAndNotify, 5000);

async function checkAndNotify() {
  const loggedIn = await scanAuthCookie();

  // 从未登录 → 已登录：通知侧栏刷新
  if (loggedIn && !wasLoggedIn) {
    chrome.runtime.sendMessage({ type: "REFRESH_FRAME" }).catch(() => {});
  }

  wasLoggedIn = loggedIn;
}

/**
 * 扫描 chat.deepseek.com 的 cookie 判断是否已登录
 * 匹配已知 auth cookie 名称或包含 auth 关键词的 cookie
 */
async function scanAuthCookie() {
  try {
    const cookies = await chrome.cookies.getAll({
      domain: "chat.deepseek.com",
    });

    if (cookies.length === 0) return false;

    for (const c of cookies) {
      const name = c.name.toLowerCase();
      // 精确匹配已知 auth cookie
      if (["ds_token", "token", "auth_token", "ds_session"].includes(name)) {
        if (c.value && c.value.length > 3) return true;
      }
      // 关键词匹配
      if ((name.includes("token") || name.includes("auth") || name.includes("session")) && c.value && c.value.length > 3) {
        return true;
      }
    }

    return false;
  } catch (e) {
    return false;
  }
}
