'use strict';
// 一番下を表示
window.onload = function() {
  console.info("onloadイベント発生");
  window.scrollTo(0,document.body.scrollHeight);
}

// エンターキー と Ctrlキー（Macの場合はCommandキー）を押したら送信
const formElement = document.forms['message-form'];
const textareaElement = formElement.elements['content'];
textareaElement.addEventListener('keydown', (event) => {
// 送信キーほ押したら
  console.info("keydownイベント発生");
  if (isPressedSubmitKey(event)) {
    // キーボード入力をキャンセルして送信
    event.preventDefault();
    formElement.submit();
  }  
});

// 送信キーを押していたか判定
function isPressedSubmitKey(event) {
  console.info(`event = ${event}`)
  if (event.key !== 'Enter') {
    return false;
  }
  if (event.ctrlKey) {
    return true;
  }
  // MacのCommandキーはmetaKeyと言う名前
  if (event.metaKey) {
    return true;
  }
};