webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Contact.js":
/*!*******************************!*\
  !*** ./components/Contact.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contact; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "U:\\Me\\Portfolio\\components\\Contact.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Contact(req) {
  if (req) {
    // Server side rendering
    console.log(req.headers); //    fullUrl = req.protocol + '://' + req.headers.host + req.originalUrl
  } else {
    // Client side rendering
    fullUrl = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
  }

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (router.query.message) {
      alert("I've received your message, and I will reply as soon as possible.");
    }
  }, []);
  return __jsx("div", {
    id: "contactP",
    className: "jsx-2276677646" + " " + "cont",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-2276677646",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, "Get in Touch"), __jsx("div", {
    className: "jsx-2276677646" + " " + "box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-2276677646" + " " + "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-2276677646" + " " + "overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "jsx-2276677646" + " " + "part",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  }, __jsx("h4", {
    className: "jsx-2276677646",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 29
    }
  }, "Address"), __jsx("span", {
    className: "jsx-2276677646",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 29
    }
  }, "Bd Sidi Maafa,", __jsx("br", {
    className: "jsx-2276677646",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 49
    }
  }), " Oujda, 60000", __jsx("br", {
    className: "jsx-2276677646",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 68
    }
  }), "Morocco")), __jsx("div", {
    className: "jsx-2276677646" + " " + "part",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  }, __jsx("h4", {
    className: "jsx-2276677646",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 29
    }
  }, "Email"), __jsx("span", {
    className: "jsx-2276677646",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 29
    }
  }, "aworkraf@gmail.com"), __jsx("br", {
    className: "jsx-2276677646",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 60
    }
  })), __jsx("div", {
    className: "jsx-2276677646" + " " + "part",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 25
    }
  }, __jsx("h4", {
    className: "jsx-2276677646",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 29
    }
  }, "Phone"), __jsx("span", {
    className: "jsx-2276677646",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 29
    }
  }, "+212634-516342")), __jsx("div", {
    className: "jsx-2276677646" + " " + "part",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  }, __jsx("h4", {
    className: "jsx-2276677646",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 29
    }
  }, "Whatsapp"), __jsx("span", {
    className: "jsx-2276677646",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 29
    }
  }, "+212682-341564")))), __jsx("div", {
    className: "jsx-2276677646" + " " + "right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "jsx-2276677646",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, "Send Me A Message"), __jsx("form", {
    action: "https://mailthis.to/ashraf",
    method: "POST",
    encType: "multipart/form-data",
    className: "jsx-2276677646",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "text",
    name: "name",
    placeholder: "Your name",
    className: "jsx-2276677646",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 25
    }
  }), __jsx("input", {
    type: "email",
    name: "_replyto",
    placeholder: "Your email",
    className: "jsx-2276677646",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 25
    }
  }), __jsx("textarea", {
    name: "message",
    placeholder: "Enter your message here",
    className: "jsx-2276677646",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 25
    }
  }), __jsx("label", {
    style: {
      "float": "left",
      margin: "0 52px"
    },
    className: "jsx-2276677646",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  }, "Attachments (optional)"), __jsx("input", {
    type: "file",
    name: "file",
    placeholder: "Attachments (optional)",
    className: "jsx-2276677646",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }), __jsx("input", {
    type: "hidden",
    name: "_subject",
    value: "Contact form submitted at " + fullUrl,
    className: "jsx-2276677646",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }
  }), __jsx("input", {
    type: "hidden",
    name: "_after",
    value: fullUrl + "?message=sent",
    className: "jsx-2276677646",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 25
    }
  }), __jsx("input", {
    type: "hidden",
    name: "_honeypot",
    value: "",
    className: "jsx-2276677646",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 25
    }
  }), __jsx("input", {
    type: "hidden",
    name: "_confirmation",
    value: "I've received your message, and I will reply as soon as possible.",
    className: "jsx-2276677646",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 25
    }
  }), __jsx("button", {
    type: "submit",
    className: "jsx-2276677646",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 25
    }
  }, "Send")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2276677646",
    __self: this
  }, ".cont.jsx-2276677646{width:100%;position:relative;background:#111111b3;-webkit-backdrop-filter:blur(25px);backdrop-filter:blur(25px);text-align:center;color:#ffffff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:20px 0;}.box.jsx-2276677646{min-height:80vh;width:90vw;max-width:1000px;background:#fff;margin:30px auto;display:grid;grid-template-rows:100%;grid-template-columns:50% 50%;}@media (max-width:900px){.box.jsx-2276677646{grid-template-columns:100%;grid-template-rows:50% 50%;height:1111px;}.box.jsx-2276677646 .left.jsx-2276677646 .overlay.jsx-2276677646{text-align:center;}}.box.jsx-2276677646 .left.jsx-2276677646{background:url(\"https://afaithraf.github.io/my-portfolio//assets/cbg.jpg\");background-size:cover;padding:0;}.overlay.jsx-2276677646{background:#00000090;height:100%;width:100%;padding:0;margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;text-align:left;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.left.jsx-2276677646 h4.jsx-2276677646{color:#fff;margin-top:0;font-size:1.2em;}.part.jsx-2276677646{margin:30px 80px;color:#e1e1e1;}.right.jsx-2276677646{color:#010101;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}.right.jsx-2276677646 input.jsx-2276677646{height:40px;width:80%;margin:10px;padding:10px;}.right.jsx-2276677646 textarea.jsx-2276677646{min-width:80%;max-width:80%;height:200px;margin:10px;padding:10px;}.right.jsx-2276677646 button.jsx-2276677646{background:#ffff00;border:0;color:#010101;padding:10px 20px;float:right;margin:10px 40px;font-size:1em;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlU6XFxNZVxcUG9ydGZvbGlvXFxjb21wb25lbnRzXFxDb250YWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtFd0IsQUFHNEIsQUFZSyxBQVdlLEFBS1QsQUFJcUQsQUFLdEQsQUFXVixBQUtNLEFBSUgsQUFTRixBQU1FLEFBT0ssV0E5RUQsQUFnREwsQ0FrQkgsRUFURyxBQWVDLEVBNURILENBeUNHLENBekJkLENBbURTLEVBMUNHLENBOEJBLEVBbEJJLEdBcENDLEFBVWMsQ0FrRGxCLEFBT0MsQ0EvRU8sRUFxRHpCLEVBaEJlLENBOEJFLE1BbEJqQixDQXdCZ0IsQ0FPTSxFQW5FRixBQXlCTixHQThCZCxHQW5FOEIsR0F5RWIsQ0FuREssQUFnQlQsTUF6QlEsQUFtRUwsR0F6Q0MsR0FtQ2pCLEVBbkRJLElBMERpQixHQW5ESyxFQWhCVCxXQTBDUyxDQTBCUixDQW5FVSxPQWdCZCxNQW9ESyxJQW5EbkIsS0EvQnFCLEVBZWEsSUFvRWxDLFlBbEZpQixPQXNDUyxPQXJDVixBQWNoQixzQkF3Q2dCLFlBQ2lCLHFDQWpCYixHQXJDSyxhQXNDRSxpRUFyQ0QsS0FzRDFCLDZCQWhCQSxpRUFyQ2tCLGVBQ2xCIiwiZmlsZSI6IlU6XFxNZVxcUG9ydGZvbGlvXFxjb21wb25lbnRzXFxDb250YWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdChyZXEpIHtcclxuICAgIGlmIChyZXEpIHtcclxuICAgICAgIC8vIFNlcnZlciBzaWRlIHJlbmRlcmluZ1xyXG4gICAgICAgY29uc29sZS5sb2cocmVxLmhlYWRlcnMpXHJcbiAgICAvLyAgICBmdWxsVXJsID0gcmVxLnByb3RvY29sICsgJzovLycgKyByZXEuaGVhZGVycy5ob3N0ICsgcmVxLm9yaWdpbmFsVXJsXHJcbiAgICAgfSBlbHNlIHtcclxuICAgICAgIC8vIENsaWVudCBzaWRlIHJlbmRlcmluZ1xyXG4gICAgICAgZnVsbFVybCA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgKyAod2luZG93LmxvY2F0aW9uLnBvcnQgPyAnOicgKyB3aW5kb3cubG9jYXRpb24ucG9ydDogJycpXHJcbiAgICAgfVxyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihyb3V0ZXIucXVlcnkubWVzc2FnZSl7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiSSd2ZSByZWNlaXZlZCB5b3VyIG1lc3NhZ2UsIGFuZCBJIHdpbGwgcmVwbHkgYXMgc29vbiBhcyBwb3NzaWJsZS5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udFwiIGlkPVwiY29udGFjdFBcIj5cclxuXHJcbiAgICAgICAgICAgIDxoMj5HZXQgaW4gVG91Y2g8L2gyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkFkZHJlc3M8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QmQgU2lkaSBNYWFmYSw8YnIgLz4gT3VqZGEsIDYwMDAwPGJyIC8+TW9yb2Njbzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkVtYWlsPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPmF3b3JrcmFmQGdtYWlsLmNvbTwvc3Bhbj48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlBob25lPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPisyMTI2MzQtNTE2MzQyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+V2hhdHNhcHA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+KzIxMjY4Mi0zNDE1NjQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5TZW5kIE1lIEEgTWVzc2FnZTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiaHR0cHM6Ly9tYWlsdGhpcy50by9hc2hyYWZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q9XCJQT1NUXCIgZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIiA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJfcmVwbHl0b1wiIHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwibWVzc2FnZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBtZXNzYWdlIGhlcmVcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIG1hcmdpbjogXCIwIDUycHhcIn19PkF0dGFjaG1lbnRzIChvcHRpb25hbCk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiZmlsZVwiIHBsYWNlaG9sZGVyPVwiQXR0YWNobWVudHMgKG9wdGlvbmFsKVwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfc3ViamVjdFwiIHZhbHVlPXtcIkNvbnRhY3QgZm9ybSBzdWJtaXR0ZWQgYXQgXCIrZnVsbFVybCB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIl9hZnRlclwiIHZhbHVlPXtmdWxsVXJsKyBcIj9tZXNzYWdlPXNlbnRcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiX2hvbmV5cG90XCIgdmFsdWU9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfY29uZmlybWF0aW9uXCIgdmFsdWU9XCJJJ3ZlIHJlY2VpdmVkIHlvdXIgbWVzc2FnZSwgYW5kIEkgd2lsbCByZXBseSBhcyBzb29uIGFzIHBvc3NpYmxlLlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiID5TZW5kPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAuY29udCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxMTExMTFiMztcclxuICAgICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDI1cHgpO1xyXG4gICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ib3h7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA4MHZoO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwdnc7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDMwcHggYXV0bztcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KXtcclxuICAgICAgICAgICAgICAgIC5ib3h7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTAlIDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDExMTFweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5ib3ggLmxlZnQgLm92ZXJsYXl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ib3ggLmxlZnR7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL2FmYWl0aHJhZi5naXRodWIuaW8vbXktcG9ydGZvbGlvLy9hc3NldHMvY2JnLmpwZ1wiKTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vdmVybGF5e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDAwMDkwO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxlZnQgaDR7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wYXJ0e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAzMHB4IDgwcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2UxZTFlMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucmlnaHR7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAxMDEwMTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnJpZ2h0IGgye1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5yaWdodCBpbnB1dHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5yaWdodCB0ZXh0YXJlYXtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucmlnaHQgYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmYwMDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDEwMTAxO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl19 */\n/*@ sourceURL=U:\\\\Me\\\\Portfolio\\\\components\\\\Contact.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.55ecf436bbca7c2bdc37.hot-update.js.map