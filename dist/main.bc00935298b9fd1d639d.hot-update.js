"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_3DGlo"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_countTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/countTimer */ \"./src/modules/countTimer.js\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/togglePopUp */ \"./src/modules/togglePopUp.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_valide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/valide */ \"./src/modules/valide.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n\n\n\n\n\n\n\n //Timer\n\n(0,_modules_countTimer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('10 september 2021'); //menu\n\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); //popup\n\n(0,_modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(); //табы\n\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(); //пишем слайдер\n\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(); //валидация\n\n(0,_modules_valide__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(); //калькулятор\n\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(100); //send-ajax-form\n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n\n//# sourceURL=webpack://3DGlo/./src/index.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar sendForm = function sendForm() {\n  var errorMessage = 'Что то пошло не так...',\n      loadMessage = 'Загрузка...',\n      successMessage = 'Спасибо! Мы скоро с Вами свяжемся!';\n  var forms = document.querySelectorAll('form');\n  var statusMessage = document.createElement('div');\n  statusMessage.style.cssText = 'font-size: 2rem; color: white';\n\n  var postData = function postData(formData) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(formData),\n      credentials: 'include'\n    });\n    forms.forEach(function (item) {\n      item.addEventListener('submit', function (event) {\n        event.preventDefault();\n        item.appendChild(statusMessage);\n        statusMessage.textContent = loadMessage;\n        var formData = new FormData(item);\n        postData(formData).then(function (response) {\n          if (response.status !== 200) {\n            throw new Error('status network not 200');\n          }\n\n          statusMessage.textContent = successMessage;\n        })[\"catch\"](function (error) {\n          statusMessage.textContent = errorMessage;\n          console.error(error);\n        });\n\n        _toConsumableArray(item).forEach(function (input) {\n          input.value = '';\n        });\n      });\n    });\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://3DGlo/./src/modules/sendForm.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c8bfbca29bfd036fe6dd")
/******/ })();
/******/ 
/******/ }
);