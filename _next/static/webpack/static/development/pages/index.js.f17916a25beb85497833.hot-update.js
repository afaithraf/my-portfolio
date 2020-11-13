webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./utils/data.js":
/*!***********************!*\
  !*** ./utils/data.js ***!
  \***********************/
/*! exports provided: getData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
var getData = function getData(name) {
  return __webpack_require__("./data sync recursive ^\\.\\/.*\\.json$")("./".concat(name, ".json"));
};

/***/ }),

/***/ "./utils/lang.js":
/*!***********************!*\
  !*** ./utils/lang.js ***!
  \***********************/
/*! exports provided: storeLang, getLang */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeLang", function() { return storeLang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLang", function() { return getLang; });
var storeLang = function storeLang() {
  var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : fallbackLang;

  if (true) {
    if (lang) {
      window.localStorage.setItem('lang', lang);
    } else {
      window.localStorage.removeItem('lang');
    }
  }
};
var getLang = function getLang() {
  if (true) {
    return window.localStorage.lang;
  } else {}
};

/***/ })

})
//# sourceMappingURL=index.js.f17916a25beb85497833.hot-update.js.map