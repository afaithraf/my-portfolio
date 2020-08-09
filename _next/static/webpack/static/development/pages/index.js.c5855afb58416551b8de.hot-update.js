webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Work/index.js":
/*!**********************************!*\
  !*** ./components/Work/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Work; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_work_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/work.json */ "./data/work.json");
var _data_work_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/work.json */ "./data/work.json", 1);
/* harmony import */ var _WorkCard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WorkCard.js */ "./components/Work/WorkCard.js");
var _this = undefined,
    _jsxFileName = "U:\\Me\\Portfolio\\components\\Work\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Tab0 = function Tab0() {
  return __jsx("div", {
    id: "tab-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, "tab 0");
};

var Tab1 = function Tab1() {
  return __jsx("div", {
    id: "tab-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, _data_work_json__WEBPACK_IMPORTED_MODULE_2__['wordpress'].map(function (post, i) {
    return __jsx(_WorkCard_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: i,
      data: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 25
      }
    });
  }));
};

var Tab2 = function Tab2() {
  return __jsx("div", {
    id: "tab-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, _data_work_json__WEBPACK_IMPORTED_MODULE_2__['reactjs'].map(function (post, i) {
    return __jsx(_WorkCard_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: i,
      data: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 25
      }
    });
  }));
};

var Tab3 = function Tab3() {
  return __jsx("div", {
    id: "tab-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, "tab 3");
};

function Work() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      activeTab = _useState[0],
      setActiveTab = _useState[1];

  return __jsx("div", {
    id: "work-page",
    className: "jsx-1131295528" + " " + "cont",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "jsx-1131295528",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, "Work"), __jsx("div", {
    className: "jsx-1131295528" + " " + "selector",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx("button", {
    onClick: function onClick() {
      return setActiveTab(0);
    },
    className: "jsx-1131295528" + " " + ((activeTab === 0 ? 'active' : 'not-active') || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, "All"), __jsx("button", {
    onClick: function onClick() {
      return setActiveTab(1);
    },
    className: "jsx-1131295528" + " " + ((activeTab === 1 ? 'active' : 'not-active') || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, "Wordpress"), __jsx("button", {
    onClick: function onClick() {
      return setActiveTab(2);
    },
    className: "jsx-1131295528" + " " + ((activeTab === 2 ? 'active' : 'not-active') || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, "ReactJs"), __jsx("button", {
    onClick: function onClick() {
      return setActiveTab(3);
    },
    className: "jsx-1131295528" + " " + ((activeTab === 3 ? 'active' : 'not-active') || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, "UX & UI design")), __jsx("div", {
    className: "jsx-1131295528" + " " + "content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, activeTab === 0 ? __jsx(Tab0, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 32
    }
  }) : '', activeTab === 1 ? __jsx(Tab1, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 32
    }
  }) : '', activeTab === 2 ? __jsx(Tab2, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 32
    }
  }) : '', activeTab === 3 ? __jsx(Tab3, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 32
    }
  }) : ''), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1131295528",
    __self: this
  }, ".cont.jsx-1131295528{width:100%;position:relative;color:#ffffff;height:auto;background:#010101;padding:30px 10%;padding-bottom:100px;}.selector.jsx-1131295528{margin:25px 0;}.selector.jsx-1131295528 button.jsx-1131295528{cursor:pointer;background:none;color:#fff;border:1px solid #ffff00;border-radius:100px;padding:12px 20px;font-size:18px;margin:0 10px;font-weight:bold;-webkit-transition-duration:300ms;transition-duration:300ms;outline:none;}.selector.jsx-1131295528 button.active.jsx-1131295528{background:#ffff00;color:#000000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlU6XFxNZVxcUG9ydGZvbGlvXFxjb21wb25lbnRzXFxXb3JrXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRG9CLEFBRzRCLEFBU0csQUFHQyxBQWFJLFdBeEJELEdBU3RCLENBR29CLElBYUYsVUF4QkQsRUFZRixFQWFmLFNBWjZCLENBWmQsWUFDTyxZQVlFLE9BWEosYUFZRSxJQVhFLGNBWUwsT0FYbkIsUUFZa0IsY0FDRyxpQkFDUyw0REFDYixhQUNqQiIsImZpbGUiOiJVOlxcTWVcXFBvcnRmb2xpb1xcY29tcG9uZW50c1xcV29ya1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB3b3JrRGF0YSBmcm9tICcuLi8uLi9kYXRhL3dvcmsuanNvbic7XHJcbmltcG9ydCBXb3JrQ2FyZCBmcm9tICcuL1dvcmtDYXJkLmpzJztcclxuXHJcbmNvbnN0IFRhYjAgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJ0YWItMFwiPlxyXG4gICAgICAgICAgICB0YWIgMFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5jb25zdCBUYWIxID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwidGFiLTFcIj5cclxuICAgICAgICAgICAge3dvcmtEYXRhWyd3b3JkcHJlc3MnXS5tYXAoKHBvc3QsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoPFdvcmtDYXJkIGtleT17aX0gZGF0YT17cG9zdH0gLz4pXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5jb25zdCBUYWIyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwidGFiLTJcIj5cclxuICAgICAgICAgICAge3dvcmtEYXRhWydyZWFjdGpzJ10ubWFwKChwb3N0LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxXb3JrQ2FyZCBrZXk9e2l9IGRhdGE9e3Bvc3R9IC8+KVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuY29uc3QgVGFiMyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cInRhYi0zXCI+XHJcbiAgICAgICAgICAgIHRhYiAzXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXb3JrKCkge1xyXG4gICAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlKDEpO1xyXG5cclxuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJjb250XCIgaWQ9XCJ3b3JrLXBhZ2VcIj5cclxuICAgICAgICA8aDE+V29yazwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3RvclwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YWN0aXZlVGFiID09PSAwID8gJ2FjdGl2ZScgOiAnbm90LWFjdGl2ZSd9IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYigwKX0gPkFsbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YWN0aXZlVGFiID09PSAxID8gJ2FjdGl2ZScgOiAnbm90LWFjdGl2ZSd9IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYigxKX0gPldvcmRwcmVzczwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YWN0aXZlVGFiID09PSAyID8gJ2FjdGl2ZScgOiAnbm90LWFjdGl2ZSd9IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYigyKX0gPlJlYWN0SnM8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2FjdGl2ZVRhYiA9PT0gMyA/ICdhY3RpdmUnIDogJ25vdC1hY3RpdmUnfSBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoMyl9ID5VWCAmIFVJIGRlc2lnbjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICB7YWN0aXZlVGFiID09PSAwID8gPFRhYjAgLz4gOiAnJ31cclxuICAgICAgICAgICAge2FjdGl2ZVRhYiA9PT0gMSA/IDxUYWIxIC8+IDogJyd9XHJcbiAgICAgICAgICAgIHthY3RpdmVUYWIgPT09IDIgPyA8VGFiMiAvPiA6ICcnfVxyXG4gICAgICAgICAgICB7YWN0aXZlVGFiID09PSAzID8gPFRhYjMgLz4gOiAnJ31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIC5jb250e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMTAxMDE7XHJcbiAgICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMTAlO1xyXG4gICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNlbGVjdG9yIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMjVweCAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zZWxlY3RvciBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmYwMDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2VsZWN0b3IgYnV0dG9uLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZjAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXX0= */\n/*@ sourceURL=U:\\\\Me\\\\Portfolio\\\\components\\\\Work\\\\index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.c5855afb58416551b8de.hot-update.js.map