"use strict";
exports.id = "component---src-templates-markdown-js";
exports.ids = ["component---src-templates-markdown-js"];
exports.modules = {

/***/ "./src/templates/Markdown.js?export=default":
/*!**************************************************!*\
  !*** ./src/templates/Markdown.js?export=default ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Markdown({
  data
}) {
  const {
    markdownRemark
  } = data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, markdownRemark.frontmatter.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, markdownRemark.frontmatter.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    dangerouslySetInnerHTML: {
      __html: markdownRemark.html
    }
  }));
}
const pageQuery = "3717750892";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Markdown);

/***/ })

};
;
//# sourceMappingURL=component---src-templates-markdown-js.js.map