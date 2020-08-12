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
    className: "jsx-3079523131",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3079523131" + " " + "cont",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("main", {
    className: "jsx-3079523131" + " " + "content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-3079523131" + " " + "left",
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
    className: "jsx-3079523131",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "jsx-3079523131" + " " + "divider",
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
    className: "jsx-3079523131",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "jsx-3079523131",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#workP",
    className: "jsx-3079523131" + " " + "yob",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 29
    }
  }, "Work"))), __jsx("div", {
    id: balling === 11 ? "" : "smashme",
    className: "jsx-3079523131" + " " + ("right " + (balling ? "paused" : "") || false),
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
    className: "jsx-3079523131" + " " + ("portrait " + (balling ? "paused" : "") || false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "jsx-3079523131" + " " + "overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "jsx-3079523131",
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
    className: "jsx-3079523131" + " " + ((balling ? "paused" : "") || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 29
    }
  })))), __jsx("div", {
    className: "jsx-3079523131" + " " + "bot",
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
    className: "jsx-3079523131",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "jsx-3079523131" + " " + "scroll",
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
    className: "jsx-3079523131" + " " + "language",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3079523131",
    __self: this
  }, "@-webkit-keyframes play-jsx-3079523131{100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes play-jsx-3079523131{100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@-webkit-keyframes smash-jsx-3079523131{0%{-webkit-transform:scaleY(.7);-ms-transform:scaleY(.7);transform:scaleY(.7);}15%{-webkit-transform:scaleY(1);-ms-transform:scaleY(1);transform:scaleY(1);}}@keyframes smash-jsx-3079523131{0%{-webkit-transform:scaleY(.7);-ms-transform:scaleY(.7);transform:scaleY(.7);}15%{-webkit-transform:scaleY(1);-ms-transform:scaleY(1);transform:scaleY(1);}}@-webkit-keyframes move-jsx-3079523131{0%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);box-shadow:20px 20px 10px #000000;}100%{-webkit-transform:translateY(-350px);-ms-transform:translateY(-350px);transform:translateY(-350px);box-shadow:20px 350px 150px #000000;}}@keyframes move-jsx-3079523131{0%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);box-shadow:20px 20px 10px #000000;}100%{-webkit-transform:translateY(-350px);-ms-transform:translateY(-350px);transform:translateY(-350px);box-shadow:20px 350px 150px #000000;}}#smashme.jsx-3079523131{-webkit-animation-name:smash-jsx-3079523131;animation-name:smash-jsx-3079523131;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-direction:alternate;animation-direction:alternate;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-transform-origin:bottom;-ms-transform-origin:bottom;transform-origin:bottom;}#moveme.jsx-3079523131{border-radius:100%;-webkit-animation-name:move-jsx-3079523131;animation-name:move-jsx-3079523131;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-direction:alternate;animation-direction:alternate;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}#playme.jsx-3079523131{-webkit-animation-name:play-jsx-3079523131;animation-name:play-jsx-3079523131;-webkit-animation-duration:5.3s;animation-duration:5.3s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;}.paused.jsx-3079523131{-webkit-animation-play-state:paused;animation-play-state:paused;}.yob.jsx-3079523131{background:#ffff00;color:#010101;border:2px solid #ffff00;padding:14px 60px;font-size:13pt;font-weight:600;-webkit-transition-duration:200ms;transition-duration:200ms;cursor:pointer;margin-top:20px;margin-right:20px;-webkit-text-decoration:none;text-decoration:none;display:block;max-width:300px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;}.yob.sm.jsx-3079523131{padding:5px 20px;font-weight:500;font-size:13pt;}.yob.reverse.jsx-3079523131{background:none;color:#ffff00;border:2px solid #ffff00;}.yob.jsx-3079523131:hover{background:#f7f749;border-color:#f7f749;}.bold.jsx-3079523131{font-weight:bold;}.cont.jsx-3079523131{background:#111111;height:100vh;height:-webkit-fill-available;width:100%;color:#f1f1f1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-weight:300;position:fixed;z-index:-1;top:0;-webkit-transition-duration:1s;transition-duration:1s;}.bot.jsx-3079523131{margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:90%;}@-webkit-keyframes breathing-jsx-3079523131{0%{-webkit-transform:scale(0.9);-ms-transform:scale(0.9);transform:scale(0.9);}25%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}60%{-webkit-transform:scale(0.9);-ms-transform:scale(0.9);transform:scale(0.9);}100%{-webkit-transform:scale(0.9);-ms-transform:scale(0.9);transform:scale(0.9);}}@keyframes breathing-jsx-3079523131{0%{-webkit-transform:scale(0.9);-ms-transform:scale(0.9);transform:scale(0.9);}25%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}60%{-webkit-transform:scale(0.9);-ms-transform:scale(0.9);transform:scale(0.9);}100%{-webkit-transform:scale(0.9);-ms-transform:scale(0.9);transform:scale(0.9);}}.scroll.jsx-3079523131{margin-bottom:20px;-webkit-animation:breathing-jsx-3079523131 5s ease-out infinite normal;animation:breathing-jsx-3079523131 5s ease-out infinite normal;}.bot.jsx-3079523131 .language.jsx-3079523131{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;font-weight:bold;color:#ffff00;}.content.jsx-3079523131{width:70%;margin:auto;display:grid;grid-template-columns:auto auto;grid-gap:16px;}.left.jsx-3079523131{margin-right:100px;font-size:26pt;max-width:60vw;text-align:left;margin-top:40px;}.divider.jsx-3079523131{height:4px;width:140px;background:#ffff00;}.portrait.jsx-3079523131{height:auto;width:460px;max-width:100%;border:2px solid #ffff00;border-radius:100%;background:#ffff00;margin:auto;cursor:pointer;-webkit-tap-highlight-color:transparent;overflow:hidden;}.portrait.jsx-3079523131 .overlay.jsx-3079523131{height:100%;width:100%;background:#ffff0022;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);position:absolute;z-index:1;display:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;-webkit-tap-highlight-color:transparent;}.portrait.jsx-3079523131 .overlay.jsx-3079523131>*.jsx-3079523131{margin:auto;color:#010101;font-size:1.9em;}@media (hover:hover){.portrait.jsx-3079523131:hover .overlay.jsx-3079523131{display:grid;}}.portrait.jsx-3079523131 img.jsx-3079523131{height:100%;width:100%;}@media (max-width:600px){button.jsx-3079523131{margin:auto!important;}.navbar.jsx-3079523131{display:none;}.right.jsx-3079523131{grid-row-start:1;}.left.jsx-3079523131{font-size:1.3em;margin:auto;text-align:center;max-width:95vw;}.portrait.jsx-3079523131{width:220px;}.content.jsx-3079523131{grid-template-columns:auto;text-align:center;width:80%;}.divider.jsx-3079523131{margin:auto;}.yob.jsx-3079523131{margin:auto;}}@media (min-width:600px){.navbar.jsx-3079523131{display:none;}button.jsx-3079523131{margin:auto!important;}.left.jsx-3079523131{font-size:1.3em;margin:auto;text-align:center;}.portrait.jsx-3079523131{width:300px;}.right.jsx-3079523131{grid-row-start:1;}.content.jsx-3079523131{grid-template-columns:auto;text-align:center;}.divider.jsx-3079523131{margin:auto;}.yob.jsx-3079523131{margin:auto;}}@media (min-width:768px){.navbar.jsx-3079523131{display:block;}.left.jsx-3079523131{font-size:1.4em;text-align:left;}.portrait.jsx-3079523131{width:240px;}.content.jsx-3079523131{grid-template-columns:auto auto;text-align:left;}.right.jsx-3079523131{grid-column-start:2;}.divider.jsx-3079523131{margin:0;margin-right:auto;}.yob.jsx-3079523131{margin:unset;}}@media (min-width:992px){.left.jsx-3079523131{font-size:1.8em;}.portrait.jsx-3079523131{width:300px;}}@media (min-width:1400px){.left.jsx-3079523131{font-size:2.6em;}.portrait.jsx-3079523131{width:400px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlU6XFxNZVxcUG9ydGZvbGlvXFxjb21wb25lbnRzXFxXZWxjb21lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThDd0IsQUFNbUMsQUFHVCxBQUNDLEFBR0UsQUFDTSxBQUdiLEFBUUYsQUFRSyxBQU1RLEFBSU8sQUFnQkYsQUFLRCxBQUtHLEFBSUYsQUFHRSxBQWNMLEFBUU8sQUFJRixBQUlFLEFBSUEsQUFJRixBQUlOLEFBT0gsQUFPUyxBQU9SLEFBS0MsQUFZQSxBQVlBLEFBTUssQUFJTCxBQU1jLEFBR1YsQUFHSyxBQUdELEFBTUosQUFHZSxBQUtmLEFBR0EsQUFNQSxBQUdVLEFBR04sQUFLSixBQUdLLEFBR1UsQUFJZixBQUdBLEFBS0MsQUFHRyxBQUlKLEFBR29CLEFBSVosQUFHWCxBQUlJLEFBTUcsQUFHSixBQUtJLEFBR0osU0FwQk0sQ0F6SVYsQ0FjQSxDQUtBLEFBWUQsQUFZRyxBQVVILEFBcUJYLEFBUUEsQUFHQSxBQWlCQSxBQVVBLEFBR0EsQUFZQSxBQXVCQSxBQVFBLENBN0dBLEFBYUEsQUE2QkEsQUFrREEsQ0FoTGEsQUEySmIsRUFyTGMsQUFpSUUsQUE2QkEsQUEwQkksQUF3QnBCLEFBUUEsQ0E3TmdCLEFBY3BCLEFBcUhJLEFBd0NBLEVBN01BLEFBa0JjLEFBMEJPLEFBT1IsQUFzQ21DLEFBa0JqQyxDQStIZixFQXJJYSxBQTBEYixBQW1DQSxDQS9FbUIsQUFpQkUsQUFzQnpCLENBbENtQixFQXdCQyxDQWlDTSxBQStCQSxBQThCdEIsQ0FyRXNCLEFBNkJBLEVBOUpHLEVBWUssQUE0SzlCLEFBTW9CLENBbk5LLEFBZ0JWLENBeUVBLENBTmlCLElBbUJQLENBNUU3QixFQXVFQSxBQTZCQSxFQVo4QixDQTZDWixBQStCZCxDQXZDbUIsQUE2Qm5CLEVBbktKLEFBbU1JLENBMUhnQixNQXBFcEIsQUEwSUksR0EvSmtCLEdBdUpsQixDQXRIVyxFQXZDL0IsQUE0R3VDLENBWkgsRUFQRixFQTFCaEIsR0E3RlMsQ0FzRU8sQ0F1Q0ssQ0E5R2IsQUEwRlIsQUFRQSxBQUlBLENBaEVpQixFQWJQLEVBaEJOLENBZ0hOLEFBT0EsRUFZdUIsQ0F4SXVCLEdBUDNCLEFBMkVILENBV08sR0E1Q0gsTUFyQmQsRUFiK0MsR0F3SXJDLElBVUssQ0EvR1MsT0FzR1gsSUExSTRCLE1Bb0pqQyxLQVQ4QixHQXJJOUIsRUFnQlMsQUErSE4sQ0FwSnFDLFlBcUpqQyxFQXZJUCxJQXdGZCxJQXZCa0MsSUFYUixNQWhDUCxBQXNFQSxFQWlDQyxhQXRHQSxBQXNFQyxHQWlDckIsYUF0R3NCLENBc0VKLENBdEdDLFlBZ0JFLENBdUZyQixHQXRFeUIsQ0F4Qk4sZUF1SUYsT0FqRkcsTUFrRndCLFVBakZ6QixXQTlCRCxJQStCSCxFQVNELE1BekVRLEVBa0NGLENBK0JWLENBU1YsR0F1RUEsQ0FqSWhCLENBa0QyQyxRQXpEUixDQTBCRyw2Q0FnQ3RCLHFCQWxFUSxDQW1DUixVQTFCaEIseUVBUkEiLCJmaWxlIjoiVTpcXE1lXFxQb3J0Zm9saW9cXGNvbXBvbmVudHNcXFdlbGNvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEljb25TY3JvbGwgZnJvbSBcIi4vSWNvblNjcm9sbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2VsY29tZShwcm9wcykge1xyXG4gICAgY29uc3QgW2JhbGxpbmcsIHNldEJhbGxpbmddID0gdXNlU3RhdGUoMTEpO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBwcm9wcy5kYXRhO1xyXG4gICAgY29uc3QgZ290b1BhZ2UgPSAocGFnZUlkKSA9PiB7XHJcbiAgICAgICAgdmFyIGVsbW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFnZUlkKTtcclxuICAgICAgICBlbG1udC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250XCI+XHJcbiAgICAgICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkYXRhWyd3ZWxjb21lLW1lc3NhZ2UtMSddIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGF0YVsnd2VsY29tZS1tZXNzYWdlLTInXSB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwieW9iXCIgaHJlZj1cIiN3b3JrUFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdvcmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wicmlnaHQgXCIgKyAoYmFsbGluZyA/IFwicGF1c2VkXCIgOiBcIlwiKX0gaWQ9eyhiYWxsaW5nID09PSAxMSA/IFwiXCIgOiBcInNtYXNobWVcIil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibW92ZW1lXCIgY2xhc3NOYW1lPXtcInBvcnRyYWl0IFwiICsgKGJhbGxpbmcgPyBcInBhdXNlZFwiIDogXCJcIil9IG9uTW91c2VEb3duPXsoKSA9PiB7IHNldEJhbGxpbmcoIWJhbGxpbmcpIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q2xpY2sgbWU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgaWQ9XCJwbGF5bWVcIiBjbGFzc05hbWU9eyhiYWxsaW5nID8gXCJwYXVzZWRcIiA6IFwiXCIpfSBzcmM9e1wiaHR0cHM6Ly9hZmFpdGhyYWYuZ2l0aHViLmlvL215LXBvcnRmb2xpby9hc3NldHMvbWUucG5nXCJ9IGFsdD1cImFzaHJhZiBwb3J0cmFpdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAxMDAgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JvbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25TY3JvbGwgY29sb3I9XCIjZmZmXCIgaWNvbkNvbG9yPVwiI2Y3Zjc0OVwiIHRleHQ9XCJTdGFydCBzY3JvbGxpbmcgdG8gc2VlIG1vcmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZ3VhZ2VcIiBzdHlsZT17eyB3aWR0aDogMTAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPHNwYW4gb25DbGljaz17KCkgPT4gcHJvcHMuc2V0TGFuZyhmYWxzZSl9PuiqniBDaGFuZ2UgTGFuZ3VhZ2UgPC9zcGFuPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG5cclxuXHJcblxyXG5Aa2V5ZnJhbWVzIHBsYXkge1xyXG4gICAgMTAwJSB7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfVxyXG59XHJcbkBrZXlmcmFtZXMgc21hc2gge1xyXG4wJSB7dHJhbnNmb3JtOiBzY2FsZVkoLjcpfVxyXG4xNSUgIHt0cmFuc2Zvcm06IHNjYWxlWSgxKX1cclxufVxyXG5Aa2V5ZnJhbWVzIG1vdmUge1xyXG4wJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIDtib3gtc2hhZG93OiAyMHB4IDIwcHggIDEwcHggIzAwMDAwMH1cclxuMTAwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zNTBweCk7Ym94LXNoYWRvdzoyMHB4IDM1MHB4ICAxNTBweCAjMDAwMDAwfVxyXG59XHJcbiNzbWFzaG1le1xyXG5hbmltYXRpb24tbmFtZTogc21hc2g7XHJcbmFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbmFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcclxuYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbmFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG50cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XHJcbn1cclxuI21vdmVtZXtcclxuYm9yZGVyLXJhZGl1czogMTAwJTtcclxuYW5pbWF0aW9uLW5hbWU6IG1vdmU7XHJcbmFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbmFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcclxuYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbmFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG59XHJcbiNwbGF5bWUge1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHBsYXk7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDUuM3M7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxufVxyXG4ucGF1c2VkIHtcclxuICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XHJcbn1cclxuLy8gLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgICAgICAgICAgLnlvYntcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDEwMTAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTRweCA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNwdDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAueW9iLnNte1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnlvYi5yZXZlcnNle1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZmYwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC55b2I6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y3Zjc0OTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNmN2Y3NDk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYm9sZHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jb250e1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxMTExMTE7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmMWYxZjE7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmJvdHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGJyZWF0aGluZyB7XHJcbiAgICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAyNSUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA2MCUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNjcm9sbHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogYnJlYXRoaW5nIDVzIGVhc2Utb3V0IGluZmluaXRlIG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5ib3QgLmxhbmd1YWdle1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmMDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY29udGVudHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmxlZnR7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI2cHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2MHZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5kaXZpZGVye1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNDBweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZjAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnBvcnRyYWl0e1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnBvcnRyYWl0IC5vdmVybGF5e1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZjAwMjI7XHJcbiAgICAgICAgICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcbiAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5wb3J0cmFpdCAub3ZlcmxheT4qe1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAxMDEwMTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuOWVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAucG9ydHJhaXQ6aG92ZXIgLm92ZXJsYXl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnBvcnRyYWl0IGltZ3tcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAgICAgICAgICAgICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0byFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5uYXZiYXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnJpZ2h0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmxlZnR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDk1dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wb3J0cmFpdHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY29udGVudHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5kaXZpZGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC55b2J7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KXtcclxuICAgICAgICAgICAgICAgICAgICAubmF2YmFye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmxlZnR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucG9ydHJhaXR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnJpZ2h0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuZGl2aWRlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAueW9ie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXtcclxuICAgICAgICAgICAgICAgICAgICAubmF2YmFye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubGVmdHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgICAgICAgICAucG9ydHJhaXR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucmlnaHR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuZGl2aWRlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC55b2J7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogdW5zZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLmxlZnR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgLnBvcnRyYWl0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLmxlZnR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi42ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAucG9ydHJhaXR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2RpdiA+XHJcbiAgICApXHJcbn1cclxuIl19 */\n/*@ sourceURL=U:\\\\Me\\\\Portfolio\\\\components\\\\Welcome.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.d796f749e980dfc435e5.hot-update.js.map