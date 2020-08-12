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




var Tab1 = function Tab1() {
  return __jsx("div", {
    id: "tab-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, _data_work_json__WEBPACK_IMPORTED_MODULE_2__['wordpress'].map(function (post, i) {
    return __jsx(_WorkCard_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: i,
      data: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 25
      }
    });
  }));
}; // const Tab2 = () => {
//     return (
//         <div id="tab-2">
//             {workData['reactjs'].map((post, i) => {
//                 return (<WorkCard key={i} data={post} />)
//             })}
//         </div>
//     );
// }


function Work() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      activeTab = _useState[0],
      setActiveTab = _useState[1];

  return __jsx("div", {
    className: "jsx-295012306" + " " + "cont",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx("center", {
    id: "workP",
    className: "jsx-295012306",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 8
    }
  }, " ", __jsx("h1", {
    className: "jsx-295012306",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 28
    }
  }, "My Latest Work"), " "), __jsx("div", {
    className: "jsx-295012306" + " " + "selector",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "jsx-295012306" + " " + "content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, activeTab === 0 ? __jsx(Tab0, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 32
    }
  }) : '', activeTab === 1 ? __jsx(Tab1, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 32
    }
  }) : '', activeTab === 2 ? __jsx(Tab2, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 32
    }
  }) : '', activeTab === 3 ? __jsx(Tab3, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 32
    }
  }) : ''), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "295012306",
    __self: this
  }, ".cont.jsx-295012306{width:100%;position:relative;color:#ffffff;height:auto;background:#010101;padding:30px 10%;padding-bottom:100px;}.selector.jsx-295012306{margin:40px auto;}.selector.jsx-295012306 button.jsx-295012306{cursor:pointer;background:none;color:#fff;border:1px solid #ffff00;border-radius:100px;padding:12px 20px;font-size:18px;margin:0 10px;font-weight:bold;-webkit-transition-duration:300ms;transition-duration:300ms;outline:none;}.selector.jsx-295012306 button.active.jsx-295012306{background:#ffff00;color:#000000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlU6XFxNZVxcUG9ydGZvbGlvXFxjb21wb25lbnRzXFxXb3JrXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Q29CLEFBRzRCLEFBU00sQUFHRixBQWFJLFdBeEJELElBWUYsRUFIcEIsRUFnQmtCLFVBeEJELEVBWUYsRUFhZixTQVo2QixDQVpkLFlBQ08sWUFZRSxPQVhKLGFBWUUsSUFYRSxjQVlMLE9BWG5CLFFBWWtCLGNBQ0csaUJBQ1MsNERBQ2IsYUFDakIiLCJmaWxlIjoiVTpcXE1lXFxQb3J0Zm9saW9cXGNvbXBvbmVudHNcXFdvcmtcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgd29ya0RhdGEgZnJvbSAnLi4vLi4vZGF0YS93b3JrLmpzb24nO1xyXG5pbXBvcnQgV29ya0NhcmQgZnJvbSAnLi9Xb3JrQ2FyZC5qcyc7XHJcblxyXG5jb25zdCBUYWIxID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwidGFiLTFcIj5cclxuICAgICAgICAgICAge3dvcmtEYXRhWyd3b3JkcHJlc3MnXS5tYXAoKHBvc3QsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoPFdvcmtDYXJkIGtleT17aX0gZGF0YT17cG9zdH0gLz4pXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4vLyBjb25zdCBUYWIyID0gKCkgPT4ge1xyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICA8ZGl2IGlkPVwidGFiLTJcIj5cclxuLy8gICAgICAgICAgICAge3dvcmtEYXRhWydyZWFjdGpzJ10ubWFwKChwb3N0LCBpKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gKDxXb3JrQ2FyZCBrZXk9e2l9IGRhdGE9e3Bvc3R9IC8+KVxyXG4vLyAgICAgICAgICAgICB9KX1cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgICk7XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdvcmsoKSB7XHJcbiAgICBjb25zdCBbYWN0aXZlVGFiLCBzZXRBY3RpdmVUYWJdID0gdXNlU3RhdGUoMSk7XHJcblxyXG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImNvbnRcIj5cclxuICAgICAgIDxjZW50ZXIgaWQ9XCJ3b3JrUFwiPiA8aDE+TXkgTGF0ZXN0IFdvcms8L2gxPiA8L2NlbnRlcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdG9yXCI+XHJcbiAgICAgICAgICAgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT17YWN0aXZlVGFiID09PSAwID8gJ2FjdGl2ZScgOiAnbm90LWFjdGl2ZSd9IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYigwKX0gPkFsbDwvYnV0dG9uPiAqL31cclxuICAgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT17YWN0aXZlVGFiID09PSAxID8gJ2FjdGl2ZScgOiAnbm90LWFjdGl2ZSd9IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYigxKX0gPldvcmRwcmVzczwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPXthY3RpdmVUYWIgPT09IDIgPyAnYWN0aXZlJyA6ICdub3QtYWN0aXZlJ30gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKDIpfSA+UmVhY3RKczwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPXthY3RpdmVUYWIgPT09IDMgPyAnYWN0aXZlJyA6ICdub3QtYWN0aXZlJ30gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKDMpfSA+VVggJiBVSSBkZXNpZ248L2J1dHRvbj4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIHthY3RpdmVUYWIgPT09IDAgPyA8VGFiMCAvPiA6ICcnfVxyXG4gICAgICAgICAgICB7YWN0aXZlVGFiID09PSAxID8gPFRhYjEgLz4gOiAnJ31cclxuICAgICAgICAgICAge2FjdGl2ZVRhYiA9PT0gMiA/IDxUYWIyIC8+IDogJyd9XHJcbiAgICAgICAgICAgIHthY3RpdmVUYWIgPT09IDMgPyA8VGFiMyAvPiA6ICcnfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmNvbnR7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAxMDEwMTtcclxuICAgICAgICAgICAgICAgcGFkZGluZzogMzBweCAxMCU7XHJcbiAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2VsZWN0b3Ige1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiA0MHB4IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNlbGVjdG9yIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZjAwO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zZWxlY3RvciBidXR0b24uYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmMDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICAgIClcclxufSJdfQ== */\n/*@ sourceURL=U:\\\\Me\\\\Portfolio\\\\components\\\\Work\\\\index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.a81f11ec8ec58c05f2d3.hot-update.js.map