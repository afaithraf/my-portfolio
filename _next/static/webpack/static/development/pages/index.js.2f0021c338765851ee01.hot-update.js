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
    className: "jsx-2936850822",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2936850822" + " " + "cont",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("main", {
    className: "jsx-2936850822" + " " + "content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-2936850822" + " " + "left",
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
    className: "jsx-2936850822",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "jsx-2936850822" + " " + "divider",
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
    className: "jsx-2936850822",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "jsx-2936850822",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#workP",
    className: "jsx-2936850822" + " " + "yob",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 29
    }
  }, "My Projects"))), __jsx("div", {
    id: balling === 11 ? "" : "smashme",
    className: "jsx-2936850822" + " " + ("right " + (balling ? "paused" : "") || false),
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
    className: "jsx-2936850822" + " " + ("portrait " + (balling ? "paused" : "") || false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  }, __jsx("div", {
    id: "playme",
    className: "jsx-2936850822" + " " + ((balling ? "paused" : "") || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "jsx-2936850822" + " " + "overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "jsx-2936850822",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 33
    }
  }, "Click me")), __jsx("img", {
    src: "/assets/me.jpg",
    alt: "ashraf portrait",
    className: "jsx-2936850822",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 33
    }
  }))))), __jsx("div", {
    className: "jsx-2936850822" + " " + "bot",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx("div", {
    style: {
      width: 100
    },
    className: "jsx-2936850822",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "jsx-2936850822" + " " + "scroll",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, __jsx(_IconScroll__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "#fff",
    iconColor: "#f7f749",
    text: "Start scrolling to see more",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 25
    }
  })), __jsx("div", {
    style: {
      width: 100
    },
    className: "jsx-2936850822" + " " + "language",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2936850822",
    __self: this
  }, "@-webkit-keyframes play-jsx-2936850822{100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes play-jsx-2936850822{100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@-webkit-keyframes smash-jsx-2936850822{0%{-webkit-transform:scaleY(.7);-ms-transform:scaleY(.7);transform:scaleY(.7);}15%{-webkit-transform:scaleY(1);-ms-transform:scaleY(1);transform:scaleY(1);}}@keyframes smash-jsx-2936850822{0%{-webkit-transform:scaleY(.7);-ms-transform:scaleY(.7);transform:scaleY(.7);}15%{-webkit-transform:scaleY(1);-ms-transform:scaleY(1);transform:scaleY(1);}}@-webkit-keyframes move-jsx-2936850822{0%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);box-shadow:20px 20px 10px #000000;}100%{-webkit-transform:translateY(-350px);-ms-transform:translateY(-350px);transform:translateY(-350px);box-shadow:20px 350px 150px #000000;}}@keyframes move-jsx-2936850822{0%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);box-shadow:20px 20px 10px #000000;}100%{-webkit-transform:translateY(-350px);-ms-transform:translateY(-350px);transform:translateY(-350px);box-shadow:20px 350px 150px #000000;}}#smashme.jsx-2936850822{-webkit-animation-name:smash-jsx-2936850822;animation-name:smash-jsx-2936850822;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-direction:alternate;animation-direction:alternate;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-transform-origin:bottom;-ms-transform-origin:bottom;transform-origin:bottom;}#moveme.jsx-2936850822{border-radius:100%;-webkit-animation-name:move-jsx-2936850822;animation-name:move-jsx-2936850822;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-direction:alternate;animation-direction:alternate;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}#playme.jsx-2936850822{-webkit-animation-name:play-jsx-2936850822;animation-name:play-jsx-2936850822;-webkit-animation-duration:4.3s;animation-duration:4.3s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;}.paused.jsx-2936850822{-webkit-animation-play-state:paused;animation-play-state:paused;}.yob.jsx-2936850822{background:#ffff00;color:#010101;border:2px solid #ffff00;padding:14px 60px;font-size:13pt;font-weight:600;-webkit-transition-duration:200ms;transition-duration:200ms;cursor:pointer;margin-top:20px;margin-right:20px;-webkit-text-decoration:none;text-decoration:none;display:block;max-width:300px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;}.yob.sm.jsx-2936850822{padding:5px 20px;font-weight:500;font-size:13pt;}.yob.reverse.jsx-2936850822{background:none;color:#ffff00;border:2px solid #ffff00;}.yob.jsx-2936850822:hover{background:#f7f749;border-color:#f7f749;}.bold.jsx-2936850822{font-weight:bold;}.cont.jsx-2936850822{background:#111111;height:100vh;height:-webkit-fill-available;width:100%;color:#f1f1f1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-weight:300;position:fixed;z-index:-1;top:0;-webkit-transition-duration:1s;transition-duration:1s;}.bot.jsx-2936850822{margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:90%;}@-webkit-keyframes breathing-jsx-2936850822{0%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}25%{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}60%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}@keyframes breathing-jsx-2936850822{0%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}25%{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}60%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}.scroll.jsx-2936850822{margin-bottom:20px;-webkit-animation:breathing-jsx-2936850822 3s ease-out infinite normal;animation:breathing-jsx-2936850822 3s ease-out infinite normal;}.bot.jsx-2936850822 .language.jsx-2936850822{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;font-weight:bold;color:#ffff00;}.content.jsx-2936850822{width:70%;margin:auto;display:grid;grid-template-columns:auto auto;grid-gap:16px;}.left.jsx-2936850822{margin-right:100px;font-size:26pt;max-width:60vw;text-align:left;margin-top:40px;}.divider.jsx-2936850822{height:4px;width:140px;background:#ffff00;}.portrait.jsx-2936850822{height:auto;width:460px;max-width:100%;border:1px solid #9e9e9e;border-radius:100%;margin:auto;cursor:pointer;-webkit-tap-highlight-color:transparent;overflow:hidden;}.portrait.jsx-2936850822 .overlay.jsx-2936850822{height:100%;width:100%;background:#ffffff40;-webkit-backdrop-filter:blur(30px);backdrop-filter:blur(30px);position:absolute;z-index:1;display:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;-webkit-tap-highlight-color:transparent;}.portrait.jsx-2936850822 .overlay.jsx-2936850822>*.jsx-2936850822{margin:auto;color:#010101;font-size:1.9em;}@media (hover:hover){.portrait.jsx-2936850822:hover .overlay.jsx-2936850822{display:grid;}}.portrait.jsx-2936850822 img.jsx-2936850822{height:100%;width:100%;object-fit:cover;height:auto;-webkit-transform:translate(-1%,-22%);-ms-transform:translate(-1%,-22%);transform:translate(-1%,-22%);}@media (max-width:600px){button.jsx-2936850822{margin:auto!important;}.navbar.jsx-2936850822{display:none;}.right.jsx-2936850822{grid-row-start:1;}.left.jsx-2936850822{font-size:1.3em;margin:auto;text-align:center;max-width:95vw;}.portrait.jsx-2936850822{width:220px;height:220px;}.content.jsx-2936850822{grid-template-columns:auto;text-align:center;width:80%;}.divider.jsx-2936850822{margin:auto;}.yob.jsx-2936850822{margin:auto;}}@media (min-width:600px){.navbar.jsx-2936850822{display:none;}button.jsx-2936850822{margin:auto!important;}.left.jsx-2936850822{font-size:1.3em;margin:auto;text-align:center;}.portrait.jsx-2936850822{width:300px;height:300px;}.right.jsx-2936850822{grid-row-start:1;}.content.jsx-2936850822{grid-template-columns:auto;text-align:center;}.divider.jsx-2936850822{margin:auto;}.yob.jsx-2936850822{margin:auto;}}@media (min-width:768px){.navbar.jsx-2936850822{display:block;}.left.jsx-2936850822{font-size:1.4em;text-align:left;}.portrait.jsx-2936850822{width:240px;height:240px;}.content.jsx-2936850822{grid-template-columns:auto auto;text-align:left;}.right.jsx-2936850822{grid-column-start:2;}.divider.jsx-2936850822{margin:0;margin-right:auto;}.yob.jsx-2936850822{margin:unset;}}@media (min-width:992px){.left.jsx-2936850822{font-size:1.8em;}.portrait.jsx-2936850822{width:300px;height:300px;}}@media (min-width:1400px){.left.jsx-2936850822{font-size:2.6em;}.portrait.jsx-2936850822{width:400px;height:400px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlU6XFxNZVxcUG9ydGZvbGlvXFxjb21wb25lbnRzXFxXZWxjb21lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdEd0IsQUFNbUMsQUFHVCxBQUNDLEFBR0UsQUFDTSxBQUdiLEFBUUYsQUFRSyxBQU1RLEFBSU8sQUFnQkYsQUFLRCxBQUtHLEFBSUYsQUFHRSxBQWNMLEFBUUssQUFJRSxBQUlGLEFBSUEsQUFJQSxBQUlOLEFBT0gsQUFPUyxBQU9SLEFBS0MsQUFZQSxBQVlBLEFBTUssQUFJTCxBQVNjLEFBR1YsQUFHSyxBQUdELEFBTUosQUFJZSxBQUtmLEFBR0EsQUFNQSxBQUdVLEFBR04sQUFLSixBQUlLLEFBR1UsQUFJZixBQUdBLEFBS0MsQUFHRyxBQUlKLEFBSW9CLEFBSVosQUFHWCxBQUlJLEFBTUcsQUFHSixBQU1JLEFBR0osU0FyQk0sQ0EvSVYsQ0FjQSxDQUtBLEFBWUQsQUFZRyxBQVVILEFBd0JNLEFBU2pCLEFBR0EsQUFpQmlCLEFBV2pCLEFBR0EsQUFZaUIsQUF3QkEsQUFTQSxDQXBIakIsQUFnQkEsQUE4QkEsQUFvREEsQ0F0TGEsQUFnS2IsRUExTGMsQUFvSUUsQUE4QkEsQUEyQkksQUF5QnBCLEFBU0EsQ0FwT2dCLEFBY3BCLEFBd0hJLEFBMENBLEVBbE5BLEFBa0JjLEFBMEJPLEFBT1IsQUFzQ21DLEFBa0JqQyxDQXFJZixFQTNJYSxBQTZEYixBQW9DQSxDQW5GbUIsQUFpQkUsQUFzQkosQ0FsQ0YsQ0EwRGYsQUE2QkEsQUEwQkEsQUF3QkEsQUFTQSxDQTFIZ0IsQ0FxQ00sQUFnQ0EsQUErQnRCLENBeEVzQixBQThCQSxFQWxLRyxFQVlLLEFBaUw5QixBQU9vQixDQXpOSyxBQWdCVixDQXlFQSxDQU5pQixJQW1CUCxDQTVFN0IsQUE4R2dCLEVBdkNoQixBQTZCQSxFQVo4QixDQWlEWixBQWdDZCxDQXpDbUIsQUE4Qm5CLEVBdktKLEFBeU1JLENBaElnQixHQStDZSxHQW5IbkMsQUE4SUksR0FuS2tCLEdBMEpsQixDQXpIVyxFQXZDL0IsQUE0R3VDLENBWkgsRUFQRixFQTlCaEIsQUFRQSxBQUlBLEdBckdTLENBc0VPLENBdUNLLENBOUdiLEFBOEZSLENBeERpQixFQWJQLEVBaEJOLENBZ0hOLEFBT0EsRUFhZ0IsQ0F6SThCLEdBUDNCLEFBMkVILENBV08sR0E1Q0gsSUF1R0QsRUE1SGIsRUFiK0MsT0FrSmhDLENBL0dTLEdBdUdjLFFBM0lHLE1Bb0pqQyxRQTlJQSxFQWdCUyxBQStITixDQXBKcUMsWUFxSmpDLEVBdklQLENBNkhNLEdBckNwQixDQW1FQSxHQTFGa0MsSUFYUixLQXdFMUIsQ0F4R21CLEFBc0VBLGVBckVDLEFBc0VDLGdCQXJFQyxDQXNFSixDQXRHQyxZQWdCRSxDQXVGckIsR0F0RXlCLENBeEJOLGVBdUlGLE9BakZHLE1Ba0Z3QixVQWpGekIsV0E5QkQsSUErQkgsRUFTRCxNQXpFUSxFQWtDRixDQStCVixDQVNWLEdBdUVBLENBakloQixDQWtEMkMsUUF6RFIsQ0EwQkcsNkNBZ0N0QixxQkFsRVEsQ0FtQ1IsVUExQmhCLHlFQVJBIiwiZmlsZSI6IlU6XFxNZVxcUG9ydGZvbGlvXFxjb21wb25lbnRzXFxXZWxjb21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJY29uU2Nyb2xsIGZyb20gXCIuL0ljb25TY3JvbGxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdlbGNvbWUocHJvcHMpIHtcclxuICAgIGNvbnN0IFtiYWxsaW5nLCBzZXRCYWxsaW5nXSA9IHVzZVN0YXRlKDExKTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gcHJvcHMuZGF0YTtcclxuICAgIGNvbnN0IGdvdG9QYWdlID0gKHBhZ2VJZCkgPT4ge1xyXG4gICAgICAgIHZhciBlbG1udCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhZ2VJZCk7XHJcbiAgICAgICAgZWxtbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udFwiPlxyXG4gICAgICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGF0YVsnd2VsY29tZS1tZXNzYWdlLTEnXSB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdmlkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGRhdGFbJ3dlbGNvbWUtbWVzc2FnZS0yJ10gfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInlvYlwiIGhyZWY9XCIjd29ya1BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNeSBQcm9qZWN0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJyaWdodCBcIiArIChiYWxsaW5nID8gXCJwYXVzZWRcIiA6IFwiXCIpfSBpZD17KGJhbGxpbmcgPT09IDExID8gXCJcIiA6IFwic21hc2htZVwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtb3ZlbWVcIiBjbGFzc05hbWU9e1wicG9ydHJhaXQgXCIgKyAoYmFsbGluZyA/IFwicGF1c2VkXCIgOiBcIlwiKX0gb25Nb3VzZURvd249eygpID0+IHsgc2V0QmFsbGluZyghYmFsbGluZykgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicGxheW1lXCIgY2xhc3NOYW1lPXsoYmFsbGluZyA/IFwicGF1c2VkXCIgOiBcIlwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5DbGljayBtZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtcIi9hc3NldHMvbWUuanBnXCJ9IGFsdD1cImFzaHJhZiBwb3J0cmFpdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDEwMCB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcm9sbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvblNjcm9sbCBjb2xvcj1cIiNmZmZcIiBpY29uQ29sb3I9XCIjZjdmNzQ5XCIgdGV4dD1cIlN0YXJ0IHNjcm9sbGluZyB0byBzZWUgbW9yZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYW5ndWFnZVwiIHN0eWxlPXt7IHdpZHRoOiAxMDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8c3BhbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zZXRMYW5nKGZhbHNlKX0+6KqeIENoYW5nZSBMYW5ndWFnZSA8L3NwYW4+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcblxyXG5cclxuXHJcbkBrZXlmcmFtZXMgcGxheSB7XHJcbiAgICAxMDAlIHt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9XHJcbn1cclxuQGtleWZyYW1lcyBzbWFzaCB7XHJcbjAlIHt0cmFuc2Zvcm06IHNjYWxlWSguNyl9XHJcbjE1JSAge3RyYW5zZm9ybTogc2NhbGVZKDEpfVxyXG59XHJcbkBrZXlmcmFtZXMgbW92ZSB7XHJcbjAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgO2JveC1zaGFkb3c6IDIwcHggMjBweCAgMTBweCAjMDAwMDAwfVxyXG4xMDAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTM1MHB4KTtib3gtc2hhZG93OjIwcHggMzUwcHggIDE1MHB4ICMwMDAwMDB9XHJcbn1cclxuI3NtYXNobWV7XHJcbmFuaW1hdGlvbi1uYW1lOiBzbWFzaDtcclxuYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xyXG5hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbnRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcclxufVxyXG4jbW92ZW1le1xyXG5ib3JkZXItcmFkaXVzOiAxMDAlO1xyXG5hbmltYXRpb24tbmFtZTogbW92ZTtcclxuYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xyXG5hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbn1cclxuI3BsYXltZSB7XHJcbiAgICBhbmltYXRpb24tbmFtZTogcGxheTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNC4zcztcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG59XHJcbi5wYXVzZWQge1xyXG4gICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcclxufVxyXG4vLyAvLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgICAgICAgICAueW9ie1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMTAxMDE7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZmYwMDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNHB4IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B0O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC55b2Iuc217XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAueW9iLnJldmVyc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmYwMDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZjAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnlvYjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjdmNzQ5O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2Y3Zjc0OTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5ib2xke1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNvbnR7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzExMTExMTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2YxZjFmMTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYm90e1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgYnJlYXRoaW5nIHtcclxuICAgICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAyNSUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDYwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zY3JvbGx7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGJyZWF0aGluZyAzcyBlYXNlLW91dCBpbmZpbml0ZSBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYm90IC5sYW5ndWFnZXtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZjAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBncmlkLWdhcDogMTZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5sZWZ0e1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNnB0O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNjB2dztcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZGl2aWRlcntcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmYwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5wb3J0cmFpdHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOWU5ZTllO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9iYWNrZ3JvdW5kOiAjZmZmZjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnBvcnRyYWl0IC5vdmVybGF5e1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmNDA7XHJcbiAgICAgICAgICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzBweCk7XHJcbiAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5wb3J0cmFpdCAub3ZlcmxheT4qe1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAxMDEwMTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuOWVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAucG9ydHJhaXQ6aG92ZXIgLm92ZXJsYXl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnBvcnRyYWl0IGltZ3tcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xJSwgLTIyJSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAgICAgICAgICAgICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0byFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5uYXZiYXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnJpZ2h0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmxlZnR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDk1dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wb3J0cmFpdHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY29udGVudHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5kaXZpZGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC55b2J7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KXtcclxuICAgICAgICAgICAgICAgICAgICAubmF2YmFye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmxlZnR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucG9ydHJhaXR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnJpZ2h0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuZGl2aWRlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAueW9ie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXtcclxuICAgICAgICAgICAgICAgICAgICAubmF2YmFye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubGVmdHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgICAgICAgICAucG9ydHJhaXR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucmlnaHR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuZGl2aWRlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC55b2J7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogdW5zZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLmxlZnR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgLnBvcnRyYWl0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLmxlZnR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi42ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAucG9ydHJhaXR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2RpdiA+XHJcbiAgICApXHJcbn1cclxuIl19 */\n/*@ sourceURL=U:\\\\Me\\\\Portfolio\\\\components\\\\Welcome.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.2f0021c338765851ee01.hot-update.js.map