/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./test/test.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./modules/Option.js":
/*!***************************!*\
  !*** ./modules/Option.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/** Represents an option.\n * @abstract\n * @param {Object} config\n * @property {string} config.name Name of option. (required)\n * @property {*} config.defaultValue (required)\n * @property {string} config.label Text displayed in settings. (required)\n * @property {string} config.helptip Help text shown in settings.\n * @property {Array} config.possibleValues Either [ <value>, .. ] or\n *  [ [ <InternalValue>, <ValueDisplayedInSettings> ], .. ].\n *  Value is validated against possibleValues.\n * @param {string} type Type of option. Should be same as name of extending class minus\n *  Option at the end (e.g \"Color\" for \"ColorOption\" class)\n * @param {...string} basetypes Type(s) to validate against (Defined by extending classes).\n*/\n\nvar Option = function () {\n\tfunction Option(config, type) {\n\t\t_classCallCheck(this, Option);\n\n\t\tthis.name = config.name;\n\t\tthis.defaultValue = config.defaultValue;\n\t\tthis.values = config.values;\n\t\tthis.UIconfig = config.UIconfig || {};\n\t\tthis.label = config.label;\n\t\tthis.help = config.help;\n\t\tthis.type = type;\n\t\tthis.FieldLayout = true;\n\t\tthis.validInput = true;\n\t}\n\n\t_createClass(Option, [{\n\t\tkey: \"reset\",\n\t\tvalue: function reset() {\n\t\t\tthis.customValue = undefined;\n\t\t}\n\n\t\t/**\n   * CreateUI.\n   * @return {OO.ui.element}\n   * //TODO could also be a  mw.widget..how generic can the UI element returned be\n   * prolly create a standard for what functions must be defined by output?\n   * i.e, must satisfy certain portions of OO.ui.element to work\n   * before we can't build the settings menu with it?\n   */\n\n\t}, {\n\t\tkey: \"UI\",\n\t\tvalue: function UI() {\n\t\t\treturn mw.log.error(\"UI not defined by extending class \" + this.type + \"Option.\");\n\t\t}\n\t}, {\n\t\tkey: \"getUIvalue\",\n\t\tvalue: function getUIvalue() {\n\t\t\treturn mw.log.error(\"getUIvalue not defined by extending class \" + this.type + \"Option.\");\n\t\t}\n\n\t\t/**\n   * Return only custom values of option from UI. (called when saving settings. )\n   * @return {*} value\n   */\n\n\t}, {\n\t\tkey: \"getCustomUIValue\",\n\t\tvalue: function getCustomUIValue() {\n\t\t\tvar UIValue = this.getUIvalue();\n\t\t\tif (UIValue !== this.defaultValue) {\n\t\t\t\treturn UIValue;\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: \"value\",\n\t\tget: function get() {\n\t\t\tif (this.customValue !== undefined) {\n\t\t\t\treturn this.customValue;\n\t\t\t} else {\n\t\t\t\treturn this.defaultValue;\n\t\t\t}\n\t\t}\n\t}]);\n\n\treturn Option;\n}();\n\nexports.default = Option;\n\n//# sourceURL=webpack:///./modules/Option.js?");

/***/ }),

/***/ "./modules/Options/BooleanOption.js":
/*!******************************************!*\
  !*** ./modules/Options/BooleanOption.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Option2 = __webpack_require__(/*! Option.js */ \"./modules/Option.js\");\n\nvar _Option3 = _interopRequireDefault(_Option2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/**\n * @extends Option\n */\nvar BooleanOption = function (_Option) {\n\t_inherits(BooleanOption, _Option);\n\n\tfunction BooleanOption(config) {\n\t\t_classCallCheck(this, BooleanOption);\n\n\t\treturn _possibleConstructorReturn(this, (BooleanOption.__proto__ || Object.getPrototypeOf(BooleanOption)).call(this, config, 'Boolean'));\n\t}\n\n\t_createClass(BooleanOption, [{\n\t\tkey: 'UI',\n\t\tvalue: function UI() {\n\t\t\tthis.UIconfig.name = this.name;\n\t\t\tthis.UIconfig.selected = this.value;\n\t\t\tthis.checkbox = new OO.ui.CheckboxInputWidget(this.UIconfig);\n\t\t\treturn new OO.ui.FieldLayout(this.checkbox, {\n\t\t\t\thelp: this.help,\n\t\t\t\tlabel: this.label,\n\t\t\t\thelpInline: this.helpInline,\n\t\t\t\talign: 'inline'\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'getUIvalue',\n\t\tvalue: function getUIvalue() {\n\t\t\treturn this.checkbox.isSelected();\n\t\t}\n\t}]);\n\n\treturn BooleanOption;\n}(_Option3.default);\n\nexports.default = BooleanOption;\n\n//# sourceURL=webpack:///./modules/Options/BooleanOption.js?");

/***/ }),

/***/ "./modules/Options/DateOption.js":
/*!***************************************!*\
  !*** ./modules/Options/DateOption.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Option2 = __webpack_require__(/*! Option.js */ \"./modules/Option.js\");\n\nvar _Option3 = _interopRequireDefault(_Option2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/**\n * Use mw.widgets.DateInputWidget\n * @extends Option\n */\nvar DateOption = function (_Option) {\n  _inherits(DateOption, _Option);\n\n  function DateOption(config) {\n    _classCallCheck(this, DateOption);\n\n    return _possibleConstructorReturn(this, (DateOption.__proto__ || Object.getPrototypeOf(DateOption)).call(this, config, 'Date', 'Date'));\n  }\n\n  return DateOption;\n}(_Option3.default);\n\nexports.default = DateOption;\n\n//# sourceURL=webpack:///./modules/Options/DateOption.js?");

/***/ }),

/***/ "./modules/Options/DropdownOption.js":
/*!*******************************************!*\
  !*** ./modules/Options/DropdownOption.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Option2 = __webpack_require__(/*! Option.js */ \"./modules/Option.js\");\n\nvar _Option3 = _interopRequireDefault(_Option2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/**\n * @extends Option\n */\nvar DropdownOption = function (_Option) {\n\t_inherits(DropdownOption, _Option);\n\n\tfunction DropdownOption(config) {\n\t\t_classCallCheck(this, DropdownOption);\n\n\t\treturn _possibleConstructorReturn(this, (DropdownOption.__proto__ || Object.getPrototypeOf(DropdownOption)).call(this, config, 'Dropdown'));\n\t}\n\n\t_createClass(DropdownOption, [{\n\t\tkey: 'UI',\n\t\tvalue: function UI() {\n\t\t\tvar _this2 = this;\n\n\t\t\tthis.UIconfig.name = this.name;\n\t\t\tthis.values.some(function (element, index) {\n\t\t\t\tif (element.data === _this2.value) {\n\t\t\t\t\t_this2.values.unshift(_this2.values.splice(index, 1)[0]);\n\t\t\t\t\treturn true;\n\t\t\t\t}\n\t\t\t});\n\t\t\tthis.UIconfig.options = this.values;\n\t\t\tthis.dropdownInput = new OO.ui.DropdownInputWidget(this.UIconfig);\n\t\t\treturn new OO.ui.FieldLayout(this.dropdownInput, {\n\t\t\t\ttext: this.label,\n\t\t\t\thelp: this.help,\n\t\t\t\thelpInline: this.helpInline,\n\t\t\t\talign: 'top'\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'getUIvalue',\n\t\tvalue: function getUIvalue() {\n\t\t\treturn this.dropdownInput.getValue();\n\t\t}\n\t}]);\n\n\treturn DropdownOption;\n}(_Option3.default);\n\nexports.default = DropdownOption;\n\n//# sourceURL=webpack:///./modules/Options/DropdownOption.js?");

/***/ }),

/***/ "./modules/Options/NumberOption.js":
/*!*****************************************!*\
  !*** ./modules/Options/NumberOption.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Option2 = __webpack_require__(/*! Option.js */ \"./modules/Option.js\");\n\nvar _Option3 = _interopRequireDefault(_Option2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/**\n * @extends Option\n */\nvar NumberOption = function (_Option) {\n\t_inherits(NumberOption, _Option);\n\n\tfunction NumberOption(config) {\n\t\t_classCallCheck(this, NumberOption);\n\n\t\treturn _possibleConstructorReturn(this, (NumberOption.__proto__ || Object.getPrototypeOf(NumberOption)).call(this, config, 'Number'));\n\t}\n\n\t_createClass(NumberOption, [{\n\t\tkey: 'UI',\n\t\tvalue: function UI() {\n\t\t\tthis.UIconfig.name = this.name;\n\t\t\tthis.UIconfig.classes = ['libSettings-numberInput'];\n\t\t\tthis.UIconfig.value = this.value;\n\t\t\tthis.numberInput = new OO.ui.NumberInputWidget(this.UIconfig);\n\t\t\treturn new OO.ui.FieldLayout(this.numberInput, {\n\t\t\t\ttext: this.label,\n\t\t\t\thelp: this.help,\n\t\t\t\thelpInline: this.helpInline,\n\t\t\t\talign: 'top'\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'getUIvalue',\n\t\tvalue: function getUIvalue() {\n\t\t\treturn this.numberInput.getValue();\n\t\t}\n\t}]);\n\n\treturn NumberOption;\n}(_Option3.default);\n\nexports.default = NumberOption;\n\n//# sourceURL=webpack:///./modules/Options/NumberOption.js?");

/***/ }),

/***/ "./modules/Settings.js":
/*!*****************************!*\
  !*** ./modules/Settings.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _SettingsDialog = __webpack_require__(/*! SettingsDialog.js */ \"./modules/SettingsDialog.js\");\n\nvar _SettingsDialog2 = _interopRequireDefault(_SettingsDialog);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/**\n * @param {Object} settingsConfig\n * @property {string} settingsConfig.scriptName\n * @property {string} [settingsConfig.optionName = scriptName] optionName is the name under which\n * the options are stored using API:Options.( \"userjs-\" is prepended to this ).\n * @property {string} settingsConfig.size Same as https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.Window-static-property-size\n * @property {number} settingsConfig.title\n *\n * @property {Array.<Object>} config.optionsConfig\n * @property {string} config.optionsConfig[].title Header of particular set of preferences\n * @property {(boolean|Function)} [config.optionsConfig[].show] Boolean or function that returns a\n * Boolean. Can use anonymous function when a variable is only loaded after the settings is loaded.\n * @property {...libSettings.Option} config.optionsConfig[].preferences Array of Option objects.\n *\n*/\n\nvar Settings = function (_OO$EventEmitter) {\n\t_inherits(Settings, _OO$EventEmitter);\n\n\tfunction Settings(config) {\n\t\t_classCallCheck(this, Settings);\n\n\t\tvar _this = _possibleConstructorReturn(this, (Settings.__proto__ || Object.getPrototypeOf(Settings)).call(this));\n\n\t\t_this.optionsConfig = config.optionsConfig;\n\t\t_this.scriptName = config.scriptName;\n\t\t_this.optionName = 'userjs-' + (config.optionName || config.scriptName);\n\t\t_this.size = config.size;\n\t\t_this.title = config.title || 'Settings';\n\t\t_this.saveMessage = 'Settings for ' + _this.scriptName + ' successfully saved.';\n\t\t_this.saveFailMessage = 'Could not save settings for ' + _this.scriptName + '.';\n\t\t_this.saveSettings = config.saveSettings !== undefined ? config.saveSettings : true;\n\t\t_this.notifyUponSave = config.notifyUponSave !== undefined ? config.notifyUponSave : _this.saveSettings;\n\t\t_this.userOptions = config.userOptions || {};\n\t\t_this.runOverOptionsConfig(function (option) {\n\t\t\tif (option.helpInline === undefined) {\n\t\t\t\toption.helpInline = config.helpInline;\n\t\t\t}\n\t\t});\n\t\t_this.saveSettingsLabel = config.saveSettingsLabel || 'Save settings';\n\t\t_this.cancelLabel = config.cancelLabel || 'Cancel';\n\t\t_this.showDefaultsLabel = config.showDefaultsLabel || 'Show defaults';\n\n\t\treturn _this;\n\t}\n\n\t/* Traverse through optionsConfig and run the function over each option\n  * @function\n  * @return {Object} */\n\n\n\t_createClass(Settings, [{\n\t\tkey: 'runOverOptionsConfig',\n\t\tvalue: function runOverOptionsConfig(func) {\n\t\t\tthis.optionsConfig.forEach(function (element) {\n\t\t\t\telement.preferences.forEach(function (element2) {\n\t\t\t\t\tif (element2.header) {\n\t\t\t\t\t\telement2.options.forEach(function (option) {\n\t\t\t\t\t\t\treturn func(option);\n\t\t\t\t\t\t});\n\t\t\t\t\t} else {\n\t\t\t\t\t\tfunc(element2);\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'load',\n\t\tvalue: function load() {\n\t\t\tthis.optionsText = mw.user.options.get(this.optionName);\n\t\t\tthis.userOptions = JSON.parse(this.optionsText) || {};\n\t\t}\n\t}, {\n\t\tkey: 'transfer',\n\t\tvalue: function transfer() {\n\t\t\tvar _this2 = this;\n\n\t\t\t// transfer userOptions to optionsConfig\n\t\t\tthis.runOverOptionsConfig(function (option) {\n\t\t\t\tvar userOption = _this2.userOptions[option.name];\n\t\t\t\tif (userOption !== undefined) {\n\t\t\t\t\toption.customValue = userOption;\n\t\t\t\t}\n\t\t\t});\n\n\t\t\t// Then retrieve it, along with default Option as necessary\n\t\t\tthis.options = {};\n\t\t\tthis.runOverOptionsConfig(function (option) {\n\t\t\t\t_this2.options[option.name] = option.value;\n\t\t\t});\n\t\t\treturn this.options;\n\t\t}\n\n\t\t/** Get settings\n   * @func\n   * @return {Object} { [optionName]: [optionValue],...}\n  */\n\n\t}, {\n\t\tkey: 'get',\n\t\tvalue: function get() {\n\t\t\tif (!this.options) {\n\t\t\t\tif (this.saveSettings) {\n\t\t\t\t\tthis.load();\n\t\t\t\t}\n\t\t\t\tthis.transfer();\n\t\t\t}\n\t\t\treturn this.options;\n\t\t}\n\t}, {\n\t\tkey: 'notifySave',\n\t\tvalue: function notifySave(status) {\n\t\t\tif (this.notifyUponSave) {\n\t\t\t\tif (status) {\n\t\t\t\t\tmw.notify(this.saveMessage);\n\t\t\t\t} else {\n\t\t\t\t\tmw.notify(this.saveFailMessage);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t/** Save settings\n   * Only saves unique settings, i.e settings that are different from the default\n   * @returns {Promise}\n   */\n\n\t}, {\n\t\tkey: 'save',\n\t\tvalue: function save() {\n\t\t\tvar _this3 = this;\n\n\t\t\tthis.newUserOptions = {};\n\t\t\tthis.runOverOptionsConfig(function (option) {\n\t\t\t\t_this3.newUserOptions[option.name] = option.getCustomUIValue();\n\t\t\t});\n\n\t\t\tif (this.saveSettings) {\n\t\t\t\treturn mw.loader.using('mediawiki.api').then(function () {\n\t\t\t\t\t_this3.API = new mw.Api({\n\t\t\t\t\t\tajax: {\n\t\t\t\t\t\t\theaders: {\n\t\t\t\t\t\t\t\t'Api-User-Agent': 'Script ' + _this3.scriptName + ' using libSettings.'\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n\t\t\t\t\treturn _this3.API.saveOption(_this3.optionName, JSON.stringify(_this3.newUserOptions)).then(function () {\n\t\t\t\t\t\treturn _this3.notifySave(true);\n\t\t\t\t\t}, function () {\n\t\t\t\t\t\treturn _this3.notifySave(false);\n\t\t\t\t\t});\n\t\t\t\t});\n\t\t\t} else {\n\t\t\t\tthis.notifySave(true);\n\t\t\t\treturn function () {\n\t\t\t\t\treturn _this3.newUserOptions;\n\t\t\t\t};\n\t\t\t}\n\t\t}\n\n\t\t/** Reset optionsConfig\n   * Resets the optionsconfig (but does not save)\n   */\n\n\t}, {\n\t\tkey: 'reset',\n\t\tvalue: function reset() {\n\t\t\tthis.runOverOptionsConfig(function (option) {\n\t\t\t\treturn option.reset();\n\t\t\t});\n\t\t\tthis.options = undefined;\n\t\t}\n\t}, {\n\t\tkey: 'displayMain',\n\t\tvalue: function displayMain() {\n\t\t\tvar SettingsDialog = (0, _SettingsDialog2.default)();\n\t\t\tSettingsDialog.static.name = 'settingsDialog';\n\t\t\tSettingsDialog.static.title = this.title;\n\t\t\tSettingsDialog.static.actions = [{ action: 'save', label: this.saveSettingsLabel, flags: ['primary', 'progressive'] }, { label: this.cancelLabel, flags: ['safe', 'destructive'] }, { action: 'reset', label: this.showDefaultsLabel }];\n\n\t\t\t// Make the window.\n\t\t\tvar settingsDialog = new SettingsDialog({\n\t\t\t\tsize: this.size,\n\t\t\t\tclasses: ['settingsDialog']\n\t\t\t}, this);\n\n\t\t\t// Bindings\n\t\t\tthis.runOverOptionsConfig(function (option) {\n\t\t\t\toption.connect(settingsDialog, {\n\t\t\t\t\tchange: 'changeHandler'\n\t\t\t\t});\n\t\t\t});\n\n\t\t\t// Create and append a window manager\n\t\t\tvar windowManager = new OO.ui.WindowManager();\n\n\t\t\t// eslint-disable-next-line jquery/no-global-selector\n\t\t\t$('body').append(windowManager.$element);\n\n\t\t\twindowManager.addWindows([settingsDialog]);\n\t\t\twindowManager.openWindow(settingsDialog);\n\t\t\treturn settingsDialog;\n\t\t}\n\t}, {\n\t\tkey: 'display',\n\t\tvalue: function display() {\n\t\t\tvar _this4 = this;\n\n\t\t\tthis.get();\n\t\t\tmw.loader.using(['oojs-ui-core', 'oojs-ui-widgets', 'oojs-ui-windows']).then(function () {\n\t\t\t\treturn _this4.displayMain();\n\t\t\t});\n\t\t}\n\t}]);\n\n\treturn Settings;\n}(OO.EventEmitter);\n\nexports.default = Settings;\n\n//# sourceURL=webpack:///./modules/Settings.js?");

/***/ }),

/***/ "./modules/SettingsDialog.js":
/*!***********************************!*\
  !*** ./modules/SettingsDialog.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if (\"value\" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nexports.default = wrapSettingsDialog;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction wrapSettingsDialog() {\n\tvar Page = function (_OO$ui$PageLayout) {\n\t\t_inherits(Page, _OO$ui$PageLayout);\n\n\t\tfunction Page(name, config, element) {\n\t\t\t_classCallCheck(this, Page);\n\n\t\t\tvar _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, name, config));\n\n\t\t\t_this.element = element;\n\t\t\t_this.element.preferences.forEach(function (element2) {\n\t\t\t\tif (element2.header) {\n\t\t\t\t\telement2.UIconfig.label = element2.header;\n\t\t\t\t\tvar fieldset = new OO.ui.FieldsetLayout(element2.UIconfig);\n\t\t\t\t\tvar fieldLayouts = element2.options.map(function (option) {\n\t\t\t\t\t\treturn option.UI();\n\t\t\t\t\t});\n\t\t\t\t\tfieldset.addItems(fieldLayouts);\n\t\t\t\t\t_this.$element.append(fieldset.$element);\n\t\t\t\t} else {\n\t\t\t\t\t_this.$element.append(element2.UI().$element);\n\t\t\t\t}\n\t\t\t});\n\t\t\treturn _this;\n\t\t}\n\n\t\t_createClass(Page, [{\n\t\t\tkey: 'setupOutlineItem',\n\t\t\tvalue: function setupOutlineItem() {\n\t\t\t\tthis.outlineItem.setLabel(this.element.title);\n\t\t\t\tthis.outlineItem.setLevel(this.element.level);\n\t\t\t}\n\t\t}]);\n\n\t\treturn Page;\n\t}(OO.ui.PageLayout);\n\n\tvar SettingsDialog = function (_OO$ui$ProcessDialog) {\n\t\t_inherits(SettingsDialog, _OO$ui$ProcessDialog);\n\n\t\tfunction SettingsDialog(config, self) {\n\t\t\t_classCallCheck(this, SettingsDialog);\n\n\t\t\tvar _this2 = _possibleConstructorReturn(this, (SettingsDialog.__proto__ || Object.getPrototypeOf(SettingsDialog)).call(this, config));\n\n\t\t\t_this2.settings = self;\n\t\t\treturn _this2;\n\t\t}\n\n\t\t_createClass(SettingsDialog, [{\n\t\t\tkey: 'genInternalUI',\n\t\t\tvalue: function genInternalUI() {\n\t\t\t\tvar onePage = this.settings.optionsConfig.length === 1;\n\t\t\t\tvar internalUI = void 0;\n\n\t\t\t\tvar pages = this.settings.optionsConfig.map(function (element) {\n\t\t\t\t\treturn new Page(element.title, { padded: onePage, scrollabe: false }, element);\n\t\t\t\t});\n\n\t\t\t\tif (!onePage) {\n\t\t\t\t\tinternalUI = new OO.ui.BookletLayout({\n\t\t\t\t\t\toutlined: true\n\t\t\t\t\t});\n\n\t\t\t\t\tinternalUI.addPages(pages);\n\t\t\t\t} else {\n\t\t\t\t\tinternalUI = pages[0];\n\t\t\t\t}\n\n\t\t\t\tthis.outerHeight = pages[0].$element.outerHeight(true);\n\n\t\t\t\treturn internalUI;\n\t\t\t}\n\t\t}, {\n\t\t\tkey: 'initialize',\n\t\t\tvalue: function initialize() {\n\t\t\t\t_get(SettingsDialog.prototype.__proto__ || Object.getPrototypeOf(SettingsDialog.prototype), 'initialize', this).call(this);\n\t\t\t\tthis.content = this.genInternalUI();\n\t\t\t\tthis.$body.append(this.content.$element);\n\t\t\t}\n\t\t}, {\n\t\t\tkey: 'setButtonStatus',\n\t\t\tvalue: function setButtonStatus(action, enabled) {\n\t\t\t\tvar abilities = {};\n\t\t\t\tabilities[action] = enabled;\n\t\t\t\tthis.actions.setAbilities(abilities);\n\t\t\t}\n\n\t\t\t/** saveStatus is true\n    * if all inputs are valid\n    * and if user changed\n    * @return {boolean} saveStatus\n    */\n\n\t\t}, {\n\t\t\tkey: 'allowSave',\n\t\t\tvalue: function allowSave() {\n\t\t\t\tvar validInput = true;\n\t\t\t\tvar userChanged = false;\n\t\t\t\tthis.settings.runOverOptionsConfig(function (option) {\n\t\t\t\t\tif (!option.validInput) {\n\t\t\t\t\t\tvalidInput = false;\n\t\t\t\t\t}\n\t\t\t\t\tif (option.getUIvalue() != option.value) {\n\t\t\t\t\t\tuserChanged = true;\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t\tvar saveStatus = validInput && userChanged;\n\t\t\t\treturn saveStatus;\n\t\t\t}\n\t\t}, {\n\t\t\tkey: 'updateSaveButton',\n\t\t\tvalue: function updateSaveButton() {\n\t\t\t\tthis.setButtonStatus('save', allowSave());\n\t\t\t}\n\t\t}, {\n\t\t\tkey: 'getActionProcess',\n\t\t\tvalue: function getActionProcess(action) {\n\t\t\t\tvar _this3 = this;\n\n\t\t\t\tif (action === 'save') {\n\t\t\t\t\treturn new OO.ui.Process(function () {\n\t\t\t\t\t\tvar promise = _this3.settings.save();\n\t\t\t\t\t\t_this3.pushPending();\n\t\t\t\t\t\t_this3.close(promise);\n\t\t\t\t\t});\n\t\t\t\t}\n\n\t\t\t\t/* Disable show defaults button if user settings are default;\n    ** have another button next to show default to 'show your current saved settings' (which is disabled if haven't modified yet )\n    */\n\t\t\t\tif (action === 'reset') {\n\t\t\t\t\treturn new OO.ui.Process(function () {\n\t\t\t\t\t\t_this3.settings.reset();\n\t\t\t\t\t\tvar currentPageName = void 0;\n\t\t\t\t\t\tif (_this3.content.getCurrentPageName) {\n\t\t\t\t\t\t\tcurrentPageName = _this3.content.getCurrentPageName();\n\t\t\t\t\t\t}\n\t\t\t\t\t\t_this3.content = _this3.genInternalUI();\n\t\t\t\t\t\tif (currentPageName) {\n\t\t\t\t\t\t\t_this3.content.setPage(currentPageName);\n\t\t\t\t\t\t}\n\t\t\t\t\t\t_this3.$body.html(_this3.content.$element);\n\t\t\t\t\t});\n\t\t\t\t}\n\n\t\t\t\treturn _get(SettingsDialog.prototype.__proto__ || Object.getPrototypeOf(SettingsDialog.prototype), 'getActionProcess', this).call(this, action);\n\t\t\t}\n\t\t}, {\n\t\t\tkey: 'getHoldProcess',\n\t\t\tvalue: function getHoldProcess(data) {\n\t\t\t\tvar _this4 = this;\n\n\t\t\t\tvar process = _get(SettingsDialog.prototype.__proto__ || Object.getPrototypeOf(SettingsDialog.prototype), 'getHoldProcess', this).call(this, data);\n\t\t\t\tif (data) {\n\t\t\t\t\tprocess.next(data);\n\t\t\t\t\tprocess.next(function () {\n\t\t\t\t\t\treturn _this4.popPending();\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t\treturn process;\n\t\t\t}\n\t\t}, {\n\t\t\tkey: 'getBodyHeight',\n\t\t\tvalue: function getBodyHeight() {\n\t\t\t\treturn this.content.$element.outerWidth(true) * 1 / 1.61803398875; // golden ratio\n\t\t\t}\n\t\t}]);\n\n\t\treturn SettingsDialog;\n\t}(OO.ui.ProcessDialog);\n\n\treturn SettingsDialog;\n}\n\n//# sourceURL=webpack:///./modules/SettingsDialog.js?");

/***/ }),

/***/ "./modules/css.js":
/*!************************!*\
  !*** ./modules/css.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmw.util.addCSS(\".libSettings-numberInput {\\n\\t\\tmax-width: 15em\\n\\t}\");\n\n//# sourceURL=webpack:///./modules/css.js?");

/***/ }),

/***/ "./modules/index.js":
/*!**************************!*\
  !*** ./modules/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! css.js */ \"./modules/css.js\");\n\nvar _Option = __webpack_require__(/*! Option.js */ \"./modules/Option.js\");\n\nvar _Option2 = _interopRequireDefault(_Option);\n\nvar _Settings = __webpack_require__(/*! Settings.js */ \"./modules/Settings.js\");\n\nvar _Settings2 = _interopRequireDefault(_Settings);\n\nvar _BooleanOption = __webpack_require__(/*! Options/BooleanOption.js */ \"./modules/Options/BooleanOption.js\");\n\nvar _BooleanOption2 = _interopRequireDefault(_BooleanOption);\n\nvar _DateOption = __webpack_require__(/*! Options/DateOption.js */ \"./modules/Options/DateOption.js\");\n\nvar _DateOption2 = _interopRequireDefault(_DateOption);\n\nvar _NumberOption = __webpack_require__(/*! Options/NumberOption.js */ \"./modules/Options/NumberOption.js\");\n\nvar _NumberOption2 = _interopRequireDefault(_NumberOption);\n\nvar _DropdownOption = __webpack_require__(/*! Options/DropdownOption.js */ \"./modules/Options/DropdownOption.js\");\n\nvar _DropdownOption2 = _interopRequireDefault(_DropdownOption);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmw.libs.libSettings = {};\nmw.libs.libSettings.Option = _Option2.default;\nmw.libs.libSettings.Settings = _Settings2.default;\nmw.libs.libSettings.BooleanOption = _BooleanOption2.default;\nmw.libs.libSettings.DateOption = _DateOption2.default;\nmw.libs.libSettings.NumberOption = _NumberOption2.default;\nmw.libs.libSettings.DropdownOption = _DropdownOption2.default;\n\n//# sourceURL=webpack:///./modules/index.js?");

/***/ }),

/***/ "./test/test.js":
/*!**********************!*\
  !*** ./test/test.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ../modules/index.js */ \"./modules/index.js\");\n\nvar BooleanOption = mw.libs.libSettings.BooleanOption;\nvar NumberOption = mw.libs.libSettings.NumberOption;\nvar DropdownOption = mw.libs.libSettings.DropdownOption;\nvar optionsConfig = [{\n\ttitle: 'Main',\n\tpreferences: [new NumberOption({\n\t\tname: 'InputWidth',\n\t\tlabel: 'Width of editing input (em)',\n\t\thelptip: 'worth a damn',\n\t\tdefaultValue: 35,\n\t\tUIconfig: {\n\t\t\tmin: 20,\n\t\t\tmax: 800\n\t\t}\n\t}), {\n\t\theader: 'checkboxes',\n\t\toptions: [new BooleanOption({\n\t\t\tname: 'AddToRedirect',\n\t\t\tlabel: 'Allow additions to redirects',\n\t\t\thelp: 'When checked, redirects will have ',\n\t\t\tdefaultValue: true\n\t\t}), new BooleanOption({\n\t\t\tname: 'AddWikidata',\n\t\t\tlabel: 'Upload to wikidata when adding a short description.',\n\t\t\thelp: 'When checked.. ',\n\t\t\tdefaultValue: true\n\t\t})],\n\t\tUIconfig: {\n\t\t\thelp: ''\n\t\t}\n\t}, new DropdownOption({\n\t\tname: 'SaveWikidata',\n\t\tlabel: 'Save changes to Wikidata',\n\t\thelp: 'foooooo',\n\t\tdefaultValue: 'add',\n\t\tvalues: [{ data: 'add', label: 'Only on additions (default)' }, { data: 'all', label: 'On all changes' }, { data: 'never', label: 'Never' }]\n\t})]\n}, /*\n   {\n   title: 'Semi-automated options',\n   show: HasAWBAccess\n   },\n   */\n{\n\ttitle: 'Advanced',\n\tlevel: 1,\n\tpreferences: [new BooleanOption({\n\t\tname: 'ClashFix',\n\t\tlabel: 'Disable css used to prevent content jump.',\n\t\thelp: \"You'd want to this if you have another script that clashes with this one, such as User:Yair_rand/WikidataInfo.js.\",\n\t\tdefaultValue: false\n\t})]\n}];\n\nvar settings = new mw.libs.libSettings.Settings({\n\tscriptName: 'test',\n\tsize: 'large',\n\thelpInline: true,\n\toptionsConfig: optionsConfig\n});\n\nsettings.display();\n\n//# sourceURL=webpack:///./test/test.js?");

/***/ })

/******/ });