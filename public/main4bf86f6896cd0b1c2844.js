/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://imtihon/./src/css/main.css?");

/***/ }),

/***/ "./src/js/loader.js":
/*!**************************!*\
  !*** ./src/js/loader.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loaderEl = document.querySelector(\".wrapperrrrrrrr\");\r\nconst loaderToggle = (info) => {\r\n    if (info) {\r\n        loaderEl.classList.remove(\"hidden\");\r\n    } else {\r\n        loaderEl.classList.add(\"hidden\");\r\n    }\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loaderToggle);\n\n//# sourceURL=webpack://imtihon/./src/js/loader.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _js_mode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/mode */ \"./src/js/mode.js\");\n/* harmony import */ var _js_mode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_mode__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/request */ \"./src/js/request.js\");\n/* harmony import */ var _js_response__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./response */ \"./src/js/response.js\");\n/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader */ \"./src/js/loader.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst cardsEl = document.querySelector(\"#response__item\");\r\n\r\nconst word = document.getElementById(\"search\");\r\nconst form = document.querySelector(\"#form\");\r\nconst eror = document.querySelector(\".eror\");\r\nform.addEventListener(\"submit\", (e) => {\r\n  e.preventDefault();\r\n  const API = `https://api.dictionaryapi.dev/api/v2/entries/en/${word.value}`;\r\n  (0,_js_request__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(API)\r\n    .then((data) => {\r\n      (0,_js_response__WEBPACK_IMPORTED_MODULE_3__.createResponse)(data);\r\n      // console.log(data);\r\n    })\r\n    .catch((err) => {\r\n      if (err) {\r\n        (0,_loader__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(false);\r\n        cardsEl.innerHTML = `\r\n        <div class=\"eror_sticer\">\r\n        <div class=\"sticer container\">\r\n\r\n            <span class=\"sticerr\">\r\n                😕\r\n            </span>\r\n            <span class=\"sticerr__text\">\r\n                No Definitions Found\r\n            </span>\r\n            <span class=\"sticerr__text_desc\">\r\n                Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.\r\n\r\n            </span>\r\n\r\n        </div>\r\n    </div>\r\n        `;\r\n        if (word.value == \"\" || word.value == \" \") {\r\n          cardsEl.innerHTML = \"\";\r\n          (0,_loader__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(false);\r\n          eror.classList.remove(\"hidden\");\r\n        }\r\n      }\r\n    });\r\n});\r\nlet option = document.querySelector(\"#font\");\r\noption.addEventListener(\"change\", (e) => {\r\n  e.preventDefault();\r\n  let val = option.value;\r\n  console.log(val);\r\n  document.body.style.fontFamily = val;\r\n  option.style.fontFamily = val;\r\n  word.style.fontFamily = val;\r\n});\r\n\n\n//# sourceURL=webpack://imtihon/./src/js/main.js?");

/***/ }),

/***/ "./src/js/mode.js":
/*!************************!*\
  !*** ./src/js/mode.js ***!
  \************************/
/***/ (() => {

eval("// const checkbox = document.getElementById(\"checkbox\");\r\n// const font = document.getElementById(\"font\");\r\n// const modeLocal = localStorage.getItem(\"mode\");\r\n\r\n// checkbox.addEventListener(\"change\", () => {\r\n//     localStorage.setItem(\"mode\", \"dark\");\r\n//     if (modeLocal) {\r\n//         document.body.classList.toggle(modeLocal);\r\n// font.classList.toggle(modeLocal);\r\n//     } else {\r\n//         localStorage.getItem(\"mode\", \"\");\r\n\r\n//     }\r\n// });\r\n\r\nconst body = document.querySelector(\"body\");\r\nconst darkBtn = document.querySelector(\".header__dark-mode\");\r\nconst lightBtn = document.querySelector(\".header__light-mode\");\r\nconst modeLocal = localStorage.getItem(\"mode\");\r\nif (modeLocal) {\r\n  body.classList.add(\"dark\");\r\n  darkBtn.classList.toggle(\"hidden\");\r\n  lightBtn.classList.toggle(\"hidden\");\r\n  font.classList.toggle(\"dark\");\r\n}\r\nconst toggleModeBtn = () => {\r\n  darkBtn.classList.toggle(\"hidden\");\r\n  lightBtn.classList.toggle(\"hidden\");\r\n  body.classList.toggle(\"dark\");\r\n  font.classList.toggle(\"dark\");\r\n};\r\n\r\ndarkBtn.addEventListener(\"click\", () => {\r\n  toggleModeBtn();\r\n  localStorage.setItem(\"mode\", \"dark\");\r\n});\r\n\r\nlightBtn.addEventListener(\"click\", () => {\r\n  toggleModeBtn();\r\n  localStorage.setItem(\"mode\", \"\");\r\n});\r\n\n\n//# sourceURL=webpack://imtihon/./src/js/mode.js?");

/***/ }),

/***/ "./src/js/request.js":
/*!***************************!*\
  !*** ./src/js/request.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader */ \"./src/js/loader.js\");\n\r\n\r\nconst requst = async (resurce) => {\r\n  (0,_loader__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(true);\r\n\r\n  const req = await fetch(resurce);\r\n  if (!req.ok) {\r\n    throw new Error(\"Something went wrong :(\");\r\n  }\r\n  const data = await req.json();\r\n  (0,_loader__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(false);\r\n\r\n  return data;\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (requst);\r\n\n\n//# sourceURL=webpack://imtihon/./src/js/request.js?");

/***/ }),

/***/ "./src/js/response.js":
/*!****************************!*\
  !*** ./src/js/response.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createResponse\": () => (/* binding */ createResponse)\n/* harmony export */ });\nconst cardsEl = document.querySelector(\"#response__item\");\r\n\r\nconst createResponse = (items) => {\r\n    items.forEach((item) => {\r\n        const name = item.word;\r\n        const spech = item.phonetics[1].text;\r\n        const link = item.phonetics[1].audio;\r\n        const noun = item.meanings[0].partOfSpeech;\r\n        const def = item.meanings[2].definitions[0].definition;\r\n        const def1 = item.meanings[2].definitions[1].definition;\r\n        const def2 = item.meanings[2].definitions[2].definition;\r\n        const synonum = item.meanings[0].synonyms;\r\n        const verb = item.meanings[1].partOfSpeech;\r\n        const vdef = item.meanings[1].definitions[0].definition;\r\n        const vdef1 = item.meanings[2].definitions[4].definition;\r\n        const sourceUrls = item.sourceUrls;\r\n\r\n        cardsEl.innerHTML = `\r\n        <div class=\"response__item-header\">\r\n        <div class=\"response_play\">\r\n            <h1 class=\"response__word\">${name}</h1>\r\n            <button id=\"play\" class=\"play\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"75\" height=\"75\" viewBox=\"0 0 75 75\" class=\"playSvg\"><g fill=\"#A445ED\" fill-rule=\"evenodd\"><circle class=\"s\"  cx=\"37.5\" cy=\"37.5\" r=\"37.5\" /><path d=\"M29 27v21l21-10.5z\" /></g></svg>\r\n            </button>\r\n        </div>\r\n        <div class=\"read\">\r\n          ${spech}\r\n        </div>\r\n    </div>\r\n    <div class=\"response__item-body\">\r\n        <div class=\"response__item__body_wrapper\">\r\n            <h3 class=\"response__item-title\">${noun}</h3>\r\n            <hr class=\"linee\">\r\n        </div>\r\n        <ul class=\"description\">Meaning\r\n            <li class=\"description1 descriptionn\">\r\n               ${def}\r\n            </li>\r\n            <li class=\"description2 descriptionn\">\r\n              ${def1}\r\n            </li>\r\n            <li class=\"description3 descriptionn\">\r\n              ${def2}\r\n            </li>\r\n        </ul>\r\n        <div class=\"synonum\">\r\n            <p class=\"synonum_title\">Synonyms</p>\r\n            <p class=\"synonum_response\">${synonum}</p>\r\n        </div>\r\n    \r\n    \r\n    \r\n        <ul class=\"verb\">\r\n            <div class=\"response__item__body_wrapper\">\r\n                <h3 class=\"response__item-title\">${verb}</h3>\r\n                <hr class=\"linee\">\r\n            </div>\r\n            <li class=\"verb1\">\r\n               ${vdef}\r\n                <p class=\"verb_response\">\r\n${vdef1}\r\n                </p>\r\n            </li>\r\n    \r\n        </ul>\r\n        <hr>\r\n    \r\n        <div class=\"body__footer\">\r\n    \r\n            <div class=\"source\">Source</div>\r\n            <a class=\"wikpedia\" target=\"blank\" href=${sourceUrls}>${sourceUrls}<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 14 14\"><path fill=\"none\" stroke=\"#838383\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5\"/></svg></a>\r\n        </div>\r\n    </div>\r\n        `;\r\n\r\n\r\n        console.log(item);\r\n        const play = document.getElementById(\"play\");\r\n        play.addEventListener(\"click\", (e) => {\r\n            e.preventDefault();\r\n            const crash = new Audio(`${link}`);\r\n            crash.play();\r\n        });\r\n    });\r\n};\r\n\r\n// console.log(1);\n\n//# sourceURL=webpack://imtihon/./src/js/response.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;