"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./data/global.ts":
/*!************************!*\
  !*** ./data/global.ts ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   footer: function() { return /* binding */ footer; },\n/* harmony export */   routes: function() { return /* binding */ routes; }\n/* harmony export */ });\nconst routes = [\n    {\n        title: \"Home\",\n        path: \"/\"\n    },\n    // {\n    //   title: \"Blog\",\n    //   path: \"/blog\",\n    // },\n    {\n        title: \"Projects\",\n        path: \"/projects\"\n    },\n    {\n        title: \"Contact\",\n        path: \"/contact\"\n    }\n];\nconst footer = {\n    columns: [\n        {\n            title: \"Pages\",\n            links: [\n                {\n                    name: \"Home\",\n                    link: \"/\",\n                    leavesWebsite: false\n                },\n                // {\n                //   name: \"Blog\",\n                //   link: \"/blog\",\n                //   leavesWebsite: false,\n                // },\n                {\n                    name: \"Projects\",\n                    link: \"/projects\",\n                    leavesWebsite: false\n                },\n                {\n                    name: \"Contact\",\n                    link: \"/contact\",\n                    leavesWebsite: false\n                }\n            ]\n        },\n        {\n            title: \"Social\",\n            links: [\n                {\n                    name: \"GitHub\",\n                    link: \"https://github.com/Matyyn\",\n                    icon: \"https://firebasestorage.googleapis.com/v0/b/mind-care-b5645.appspot.com/o/portfolio%2Fgithub%20icon.png?alt=media&token=2d010d05-1067-44d9-bbc1-2ee21af8f077\",\n                    leavesWebsite: true\n                },\n                {\n                    name: \"LinkedIn\",\n                    link: \"https://www.linkedin.com/in/muhammad-ali-sheikh001/\",\n                    icon: \"https://firebasestorage.googleapis.com/v0/b/mind-care-b5645.appspot.com/o/portfolio%2FlinkedIn%20icon.png?alt=media&token=dc8fb776-3cd0-463c-841d-5df3b28548f0\",\n                    leavesWebsite: true\n                },\n                {\n                    name: \"Email\",\n                    link: \"mailto:matyyn.004@gmail.com\",\n                    icon: \"https://firebasestorage.googleapis.com/v0/b/mind-care-b5645.appspot.com/o/portfolio%2Fmail_icon.png?alt=media&token=e69ee556-23e8-46cb-a4f5-afc5d8196ac5\",\n                    leavesWebsite: true\n                }\n            ]\n        }\n    ],\n    support: {\n        buymeacoffee: \"\",\n        paypal: \"\",\n        message: \"\"\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2RhdGEvZ2xvYmFsLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBd0JPLE1BQU1BLFNBQWtCO0lBQzdCO1FBQ0VDLE9BQU87UUFDUEMsTUFBTTtJQUNSO0lBQ0EsSUFBSTtJQUNKLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsS0FBSztJQUNMO1FBQ0VELE9BQU87UUFDUEMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsT0FBTztRQUNQQyxNQUFNO0lBQ1I7Q0FDRCxDQUFDO0FBRUssTUFBTUMsU0FBaUI7SUFDNUJDLFNBQVM7UUFDUDtZQUNFSCxPQUFPO1lBQ1BJLE9BQU87Z0JBQ0w7b0JBQ0VDLE1BQU07b0JBQ05DLE1BQU07b0JBQ05DLGVBQWU7Z0JBQ2pCO2dCQUNBLElBQUk7Z0JBQ0osa0JBQWtCO2dCQUNsQixtQkFBbUI7Z0JBQ25CLDBCQUEwQjtnQkFDMUIsS0FBSztnQkFDTDtvQkFDRUYsTUFBTTtvQkFDTkMsTUFBTTtvQkFDTkMsZUFBZTtnQkFDakI7Z0JBQ0E7b0JBQ0VGLE1BQU07b0JBQ05DLE1BQU07b0JBQ05DLGVBQWU7Z0JBQ2pCO2FBQ0Q7UUFDSDtRQUNBO1lBQ0VQLE9BQU87WUFDUEksT0FBTztnQkFDTDtvQkFDRUMsTUFBTTtvQkFDTkMsTUFBTTtvQkFDTkUsTUFBTztvQkFDUEQsZUFBZTtnQkFDakI7Z0JBQ0E7b0JBQ0VGLE1BQU07b0JBQ05DLE1BQU07b0JBQ05FLE1BQU87b0JBQ1BELGVBQWU7Z0JBQ2pCO2dCQUNBO29CQUNFRixNQUFNO29CQUNOQyxNQUFNO29CQUNORSxNQUFPO29CQUNQRCxlQUFlO2dCQUNqQjthQUNEO1FBQ0g7S0FDRDtJQUNERSxTQUFTO1FBQ1BDLGNBQWM7UUFDZEMsUUFBUTtRQUNSQyxTQUFTO0lBQ1g7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2RhdGEvZ2xvYmFsLnRzP2ViZjMiXSwic291cmNlc0NvbnRlbnQiOlsidHlwZSBSb3V0ZSA9IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgcGF0aDogc3RyaW5nO1xufTtcblxudHlwZSBGb290ZXJDb2wgPSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGxpbmtzOiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGxpbms6IHN0cmluZztcbiAgICBpY29uPzogc3RyaW5nO1xuICAgIGxlYXZlc1dlYnNpdGU6IGJvb2xlYW47XG4gIH1bXTtcbn07XG5cbnR5cGUgRm9vdGVyID0ge1xuICBjb2x1bW5zOiBGb290ZXJDb2xbXTtcbiAgc3VwcG9ydDoge1xuICAgIGJ1eW1lYWNvZmZlZTogc3RyaW5nO1xuICAgIHBheXBhbDogc3RyaW5nO1xuICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCByb3V0ZXM6IFJvdXRlW10gPSBbXG4gIHtcbiAgICB0aXRsZTogXCJIb21lXCIsXG4gICAgcGF0aDogXCIvXCJcbiAgfSxcbiAgLy8ge1xuICAvLyAgIHRpdGxlOiBcIkJsb2dcIixcbiAgLy8gICBwYXRoOiBcIi9ibG9nXCIsXG4gIC8vIH0sXG4gIHtcbiAgICB0aXRsZTogXCJQcm9qZWN0c1wiLFxuICAgIHBhdGg6IFwiL3Byb2plY3RzXCJcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkNvbnRhY3RcIixcbiAgICBwYXRoOiBcIi9jb250YWN0XCJcbiAgfVxuXTtcblxuZXhwb3J0IGNvbnN0IGZvb3RlcjogRm9vdGVyID0ge1xuICBjb2x1bW5zOiBbXG4gICAge1xuICAgICAgdGl0bGU6IFwiUGFnZXNcIixcbiAgICAgIGxpbmtzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcIkhvbWVcIixcbiAgICAgICAgICBsaW5rOiBcIi9cIixcbiAgICAgICAgICBsZWF2ZXNXZWJzaXRlOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgbmFtZTogXCJCbG9nXCIsXG4gICAgICAgIC8vICAgbGluazogXCIvYmxvZ1wiLFxuICAgICAgICAvLyAgIGxlYXZlc1dlYnNpdGU6IGZhbHNlLFxuICAgICAgICAvLyB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJQcm9qZWN0c1wiLFxuICAgICAgICAgIGxpbms6IFwiL3Byb2plY3RzXCIsXG4gICAgICAgICAgbGVhdmVzV2Vic2l0ZTogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiQ29udGFjdFwiLFxuICAgICAgICAgIGxpbms6IFwiL2NvbnRhY3RcIixcbiAgICAgICAgICBsZWF2ZXNXZWJzaXRlOiBmYWxzZVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJTb2NpYWxcIixcbiAgICAgIGxpbmtzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcIkdpdEh1YlwiLFxuICAgICAgICAgIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL01hdHl5blwiLFxuICAgICAgICAgIGljb246IGBodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL21pbmQtY2FyZS1iNTY0NS5hcHBzcG90LmNvbS9vL3BvcnRmb2xpbyUyRmdpdGh1YiUyMGljb24ucG5nP2FsdD1tZWRpYSZ0b2tlbj0yZDAxMGQwNS0xMDY3LTQ0ZDktYmJjMS0yZWUyMWFmOGYwNzdgLFxuICAgICAgICAgIGxlYXZlc1dlYnNpdGU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiTGlua2VkSW5cIixcbiAgICAgICAgICBsaW5rOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9tdWhhbW1hZC1hbGktc2hlaWtoMDAxL1wiLFxuICAgICAgICAgIGljb246IGBodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL21pbmQtY2FyZS1iNTY0NS5hcHBzcG90LmNvbS9vL3BvcnRmb2xpbyUyRmxpbmtlZEluJTIwaWNvbi5wbmc/YWx0PW1lZGlhJnRva2VuPWRjOGZiNzc2LTNjZDAtNDYzYy04NDFkLTVkZjNiMjg1NDhmMGAsXG4gICAgICAgICAgbGVhdmVzV2Vic2l0ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJFbWFpbFwiLFxuICAgICAgICAgIGxpbms6IFwibWFpbHRvOm1hdHl5bi4wMDRAZ21haWwuY29tXCIsXG4gICAgICAgICAgaWNvbjogYGh0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2IvbWluZC1jYXJlLWI1NjQ1LmFwcHNwb3QuY29tL28vcG9ydGZvbGlvJTJGbWFpbF9pY29uLnBuZz9hbHQ9bWVkaWEmdG9rZW49ZTY5ZWU1NTYtMjNlOC00NmNiLWE0ZjUtYWZjNWQ4MTk2YWM1YCxcbiAgICAgICAgICBsZWF2ZXNXZWJzaXRlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF0sXG4gIHN1cHBvcnQ6IHtcbiAgICBidXltZWFjb2ZmZWU6IFwiXCIsXG4gICAgcGF5cGFsOiBcIlwiLFxuICAgIG1lc3NhZ2U6IFwiXCJcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJ0aXRsZSIsInBhdGgiLCJmb290ZXIiLCJjb2x1bW5zIiwibGlua3MiLCJuYW1lIiwibGluayIsImxlYXZlc1dlYnNpdGUiLCJpY29uIiwic3VwcG9ydCIsImJ1eW1lYWNvZmZlZSIsInBheXBhbCIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./data/global.ts\n"));

/***/ })

});