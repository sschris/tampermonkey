// ==UserScript==
// @name         iqiyi.com
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  
// @author       michel
// @match        https://www.iqiyi.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML =
`
.iqp-logo-box,
[adid] {
  display: none !important;
}
`;
    document.querySelector('head').appendChild(style);
})();
