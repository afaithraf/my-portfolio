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
    className: "jsx-2376392493" + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2376392493" + " " + "image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: data.image,
    alt: "website preview",
    className: "jsx-2376392493",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "jsx-2376392493" + " " + "right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: "jsx-2376392493" + " " + "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, data.title), __jsx("p", {
    className: "jsx-2376392493" + " " + "desc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, data.description), __jsx("div", {
    className: "jsx-2376392493" + " " + "tags",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "jsx-2376392493",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, "html5"), __jsx("span", {
    className: "jsx-2376392493",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, "Css")), __jsx("div", {
    className: "jsx-2376392493" + " " + "links",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, data.link ? __jsx("a", {
    href: data.link,
    target: "_blank",
    className: "jsx-2376392493",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, "Preview") : null, data.source ? __jsx("a", {
    href: data.source,
    target: "_blank",
    className: "jsx-2376392493",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "jsx-2376392493" + " " + "i",
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
    className: "jsx-2376392493",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 33
    }
  }, __jsx("path", {
    d: "M128 0C57.3 0 0 57.3 0 128 0 184.6 36.7 232.5 87.5 249.5 93.9 250.6 96.3 246.7 96.3 243.3 96.3 240.3 96.2 230.2 96.1 219.5 60.5 227.2 53 204.4 53 204.4 47.2 189.6 38.8 185.6 38.8 185.6 27.2 177.7 39.6 177.9 39.6 177.9 52.5 178.8 59.3 191 59.3 191 70.7 210.6 89.2 205 96.5 201.7 97.7 193.4 101 187.8 104.6 184.6 76.2 181.3 46.3 170.4 46.3 121.3 46.3 107.3 51.3 95.9 59.5 87 58.2 83.7 53.8 70.7 60.8 53.1 60.8 53.1 71.5 49.6 96 66.2 106.2 63.4 117.1 61.9 128 61.9 138.9 61.9 149.8 63.4 160.1 66.2 184.5 49.6 195.2 53.1 195.2 53.1 202.2 70.7 197.8 83.7 196.5 87 204.7 95.9 209.7 107.3 209.7 121.3 209.7 170.5 179.7 181.3 151.2 184.5 155.8 188.4 159.9 196.2 159.9 208.2 159.9 225.3 159.7 239.1 159.7 243.3 159.7 246.7 162.1 250.7 168.5 249.4 219.4 232.5 256 184.5 256 128 256 57.3 198.7 0 128 0ZM47.9 182.3C47.7 183 46.7 183.2 45.7 182.7 44.8 182.3 44.3 181.4 44.6 180.8 44.9 180.2 45.9 180 46.8 180.4 47.7 180.8 48.3 181.7 47.9 182.3ZM54.2 188C53.6 188.5 52.4 188.3 51.6 187.4 50.8 186.5 50.6 185.3 51.2 184.7 51.9 184.1 53 184.4 53.9 185.3 54.7 186.2 54.9 187.4 54.2 188ZM58.6 195.1C57.8 195.7 56.5 195.2 55.7 194 54.9 192.9 54.9 191.5 55.7 191 56.5 190.4 57.8 190.9 58.6 192.1 59.4 193.2 59.4 194.6 58.6 195.1ZM65.9 203.5C65.2 204.2 63.7 204 62.6 203 61.5 201.9 61.1 200.5 61.8 199.7 62.6 198.9 64.1 199.2 65.2 200.2 66.3 201.2 66.6 202.7 65.9 203.5ZM75.3 206.3C75 207.3 73.6 207.7 72.1 207.3 70.7 206.9 69.7 205.7 70 204.7 70.3 203.7 71.7 203.2 73.2 203.7 74.7 204.1 75.6 205.3 75.3 206.3ZM86 207.5C86.1 208.5 84.9 209.4 83.3 209.4 81.8 209.5 80.6 208.6 80.5 207.6 80.5 206.5 81.7 205.6 83.3 205.6 84.8 205.6 86 206.4 86 207.5ZM96.6 207.1C96.8 208.1 95.7 209.2 94.2 209.4 92.7 209.7 91.4 209.1 91.2 208.1 91 207 92.1 205.9 93.5 205.7 95.1 205.4 96.4 206 96.6 207.1Z",
    fill: "#fff",
    className: "jsx-2376392493",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 126
    }
  }))), "source") : null)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2376392493",
    __self: this
  }, ".container.jsx-2376392493{width:96%;max-width:1100px;margin:auto;margin-bottom:100px;background:#eee;border-radius:6px;color:#000;display:grid;grid-template-columns:40% 60%;}@media only screen and (max-width:1000px){.container.jsx-2376392493{grid-template-rows:400px auto;grid-template-columns:auto;}}.title.jsx-2376392493{font-size:32px;padding:30px;margin:0;}.image.jsx-2376392493 img.jsx-2376392493{width:100%;height:100%;max-height:600px;object-fit:cover;object-position:0 0;border-radius:6px;}.desc.jsx-2376392493{font-size:16px;padding:30px;margin:0;line-height:2em;text-align:left;}.tags.jsx-2376392493{text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0 30px;}.tags.jsx-2376392493 span.jsx-2376392493{background:#010101;color:#fff;padding:4px 10px;margin:0 5px;border-radius:4px;font-size:17px;}.links.jsx-2376392493{margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:30px 30px;}.links.jsx-2376392493 a.jsx-2376392493{margin-right:20px;padding:7px 18px;font-size:17px;font-weight:bold;color:#010101;line-height:1.5;border-radius:10px;background:#1a73e8;color:#fff;-webkit-text-decoration:none;text-decoration:none;}.links.jsx-2376392493 a.jsx-2376392493 .i.jsx-2376392493{margin-right:5px;}.links.jsx-2376392493 a.jsx-2376392493 .i.jsx-2376392493 svg.jsx-2376392493{height:14px;color:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlU6XFxNZVxcUG9ydGZvbGlvXFxjb21wb25lbnRzXFx1aVxcV29ya0NhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNvQixBQUcyQixBQVl3QixBQUtuQixBQUtKLEFBUUksQUFPRyxBQU1DLEFBUVAsQUFLTSxBQVlELEFBR0wsVUF0RUssQ0FzQkwsQ0E2QkMsQUFvQkYsR0F0REUsQUFhQSxFQXNDakIsQ0EvQjJCLEFBbUJOLENBYk4sSUFwQk0sQUFpRHJCLElBdkVnQixDQWlCSCxBQWFBLEVBbkJzQixBQWdDZCxLQWFGLEVBdENuQixBQWFvQixFQTlCSSxDQXNCSCxPQXFCSixHQWFJLEdBekJELElBcEJoQixBQVlvQixFQXRCSixDQTJDRSxPQWFKLEVBekJsQixNQTlCc0IsRUFzQkEsQ0FxQkgsR0FhQyxLQVJFLE9BL0NQLEFBMkNmLEVBckJBLEVBa0N1QixPQXZETixBQStDakIsWUFTdUIsQ0F2RFcsQUErQmpCLGtCQXlCRixXQUNVLENBeER6Qiw0Q0ErQm1CLEtBMEJuQixVQXpCQSIsImZpbGUiOiJVOlxcTWVcXFBvcnRmb2xpb1xcY29tcG9uZW50c1xcdWlcXFdvcmtDYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29ya0NhcmQoe2RhdGF9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLmltYWdlfSBhbHQ9XCJ3ZWJzaXRlIHByZXZpZXdcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEudGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+aHRtbDU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q3NzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEubGluaz9cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtkYXRhLmxpbmt9IHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQcmV2aWV3XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDpudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLnNvdXJjZT9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17ZGF0YS5zb3VyY2V9IHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjU2IDI1MFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZFwiPjxwYXRoIGQ9XCJNMTI4IDBDNTcuMyAwIDAgNTcuMyAwIDEyOCAwIDE4NC42IDM2LjcgMjMyLjUgODcuNSAyNDkuNSA5My45IDI1MC42IDk2LjMgMjQ2LjcgOTYuMyAyNDMuMyA5Ni4zIDI0MC4zIDk2LjIgMjMwLjIgOTYuMSAyMTkuNSA2MC41IDIyNy4yIDUzIDIwNC40IDUzIDIwNC40IDQ3LjIgMTg5LjYgMzguOCAxODUuNiAzOC44IDE4NS42IDI3LjIgMTc3LjcgMzkuNiAxNzcuOSAzOS42IDE3Ny45IDUyLjUgMTc4LjggNTkuMyAxOTEgNTkuMyAxOTEgNzAuNyAyMTAuNiA4OS4yIDIwNSA5Ni41IDIwMS43IDk3LjcgMTkzLjQgMTAxIDE4Ny44IDEwNC42IDE4NC42IDc2LjIgMTgxLjMgNDYuMyAxNzAuNCA0Ni4zIDEyMS4zIDQ2LjMgMTA3LjMgNTEuMyA5NS45IDU5LjUgODcgNTguMiA4My43IDUzLjggNzAuNyA2MC44IDUzLjEgNjAuOCA1My4xIDcxLjUgNDkuNiA5NiA2Ni4yIDEwNi4yIDYzLjQgMTE3LjEgNjEuOSAxMjggNjEuOSAxMzguOSA2MS45IDE0OS44IDYzLjQgMTYwLjEgNjYuMiAxODQuNSA0OS42IDE5NS4yIDUzLjEgMTk1LjIgNTMuMSAyMDIuMiA3MC43IDE5Ny44IDgzLjcgMTk2LjUgODcgMjA0LjcgOTUuOSAyMDkuNyAxMDcuMyAyMDkuNyAxMjEuMyAyMDkuNyAxNzAuNSAxNzkuNyAxODEuMyAxNTEuMiAxODQuNSAxNTUuOCAxODguNCAxNTkuOSAxOTYuMiAxNTkuOSAyMDguMiAxNTkuOSAyMjUuMyAxNTkuNyAyMzkuMSAxNTkuNyAyNDMuMyAxNTkuNyAyNDYuNyAxNjIuMSAyNTAuNyAxNjguNSAyNDkuNCAyMTkuNCAyMzIuNSAyNTYgMTg0LjUgMjU2IDEyOCAyNTYgNTcuMyAxOTguNyAwIDEyOCAwWk00Ny45IDE4Mi4zQzQ3LjcgMTgzIDQ2LjcgMTgzLjIgNDUuNyAxODIuNyA0NC44IDE4Mi4zIDQ0LjMgMTgxLjQgNDQuNiAxODAuOCA0NC45IDE4MC4yIDQ1LjkgMTgwIDQ2LjggMTgwLjQgNDcuNyAxODAuOCA0OC4zIDE4MS43IDQ3LjkgMTgyLjNaTTU0LjIgMTg4QzUzLjYgMTg4LjUgNTIuNCAxODguMyA1MS42IDE4Ny40IDUwLjggMTg2LjUgNTAuNiAxODUuMyA1MS4yIDE4NC43IDUxLjkgMTg0LjEgNTMgMTg0LjQgNTMuOSAxODUuMyA1NC43IDE4Ni4yIDU0LjkgMTg3LjQgNTQuMiAxODhaTTU4LjYgMTk1LjFDNTcuOCAxOTUuNyA1Ni41IDE5NS4yIDU1LjcgMTk0IDU0LjkgMTkyLjkgNTQuOSAxOTEuNSA1NS43IDE5MSA1Ni41IDE5MC40IDU3LjggMTkwLjkgNTguNiAxOTIuMSA1OS40IDE5My4yIDU5LjQgMTk0LjYgNTguNiAxOTUuMVpNNjUuOSAyMDMuNUM2NS4yIDIwNC4yIDYzLjcgMjA0IDYyLjYgMjAzIDYxLjUgMjAxLjkgNjEuMSAyMDAuNSA2MS44IDE5OS43IDYyLjYgMTk4LjkgNjQuMSAxOTkuMiA2NS4yIDIwMC4yIDY2LjMgMjAxLjIgNjYuNiAyMDIuNyA2NS45IDIwMy41Wk03NS4zIDIwNi4zQzc1IDIwNy4zIDczLjYgMjA3LjcgNzIuMSAyMDcuMyA3MC43IDIwNi45IDY5LjcgMjA1LjcgNzAgMjA0LjcgNzAuMyAyMDMuNyA3MS43IDIwMy4yIDczLjIgMjAzLjcgNzQuNyAyMDQuMSA3NS42IDIwNS4zIDc1LjMgMjA2LjNaTTg2IDIwNy41Qzg2LjEgMjA4LjUgODQuOSAyMDkuNCA4My4zIDIwOS40IDgxLjggMjA5LjUgODAuNiAyMDguNiA4MC41IDIwNy42IDgwLjUgMjA2LjUgODEuNyAyMDUuNiA4My4zIDIwNS42IDg0LjggMjA1LjYgODYgMjA2LjQgODYgMjA3LjVaTTk2LjYgMjA3LjFDOTYuOCAyMDguMSA5NS43IDIwOS4yIDk0LjIgMjA5LjQgOTIuNyAyMDkuNyA5MS40IDIwOS4xIDkxLjIgMjA4LjEgOTEgMjA3IDkyLjEgMjA1LjkgOTMuNSAyMDUuNyA5NS4xIDIwNS40IDk2LjQgMjA2IDk2LjYgMjA3LjFaXCIgZmlsbD1cIiNmZmZcIi8+PC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDpudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDk2JTtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTEwMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MCUgNjAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDAwcHggYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRpdGxle1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaW1hZ2UgaW1ne1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA2MDBweDtcclxuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiAwIDA7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRlc2N7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDJlbTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRhZ3N7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRhZ3Mgc3BhbntcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMTAxMDE7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGlua3N7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMzBweCAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5saW5rcyBheyAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7ICAgIFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogN3B4IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDEwMTAxO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMWE3M2U4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxpbmtzIGEgLmkgeyAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGlua3MgYSAuaSBzdmd7ICAgICAgICBcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPiAgXHJcbiAgICAgICAgPC9kaXYgPlxyXG4gICAgKVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=U:\\\\Me\\\\Portfolio\\\\components\\\\ui\\\\WorkCard.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.974ed407d574e3c1ae3c.hot-update.js.map