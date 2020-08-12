webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Welcome.js":
/*!*******************************!*\
  !*** ./components/Welcome.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Welcome; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _IconScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IconScroll */ "./components/IconScroll.js");
var _jsxFileName = "U:\\Me\\Portfolio\\components\\Welcome.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Welcome(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(11),
      balling = _useState[0],
      setBalling = _useState[1];

  var data = props.data;

  var gotoPage = function gotoPage(pageId) {
    var elmnt = document.getElementById(pageId);
    elmnt.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return __jsx("div", {
    className: "jsx-885356448",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-885356448" + " " + "cont",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("main", {
    className: "jsx-885356448" + " " + "content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-885356448" + " " + "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: data['welcome-message-1']
    },
    className: "jsx-885356448",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "jsx-885356448" + " " + "divider",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  }), __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: data['welcome-message-2']
    },
    className: "jsx-885356448",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "jsx-885356448",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#workP",
    className: "jsx-885356448" + " " + "yob",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 29
    }
  }, "Work"))), __jsx("div", {
    id: balling === 11 ? "" : "smashme",
    className: "jsx-885356448" + " " + ("right " + (balling ? "paused" : "") || false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, __jsx("div", {
    id: "moveme",
    onMouseDown: function onMouseDown() {
      setBalling(!balling);
    },
    className: "jsx-885356448" + " " + ("portrait " + (balling ? "paused" : "") || false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "jsx-885356448" + " " + "overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "jsx-885356448",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 33
    }
  }, "Click me")), __jsx("img", {
    id: "playme",
    src: "https://afaithraf.github.io/my-portfolio/assets/me.png",
    alt: "ashraf portrait",
    className: "jsx-885356448" + " " + ((balling ? "paused" : "") || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 29
    }
  })))), __jsx("div", {
    className: "jsx-885356448" + " " + "bot",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, __jsx("div", {
    style: {
      width: 100
    },
    className: "jsx-885356448",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "jsx-885356448" + " " + "scroll",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, __jsx(_IconScroll__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "#fff",
    iconColor: "#f7f749",
    text: "Start scrolling to see more",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  })), __jsx("div", {
    style: {
      width: 100
    },
    className: "jsx-885356448" + " " + "language",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "885356448",
    __self: this
  }, "@-webkit-keyframes play-jsx-885356448{100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes play-jsx-885356448{100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@-webkit-keyframes smash-jsx-885356448{0%{-webkit-transform:scaleY(.7);-ms-transform:scaleY(.7);transform:scaleY(.7);}15%{-webkit-transform:scaleY(1);-ms-transform:scaleY(1);transform:scaleY(1);}}@keyframes smash-jsx-885356448{0%{-webkit-transform:scaleY(.7);-ms-transform:scaleY(.7);transform:scaleY(.7);}15%{-webkit-transform:scaleY(1);-ms-transform:scaleY(1);transform:scaleY(1);}}@-webkit-keyframes move-jsx-885356448{0%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);box-shadow:20px 20px 10px #000000;}100%{-webkit-transform:translateY(-350px);-ms-transform:translateY(-350px);transform:translateY(-350px);box-shadow:20px 350px 150px #000000;}}@keyframes move-jsx-885356448{0%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);box-shadow:20px 20px 10px #000000;}100%{-webkit-transform:translateY(-350px);-ms-transform:translateY(-350px);transform:translateY(-350px);box-shadow:20px 350px 150px #000000;}}#smashme.jsx-885356448{-webkit-animation-name:smash-jsx-885356448;animation-name:smash-jsx-885356448;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-direction:alternate;animation-direction:alternate;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-transform-origin:bottom;-ms-transform-origin:bottom;transform-origin:bottom;}#moveme.jsx-885356448{border-radius:100%;-webkit-animation-name:move-jsx-885356448;animation-name:move-jsx-885356448;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-direction:alternate;animation-direction:alternate;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}#playme.jsx-885356448{-webkit-animation-name:play-jsx-885356448;animation-name:play-jsx-885356448;-webkit-animation-duration:5.3s;animation-duration:5.3s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;}.paused.jsx-885356448{-webkit-animation-play-state:paused;animation-play-state:paused;}.yob.jsx-885356448{background:#ffff00;color:#010101;border:2px solid #ffff00;padding:14px 60px;font-size:13pt;font-weight:600;-webkit-transition-duration:200ms;transition-duration:200ms;cursor:pointer;margin-top:20px;margin-right:20px;-webkit-text-decoration:none;text-decoration:none;display:block;max-width:300px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;}.yob.sm.jsx-885356448{padding:5px 20px;font-weight:500;font-size:13pt;}.yob.reverse.jsx-885356448{background:none;color:#ffff00;border:2px solid #ffff00;}.yob.jsx-885356448:hover{background:#f7f749;border-color:#f7f749;}.bold.jsx-885356448{font-weight:bold;}.cont.jsx-885356448{background:#111111;height:100vh;height:-webkit-fill-available;width:100%;color:#f1f1f1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-weight:300;position:fixed;z-index:-1;top:0;-webkit-transition-duration:1s;transition-duration:1s;}.bot.jsx-885356448{margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:90%;}@-webkit-keyframes breathing-jsx-885356448{0%{-webkit-transform:scale(0.9);-ms-transform:scale(0.9);transform:scale(0.9);}100%{-webkit-transform:scale(1.9);-ms-transform:scale(1.9);transform:scale(1.9);}}@keyframes breathing-jsx-885356448{0%{-webkit-transform:scale(0.9);-ms-transform:scale(0.9);transform:scale(0.9);}100%{-webkit-transform:scale(1.9);-ms-transform:scale(1.9);transform:scale(1.9);}}.scroll.jsx-885356448{margin-bottom:20px;-webkit-animation:breathing-jsx-885356448 5s ease-out infinite normal;animation:breathing-jsx-885356448 5s ease-out infinite normal;}.bot.jsx-885356448 .language.jsx-885356448{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;font-weight:bold;color:#ffff00;}.content.jsx-885356448{width:70%;margin:auto;display:grid;grid-template-columns:auto auto;grid-gap:16px;}.left.jsx-885356448{margin-right:100px;font-size:26pt;max-width:60vw;text-align:left;margin-top:40px;}.divider.jsx-885356448{height:4px;width:140px;background:#ffff00;}.portrait.jsx-885356448{height:auto;width:460px;max-width:100%;border:2px solid #ffff00;border-radius:100%;background:#ffff00;margin:auto;cursor:pointer;-webkit-tap-highlight-color:transparent;overflow:hidden;}.portrait.jsx-885356448 .overlay.jsx-885356448{height:100%;width:100%;background:#ffff0022;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);position:absolute;z-index:1;display:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;-webkit-tap-highlight-color:transparent;}.portrait.jsx-885356448 .overlay.jsx-885356448>*.jsx-885356448{margin:auto;color:#010101;font-size:1.9em;}@media (hover:hover){.portrait.jsx-885356448:hover .overlay.jsx-885356448{display:grid;}}.portrait.jsx-885356448 img.jsx-885356448{height:100%;width:100%;}@media (max-width:600px){button.jsx-885356448{margin:auto!important;}.navbar.jsx-885356448{display:none;}.right.jsx-885356448{grid-row-start:1;}.left.jsx-885356448{font-size:1.3em;margin:auto;text-align:center;max-width:95vw;}.portrait.jsx-885356448{width:220px;}.content.jsx-885356448{grid-template-columns:auto;text-align:center;width:80%;}.divider.jsx-885356448{margin:auto;}.yob.jsx-885356448{margin:auto;}}@media (min-width:600px){.navbar.jsx-885356448{display:none;}button.jsx-885356448{margin:auto!important;}.left.jsx-885356448{font-size:1.3em;margin:auto;text-align:center;}.portrait.jsx-885356448{width:300px;}.right.jsx-885356448{grid-row-start:1;}.content.jsx-885356448{grid-template-columns:auto;text-align:center;}.divider.jsx-885356448{margin:auto;}.yob.jsx-885356448{margin:auto;}}@media (min-width:768px){.navbar.jsx-885356448{display:block;}.left.jsx-885356448{font-size:1.4em;text-align:left;}.portrait.jsx-885356448{width:240px;}.content.jsx-885356448{grid-template-columns:auto auto;text-align:left;}.right.jsx-885356448{grid-column-start:2;}.divider.jsx-885356448{margin:0;margin-right:auto;}.yob.jsx-885356448{margin:unset;}}@media (min-width:992px){.left.jsx-885356448{font-size:1.8em;}.portrait.jsx-885356448{width:300px;}}@media (min-width:1400px){.left.jsx-885356448{font-size:2.6em;}.portrait.jsx-885356448{width:400px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlU6XFxNZVxcUG9ydGZvbGlvXFxjb21wb25lbnRzXFxXZWxjb21lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThDd0IsQUFNbUMsQUFHVCxBQUNDLEFBR0UsQUFDTSxBQUdiLEFBUUYsQUFRSyxBQU1RLEFBSU8sQUFnQkYsQUFLRCxBQUtHLEFBSUYsQUFHRSxBQWNMLEFBUU8sQUFJQSxBQUlGLEFBSU4sQUFPSCxBQU9TLEFBT1IsQUFLQyxBQVlBLEFBWUEsQUFNSyxBQUlMLEFBTWMsQUFHVixBQUdLLEFBR0QsQUFNSixBQUdlLEFBS2YsQUFHQSxBQU1BLEFBR1UsQUFHTixBQUtKLEFBR0ssQUFHVSxBQUlmLEFBR0EsQUFLQyxBQUdHLEFBSUosQUFHb0IsQUFJWixBQUdYLEFBSUksQUFNRyxBQUdKLEFBS0ksQUFHSixTQXBCTSxDQXpJVixDQWNBLENBS0EsQUFZRCxBQVlHLEFBVUgsQUFxQlgsQUFRQSxBQUdBLEFBaUJBLEFBVUEsQUFHQSxBQVlBLEFBdUJBLEFBUUEsQ0E3R0EsQUFhQSxBQTZCQSxBQWtEQSxDQXhLYSxBQW1KYixFQTdLYyxBQXlIRSxBQTZCQSxBQTBCSSxBQXdCcEIsQUFRQSxDQXJOZ0IsQUFjcEIsQUE2R0ksQUF3Q0EsRUFyTUEsQUFrQmMsQUEwQk8sQUFPUixBQThCbUMsQUFrQmpDLENBK0hmLEVBcklhLEFBMERiLEFBbUNBLENBL0VtQixBQWlCRSxBQXNCekIsQ0FsQ21CLEVBd0JDLENBaUNNLEFBK0JBLEFBOEJ0QixDQXJFc0IsQUE2QkEsRUF0SkcsRUFZSyxBQW9LOUIsQUFNb0IsQ0EzTUssQUFnQlYsQ0FpRUEsQ0FOaUIsSUFtQlAsQ0FwRTdCLEVBK0RBLEFBNkJBLEVBWjhCLENBNkNaLEFBK0JkLENBdkNtQixBQTZCbkIsRUEzSkosQUEyTEksQ0ExSGdCLE1BNURwQixBQWtJSSxHQXZKa0IsR0ErSWxCLENBOUdXLEVBdkMvQixBQW9HdUMsQ0FaSCxFQVBGLEtBL0dQLENBc0VPLENBK0JLLENBdEdiLEFBMEZSLEFBSUEsQ0FyRVUsQUFhTyxFQTdCYixHQXdHTixBQU9BLEVBWXVCLENBaEl1QixHQVAzQixBQTJFSCxDQVdPLEdBNUNILElBckJkLElBYitDLEdBZ0lyQyxJQVVLLENBdkdTLE9BOEZYLElBbEk0QixNQTRJakMsS0FUOEIsQ0E3SDlCLEVBZ0JTLEVBdUhOLENBNUlxQyxZQWN4QyxBQStITyxJQS9DckIsTUFma0MsSUFYUixNQWhDUCxBQThEQSxFQWlDQyxhQTlGQSxBQThEQyxHQWlDckIsYUE5SG1CLEFBZ0NHLENBOERKLFdBOUVHLEdBK0VyQixFQXRGbUIsQ0F3Qk0sZ0JBdUdSLE9BekVHLE1BMEV3QixVQXpFekIsV0E5QkQsSUErQkgsRUFTRCxJQXpFUSxJQWtDRixDQStCVixDQVNWLEVBMURoQixDQXlIZ0IsRUF2RTJCLE1BekRSLEdBMEJHLDZDQWdDdEIsbUJBbEVRLEdBbUNSLFFBMUJoQix5RUFSQSIsImZpbGUiOiJVOlxcTWVcXFBvcnRmb2xpb1xcY29tcG9uZW50c1xcV2VsY29tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSWNvblNjcm9sbCBmcm9tIFwiLi9JY29uU2Nyb2xsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXZWxjb21lKHByb3BzKSB7XHJcbiAgICBjb25zdCBbYmFsbGluZywgc2V0QmFsbGluZ10gPSB1c2VTdGF0ZSgxMSk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IHByb3BzLmRhdGE7XHJcbiAgICBjb25zdCBnb3RvUGFnZSA9IChwYWdlSWQpID0+IHtcclxuICAgICAgICB2YXIgZWxtbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYWdlSWQpO1xyXG4gICAgICAgIGVsbW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRcIj5cclxuICAgICAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGRhdGFbJ3dlbGNvbWUtbWVzc2FnZS0xJ10gfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkYXRhWyd3ZWxjb21lLW1lc3NhZ2UtMiddIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ5b2JcIiBocmVmPVwiI3dvcmtQXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV29ya1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJyaWdodCBcIiArIChiYWxsaW5nID8gXCJwYXVzZWRcIiA6IFwiXCIpfSBpZD17KGJhbGxpbmcgPT09IDExID8gXCJcIiA6IFwic21hc2htZVwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtb3ZlbWVcIiBjbGFzc05hbWU9e1wicG9ydHJhaXQgXCIgKyAoYmFsbGluZyA/IFwicGF1c2VkXCIgOiBcIlwiKX0gb25Nb3VzZURvd249eygpID0+IHsgc2V0QmFsbGluZyghYmFsbGluZykgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5DbGljayBtZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBpZD1cInBsYXltZVwiIGNsYXNzTmFtZT17KGJhbGxpbmcgPyBcInBhdXNlZFwiIDogXCJcIil9IHNyYz17XCJodHRwczovL2FmYWl0aHJhZi5naXRodWIuaW8vbXktcG9ydGZvbGlvL2Fzc2V0cy9tZS5wbmdcIn0gYWx0PVwiYXNocmFmIHBvcnRyYWl0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDEwMCB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcm9sbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvblNjcm9sbCBjb2xvcj1cIiNmZmZcIiBpY29uQ29sb3I9XCIjZjdmNzQ5XCIgdGV4dD1cIlN0YXJ0IHNjcm9sbGluZyB0byBzZWUgbW9yZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYW5ndWFnZVwiIHN0eWxlPXt7IHdpZHRoOiAxMDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8c3BhbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zZXRMYW5nKGZhbHNlKX0+6KqeIENoYW5nZSBMYW5ndWFnZSA8L3NwYW4+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcblxyXG5cclxuXHJcbkBrZXlmcmFtZXMgcGxheSB7XHJcbiAgICAxMDAlIHt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9XHJcbn1cclxuQGtleWZyYW1lcyBzbWFzaCB7XHJcbjAlIHt0cmFuc2Zvcm06IHNjYWxlWSguNyl9XHJcbjE1JSAge3RyYW5zZm9ybTogc2NhbGVZKDEpfVxyXG59XHJcbkBrZXlmcmFtZXMgbW92ZSB7XHJcbjAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgO2JveC1zaGFkb3c6IDIwcHggMjBweCAgMTBweCAjMDAwMDAwfVxyXG4xMDAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTM1MHB4KTtib3gtc2hhZG93OjIwcHggMzUwcHggIDE1MHB4ICMwMDAwMDB9XHJcbn1cclxuI3NtYXNobWV7XHJcbmFuaW1hdGlvbi1uYW1lOiBzbWFzaDtcclxuYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xyXG5hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbnRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcclxufVxyXG4jbW92ZW1le1xyXG5ib3JkZXItcmFkaXVzOiAxMDAlO1xyXG5hbmltYXRpb24tbmFtZTogbW92ZTtcclxuYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xyXG5hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbn1cclxuI3BsYXltZSB7XHJcbiAgICBhbmltYXRpb24tbmFtZTogcGxheTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNS4zcztcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG59XHJcbi5wYXVzZWQge1xyXG4gICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcclxufVxyXG4vLyAvLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgICAgICAgICAueW9ie1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMTAxMDE7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZmYwMDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNHB4IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B0O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC55b2Iuc217XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAueW9iLnJldmVyc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmYwMDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZjAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnlvYjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjdmNzQ5O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2Y3Zjc0OTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5ib2xke1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNvbnR7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzExMTExMTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2YxZjFmMTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYm90e1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgYnJlYXRoaW5nIHtcclxuICAgICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuOSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zY3JvbGx7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGJyZWF0aGluZyA1cyBlYXNlLW91dCBpbmZpbml0ZSBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYm90IC5sYW5ndWFnZXtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZjAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBncmlkLWdhcDogMTZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5sZWZ0e1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNnB0O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNjB2dztcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZGl2aWRlcntcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmYwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5wb3J0cmFpdHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmYwMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5wb3J0cmFpdCAub3ZlcmxheXtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmYwMDIyO1xyXG4gICAgICAgICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucG9ydHJhaXQgLm92ZXJsYXk+KntcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMTAxMDE7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjllbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLnBvcnRyYWl0OmhvdmVyIC5vdmVybGF5e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5wb3J0cmFpdCBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG8haW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubmF2YmFye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5yaWdodHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5sZWZ0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA5NXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucG9ydHJhaXR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuZGl2aWRlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAueW9ie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA2MDBweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLm5hdmJhcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0byFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5sZWZ0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnBvcnRyYWl0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5yaWdodHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmRpdmlkZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnlvYntcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLm5hdmJhcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmxlZnR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgLnBvcnRyYWl0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnJpZ2h0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmRpdmlkZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAueW9ie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IHVuc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpe1xyXG4gICAgICAgICAgICAgICAgICAgIC5sZWZ0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuOGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICAgICAgICAgIC5wb3J0cmFpdHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpe1xyXG4gICAgICAgICAgICAgICAgICAgIC5sZWZ0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuNmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLnBvcnRyYWl0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXYgPlxyXG4gICAgKVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=U:\\\\Me\\\\Portfolio\\\\components\\\\Welcome.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.31c75d608448dcb7c27b.hot-update.js.map