webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Work.js":
/*!****************************!*\
  !*** ./components/Work.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Quotes; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_WorkCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/WorkCard */ "./components/ui/WorkCard.js");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/data */ "./utils/data.js");
var _jsxFileName = "U:\\Me\\Portfolio\\components\\Work.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Quotes() {
  var workList = Object(_utils_data__WEBPACK_IMPORTED_MODULE_3__["getData"])("work");
  return __jsx("div", {
    id: "workP",
    className: "jsx-1557918350" + " " + "cont",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-1557918350",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, "Projects"), __jsx("div", {
    className: "jsx-1557918350",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, workList.map(function (object, i) {
    return __jsx(_ui_WorkCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: object,
      key: i,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 28
      }
    });
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1557918350",
    __self: this
  }, ".cont.jsx-1557918350{width:100%;height:auto;position:relative;display:grid;text-align:center;border-top:30px solid #010101;color:#ffffff;background:#010101;padding:0 5%;}h2.jsx-1557918350{border-radius:16px;padding:30px 20%;font-size:3em;margin:40px auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlU6XFxNZVxcUG9ydGZvbGlvXFxjb21wb25lbnRzXFxXb3JrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWN3QixBQUdnQyxBQVdRLFdBVlAsUUFXSyxJQVZDLGFBV0osS0FWRCxTQVdJLElBVkEsYUFXckIsS0FWaUMsOEJBQ2hCLGNBQ0ssbUJBQ04sYUFDaEIiLCJmaWxlIjoiVTpcXE1lXFxQb3J0Zm9saW9cXGNvbXBvbmVudHNcXFdvcmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBXb3JrQ2FyZCBmcm9tICcuL3VpL1dvcmtDYXJkJ1xyXG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi4vdXRpbHMvZGF0YSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdW90ZXMoKSB7XHJcbiAgICBjb25zdCB3b3JrTGlzdCA9IGdldERhdGEoXCJ3b3JrXCIpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRcIiBpZD1cIndvcmtQXCI+XHJcbiAgICAgICAgICAgIDxoMj5Qcm9qZWN0czwvaDI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7d29ya0xpc3QubWFwKGZ1bmN0aW9uKG9iamVjdCwgaSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxXb3JrQ2FyZCBkYXRhPXtvYmplY3R9IGtleT17aX0gLz47XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5jb250IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAzMHB4IHNvbGlkICMwMTAxMDE7XHJcbiAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMTAxMDE7XHJcbiAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDUlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4IDIwJTsgXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA0MHB4IGF1dG87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXX0= */\n/*@ sourceURL=U:\\\\Me\\\\Portfolio\\\\components\\\\Work.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.c6ec81be3b60434957c1.hot-update.js.map