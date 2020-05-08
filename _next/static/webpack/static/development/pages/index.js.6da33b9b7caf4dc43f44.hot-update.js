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
var _jsxFileName = "H:\\Me\\Portfolio\\components\\Welcome.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Welcome() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      sPos = _useState[0],
      setsPos = _useState[1];

  var handleScroll = function handleScroll(e) {
    var h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    var percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
    setsPos(percent * 480 / 100);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.addEventListener('scroll', handleScroll);
    return function () {
      return window.removeEventListener('scroll', handleScroll);
    };
  });

  var gotoPage = function gotoPage(pageId) {
    console.log(pageId);
    var elmnt = document.getElementById(pageId);
    elmnt.scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    });
  };

  return __jsx("div", {
    id: "welcome-page",
    className: "jsx-2329205105",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      height: "100vh",
      width: "100%"
    },
    className: "jsx-2329205105" + " " + "spaceHolder",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-2329205105" + " " + "navbar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-2329205105" + " " + "inside",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-2329205105",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "https://afaithraf.github.io/my-portfolio/assets/logo.png",
    alt: "ashraf logo",
    className: "jsx-2329205105" + " " + "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "jsx-2329205105" + " " + "navigation",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, __jsx("ul", {
    className: "jsx-2329205105",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 25
    }
  }, __jsx("li", {
    onClick: gotoPage.bind(this, "welcome-page"),
    className: "jsx-2329205105",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 29
    }
  }, "Welcome"), __jsx("li", {
    onClick: gotoPage.bind(this, "about-page"),
    className: "jsx-2329205105",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 29
    }
  }, "About me"), __jsx("li", {
    onClick: gotoPage.bind(this, "work-page"),
    className: "jsx-2329205105",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 29
    }
  }, "Work"), __jsx("li", {
    onClick: gotoPage.bind(this, "contact-page"),
    className: "jsx-2329205105",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 29
    }
  }, "Contact")), __jsx("div", {
    style: {
      width: sPos
    },
    className: "jsx-2329205105" + " " + "indicator",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  })))), __jsx("div", {
    className: "jsx-2329205105" + " " + "cont",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx("main", {
    className: "jsx-2329205105" + " " + "content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-2329205105" + " " + "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "jsx-2329205105",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 25
    }
  }, __jsx("p", {
    className: "jsx-2329205105",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 29
    }
  }, "I\u2019m ", __jsx("span", {
    className: "jsx-2329205105" + " " + "bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 37
    }
  }, "Achraf"), ", a ", __jsx("span", {
    className: "jsx-2329205105" + " " + "bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 77
    }
  }, "Web Designer"), " that codes. i\u2019m dedicated to ", __jsx("span", {
    className: "jsx-2329205105" + " " + "bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 149
    }
  }, "UX"), ", ", __jsx("span", {
    className: "jsx-2329205105" + " " + "bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 183
    }
  }, "Coding"), " and ", __jsx("span", {
    className: "jsx-2329205105" + " " + "bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 224
    }
  }, "Tech"), ".")), __jsx("div", {
    className: "jsx-2329205105" + " " + "divider",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "jsx-2329205105",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 25
    }
  }, __jsx("p", {
    className: "jsx-2329205105",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 29
    }
  }, "I don't just build websites, I build websites that ", __jsx("span", {
    className: "jsx-2329205105" + " " + "bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 84
    }
  }, "IMPRESS"), ".")), __jsx("div", {
    className: "jsx-2329205105",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 25
    }
  }, __jsx("button", {
    onClick: gotoPage.bind(this, "contact-page"),
    className: "jsx-2329205105" + " " + "yob",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 29
    }
  }, "Contact"))), __jsx("div", {
    className: "jsx-2329205105" + " " + "right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "https://afaithraf.github.io/my-portfolio/assets/me.png",
    alt: "ashraf portrait",
    className: "jsx-2329205105" + " " + "portrait",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: "jsx-2329205105" + " " + "scroll",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, __jsx(_IconScroll__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "#fff",
    iconColor: "#f7f749",
    text: "Start scrolling to see more",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2329205105",
    __self: this
  }, "button.yob.jsx-2329205105{background:#ffff00;color:#010101;border:2px solid #ffff00;padding:14px 60px;font-size:13pt;font-weight:600;-webkit-transition-duration:200ms;transition-duration:200ms;cursor:pointer;}button.yob.jsx-2329205105:hover{background:#f7f749;border-color:#f7f749;}.bold.jsx-2329205105{font-weight:bold;}.cont.jsx-2329205105{background:#111111;height:100vh;width:100%;color:#f1f1f1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-weight:300;position:fixed;top:0;}.navbar.jsx-2329205105{left:0;right:0;position:fixed;top:0;color:#f1f1f1;font-weight:500;z-index:2;}.inside.jsx-2329205105{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin:0 10vw;}.logo.jsx-2329205105{margin:24px 0;height:30px;}.scroll.jsx-2329205105{margin:0 auto;margin-bottom:20px;}.content.jsx-2329205105{width:70%;margin:auto;display:grid;grid-template-columns:auto auto;grid-gap:16px;}.left.jsx-2329205105{margin-right:100px;font-size:26pt;max-width:60vw;text-align:left;margin-top:40px;}.divider.jsx-2329205105{height:4px;width:140px;background:#ffff00;}.portrait.jsx-2329205105{height:auto;width:460px;max-width:100%;border:2px solid #ffff00;border-radius:100%;}.navigation.jsx-2329205105 ul.jsx-2329205105{list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-bottom:1px;padding:0;}.navigation.jsx-2329205105 ul.jsx-2329205105 li.jsx-2329205105{padding:10px 0;margin:0;width:120px;text-align:center;cursor:pointer;}.navigation.jsx-2329205105 .indicator.jsx-2329205105{height:5px;width:0px;background:#ffff00;border-radius:1px;}@media (max-width:600px){.navbar.jsx-2329205105{display:none;}.right.jsx-2329205105{grid-row-start:1;}.left.jsx-2329205105{font-size:1.1em;margin:auto;text-align:center;}.portrait.jsx-2329205105{width:240px;}.content.jsx-2329205105{grid-template-columns:auto;text-align:center;}.divider.jsx-2329205105{margin:auto;}}@media (min-width:600px){.navbar.jsx-2329205105{display:none;}.left.jsx-2329205105{font-size:1.3em;margin:auto;text-align:center;}.portrait.jsx-2329205105{width:300px;}.right.jsx-2329205105{grid-row-start:1;}.content.jsx-2329205105{grid-template-columns:auto;text-align:center;}.divider.jsx-2329205105{margin:auto;}}@media (min-width:768px){.navbar.jsx-2329205105{display:block;}.left.jsx-2329205105{font-size:1.4em;text-align:left;}.portrait.jsx-2329205105{width:240px;}.content.jsx-2329205105{grid-template-columns:auto auto;text-align:left;}.right.jsx-2329205105{grid-column-start:2;}.divider.jsx-2329205105{margin:0;margin-right:auto;}}@media (min-width:992px){.left.jsx-2329205105{font-size:1.8em;}.portrait.jsx-2329205105{width:300px;}}@media (min-width:1400px){.left.jsx-2329205105{font-size:2.6em;}.portrait.jsx-2329205105{width:400px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkg6XFxNZVxcUG9ydGZvbGlvXFxjb21wb25lbnRzXFxXZWxjb21lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJFd0IsQUFHd0MsQUFVQSxBQUlGLEFBR0UsQUFXWixBQVVNLEFBTUMsQUFJQSxBQUlKLEFBT1MsQUFPUixBQUtDLEFBT0ksQUFNRCxBQU9KLEFBUUssQUFHSyxBQUdELEFBS0osQUFHZSxBQUlmLEFBTUEsQUFHSSxBQUtKLEFBR0ssQUFHVSxBQUlmLEFBS0MsQUFHRyxBQUlKLEFBR29CLEFBSVosQUFHWCxBQU9PLEFBR0osQUFLSSxBQUdKLE9BeEpSLEVBdUljLENBL0dWLENBY0EsQUF5QkYsQ0FwQkUsQUF1Q1osQUFPQSxBQWNBLEFBVUEsQUFZQSxBQW9CQSxBQVFBLENBbEZBLEFBd0JBLENBL0VZLEFBSU8sQUFrR25CLENBcEhlLEFBc0ROLENBTkksQUEyQkcsQUFxQkEsQUF1QkksQUFxQnBCLEFBUUEsQ0FwS0osQUF3RkksQUFnQ0EsRUF0SWMsQUFVTyxBQU9SLEFBMENFLENBcUdmLENBcEVtQixDQXZDTixDQWNNLENBS0osQUFhSCxFQXhDaEIsQ0FvRTBCLEFBd0JBLEFBMkJ0QixDQTFEc0IsQUFxQkEsRUFoR2hCLEVBYkssQUFvSVgsQUFNb0IsQ0EzSkssQUFnRDdCLENBV21CLENBTmlCLENBdEJsQixBQXNESSxHQWJPLENBOUQ3QixBQWtGc0IsRUF6QnRCLENBakRrQixFQStGZCxBQXdCQSxDQS9CQSxBQXFCQSxFQTZCQSxDQWhHZ0IsQ0E1QkEsSUFzREQsR0FuRUgsQ0FsQk0sQUE0RnRCLE1BcEJ1QixDQVpILENBNUJOLENBcUJJLEVBaUNsQixLQWxEdUIsRUFuQ0osQUFnQ25CLEtBcUJBLEFBT0EsRUFZQSxPQUlzQixDQTNFRixnQkFDVSxDQTJFaEIsVUFDZCxhQTVEMEIsWUFrQlEsd0JBakNmLGVBQ25CLDJCQWVvQixnQkFDRCxlQUNULE1BQ1YsWUFla0IsY0FDbEIiLCJmaWxlIjoiSDpcXE1lXFxQb3J0Zm9saW9cXGNvbXBvbmVudHNcXFdlbGNvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEljb25TY3JvbGwgZnJvbSBcIi4vSWNvblNjcm9sbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2VsY29tZSgpIHtcclxuXHJcbiAgICBjb25zdCBbc1Bvcywgc2V0c1Bvc10gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoZSkgPT4ge1xyXG4gICAgICAgIHZhciBoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxyXG4gICAgICAgICAgICBiID0gZG9jdW1lbnQuYm9keSxcclxuICAgICAgICAgICAgc3QgPSAnc2Nyb2xsVG9wJyxcclxuICAgICAgICAgICAgc2ggPSAnc2Nyb2xsSGVpZ2h0JztcclxuICAgICAgICB2YXIgcGVyY2VudCA9IChoW3N0XSB8fCBiW3N0XSkgLyAoKGhbc2hdIHx8IGJbc2hdKSAtIGguY2xpZW50SGVpZ2h0KSAqIDEwMDtcclxuXHJcbiAgICAgICAgc2V0c1BvcyhwZXJjZW50ICogNDgwIC8gMTAwKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGdvdG9QYWdlID0gKHBhZ2VJZCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBhZ2VJZCk7XHJcbiAgICAgICAgdmFyIGVsbW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFnZUlkKTtcclxuICAgICAgICBlbG1udC5zY3JvbGxJbnRvVmlldyh7IGJsb2NrOiAnc3RhcnQnLCAgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwid2VsY29tZS1wYWdlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2VIb2xkZXJcIiBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwdmhcIiwgd2lkdGg6IFwiMTAwJVwiIH19PjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnNpZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxvZ29cIiBzcmM9e1wiaHR0cHM6Ly9hZmFpdGhyYWYuZ2l0aHViLmlvL215LXBvcnRmb2xpby9hc3NldHMvbG9nby5wbmdcIn0gYWx0PVwiYXNocmFmIGxvZ29cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17Z290b1BhZ2UuYmluZCh0aGlzLCBcIndlbGNvbWUtcGFnZVwiKX0+V2VsY29tZTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17Z290b1BhZ2UuYmluZCh0aGlzLCBcImFib3V0LXBhZ2VcIil9PkFib3V0IG1lPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXtnb3RvUGFnZS5iaW5kKHRoaXMsIFwid29yay1wYWdlXCIpfT5Xb3JrPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXtnb3RvUGFnZS5iaW5kKHRoaXMsIFwiY29udGFjdC1wYWdlXCIpfT5Db250YWN0PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmRpY2F0b3JcIiBzdHlsZT17eyB3aWR0aDogc1BvcyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udFwiPlxyXG4gICAgICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSeKAmW0gPHNwYW4gY2xhc3NOYW1lPVwiYm9sZFwiPkFjaHJhZjwvc3Bhbj4sIGEgPHNwYW4gY2xhc3NOYW1lPVwiYm9sZFwiPldlYiBEZXNpZ25lcjwvc3Bhbj4gdGhhdCBjb2Rlcy4gaeKAmW0gZGVkaWNhdGVkIHRvIDxzcGFuIGNsYXNzTmFtZT1cImJvbGRcIj5VWDwvc3Bhbj4sIDxzcGFuIGNsYXNzTmFtZT1cImJvbGRcIj5Db2Rpbmc8L3NwYW4+IGFuZCA8c3BhbiBjbGFzc05hbWU9XCJib2xkXCI+VGVjaDwvc3Bhbj4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSSBkb24ndCBqdXN0IGJ1aWxkIHdlYnNpdGVzLCBJIGJ1aWxkIHdlYnNpdGVzIHRoYXQgPHNwYW4gY2xhc3NOYW1lPVwiYm9sZFwiPklNUFJFU1M8L3NwYW4+LlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInlvYlwiIG9uQ2xpY2s9e2dvdG9QYWdlLmJpbmQodGhpcywgXCJjb250YWN0LXBhZ2VcIil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRhY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicG9ydHJhaXRcIiBzcmM9e1wiaHR0cHM6Ly9hZmFpdGhyYWYuZ2l0aHViLmlvL215LXBvcnRmb2xpby9hc3NldHMvbWUucG5nXCJ9IGFsdD1cImFzaHJhZiBwb3J0cmFpdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcm9sbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uU2Nyb2xsIGNvbG9yPVwiI2ZmZlwiIGljb25Db2xvcj1cIiNmN2Y3NDlcIiB0ZXh0PVwiU3RhcnQgc2Nyb2xsaW5nIHRvIHNlZSBtb3JlXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uLnlvYntcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDEwMTAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTRweCA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNwdDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJ1dHRvbi55b2I6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y3Zjc0OTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNmN2Y3NDk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYm9sZHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jb250e1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxMTExMTE7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2YxZjFmMTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubmF2YmFye1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogIzExMTExMTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZjFmMWYxO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5pbnNpZGV7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTB2dztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5sb2dve1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjRweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zY3JvbGx7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDsgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1nYXA6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubGVmdHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZwdDtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDYwdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmRpdmlkZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmMDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucG9ydHJhaXR7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NjBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZmYwMDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm5hdmlnYXRpb24gdWx7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm5hdmlnYXRpb24gdWwgbGl7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5uYXZpZ2F0aW9uIC5pbmRpY2F0b3J7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpe1xyXG4gICAgICAgICAgICAgICAgICAgIC5uYXZiYXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnJpZ2h0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmxlZnR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucG9ydHJhaXR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuZGl2aWRlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpe1xyXG4gICAgICAgICAgICAgICAgICAgIC5uYXZiYXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmxlZnR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucG9ydHJhaXR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnJpZ2h0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuZGl2aWRlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLm5hdmJhcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmxlZnR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgLnBvcnRyYWl0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnJpZ2h0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmRpdmlkZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpe1xyXG4gICAgICAgICAgICAgICAgICAgIC5sZWZ0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuOGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICAgICAgICAgIC5wb3J0cmFpdHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpe1xyXG4gICAgICAgICAgICAgICAgICAgIC5sZWZ0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuNmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLnBvcnRyYWl0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl19 */\n/*@ sourceURL=H:\\\\Me\\\\Portfolio\\\\components\\\\Welcome.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.6da33b9b7caf4dc43f44.hot-update.js.map