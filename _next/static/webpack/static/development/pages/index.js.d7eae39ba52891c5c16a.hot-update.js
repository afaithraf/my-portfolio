webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./data sync recursive ^\\.\\/.*\\.json$":
/*!**********************************!*\
  !*** ./data sync ^\.\/.*\.json$ ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ar.json": "./data/ar.json",
	"./en.json": "./data/en.json",
	"./links.json": "./data/links.json",
	"./work.json": "./data/work.json"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./data sync recursive ^\\.\\/.*\\.json$";

/***/ }),

/***/ "./data/links.json":
/*!*************************!*\
  !*** ./data/links.json ***!
  \*************************/
/*! no static exports found */
/***/ (function(module) {

!(function webpackMissingModule() { var e = new Error("Cannot find module './links.json'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


/***/ })

})
//# sourceMappingURL=index.js.d7eae39ba52891c5c16a.hot-update.js.map