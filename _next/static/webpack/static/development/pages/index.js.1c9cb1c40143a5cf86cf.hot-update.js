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
    className: "jsx-1746261511",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1746261511" + " " + "cont",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("main", {
    className: "jsx-1746261511" + " " + "content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-1746261511" + " " + "left",
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
    className: "jsx-1746261511",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "jsx-1746261511" + " " + "divider",
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
    className: "jsx-1746261511",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "jsx-1746261511",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#workP",
    className: "jsx-1746261511" + " " + "yob",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 29
    }
  }, "My Projects"))), __jsx("div", {
    id: balling === 11 ? "" : "smashme",
    className: "jsx-1746261511" + " " + ("right " + (balling ? "paused" : "") || false),
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
    className: "jsx-1746261511" + " " + ("portrait " + (balling ? "paused" : "") || false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "jsx-1746261511" + " " + "overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "jsx-1746261511",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 33
    }
  }, "Click me")), __jsx("img", {
    id: "playme",
    src: "/assets/me.jpg",
    alt: "ashraf portrait",
    className: "jsx-1746261511" + " " + ((balling ? "paused" : "") || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 29
    }
  })))), __jsx("div", {
    className: "jsx-1746261511" + " " + "bot",
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
    className: "jsx-1746261511",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "jsx-1746261511" + " " + "scroll",
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
    className: "jsx-1746261511" + " " + "language",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1746261511",
    __self: this
  }, "@-webkit-keyframes play-jsx-1746261511{100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes play-jsx-1746261511{100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@-webkit-keyframes smash-jsx-1746261511{0%{-webkit-transform:scaleY(.7);-ms-transform:scaleY(.7);transform:scaleY(.7);}15%{-webkit-transform:scaleY(1);-ms-transform:scaleY(1);transform:scaleY(1);}}@keyframes smash-jsx-1746261511{0%{-webkit-transform:scaleY(.7);-ms-transform:scaleY(.7);transform:scaleY(.7);}15%{-webkit-transform:scaleY(1);-ms-transform:scaleY(1);transform:scaleY(1);}}@-webkit-keyframes move-jsx-1746261511{0%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);box-shadow:20px 20px 10px #000000;}100%{-webkit-transform:translateY(-350px);-ms-transform:translateY(-350px);transform:translateY(-350px);box-shadow:20px 350px 150px #000000;}}@keyframes move-jsx-1746261511{0%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);box-shadow:20px 20px 10px #000000;}100%{-webkit-transform:translateY(-350px);-ms-transform:translateY(-350px);transform:translateY(-350px);box-shadow:20px 350px 150px #000000;}}#smashme.jsx-1746261511{-webkit-animation-name:smash-jsx-1746261511;animation-name:smash-jsx-1746261511;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-direction:alternate;animation-direction:alternate;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-transform-origin:bottom;-ms-transform-origin:bottom;transform-origin:bottom;}#moveme.jsx-1746261511{border-radius:100%;-webkit-animation-name:move-jsx-1746261511;animation-name:move-jsx-1746261511;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-direction:alternate;animation-direction:alternate;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}#playme.jsx-1746261511{-webkit-animation-name:play-jsx-1746261511;animation-name:play-jsx-1746261511;-webkit-animation-duration:5.3s;animation-duration:5.3s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;}.paused.jsx-1746261511{-webkit-animation-play-state:paused;animation-play-state:paused;}.yob.jsx-1746261511{background:#ffff00;color:#010101;border:2px solid #ffff00;padding:14px 60px;font-size:13pt;font-weight:600;-webkit-transition-duration:200ms;transition-duration:200ms;cursor:pointer;margin-top:20px;margin-right:20px;-webkit-text-decoration:none;text-decoration:none;display:block;max-width:300px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;}.yob.sm.jsx-1746261511{padding:5px 20px;font-weight:500;font-size:13pt;}.yob.reverse.jsx-1746261511{background:none;color:#ffff00;border:2px solid #ffff00;}.yob.jsx-1746261511:hover{background:#f7f749;border-color:#f7f749;}.bold.jsx-1746261511{font-weight:bold;}.cont.jsx-1746261511{background:#111111;height:100vh;height:-webkit-fill-available;width:100%;color:#f1f1f1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-weight:300;position:fixed;z-index:-1;top:0;-webkit-transition-duration:1s;transition-duration:1s;}.bot.jsx-1746261511{margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:90%;}@-webkit-keyframes breathing-jsx-1746261511{0%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}25%{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}60%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}@keyframes breathing-jsx-1746261511{0%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}25%{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}60%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}.scroll.jsx-1746261511{margin-bottom:20px;-webkit-animation:breathing-jsx-1746261511 3s ease-out infinite normal;animation:breathing-jsx-1746261511 3s ease-out infinite normal;}.bot.jsx-1746261511 .language.jsx-1746261511{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;font-weight:bold;color:#ffff00;}.content.jsx-1746261511{width:70%;margin:auto;display:grid;grid-template-columns:auto auto;grid-gap:16px;}.left.jsx-1746261511{margin-right:100px;font-size:26pt;max-width:60vw;text-align:left;margin-top:40px;}.divider.jsx-1746261511{height:4px;width:140px;background:#ffff00;}.portrait.jsx-1746261511{height:auto;width:460px;max-width:100%;border:1px solid #9e9e9e;border-radius:100%;margin:auto;cursor:pointer;-webkit-tap-highlight-color:transparent;overflow:hidden;}.portrait.jsx-1746261511 .overlay.jsx-1746261511{height:100%;width:100%;background:#ffffff40;-webkit-backdrop-filter:blur(30px);backdrop-filter:blur(30px);position:absolute;z-index:1;display:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;-webkit-tap-highlight-color:transparent;}.portrait.jsx-1746261511 .overlay.jsx-1746261511>*.jsx-1746261511{margin:auto;color:#010101;font-size:1.9em;}@media (hover:hover){.portrait.jsx-1746261511:hover .overlay.jsx-1746261511{display:grid;}}.portrait.jsx-1746261511 img.jsx-1746261511{height:100%;width:100%;}@media (max-width:600px){button.jsx-1746261511{margin:auto!important;}.navbar.jsx-1746261511{display:none;}.right.jsx-1746261511{grid-row-start:1;}.left.jsx-1746261511{font-size:1.3em;margin:auto;text-align:center;max-width:95vw;}.portrait.jsx-1746261511{width:220px;height:220px;}.content.jsx-1746261511{grid-template-columns:auto;text-align:center;width:80%;}.divider.jsx-1746261511{margin:auto;}.yob.jsx-1746261511{margin:auto;}}@media (min-width:600px){.navbar.jsx-1746261511{display:none;}button.jsx-1746261511{margin:auto!important;}.left.jsx-1746261511{font-size:1.3em;margin:auto;text-align:center;}.portrait.jsx-1746261511{width:300px;height:300px;}.right.jsx-1746261511{grid-row-start:1;}.content.jsx-1746261511{grid-template-columns:auto;text-align:center;}.divider.jsx-1746261511{margin:auto;}.yob.jsx-1746261511{margin:auto;}}@media (min-width:768px){.navbar.jsx-1746261511{display:block;}.left.jsx-1746261511{font-size:1.4em;text-align:left;}.portrait.jsx-1746261511{width:240px;height:240px;}.content.jsx-1746261511{grid-template-columns:auto auto;text-align:left;}.right.jsx-1746261511{grid-column-start:2;}.divider.jsx-1746261511{margin:0;margin-right:auto;}.yob.jsx-1746261511{margin:unset;}}@media (min-width:992px){.left.jsx-1746261511{font-size:1.8em;}.portrait.jsx-1746261511{width:300px;height:300px;}}@media (min-width:1400px){.left.jsx-1746261511{font-size:2.6em;}.portrait.jsx-1746261511{width:400px;height:400px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlU6XFxNZVxcUG9ydGZvbGlvXFxjb21wb25lbnRzXFxXZWxjb21lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThDd0IsQUFNbUMsQUFHVCxBQUNDLEFBR0UsQUFDTSxBQUdiLEFBUUYsQUFRSyxBQU1RLEFBSU8sQUFnQkYsQUFLRCxBQUtHLEFBSUYsQUFHRSxBQWNMLEFBUUssQUFJRSxBQUlGLEFBSUEsQUFJQSxBQUlOLEFBT0gsQUFPUyxBQU9SLEFBS0MsQUFZQSxBQVlBLEFBTUssQUFJTCxBQU1jLEFBR1YsQUFHSyxBQUdELEFBTUosQUFJZSxBQUtmLEFBR0EsQUFNQSxBQUdVLEFBR04sQUFLSixBQUlLLEFBR1UsQUFJZixBQUdBLEFBS0MsQUFHRyxBQUlKLEFBSW9CLEFBSVosQUFHWCxBQUlJLEFBTUcsQUFHSixBQU1JLEFBR0osU0FyQk0sQ0E1SVYsQ0FjQSxDQUtBLEFBWUQsQUFZRyxBQVVILEFBcUJNLEFBU2pCLEFBR0EsQUFpQmlCLEFBV2pCLEFBR0EsQUFZaUIsQUF3QkEsQUFTQSxDQWpIakIsQUFhQSxBQThCQSxBQW9EQSxDQW5MYSxBQTZKYixFQXZMYyxBQWlJRSxBQThCQSxBQTJCSSxBQXlCcEIsQUFTQSxDQWpPZ0IsQUFjcEIsQUFxSEksQUEwQ0EsRUEvTUEsQUFrQmMsQUEwQk8sQUFPUixBQXNDbUMsQUFrQmpDLENBa0lmLEVBeElhLEFBMERiLEFBb0NBLENBaEZtQixBQWlCRSxBQXNCekIsQ0FsQ21CLENBdURmLEFBNkJBLEFBMEJBLEFBd0JBLEFBU0EsQ0F2SGdCLENBa0NNLEFBZ0NBLEFBK0J0QixDQXhFc0IsQUE4QkEsRUEvSkcsRUFZSyxBQThLOUIsQUFPb0IsQ0F0TkssQUFnQlYsQ0F5RUEsQ0FOaUIsSUFtQlAsQ0E1RTdCLEVBdUVBLEFBNkJBLEVBWjhCLENBOENaLEFBZ0NkLENBekNtQixBQThCbkIsRUFwS0osQUFzTUksQ0E3SGdCLE1BcEVwQixBQTJJSSxHQWhLa0IsR0F1SmxCLENBdEhXLEVBdkMvQixBQTRHdUMsQ0FaSCxFQVBGLEVBOUJoQixBQVFBLEFBSUEsR0FyR1MsQ0FzRU8sQ0F1Q0ssQ0E5R2IsQUE4RlIsQ0F4RGlCLEVBYlAsRUFoQk4sQ0FnSE4sQUFPQSxFQWFnQixDQXpJOEIsR0FQM0IsQUEyRUgsQ0FXTyxHQTVDSCxJQXVHRCxFQTVIYixFQWIrQyxPQWtKaEMsQ0EvR1MsR0F1R2MsUUEzSUcsTUFvSmpDLFFBOUlBLEVBZ0JTLEFBK0hOLENBcEpxQyxZQXFKakMsRUF2SVAsQ0E2SE0sR0FyQ3BCLElBdkJrQyxJQVhSLEtBd0UxQixDQXhHbUIsQUFzRUEsZUFyRUMsQUFzRUMsZ0JBckVDLENBc0VKLENBdEdDLFlBZ0JFLENBdUZyQixHQXRFeUIsQ0F4Qk4sZUF1SUYsT0FqRkcsTUFrRndCLFVBakZ6QixXQTlCRCxJQStCSCxFQVNELE1BekVRLEVBa0NGLENBK0JWLENBU1YsR0F1RUEsQ0FqSWhCLENBa0QyQyxRQXpEUixDQTBCRyw2Q0FnQ3RCLHFCQWxFUSxDQW1DUixVQTFCaEIseUVBUkEiLCJmaWxlIjoiVTpcXE1lXFxQb3J0Zm9saW9cXGNvbXBvbmVudHNcXFdlbGNvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEljb25TY3JvbGwgZnJvbSBcIi4vSWNvblNjcm9sbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2VsY29tZShwcm9wcykge1xyXG4gICAgY29uc3QgW2JhbGxpbmcsIHNldEJhbGxpbmddID0gdXNlU3RhdGUoMTEpO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBwcm9wcy5kYXRhO1xyXG4gICAgY29uc3QgZ290b1BhZ2UgPSAocGFnZUlkKSA9PiB7XHJcbiAgICAgICAgdmFyIGVsbW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFnZUlkKTtcclxuICAgICAgICBlbG1udC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250XCI+XHJcbiAgICAgICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkYXRhWyd3ZWxjb21lLW1lc3NhZ2UtMSddIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGF0YVsnd2VsY29tZS1tZXNzYWdlLTInXSB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwieW9iXCIgaHJlZj1cIiN3b3JrUFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE15IFByb2plY3RzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInJpZ2h0IFwiICsgKGJhbGxpbmcgPyBcInBhdXNlZFwiIDogXCJcIil9IGlkPXsoYmFsbGluZyA9PT0gMTEgPyBcIlwiIDogXCJzbWFzaG1lXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1vdmVtZVwiIGNsYXNzTmFtZT17XCJwb3J0cmFpdCBcIiArIChiYWxsaW5nID8gXCJwYXVzZWRcIiA6IFwiXCIpfSBvbk1vdXNlRG93bj17KCkgPT4geyBzZXRCYWxsaW5nKCFiYWxsaW5nKSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkNsaWNrIG1lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwicGxheW1lXCIgY2xhc3NOYW1lPXsoYmFsbGluZyA/IFwicGF1c2VkXCIgOiBcIlwiKX0gc3JjPXtcIi9hc3NldHMvbWUuanBnXCJ9IGFsdD1cImFzaHJhZiBwb3J0cmFpdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAxMDAgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JvbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25TY3JvbGwgY29sb3I9XCIjZmZmXCIgaWNvbkNvbG9yPVwiI2Y3Zjc0OVwiIHRleHQ9XCJTdGFydCBzY3JvbGxpbmcgdG8gc2VlIG1vcmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZ3VhZ2VcIiBzdHlsZT17eyB3aWR0aDogMTAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPHNwYW4gb25DbGljaz17KCkgPT4gcHJvcHMuc2V0TGFuZyhmYWxzZSl9PuiqniBDaGFuZ2UgTGFuZ3VhZ2UgPC9zcGFuPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG5cclxuXHJcblxyXG5Aa2V5ZnJhbWVzIHBsYXkge1xyXG4gICAgMTAwJSB7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfVxyXG59XHJcbkBrZXlmcmFtZXMgc21hc2gge1xyXG4wJSB7dHJhbnNmb3JtOiBzY2FsZVkoLjcpfVxyXG4xNSUgIHt0cmFuc2Zvcm06IHNjYWxlWSgxKX1cclxufVxyXG5Aa2V5ZnJhbWVzIG1vdmUge1xyXG4wJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIDtib3gtc2hhZG93OiAyMHB4IDIwcHggIDEwcHggIzAwMDAwMH1cclxuMTAwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zNTBweCk7Ym94LXNoYWRvdzoyMHB4IDM1MHB4ICAxNTBweCAjMDAwMDAwfVxyXG59XHJcbiNzbWFzaG1le1xyXG5hbmltYXRpb24tbmFtZTogc21hc2g7XHJcbmFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbmFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcclxuYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbmFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG50cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XHJcbn1cclxuI21vdmVtZXtcclxuYm9yZGVyLXJhZGl1czogMTAwJTtcclxuYW5pbWF0aW9uLW5hbWU6IG1vdmU7XHJcbmFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbmFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcclxuYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbmFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG59XHJcbiNwbGF5bWUge1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHBsYXk7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDUuM3M7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxufVxyXG4ucGF1c2VkIHtcclxuICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XHJcbn1cclxuLy8gLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgICAgICAgICAgLnlvYntcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDEwMTAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTRweCA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNwdDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAueW9iLnNte1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnlvYi5yZXZlcnNle1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZmYwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC55b2I6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y3Zjc0OTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNmN2Y3NDk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYm9sZHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jb250e1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxMTExMTE7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmMWYxZjE7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmJvdHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGJyZWF0aGluZyB7XHJcbiAgICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgMjUlIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA2MCUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc2Nyb2xse1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBicmVhdGhpbmcgM3MgZWFzZS1vdXQgaW5maW5pdGUgbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmJvdCAubGFuZ3VhZ2V7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmYwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1nYXA6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubGVmdHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZwdDtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDYwdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmRpdmlkZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmMDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucG9ydHJhaXR7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NjBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzllOWU5ZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vYmFja2dyb3VuZDogI2ZmZmYwMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5wb3J0cmFpdCAub3ZlcmxheXtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjQwO1xyXG4gICAgICAgICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMwcHgpO1xyXG4gICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucG9ydHJhaXQgLm92ZXJsYXk+KntcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMTAxMDE7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjllbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLnBvcnRyYWl0OmhvdmVyIC5vdmVybGF5e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5wb3J0cmFpdCBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG8haW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubmF2YmFye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5yaWdodHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5sZWZ0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA5NXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucG9ydHJhaXR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuZGl2aWRlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAueW9ie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA2MDBweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLm5hdmJhcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0byFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5sZWZ0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnBvcnRyYWl0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5yaWdodHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmRpdmlkZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnlvYntcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLm5hdmJhcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmxlZnR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgLnBvcnRyYWl0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnJpZ2h0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmRpdmlkZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAueW9ie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IHVuc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpe1xyXG4gICAgICAgICAgICAgICAgICAgIC5sZWZ0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuOGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICAgICAgICAgIC5wb3J0cmFpdHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpe1xyXG4gICAgICAgICAgICAgICAgICAgIC5sZWZ0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuNmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLnBvcnRyYWl0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXYgPlxyXG4gICAgKVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=U:\\\\Me\\\\Portfolio\\\\components\\\\Welcome.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.1c9cb1c40143a5cf86cf.hot-update.js.map