webpackHotUpdate_N_E("pages/index",{

/***/ "./components/events/event-item.js":
/*!*****************************************!*\
  !*** ./components/events/event-item.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _event_item_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-item.module.css */ \"./components/events/event-item.module.css\");\n/* harmony import */ var _event_item_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_event_item_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/button */ \"./components/ui/button.js\");\n/* harmony import */ var _icons_address_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/address-icon */ \"./components/icons/address-icon.js\");\n/* harmony import */ var _icons_date_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/date-icon */ \"./components/icons/date-icon.js\");\n/* harmony import */ var _icons_arrow_right_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/arrow-right-icon */ \"./components/icons/arrow-right-icon.js\");\n\nvar _jsxFileName = \"/media/mehdi/f767b4c4-d6fb-4ce4-ae7e-595e584cf63f/redux/1 - Routing Project/Routing Project/nextproject/Next_project/components/events/event-item.js\";\n\n\n\n\n\n\nfunction EventItem(props) {\n  var title = props.title,\n      image = props.image,\n      date = props.date,\n      location = props.location,\n      id = props.id;\n  var humanReadableDate = new Date(date).toLocaleString(\"en-US\", {\n    day: \"numeric\",\n    month: \"long\",\n    year: \"numeric\"\n  });\n  var formatedAddress = location.replace(\", \", \"\\n\");\n  var exploreLink = \"/events/\".concat(id);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n    className: _event_item_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.item,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: \"/\" + image,\n      alt: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _event_item_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.content,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _event_item_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.summery,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n          children: title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _event_item_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.date,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_icons_date_icon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"time\", {\n            children: humanReadableDate\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _event_item_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.address,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_icons_address_icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"address\", {\n            children: formatedAddress\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _event_item_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.actions,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ui_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          link: exploreLink,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            children: \"Explore Event\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            className: clasess.icon,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_icons_arrow_right_icon__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 36,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, this);\n}\n\n_c = EventItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventItem);\n\nvar _c;\n\n$RefreshReg$(_c, \"EventItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ldmVudHMvZXZlbnQtaXRlbS5qcz85YzZmIl0sIm5hbWVzIjpbIkV2ZW50SXRlbSIsInByb3BzIiwidGl0bGUiLCJpbWFnZSIsImRhdGUiLCJsb2NhdGlvbiIsImlkIiwiaHVtYW5SZWFkYWJsZURhdGUiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJkYXkiLCJtb250aCIsInllYXIiLCJmb3JtYXRlZEFkZHJlc3MiLCJyZXBsYWNlIiwiZXhwbG9yZUxpbmsiLCJjbGFzc2VzIiwiaXRlbSIsImNvbnRlbnQiLCJzdW1tZXJ5IiwiYWRkcmVzcyIsImFjdGlvbnMiLCJjbGFzZXNzIiwiaWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQUEsTUFDaEJDLEtBRGdCLEdBQ3FCRCxLQURyQixDQUNoQkMsS0FEZ0I7QUFBQSxNQUNUQyxLQURTLEdBQ3FCRixLQURyQixDQUNURSxLQURTO0FBQUEsTUFDRkMsSUFERSxHQUNxQkgsS0FEckIsQ0FDRkcsSUFERTtBQUFBLE1BQ0lDLFFBREosR0FDcUJKLEtBRHJCLENBQ0lJLFFBREo7QUFBQSxNQUNjQyxFQURkLEdBQ3FCTCxLQURyQixDQUNjSyxFQURkO0FBRXhCLE1BQU1DLGlCQUFpQixHQUFHLElBQUlDLElBQUosQ0FBU0osSUFBVCxFQUFlSyxjQUFmLENBQThCLE9BQTlCLEVBQXVDO0FBQy9EQyxPQUFHLEVBQUUsU0FEMEQ7QUFFL0RDLFNBQUssRUFBRSxNQUZ3RDtBQUcvREMsUUFBSSxFQUFFO0FBSHlELEdBQXZDLENBQTFCO0FBS0EsTUFBTUMsZUFBZSxHQUFHUixRQUFRLENBQUNTLE9BQVQsQ0FBaUIsSUFBakIsRUFBdUIsSUFBdkIsQ0FBeEI7QUFFQSxNQUFNQyxXQUFXLHFCQUFjVCxFQUFkLENBQWpCO0FBQ0Esc0JBQ0U7QUFBSSxhQUFTLEVBQUVVLDZEQUFPLENBQUNDLElBQXZCO0FBQUEsNEJBQ0U7QUFBSyxTQUFHLEVBQUUsTUFBTWQsS0FBaEI7QUFBdUIsU0FBRyxFQUFFRDtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFLLGVBQVMsRUFBRWMsNkRBQU8sQ0FBQ0UsT0FBeEI7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUVGLDZEQUFPLENBQUNHLE9BQXhCO0FBQUEsZ0NBQ0U7QUFBQSxvQkFBS2pCO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUssbUJBQVMsRUFBRWMsNkRBQU8sQ0FBQ1osSUFBeEI7QUFBQSxrQ0FDRSxxRUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBQSxzQkFBT0c7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQU1FO0FBQUssbUJBQVMsRUFBRVMsNkRBQU8sQ0FBQ0ksT0FBeEI7QUFBQSxrQ0FDRSxxRUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBQSxzQkFBVVA7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVlFO0FBQUssaUJBQVMsRUFBRUcsNkRBQU8sQ0FBQ0ssT0FBeEI7QUFBQSwrQkFDRSxxRUFBQyxrREFBRDtBQUFRLGNBQUksRUFBRU4sV0FBZDtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBR0U7QUFBTSxxQkFBUyxFQUFFTyxPQUFPLENBQUNDLElBQXpCO0FBQUEsbUNBQ0UscUVBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMkJEOztLQXJDUXZCLFM7QUFzQ01BLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ldmVudHMvZXZlbnQtaXRlbS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2V2ZW50LWl0ZW0ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vdWkvYnV0dG9uXCI7XG5pbXBvcnQgQWRkcmVzc0ljb24gZnJvbSBcIi4uL2ljb25zL2FkZHJlc3MtaWNvblwiO1xuaW1wb3J0IERhdGVJY29uIGZyb20gXCIuLi9pY29ucy9kYXRlLWljb25cIjtcbmltcG9ydCBBcnJvd1JpZ2h0SWNvbiBmcm9tIFwiLi4vaWNvbnMvYXJyb3ctcmlnaHQtaWNvblwiO1xuZnVuY3Rpb24gRXZlbnRJdGVtKHByb3BzKSB7XG4gIGNvbnN0IHsgdGl0bGUsIGltYWdlLCBkYXRlLCBsb2NhdGlvbiwgaWQgfSA9IHByb3BzO1xuICBjb25zdCBodW1hblJlYWRhYmxlRGF0ZSA9IG5ldyBEYXRlKGRhdGUpLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwge1xuICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgbW9udGg6IFwibG9uZ1wiLFxuICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICB9KTtcbiAgY29uc3QgZm9ybWF0ZWRBZGRyZXNzID0gbG9jYXRpb24ucmVwbGFjZShcIiwgXCIsIFwiXFxuXCIpO1xuXG4gIGNvbnN0IGV4cGxvcmVMaW5rID0gYC9ldmVudHMvJHtpZH1gO1xuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbX0+XG4gICAgICA8aW1nIHNyYz17XCIvXCIgKyBpbWFnZX0gYWx0PXt0aXRsZX0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdW1tZXJ5fT5cbiAgICAgICAgICA8aDI+e3RpdGxlfTwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGF0ZX0+XG4gICAgICAgICAgICA8RGF0ZUljb24gLz5cbiAgICAgICAgICAgIDx0aW1lPntodW1hblJlYWRhYmxlRGF0ZX08L3RpbWU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWRkcmVzc30+XG4gICAgICAgICAgICA8QWRkcmVzc0ljb24gLz5cbiAgICAgICAgICAgIDxhZGRyZXNzPntmb3JtYXRlZEFkZHJlc3N9PC9hZGRyZXNzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc30+XG4gICAgICAgICAgPEJ1dHRvbiBsaW5rPXtleHBsb3JlTGlua30+XG4gICAgICAgICAgICA8c3Bhbj5FeHBsb3JlIEV2ZW50PC9zcGFuPlxuXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNlc3MuaWNvbn0+XG4gICAgICAgICAgICAgIDxBcnJvd1JpZ2h0SWNvbiAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbGk+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBFdmVudEl0ZW07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/events/event-item.js\n");

/***/ })

})