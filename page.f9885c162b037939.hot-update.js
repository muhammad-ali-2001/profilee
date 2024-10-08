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

/***/ "(app-pages-browser)/./components/global/MobileNavbar.tsx":
/*!********************************************!*\
  !*** ./components/global/MobileNavbar.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MobileNavbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/data/global */ \"(app-pages-browser)/./data/global.ts\");\n/* eslint-disable @next/next/no-img-element */ /* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction MobileNavbar() {\n    _s();\n    const [isMenuOpen, setIsMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    function toggleMenu() {\n        if (isMenuOpen) {\n            setIsMenuOpen(false);\n            document.body.style.overflow = \"\";\n        } else {\n            setIsMenuOpen(true);\n            document.body.style.overflow = \"hidden\";\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        return function cleanup() {\n            document.body.style.overflow = \"\";\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full justify-between flex items-center \".concat(isMenuOpen && \"bg-bg\", \" p-5\"),\n                style: {\n                    zIndex: 101\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"list-none font-bold text-lg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"font-black text-xl flex items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        alt: \"Ali\",\n                                        className: \"mr-3\",\n                                        src: \"static/logos/logo_no_text.png\",\n                                        width: \"60\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac414/Downloads/portfolio-website-main/components/global/MobileNavbar.tsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 15\n                                    }, this),\n                                    \"Mateen\".split(\"\").map((letter, index)=>{\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"hover:text-fun-pink hover:-mt-2 transition-all duration-500 hover:duration-100 click:goodbyeLetterAnim\",\n                                            children: letter\n                                        }, index, false, {\n                                            fileName: \"/Users/mac414/Downloads/portfolio-website-main/components/global/MobileNavbar.tsx\",\n                                            lineNumber: 47,\n                                            columnNumber: 19\n                                        }, this);\n                                    })\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mac414/Downloads/portfolio-website-main/components/global/MobileNavbar.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/mac414/Downloads/portfolio-website-main/components/global/MobileNavbar.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac414/Downloads/portfolio-website-main/components/global/MobileNavbar.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"burger visible md:hidden\",\n                        \"aria-label\": \"Toggle menu\",\n                        type: \"button\",\n                        onClick: toggleMenu,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuIcon, {\n                                \"data-hide\": isMenuOpen\n                            }, void 0, false, {\n                                fileName: \"/Users/mac414/Downloads/portfolio-website-main/components/global/MobileNavbar.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CrossIcon, {\n                                \"data-hide\": !isMenuOpen\n                            }, void 0, false, {\n                                fileName: \"/Users/mac414/Downloads/portfolio-website-main/components/global/MobileNavbar.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac414/Downloads/portfolio-website-main/components/global/MobileNavbar.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac414/Downloads/portfolio-website-main/components/global/MobileNavbar.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            isMenuOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"menu flex flex-col absolute bg-bg\\n            \".concat(isMenuOpen && \"menuRendered\"),\n                children: _data_global__WEBPACK_IMPORTED_MODULE_3__.routes.map((item, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"border-b border-gray-900 text-gray-100 text-sm font-semibold\",\n                        style: {\n                            transitionDelay: \"\".concat(150 + index * 25, \"ms\")\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: item.path,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"flex w-auto pb-4\",\n                                children: item.title\n                            }, void 0, false, {\n                                fileName: \"/Users/mac414/Downloads/portfolio-website-main/components/global/MobileNavbar.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 19\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/mac414/Downloads/portfolio-website-main/components/global/MobileNavbar.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 17\n                        }, this)\n                    }, item.title, false, {\n                        fileName: \"/Users/mac414/Downloads/portfolio-website-main/components/global/MobileNavbar.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 15\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/mac414/Downloads/portfolio-website-main/components/global/MobileNavbar.tsx\",\n                lineNumber: 69,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac414/Downloads/portfolio-website-main/components/global/MobileNavbar.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(MobileNavbar, \"wSShVbDU3nvMgCOG3Tb8LxwMgA0=\");\n_c = MobileNavbar;\nfunction MenuIcon(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        className: \"h-5 w-5 absolute text-gray-100\",\n        width: \"20\",\n        height: \"20\",\n        viewBox: \"0 0 20 20\",\n        fill: \"none\",\n        ...props,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                d: \"M2.5 7.5H17.5\",\n                stroke: \"currentColor\",\n                strokeWidth: \"1.5\",\n                strokeLinecap: \"round\",\n                strokeLinejoin: \"round\"\n            }, void 0, false, {\n                fileName: \"/Users/mac414/Downloads/portfolio-website-main/components/global/MobileNavbar.tsx\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                d: \"M2.5 12.5H17.5\",\n                stroke: \"currentColor\",\n                strokeWidth: \"1.5\",\n                strokeLinecap: \"round\",\n                strokeLinejoin: \"round\"\n            }, void 0, false, {\n                fileName: \"/Users/mac414/Downloads/portfolio-website-main/components/global/MobileNavbar.tsx\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac414/Downloads/portfolio-website-main/components/global/MobileNavbar.tsx\",\n        lineNumber: 94,\n        columnNumber: 5\n    }, this);\n}\n_c1 = MenuIcon;\nfunction CrossIcon(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        className: \"h-5 w-5 absolute text-gray-100\",\n        viewBox: \"0 0 24 24\",\n        width: \"24\",\n        height: \"24\",\n        stroke: \"currentColor\",\n        strokeWidth: \"1.5\",\n        strokeLinecap: \"round\",\n        strokeLinejoin: \"round\",\n        fill: \"none\",\n        shapeRendering: \"geometricPrecision\",\n        ...props,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                d: \"M18 6L6 18\"\n            }, void 0, false, {\n                fileName: \"/Users/mac414/Downloads/portfolio-website-main/components/global/MobileNavbar.tsx\",\n                lineNumber: 135,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                d: \"M6 6l12 12\"\n            }, void 0, false, {\n                fileName: \"/Users/mac414/Downloads/portfolio-website-main/components/global/MobileNavbar.tsx\",\n                lineNumber: 136,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac414/Downloads/portfolio-website-main/components/global/MobileNavbar.tsx\",\n        lineNumber: 122,\n        columnNumber: 5\n    }, this);\n}\n_c2 = CrossIcon;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"MobileNavbar\");\n$RefreshReg$(_c1, \"MenuIcon\");\n$RefreshReg$(_c2, \"CrossIcon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZ2xvYmFsL01vYmlsZU5hdmJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDRDQUE0Qzs7QUFFQTtBQUVmO0FBQ1U7QUFDYjtBQUVYLFNBQVNLOztJQUN0QixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR04sK0NBQVFBLENBQUM7SUFFN0MsU0FBU087UUFDUCxJQUFJRixZQUFZO1lBQ2RDLGNBQWM7WUFDZEUsU0FBU0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFFBQVEsR0FBRztRQUNqQyxPQUFPO1lBQ0xMLGNBQWM7WUFDZEUsU0FBU0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFFBQVEsR0FBRztRQUNqQztJQUNGO0lBRUFaLGdEQUFTQSxDQUFDO1FBQ1IsT0FBTyxTQUFTYTtZQUNkSixTQUFTQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsUUFBUSxHQUFHO1FBQ2pDO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNFOzswQkFDQyw4REFBQ0M7Z0JBQ0NDLFdBQVcsNENBRVYsT0FEQ1YsY0FBYyxTQUNmO2dCQUNESyxPQUFPO29CQUFFTSxRQUFRO2dCQUFJOztrQ0FFckIsOERBQUNDO3dCQUFHRixXQUFVO2tDQUNaLDRFQUFDZCxrREFBSUE7NEJBQUNpQixNQUFLO3NDQUNULDRFQUFDQztnQ0FBS0osV0FBVTs7a0RBQ2QsOERBQUNLO3dDQUNDQyxLQUFLO3dDQUNMTixXQUFVO3dDQUNWTyxLQUFNO3dDQUNOQyxPQUFNOzs7Ozs7b0NBRVAsU0FBU0MsS0FBSyxDQUFDLElBQUlDLEdBQUcsQ0FBQyxDQUFDQyxRQUFRQzt3Q0FDL0IscUJBQ0UsOERBQUNSOzRDQUVDSixXQUFVO3NEQUVUVzsyQ0FISUM7Ozs7O29DQU1YOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJTiw4REFBQ0M7d0JBQ0NiLFdBQVU7d0JBQ1ZjLGNBQVc7d0JBQ1hDLE1BQUs7d0JBQ0xDLFNBQVN4Qjs7MENBRVQsOERBQUN5QjtnQ0FBU0MsYUFBVzVCOzs7Ozs7MENBQ3JCLDhEQUFDNkI7Z0NBQVVELGFBQVcsQ0FBQzVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHMUJBLDRCQUNDLDhEQUFDOEI7Z0JBQ0NwQixXQUFXLGtEQUNzQixPQUE3QlYsY0FBYzswQkFFakJILGdEQUFNQSxDQUFDdUIsR0FBRyxDQUFDLENBQUNXLE1BQU1UO29CQUNqQixxQkFDRSw4REFBQ1Y7d0JBRUNGLFdBQVU7d0JBQ1ZMLE9BQU87NEJBQUUyQixpQkFBaUIsR0FBb0IsT0FBakIsTUFBTVYsUUFBUSxJQUFHO3dCQUFJO2tDQUVsRCw0RUFBQzFCLGtEQUFJQTs0QkFBQ2lCLE1BQU1rQixLQUFLRSxJQUFJO3NDQUNuQiw0RUFBQ0M7Z0NBQUV4QixXQUFVOzBDQUFvQnFCLEtBQUtJLEtBQUs7Ozs7Ozs7Ozs7O3VCQUx4Q0osS0FBS0ksS0FBSzs7Ozs7Z0JBU3JCOzs7Ozs7Ozs7Ozs7QUFLVjtHQWpGd0JwQztLQUFBQTtBQW1GeEIsU0FBUzRCLFNBQVNTLEtBQUs7SUFDckIscUJBQ0UsOERBQUNDO1FBQ0MzQixXQUFVO1FBQ1ZRLE9BQU07UUFDTm9CLFFBQU87UUFDUEMsU0FBUTtRQUNSQyxNQUFLO1FBQ0osR0FBR0osS0FBSzs7MEJBRVQsOERBQUNIO2dCQUNDUSxHQUFFO2dCQUNGQyxRQUFPO2dCQUNQQyxhQUFZO2dCQUNaQyxlQUFjO2dCQUNkQyxnQkFBZTs7Ozs7OzBCQUVqQiw4REFBQ1o7Z0JBQ0NRLEdBQUU7Z0JBQ0ZDLFFBQU87Z0JBQ1BDLGFBQVk7Z0JBQ1pDLGVBQWM7Z0JBQ2RDLGdCQUFlOzs7Ozs7Ozs7Ozs7QUFJdkI7TUExQlNsQjtBQTRCVCxTQUFTRSxVQUFVTyxLQUFLO0lBQ3RCLHFCQUNFLDhEQUFDQztRQUNDM0IsV0FBVTtRQUNWNkIsU0FBUTtRQUNSckIsT0FBTTtRQUNOb0IsUUFBTztRQUNQSSxRQUFPO1FBQ1BDLGFBQVk7UUFDWkMsZUFBYztRQUNkQyxnQkFBZTtRQUNmTCxNQUFLO1FBQ0xNLGdCQUFlO1FBQ2QsR0FBR1YsS0FBSzs7MEJBRVQsOERBQUNIO2dCQUFLUSxHQUFFOzs7Ozs7MEJBQ1IsOERBQUNSO2dCQUFLUSxHQUFFOzs7Ozs7Ozs7Ozs7QUFHZDtNQW5CU1oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nbG9iYWwvTW9iaWxlTmF2YmFyLnRzeD9hZWMxIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEBuZXh0L25leHQvbm8taW1nLWVsZW1lbnQgKi9cblwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tIFwiQC9kYXRhL2dsb2JhbFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2JpbGVOYXZiYXIoKSB7XG4gIGNvbnN0IFtpc01lbnVPcGVuLCBzZXRJc01lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBmdW5jdGlvbiB0b2dnbGVNZW51KCkge1xuICAgIGlmIChpc01lbnVPcGVuKSB7XG4gICAgICBzZXRJc01lbnVPcGVuKGZhbHNlKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcIlwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRJc01lbnVPcGVuKHRydWUpO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXR1cm4gZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcIlwiO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxuYXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCBqdXN0aWZ5LWJldHdlZW4gZmxleCBpdGVtcy1jZW50ZXIgJHtcbiAgICAgICAgICBpc01lbnVPcGVuICYmIFwiYmctYmdcIlxuICAgICAgICB9IHAtNWB9XG4gICAgICAgIHN0eWxlPXt7IHpJbmRleDogMTAxIH19XG4gICAgICA+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LW5vbmUgZm9udC1ib2xkIHRleHQtbGdcIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ibGFjayB0ZXh0LXhsIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBhbHQ9e1wiQWxpXCJ9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItM1wiXG4gICAgICAgICAgICAgICAgc3JjPXtgc3RhdGljL2xvZ29zL2xvZ29fbm9fdGV4dC5wbmdgfVxuICAgICAgICAgICAgICAgIHdpZHRoPVwiNjBcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7XCJNYXRlZW5cIi5zcGxpdChcIlwiKS5tYXAoKGxldHRlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1mdW4tcGluayBob3ZlcjotbXQtMiB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgaG92ZXI6ZHVyYXRpb24tMTAwIGNsaWNrOmdvb2RieWVMZXR0ZXJBbmltXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2xldHRlcn1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJidXJnZXIgdmlzaWJsZSBtZDpoaWRkZW5cIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbWVudVwiXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgb25DbGljaz17dG9nZ2xlTWVudX1cbiAgICAgICAgPlxuICAgICAgICAgIDxNZW51SWNvbiBkYXRhLWhpZGU9e2lzTWVudU9wZW59IC8+XG4gICAgICAgICAgPENyb3NzSWNvbiBkYXRhLWhpZGU9eyFpc01lbnVPcGVufSAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAge2lzTWVudU9wZW4gJiYgKFxuICAgICAgICA8dWxcbiAgICAgICAgICBjbGFzc05hbWU9e2BtZW51IGZsZXggZmxleC1jb2wgYWJzb2x1dGUgYmctYmdcbiAgICAgICAgICAgICR7aXNNZW51T3BlbiAmJiBcIm1lbnVSZW5kZXJlZFwifWB9XG4gICAgICAgID5cbiAgICAgICAgICB7cm91dGVzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgIGtleT17aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItYiBib3JkZXItZ3JheS05MDAgdGV4dC1ncmF5LTEwMCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zaXRpb25EZWxheTogYCR7MTUwICsgaW5kZXggKiAyNX1tc2AgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0ucGF0aH0+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4IHctYXV0byBwYi00XCI+e2l0ZW0udGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICApfVxuICAgIDwvbmF2PlxuICApO1xufVxuXG5mdW5jdGlvbiBNZW51SWNvbihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIGNsYXNzTmFtZT1cImgtNSB3LTUgYWJzb2x1dGUgdGV4dC1ncmF5LTEwMFwiXG4gICAgICB3aWR0aD1cIjIwXCJcbiAgICAgIGhlaWdodD1cIjIwXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMi41IDcuNUgxNy41XCJcbiAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTIuNSAxMi41SDE3LjVcIlxuICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXG4gICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gQ3Jvc3NJY29uKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgY2xhc3NOYW1lPVwiaC01IHctNSBhYnNvbHV0ZSB0ZXh0LWdyYXktMTAwXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgd2lkdGg9XCIyNFwiXG4gICAgICBoZWlnaHQ9XCIyNFwiXG4gICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgc2hhcGVSZW5kZXJpbmc9XCJnZW9tZXRyaWNQcmVjaXNpb25cIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTggNkw2IDE4XCIgLz5cbiAgICAgIDxwYXRoIGQ9XCJNNiA2bDEyIDEyXCIgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJyb3V0ZXMiLCJSZWFjdCIsIk1vYmlsZU5hdmJhciIsImlzTWVudU9wZW4iLCJzZXRJc01lbnVPcGVuIiwidG9nZ2xlTWVudSIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJjbGVhbnVwIiwibmF2IiwiZGl2IiwiY2xhc3NOYW1lIiwiekluZGV4IiwibGkiLCJocmVmIiwic3BhbiIsImltZyIsImFsdCIsInNyYyIsIndpZHRoIiwic3BsaXQiLCJtYXAiLCJsZXR0ZXIiLCJpbmRleCIsImJ1dHRvbiIsImFyaWEtbGFiZWwiLCJ0eXBlIiwib25DbGljayIsIk1lbnVJY29uIiwiZGF0YS1oaWRlIiwiQ3Jvc3NJY29uIiwidWwiLCJpdGVtIiwidHJhbnNpdGlvbkRlbGF5IiwicGF0aCIsInAiLCJ0aXRsZSIsInByb3BzIiwic3ZnIiwiaGVpZ2h0Iiwidmlld0JveCIsImZpbGwiLCJkIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJzaGFwZVJlbmRlcmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/global/MobileNavbar.tsx\n"));

/***/ })

});