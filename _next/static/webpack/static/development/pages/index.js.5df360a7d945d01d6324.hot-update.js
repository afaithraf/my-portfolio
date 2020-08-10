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
    href: "#welcomeP",
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
      columnNumber: 45
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
  }, ".cont.jsx-2899922934{margin-top:110vh;height:84px;}.navbar.jsx-2899922934{left:0;right:0;background:#111111b3;-webkit-backdrop-filter:blur(25px);backdrop-filter:blur(25px);top:0;color:#f1f1f1;font-weight:500;z-index:1;border-top:1px solid #ffffff38;border-bottom:1px solid #ffffff38;}.navbar.sticky.jsx-2899922934{position:fixed;}.inside.jsx-2899922934{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin:0 10vw;}.logo.jsx-2899922934{margin-right:auto;}.logo.jsx-2899922934 img.jsx-2899922934{margin:24px 0;height:30px;-webkit-transition-duration:300ms;transition-duration:300ms;}.navbar.sticky.jsx-2899922934 .logo.jsx-2899922934 img.jsx-2899922934{margin:14px 0;height:20px;}.navigation.jsx-2899922934{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.navigation.jsx-2899922934 ul.jsx-2899922934{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0;margin:auto;}.navigation.jsx-2899922934 li.jsx-2899922934{list-style:none;padding:10px 0;margin:0;width:120px;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.navigation.jsx-2899922934 li.jsx-2899922934 a.jsx-2899922934{-webkit-text-decoration:none;text-decoration:none;color:#ffffff;margin:auto;}.navigation.jsx-2899922934 li.current.jsx-2899922934 a.jsx-2899922934{color:#ffff00;}@media (max-width:840px){.logo.jsx-2899922934{margin-left:auto;}.navigation.jsx-2899922934{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlU6XFxNZVxcUG9ydGZvbGlvXFxjb21wb25lbnRzXFxOYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUN3QixBQUdxQyxBQUlULEFBWVEsQUFHRixBQUtLLEFBR0osQUFLQSxBQUlELEFBR0EsQUFLRyxBQVFLLEFBS1AsQUFJTyxBQUdKLE9BM0RULE1BNERSLENBckNZLEFBS0EsQUF5QmhCLENBcER5QixBQVd6QixDQTRCbUIsQ0E1Q0osQUE2RFgsQ0FyQ0osUUFJOEIsQUFLOUIsR0FoQ0osRUE0Q2lCLEtBdkNpQixJQXdDZCxVQU1FLEVBTEksWUFNTixNQUxDLElBN0JNLEFBaUJ2QixBQUdjLEVBZWQsUUFkZ0IsRUFYaEIsVUFZQSxFQWxDVSxNQUNRLGNBQ0UsZ0JBQ04sU0FVSSxDQVRpQixBQXNDbkMsYUE1QkEsa0JBVHNDLGtDQUN0QyIsImZpbGUiOiJVOlxcTWVcXFBvcnRmb2xpb1xcY29tcG9uZW50c1xcTmF2YmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNjcm9sbHNweSBmcm9tICdyZWFjdC1zY3JvbGxzcHknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKSB7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHZhciBzdGlja3kgPSBuYXZiYXIub2Zmc2V0VG9wO1xyXG4gICAgICAgIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIG5hdmJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyXCIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPj0gc3RpY2t5KSB7XHJcbiAgICAgICAgICAgICAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZChcInN0aWNreVwiKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGlja3lcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgZ290b1BhZ2UgPSAocGFnZUlkKSA9PiB7XHJcbiAgICAgICAgdmFyIGVsbW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFnZUlkKTtcclxuICAgICAgICBlbG1udC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyXCIgaWQ9XCJuYXZiYXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zaWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3dlbGNvbWVQXCI+PGltZyBzcmM9e1wiaHR0cHM6Ly9hZmFpdGhyYWYuZ2l0aHViLmlvL215LXBvcnRmb2xpby9hc3NldHMvbG9nby5wbmdcIn0gYWx0PVwiYXNocmFmIGxvZ29cIiAvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gIDxTY3JvbGxzcHkgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIHBhZGRpbmc6IDAsIG1hcmdpbjogMH19IGl0ZW1zPXsgWydhYm91dFAnLCAnd29ya1AnLCAnY29udGFjdFAnXSB9IGN1cnJlbnRDbGFzc05hbWU9XCJjdXJyZW50XCI+XHJcbiAgICA8bGk+PGEgaHJlZj1cIiNhYm91dFBcIj5BYm91dCBtZTwvYT48L2xpPlxyXG4gICAgPGxpPjxhIGhyZWY9XCIjd29ya1BcIj5Xb3JrPC9hPjwvbGk+XHJcbiAgICA8bGk+PGEgaHJlZj1cIiNjb250YWN0UFwiPkNvbnRhY3Q8L2E+PC9saT5cclxuICA8L1Njcm9sbHNweT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAuY29udHtcclxuICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDExMHZoO1xyXG4gICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4NHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubmF2YmFye1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzExMTExMWIzO1xyXG4gICAgICAgICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDI1cHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2YxZjFmMTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZmZmZmYzODtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZmZmZjM4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm5hdmJhci5zdGlja3l7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmluc2lkZXtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwdnc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubG9nb3tcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubG9nbyBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyNHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm5hdmJhci5zdGlja3kgLmxvZ28gaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTRweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5uYXZpZ2F0aW9ue1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubmF2aWdhdGlvbiB1bHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm5hdmlnYXRpb24gbGl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIH0gICAgIFxyXG4gICAgICAgICAgICAgICAgLm5hdmlnYXRpb24gbGkgYXtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm5hdmlnYXRpb24gbGkuY3VycmVudCBhe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZjAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDg0MHB4KXtcclxuICAgICAgICAgICAgICAgICAgICAubG9nb3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5uYXZpZ2F0aW9ue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=U:\\\\Me\\\\Portfolio\\\\components\\\\Navbar.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.5df360a7d945d01d6324.hot-update.js.map