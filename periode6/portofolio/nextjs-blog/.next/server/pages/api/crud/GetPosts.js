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
exports.id = "pages/api/crud/GetPosts";
exports.ids = ["pages/api/crud/GetPosts"];
exports.modules = {

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "next":
/*!***********************!*\
  !*** external "next" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("next");

/***/ }),

/***/ "serverless-mysql":
/*!***********************************!*\
  !*** external "serverless-mysql" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("serverless-mysql");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "./pages/api/crud/GetPosts.js":
/*!************************************!*\
  !*** ./pages/api/crud/GetPosts.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next */ \"next\");\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/database */ \"./utils/database.js\");\n\n\n\nconst handler = async (req, res) => {\n  const amount = parseInt(req.query.limit); // prevent sql injection\n\n  const results = await (0,_utils_database__WEBPACK_IMPORTED_MODULE_1__.query)(`\n      SELECT * FROM portofolio LIMIT ${amount}\n    `);\n  return res.json(results);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvY3J1ZC9HZXRQb3N0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNRSxPQUFPLEdBQUcsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ2hDLFFBQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDSCxHQUFHLENBQUNGLEtBQUosQ0FBVU0sS0FBWCxDQUF2QixDQURnQyxDQUNTOztBQUN6QyxRQUFNQyxPQUFPLEdBQUcsTUFBTVAsc0RBQUssQ0FDeEI7QUFDUCx1Q0FBdUNJLE1BQU87QUFDOUMsS0FIK0IsQ0FBM0I7QUFLQSxTQUFPRCxHQUFHLENBQUNLLElBQUosQ0FBU0QsT0FBVCxDQUFQO0FBQ0gsQ0FSRDs7QUFVQSxpRUFBZU4sT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9jcnVkL0dldFBvc3RzLmpzPzE1M2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaUhhbmRsZXIgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgeyBxdWVyeSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2RhdGFiYXNlJ1xyXG5cclxuY29uc3QgaGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4geyAgXHJcbiAgICBjb25zdCBhbW91bnQgPSBwYXJzZUludChyZXEucXVlcnkubGltaXQpIC8vIHByZXZlbnQgc3FsIGluamVjdGlvblxyXG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IHF1ZXJ5KFxyXG4gICAgICBgXHJcbiAgICAgIFNFTEVDVCAqIEZST00gcG9ydG9mb2xpbyBMSU1JVCAke2Ftb3VudH1cclxuICAgIGBcclxuICAgIClcclxuICAgIHJldHVybiByZXMuanNvbihyZXN1bHRzKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyIl0sIm5hbWVzIjpbIk5leHRBcGlIYW5kbGVyIiwicXVlcnkiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiYW1vdW50IiwicGFyc2VJbnQiLCJsaW1pdCIsInJlc3VsdHMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/crud/GetPosts.js\n");

/***/ }),

/***/ "./utils/database.js":
/*!***************************!*\
  !*** ./utils/database.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"query\": () => (/* binding */ query)\n/* harmony export */ });\n/* harmony import */ var serverless_mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! serverless-mysql */ \"serverless-mysql\");\n/* harmony import */ var serverless_mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(serverless_mysql__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)({\n  path: path.resolve(__dirname, '../.env')\n});\n\nconst db = serverless_mysql__WEBPACK_IMPORTED_MODULE_0___default()({\n  config: {\n    host: process.env.MYSQL_HOST,\n    database: process.env.MYSQL_DATABASE,\n    user: process.env.MYSQL_USERNAME,\n    password: process.env.MYSQL_PASSWORD,\n    port: parseInt(process.env.MYSQL_PORT)\n  }\n});\nasync function query(q, values) {\n  try {\n    const results = await db.query(q, values);\n    await db.end();\n    return results;\n  } catch (e) {\n    throw Error(e.message);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9kYXRhYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0EsTUFBTUMsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLGtCQUFELENBQXBCOztBQUNBQSxvREFBQSxDQUF5QjtBQUFFRCxFQUFBQSxJQUFJLEVBQUVBLElBQUksQ0FBQ0csT0FBTCxDQUFhQyxTQUFiLEVBQXdCLFNBQXhCO0FBQVIsQ0FBekI7O0FBRU8sTUFBTUMsRUFBRSxHQUFHTix1REFBSyxDQUFDO0FBQ3RCRyxFQUFBQSxNQUFNLEVBQUU7QUFDTkksSUFBQUEsSUFBSSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsVUFEWjtBQUVOQyxJQUFBQSxRQUFRLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxjQUZoQjtBQUdOQyxJQUFBQSxJQUFJLEVBQUVMLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSyxjQUhaO0FBSU5DLElBQUFBLFFBQVEsRUFBRVAsT0FBTyxDQUFDQyxHQUFSLENBQVlPLGNBSmhCO0FBS05DLElBQUFBLElBQUksRUFBRUMsUUFBUSxDQUFDVixPQUFPLENBQUNDLEdBQVIsQ0FBWVUsVUFBYjtBQUxSO0FBRGMsQ0FBRCxDQUFoQjtBQVVBLGVBQWVDLEtBQWYsQ0FDTEMsQ0FESyxFQUVMQyxNQUZLLEVBR0w7QUFDQSxNQUFJO0FBQ0YsVUFBTUMsT0FBTyxHQUFHLE1BQU1qQixFQUFFLENBQUNjLEtBQUgsQ0FBU0MsQ0FBVCxFQUFZQyxNQUFaLENBQXRCO0FBQ0EsVUFBTWhCLEVBQUUsQ0FBQ2tCLEdBQUgsRUFBTjtBQUNBLFdBQU9ELE9BQVA7QUFDRCxHQUpELENBSUUsT0FBT0UsQ0FBUCxFQUFVO0FBQ1YsVUFBTUMsS0FBSyxDQUFDRCxDQUFDLENBQUNFLE9BQUgsQ0FBWDtBQUNEO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9kYXRhYmFzZS5qcz8yYjllIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBteXNxbCBmcm9tICdzZXJ2ZXJsZXNzLW15c3FsJ1xyXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXHJcbnJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZyh7IHBhdGg6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uZW52JykgfSlcclxuXHJcbmV4cG9ydCBjb25zdCBkYiA9IG15c3FsKHtcclxuICBjb25maWc6IHtcclxuICAgIGhvc3Q6IHByb2Nlc3MuZW52Lk1ZU1FMX0hPU1QsXHJcbiAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuTVlTUUxfREFUQUJBU0UsXHJcbiAgICB1c2VyOiBwcm9jZXNzLmVudi5NWVNRTF9VU0VSTkFNRSxcclxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5NWVNRTF9QQVNTV09SRCxcclxuICAgIHBvcnQ6IHBhcnNlSW50KHByb2Nlc3MuZW52Lk1ZU1FMX1BPUlQpLFxyXG4gIH0sXHJcbn0pXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcXVlcnkoXHJcbiAgcSxcclxuICB2YWx1ZXNcclxuKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBkYi5xdWVyeShxLCB2YWx1ZXMpXHJcbiAgICBhd2FpdCBkYi5lbmQoKVxyXG4gICAgcmV0dXJuIHJlc3VsdHNcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICB0aHJvdyBFcnJvcihlLm1lc3NhZ2UpXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJteXNxbCIsInBhdGgiLCJyZXF1aXJlIiwiY29uZmlnIiwicmVzb2x2ZSIsIl9fZGlybmFtZSIsImRiIiwiaG9zdCIsInByb2Nlc3MiLCJlbnYiLCJNWVNRTF9IT1NUIiwiZGF0YWJhc2UiLCJNWVNRTF9EQVRBQkFTRSIsInVzZXIiLCJNWVNRTF9VU0VSTkFNRSIsInBhc3N3b3JkIiwiTVlTUUxfUEFTU1dPUkQiLCJwb3J0IiwicGFyc2VJbnQiLCJNWVNRTF9QT1JUIiwicXVlcnkiLCJxIiwidmFsdWVzIiwicmVzdWx0cyIsImVuZCIsImUiLCJFcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/database.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/crud/GetPosts.js"));
module.exports = __webpack_exports__;

})();