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
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Contact */ "./components/Contact.js");
/* harmony import */ var _utils_lang__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/lang */ "./utils/lang.js");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/data */ "./utils/data.js");
/* harmony import */ var _components_Work__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Work */ "./components/Work.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
var _this = undefined,
    _jsxFileName = "U:\\Me\\Portfolio\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("en"),
      lang = _useState[0],
      setLang = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // alert("Website Under Construction!");
    if (typeof window.localStorage.lang !== "undefined") {
      setLang(window.localStorage.lang);
    }

    (function () {
      (function () {
        window.ldfdr = window.ldfdr || {};

        (function (d, s, ss, fs) {
          fs = d.getElementsByTagName(s)[0];

          function ce(src) {
            var cs = d.createElement(s);
            cs.src = src;
            setTimeout(function () {
              fs.parentNode.insertBefore(cs, fs);
            }, 1);
          }

          ce(ss);
        })(document, 'script', 'https://sc.lfeeder.com/lftracker_v1_lYNOR8xe9Gq7WQJZ.js');
      })();
    });
  }, []);

  var handleLang = function handleLang(lang) {
    setLang(lang);
    Object(_utils_lang__WEBPACK_IMPORTED_MODULE_7__["storeLang"])(lang);
  };

  var data = Object(_utils_data__WEBPACK_IMPORTED_MODULE_8__["getData"])(lang);
  return __jsx("div", {
    id: "top",
    className: "jsx-2784437683" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-2784437683",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, "(Under Construction) Ashraf El ghinoussi's Portfolio"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-2784437683",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  })), 1 ? "" : undefined, __jsx(_components_Welcome__WEBPACK_IMPORTED_MODULE_4__["default"], {
    setLang: handleLang,
    data: data["welcome"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }), __jsx(_components_About__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }), __jsx(_components_Contact__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }), __jsx(_components_Work__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2784437683",
    __self: _this
  }, "html,body{padding:0;margin:0;font-family:'Raleway',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen, Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-weight:400;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlU6XFxNZVxcUG9ydGZvbGlvXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMER5QixBQUltQixBQVFZLFVBUGIsU0FFNkQsR0FNeEUsNElBTDhCLGdCQUM5QiIsImZpbGUiOiJVOlxcTWVcXFBvcnRmb2xpb1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMYW5nUG9wVXAgZnJvbSAnLi4vY29tcG9uZW50cy9MYW5nUG9wVXAnO1xuaW1wb3J0IFdlbGNvbWUgZnJvbSAnLi4vY29tcG9uZW50cy9XZWxjb21lJztcbmltcG9ydCBBYm91dCBmcm9tICcuLi9jb21wb25lbnRzL0Fib3V0JztcbmltcG9ydCBDb250YWN0IGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGFjdCc7XG5pbXBvcnQgeyBzdG9yZUxhbmcsIGdldExhbmcgfSBmcm9tICcuLi91dGlscy9sYW5nJztcbmltcG9ydCB7IGdldERhdGEgfSBmcm9tICcuLi91dGlscy9kYXRhJztcbmltcG9ydCBXb3JrIGZyb20gJy4uL2NvbXBvbmVudHMvV29yayc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyJztcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgW2xhbmcsIHNldExhbmddID0gdXNlU3RhdGUoXCJlblwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGFsZXJ0KFwiV2Vic2l0ZSBVbmRlciBDb25zdHJ1Y3Rpb24hXCIpO1xuICAgIGlmICh0eXBlb2Ygd2luZG93LmxvY2FsU3RvcmFnZS5sYW5nICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBzZXRMYW5nKHdpbmRvdy5sb2NhbFN0b3JhZ2UubGFuZyk7XG4gICAgfVxuICAgICgpID0+IHtcblxuICAgICAgKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB3aW5kb3cubGRmZHIgPSB3aW5kb3cubGRmZHIgfHwge307XG4gICAgICAgIChmdW5jdGlvbiAoZCwgcywgc3MsIGZzKSB7XG4gICAgICAgICAgZnMgPSBkLmdldEVsZW1lbnRzQnlUYWdOYW1lKHMpWzBdO1xuXG4gICAgICAgICAgZnVuY3Rpb24gY2Uoc3JjKSB7XG4gICAgICAgICAgICB2YXIgY3MgPSBkLmNyZWF0ZUVsZW1lbnQocyk7XG4gICAgICAgICAgICBjcy5zcmMgPSBzcmM7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgZnMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY3MsIGZzKSB9LCAxKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjZShzcyk7XG4gICAgICAgIH0pKGRvY3VtZW50LCAnc2NyaXB0JywgJ2h0dHBzOi8vc2MubGZlZWRlci5jb20vbGZ0cmFja2VyX3YxX2xZTk9SOHhlOUdxN1dRSlouanMnKTtcbiAgICAgIH0pKCk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlTGFuZyA9IChsYW5nKSA9PiB7XG4gICAgc2V0TGFuZyhsYW5nKTtcbiAgICBzdG9yZUxhbmcobGFuZyk7XG4gIH1cblxuICBjb25zdCBkYXRhID0gZ2V0RGF0YShsYW5nKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIGlkPVwidG9wXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPihVbmRlciBDb25zdHJ1Y3Rpb24pIEFzaHJhZiBFbCBnaGlub3Vzc2kncyBQb3J0Zm9saW88L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICB7KDEgPyBcIlwiIDogPExhbmdQb3BVcCBzZXRMYW5nPXtoYW5kbGVMYW5nfSBkYXRhPXtkYXRhW1wibGFuZ3VhZ2VcIl19IC8+KX1cbiAgICAgIDxXZWxjb21lIHNldExhbmc9e2hhbmRsZUxhbmd9IGRhdGE9e2RhdGFbXCJ3ZWxjb21lXCJdfSAvPlxuICAgICAgPE5hdmJhciAvPlxuICAgICAgPEFib3V0IC8+XG4gICAgICA8Q29udGFjdCAvPlxuICAgICAgPFdvcmsgLz5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBodG1sLFxuICAgICAgYm9keSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSYWxld2F5JywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLCBPeHlnZW4sXG4gICAgICAgICAgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICB9XG5cbiAgICAgICoge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgfVxuICAgICAgXG4gICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXX0= */\n/*@ sourceURL=U:\\\\Me\\\\Portfolio\\\\pages\\\\index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.0d991f97cd2f77c09b8d.hot-update.js.map