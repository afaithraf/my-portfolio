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
      columnNumber: 17
    }
  }, "Work"), " "), __jsx("div", {
    id: "workP",
    className: "jsx-295012306" + " " + "selector",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx("button", {
    onClick: function onClick() {
      return setActiveTab(1);
    },
    className: "jsx-295012306" + " " + ((activeTab === 1 ? 'active' : 'not-active') || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, "Wordpress")), __jsx("div", {
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
  }, ".cont.jsx-295012306{width:100%;position:relative;color:#ffffff;height:auto;background:#010101;padding:30px 10%;padding-bottom:100px;}.selector.jsx-295012306{margin:40px auto;}.selector.jsx-295012306 button.jsx-295012306{cursor:pointer;background:none;color:#fff;border:1px solid #ffff00;border-radius:100px;padding:12px 20px;font-size:18px;margin:0 10px;font-weight:bold;-webkit-transition-duration:300ms;transition-duration:300ms;outline:none;}.selector.jsx-295012306 button.active.jsx-295012306{background:#ffff00;color:#000000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlU6XFxNZVxcUG9ydGZvbGlvXFxjb21wb25lbnRzXFxXb3JrXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Q29CLEFBRzRCLEFBU00sQUFHRixBQWFJLFdBeEJELElBWUYsRUFIcEIsRUFnQmtCLFVBeEJELEVBWUYsRUFhZixTQVo2QixDQVpkLFlBQ08sWUFZRSxPQVhKLGFBWUUsSUFYRSxjQVlMLE9BWG5CLFFBWWtCLGNBQ0csaUJBQ1MsNERBQ2IsYUFDakIiLCJmaWxlIjoiVTpcXE1lXFxQb3J0Zm9saW9cXGNvbXBvbmVudHNcXFdvcmtcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgd29ya0RhdGEgZnJvbSAnLi4vLi4vZGF0YS93b3JrLmpzb24nO1xyXG5pbXBvcnQgV29ya0NhcmQgZnJvbSAnLi9Xb3JrQ2FyZC5qcyc7XHJcblxyXG5jb25zdCBUYWIxID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwidGFiLTFcIj5cclxuICAgICAgICAgICAge3dvcmtEYXRhWyd3b3JkcHJlc3MnXS5tYXAoKHBvc3QsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoPFdvcmtDYXJkIGtleT17aX0gZGF0YT17cG9zdH0gLz4pXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4vLyBjb25zdCBUYWIyID0gKCkgPT4ge1xyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICA8ZGl2IGlkPVwidGFiLTJcIj5cclxuLy8gICAgICAgICAgICAge3dvcmtEYXRhWydyZWFjdGpzJ10ubWFwKChwb3N0LCBpKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gKDxXb3JrQ2FyZCBrZXk9e2l9IGRhdGE9e3Bvc3R9IC8+KVxyXG4vLyAgICAgICAgICAgICB9KX1cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgICk7XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdvcmsoKSB7XHJcbiAgICBjb25zdCBbYWN0aXZlVGFiLCBzZXRBY3RpdmVUYWJdID0gdXNlU3RhdGUoMSk7XHJcblxyXG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImNvbnRcIj5cclxuICAgICAgIDxjZW50ZXI+IDxoMT5Xb3JrPC9oMT4gPC9jZW50ZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3RvclwiIGlkPVwid29ya1BcIj5cclxuICAgICAgICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPXthY3RpdmVUYWIgPT09IDAgPyAnYWN0aXZlJyA6ICdub3QtYWN0aXZlJ30gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKDApfSA+QWxsPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YWN0aXZlVGFiID09PSAxID8gJ2FjdGl2ZScgOiAnbm90LWFjdGl2ZSd9IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYigxKX0gPldvcmRwcmVzczwvYnV0dG9uPlxyXG4gICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9e2FjdGl2ZVRhYiA9PT0gMiA/ICdhY3RpdmUnIDogJ25vdC1hY3RpdmUnfSBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoMil9ID5SZWFjdEpzPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9e2FjdGl2ZVRhYiA9PT0gMyA/ICdhY3RpdmUnIDogJ25vdC1hY3RpdmUnfSBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoMyl9ID5VWCAmIFVJIGRlc2lnbjwvYnV0dG9uPiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAge2FjdGl2ZVRhYiA9PT0gMCA/IDxUYWIwIC8+IDogJyd9XHJcbiAgICAgICAgICAgIHthY3RpdmVUYWIgPT09IDEgPyA8VGFiMSAvPiA6ICcnfVxyXG4gICAgICAgICAgICB7YWN0aXZlVGFiID09PSAyID8gPFRhYjIgLz4gOiAnJ31cclxuICAgICAgICAgICAge2FjdGl2ZVRhYiA9PT0gMyA/IDxUYWIzIC8+IDogJyd9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAuY29udHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDEwMTAxO1xyXG4gICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4IDEwJTtcclxuICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zZWxlY3RvciB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDQwcHggYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2VsZWN0b3IgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmMDA7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNlbGVjdG9yIGJ1dHRvbi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmYwMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il19 */\n/*@ sourceURL=U:\\\\Me\\\\Portfolio\\\\components\\\\Work\\\\index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.34b05a04ea66fd8d0324.hot-update.js.map