/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("formmate", ["react"], factory);
	else if(typeof exports === 'object')
		exports["formmate"] = factory(require("react"));
	else
		root["formmate"] = factory(root["react"]);
})(self, (__WEBPACK_EXTERNAL_MODULE_react__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./development/index.tsx":
/*!*******************************!*\
  !*** ./development/index.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Input = void 0;\r\nconst Input_1 = __importDefault(__webpack_require__(/*! ./src/components/form-controls/Input */ \"./development/src/components/form-controls/Input.tsx\"));\r\nexports.Input = Input_1.default;\r\n\n\n//# sourceURL=webpack://formmate/./development/index.tsx?");

/***/ }),

/***/ "./development/src/components/form-controls/Input.tsx":
/*!************************************************************!*\
  !*** ./development/src/components/form-controls/Input.tsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n// import FormControl from \"@mui/material/FormControl\";\r\n// import TextField from \"@mui/material/TextField\";\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst Input = () => {\r\n    return react_1.default.createElement(\"div\", null, \"Reda and Hamo. \");\r\n    // return (\r\n    //   <FormControl margin=\"normal\">\r\n    //     <TextField\r\n    //       fullWidth\r\n    //       label={label}\r\n    //       name={name}\r\n    //       value={value ?? \"\"}\r\n    //       onChange={(e) => {\r\n    //         onChange(e.target);\r\n    //         onValidate && onValidate(e.target);\r\n    //       }}\r\n    //       error={Boolean(error)}\r\n    //       {...rest}\r\n    //       helperText={error}\r\n    //     />\r\n    //   </FormControl>\r\n    // );\r\n};\r\nexports[\"default\"] = Input;\r\n\n\n//# sourceURL=webpack://formmate/./development/src/components/form-controls/Input.tsx?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./development/index.tsx");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});