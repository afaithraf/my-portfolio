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
    className: "jsx-2183893701" + " " + "cont",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-2183893701",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "Get in Touch"), __jsx("div", {
    className: "jsx-2183893701" + " " + "links",
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
      className: "jsx-2183893701",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 28
      }
    }, object.name);
  })), __jsx("h2", {
    className: "jsx-2183893701",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, "Or"), __jsx("div", {
    className: "jsx-2183893701" + " " + "box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-2183893701" + " " + "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-2183893701" + " " + "overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "jsx-2183893701" + " " + "part",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 25
    }
  }, __jsx("h4", {
    className: "jsx-2183893701",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 29
    }
  }, "Address"), __jsx("span", {
    className: "jsx-2183893701",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 29
    }
  }, "Bd Sidi Maafa,", __jsx("br", {
    className: "jsx-2183893701",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 49
    }
  }), " Oujda, 60000", __jsx("br", {
    className: "jsx-2183893701",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 68
    }
  }), "Morocco")), __jsx("div", {
    className: "jsx-2183893701" + " " + "part",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 25
    }
  }, __jsx("h4", {
    className: "jsx-2183893701",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 29
    }
  }, "Email"), __jsx("span", {
    className: "jsx-2183893701",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 29
    }
  }, "aworkraf@gmail.com"), __jsx("br", {
    className: "jsx-2183893701",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 60
    }
  })), __jsx("div", {
    className: "jsx-2183893701" + " " + "part",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 25
    }
  }, __jsx("h4", {
    className: "jsx-2183893701",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 29
    }
  }, "Phone/WhatsApp"), __jsx("span", {
    className: "jsx-2183893701",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 29
    }
  }, "+212634-516342")))), __jsx("div", {
    className: "jsx-2183893701" + " " + "right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "jsx-2183893701",
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
    className: "jsx-2183893701",
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
    className: "jsx-2183893701",
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
    className: "jsx-2183893701",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 25
    }
  }), __jsx("textarea", {
    name: "message",
    placeholder: "Enter your message here",
    className: "jsx-2183893701",
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
    className: "jsx-2183893701",
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
    className: "jsx-2183893701",
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
    className: "jsx-2183893701",
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
    className: "jsx-2183893701",
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
    className: "jsx-2183893701",
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
    className: "jsx-2183893701",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }
  }), __jsx("button", {
    type: "submit",
    className: "jsx-2183893701",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 25
    }
  }, "Send")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2183893701",
    __self: this
  }, ".cont.jsx-2183893701{width:100%;position:relative;background:#111111b3;-webkit-backdrop-filter:blur(25px);backdrop-filter:blur(25px);text-align:center;color:#ffffff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:20px 0;}.box.jsx-2183893701{min-height:80vh;width:90vw;max-width:1000px;background:#fff;margin:30px auto;display:grid;grid-template-rows:100%;grid-template-columns:50% 50%;}@media (max-width:900px){.box.jsx-2183893701{grid-template-columns:100%;grid-template-rows:50% 50%;height:1111px;}.box.jsx-2183893701 .left.jsx-2183893701 .overlay.jsx-2183893701{text-align:center;}}.box.jsx-2183893701 .left.jsx-2183893701{background:url(\"https://afaithraf.github.io/my-portfolio//assets/cbg.jpg\");background-size:cover;padding:0;}.overlay.jsx-2183893701{background:#00000090;height:100%;width:100%;padding:0;margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;text-align:left;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.left.jsx-2183893701 h4.jsx-2183893701{color:#fff;margin-top:0;font-size:1.2em;}.links.jsx-2183893701 a.jsx-2183893701{color:#fff;-webkit-text-decoration:none;text-decoration:none;margin:auto 20px;}.part.jsx-2183893701{margin:30px 80px;color:#e1e1e1;}.right.jsx-2183893701{color:#010101;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}.right.jsx-2183893701 input.jsx-2183893701{height:40px;width:80%;margin:10px;padding:10px;}.right.jsx-2183893701 textarea.jsx-2183893701{min-width:80%;max-width:80%;height:200px;margin:10px;padding:10px;}.right.jsx-2183893701 button.jsx-2183893701{background:#ffff00;border:0;color:#010101;padding:10px 20px;float:right;margin:10px 40px;font-size:1em;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlU6XFxNZVxcUG9ydGZvbGlvXFxjb21wb25lbnRzXFxDb250YWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStEd0IsQUFHNEIsQUFZSyxBQVdlLEFBS1QsQUFJcUQsQUFLdEQsQUFXVixBQUtBLEFBS00sQUFJSCxBQVNGLEFBTUUsQUFPSyxXQW5GRCxBQWdETCxBQUtRLENBa0JYLEVBVEcsQUFlQyxFQWpFSCxDQThDRyxDQTlCZCxDQXdEUyxFQS9DRyxDQW1DQSxFQXZCSSxHQXBDQyxBQVVjLENBdURsQixBQU9DLENBcEZPLEVBMER6QixFQXJCZSxDQW1DRSxNQXZCakIsQ0E2QmdCLENBT00sRUF4RUYsQUF5Qk4sR0FtQ2QsR0F4RThCLEdBOEViLENBeERLLEFBZ0JULE1BekJRLEFBd0VMLENBakNLLEVBYkosR0F3Q2pCLEVBeERJLElBK0RpQixHQXhESyxFQWhCVCxDQXVDakIsVUFRMEIsQ0EwQlIsQ0F4RVUsT0FnQmQsTUF5REssSUF4RG5CLEtBL0JxQixFQWVhLElBeUVsQyxZQXZGaUIsT0FzQ1MsT0FyQ1YsQUFjaEIsc0JBNkNnQixZQUNpQixxQ0F0QmIsR0FyQ0ssYUFzQ0UsaUVBckNELEtBMkQxQiw2QkFyQkEsaUVBckNrQixlQUNsQiIsImZpbGUiOiJVOlxcTWVcXFBvcnRmb2xpb1xcY29tcG9uZW50c1xcQ29udGFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi4vdXRpbHMvZGF0YSc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdCgpIHtcclxuICAgICAgIGxldCBmdWxsVXJsID0gXCJodHRwczovL2FmYWl0aHJhZi5naXRodWIuaW8vbXktcG9ydGZvbGlvL1wiO1xyXG4gICAgICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgIGlmKHJvdXRlci5xdWVyeVsnbWVzc2FnZSddID09PSBcInNlbnRcIil7XHJcbiAgICAgICAgICAgICAgIGFsZXJ0KFwiSSd2ZSByZWNlaXZlZCB5b3VyIG1lc3NhZ2UsIGFuZCBJIHdpbGwgcmVwbHkgYXMgc29vbiBhcyBwb3NzaWJsZS5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBbXSlcclxuXHJcbiAgICAgICAgY29uc3QgbGlua3MgPSBnZXREYXRhKFwibGlua3NcIik7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250XCIgaWQ9XCJjb250YWN0UFwiPlxyXG5cclxuICAgICAgICAgICAgPGgyPkdldCBpbiBUb3VjaDwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua3NcIj5cclxuICAgICAgICAgICAgICAgIHtsaW5rcy5tYXAoZnVuY3Rpb24ob2JqZWN0LCBpKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGEgaHJlZj17b2JqZWN0Lmxpbmt9IHRhcmdldD1cIl9ibGFua1wiIGtleT17aX0+e29iamVjdC5uYW1lfTwvYT47XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxoMj5PcjwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+QWRkcmVzczwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5CZCBTaWRpIE1hYWZhLDxiciAvPiBPdWpkYSwgNjAwMDA8YnIgLz5Nb3JvY2NvPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+RW1haWw8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+YXdvcmtyYWZAZ21haWwuY29tPC9zcGFuPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+UGhvbmUvV2hhdHNBcHA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+KzIxMjYzNC01MTYzNDI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPlNlbmQgTWUgQSBNZXNzYWdlPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJodHRwczovL21haWx0aGlzLnRvL2FzaHJhZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZD1cIlBPU1RcIiBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cIl9yZXBseXRvXCIgcGxhY2Vob2xkZXI9XCJZb3VyIGVtYWlsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJtZXNzYWdlXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG1lc3NhZ2UgaGVyZVwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17e2Zsb2F0OiBcImxlZnRcIiwgbWFyZ2luOiBcIjAgNTJweFwifX0+QXR0YWNobWVudHMgKG9wdGlvbmFsKTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJmaWxlXCIgcGxhY2Vob2xkZXI9XCJBdHRhY2htZW50cyAob3B0aW9uYWwpXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIl9zdWJqZWN0XCIgdmFsdWU9e1wiQ29udGFjdCBmb3JtIHN1Ym1pdHRlZCBhdCBcIitmdWxsVXJsIH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiX2FmdGVyXCIgdmFsdWU9e2Z1bGxVcmwrIFwiP21lc3NhZ2U9c2VudFwifSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfaG9uZXlwb3RcIiB2YWx1ZT1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIl9jb25maXJtYXRpb25cIiB2YWx1ZT1cIkkndmUgcmVjZWl2ZWQgeW91ciBtZXNzYWdlLCBhbmQgSSB3aWxsIHJlcGx5IGFzIHNvb24gYXMgcG9zc2libGUuXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgPlNlbmQ8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIC5jb250IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzExMTExMWIzO1xyXG4gICAgICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjVweCk7XHJcbiAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJveHtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDgwdmg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTB2dztcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMzBweCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwJTtcclxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpe1xyXG4gICAgICAgICAgICAgICAgLmJveHtcclxuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MCUgNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTExMXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmJveCAubGVmdCAub3ZlcmxheXtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJveCAubGVmdHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vYWZhaXRocmFmLmdpdGh1Yi5pby9teS1wb3J0Zm9saW8vL2Fzc2V0cy9jYmcuanBnXCIpO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm92ZXJsYXl7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwOTA7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGVmdCBoNHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxpbmtzIGF7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0byAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wYXJ0e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAzMHB4IDgwcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2UxZTFlMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucmlnaHR7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAxMDEwMTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnJpZ2h0IGgye1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5yaWdodCBpbnB1dHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5yaWdodCB0ZXh0YXJlYXtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucmlnaHQgYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmYwMDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDEwMTAxO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl19 */\n/*@ sourceURL=U:\\\\Me\\\\Portfolio\\\\components\\\\Contact.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.ff1b695e0b1ea630bbbd.hot-update.js.map