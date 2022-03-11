"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/email":
/*!********************************************!*\
  !*** external "next-auth/providers/email" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/email");

/***/ }),

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_email__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/email */ \"next-auth/providers/email\");\n/* harmony import */ var next_auth_providers_email__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_email__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n  database: process.env.DATABASE_URL,\n  secret: process.env.SECRET,\n  providers: [// Passwordless / email sign in\n  next_auth_providers_email__WEBPACK_IMPORTED_MODULE_1___default()({\n    server: process.env.MAIL_SERVER,\n    from: 'NextAuth.js <no-reply@example.com>'\n  })]\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFDQUUsb0RBQUE7O0FBRUEsaUVBQWVGLGdEQUFRLENBQUM7QUFDdEJJLEVBQUFBLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFlBREE7QUFFdEJDLEVBQUFBLE1BQU0sRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlHLE1BRkU7QUFHdEJDLEVBQUFBLFNBQVMsRUFBRSxDQUNUO0FBQ0FULEVBQUFBLGdFQUFhLENBQUM7QUFDWlUsSUFBQUEsTUFBTSxFQUFFTixPQUFPLENBQUNDLEdBQVIsQ0FBWU0sV0FEUjtBQUVaQyxJQUFBQSxJQUFJLEVBQUU7QUFGTSxHQUFELENBRko7QUFIVyxDQUFELENBQXZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tICduZXh0LWF1dGgnXG5pbXBvcnQgRW1haWxQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2VtYWlsJ1xucmVxdWlyZSgnZG90ZW52JykuY29uZmlnKClcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMLFxuICBzZWNyZXQ6IHByb2Nlc3MuZW52LlNFQ1JFVCxcbiAgcHJvdmlkZXJzOiBbIFxuICAgIC8vIFBhc3N3b3JkbGVzcyAvIGVtYWlsIHNpZ24gaW5cbiAgICBFbWFpbFByb3ZpZGVyKHsgICAgICAgICBcbiAgICAgIHNlcnZlcjogcHJvY2Vzcy5lbnYuTUFJTF9TRVJWRVIsXG4gICAgICBmcm9tOiAnTmV4dEF1dGguanMgPG5vLXJlcGx5QGV4YW1wbGUuY29tPidcbiAgICB9KSxcbiAgXVxufSkiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJFbWFpbFByb3ZpZGVyIiwicmVxdWlyZSIsImNvbmZpZyIsImRhdGFiYXNlIiwicHJvY2VzcyIsImVudiIsIkRBVEFCQVNFX1VSTCIsInNlY3JldCIsIlNFQ1JFVCIsInByb3ZpZGVycyIsInNlcnZlciIsIk1BSUxfU0VSVkVSIiwiZnJvbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();