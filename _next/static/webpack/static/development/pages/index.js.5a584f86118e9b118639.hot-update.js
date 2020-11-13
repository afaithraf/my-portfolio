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
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/data */ "./utils/data.js");
var _jsxFileName = "U:\\Me\\Portfolio\\components\\Contact.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Contact() {
  var fullUrl = "https://afaithraf.github.io/my-portfolio/";
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (router.query['message'] === "sent") {
      alert("I've received your message, and I will reply as soon as possible.");
    }
  }, []);
  var links = Object(_utils_data__WEBPACK_IMPORTED_MODULE_3__["getData"])("links");
  return __jsx("div", {
    id: "contactP",
    className: "jsx-1534804383" + " " + "cont",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-1534804383",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "Get in Touch"), __jsx("div", {
    className: "jsx-1534804383" + " " + "links",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, links.map(function (object, i) {
    return __jsx("a", {
      href: object.link,
      target: "_blank",
      key: i,
      className: "jsx-1534804383",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 28
      }
    }, object.name);
  })), __jsx("h2", {
    className: "jsx-1534804383",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, "Or"), __jsx("div", {
    className: "jsx-1534804383" + " " + "box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-1534804383" + " " + "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-1534804383" + " " + "overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "jsx-1534804383" + " " + "part",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 25
    }
  }, __jsx("h4", {
    className: "jsx-1534804383",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 29
    }
  }, "Address"), __jsx("span", {
    className: "jsx-1534804383",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 29
    }
  }, "Bd Sidi Maafa,", __jsx("br", {
    className: "jsx-1534804383",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 49
    }
  }), " Oujda, 60000", __jsx("br", {
    className: "jsx-1534804383",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 68
    }
  }), "Morocco")), __jsx("div", {
    className: "jsx-1534804383" + " " + "part",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 25
    }
  }, __jsx("h4", {
    className: "jsx-1534804383",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 29
    }
  }, "Email"), __jsx("span", {
    className: "jsx-1534804383",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 29
    }
  }, "aworkraf@gmail.com"), __jsx("br", {
    className: "jsx-1534804383",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 60
    }
  })), __jsx("div", {
    className: "jsx-1534804383" + " " + "part",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 25
    }
  }, __jsx("h4", {
    className: "jsx-1534804383",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 29
    }
  }, "Phone/WhatsApp"), __jsx("span", {
    className: "jsx-1534804383",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 29
    }
  }, "+212634-516342")))), __jsx("div", {
    className: "jsx-1534804383" + " " + "right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "jsx-1534804383",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, "Send Me A Message"), __jsx("form", {
    action: "https://mailthis.to/ashraf",
    method: "POST",
    encType: "multipart/form-data",
    className: "jsx-1534804383",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "text",
    name: "name",
    placeholder: "Your name",
    className: "jsx-1534804383",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 25
    }
  }), __jsx("input", {
    type: "email",
    name: "_replyto",
    placeholder: "Your email",
    className: "jsx-1534804383",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 25
    }
  }), __jsx("textarea", {
    name: "message",
    placeholder: "Enter your message here",
    className: "jsx-1534804383",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 25
    }
  }), __jsx("label", {
    style: {
      "float": "left",
      margin: "0 52px"
    },
    className: "jsx-1534804383",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 25
    }
  }, "Attachments (optional)"), __jsx("input", {
    type: "file",
    name: "file",
    placeholder: "Attachments (optional)",
    className: "jsx-1534804383",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 25
    }
  }), __jsx("input", {
    type: "hidden",
    name: "_subject",
    value: "Contact form submitted at " + fullUrl,
    className: "jsx-1534804383",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  }), __jsx("input", {
    type: "hidden",
    name: "_after",
    value: fullUrl + "?message=sent",
    className: "jsx-1534804383",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }), __jsx("input", {
    type: "hidden",
    name: "_honeypot",
    value: "",
    className: "jsx-1534804383",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 25
    }
  }), __jsx("input", {
    type: "hidden",
    name: "_confirmation",
    value: "I've received your message, and I will reply as soon as possible.",
    className: "jsx-1534804383",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }
  }), __jsx("button", {
    type: "submit",
    className: "jsx-1534804383",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 25
    }
  }, "Send")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1534804383",
    __self: this
  }, ".cont.jsx-1534804383{width:100%;position:relative;background:#111111b3;-webkit-backdrop-filter:blur(25px);backdrop-filter:blur(25px);text-align:center;color:#ffffff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:20px 0;}.box.jsx-1534804383{min-height:80vh;width:90vw;max-width:1000px;background:#fff;margin:30px auto;display:grid;grid-template-rows:100%;grid-template-columns:50% 50%;}@media (max-width:900px){.box.jsx-1534804383{grid-template-columns:100%;grid-template-rows:50% 50%;height:1111px;}.box.jsx-1534804383 .left.jsx-1534804383 .overlay.jsx-1534804383{text-align:center;}}.box.jsx-1534804383 .left.jsx-1534804383{background:url(\"https://afaithraf.github.io/my-portfolio//assets/cbg.jpg\");background-size:cover;padding:0;}.overlay.jsx-1534804383{background:#00000090;height:100%;width:100%;padding:0;margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;text-align:left;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.left.jsx-1534804383 h4.jsx-1534804383{color:#fff;margin-top:0;font-size:1.2em;}.links.jsx-1534804383 a.jsx-1534804383{color:#fff;}.part.jsx-1534804383{margin:30px 80px;color:#e1e1e1;}.right.jsx-1534804383{color:#010101;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}.right.jsx-1534804383 input.jsx-1534804383{height:40px;width:80%;margin:10px;padding:10px;}.right.jsx-1534804383 textarea.jsx-1534804383{min-width:80%;max-width:80%;height:200px;margin:10px;padding:10px;}.right.jsx-1534804383 button.jsx-1534804383{background:#ffff00;border:0;color:#010101;padding:10px 20px;float:right;margin:10px 40px;font-size:1em;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlU6XFxNZVxcUG9ydGZvbGlvXFxjb21wb25lbnRzXFxDb250YWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStEd0IsQUFHNEIsQUFZSyxBQVdlLEFBS1QsQUFJcUQsQUFLdEQsQUFXVixBQUtBLEFBR00sQUFJSCxBQVNGLEFBTUUsQUFPSyxXQWpGRCxBQWdETCxBQUtqQixDQWdCYyxFQVRHLEFBZUMsRUEvREgsQ0E0Q0csQ0E1QmQsQ0FzRFMsRUE3Q0csQ0FpQ0EsRUFyQkksR0FwQ0MsQUFVYyxDQXFEbEIsQUFPQyxDQWxGTyxFQXdEekIsRUFuQmUsQ0FpQ0UsTUFyQmpCLENBMkJnQixDQU9NLEVBdEVGLEFBeUJOLEdBaUNkLEdBdEU4QixHQTRFYixDQXRESyxBQWdCVCxNQXpCUSxBQXNFTCxHQTVDQyxHQXNDakIsRUF0REksSUE2RGlCLEdBdERLLEVBaEJULFdBNkNTLENBMEJSLENBdEVVLE9BZ0JkLE1BdURLLElBdERuQixLQS9CcUIsRUFlYSxJQXVFbEMsWUFyRmlCLE9Bc0NTLE9BckNWLEFBY2hCLHNCQTJDZ0IsWUFDaUIscUNBcEJiLEdBckNLLGFBc0NFLGlFQXJDRCxLQXlEMUIsNkJBbkJBLGlFQXJDa0IsZUFDbEIiLCJmaWxlIjoiVTpcXE1lXFxQb3J0Zm9saW9cXGNvbXBvbmVudHNcXENvbnRhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gJy4uL3V0aWxzL2RhdGEnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3QoKSB7XHJcbiAgICAgICBsZXQgZnVsbFVybCA9IFwiaHR0cHM6Ly9hZmFpdGhyYWYuZ2l0aHViLmlvL215LXBvcnRmb2xpby9cIjtcclxuICAgICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICBpZihyb3V0ZXIucXVlcnlbJ21lc3NhZ2UnXSA9PT0gXCJzZW50XCIpe1xyXG4gICAgICAgICAgICAgICBhbGVydChcIkkndmUgcmVjZWl2ZWQgeW91ciBtZXNzYWdlLCBhbmQgSSB3aWxsIHJlcGx5IGFzIHNvb24gYXMgcG9zc2libGUuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgW10pXHJcblxyXG4gICAgICAgIGNvbnN0IGxpbmtzID0gZ2V0RGF0YShcImxpbmtzXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udFwiIGlkPVwiY29udGFjdFBcIj5cclxuXHJcbiAgICAgICAgICAgIDxoMj5HZXQgaW4gVG91Y2g8L2gyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtzXCI+XHJcbiAgICAgICAgICAgICAgICB7bGlua3MubWFwKGZ1bmN0aW9uKG9iamVjdCwgaSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxhIGhyZWY9e29iamVjdC5saW5rfSB0YXJnZXQ9XCJfYmxhbmtcIiBrZXk9e2l9PntvYmplY3QubmFtZX08L2E+O1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDI+T3I8L2gyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkFkZHJlc3M8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QmQgU2lkaSBNYWFmYSw8YnIgLz4gT3VqZGEsIDYwMDAwPGJyIC8+TW9yb2Njbzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkVtYWlsPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPmF3b3JrcmFmQGdtYWlsLmNvbTwvc3Bhbj48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlBob25lL1doYXRzQXBwPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPisyMTI2MzQtNTE2MzQyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5TZW5kIE1lIEEgTWVzc2FnZTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiaHR0cHM6Ly9tYWlsdGhpcy50by9hc2hyYWZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q9XCJQT1NUXCIgZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIiA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJfcmVwbHl0b1wiIHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwibWVzc2FnZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBtZXNzYWdlIGhlcmVcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCIsIG1hcmdpbjogXCIwIDUycHhcIn19PkF0dGFjaG1lbnRzIChvcHRpb25hbCk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiZmlsZVwiIHBsYWNlaG9sZGVyPVwiQXR0YWNobWVudHMgKG9wdGlvbmFsKVwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfc3ViamVjdFwiIHZhbHVlPXtcIkNvbnRhY3QgZm9ybSBzdWJtaXR0ZWQgYXQgXCIrZnVsbFVybCB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIl9hZnRlclwiIHZhbHVlPXtmdWxsVXJsKyBcIj9tZXNzYWdlPXNlbnRcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiX2hvbmV5cG90XCIgdmFsdWU9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfY29uZmlybWF0aW9uXCIgdmFsdWU9XCJJJ3ZlIHJlY2VpdmVkIHlvdXIgbWVzc2FnZSwgYW5kIEkgd2lsbCByZXBseSBhcyBzb29uIGFzIHBvc3NpYmxlLlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiID5TZW5kPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAuY29udCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxMTExMTFiMztcclxuICAgICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDI1cHgpO1xyXG4gICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ib3h7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA4MHZoO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwdnc7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDMwcHggYXV0bztcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KXtcclxuICAgICAgICAgICAgICAgIC5ib3h7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTAlIDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDExMTFweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5ib3ggLmxlZnQgLm92ZXJsYXl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ib3ggLmxlZnR7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL2FmYWl0aHJhZi5naXRodWIuaW8vbXktcG9ydGZvbGlvLy9hc3NldHMvY2JnLmpwZ1wiKTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vdmVybGF5e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDAwMDkwO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxlZnQgaDR7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5saW5rcyBhe1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnBhcnR7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDMwcHggODBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZTFlMWUxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5yaWdodHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDEwMTAxO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucmlnaHQgaDJ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnJpZ2h0IGlucHV0e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnJpZ2h0IHRleHRhcmVhe1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5yaWdodCBidXR0b257XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZjAwO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMTAxMDE7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggNDBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXX0= */\n/*@ sourceURL=U:\\\\Me\\\\Portfolio\\\\components\\\\Contact.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.5a584f86118e9b118639.hot-update.js.map