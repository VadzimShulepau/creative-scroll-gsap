/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./styles/styles.css":
/*!*****************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./styles/styles.css ***!
  \*****************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! @fonts/raleway-regular.woff2 */ "./fonts/raleway-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! @fonts/outfit-regular.woff2 */ "./fonts/outfit-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! @images/bg.jpg */ "./images/bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* @import 'normalize.css'; */\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --index: calc(1vw + 1vh);\r\n  --color-header: #f4efec;\r\n  --color-text: #cdc6c3;\r\n  --gallery-gap: calc(var(--index) * 10);\r\n}\r\n\r\n@font-face {\r\n  font-family: raleway-c;\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2');\r\n}\r\n\r\n@font-face {\r\n  font-family: outfit-c;\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff2');\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-family: outfit-c;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  min-height: 100vh;\r\n  height: 100%;\r\n  flex-direction: column;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") center / 10% repeat;\r\n  color: #cdc6c3;\r\n  color: var(--color-text);\r\n  font-family: railway-c;\r\n  width: 100%;\r\n  overflow-x: hidden;\r\n  /* overflow: hidden; */\r\n}\r\n\r\n.hero-img {\r\n  width: calc((1vw + 1vh) * 36);\r\n  width: calc(calc(1vw + 1vh) * 36);\r\n  width: calc(var(--index) * 36);\r\n  position: absolute;\r\n  top: 8vh;\r\n  right: 0;\r\n  z-index: -1;\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n  padding: 0 7vw;\r\n  width: 100%;\r\n}\r\n\r\n.main-header {\r\n  height: 100vh;\r\n}\r\n\r\n.main-title {\r\n  font-size: calc((1vw + 1vh) * 8);\r\n  font-size: calc(calc(1vw + 1vh) * 8);\r\n  font-size: calc(var(--index) * 8);\r\n  position: absolute;\r\n  width: -moz-min-content;\r\n  width: min-content;\r\n  line-height: 0.9;\r\n  bottom: 4vh;\r\n}\r\n\r\n.gallery {\r\n  display: flex;\r\n  padding: calc((1vw + 1vh) * 8) 0;\r\n  padding: calc(calc(1vw + 1vh) * 8) 0;\r\n  padding: calc(var(--index) * 8) 0;\r\n}\r\n\r\n.gallery-column {\r\n  display: flex;\r\n  flex: 1;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n.gallery__item {\r\n  max-width: calc((1vw + 1vh) * 21);\r\n  max-width: calc(calc(1vw + 1vh) * 21);\r\n  max-width: calc(var(--index) * 21);\r\n  max-height: 180vh;\r\n  margin-bottom: calc((1vw + 1vh) * 10);\r\n  margin-bottom: calc(calc(1vw + 1vh) * 10);\r\n  margin-bottom: var(--gallery-gap);\r\n  border-radius: 8px;\r\n}\r\n\r\n.gallery-column--left {\r\n  margin-top: calc(((1vw + 1vh) * 10));\r\n  margin-top: calc(calc(calc(1vw + 1vh) * 10));\r\n  margin-top: calc(var(--gallery-gap * 1.75));\r\n}\r\n\r\n.gallery-column--right .gallery__item {\r\n    margin: 0;\r\n    margin-top: calc((1vw + 1vh) * 10);\r\n    margin-top: calc(calc(1vw + 1vh) * 10);\r\n    margin-top: var(--gallery-gap);\r\n  }\r\n\r\n.text-block {\r\n  position: relative;\r\n  color: #cdc6c3;\r\n  color: var(--color-text);\r\n}\r\n\r\n.text-block__title {\r\n  font-size: 2rem;\r\n  line-height: 2.4rem;\r\n  color: #f4efec;\r\n  color: var(--color-header);\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.text-block__paragraph {\r\n  line-height: 1.75;\r\n}\r\n\r\n/* will-change */\r\n.content,\r\n.hero-img,\r\n.main-header,\r\n.gallery-column--right,\r\n.gallery-column--left {\r\n  will-change: transform;\r\n}\r\n", "",{"version":3,"sources":["webpack://./styles/styles.css"],"names":[],"mappings":"AAAA,6BAA6B;;AAE7B;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,wBAAwB;EACxB,uBAAuB;EACvB,qBAAqB;EACrB,sCAAsC;AACxC;;AAEA;EACE,sBAAsB;EACtB,4DAAwD;AAC1D;;AAEA;EACE,qBAAqB;EACrB,4DAAuD;AACzD;;AAEA;;;;;;EAME,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,YAAY;EACZ,sBAAsB;EACtB,uEAAqD;EACrD,cAAwB;EAAxB,wBAAwB;EACxB,sBAAsB;EACtB,WAAW;EACX,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,6BAA8B;EAA9B,iCAA8B;EAA9B,8BAA8B;EAC9B,kBAAkB;EAClB,QAAQ;EACR,QAAQ;EACR,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gCAAiC;EAAjC,oCAAiC;EAAjC,iCAAiC;EACjC,kBAAkB;EAClB,uBAAkB;EAAlB,kBAAkB;EAClB,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,gCAAiC;EAAjC,oCAAiC;EAAjC,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,OAAO;EACP,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,iCAAkC;EAAlC,qCAAkC;EAAlC,kCAAkC;EAClC,iBAAiB;EACjB,qCAAiC;EAAjC,yCAAiC;EAAjC,iCAAiC;EACjC,kBAAkB;AACpB;;AAEA;EACE,oCAA2C;EAA3C,4CAA2C;EAA3C,2CAA2C;AAC7C;;AAGE;IACE,SAAS;IACT,kCAA8B;IAA9B,sCAA8B;IAA9B,8BAA8B;EAChC;;AAGF;EACE,kBAAkB;EAClB,cAAwB;EAAxB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,cAA0B;EAA1B,0BAA0B;EAC1B,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;AACnB;;AAEA,gBAAgB;AAChB;;;;;EAKE,sBAAsB;AACxB","sourcesContent":["/* @import 'normalize.css'; */\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --index: calc(1vw + 1vh);\r\n  --color-header: #f4efec;\r\n  --color-text: #cdc6c3;\r\n  --gallery-gap: calc(var(--index) * 10);\r\n}\r\n\r\n@font-face {\r\n  font-family: raleway-c;\r\n  src: url('@fonts/raleway-regular.woff2') format('woff2');\r\n}\r\n\r\n@font-face {\r\n  font-family: outfit-c;\r\n  src: url('@fonts/outfit-regular.woff2') format('woff2');\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-family: outfit-c;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  min-height: 100vh;\r\n  height: 100%;\r\n  flex-direction: column;\r\n  background: url('@images/bg.jpg') center / 10% repeat;\r\n  color: var(--color-text);\r\n  font-family: railway-c;\r\n  width: 100%;\r\n  overflow-x: hidden;\r\n  /* overflow: hidden; */\r\n}\r\n\r\n.hero-img {\r\n  width: calc(var(--index) * 36);\r\n  position: absolute;\r\n  top: 8vh;\r\n  right: 0;\r\n  z-index: -1;\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n  padding: 0 7vw;\r\n  width: 100%;\r\n}\r\n\r\n.main-header {\r\n  height: 100vh;\r\n}\r\n\r\n.main-title {\r\n  font-size: calc(var(--index) * 8);\r\n  position: absolute;\r\n  width: min-content;\r\n  line-height: 0.9;\r\n  bottom: 4vh;\r\n}\r\n\r\n.gallery {\r\n  display: flex;\r\n  padding: calc(var(--index) * 8) 0;\r\n}\r\n\r\n.gallery-column {\r\n  display: flex;\r\n  flex: 1;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n.gallery__item {\r\n  max-width: calc(var(--index) * 21);\r\n  max-height: 180vh;\r\n  margin-bottom: var(--gallery-gap);\r\n  border-radius: 8px;\r\n}\r\n\r\n.gallery-column--left {\r\n  margin-top: calc(var(--gallery-gap * 1.75));\r\n}\r\n\r\n.gallery-column--right {\r\n  .gallery__item {\r\n    margin: 0;\r\n    margin-top: var(--gallery-gap);\r\n  }\r\n}\r\n\r\n.text-block {\r\n  position: relative;\r\n  color: var(--color-text);\r\n}\r\n\r\n.text-block__title {\r\n  font-size: 2rem;\r\n  line-height: 2.4rem;\r\n  color: var(--color-header);\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.text-block__paragraph {\r\n  line-height: 1.75;\r\n}\r\n\r\n/* will-change */\r\n.content,\r\n.hero-img,\r\n.main-header,\r\n.gallery-column--right,\r\n.gallery-column--left {\r\n  will-change: transform;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./styles/styles.css":
/*!***************************!*\
  !*** ./styles/styles.css ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./styles.css */ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./fonts/outfit-regular.woff2":
/*!************************************!*\
  !*** ./fonts/outfit-regular.woff2 ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/outfit-regular.woff2";

/***/ }),

/***/ "./fonts/raleway-regular.woff2":
/*!*************************************!*\
  !*** ./fonts/raleway-regular.woff2 ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/raleway-regular.woff2";

/***/ }),

/***/ "./images/bg.jpg":
/*!***********************!*\
  !*** ./images/bg.jpg ***!
  \***********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/bg.jpg";

/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styles/styles.css */ "./styles/styles.css");
/* harmony import */ var gsap_trial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap-trial */ "../node_modules/gsap-trial/index.js");
/* harmony import */ var gsap_trial_ScrollTrigger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap-trial/ScrollTrigger.js */ "../node_modules/gsap-trial/ScrollTrigger.js");
/* harmony import */ var gsap_trial_ScrollSmoother_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap-trial/ScrollSmoother.js */ "../node_modules/gsap-trial/ScrollSmoother.js");




gsap_trial__WEBPACK_IMPORTED_MODULE_1__.gsap.registerPlugin(gsap_trial_ScrollTrigger_js__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger, gsap_trial_ScrollSmoother_js__WEBPACK_IMPORTED_MODULE_3__.ScrollSmoother);
if (gsap_trial_ScrollTrigger_js__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger.isTouch !== 1) {
  gsap_trial_ScrollSmoother_js__WEBPACK_IMPORTED_MODULE_3__.ScrollSmoother.create({
    wrapper: '.smooth-wrapper',
    content: '.smooth-content',
    smooth: 1.5,
    effects: true
  });
  gsap_trial__WEBPACK_IMPORTED_MODULE_1__.gsap.fromTo('.hero-section', {
    opacity: 1
  }, {
    opacity: 0,
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'center',
      end: '850',
      scrub: true
    }
  });
  const itemsLeft = gsap_trial__WEBPACK_IMPORTED_MODULE_1__.gsap.utils.toArray('.gallery-column .gallery-column--left gall.gallery__item');
  itemsLeft.forEach(item => {
    gsap_trial__WEBPACK_IMPORTED_MODULE_1__.gsap.fromTo(item, {
      x: -500,
      opacity: 0
    }, {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: item,
        scrub: true
      }
    });
  });
  const itemsRight = gsap_trial__WEBPACK_IMPORTED_MODULE_1__.gsap.utils.toArray('.gallery-column .gallery-column--right gall.gallery__item');
  itemsRight.forEach(item => {
    gsap_trial__WEBPACK_IMPORTED_MODULE_1__.gsap.fromTo(item, {
      x: 500,
      opacity: 0
    }, {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: item,
        scrub: true
      }
    });
  });
}
;

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_getU-b8145b"], function() { return __webpack_require__("./scripts/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map