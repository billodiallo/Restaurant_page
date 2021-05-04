/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _img_kabab_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/kabab.jpg */ \"./src/img/kabab.jpg\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_img_kabab_jpg__WEBPACK_IMPORTED_MODULE_2__);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  position: relative;\\r\\n  background-size: cover;\\r\\n  background-repeat: no-repeat;\\r\\n}\\r\\n\\r\\nli {\\r\\n  font-family: var(--poppins);\\r\\n  list-style: none;\\r\\n  font-weight: bold;\\r\\n  transition: 0.3s ease;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nli:hover {\\r\\n  color: var(--pink);\\r\\n}\\r\\n\\r\\n[data-tab-content] {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.active[data-tab-content] {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.tab-content h1 {\\r\\n  font-family: var(--fredoka);\\r\\n  font-size: calc(3rem + 2vw);\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.main-row {\\r\\n  background-color: rgba(250, 193, 188, 0.7);\\r\\n  width: 75%;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.main-food {\\r\\n  background-color: rgba(250, 193, 188, 0.7);\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.contact-row {\\r\\n  background-color: rgba(250, 193, 188, 0.7);\\r\\n  background-size: 70%;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.red {\\r\\n  color: red;\\r\\n}\\r\\n\\r\\n.image-food {\\r\\n  width: 210px;\\r\\n  height: 210px;\\r\\n  border-radius: 100px;\\r\\n}\\r\\n\\r\\n.text-danger {\\r\\n  color: red;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpackk/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpackk/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== \"string\") {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://webpackk/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://webpackk/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpackk/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contactPage = (() => {\r\n  const contentContainer = document.querySelector('#content');\r\n  const contact = document.createElement('div');\r\n  contact.classList.add('container-fluid');\r\n  contact.setAttribute('id', 'contact');\r\n  contact.setAttribute('data-tab-content', '');\r\n  contact.innerHTML = `\r\n  <h1 class='text-center text-light'>Contact Us</h1>\r\n  <div class='col-10 col-md-6 mx-auto row d-flex flex-column contact-row'>\r\n    <div class='col-6 mx-auto'>\r\n      <p class='my-4'>Phone: +964 770 8272458</p>\r\n      <a href=\"mailto:arikarim146@gmail.com\" class='my-2 text-decoration-none link-dark'>Email: arikarim146@gmail.com</a>\r\n    </div>\r\n\r\n    <div class=\"col-6 mx-auto my-5\">\r\n        <form onsubmit=\"return false\">\r\n          <h3><i class=\"\"></i>Message us</h3>\r\n          <div class=\"\">\r\n            <span>Name</span><br>\r\n            <input class='form-control'  type=\"text\" required />\r\n          </div>\r\n          <div class=\"my-3\">\r\n            <span>Email</span><br>\r\n            <input class='form-control' type=\"text\" required />\r\n          </div>\r\n          <div class=\"my-3\">\r\n            <span>Type your message...</span><br>\r\n            <textarea class='form-control'  required></textarea>\r\n          </div>\r\n          <input class='btn btn-dark my-3' type=\"submit\" value=\"Send\" />\r\n        </form>\r\n      </div>\r\n  </div>`;\r\n\r\n  contentContainer.appendChild(contact);\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);\n\n//# sourceURL=webpack://webpackk/./src/contact.js?");

/***/ }),

/***/ "./src/food.js":
/*!*********************!*\
  !*** ./src/food.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_tieboudienne_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/tieboudienne.jpg */ \"./src/img/tieboudienne.jpg\");\n/* harmony import */ var _img_yassa_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/yassa.jpg */ \"./src/img/yassa.jpg\");\n/* harmony import */ var _img_sarupe_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/sarupe.jpeg */ \"./src/img/sarupe.jpeg\");\n/* harmony import */ var _img_thiakiri_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/thiakiri.jpg */ \"./src/img/thiakiri.jpg\");\n\r\n\r\n\r\n\r\n\r\nconst foodpage = (() => {\r\n  const contentContainer = document.querySelector('#content');\r\n  const food = document.createElement('div');\r\n  food.classList.add('container-fluid');\r\n  food.setAttribute('id', 'menu');\r\n  food.setAttribute('data-tab-content', '');\r\n\r\n  food.innerHTML = `\r\n  <div class='row mt-3 main-food'>\r\n    <div class='col-12 col-md-6 d-flex py-3'>\r\n      <div id='img1' class='col-6 image-food  img1'>\r\n        \r\n      </div>\r\n      <div class='col-6 mx-2'>\r\n        <h3 class='text-center'>THieboudienne</h3>\r\n        <p>Tiep or thieb is a traditional dish from the Sahel, especially from Senegal, The Gambia and Mauritania and it is a staple in both countries. The version of tiep called thieboudienne or chebu jen is prepared with fish, rice and tomato sauce cooked in one pot, and it is considered the national dish </p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class='col-12 col-md-6 d-flex py-3'>\r\n      <div id='img2' class='col-6 image-food  img1'>\r\n        \r\n      </div>\r\n      <div class='col-6 mx-2'>\r\n        <h3 class='text-center'>Yassa </h3>\r\n        <p>Yassa is a spicy dish prepared with onions and either marinated poultry or marinated fish ,Yassa is a spicy dish prepared with onions and either marinated poultry or marinated fish. Originally from Senegal, yassa has become popular throughout West Africa. Chicken yassa, prepared with onions, lemon or mustard, i</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class='col-12 col-md-6 d-flex py-3'>\r\n      <div id='img3' class='col-6 image-food  img1'>\r\n        \r\n      </div>\r\n      <div class='col-6 mx-2'>\r\n        <h3 class='text-center'>Thiakiri</h3>\r\n        <p>Thiakry is known by different names across the West African region; Thiakiri, Degue, Chiakiri, Chakri etc. It looks like rice pudding and is traditionally made with millet, evaporated milk, sweetened condensed milk, yogurt, sugar and spices.</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class='col-12 col-md-6 d-flex py-3'>\r\n      <div id='img4' class='col-6 image-food  img1'>\r\n        \r\n      </div>\r\n      <div class='col-6 mx-2'>\r\n        <h3 class='text-center'>Sarupe</h3>\r\n        <p>Pacha (Sarupe in Kurdish) is a traditional dish made out of sheep skin filled with spiced rice, especially popular in the wintertime. “It was around 2:30 in the morning when four people came to our restaurant to eat pacha.</p>\r\n      </div>\r\n    </div>\r\n  </div>`;\r\n  contentContainer.appendChild(food);\r\n\r\n  const img1 = new Image();\r\n  img1.src = _img_tieboudienne_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n  img1.classList.add('image-food');\r\n  const img11 = document.getElementById('img1');\r\n  img11.appendChild(img1);\r\n\r\n  const img2 = new Image();\r\n  img2.src = _img_yassa_jpg__WEBPACK_IMPORTED_MODULE_1__;\r\n  img2.classList.add('image-food');\r\n  const img22 = document.getElementById('img2');\r\n  img22.appendChild(img2);\r\n\r\n  const img3 = new Image();\r\n  img3.src = _img_thiakiri_jpg__WEBPACK_IMPORTED_MODULE_3__;\r\n  img3.classList.add('image-food');\r\n  const img33 = document.getElementById('img3');\r\n  img33.appendChild(img3);\r\n\r\n  const img4 = new Image();\r\n  img4.src = _img_sarupe_jpeg__WEBPACK_IMPORTED_MODULE_2__;\r\n  img4.classList.add('image-food');\r\n  const img44 = document.getElementById('img4');\r\n  img44.appendChild(img4);\r\n})();\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (foodpage);\n\n//# sourceURL=webpack://webpackk/./src/food.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst headerPage = (() => {\r\n  // container\r\n  const contentContainer = document.querySelector('#content');\r\n\r\n  const header = document.createElement('header');\r\n  header.innerHTML = `\r\n  <nav class='d-flex justify-content-between bg-dark p-3'>\r\n    <h2 class='red'>Fast Food chez Joe</h2>\r\n    <a href=\"#\" class=\"hamburger\">\r\n      <span class=\"line line1\"></span>\r\n      <span class=\"line line2\"></span>\r\n      <span class=\"line line3\"></span>\r\n    </a>\r\n    <ul class=\"list-unstyled d-flex text-light\">\r\n      <li data-tab-target=\"#home\" class=\"tab red mx-3\">Home</li>\r\n      <li id='menuu' data-tab-target=\"#menu\" class=\"tab mx-3\">Menu</li>\r\n      <li data-tab-target=\"#contact\" class=\"tab mx-3\">Contact us</li>\r\n    </ul>\r\n</nav>`;\r\n\r\n  contentContainer.appendChild(header);\r\n})();\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerPage);\n\n//# sourceURL=webpack://webpackk/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderHome = (() => {\r\n  // container ===>\r\n  const container = document.getElementById('content');\r\n\r\n  const home = document.createElement('div');\r\n  home.classList.add('tab-content');\r\n\r\n  home.classList.add('tab-content');\r\n  home.innerHTML = `\r\n  <div id=\"home\" class=\"active\" data-tab-content>\r\n    <div class='container position-relative'>\r\n      <div class='row col-6 mt-5 mx-auto main-row py-5'>\r\n        <h1 class='py-5 text-center'>Fast Food Chez Joe</h1>\r\n        <h4 class='text-center'>Come and taste some delicious local foods</h4>\r\n      </div>\r\n    </div>\r\n  </div>`;\r\n\r\n  container.appendChild(home);\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHome);\n\n//# sourceURL=webpack://webpackk/./src/home.js?");

/***/ }),

/***/ "./src/img/kabab.jpg":
/*!***************************!*\
  !*** ./src/img/kabab.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e9e5df9694b2f6e59226.jpg\";\n\n//# sourceURL=webpack://webpackk/./src/img/kabab.jpg?");

/***/ }),

/***/ "./src/img/sarupe.jpeg":
/*!*****************************!*\
  !*** ./src/img/sarupe.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a8d72f1dfba2861c5372.jpeg\";\n\n//# sourceURL=webpack://webpackk/./src/img/sarupe.jpeg?");

/***/ }),

/***/ "./src/img/thiakiri.jpg":
/*!******************************!*\
  !*** ./src/img/thiakiri.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"32669ae9dab8dfc51ea3.jpg\";\n\n//# sourceURL=webpack://webpackk/./src/img/thiakiri.jpg?");

/***/ }),

/***/ "./src/img/tieboudienne.jpg":
/*!**********************************!*\
  !*** ./src/img/tieboudienne.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"474f8c04897ac6576c17.jpg\";\n\n//# sourceURL=webpack://webpackk/./src/img/tieboudienne.jpg?");

/***/ }),

/***/ "./src/img/yassa.jpg":
/*!***************************!*\
  !*** ./src/img/yassa.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dc4537305781a25fba6a.jpg\";\n\n//# sourceURL=webpack://webpackk/./src/img/yassa.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _food__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./food */ \"./src/food.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction fordbd() {\r\n  const i = 0;\r\n  if (i < 0) {\r\n    (0,_header__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_2__.default)();\r\n    (0,_food__WEBPACK_IMPORTED_MODULE_3__.default)();\r\n    (0,_contact__WEBPACK_IMPORTED_MODULE_4__.default)();\r\n  }\r\n}\r\n\r\nfordbd();\r\n\r\nconst tabs = document.querySelectorAll('[data-tab-target]');\r\nconst tabContents = document.querySelectorAll('[data-tab-content]');\r\nconst burger = document.querySelector('.hamburger');\r\n\r\n// Hamburger menu\r\nburger.addEventListener('click', () => {\r\n  document.querySelector('ul').classList.toggle('active');\r\n  burger.classList.toggle('toggle');\r\n});\r\n\r\n// Navigation tabs\r\ntabs.forEach((tab) => tab.addEventListener('click', () => {\r\n  const target = document.querySelector(tab.dataset.tabTarget);\r\n  tabContents.forEach((tabContent) => {\r\n    tabContent.classList.remove('active');\r\n  });\r\n  tabs.forEach((tab) => {\r\n    tab.classList.remove('red');\r\n  });\r\n  tab.classList.add('red');\r\n  target.classList.add('active');\r\n}));\r\n\r\ndocument.querySelector('.main-row').addEventListener('click', () => {\r\n  document.querySelector('[data-tab-target=\"#menu\"]').classList.add('red');\r\n});\r\n\r\ndocument.querySelector('[type=\"submit\"]').addEventListener('click', () => {\r\n  document.querySelector('form').reset();\r\n});\r\n\n\n//# sourceURL=webpack://webpackk/./src/index.js?");

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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;