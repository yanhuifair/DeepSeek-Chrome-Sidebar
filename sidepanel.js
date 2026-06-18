/**
 * DeepSeek Sidebar - 侧栏脚本
 * 纯粹的 DeepSeek 侧栏，iframe 全屏展示官方页面
 * 后台通过 Cookie 检测自动登录状态，登录后刷新 iframe
 */

const deepseekFrame = document.getElementById("deepseek-frame");

// 当后台检测到 Cookie 登录时，刷新 iframe 继承会话
chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === "REFRESH_FRAME") {
    deepseekFrame.src = deepseekFrame.src;
  }
});
