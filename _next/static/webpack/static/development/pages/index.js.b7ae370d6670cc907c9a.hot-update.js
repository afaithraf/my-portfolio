webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scrollspy */ "./node_modules/react-scrollspy/lib/scrollspy.js");
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scrollspy__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "U:\\Me\\Portfolio\\components\\Navbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Navbar() {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var sticky = navbar.offsetTop;

    window.onscroll = function () {
      var navbar = document.getElementById("navbar");

      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    };
  }, []);

  var gotoPage = function gotoPage(pageId) {
    var elmnt = document.getElementById(pageId);
    elmnt.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return __jsx("div", {
    className: "jsx-2899922934" + " " + "cont",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("div", {
    id: "navbar",
    className: "jsx-2899922934" + " " + "navbar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-2899922934" + " " + "inside",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-2899922934" + " " + "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "#top",
    className: "jsx-2899922934",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "https://afaithraf.github.io/my-portfolio/assets/logo.png",
    alt: "ashraf logo",
    className: "jsx-2899922934",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 40
    }
  }))), __jsx("div", {
    className: "jsx-2899922934" + " " + "navigation",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, __jsx(react_scrollspy__WEBPACK_IMPORTED_MODULE_2___default.a, {
    style: {
      display: 'flex',
      padding: 0,
      margin: 0
    },
    items: ['aboutP', 'workP', 'contactP'],
    currentClassName: "current",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 3
    }
  }, __jsx("li", {
    className: "jsx-2899922934",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: "#aboutP",
    className: "jsx-2899922934",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "About me")), __jsx("li", {
    className: "jsx-2899922934",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: "#workP",
    className: "jsx-2899922934",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, "Work")), __jsx("li", {
    className: "jsx-2899922934",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: "#contactP",
    className: "jsx-2899922934",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, "Contact")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2899922934",
    __self: this
  }, ".cont.jsx-2899922934{margin-top:110vh;height:84px;}.navbar.jsx-2899922934{left:0;right:0;background:#111111b3;-webkit-backdrop-filter:blur(25px);backdrop-filter:blur(25px);top:0;color:#f1f1f1;font-weight:500;z-index:1;border-top:1px solid #ffffff38;border-bottom:1px solid #ffffff38;}.navbar.sticky.jsx-2899922934{position:fixed;}.inside.jsx-2899922934{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin:0 10vw;}.logo.jsx-2899922934{margin-right:auto;}.logo.jsx-2899922934 img.jsx-2899922934{margin:24px 0;height:30px;-webkit-transition-duration:300ms;transition-duration:300ms;}.navbar.sticky.jsx-2899922934 .logo.jsx-2899922934 img.jsx-2899922934{margin:14px 0;height:20px;}.navigation.jsx-2899922934{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.navigation.jsx-2899922934 ul.jsx-2899922934{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0;margin:auto;}.navigation.jsx-2899922934 li.jsx-2899922934{list-style:none;padding:10px 0;margin:0;width:120px;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.navigation.jsx-2899922934 li.jsx-2899922934 a.jsx-2899922934{-webkit-text-decoration:none;text-decoration:none;color:#ffffff;margin:auto;}.navigation.jsx-2899922934 li.current.jsx-2899922934 a.jsx-2899922934{color:#ffff00;}@media (max-width:840px){.logo.jsx-2899922934{margin-left:auto;}.navigation.jsx-2899922934{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlU6XFxNZVxcUG9ydGZvbGlvXFxjb21wb25lbnRzXFxOYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUN3QixBQUdxQyxBQUlULEFBWVEsQUFHRixBQUtLLEFBR0osQUFLQSxBQUlELEFBR0EsQUFLRyxBQVFLLEFBS1AsQUFJTyxBQUdKLE9BM0RULE1BNERSLENBckNZLEFBS0EsQUF5QmhCLENBcER5QixBQVd6QixDQTRCbUIsQ0E1Q0osQUE2RFgsQ0FyQ0osUUFJOEIsQUFLOUIsR0FoQ0osRUE0Q2lCLEtBdkNpQixJQXdDZCxVQU1FLEVBTEksWUFNTixNQUxDLElBN0JNLEFBaUJ2QixBQUdjLEVBZWQsUUFkZ0IsRUFYaEIsVUFZQSxFQWxDVSxNQUNRLGNBQ0UsZ0JBQ04sU0FVSSxDQVRpQixBQXNDbkMsYUE1QkEsa0JBVHNDLGtDQUN0QyIsImZpbGUiOiJVOlxcTWVcXFBvcnRmb2xpb1xcY29tcG9uZW50c1xcTmF2YmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNjcm9sbHNweSBmcm9tICdyZWFjdC1zY3JvbGxzcHknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKSB7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHZhciBzdGlja3kgPSBuYXZiYXIub2Zmc2V0VG9wO1xyXG4gICAgICAgIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIG5hdmJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyXCIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPj0gc3RpY2t5KSB7XHJcbiAgICAgICAgICAgICAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZChcInN0aWNreVwiKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGlja3lcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgZ290b1BhZ2UgPSAocGFnZUlkKSA9PiB7XHJcbiAgICAgICAgdmFyIGVsbW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFnZUlkKTtcclxuICAgICAgICBlbG1udC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyXCIgaWQ9XCJuYXZiYXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zaWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3RvcFwiPjxpbWcgc3JjPXtcImh0dHBzOi8vYWZhaXRocmFmLmdpdGh1Yi5pby9teS1wb3J0Zm9saW8vYXNzZXRzL2xvZ28ucG5nXCJ9IGFsdD1cImFzaHJhZiBsb2dvXCIgLz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICA8U2Nyb2xsc3B5IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBwYWRkaW5nOiAwLCBtYXJnaW46IDB9fSBpdGVtcz17IFsnYWJvdXRQJywgJ3dvcmtQJywgJ2NvbnRhY3RQJ10gfSBjdXJyZW50Q2xhc3NOYW1lPVwiY3VycmVudFwiPlxyXG4gICAgPGxpPjxhIGhyZWY9XCIjYWJvdXRQXCI+QWJvdXQgbWU8L2E+PC9saT5cclxuICAgIDxsaT48YSBocmVmPVwiI3dvcmtQXCI+V29yazwvYT48L2xpPlxyXG4gICAgPGxpPjxhIGhyZWY9XCIjY29udGFjdFBcIj5Db250YWN0PC9hPjwvbGk+XHJcbiAgPC9TY3JvbGxzcHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmNvbnR7XHJcbiAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMTB2aDtcclxuICAgICAgICAgICAgICAgICAgIGhlaWdodDogODRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm5hdmJhcntcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxMTExMTFiMztcclxuICAgICAgICAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyNXB4KTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmMWYxZjE7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmZmZmZmMzg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmZmZmYzODtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5uYXZiYXIuc3RpY2t5e1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5pbnNpZGV7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMHZ3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmxvZ297XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmxvZ28gaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjRweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5uYXZiYXIuc3RpY2t5IC5sb2dvIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDE0cHggMDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubmF2aWdhdGlvbntcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm5hdmlnYXRpb24gdWx7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5uYXZpZ2F0aW9uIGxpe1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICB9ICAgICBcclxuICAgICAgICAgICAgICAgIC5uYXZpZ2F0aW9uIGxpIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5uYXZpZ2F0aW9uIGxpLmN1cnJlbnQgYXtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmYwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4NDBweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLmxvZ297XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubmF2aWdhdGlvbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXX0= */\n/*@ sourceURL=U:\\\\Me\\\\Portfolio\\\\components\\\\Navbar.js */"));
}

/***/ }),

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
/* harmony import */ var _components_Quotes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Quotes */ "./components/Quotes.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
var _this = undefined,
    _jsxFileName = "U:\\Me\\Portfolio\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      lang = _useState[0],
      setLang = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // alert("Website Under Construction!");
    if (typeof window.localStorage.lang !== "undefined") {
      setLang(window.localStorage.lang);
    }
  }, []);

  var handleLang = function handleLang(lang) {
    setLang(lang);
    Object(_utils_lang__WEBPACK_IMPORTED_MODULE_8__["storeLang"])(lang);
  };

  var data = Object(_utils_lang__WEBPACK_IMPORTED_MODULE_8__["getData"])(lang);
  return __jsx("div", {
    id: "top",
    className: "jsx-2784437683" + " " + "container",
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
    className: "jsx-2784437683",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, "(Under Construction) Ashraf El ghinoussi's Portfolio"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-2784437683",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  })), 1 ? "" : undefined, __jsx(_components_Welcome__WEBPACK_IMPORTED_MODULE_4__["default"], {
    setLang: handleLang,
    data: data["welcome"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }), __jsx(_components_About__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }), __jsx(_components_Work__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }), __jsx(_components_Contact__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }), __jsx(_components_Quotes__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2784437683",
    __self: _this
  }, "html,body{padding:0;margin:0;font-family:'Raleway',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen, Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-weight:400;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlU6XFxNZVxcUG9ydGZvbGlvXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUN5QixBQUltQixBQVFZLFVBUGIsU0FFNkQsR0FNeEUsNElBTDhCLGdCQUM5QiIsImZpbGUiOiJVOlxcTWVcXFBvcnRmb2xpb1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMYW5nUG9wVXAgZnJvbSAnLi4vY29tcG9uZW50cy9MYW5nUG9wVXAnO1xuaW1wb3J0IFdlbGNvbWUgZnJvbSAnLi4vY29tcG9uZW50cy9XZWxjb21lJztcbmltcG9ydCBBYm91dCBmcm9tICcuLi9jb21wb25lbnRzL0Fib3V0JztcbmltcG9ydCBXb3JrIGZyb20gJy4uL2NvbXBvbmVudHMvV29yayc7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRhY3QnO1xuaW1wb3J0IHsgZ2V0RGF0YSwgc3RvcmVMYW5nLCBnZXRMYW5nIH0gZnJvbSAnLi4vdXRpbHMvbGFuZyc7XG5pbXBvcnQgUXVvdGVzIGZyb20gJy4uL2NvbXBvbmVudHMvUXVvdGVzJztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBbbGFuZywgc2V0TGFuZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBhbGVydChcIldlYnNpdGUgVW5kZXIgQ29uc3RydWN0aW9uIVwiKTtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5sb2NhbFN0b3JhZ2UubGFuZyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgc2V0TGFuZyh3aW5kb3cubG9jYWxTdG9yYWdlLmxhbmcpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZUxhbmcgPSAobGFuZykgPT4ge1xuICAgIHNldExhbmcobGFuZyk7XG4gICAgc3RvcmVMYW5nKGxhbmcpO1xuICB9XG5cbiAgY29uc3QgZGF0YSA9IGdldERhdGEobGFuZyk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBpZD1cInRvcFwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT4oVW5kZXIgQ29uc3RydWN0aW9uKSBBc2hyYWYgRWwgZ2hpbm91c3NpJ3MgUG9ydGZvbGlvPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgeygxID8gXCJcIiA6IDxMYW5nUG9wVXAgc2V0TGFuZz17aGFuZGxlTGFuZ30gZGF0YT17ZGF0YVtcImxhbmd1YWdlXCJdfSAvPil9XG4gICAgICA8V2VsY29tZSBzZXRMYW5nPXtoYW5kbGVMYW5nfSBkYXRhPXtkYXRhW1wid2VsY29tZVwiXX0gLz5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDxBYm91dCAvPlxuICAgICAgPFdvcmsgLz5cbiAgICAgIDxDb250YWN0IC8+XG4gICAgICA8UXVvdGVzIC8+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgaHRtbCxcbiAgICAgIGJvZHkge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90bywgT3h5Z2VuLFxuICAgICAgICAgIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgfVxuXG4gICAgICAqIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cbiAgICAgIFxuICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl19 */\n/*@ sourceURL=U:\\\\Me\\\\Portfolio\\\\pages\\\\index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.b7ae370d6670cc907c9a.hot-update.js.map