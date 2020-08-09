webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_LangPopUp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/LangPopUp */ "./components/LangPopUp.js");
/* harmony import */ var _components_Welcome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Welcome */ "./components/Welcome.js");
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/About */ "./components/About.js");
/* harmony import */ var _components_Work__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Work */ "./components/Work/index.js");
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Contact */ "./components/Contact.js");
/* harmony import */ var _utils_lang__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/lang */ "./utils/lang.js");
var _this = undefined,
    _jsxFileName = "U:\\Me\\Portfolio\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      lang = _useState[0],
      setLang = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    alert("Website Under Construction!");

    if (typeof window.localStorage.lang !== "undefined") {
      setLang(window.localStorage.lang);
    } else {
      setLang("en");
    }
  }, []);

  var handleLang = function handleLang(lang) {
    setLang(lang);
    Object(_utils_lang__WEBPACK_IMPORTED_MODULE_8__["storeLang"])(lang);
  };

  var data = Object(_utils_lang__WEBPACK_IMPORTED_MODULE_8__["getData"])(lang);
  return __jsx("div", {
    className: "jsx-3398700736" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-3398700736",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, "(Under Construction) Ashraf El ghinoussi's Portfolio"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-3398700736",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  })), lang ? "" : __jsx(_components_LangPopUp__WEBPACK_IMPORTED_MODULE_3__["default"], {
    setLang: handleLang,
    data: data["language"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 23
    }
  }), __jsx(_components_Welcome__WEBPACK_IMPORTED_MODULE_4__["default"], {
    setLang: handleLang,
    data: data["welcome"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }), __jsx(_components_About__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }), __jsx(_components_Work__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }), __jsx(_components_Contact__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3398700736",
    __self: _this
  }, "html,body{padding:0;margin:0;font-family:'Raleway',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen, Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-weight:400;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlU6XFxNZVxcUG9ydGZvbGlvXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUN5QixBQUltQixBQVFZLFVBUGIsU0FFNkQsR0FNeEUsNElBTGtCLGdCQUNsQiIsImZpbGUiOiJVOlxcTWVcXFBvcnRmb2xpb1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMYW5nUG9wVXAgZnJvbSAnLi4vY29tcG9uZW50cy9MYW5nUG9wVXAnO1xuaW1wb3J0IFdlbGNvbWUgZnJvbSAnLi4vY29tcG9uZW50cy9XZWxjb21lJztcbmltcG9ydCBBYm91dCBmcm9tICcuLi9jb21wb25lbnRzL0Fib3V0JztcbmltcG9ydCBXb3JrIGZyb20gJy4uL2NvbXBvbmVudHMvV29yayc7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRhY3QnO1xuaW1wb3J0IHsgZ2V0RGF0YSwgc3RvcmVMYW5nLCBnZXRMYW5nIH0gZnJvbSAnLi4vdXRpbHMvbGFuZyc7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IFtsYW5nLCBzZXRMYW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFsZXJ0KFwiV2Vic2l0ZSBVbmRlciBDb25zdHJ1Y3Rpb24hXCIpO1xuICAgIGlmICh0eXBlb2Ygd2luZG93LmxvY2FsU3RvcmFnZS5sYW5nICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBzZXRMYW5nKHdpbmRvdy5sb2NhbFN0b3JhZ2UubGFuZyk7XG4gICAgfWVsc2V7XG4gICAgICBzZXRMYW5nKFwiZW5cIik7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlTGFuZyA9IChsYW5nKSA9PiB7XG4gICAgc2V0TGFuZyhsYW5nKTtcbiAgICBzdG9yZUxhbmcobGFuZyk7XG4gIH1cblxuICBjb25zdCBkYXRhID0gZ2V0RGF0YShsYW5nKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT4oVW5kZXIgQ29uc3RydWN0aW9uKSBBc2hyYWYgRWwgZ2hpbm91c3NpJ3MgUG9ydGZvbGlvPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgICB7KGxhbmcgPyBcIlwiIDogPExhbmdQb3BVcCBzZXRMYW5nPXtoYW5kbGVMYW5nfSBkYXRhPXtkYXRhW1wibGFuZ3VhZ2VcIl19IC8+KX1cbiAgICAgIDxXZWxjb21lIHNldExhbmc9e2hhbmRsZUxhbmd9IGRhdGE9e2RhdGFbXCJ3ZWxjb21lXCJdfSAvPlxuICAgICAgPEFib3V0IC8+XG4gICAgICA8V29yayAvPlxuICAgICAgPENvbnRhY3QgLz5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBodG1sLFxuICAgICAgYm9keSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSYWxld2F5JywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLCBPeHlnZW4sXG4gICAgICAgICAgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICB9XG5cbiAgICAgICoge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgfVxuICAgICAgXG4gICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXX0= */\n/*@ sourceURL=U:\\\\Me\\\\Portfolio\\\\pages\\\\index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.0ca8f9b7f0a98aabba22.hot-update.js.map