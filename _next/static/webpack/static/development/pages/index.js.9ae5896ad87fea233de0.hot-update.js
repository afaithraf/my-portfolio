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


function Navbar(props) {
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
    className: "jsx-3028908303" + " " + ((props.stuckTop ? "stuck" : "cont") || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("div", {
    id: "navbar",
    className: "jsx-3028908303" + " " + "navbar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-3028908303" + " " + "inside",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-3028908303" + " " + "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "/#top",
    className: "jsx-3028908303",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "https://afaithraf.github.io/my-portfolio/assets/logo.png",
    alt: "ashraf logo",
    className: "jsx-3028908303",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 41
    }
  }))), __jsx("div", {
    className: "jsx-3028908303" + " " + "navigation",
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
    items: ['aboutP', 'contactP', 'workP'],
    currentClassName: "current",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 3
    }
  }, __jsx("li", {
    className: "jsx-3028908303",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: "/#aboutP",
    className: "jsx-3028908303",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "About me")), __jsx("li", {
    className: "jsx-3028908303",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: "/#contactP",
    className: "jsx-3028908303",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, "Contact")), __jsx("li", {
    className: "jsx-3028908303",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: "/#workP",
    className: "jsx-3028908303",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, "Projects")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3028908303",
    __self: this
  }, ".cont.jsx-3028908303{margin-top:110vh;height:84px;}.stuck.jsx-3028908303{margin-top:0;}.navbar.jsx-3028908303{left:0;right:0;background:#111111b3;-webkit-backdrop-filter:blur(25px);backdrop-filter:blur(25px);top:0;color:#f1f1f1;font-weight:500;z-index:1;border-top:1px solid #ffffff38;border-bottom:1px solid #ffffff38;}.navbar.sticky.jsx-3028908303{position:fixed;}.inside.jsx-3028908303{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin:0 10vw;}.logo.jsx-3028908303{margin-right:auto;}.logo.jsx-3028908303 img.jsx-3028908303{margin:24px 0;height:30px;-webkit-transition-duration:300ms;transition-duration:300ms;}.navbar.sticky.jsx-3028908303 .logo.jsx-3028908303 img.jsx-3028908303{margin:14px 0;height:20px;}.navigation.jsx-3028908303{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.navigation.jsx-3028908303 ul.jsx-3028908303{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0;margin:auto;}.navigation.jsx-3028908303 li.jsx-3028908303{list-style:none;padding:10px 0;margin:0;width:120px;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.navigation.jsx-3028908303 li.jsx-3028908303 a.jsx-3028908303{-webkit-text-decoration:none;text-decoration:none;color:#ffffff;margin:auto;}.navigation.jsx-3028908303 li.current.jsx-3028908303 a.jsx-3028908303{color:#ffff00;}@media (max-width:840px){.logo.jsx-3028908303{margin-left:auto;}.navigation.jsx-3028908303{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlU6XFxNZVxcUG9ydGZvbGlvXFxjb21wb25lbnRzXFxOYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUN3QixBQUdxQyxBQUlQLEFBR0YsQUFZUSxBQUdGLEFBS0ssQUFHSixBQUtBLEFBSUQsQUFHQSxBQUtHLEFBUUssQUFLUCxBQUlPLEFBR0osT0EzRFQsTUFIaEIsQUErRFEsQ0FyQ1ksQUFLQSxBQXlCaEIsQ0FwRHlCLEFBV3pCLENBNEJtQixDQS9DSixBQWdFWCxDQXJDSixRQUk4QixBQUs5QixHQW5DSixFQStDaUIsS0F2Q2lCLElBd0NkLFVBTUUsRUFMSSxZQU1OLE1BTEMsSUE3Qk0sQUFpQnZCLEFBR2MsRUFlZCxRQWRnQixFQVhoQixVQVlBLEVBbENVLE1BQ1EsY0FDRSxnQkFDTixTQVVJLENBVGlCLEFBc0NuQyxhQTVCQSxrQkFUc0Msa0NBQ3RDIiwiZmlsZSI6IlU6XFxNZVxcUG9ydGZvbGlvXFxjb21wb25lbnRzXFxOYXZiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2Nyb2xsc3B5IGZyb20gJ3JlYWN0LXNjcm9sbHNweSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcihwcm9wcykge1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB2YXIgc3RpY2t5ID0gbmF2YmFyLm9mZnNldFRvcDtcclxuICAgICAgICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBuYXZiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhclwiKTtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID49IHN0aWNreSkge1xyXG4gICAgICAgICAgICAgICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJzdGlja3lcIilcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGdvdG9QYWdlID0gKHBhZ2VJZCkgPT4ge1xyXG4gICAgICAgIHZhciBlbG1udCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhZ2VJZCk7XHJcbiAgICAgICAgZWxtbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy5zdHVja1RvcD9cInN0dWNrXCI6XCJjb250XCJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhclwiIGlkPVwibmF2YmFyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluc2lkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi8jdG9wXCI+PGltZyBzcmM9e1wiaHR0cHM6Ly9hZmFpdGhyYWYuZ2l0aHViLmlvL215LXBvcnRmb2xpby9hc3NldHMvbG9nby5wbmdcIn0gYWx0PVwiYXNocmFmIGxvZ29cIiAvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gIDxTY3JvbGxzcHkgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIHBhZGRpbmc6IDAsIG1hcmdpbjogMH19IGl0ZW1zPXsgWydhYm91dFAnLCAnY29udGFjdFAnLCAnd29ya1AnXSB9IGN1cnJlbnRDbGFzc05hbWU9XCJjdXJyZW50XCI+XHJcbiAgICA8bGk+PGEgaHJlZj1cIi8jYWJvdXRQXCI+QWJvdXQgbWU8L2E+PC9saT5cclxuICAgIDxsaT48YSBocmVmPVwiLyNjb250YWN0UFwiPkNvbnRhY3Q8L2E+PC9saT5cclxuICAgIDxsaT48YSBocmVmPVwiLyN3b3JrUFwiPlByb2plY3RzPC9hPjwvbGk+XHJcbiAgPC9TY3JvbGxzcHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmNvbnR7XHJcbiAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMTB2aDtcclxuICAgICAgICAgICAgICAgICAgIGhlaWdodDogODRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc3R1Y2t7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubmF2YmFye1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzExMTExMWIzO1xyXG4gICAgICAgICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDI1cHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2YxZjFmMTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZmZmZmYzODtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZmZmZjM4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm5hdmJhci5zdGlja3l7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmluc2lkZXtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwdnc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubG9nb3tcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubG9nbyBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyNHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm5hdmJhci5zdGlja3kgLmxvZ28gaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTRweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5uYXZpZ2F0aW9ue1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubmF2aWdhdGlvbiB1bHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm5hdmlnYXRpb24gbGl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIH0gICAgIFxyXG4gICAgICAgICAgICAgICAgLm5hdmlnYXRpb24gbGkgYXtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm5hdmlnYXRpb24gbGkuY3VycmVudCBhe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZjAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDg0MHB4KXtcclxuICAgICAgICAgICAgICAgICAgICAubG9nb3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5uYXZpZ2F0aW9ue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=U:\\\\Me\\\\Portfolio\\\\components\\\\Navbar.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.9ae5896ad87fea233de0.hot-update.js.map