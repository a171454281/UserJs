// ==UserScript==
// @name        []emptyName
// @namespace   https://github.com/dodying/UserJs
// @version     1.0
// @grant       GM_registerMenuCommand
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       @noframes
// @author      Dodying
// @namespace   https://github.com/dodying/UserJs
// @supportURL  https://github.com/dodying/UserJs/issues
// @icon        https://raw.githubusercontent.com/dodying/UserJs/master/Logo.png
// @run-at      document-idle
// @include     *
// ==/UserScript==
(function() {
  'use strict';
  var host = location.host;
  GM_registerMenuCommand('Add to White', function() {
    addList(host, 0);
  }, 'w');
  GM_registerMenuCommand('Add to Black', function() {
    addList(host, 1);
  }, 'b');
  var list = GM_getValue('list', {});
  if (host in list) {
    if (list[host] === 1) document.title = '';
    return;
  }
  var blackWord = ['性', '父', '母', '爸', '妈', '姊', '姐', '妹', '哥', '兄', '弟', '女儿', '姑', '嫂', '舅', '丰满', '鸡巴', '柔嫩', '女儿', '乱伦', '乳', '屁股', '淫', '欲', '色', '成人'];
  var t = document.title;
  var i;
  for (i = 0; i < blackWord.length; i++) {
    if (t.match(blackWord[i])) {
      addList(host, 1);
      break;
    }
  }

  function addList(host, status) {
    var list = GM_getValue('list', {});
    list[host] = status;
    GM_setValue('list', list);
    if (status) document.title = '';
  }
})();
