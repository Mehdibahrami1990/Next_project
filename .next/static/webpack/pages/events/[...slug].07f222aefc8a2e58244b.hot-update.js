webpackHotUpdate_N_E("pages/events/[...slug]",{

/***/ "./pages/events/[...slug].js":
/*!***********************************!*\
  !*** ./pages/events/[...slug].js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _dummy_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dummy-data */ \"./dummy-data.js\");\n\n\nvar _jsxFileName = \"/media/mehdi/f767b4c4-d6fb-4ce4-ae7e-595e584cf63f/redux/1 - Routing Project/Routing Project/nextproject/Next_project/pages/events/[...slug].js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction FilteredEventsPage() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  var filterData = router.query.slug;\n\n  if (!filterData) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: \"center\",\n      children: \"Loading ...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 12\n    }, this);\n  }\n\n  var filteredYear = filterData[0];\n  var filteredMonth = filterData[1];\n  var numYear = +filteredYear;\n  var numMonth = +filteredMonth;\n\n  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth > 12 || numMonth < 1) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: \"center\",\n      children: \" Invalid Filter. Please adjust iyour values!\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this);\n  }\n\n  var filteredEcvents = Object(_dummy_data__WEBPACK_IMPORTED_MODULE_2__[\"getFilteredEvents\"])({\n    year: numYear,\n    month: numMonth\n  });\n  if (!filteredEcvents || filteredEcvents.length) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Filtered Events Page\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 5\n  }, this);\n}\n\n_s(FilteredEventsPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = FilteredEventsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilteredEventsPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"FilteredEventsPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzL1suLi5zbHVnXS5qcz85ZGRmIl0sIm5hbWVzIjpbIkZpbHRlcmVkRXZlbnRzUGFnZSIsInJvdXRlciIsInVzZVJvdXRlciIsImZpbHRlckRhdGEiLCJxdWVyeSIsInNsdWciLCJmaWx0ZXJlZFllYXIiLCJmaWx0ZXJlZE1vbnRoIiwibnVtWWVhciIsIm51bU1vbnRoIiwiaXNOYU4iLCJmaWx0ZXJlZEVjdmVudHMiLCJnZXRGaWx0ZXJlZEV2ZW50cyIsInllYXIiLCJtb250aCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUNBLFNBQVNBLGtCQUFULEdBQThCO0FBQUE7O0FBQzVCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxVQUFVLEdBQUdGLE1BQU0sQ0FBQ0csS0FBUCxDQUFhQyxJQUFoQzs7QUFFQSxNQUFJLENBQUNGLFVBQUwsRUFBaUI7QUFDZix3QkFBTztBQUFHLGVBQVMsRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUFFRCxNQUFNRyxZQUFZLEdBQUdILFVBQVUsQ0FBQyxDQUFELENBQS9CO0FBQ0EsTUFBTUksYUFBYSxHQUFHSixVQUFVLENBQUMsQ0FBRCxDQUFoQztBQUVBLE1BQU1LLE9BQU8sR0FBRyxDQUFDRixZQUFqQjtBQUNBLE1BQU1HLFFBQVEsR0FBRyxDQUFDRixhQUFsQjs7QUFFQSxNQUNFRyxLQUFLLENBQUNGLE9BQUQsQ0FBTCxJQUNBRSxLQUFLLENBQUNELFFBQUQsQ0FETCxJQUVBRCxPQUFPLEdBQUcsSUFGVixJQUdBQSxPQUFPLEdBQUcsSUFIVixJQUlBQyxRQUFRLEdBQUcsRUFKWCxJQUtBQSxRQUFRLEdBQUcsQ0FOYixFQU9FO0FBQ0Esd0JBQ0U7QUFBRyxlQUFTLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBR0Q7O0FBQ0QsTUFBTUUsZUFBZSxHQUFHQyxxRUFBaUIsQ0FBQztBQUN4Q0MsUUFBSSxFQUFFTCxPQURrQztBQUV4Q00sU0FBSyxFQUFFTDtBQUZpQyxHQUFELENBQXpDO0FBTUYsTUFBRyxDQUFDRSxlQUFELElBQW9CQSxlQUFlLENBQUNJLE1BQXZDLEVBR0Usb0JBQ0U7QUFBQSwyQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztHQXhDUWYsa0I7VUFDUUUscUQ7OztLQURSRixrQjtBQTBDTUEsaUZBQWYiLCJmaWxlIjoiLi9wYWdlcy9ldmVudHMvWy4uLnNsdWddLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGdldEZpbHRlcmVkRXZlbnRzIH0gZnJvbSBcIi4uLy4uL2R1bW15LWRhdGFcIjtcclxuZnVuY3Rpb24gRmlsdGVyZWRFdmVudHNQYWdlKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGZpbHRlckRhdGEgPSByb3V0ZXIucXVlcnkuc2x1ZztcclxuXHJcbiAgaWYgKCFmaWx0ZXJEYXRhKSB7XHJcbiAgICByZXR1cm4gPHAgY2xhc3NOYW1lPVwiY2VudGVyXCI+TG9hZGluZyAuLi48L3A+O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZmlsdGVyZWRZZWFyID0gZmlsdGVyRGF0YVswXTtcclxuICBjb25zdCBmaWx0ZXJlZE1vbnRoID0gZmlsdGVyRGF0YVsxXTtcclxuXHJcbiAgY29uc3QgbnVtWWVhciA9ICtmaWx0ZXJlZFllYXI7XHJcbiAgY29uc3QgbnVtTW9udGggPSArZmlsdGVyZWRNb250aDtcclxuXHJcbiAgaWYgKFxyXG4gICAgaXNOYU4obnVtWWVhcikgfHxcclxuICAgIGlzTmFOKG51bU1vbnRoKSB8fFxyXG4gICAgbnVtWWVhciA+IDIwMzAgfHxcclxuICAgIG51bVllYXIgPCAyMDIxIHx8XHJcbiAgICBudW1Nb250aCA+IDEyIHx8XHJcbiAgICBudW1Nb250aCA8IDFcclxuICApIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cImNlbnRlclwiPiBJbnZhbGlkIEZpbHRlci4gUGxlYXNlIGFkanVzdCBpeW91ciB2YWx1ZXMhPC9wPlxyXG4gICAgKTtcclxuICB9XHJcbiAgY29uc3QgZmlsdGVyZWRFY3ZlbnRzID0gZ2V0RmlsdGVyZWRFdmVudHMoe1xyXG4gICAgeWVhcjogbnVtWWVhcixcclxuICAgIG1vbnRoOiBudW1Nb250aCxcclxuICB9KTtcclxuXHJcblxyXG5pZighZmlsdGVyZWRFY3ZlbnRzIHx8IGZpbHRlcmVkRWN2ZW50cy5sZW5ndGgpXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPkZpbHRlcmVkIEV2ZW50cyBQYWdlPC9oMT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlcmVkRXZlbnRzUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/events/[...slug].js\n");

/***/ })

})