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
    className: "jsx-1490549957" + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1490549957" + " " + "image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: data.image,
    alt: "website preview",
    className: "jsx-1490549957",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "jsx-1490549957" + " " + "right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: "jsx-1490549957" + " " + "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, data.title), __jsx("p", {
    className: "jsx-1490549957" + " " + "desc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, data.description), __jsx("div", {
    className: "jsx-1490549957" + " " + "tags",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "jsx-1490549957",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, "html5"), __jsx("span", {
    className: "jsx-1490549957",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, "Css")), __jsx("div", {
    className: "jsx-1490549957" + " " + "links",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, data.link ? __jsx("a", {
    href: data.link,
    target: "_blank",
    className: "jsx-1490549957",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, "Preview") : null, data.source ? __jsx("a", {
    href: data.source,
    target: "_blank",
    className: "jsx-1490549957",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "jsx-1490549957" + " " + "i",
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
    className: "jsx-1490549957",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 33
    }
  }, __jsx("path", {
    d: "M128 0C57.3 0 0 57.3 0 128 0 184.6 36.7 232.5 87.5 249.5 93.9 250.6 96.3 246.7 96.3 243.3 96.3 240.3 96.2 230.2 96.1 219.5 60.5 227.2 53 204.4 53 204.4 47.2 189.6 38.8 185.6 38.8 185.6 27.2 177.7 39.6 177.9 39.6 177.9 52.5 178.8 59.3 191 59.3 191 70.7 210.6 89.2 205 96.5 201.7 97.7 193.4 101 187.8 104.6 184.6 76.2 181.3 46.3 170.4 46.3 121.3 46.3 107.3 51.3 95.9 59.5 87 58.2 83.7 53.8 70.7 60.8 53.1 60.8 53.1 71.5 49.6 96 66.2 106.2 63.4 117.1 61.9 128 61.9 138.9 61.9 149.8 63.4 160.1 66.2 184.5 49.6 195.2 53.1 195.2 53.1 202.2 70.7 197.8 83.7 196.5 87 204.7 95.9 209.7 107.3 209.7 121.3 209.7 170.5 179.7 181.3 151.2 184.5 155.8 188.4 159.9 196.2 159.9 208.2 159.9 225.3 159.7 239.1 159.7 243.3 159.7 246.7 162.1 250.7 168.5 249.4 219.4 232.5 256 184.5 256 128 256 57.3 198.7 0 128 0ZM47.9 182.3C47.7 183 46.7 183.2 45.7 182.7 44.8 182.3 44.3 181.4 44.6 180.8 44.9 180.2 45.9 180 46.8 180.4 47.7 180.8 48.3 181.7 47.9 182.3ZM54.2 188C53.6 188.5 52.4 188.3 51.6 187.4 50.8 186.5 50.6 185.3 51.2 184.7 51.9 184.1 53 184.4 53.9 185.3 54.7 186.2 54.9 187.4 54.2 188ZM58.6 195.1C57.8 195.7 56.5 195.2 55.7 194 54.9 192.9 54.9 191.5 55.7 191 56.5 190.4 57.8 190.9 58.6 192.1 59.4 193.2 59.4 194.6 58.6 195.1ZM65.9 203.5C65.2 204.2 63.7 204 62.6 203 61.5 201.9 61.1 200.5 61.8 199.7 62.6 198.9 64.1 199.2 65.2 200.2 66.3 201.2 66.6 202.7 65.9 203.5ZM75.3 206.3C75 207.3 73.6 207.7 72.1 207.3 70.7 206.9 69.7 205.7 70 204.7 70.3 203.7 71.7 203.2 73.2 203.7 74.7 204.1 75.6 205.3 75.3 206.3ZM86 207.5C86.1 208.5 84.9 209.4 83.3 209.4 81.8 209.5 80.6 208.6 80.5 207.6 80.5 206.5 81.7 205.6 83.3 205.6 84.8 205.6 86 206.4 86 207.5ZM96.6 207.1C96.8 208.1 95.7 209.2 94.2 209.4 92.7 209.7 91.4 209.1 91.2 208.1 91 207 92.1 205.9 93.5 205.7 95.1 205.4 96.4 206 96.6 207.1Z",
    fill: "#fff",
    className: "jsx-1490549957",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 126
    }
  }))), "source") : null)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1490549957",
    __self: this
  }, ".container.jsx-1490549957{width:96%;max-width:1100px;margin:auto;margin-bottom:100px;background:#eee;border-radius:6px;color:#000;display:grid;grid-template-columns:40% 60%;}@media only screen and (max-width:1000px){.container.jsx-1490549957{grid-template-rows:400px auto;grid-template-columns:auto;}}.title.jsx-1490549957{font-size:32px;padding:30px;margin:0;}.image.jsx-1490549957{max-height:600px;}.image.jsx-1490549957 img.jsx-1490549957{width:100%;max-width:100%;height:100%;object-fit:cover;object-position:50% 0;}.desc.jsx-1490549957{font-size:16px;padding:30px;margin:0;line-height:2em;text-align:left;}.tags.jsx-1490549957{text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0 30px;}.tags.jsx-1490549957 span.jsx-1490549957{background:#010101;color:#fff;padding:4px 10px;margin:0 5px;border-radius:4px;font-size:17px;}.links.jsx-1490549957{margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:30px 30px;}.links.jsx-1490549957 a.jsx-1490549957{margin-right:20px;padding:7px 18px;font-size:17px;font-weight:bold;color:#010101;line-height:1.5;border-radius:10px;background:#1a73e8;color:#fff;-webkit-text-decoration:none;text-decoration:none;}.links.jsx-1490549957 a.jsx-1490549957 .i.jsx-1490549957{margin-right:5px;}.links.jsx-1490549957 a.jsx-1490549957 .i.jsx-1490549957 svg.jsx-1490549957{height:14px;color:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlU6XFxNZVxcUG9ydGZvbGlvXFxjb21wb25lbnRzXFx1aVxcV29ya0NhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNvQixBQUcyQixBQVl3QixBQUtuQixBQUtFLEFBR04sQUFPSSxBQU9HLEFBTUMsQUFRUCxBQUtNLEFBWUQsQUFHTCxVQXhFSyxDQXlCRixDQTRCRixBQW9CRixHQXhERSxBQWVBLEVBVmpCLEFBZ0RBLENBL0IyQixBQW1CTixDQWJOLElBNkJmLEdBaERnQixDQXpCQSxDQWlCSCxBQWVBLEVBckJzQixBQWtDZCxLQWFGLEVBeENuQixBQWVvQixDQVBDLENBekJHLFFBNkNQLEdBYUksR0F6QkQsRUFQTSxFQWZ0QixFQVZnQixDQTZDRSxPQWFKLEVBekJsQixNQWhDc0IsRUF5QnRCLENBb0JtQixHQWFDLEtBUkUsT0FqRFAsQUE2Q2YsSUFhdUIsT0F6RE4sQUFpRGpCLFlBU3VCLENBekRXLEFBaUNqQixrQkF5QkYsV0FDVSxDQTFEekIsNENBaUNtQixLQTBCbkIsVUF6QkEiLCJmaWxlIjoiVTpcXE1lXFxQb3J0Zm9saW9cXGNvbXBvbmVudHNcXHVpXFxXb3JrQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdvcmtDYXJkKHtkYXRhfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5pbWFnZX0gYWx0PVwid2Vic2l0ZSBwcmV2aWV3XCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPmh0bWw1PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkNzczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLmxpbms/XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17ZGF0YS5saW5rfSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUHJldmlld1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA6bnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5zb3VyY2U/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2RhdGEuc291cmNlfSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI1NiAyNTBcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWRcIj48cGF0aCBkPVwiTTEyOCAwQzU3LjMgMCAwIDU3LjMgMCAxMjggMCAxODQuNiAzNi43IDIzMi41IDg3LjUgMjQ5LjUgOTMuOSAyNTAuNiA5Ni4zIDI0Ni43IDk2LjMgMjQzLjMgOTYuMyAyNDAuMyA5Ni4yIDIzMC4yIDk2LjEgMjE5LjUgNjAuNSAyMjcuMiA1MyAyMDQuNCA1MyAyMDQuNCA0Ny4yIDE4OS42IDM4LjggMTg1LjYgMzguOCAxODUuNiAyNy4yIDE3Ny43IDM5LjYgMTc3LjkgMzkuNiAxNzcuOSA1Mi41IDE3OC44IDU5LjMgMTkxIDU5LjMgMTkxIDcwLjcgMjEwLjYgODkuMiAyMDUgOTYuNSAyMDEuNyA5Ny43IDE5My40IDEwMSAxODcuOCAxMDQuNiAxODQuNiA3Ni4yIDE4MS4zIDQ2LjMgMTcwLjQgNDYuMyAxMjEuMyA0Ni4zIDEwNy4zIDUxLjMgOTUuOSA1OS41IDg3IDU4LjIgODMuNyA1My44IDcwLjcgNjAuOCA1My4xIDYwLjggNTMuMSA3MS41IDQ5LjYgOTYgNjYuMiAxMDYuMiA2My40IDExNy4xIDYxLjkgMTI4IDYxLjkgMTM4LjkgNjEuOSAxNDkuOCA2My40IDE2MC4xIDY2LjIgMTg0LjUgNDkuNiAxOTUuMiA1My4xIDE5NS4yIDUzLjEgMjAyLjIgNzAuNyAxOTcuOCA4My43IDE5Ni41IDg3IDIwNC43IDk1LjkgMjA5LjcgMTA3LjMgMjA5LjcgMTIxLjMgMjA5LjcgMTcwLjUgMTc5LjcgMTgxLjMgMTUxLjIgMTg0LjUgMTU1LjggMTg4LjQgMTU5LjkgMTk2LjIgMTU5LjkgMjA4LjIgMTU5LjkgMjI1LjMgMTU5LjcgMjM5LjEgMTU5LjcgMjQzLjMgMTU5LjcgMjQ2LjcgMTYyLjEgMjUwLjcgMTY4LjUgMjQ5LjQgMjE5LjQgMjMyLjUgMjU2IDE4NC41IDI1NiAxMjggMjU2IDU3LjMgMTk4LjcgMCAxMjggMFpNNDcuOSAxODIuM0M0Ny43IDE4MyA0Ni43IDE4My4yIDQ1LjcgMTgyLjcgNDQuOCAxODIuMyA0NC4zIDE4MS40IDQ0LjYgMTgwLjggNDQuOSAxODAuMiA0NS45IDE4MCA0Ni44IDE4MC40IDQ3LjcgMTgwLjggNDguMyAxODEuNyA0Ny45IDE4Mi4zWk01NC4yIDE4OEM1My42IDE4OC41IDUyLjQgMTg4LjMgNTEuNiAxODcuNCA1MC44IDE4Ni41IDUwLjYgMTg1LjMgNTEuMiAxODQuNyA1MS45IDE4NC4xIDUzIDE4NC40IDUzLjkgMTg1LjMgNTQuNyAxODYuMiA1NC45IDE4Ny40IDU0LjIgMTg4Wk01OC42IDE5NS4xQzU3LjggMTk1LjcgNTYuNSAxOTUuMiA1NS43IDE5NCA1NC45IDE5Mi45IDU0LjkgMTkxLjUgNTUuNyAxOTEgNTYuNSAxOTAuNCA1Ny44IDE5MC45IDU4LjYgMTkyLjEgNTkuNCAxOTMuMiA1OS40IDE5NC42IDU4LjYgMTk1LjFaTTY1LjkgMjAzLjVDNjUuMiAyMDQuMiA2My43IDIwNCA2Mi42IDIwMyA2MS41IDIwMS45IDYxLjEgMjAwLjUgNjEuOCAxOTkuNyA2Mi42IDE5OC45IDY0LjEgMTk5LjIgNjUuMiAyMDAuMiA2Ni4zIDIwMS4yIDY2LjYgMjAyLjcgNjUuOSAyMDMuNVpNNzUuMyAyMDYuM0M3NSAyMDcuMyA3My42IDIwNy43IDcyLjEgMjA3LjMgNzAuNyAyMDYuOSA2OS43IDIwNS43IDcwIDIwNC43IDcwLjMgMjAzLjcgNzEuNyAyMDMuMiA3My4yIDIwMy43IDc0LjcgMjA0LjEgNzUuNiAyMDUuMyA3NS4zIDIwNi4zWk04NiAyMDcuNUM4Ni4xIDIwOC41IDg0LjkgMjA5LjQgODMuMyAyMDkuNCA4MS44IDIwOS41IDgwLjYgMjA4LjYgODAuNSAyMDcuNiA4MC41IDIwNi41IDgxLjcgMjA1LjYgODMuMyAyMDUuNiA4NC44IDIwNS42IDg2IDIwNi40IDg2IDIwNy41Wk05Ni42IDIwNy4xQzk2LjggMjA4LjEgOTUuNyAyMDkuMiA5NC4yIDIwOS40IDkyLjcgMjA5LjcgOTEuNCAyMDkuMSA5MS4yIDIwOC4xIDkxIDIwNyA5Mi4xIDIwNS45IDkzLjUgMjA1LjcgOTUuMSAyMDUuNCA5Ni40IDIwNiA5Ni42IDIwNy4xWlwiIGZpbGw9XCIjZmZmXCIvPjwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA6bnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmNvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5NiU7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDExMDBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAlIDYwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gICAgICAgICAgICAgICAgLmNvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwMHB4IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50aXRsZXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmltYWdle1xyXG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNjAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmltYWdlIGltZ3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QtcG9zaXRpb246IDUwJSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kZXNje1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyZW07XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50YWdze1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50YWdzIHNwYW57XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDEwMTAxO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHggMTBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxpbmtze1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGlua3MgYXsgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4OyAgICBcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDdweCAxOHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAxMDEwMTtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzFhNzNlODtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5saW5rcyBhIC5pIHsgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxpbmtzIGEgLmkgc3ZneyAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT4gIFxyXG4gICAgICAgIDwvZGl2ID5cclxuICAgIClcclxufVxyXG4iXX0= */\n/*@ sourceURL=U:\\\\Me\\\\Portfolio\\\\components\\\\ui\\\\WorkCard.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.bb715985c9e88cdc7f35.hot-update.js.map