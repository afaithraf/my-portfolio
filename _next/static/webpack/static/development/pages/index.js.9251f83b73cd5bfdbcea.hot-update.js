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
    href: "/work",
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
  }, ".cont.jsx-3028908303{margin-top:110vh;height:84px;}.stuck.jsx-3028908303{margin-top:0;}.navbar.jsx-3028908303{left:0;right:0;background:#111111b3;-webkit-backdrop-filter:blur(25px);backdrop-filter:blur(25px);top:0;color:#f1f1f1;font-weight:500;z-index:1;border-top:1px solid #ffffff38;border-bottom:1px solid #ffffff38;}.navbar.sticky.jsx-3028908303{position:fixed;}.inside.jsx-3028908303{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin:0 10vw;}.logo.jsx-3028908303{margin-right:auto;}.logo.jsx-3028908303 img.jsx-3028908303{margin:24px 0;height:30px;-webkit-transition-duration:300ms;transition-duration:300ms;}.navbar.sticky.jsx-3028908303 .logo.jsx-3028908303 img.jsx-3028908303{margin:14px 0;height:20px;}.navigation.jsx-3028908303{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.navigation.jsx-3028908303 ul.jsx-3028908303{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0;margin:auto;}.navigation.jsx-3028908303 li.jsx-3028908303{list-style:none;padding:10px 0;margin:0;width:120px;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.navigation.jsx-3028908303 li.jsx-3028908303 a.jsx-3028908303{-webkit-text-decoration:none;text-decoration:none;color:#ffffff;margin:auto;}.navigation.jsx-3028908303 li.current.jsx-3028908303 a.jsx-3028908303{color:#ffff00;}@media (max-width:840px){.logo.jsx-3028908303{margin-left:auto;}.navigation.jsx-3028908303{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlU6XFxNZVxcUG9ydGZvbGlvXFxjb21wb25lbnRzXFxOYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUN3QixBQUdxQyxBQUlQLEFBR0YsQUFZUSxBQUdGLEFBS0ssQUFHSixBQUtBLEFBSUQsQUFHQSxBQUtHLEFBUUssQUFLUCxBQUlPLEFBR0osT0EzRFQsTUFIaEIsQUErRFEsQ0FyQ1ksQUFLQSxBQXlCaEIsQ0FwRHlCLEFBV3pCLENBNEJtQixDQS9DSixBQWdFWCxDQXJDSixRQUk4QixBQUs5QixHQW5DSixFQStDaUIsS0F2Q2lCLElBd0NkLFVBTUUsRUFMSSxZQU1OLE1BTEMsSUE3Qk0sQUFpQnZCLEFBR2MsRUFlZCxRQWRnQixFQVhoQixVQVlBLEVBbENVLE1BQ1EsY0FDRSxnQkFDTixTQVVJLENBVGlCLEFBc0NuQyxhQTVCQSxrQkFUc0Msa0NBQ3RDIiwiZmlsZSI6IlU6XFxNZVxcUG9ydGZvbGlvXFxjb21wb25lbnRzXFxOYXZiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2Nyb2xsc3B5IGZyb20gJ3JlYWN0LXNjcm9sbHNweSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcihwcm9wcykge1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB2YXIgc3RpY2t5ID0gbmF2YmFyLm9mZnNldFRvcDtcclxuICAgICAgICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBuYXZiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhclwiKTtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID49IHN0aWNreSkge1xyXG4gICAgICAgICAgICAgICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJzdGlja3lcIilcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGdvdG9QYWdlID0gKHBhZ2VJZCkgPT4ge1xyXG4gICAgICAgIHZhciBlbG1udCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhZ2VJZCk7XHJcbiAgICAgICAgZWxtbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy5zdHVja1RvcD9cInN0dWNrXCI6XCJjb250XCJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhclwiIGlkPVwibmF2YmFyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluc2lkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi8jdG9wXCI+PGltZyBzcmM9e1wiaHR0cHM6Ly9hZmFpdGhyYWYuZ2l0aHViLmlvL215LXBvcnRmb2xpby9hc3NldHMvbG9nby5wbmdcIn0gYWx0PVwiYXNocmFmIGxvZ29cIiAvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gIDxTY3JvbGxzcHkgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIHBhZGRpbmc6IDAsIG1hcmdpbjogMH19IGl0ZW1zPXsgWydhYm91dFAnLCAnY29udGFjdFAnLCAnd29ya1AnXSB9IGN1cnJlbnRDbGFzc05hbWU9XCJjdXJyZW50XCI+XHJcbiAgICA8bGk+PGEgaHJlZj1cIi8jYWJvdXRQXCI+QWJvdXQgbWU8L2E+PC9saT5cclxuICAgIDxsaT48YSBocmVmPVwiLyNjb250YWN0UFwiPkNvbnRhY3Q8L2E+PC9saT5cclxuICAgIDxsaT48YSBocmVmPVwiL3dvcmtcIj5Qcm9qZWN0czwvYT48L2xpPlxyXG4gIDwvU2Nyb2xsc3B5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIC5jb250e1xyXG4gICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTEwdmg7XHJcbiAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDg0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnN0dWNre1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm5hdmJhcntcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxMTExMTFiMztcclxuICAgICAgICAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyNXB4KTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmMWYxZjE7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmZmZmZmMzg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmZmZmYzODtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5uYXZiYXIuc3RpY2t5e1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5pbnNpZGV7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMHZ3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmxvZ297XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmxvZ28gaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjRweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5uYXZiYXIuc3RpY2t5IC5sb2dvIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDE0cHggMDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubmF2aWdhdGlvbntcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm5hdmlnYXRpb24gdWx7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5uYXZpZ2F0aW9uIGxpe1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICB9ICAgICBcclxuICAgICAgICAgICAgICAgIC5uYXZpZ2F0aW9uIGxpIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5uYXZpZ2F0aW9uIGxpLmN1cnJlbnQgYXtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmYwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4NDBweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLmxvZ297XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubmF2aWdhdGlvbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXX0= */\n/*@ sourceURL=U:\\\\Me\\\\Portfolio\\\\components\\\\Navbar.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.9251f83b73cd5bfdbcea.hot-update.js.map