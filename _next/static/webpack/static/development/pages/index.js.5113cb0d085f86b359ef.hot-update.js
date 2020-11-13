webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ui/WorkCard.js":
/*!***********************************!*\
  !*** ./components/ui/WorkCard.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorkCard; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "U:\\Me\\Portfolio\\components\\ui\\WorkCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function WorkCard(_ref) {
  var data = _ref.data;
  return __jsx("div", {
    className: "jsx-557824743" + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-557824743" + " " + "image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: data.image,
    alt: "website preview",
    className: "jsx-557824743",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "jsx-557824743" + " " + "right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: "jsx-557824743" + " " + "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, data.title), __jsx("p", {
    className: "jsx-557824743" + " " + "desc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, data.description), __jsx("div", {
    className: "jsx-557824743" + " " + "tags",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "jsx-557824743",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, "html5"), __jsx("span", {
    className: "jsx-557824743",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, "Css")), __jsx("div", {
    className: "jsx-557824743" + " " + "links",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, data.link ? __jsx("a", {
    href: data.link,
    target: "_blank",
    className: "jsx-557824743",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, "Preview") : null, data.source ? __jsx("a", {
    href: data.source,
    target: "_blank",
    className: "jsx-557824743",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "jsx-557824743" + " " + "i",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 29
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 256 250",
    preserveAspectRatio: "xMidYMid",
    className: "jsx-557824743",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 33
    }
  }, __jsx("path", {
    d: "M128 0C57.3 0 0 57.3 0 128 0 184.6 36.7 232.5 87.5 249.5 93.9 250.6 96.3 246.7 96.3 243.3 96.3 240.3 96.2 230.2 96.1 219.5 60.5 227.2 53 204.4 53 204.4 47.2 189.6 38.8 185.6 38.8 185.6 27.2 177.7 39.6 177.9 39.6 177.9 52.5 178.8 59.3 191 59.3 191 70.7 210.6 89.2 205 96.5 201.7 97.7 193.4 101 187.8 104.6 184.6 76.2 181.3 46.3 170.4 46.3 121.3 46.3 107.3 51.3 95.9 59.5 87 58.2 83.7 53.8 70.7 60.8 53.1 60.8 53.1 71.5 49.6 96 66.2 106.2 63.4 117.1 61.9 128 61.9 138.9 61.9 149.8 63.4 160.1 66.2 184.5 49.6 195.2 53.1 195.2 53.1 202.2 70.7 197.8 83.7 196.5 87 204.7 95.9 209.7 107.3 209.7 121.3 209.7 170.5 179.7 181.3 151.2 184.5 155.8 188.4 159.9 196.2 159.9 208.2 159.9 225.3 159.7 239.1 159.7 243.3 159.7 246.7 162.1 250.7 168.5 249.4 219.4 232.5 256 184.5 256 128 256 57.3 198.7 0 128 0ZM47.9 182.3C47.7 183 46.7 183.2 45.7 182.7 44.8 182.3 44.3 181.4 44.6 180.8 44.9 180.2 45.9 180 46.8 180.4 47.7 180.8 48.3 181.7 47.9 182.3ZM54.2 188C53.6 188.5 52.4 188.3 51.6 187.4 50.8 186.5 50.6 185.3 51.2 184.7 51.9 184.1 53 184.4 53.9 185.3 54.7 186.2 54.9 187.4 54.2 188ZM58.6 195.1C57.8 195.7 56.5 195.2 55.7 194 54.9 192.9 54.9 191.5 55.7 191 56.5 190.4 57.8 190.9 58.6 192.1 59.4 193.2 59.4 194.6 58.6 195.1ZM65.9 203.5C65.2 204.2 63.7 204 62.6 203 61.5 201.9 61.1 200.5 61.8 199.7 62.6 198.9 64.1 199.2 65.2 200.2 66.3 201.2 66.6 202.7 65.9 203.5ZM75.3 206.3C75 207.3 73.6 207.7 72.1 207.3 70.7 206.9 69.7 205.7 70 204.7 70.3 203.7 71.7 203.2 73.2 203.7 74.7 204.1 75.6 205.3 75.3 206.3ZM86 207.5C86.1 208.5 84.9 209.4 83.3 209.4 81.8 209.5 80.6 208.6 80.5 207.6 80.5 206.5 81.7 205.6 83.3 205.6 84.8 205.6 86 206.4 86 207.5ZM96.6 207.1C96.8 208.1 95.7 209.2 94.2 209.4 92.7 209.7 91.4 209.1 91.2 208.1 91 207 92.1 205.9 93.5 205.7 95.1 205.4 96.4 206 96.6 207.1Z",
    fill: "#fff",
    className: "jsx-557824743",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 126
    }
  }))), "source") : null)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "557824743",
    __self: this
  }, ".container.jsx-557824743{width:96%;max-width:1100px;margin:auto;margin-bottom:100px;background:#eee;border-radius:6px;color:#000;display:grid;grid-template-columns:40% 60%;}@media only screen and (max-width:1000px){.container.jsx-557824743{grid-template-rows:400px auto;grid-template-columns:auto;}}.title.jsx-557824743{font-size:32px;padding:30px;margin:0;}.image.jsx-557824743{max-height:600px;overflow:hidde;}.image.jsx-557824743 img.jsx-557824743{width:100%;max-width:100%;height:100%;object-fit:cover;object-position:50% 0;}.desc.jsx-557824743{font-size:16px;padding:30px;margin:0;line-height:2em;text-align:left;}.tags.jsx-557824743{text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0 30px;}.tags.jsx-557824743 span.jsx-557824743{background:#010101;color:#fff;padding:4px 10px;margin:0 5px;border-radius:4px;font-size:17px;}.links.jsx-557824743{margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:30px 30px;}.links.jsx-557824743 a.jsx-557824743{margin-right:20px;padding:7px 18px;font-size:17px;font-weight:bold;color:#010101;line-height:1.5;border-radius:10px;background:#1a73e8;color:#fff;-webkit-text-decoration:none;text-decoration:none;}.links.jsx-557824743 a.jsx-557824743 .i.jsx-557824743{margin-right:5px;}.links.jsx-557824743 a.jsx-557824743 .i.jsx-557824743 svg.jsx-557824743{height:14px;color:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlU6XFxNZVxcUG9ydGZvbGlvXFxjb21wb25lbnRzXFx1aVxcV29ya0NhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNvQixBQUcyQixBQVl3QixBQUtuQixBQUtFLEFBSU4sQUFPSSxBQU9HLEFBTUMsQUFRUCxBQUtNLEFBWUQsQUFHTCxVQXpFSyxDQTBCRixDQTRCRixBQW9CRixHQXpERSxBQWdCQSxFQVhFLEFBaURuQixDQS9CMkIsQUFtQk4sQ0FiTixJQTZCZixHQWhEZ0IsQ0ExQkEsQ0FpQkgsQUFnQkEsRUF0QnNCLEFBbUNkLEVBeEJyQixHQXFDbUIsRUF6Q25CLEFBZ0JvQixDQVBDLENBMUJHLFFBOENQLEdBYUksR0F6QkQsRUFQTSxFQWhCdEIsRUFWZ0IsQ0E4Q0UsT0FhSixFQXpCbEIsTUFqQ3NCLEVBMEJ0QixDQW9CbUIsR0FhQyxLQVJFLE9BbERQLEFBOENmLElBYXVCLE9BMUROLEFBa0RqQixZQVN1QixDQTFEVyxBQWtDakIsa0JBeUJGLFdBQ1UsQ0EzRHpCLDRDQWtDbUIsS0EwQm5CLFVBekJBIiwiZmlsZSI6IlU6XFxNZVxcUG9ydGZvbGlvXFxjb21wb25lbnRzXFx1aVxcV29ya0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXb3JrQ2FyZCh7ZGF0YX0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEuaW1hZ2V9IGFsdD1cIndlYnNpdGUgcHJldmlld1wiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS50aXRsZX1cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5odG1sNTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Dc3M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua3NcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5saW5rP1xyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2RhdGEubGlua30gdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFByZXZpZXdcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgOm51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEuc291cmNlP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtkYXRhLnNvdXJjZX0gdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNTYgMjUwXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkXCI+PHBhdGggZD1cIk0xMjggMEM1Ny4zIDAgMCA1Ny4zIDAgMTI4IDAgMTg0LjYgMzYuNyAyMzIuNSA4Ny41IDI0OS41IDkzLjkgMjUwLjYgOTYuMyAyNDYuNyA5Ni4zIDI0My4zIDk2LjMgMjQwLjMgOTYuMiAyMzAuMiA5Ni4xIDIxOS41IDYwLjUgMjI3LjIgNTMgMjA0LjQgNTMgMjA0LjQgNDcuMiAxODkuNiAzOC44IDE4NS42IDM4LjggMTg1LjYgMjcuMiAxNzcuNyAzOS42IDE3Ny45IDM5LjYgMTc3LjkgNTIuNSAxNzguOCA1OS4zIDE5MSA1OS4zIDE5MSA3MC43IDIxMC42IDg5LjIgMjA1IDk2LjUgMjAxLjcgOTcuNyAxOTMuNCAxMDEgMTg3LjggMTA0LjYgMTg0LjYgNzYuMiAxODEuMyA0Ni4zIDE3MC40IDQ2LjMgMTIxLjMgNDYuMyAxMDcuMyA1MS4zIDk1LjkgNTkuNSA4NyA1OC4yIDgzLjcgNTMuOCA3MC43IDYwLjggNTMuMSA2MC44IDUzLjEgNzEuNSA0OS42IDk2IDY2LjIgMTA2LjIgNjMuNCAxMTcuMSA2MS45IDEyOCA2MS45IDEzOC45IDYxLjkgMTQ5LjggNjMuNCAxNjAuMSA2Ni4yIDE4NC41IDQ5LjYgMTk1LjIgNTMuMSAxOTUuMiA1My4xIDIwMi4yIDcwLjcgMTk3LjggODMuNyAxOTYuNSA4NyAyMDQuNyA5NS45IDIwOS43IDEwNy4zIDIwOS43IDEyMS4zIDIwOS43IDE3MC41IDE3OS43IDE4MS4zIDE1MS4yIDE4NC41IDE1NS44IDE4OC40IDE1OS45IDE5Ni4yIDE1OS45IDIwOC4yIDE1OS45IDIyNS4zIDE1OS43IDIzOS4xIDE1OS43IDI0My4zIDE1OS43IDI0Ni43IDE2Mi4xIDI1MC43IDE2OC41IDI0OS40IDIxOS40IDIzMi41IDI1NiAxODQuNSAyNTYgMTI4IDI1NiA1Ny4zIDE5OC43IDAgMTI4IDBaTTQ3LjkgMTgyLjNDNDcuNyAxODMgNDYuNyAxODMuMiA0NS43IDE4Mi43IDQ0LjggMTgyLjMgNDQuMyAxODEuNCA0NC42IDE4MC44IDQ0LjkgMTgwLjIgNDUuOSAxODAgNDYuOCAxODAuNCA0Ny43IDE4MC44IDQ4LjMgMTgxLjcgNDcuOSAxODIuM1pNNTQuMiAxODhDNTMuNiAxODguNSA1Mi40IDE4OC4zIDUxLjYgMTg3LjQgNTAuOCAxODYuNSA1MC42IDE4NS4zIDUxLjIgMTg0LjcgNTEuOSAxODQuMSA1MyAxODQuNCA1My45IDE4NS4zIDU0LjcgMTg2LjIgNTQuOSAxODcuNCA1NC4yIDE4OFpNNTguNiAxOTUuMUM1Ny44IDE5NS43IDU2LjUgMTk1LjIgNTUuNyAxOTQgNTQuOSAxOTIuOSA1NC45IDE5MS41IDU1LjcgMTkxIDU2LjUgMTkwLjQgNTcuOCAxOTAuOSA1OC42IDE5Mi4xIDU5LjQgMTkzLjIgNTkuNCAxOTQuNiA1OC42IDE5NS4xWk02NS45IDIwMy41QzY1LjIgMjA0LjIgNjMuNyAyMDQgNjIuNiAyMDMgNjEuNSAyMDEuOSA2MS4xIDIwMC41IDYxLjggMTk5LjcgNjIuNiAxOTguOSA2NC4xIDE5OS4yIDY1LjIgMjAwLjIgNjYuMyAyMDEuMiA2Ni42IDIwMi43IDY1LjkgMjAzLjVaTTc1LjMgMjA2LjNDNzUgMjA3LjMgNzMuNiAyMDcuNyA3Mi4xIDIwNy4zIDcwLjcgMjA2LjkgNjkuNyAyMDUuNyA3MCAyMDQuNyA3MC4zIDIwMy43IDcxLjcgMjAzLjIgNzMuMiAyMDMuNyA3NC43IDIwNC4xIDc1LjYgMjA1LjMgNzUuMyAyMDYuM1pNODYgMjA3LjVDODYuMSAyMDguNSA4NC45IDIwOS40IDgzLjMgMjA5LjQgODEuOCAyMDkuNSA4MC42IDIwOC42IDgwLjUgMjA3LjYgODAuNSAyMDYuNSA4MS43IDIwNS42IDgzLjMgMjA1LjYgODQuOCAyMDUuNiA4NiAyMDYuNCA4NiAyMDcuNVpNOTYuNiAyMDcuMUM5Ni44IDIwOC4xIDk1LjcgMjA5LjIgOTQuMiAyMDkuNCA5Mi43IDIwOS43IDkxLjQgMjA5LjEgOTEuMiAyMDguMSA5MSAyMDcgOTIuMSAyMDUuOSA5My41IDIwNS43IDk1LjEgMjA1LjQgOTYuNCAyMDYgOTYuNiAyMDcuMVpcIiBmaWxsPVwiI2ZmZlwiLz48L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgOm51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2ID5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTYlO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMTAwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwJSA2MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAgICAgICAgICAgICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MDBweCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGl0bGV7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pbWFnZXtcclxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pbWFnZSBpbWd7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiA1MCUgMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGVzY3tcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMmVtO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGFnc3tcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGFncyBzcGFue1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAxMDEwMTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5saW5rc3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxpbmtzIGF7ICAgICAgICBcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDsgICAgXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA3cHggMThweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMTAxMDE7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxYTczZTg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGlua3MgYSAuaSB7ICAgICAgICBcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5saW5rcyBhIC5pIHN2Z3sgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+ICBcclxuICAgICAgICA8L2RpdiA+XHJcbiAgICApXHJcbn1cclxuIl19 */\n/*@ sourceURL=U:\\\\Me\\\\Portfolio\\\\components\\\\ui\\\\WorkCard.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.5113cb0d085f86b359ef.hot-update.js.map