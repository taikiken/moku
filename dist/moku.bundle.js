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
/******/ 	__webpack_require__.p = "/assets/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/moku.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_advance-string-index.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_advance-string-index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-fill.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_array-fill.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.4' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_create-property.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_create-property.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails-is-regexp.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_fails-is-regexp.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! ./es6.regexp.exec */ "./node_modules/core-js/modules/es6.regexp.exec.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_flags.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var setPrototypeOf = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-regexp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-sap.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-sap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec-abstract.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/modules/_same-value.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_same-value.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_species-constructor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-context.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-context.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-trim.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-trim.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var spaces = __webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "./node_modules/core-js/modules/_string-ws.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-ws.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-define.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-ext.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.fill.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.fill.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'Array', { fill: __webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js") });

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('fill');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.from.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.from.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.constructor.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f;
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var $trim = __webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(global, NUMBER, $Number);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-integer.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-integer.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { isInteger: __webpack_require__(/*! ./_is-integer */ "./node_modules/core-js/modules/_is-integer.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-nan.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-nan.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.assign.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.assign.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.set-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.set-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.constructor.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && (!CORRECT_NEW || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  re2[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(global, 'RegExp', $RegExp);
}

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")('RegExp');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.exec.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.exec.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.flags.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && /./g.flags != 'g') __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js")
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.match.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.match.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");

// @@match logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.replace.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.replace.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.search.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.search.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var sameValue = __webpack_require__(/*! ./_same-value */ "./node_modules/core-js/modules/_same-value.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");

// @@search logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative($search, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.split.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var callRegExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! ./es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.includes.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.includes.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.iterator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.includes.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $includes = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('includes');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/promise-polyfill/src/finally.js":
/*!******************************************************!*\
  !*** ./node_modules/promise-polyfill/src/finally.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @this {Promise}
 */
function finallyConstructor(callback) {
  var constructor = this.constructor;
  return this.then(
    function(value) {
      return constructor.resolve(callback()).then(function() {
        return value;
      });
    },
    function(reason) {
      return constructor.resolve(callback()).then(function() {
        return constructor.reject(reason);
      });
    }
  );
}

/* harmony default export */ __webpack_exports__["default"] = (finallyConstructor);


/***/ }),

/***/ "./node_modules/promise-polyfill/src/index.js":
/*!****************************************************!*\
  !*** ./node_modules/promise-polyfill/src/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(setImmediate) {/* harmony import */ var _finally__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./finally */ "./node_modules/promise-polyfill/src/finally.js");


// Store setTimeout reference so promise-polyfill will be unaffected by
// other code modifying setTimeout (like sinon.useFakeTimers())
var setTimeoutFunc = setTimeout;

function noop() {}

// Polyfill for Function.prototype.bind
function bind(fn, thisArg) {
  return function() {
    fn.apply(thisArg, arguments);
  };
}

/**
 * @constructor
 * @param {Function} fn
 */
function Promise(fn) {
  if (!(this instanceof Promise))
    throw new TypeError('Promises must be constructed via new');
  if (typeof fn !== 'function') throw new TypeError('not a function');
  /** @type {!number} */
  this._state = 0;
  /** @type {!boolean} */
  this._handled = false;
  /** @type {Promise|undefined} */
  this._value = undefined;
  /** @type {!Array<!Function>} */
  this._deferreds = [];

  doResolve(fn, this);
}

function handle(self, deferred) {
  while (self._state === 3) {
    self = self._value;
  }
  if (self._state === 0) {
    self._deferreds.push(deferred);
    return;
  }
  self._handled = true;
  Promise._immediateFn(function() {
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
      return;
    }
    var ret;
    try {
      ret = cb(self._value);
    } catch (e) {
      reject(deferred.promise, e);
      return;
    }
    resolve(deferred.promise, ret);
  });
}

function resolve(self, newValue) {
  try {
    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    if (newValue === self)
      throw new TypeError('A promise cannot be resolved with itself.');
    if (
      newValue &&
      (typeof newValue === 'object' || typeof newValue === 'function')
    ) {
      var then = newValue.then;
      if (newValue instanceof Promise) {
        self._state = 3;
        self._value = newValue;
        finale(self);
        return;
      } else if (typeof then === 'function') {
        doResolve(bind(then, newValue), self);
        return;
      }
    }
    self._state = 1;
    self._value = newValue;
    finale(self);
  } catch (e) {
    reject(self, e);
  }
}

function reject(self, newValue) {
  self._state = 2;
  self._value = newValue;
  finale(self);
}

function finale(self) {
  if (self._state === 2 && self._deferreds.length === 0) {
    Promise._immediateFn(function() {
      if (!self._handled) {
        Promise._unhandledRejectionFn(self._value);
      }
    });
  }

  for (var i = 0, len = self._deferreds.length; i < len; i++) {
    handle(self, self._deferreds[i]);
  }
  self._deferreds = null;
}

/**
 * @constructor
 */
function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, self) {
  var done = false;
  try {
    fn(
      function(value) {
        if (done) return;
        done = true;
        resolve(self, value);
      },
      function(reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      }
    );
  } catch (ex) {
    if (done) return;
    done = true;
    reject(self, ex);
  }
}

Promise.prototype['catch'] = function(onRejected) {
  return this.then(null, onRejected);
};

Promise.prototype.then = function(onFulfilled, onRejected) {
  // @ts-ignore
  var prom = new this.constructor(noop);

  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
};

Promise.prototype['finally'] = _finally__WEBPACK_IMPORTED_MODULE_0__["default"];

Promise.all = function(arr) {
  return new Promise(function(resolve, reject) {
    if (!arr || typeof arr.length === 'undefined')
      throw new TypeError('Promise.all accepts an array');
    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      try {
        if (val && (typeof val === 'object' || typeof val === 'function')) {
          var then = val.then;
          if (typeof then === 'function') {
            then.call(
              val,
              function(val) {
                res(i, val);
              },
              reject
            );
            return;
          }
        }
        args[i] = val;
        if (--remaining === 0) {
          resolve(args);
        }
      } catch (ex) {
        reject(ex);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.resolve = function(value) {
  if (value && typeof value === 'object' && value.constructor === Promise) {
    return value;
  }

  return new Promise(function(resolve) {
    resolve(value);
  });
};

Promise.reject = function(value) {
  return new Promise(function(resolve, reject) {
    reject(value);
  });
};

Promise.race = function(values) {
  return new Promise(function(resolve, reject) {
    for (var i = 0, len = values.length; i < len; i++) {
      values[i].then(resolve, reject);
    }
  });
};

// Use polyfill for setImmediate for performance gains
Promise._immediateFn =
  (typeof setImmediate === 'function' &&
    function(fn) {
      setImmediate(fn);
    }) ||
  function(fn) {
    setTimeoutFunc(fn, 0);
  };

Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
  if (typeof console !== 'undefined' && console) {
    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Promise);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/whatwg-fetch/fetch.js":
/*!********************************************!*\
  !*** ./node_modules/whatwg-fetch/fetch.js ***!
  \********************************************/
/*! exports provided: Headers, Request, Response, DOMException, fetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMException", function() { return DOMException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
var support = {
  searchParams: 'URLSearchParams' in self,
  iterable: 'Symbol' in self && 'iterator' in Symbol,
  blob:
    'FileReader' in self &&
    'Blob' in self &&
    (function() {
      try {
        new Blob()
        return true
      } catch (e) {
        return false
      }
    })(),
  formData: 'FormData' in self,
  arrayBuffer: 'ArrayBuffer' in self
}

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj)
}

if (support.arrayBuffer) {
  var viewClasses = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]'
  ]

  var isArrayBufferView =
    ArrayBuffer.isView ||
    function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name)
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
    throw new TypeError('Invalid character in header field name')
  }
  return name.toLowerCase()
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value)
  }
  return value
}

// Build a destructive iterator for the value list
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift()
      return {done: value === undefined, value: value}
    }
  }

  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator
    }
  }

  return iterator
}

function Headers(headers) {
  this.map = {}

  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value)
    }, this)
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      this.append(header[0], header[1])
    }, this)
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name])
    }, this)
  }
}

Headers.prototype.append = function(name, value) {
  name = normalizeName(name)
  value = normalizeValue(value)
  var oldValue = this.map[name]
  this.map[name] = oldValue ? oldValue + ', ' + value : value
}

Headers.prototype['delete'] = function(name) {
  delete this.map[normalizeName(name)]
}

Headers.prototype.get = function(name) {
  name = normalizeName(name)
  return this.has(name) ? this.map[name] : null
}

Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name))
}

Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue(value)
}

Headers.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this)
    }
  }
}

Headers.prototype.keys = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push(name)
  })
  return iteratorFor(items)
}

Headers.prototype.values = function() {
  var items = []
  this.forEach(function(value) {
    items.push(value)
  })
  return iteratorFor(items)
}

Headers.prototype.entries = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push([name, value])
  })
  return iteratorFor(items)
}

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'))
  }
  body.bodyUsed = true
}

function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result)
    }
    reader.onerror = function() {
      reject(reader.error)
    }
  })
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsArrayBuffer(blob)
  return promise
}

function readBlobAsText(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsText(blob)
  return promise
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf)
  var chars = new Array(view.length)

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i])
  }
  return chars.join('')
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0)
  } else {
    var view = new Uint8Array(buf.byteLength)
    view.set(new Uint8Array(buf))
    return view.buffer
  }
}

function Body() {
  this.bodyUsed = false

  this._initBody = function(body) {
    this._bodyInit = body
    if (!body) {
      this._bodyText = ''
    } else if (typeof body === 'string') {
      this._bodyText = body
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString()
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer)
      // IE 10-11 can't handle a DataView body.
      this._bodyInit = new Blob([this._bodyArrayBuffer])
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body)
    } else {
      this._bodyText = body = Object.prototype.toString.call(body)
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8')
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type)
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
      }
    }
  }

  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob')
      } else {
        return Promise.resolve(new Blob([this._bodyText]))
      }
    }

    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
      } else {
        return this.blob().then(readBlobAsArrayBuffer)
      }
    }
  }

  this.text = function() {
    var rejected = consumed(this)
    if (rejected) {
      return rejected
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob)
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text')
    } else {
      return Promise.resolve(this._bodyText)
    }
  }

  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode)
    }
  }

  this.json = function() {
    return this.text().then(JSON.parse)
  }

  return this
}

// HTTP methods whose capitalization should be normalized
var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

function normalizeMethod(method) {
  var upcased = method.toUpperCase()
  return methods.indexOf(upcased) > -1 ? upcased : method
}

function Request(input, options) {
  options = options || {}
  var body = options.body

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read')
    }
    this.url = input.url
    this.credentials = input.credentials
    if (!options.headers) {
      this.headers = new Headers(input.headers)
    }
    this.method = input.method
    this.mode = input.mode
    this.signal = input.signal
    if (!body && input._bodyInit != null) {
      body = input._bodyInit
      input.bodyUsed = true
    }
  } else {
    this.url = String(input)
  }

  this.credentials = options.credentials || this.credentials || 'same-origin'
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers)
  }
  this.method = normalizeMethod(options.method || this.method || 'GET')
  this.mode = options.mode || this.mode || null
  this.signal = options.signal || this.signal
  this.referrer = null

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests')
  }
  this._initBody(body)
}

Request.prototype.clone = function() {
  return new Request(this, {body: this._bodyInit})
}

function decode(body) {
  var form = new FormData()
  body
    .trim()
    .split('&')
    .forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
  return form
}

function parseHeaders(rawHeaders) {
  var headers = new Headers()
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
  preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
    var parts = line.split(':')
    var key = parts.shift().trim()
    if (key) {
      var value = parts.join(':').trim()
      headers.append(key, value)
    }
  })
  return headers
}

Body.call(Request.prototype)

function Response(bodyInit, options) {
  if (!options) {
    options = {}
  }

  this.type = 'default'
  this.status = options.status === undefined ? 200 : options.status
  this.ok = this.status >= 200 && this.status < 300
  this.statusText = 'statusText' in options ? options.statusText : 'OK'
  this.headers = new Headers(options.headers)
  this.url = options.url || ''
  this._initBody(bodyInit)
}

Body.call(Response.prototype)

Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  })
}

Response.error = function() {
  var response = new Response(null, {status: 0, statusText: ''})
  response.type = 'error'
  return response
}

var redirectStatuses = [301, 302, 303, 307, 308]

Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code')
  }

  return new Response(null, {status: status, headers: {location: url}})
}

var DOMException = self.DOMException
try {
  new DOMException()
} catch (err) {
  DOMException = function(message, name) {
    this.message = message
    this.name = name
    var error = Error(message)
    this.stack = error.stack
  }
  DOMException.prototype = Object.create(Error.prototype)
  DOMException.prototype.constructor = DOMException
}

function fetch(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new Request(input, init)

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'))
    }

    var xhr = new XMLHttpRequest()

    function abortXhr() {
      xhr.abort()
    }

    xhr.onload = function() {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      }
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
      var body = 'response' in xhr ? xhr.response : xhr.responseText
      resolve(new Response(body, options))
    }

    xhr.onerror = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.ontimeout = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.onabort = function() {
      reject(new DOMException('Aborted', 'AbortError'))
    }

    xhr.open(request.method, request.url, true)

    if (request.credentials === 'include') {
      xhr.withCredentials = true
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false
    }

    if ('responseType' in xhr && support.blob) {
      xhr.responseType = 'blob'
    }

    request.headers.forEach(function(value, name) {
      xhr.setRequestHeader(name, value)
    })

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr)

      xhr.onreadystatechange = function() {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr)
        }
      }
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
  })
}

fetch.polyfill = true

if (!self.fetch) {
  self.fetch = fetch
  self.Headers = Headers
  self.Request = Request
  self.Response = Response
}


/***/ }),

/***/ "./src/css/Patterns.js":
/*!*****************************!*\
  !*** ./src/css/Patterns.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Patterns; });
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/Text */ "./src/util/Text.js");




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Copyright (c) 2011-2016 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/11/22 - 13:26
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

/**
 * CSS short hand pattern を管理します
 */

var Patterns =
/*#__PURE__*/
function () {
  function Patterns() {
    _classCallCheck(this, Patterns);
  }

  _createClass(Patterns, null, [{
    key: "settings",

    /**
     * パターン調査対象の CSS class リスト
     * ```
     * {
     *  padding: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
     *  margin: ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'],
     *  'border-color': [
     *    'borderTopColor',
     *    'borderRightColor',
     *    'borderBottomColor',
     *    'borderLeftColor'],
     *  'border-style': [
     *    'borderTopStyle',
     *    'borderRightStyle',
     *    'borderBottomStyle',
     *    'borderLeftStyle'],
     *  'border-width': [
     *    'borderTopWidth',
     *    'borderRightWidth',
     *    'borderBottomWidth',
     *    'borderLeftWidth'],
     * }
     * ```
     * @returns {Object} パターン調査対象の CSS class list
     */
    value: function settings() {
      return {
        padding: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
        margin: ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'],
        'border-color': ['borderTopColor', 'borderRightColor', 'borderBottomColor', 'borderLeftColor'],
        'border-style': ['borderTopStyle', 'borderRightStyle', 'borderBottomStyle', 'borderLeftStyle'],
        'border-width': ['borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth']
      };
    }
    /**
     * 引数 `str` が調査対象 className かを判定します
     * @param {string} str CSS className
     * @returns {boolean} 調査対象の時に true を返します
     */

  }, {
    key: "match",
    value: function match(str) {
      // camel case を dash(hyphenation)へ変換します
      var key = _util_Text__WEBPACK_IMPORTED_MODULE_3__["default"].dash(str); // settings パターンキーと合致してるかを調査します

      return Object.keys(Patterns.settings()).indexOf(key) !== -1;
    }
    /**
     * 引数 `str` をキーにした操作対象のリストを取得します
     * @param {string} str CSS className
     * @returns {Array<string>|undefined} 引数 `str` をキーにした操作対象のリスト
     */

  }, {
    key: "get",
    value: function get(str) {
      // camel case を dash(hyphenation)へ変換します
      var key = _util_Text__WEBPACK_IMPORTED_MODULE_3__["default"].dash(str);
      return Patterns.settings()[key];
    }
  }]);

  return Patterns;
}();



/***/ }),

/***/ "./src/css/Style.js":
/*!**************************!*\
  !*** ./src/css/Style.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Style; });
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_Type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/Type */ "./src/util/Type.js");
/* harmony import */ var _util_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/Text */ "./src/util/Text.js");
/* harmony import */ var _Patterns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Patterns */ "./src/css/Patterns.js");



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Copyright (c) 2011-2016 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/10/06 - 21:52
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */
// util

 // css


/**
 * Element の style を操作します
 */

var Style =
/*#__PURE__*/
function () {
  _createClass(Style, null, [{
    key: "compute",
    // ----------------------------------------
    // STATIC METHOD
    // ----------------------------------------

    /**
     * element style を取得します,
     * [getComputedStyle](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle) を使用します
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
     * @param {Object|Window} view Document.defaultView
     * @param {Element} element 操作対象 Element
     * @param {string} [property=''] 調査対象 CSS property name, 省略すると `CSSStyleDeclaration` 全セットを返します
     * @returns {CSSStyleDeclaration|CssStyle|string|undefined} style value を返します
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/defaultView
     */
    value: function compute(view, element) {
      var property = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var style = view.getComputedStyle(element, null);

      if (_util_Type__WEBPACK_IMPORTED_MODULE_2__["default"].exist(property)) {
        var props = property.replace(/([A-Z])/g, '-$1').toLowerCase();
        return style.getPropertyValue(props);
      }

      return style;
    }
    /**
     * CSS 設定値の short hand をパターン {@link Patterns} から探し返します
     * @param {Object|Window} view Document.defaultView
     * @param {Element} element 操作対象 Element
     * @param {Array<string>} patterns 調査対象 CSS property name の配列
     * @returns {*|string|undefined} style value を返します
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/defaultView
     */

  }, {
    key: "shortHand",
    value: function shortHand(view, element, patterns) {
      var top = Style.compute(view, element, patterns[0]);
      var right = Style.compute(view, element, patterns[1]);
      var bottom = Style.compute(view, element, patterns[2]);
      var left = Style.compute(view, element, patterns[3]);

      if (!top && !right && !bottom && !left) {
        return undefined;
      } // top / bottom ...


      if (top === bottom) {
        // top - bottom: same
        if (right === left) {
          // top - bottom: same
          if (top === right) {
            // right - left: same - all same
            return top;
          } // top-bottom, left-right


          return "".concat(top, " ").concat(right);
        } // separate 4


        return "".concat(top, " ").concat(right, " ").concat(bottom, " ").concat(left);
      } // right / left


      if (right === left) {
        // top - bottom: different, left- right: same
        return "".concat(top, " ").concat(right, " ").concat(bottom);
      } // separate 4


      return "".concat(top, " ").concat(right, " ").concat(bottom, " ").concat(left);
    }
    /**
     * 引数 `element` の css を書き換えます
     * @param {Element} element 操作対象 Element
     * @param {string} css `cssText` 設定する
     */

  }, {
    key: "change",
    value: function change(element, css) {
      var style = element.style;
      style.cssText = css;
    } // ----------------------------------------
    // CONSTRUCTOR
    // ----------------------------------------

    /**
     * 引数 element の初期 style 設定を保存し復元できるようにします
     * @param {?Element} element 操作対象 Element
     */

  }]);

  function Style(element) {
    _classCallCheck(this, Style);

    /**
     * 操作対象 Element
     * @type {Element}
     */
    this.element = element; // @type {string} - オリジナルの element.style.cssText を保持します

    var css = this.current();
    /**
     * 現在の inline CSS
     * @type {string}
     */

    this.css = css;
    /**
     * インスタンス作成時の inline CSS
     * @type {string}
     */

    this.original = css;
  } // ----------------------------------------
  // METHOD
  // ----------------------------------------

  /**
   * インスタンス作成時に保存した inline CSS を上書きします
   * @param {string} style 上書き用 CSS 設定
   * @returns {string} 上書きされた CSS
   */


  _createClass(Style, [{
    key: "update",
    value: function update(style) {
      this.css = style;
      return style;
    }
    /**
     * style value を取得します
     * @param {string} [property=''] 調査する style property name
     * @return {string} style value を返します
     */

  }, {
    key: "get",
    value: function get() {
      var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var element = this.element;
      var ownerDocument = element.ownerDocument;
      var defaultView = ownerDocument.defaultView;
      var style = Style.compute(defaultView, element, property); // firefox が css shorthand の取り扱いが違うので再度マッチテストする

      if (style === '' && property && _Patterns__WEBPACK_IMPORTED_MODULE_4__["default"].match(property)) {
        style = Style.shortHand(defaultView, element, _Patterns__WEBPACK_IMPORTED_MODULE_4__["default"].get(property));
      }

      return style;
    }
    /**
     * element へ css を設定します、設定済み css を上書きします
     * @param {string} property 設定する css property name
     * @param {string} value 設定する css value
     * @return {boolean} 変更されると true を返します
     */

  }, {
    key: "set",
    value: function set(property, value) {
      // 存在チェック
      var element = this.element;

      if (!_util_Type__WEBPACK_IMPORTED_MODULE_2__["default"].exist(element)) {
        return false;
      } // 存在する時のみ処理を行います


      var prop = _util_Text__WEBPACK_IMPORTED_MODULE_3__["default"].camel(property);
      element.style[prop] = value;
      return true;
    }
    /**
     * element の inline style(style.cssText) を取得します
     * @return {string} style.cssText を返します
     */

  }, {
    key: "current",
    value: function current() {
      var element = this.element;

      if (_util_Type__WEBPACK_IMPORTED_MODULE_2__["default"].exist(element)) {
        return element.style.cssText;
      } // this.element 不正の時は空文字を返します


      return '';
    }
    /**
     * element の style.cssText をインスタンス作成時点まで戻します
     * @return {string} 設定した css を返します
     */

  }, {
    key: "restore",
    value: function restore() {
      var css = this.original;
      this.element.style.cssText = css;
      return css;
    }
    /**
     * `save` 実行時に設定されている inline style を default にします
     * @returns {string} 設定されている inline style を返します
     */

  }, {
    key: "save",
    value: function save() {
      var style = this.current();
      return this.update(style);
    }
    /**
     * element の style.cssText を引数 `css` で書き換えます
     * @param {string} css 書き換える css
     */

  }, {
    key: "change",
    value: function change(css) {
      Style.change(this.element, css);
    }
  }]);

  return Style;
}();



/***/ }),

/***/ "./src/device/Can.js":
/*!***************************!*\
  !*** ./src/device/Can.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Can; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Copyright (c) 2011-2016 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/11/30 - 16:47
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */
// /**
//  * [native code] - document
//  * @type {HTMLDocument}
//  * @private
//  * @static
//  */
// const document = self.document;
// /**
//  * CSS detector に使用する virtual CSSStyleDeclaration
//  * ```
//  * document.createElement('p').style
//  * ```
//  * @type {CSSStyleDeclaration}
//  * @private
//  * @static
//  * @see https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration
//  * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
//  */
// const style = document.createElement('p').style;
// /**
//  * vendor prefix list, CSS detector に使用します
//  * - '-webkit-',
//  * - '-moz-',
//  * - '-ms-',
//  * - '-o-',
//  * - ''
//  * @type {[string]}
//  * @private
//  * @static
//  */
// const vendors = [
//   '-webkit-',
//   '-moz-',
//   '-ms-',
//   '-o-',
//   '',
// ];
// /**
//  * CSS3 transition 可能フラッグ
//  * @type {boolean}
//  * @private
//  * @static
//  */
// const transition = vendors.some(prefix => typeof style[`${prefix}transition`] !== 'undefined');
// /**
//  * CSS3 transform 可能フラッグ
//  * @type {boolean}
//  * @private
//  * @static
//  */
// const transform = vendors.some(prefix => typeof style[`${prefix}transform`] !== 'undefined');
// /**
//  * touch event 使用可能フラッグ
//  * @type {boolean}
//  */
// const touch = 'ontouchstart' in document.documentElement;
// /**
//  * canvas detect flag
//  * @type {boolean}
//  */
// const canvas = !!window.CanvasRenderingContext2D;
// /**
//  * webgl detect flag
//  * @type {boolean}
//  */
// let webgl = false;
// if (canvas) {
//   try {
//     webgl = !!window.WebGLRenderingContext &&
//       !!document.createElement('canvas').getContext('experimental-webgl');
//   } catch (e) {
//     webgl = false;
//   }
// }
// /**
//  * addEventListener 第三引数 - { passive: true } : false するためのブラウザテスト・フラッグ
//  *
//  * TouchEvent#Using with addEventListener() and preventDefault()
//  * <pre>
//  * It's important to note that in many cases, both touch and mouse events get sent (in order to let non-touch-specific code still interact with the user). If you use touch events, you should call preventDefault() to keep the mouse event from being sent as well.
//  * The exception to this is Chrome, starting with version 56 (desktop, Chrome for android, and android webview), where the default value for touchstart and touchmove is true and calls to preventDefault() are not needed. To override this behavior, you simply set the passive option to false as shown in the example below. This change prevents the listener from blocking page rendering while a user is scrolling. A demo is available on the Google Developer site.
//  * </pre>
//  * @private
//  * @type {boolean}
//  * @see https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent
//  * @see https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
//  * @see https://blog.jxck.io/entries/2016-06-09/passive-event-listeners.html
//  * @since 0.3.2
//  */
// let supportsPassive = false;
// try {
//   const opts = Object.defineProperty({}, 'passive', {
//     get() {
//       supportsPassive = true;
//     },
//   });
//   window.addEventListener('test', null, opts);
// } catch (e) {
//   supportsPassive = false;
//   // console.warn('passive test', e);
// }

/**
 * 判定結果を保持します
 * @type {{transition: ?boolean, transform: ?boolean, touch: ?boolean, canvas: ?boolean, webgl: ?boolean, passive: ?boolean}}
 */
var can = {
  transition: null,
  transform: null,
  touch: null,
  canvas: null,
  webgl: null,
  passive: null
};
/**
 * CSS3 機能使用可能かを調べます
 * @example
 * if (Can.transition()) {
 *  // can CSS3 transition
 * }
 *
 * if (Can.transform()) {
 *  // can CSS3 transform
 * }
 */

var Can =
/*#__PURE__*/
function () {
  function Can() {
    _classCallCheck(this, Can);
  }

  _createClass(Can, null, [{
    key: "transition",

    /**
     * vendor prefix list, CSS detector に使用します
     * - '-webkit-',
     * - '-moz-',
     * - '-ms-',
     * - '-o-',
     * - ''
     * @type {[string,string,string,string,string]}
     */

    /**
     * CSS3 transition が使用可能かを調べます
     * @returns {?boolean} true: 使用可能
     */
    value: function transition() {
      if (can.transition === null) {
        var _document$createEleme = document.createElement('p'),
            style = _document$createEleme.style; // eslint-disable-next-line max-len


        can.transition = Can.vendors.some(function (prefix) {
          return typeof style["".concat(prefix, "transition")] !== 'undefined';
        });
      }

      return can.transition;
    }
    /**
     * CSS3 transform が使用可能かを調べます
     * @returns {?boolean} true: 使用可能
     */

  }, {
    key: "transform",
    value: function transform() {
      if (can.transform === null) {
        var _document$createEleme2 = document.createElement('p'),
            style = _document$createEleme2.style; // eslint-disable-next-line max-len


        can.transform = Can.vendors.some(function (prefix) {
          return typeof style["".concat(prefix, "transform")] !== 'undefined';
        });
      }

      return can.transform;
    }
    /**
     * addEventListener 第三引数 - { passive: true } が使用できるかを調べます
     *
     * TouchEvent#Using with addEventListener() and preventDefault()
     * <pre>
     * It's important to note that in many cases, both touch and mouse events get sent (in order to let non-touch-specific code still interact with the user). If you use touch events, you should call preventDefault() to keep the mouse event from being sent as well.
     * The exception to this is Chrome, starting with version 56 (desktop, Chrome for android, and android webview), where the default value for touchstart and touchmove is true and calls to preventDefault() are not needed. To override this behavior, you simply set the passive option to false as shown in the example below. This change prevents the listener from blocking page rendering while a user is scrolling. A demo is available on the Google Developer site.
     * </pre>
     * @returns {?boolean} true: 使用可能
     * @see https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent
     * @see https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
     * @see https://blog.jxck.io/entries/2016-06-09/passive-event-listeners.html
     * @since 0.3.2
     */

  }, {
    key: "passive",
    value: function passive() {
      if (can.passive === null) {
        var supportsPassive = false;

        try {
          var opts = Object.defineProperty({}, 'passive', {
            get: function get() {
              supportsPassive = true;
              return supportsPassive;
            }
          });
          window.addEventListener('test', null, opts);
        } catch (e) {
          supportsPassive = false; // console.warn('passive test', e);
        }

        can.passive = supportsPassive;
      }

      return can.passive;
    }
    /**
     * touch event 使用可能かを調べます
     * @returns {?boolean} true: 使用可能
     * @since 4.0.1
     */

  }, {
    key: "touch",
    value: function touch() {
      if (can.touch === null) {
        can.touch = 'ontouchstart' in document.documentElement;
      }

      return can.touch;
    }
    /**
     * canvas 使用可能かを調べます
     * @returns {?boolean} true: canvas 使用可能
     * @since 4.0.1
     */

  }, {
    key: "canvas",
    value: function canvas() {
      if (can.canvas === null) {
        can.canvas = !!window.CanvasRenderingContext2D;
      }

      return can.canvas;
    }
    /**
     * webgl 使用可能かを調べます
     * @returns {?boolean} true: webgl 使用可能
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getShaderPrecisionFormat
     * @see https://qiita.com/tonkotsuboy_com/items/cdffcdd7bdccac371292
     * @since 4.0.1
     */

  }, {
    key: "webgl",
    value: function webgl() {
      if (can.webgl === null) {
        var webgl = false;

        if (Can.canvas()) {
          var canvas = document.createElement('canvas');
          var webGLContext = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

          try {
            webgl = !!(window.WebGLRenderingContext && webGLContext && webGLContext.getShaderPrecisionFormat);
          } catch (e) {
            webgl = false;
          }
        }

        can.webgl = webgl;
      }

      return can.webgl;
    }
  }]);

  return Can;
}();

Can.vendors = ['-webkit-', '-moz-', '-ms-', '-o-', ''];


/***/ }),

/***/ "./src/device/browser/Chrome.js":
/*!**************************************!*\
  !*** ./src/device/browser/Chrome.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Chrome; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_number_is_nan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.number.is-nan */ "./node_modules/core-js/modules/es6.number.is-nan.js");
/* harmony import */ var core_js_modules_es6_number_is_nan__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_is_nan__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _devices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../devices */ "./src/device/devices.js");
/* harmony import */ var _CriOS__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CriOS */ "./src/device/browser/CriOS.js");
/* harmony import */ var _Edge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Edge */ "./src/device/browser/Edge.js");





function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/09/22 - 19:27
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */



/**
 * {@link devices}.browsers
 * {@link Chrome}
 * @type {?object}
 * @since 0.4.2
 */

var _browsers = null;
/**
 * version 情報を計算します
 * {@link Chrome}
 * @since 0.4.2
 */

var version = function version() {
  var app = _devices__WEBPACK_IMPORTED_MODULE_4__["default"].app;
  var numbers = app.match(/chrome\/(\d+)\.(\d+)\.(\d+)\.?(\d+)?/i);

  if (!Array.isArray(numbers)) {
    return;
  } // 先頭 削除


  numbers.shift();
  var versions = numbers.map(function (number, index) {
    var int = parseInt(number, 10);

    if (index <= 3) {
      return Number.isNaN(int) ? 0 : int;
    }

    return null;
  });
  _browsers.build = versions.join('.');
  var strMajor = versions.strMajor,
      strMinor = versions.strMinor,
      strBuild = versions.strBuild,
      strOption = versions.strOption;
  var major = parseInt(strMajor, 10);
  var minor = 0;

  if (versions.length >= 2) {
    minor = strMinor;
  }

  var build = '';

  if (versions.length >= 3) {
    build = strBuild;
  }

  var option = '';

  if (versions.length === 4) {
    option = strOption;
  }

  _browsers.major = major;
  _browsers.version = parseFloat("".concat(major, ".").concat(minor).concat(build).concat(option));
  _browsers.numbers = versions;
};
/**
 * browser 判別します
 * {@link Chrome}
 * @since 0.4.2
 */


var init = function init() {
  if (_browsers) {
    return;
  }

  _browsers = Object.assign({}, _devices__WEBPACK_IMPORTED_MODULE_4__["default"].browsers);
  var crios = _CriOS__WEBPACK_IMPORTED_MODULE_5__["default"].is();
  var edge = _Edge__WEBPACK_IMPORTED_MODULE_6__["default"].is();
  var chrome = false;

  if (!edge) {
    if (crios) {
      // iOS chrome
      chrome = true;
    } else {
      var ua = _devices__WEBPACK_IMPORTED_MODULE_4__["default"].ua;
      chrome = !!ua.match(/chrome/i);
    }
  }

  _browsers.chrome = chrome;

  if (chrome) {
    version();
  }
};
/**
 * Chrome detector
 * @since 0.4.2
 */


var Chrome =
/*#__PURE__*/
function () {
  function Chrome() {
    _classCallCheck(this, Chrome);
  }

  _createClass(Chrome, null, [{
    key: "browsers",

    /**
     * 書き換え済み `browsers` を取得します
     * @returns {Object} 書き換え済み `browsers` を返します
     */
    value: function browsers() {
      init();
      return _browsers;
    }
    /**
     * Chrome 判定
     * @returns {boolean} true: Chrome
     */

  }, {
    key: "is",
    value: function is() {
      init();
      return _browsers.chrome;
    }
    /**
     * Chrome Browser version
     * @returns {number} Chrome version, not Android -1
     */

  }, {
    key: "version",
    value: function version() {
      init();
      return _browsers.version;
    }
    /**
     * Chrome Browser major version
     * @returns {number} Chrome major version, not Android -1
     */

  }, {
    key: "major",
    value: function major() {
      init();
      return _browsers.major;
    }
    /**
     * Chrome Browser version `major.minor.build`
     * @returns {string} Chrome version NN.NN.NN.NN 型（文字）で返します
     */

  }, {
    key: "build",
    value: function build() {
      init();
      return _browsers.build;
    }
    /**
     * version を配列形式で取得します
     * @returns {Array.<number>} {{major: int, minor: int, build: int, option: number}} 形式で返します
     */

  }, {
    key: "numbers",
    value: function numbers() {
      init();
      return _browsers.numbers;
    }
  }]);

  return Chrome;
}();



/***/ }),

/***/ "./src/device/browser/CriOS.js":
/*!*************************************!*\
  !*** ./src/device/browser/CriOS.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CriOS; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_number_is_nan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.number.is-nan */ "./node_modules/core-js/modules/es6.number.is-nan.js");
/* harmony import */ var core_js_modules_es6_number_is_nan__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_is_nan__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _devices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../devices */ "./src/device/devices.js");





function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/09/22 - 19:29
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

/**
 * {@link devices}.browsers
 * {@link CriOS}
 * @type {?object}
 * @since 0.4.2
 */

var _browsers = null;
/**
 * version 情報を計算します
 * {@link CriOS}
 * @since 0.4.2
 */

var version = function version() {
  var app = _devices__WEBPACK_IMPORTED_MODULE_4__["default"].app;
  var numbers = app.match(/crios\/(\d+)\.(\d+)\.(\d+)\.?(\d+)?/i);

  if (!Array.isArray(numbers)) {
    return;
  } // 先頭 削除


  numbers.shift(); // array

  var intArr = numbers.map(function (number) {
    return parseInt(number, 10);
  });
  var versions = intArr.filter(function (int) {
    return !Number.isNaN(int);
  });
  _browsers.build = versions.join('.');
  var strMajor = versions.strMajor,
      strMinor = versions.strMinor,
      strBuild = versions.strBuild,
      strOption = versions.strOption;
  var major = parseInt(strMajor, 10);
  var minor = 0;

  if (versions.length >= 2) {
    minor = strMinor;
  }

  var build = '';

  if (versions.length >= 3) {
    build = strBuild;
  }

  var option = '';

  if (versions.length === 4) {
    option = strOption;
  }

  _browsers.major = major;
  _browsers.version = parseFloat("".concat(major, ".").concat(minor).concat(build).concat(option));
  _browsers.numbers = versions;
};
/**
 * browser 判別します
 * {@link CriOS}
 * @since 0.4.2
 */


var init = function init() {
  if (_browsers) {
    return;
  }

  _browsers = Object.assign({}, _devices__WEBPACK_IMPORTED_MODULE_4__["default"].browsers);
  var ua = _devices__WEBPACK_IMPORTED_MODULE_4__["default"].ua;
  var crios = !!ua.match(/crios/i);
  _browsers.crios = crios;

  if (crios) {
    version();
  }
};
/**
 * iOS Chrome detector
 * @since 0.4.2
 */


var CriOS =
/*#__PURE__*/
function () {
  function CriOS() {
    _classCallCheck(this, CriOS);
  }

  _createClass(CriOS, null, [{
    key: "browsers",

    /**
     * 書き換え済み `browsers` を取得します
     * @returns {Object} 書き換え済み `browsers` を返します
     */
    value: function browsers() {
      init();
      return _browsers;
    }
    /**
     * iOS Chrome 判定
     * @returns {boolean} true: iOS Chrome
     */

  }, {
    key: "is",
    value: function is() {
      init();
      return _browsers.crios;
    }
    /**
     * CriOS Browser version
     * @returns {number} CriOS version, not Android -1
     */

  }, {
    key: "version",
    value: function version() {
      init();
      return _browsers.version;
    }
    /**
     * CriOS Browser major version
     * @returns {number} CriOS major version, not Android -1
     */

  }, {
    key: "major",
    value: function major() {
      init();
      return _browsers.major;
    }
    /**
     * CriOS Browser version `major.minor.build`
     * @returns {string} CriOS version NN.NN.NN.NN 型（文字）で返します
     */

  }, {
    key: "build",
    value: function build() {
      init();
      return _browsers.build;
    }
    /**
     * version を配列形式で取得します
     * @returns {Array.<number>} {{major: int, minor: int, build: int, option: number}} 形式で返します
     */

  }, {
    key: "numbers",
    value: function numbers() {
      init();
      return _browsers.numbers;
    }
  }]);

  return CriOS;
}();



/***/ }),

/***/ "./src/device/browser/Edge.js":
/*!************************************!*\
  !*** ./src/device/browser/Edge.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edge; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_number_is_nan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.number.is-nan */ "./node_modules/core-js/modules/es6.number.is-nan.js");
/* harmony import */ var core_js_modules_es6_number_is_nan__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_is_nan__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _devices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../devices */ "./src/device/devices.js");





function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/09/25 - 16:45
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

/**
 * {@link devices}.browsers
 * {@link Edge}
 * @type {?object}
 * @since 0.4.2
 */

var _browsers = null;
/**
 * version 情報を計算します
 * {@link Edge}
 * @since 0.4.2
 */

var version = function version() {
  var app = _devices__WEBPACK_IMPORTED_MODULE_4__["default"].app;
  var numbers = app.match(/edge\/(\d+)\.(\d+)\.?(\d+)?/i);

  if (!Array.isArray(numbers)) {
    return;
  } // 先頭 削除


  numbers.shift();
  var versions = numbers.map(function (number, index) {
    var int = parseInt(number, 10);

    if (index <= 3) {
      return Number.isNaN(int) ? 0 : int;
    }

    return null;
  });
  _browsers.build = versions.join('.');
  var strMajor = versions.strMajor,
      strMinor = versions.strMinor,
      strBuild = versions.strBuild,
      strOption = versions.strOption;
  var major = parseInt(strMajor, 10);
  var minor = 0;

  if (versions.length >= 2) {
    minor = strMinor;
  }

  var build = '';

  if (versions.length >= 3) {
    build = strBuild;
  }

  var option = '';

  if (versions.length === 4) {
    option = strOption;
  }

  _browsers.major = major;
  _browsers.version = parseFloat("".concat(major, ".").concat(minor).concat(build).concat(option));
  _browsers.numbers = versions;
};
/**
 * browser 判別します
 * {@link Edge}
 * @since 0.4.2
 */


var init = function init() {
  if (_browsers) {
    return;
  }

  _browsers = Object.assign({}, _devices__WEBPACK_IMPORTED_MODULE_4__["default"].browsers);
  var ua = _devices__WEBPACK_IMPORTED_MODULE_4__["default"].ua;
  var edge = !!ua.match(/edge/i);
  _browsers.edge = edge;

  if (edge) {
    version();
  }
};
/**
 * Edge detector
 * @since 0.4.2
 */


var Edge =
/*#__PURE__*/
function () {
  function Edge() {
    _classCallCheck(this, Edge);
  }

  _createClass(Edge, null, [{
    key: "browsers",

    /**
     * 書き換え済み `browsers` を取得します
     * @returns {Object} 書き換え済み `browsers` を返します
     */
    value: function browsers() {
      init();
      return _browsers;
    }
    /**
     * Edge 判定
     * @returns {boolean} true: Edge
     */

  }, {
    key: "is",
    value: function is() {
      init();
      return _browsers.edge;
    }
    /**
     * Edge Browser version
     * @returns {number} Edge version, not Android -1
     */

  }, {
    key: "version",
    value: function version() {
      init();
      return _browsers.version;
    }
    /**
     * Edge Browser major version
     * @returns {number} Edge major version, not Android -1
     */

  }, {
    key: "major",
    value: function major() {
      init();
      return _browsers.major;
    }
    /**
     * Edge Browser version `major.minor.build`
     * @returns {string} Edge version NN.NN.NN.NN 型（文字）で返します
     */

  }, {
    key: "build",
    value: function build() {
      init();
      return _browsers.build;
    }
    /**
     * version を配列形式で取得します
     * @returns {Array.<number>} {{major: int, minor: int, build: int, option: number}} 形式で返します
     */

  }, {
    key: "numbers",
    value: function numbers() {
      init();
      return _browsers.numbers;
    }
  }]);

  return Edge;
}();



/***/ }),

/***/ "./src/device/browser/Firefox.js":
/*!***************************************!*\
  !*** ./src/device/browser/Firefox.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Firefox; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_number_is_nan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.number.is-nan */ "./node_modules/core-js/modules/es6.number.is-nan.js");
/* harmony import */ var core_js_modules_es6_number_is_nan__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_is_nan__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _devices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../devices */ "./src/device/devices.js");





function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/09/22 - 19:29
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

/**
 * {@link devices}.browsers
 * {@link Firefox}
 * @type {?object}
 * @since 0.4.2
 */

var _browsers = null;
/**
 * version 情報を計算します
 * {@link Firefox}
 * @since 0.4.2
 */

var version = function version() {
  var ua = _devices__WEBPACK_IMPORTED_MODULE_4__["default"].ua;
  var numbers = ua.match(/firefox\/(\d+)\.?(\d+)?/i);

  if (!Array.isArray(numbers)) {
    return;
  } // 先頭 削除


  numbers.shift(); // array

  var intArr = numbers.map(function (number) {
    return parseInt(number, 10);
  });
  var versions = intArr.filter(function (int) {
    return !Number.isNaN(int);
  });
  _browsers.build = versions.join('.');
  var strMajor = versions.strMajor,
      strMinor = versions.strMinor,
      strBuild = versions.strBuild,
      strOption = versions.strOption;
  var major = parseInt(strMajor, 10);
  var minor = 0;

  if (versions.length >= 2) {
    minor = strMinor;
  }

  var build = '';

  if (versions.length >= 3) {
    build = strBuild;
  }

  var option = '';

  if (versions.length === 4) {
    option = strOption;
  }

  _browsers.major = major;
  _browsers.version = parseFloat("".concat(major, ".").concat(minor).concat(build).concat(option));
  _browsers.numbers = versions;
};
/**
 * browser 判別します
 * {@link Firefox}
 * @since 0.4.2
 */


var init = function init() {
  if (_browsers) {
    return;
  }

  _browsers = Object.assign({}, _devices__WEBPACK_IMPORTED_MODULE_4__["default"].browsers);
  var ua = _devices__WEBPACK_IMPORTED_MODULE_4__["default"].ua;
  var firefox = !!ua.match(/firefox/i);
  _browsers.firefox = firefox;

  if (firefox) {
    version();
  }
};
/**
 * Firefox detector
 * @since 0.4.2
 */


var Firefox =
/*#__PURE__*/
function () {
  function Firefox() {
    _classCallCheck(this, Firefox);
  }

  _createClass(Firefox, null, [{
    key: "browsers",

    /**
     * 書き換え済み `browsers` を取得します
     * @returns {Object} 書き換え済み `browsers` を返します
     */
    value: function browsers() {
      init();
      return _browsers;
    }
    /**
     * iOS Chrome 判定
     * @returns {boolean} true: iOS Chrome
     */

  }, {
    key: "is",
    value: function is() {
      init();
      return _browsers.firefox;
    }
    /**
     * Firefox Browser version
     * @returns {number} Firefox version, not Android -1
     */

  }, {
    key: "version",
    value: function version() {
      init();
      return _browsers.version;
    }
    /**
     * Firefox Browser major version
     * @returns {number} Firefox major version, not Android -1
     */

  }, {
    key: "major",
    value: function major() {
      init();
      return _browsers.major;
    }
    /**
     * Firefox Browser version `major.minor.build`
     * @returns {string} Firefox version NN.NN.NN.NN 型（文字）で返します
     */

  }, {
    key: "build",
    value: function build() {
      init();
      return _browsers.build;
    }
    /**
     * version を配列形式で取得します
     * @returns {Array.<number>} {{major: int, minor: int, build: int, option: number}} 形式で返します
     */

  }, {
    key: "numbers",
    value: function numbers() {
      init();
      return _browsers.numbers;
    }
  }]);

  return Firefox;
}();



/***/ }),

/***/ "./src/device/browser/FxiOS.js":
/*!*************************************!*\
  !*** ./src/device/browser/FxiOS.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FxiOS; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_number_is_nan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.number.is-nan */ "./node_modules/core-js/modules/es6.number.is-nan.js");
/* harmony import */ var core_js_modules_es6_number_is_nan__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_is_nan__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _devices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../devices */ "./src/device/devices.js");





function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/09/25 - 16:19
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

/**
 * {@link devices}.browsers
 * {@link FxiOS}
 * @type {?object}
 * @since 0.4.2
 */

var _browsers = null;
/**
 * version 情報を計算します
 * {@link FxiOS}
 * @since 0.4.2
 */

var version = function version() {
  var app = _devices__WEBPACK_IMPORTED_MODULE_4__["default"].app;
  var numbers = app.match(/fxios\/(\d+)\.?(\d+)?/i);

  if (!Array.isArray(numbers)) {
    return;
  } // 先頭 削除


  numbers.shift(); // array

  var intArr = numbers.map(function (number) {
    return parseInt(number, 10);
  });
  var versions = intArr.filter(function (int) {
    return !Number.isNaN(int);
  });
  _browsers.build = versions.join('.');
  var strMajor = versions.strMajor,
      strMinor = versions.strMinor,
      strBuild = versions.strBuild,
      strOption = versions.strOption;
  var major = parseInt(strMajor, 10);
  var minor = 0;

  if (versions.length >= 2) {
    minor = strMinor;
  }

  var build = '';

  if (versions.length >= 3) {
    build = strBuild;
  }

  var option = '';

  if (versions.length === 4) {
    option = strOption;
  }

  _browsers.major = major;
  _browsers.version = parseFloat("".concat(major, ".").concat(minor).concat(build).concat(option));
  _browsers.numbers = versions;
};
/**
 * browser 判別します
 * {@link FxiOS}
 * @since 0.4.2
 */


var init = function init() {
  if (_browsers) {
    return;
  }

  _browsers = Object.assign({}, _devices__WEBPACK_IMPORTED_MODULE_4__["default"].browsers);
  var ua = _devices__WEBPACK_IMPORTED_MODULE_4__["default"].ua;
  var fxios = !!ua.match(/fxios/i);
  _browsers.fxios = fxios;

  if (fxios) {
    version();
  }
};
/**
 * iOS Firefox detector
 * @since 0.4.2
 */


var FxiOS =
/*#__PURE__*/
function () {
  function FxiOS() {
    _classCallCheck(this, FxiOS);
  }

  _createClass(FxiOS, null, [{
    key: "browsers",

    /**
     * 書き換え済み `browsers` を取得します
     * @returns {Object} 書き換え済み `browsers` を返します
     */
    value: function browsers() {
      init();
      return _browsers;
    }
    /**
     * iOS Firefox 判定
     * @returns {boolean} true: iOS Firefox
     */

  }, {
    key: "is",
    value: function is() {
      init();
      return _browsers.fxios;
    }
    /**
     * Firefox Browser version
     * @returns {number} Firefox OS version, not Android -1
     */

  }, {
    key: "version",
    value: function version() {
      init();
      return _browsers.version;
    }
    /**
     * Firefox Browser major version
     * @returns {number} Firefox OS major version, not Android -1
     */

  }, {
    key: "major",
    value: function major() {
      init();
      return _browsers.major;
    }
    /**
     * Firefox Browser version `major.minor.build`
     * @returns {string} Firefox OS version NN.NN.NN.NN 型（文字）で返します, not Android ''
     */

  }, {
    key: "build",
    value: function build() {
      init();
      return _browsers.build;
    }
    /**
     * version を配列形式で取得します
     * @returns {Array.<number>} {{major: int, minor: int, build: int, option: number}} 形式で返します
     */

  }, {
    key: "numbers",
    value: function numbers() {
      init();
      return _browsers.numbers;
    }
  }]);

  return FxiOS;
}();



/***/ }),

/***/ "./src/device/browser/IE.js":
/*!**********************************!*\
  !*** ./src/device/browser/IE.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IE; });
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _devices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../devices */ "./src/device/devices.js");



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/09/22 - 19:29
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

/**
 * {@link devices}.browsers
 * {@link IE}
 * @type {?object}
 * @since 0.4.2
 */

var _browsers = null;
/**
 * version 情報を計算します
 * {@link IE}
 * @since 0.4.2
 */

var version = function version() {
  var major = -1;

  if (_browsers.ie) {
    if (_browsers.ie11) {
      major = 11;
    } else if (_browsers.ie10) {
      major = 10;
    } else if (_browsers.ie9) {
      major = 9;
    } else if (_browsers.ie8) {
      major = 8;
    } else if (_browsers.ie7) {
      major = 7;
    } else if (_browsers.ie6) {
      major = 6;
    }
  }

  _browsers.build = String(major);
  _browsers.major = major;
  _browsers.version = major;

  if (major >= 0) {
    _browsers.numbers = [major];
  }
};
/**
 * browser 判別します
 * {@link IE}
 * @since 0.4.2
 */


var init = function init() {
  if (_browsers) {
    return;
  }

  _browsers = Object.assign({}, _devices__WEBPACK_IMPORTED_MODULE_2__["default"].browsers);
  var ua = _devices__WEBPACK_IMPORTED_MODULE_2__["default"].ua;
  var ie = !!ua.match(/msie/i);
  _browsers.ie = ie;

  if (ie) {
    _browsers.ie10 = !!ua.match(/msie [10]/i);
    _browsers.ie9 = !!ua.match(/msie [9]/i);
    _browsers.ie8 = !!ua.match(/msie [8]/i);
    _browsers.ie7 = !!ua.match(/msie [7]/i);
    _browsers.ie6 = !!ua.match(/msie [6]/i);
  } else {
    var ie11 = !!ua.match(/trident\/[7]/i) && !!ua.match(/rv:[11]/i);
    ie = ie11;
    _browsers.ie = ie11;
    _browsers.ie11 = ie11;
  }

  if (ie) {
    version();
  }
};
/**
 * IE detector
 * @since 0.4.2
 */


var IE =
/*#__PURE__*/
function () {
  function IE() {
    _classCallCheck(this, IE);
  }

  _createClass(IE, null, [{
    key: "browsers",

    /**
     * 書き換え済み `browsers` を取得します
     * @returns {Object} 書き換え済み `browsers` を返します
     */
    value: function browsers() {
      init();
      return _browsers;
    }
    /**
     * IE 判定
     * @returns {boolean} true: IE
     */

  }, {
    key: "is",
    value: function is() {
      init();
      return _browsers.ie;
    }
    /**
     * IE 6 判定
     * @returns {boolean} true: IE 6
     */

  }, {
    key: "is6",
    value: function is6() {
      init();
      return _browsers.ie6;
    }
    /**
     * IE 7 判定
     * @returns {boolean} true: IE 7
     */

  }, {
    key: "is7",
    value: function is7() {
      init();
      return _browsers.ie7;
    }
    /**
     * IE 8 判定
     * @returns {boolean} true: IE 8
     */

  }, {
    key: "is8",
    value: function is8() {
      init();
      return _browsers.ie8;
    }
    /**
     * IE 9 判定
     * @returns {boolean} true: IE 9
     */

  }, {
    key: "is9",
    value: function is9() {
      init();
      return _browsers.ie9;
    }
    /**
     * IE 10 判定
     * @returns {boolean} true: IE 10
     */

  }, {
    key: "is10",
    value: function is10() {
      init();
      return _browsers.ie10;
    }
    /**
     * IE 11 判定
     * @returns {boolean} true: IE 11
     */

  }, {
    key: "is11",
    value: function is11() {
      init();
      return _browsers.ie11;
    }
    /**
     * IE Browser version
     * @returns {number} IE version, not Android -1
     */

  }, {
    key: "version",
    value: function version() {
      init();
      return _browsers.version;
    }
    /**
     * IE Browser major version
     * @returns {number} IE major version, not Android -1
     */

  }, {
    key: "major",
    value: function major() {
      init();
      return _browsers.major;
    }
    /**
     * IE Browser version `major.minor.build`
     * @returns {string} IE version NN.NN.NN.NN 型（文字）で返します
     */

  }, {
    key: "build",
    value: function build() {
      init();
      return _browsers.build;
    }
    /**
     * version を配列形式で取得します
     * @returns {Array.<number>} {{major: int, minor: int, build: int, option: number}} 形式で返します
     */

  }, {
    key: "numbers",
    value: function numbers() {
      init();
      return _browsers.numbers;
    }
  }]);

  return IE;
}();



/***/ }),

/***/ "./src/device/browser/Safari.js":
/*!**************************************!*\
  !*** ./src/device/browser/Safari.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Safari; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_number_is_nan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.number.is-nan */ "./node_modules/core-js/modules/es6.number.is-nan.js");
/* harmony import */ var core_js_modules_es6_number_is_nan__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_is_nan__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _devices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../devices */ "./src/device/devices.js");
/* harmony import */ var _CriOS__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CriOS */ "./src/device/browser/CriOS.js");
/* harmony import */ var _Edge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Edge */ "./src/device/browser/Edge.js");
/* harmony import */ var _Chrome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Chrome */ "./src/device/browser/Chrome.js");
/* harmony import */ var _FxiOS__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FxiOS */ "./src/device/browser/FxiOS.js");
/* harmony import */ var _os_Android__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../os/Android */ "./src/device/os/Android.js");





function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/09/22 - 19:29
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */






/**
 * {@link devices}.browsers
 * {@link Safari}
 * @type {?object}
 * @since 0.4.2
 */

var _browsers = null;
/**
 * version 情報を計算します
 * {@link Safari}
 * @since 0.4.2
 */

var version = function version() {
  var app = _devices__WEBPACK_IMPORTED_MODULE_4__["default"].app;
  var numbers = app.match(/version\/(\d+)\.(\d+)\.?(\d+)?/i);

  if (!Array.isArray(numbers)) {
    return;
  } // 先頭 削除


  numbers.shift(); // array

  var intArr = numbers.map(function (number) {
    return parseInt(number, 10);
  });
  var versions = intArr.filter(function (int) {
    return !Number.isNaN(int);
  });
  _browsers.build = versions.join('.');
  var strMajor = versions.strMajor,
      strMinor = versions.strMinor,
      strBuild = versions.strBuild,
      strOption = versions.strOption;
  var major = parseInt(strMajor, 10);
  var minor = 0;

  if (versions.length >= 2) {
    minor = strMinor;
  }

  var build = '';

  if (versions.length >= 3) {
    build = strBuild;
  }

  var option = '';

  if (versions.length === 4) {
    option = strOption;
  }

  _browsers.major = major;
  _browsers.version = parseFloat("".concat(major, ".").concat(minor).concat(build).concat(option));
  _browsers.numbers = versions;
};
/**
 * browser 判別します
 * {@link Safari}
 * @since 0.4.2
 */


var init = function init() {
  if (_browsers) {
    return;
  }

  _browsers = Object.assign({}, _devices__WEBPACK_IMPORTED_MODULE_4__["default"].browsers);
  var safari = _devices__WEBPACK_IMPORTED_MODULE_4__["default"].safari;

  if (_CriOS__WEBPACK_IMPORTED_MODULE_5__["default"].is() || _Edge__WEBPACK_IMPORTED_MODULE_6__["default"].is() || _Chrome__WEBPACK_IMPORTED_MODULE_7__["default"].is() || _FxiOS__WEBPACK_IMPORTED_MODULE_8__["default"].is() || _os_Android__WEBPACK_IMPORTED_MODULE_9__["default"].standard()) {
    safari = false;
  }

  _browsers.safari = safari;

  if (safari) {
    version();
  }
};
/**
 * Safari detector
 * @since 0.4.2
 */


var Safari =
/*#__PURE__*/
function () {
  function Safari() {
    _classCallCheck(this, Safari);
  }

  _createClass(Safari, null, [{
    key: "browsers",

    /**
     * 書き換え済み `browsers` を取得します
     * @returns {Object} 書き換え済み `browsers` を返します
     */
    value: function browsers() {
      init();
      return _browsers;
    }
    /**
     * iOS Chrome 判定
     * @returns {boolean} true: iOS Chrome
     */

  }, {
    key: "is",
    value: function is() {
      init();
      return _browsers.safari;
    }
    /**
     * Safari Browser version
     * @returns {number} Safari version, not Android -1
     */

  }, {
    key: "version",
    value: function version() {
      init();
      return _browsers.version;
    }
    /**
     * Safari Browser major version
     * @returns {number} Safari major version, not Android -1
     */

  }, {
    key: "major",
    value: function major() {
      init();
      return _browsers.major;
    }
    /**
     * Safari Browser version `major.minor.build`
     * @returns {string} Safari version NN.NN.NN.NN 型（文字）で返します
     */

  }, {
    key: "build",
    value: function build() {
      init();
      return _browsers.build;
    }
    /**
     * version を配列形式で取得します
     * @returns {Array.<number>} {{major: int, minor: int, build: int, option: number}} 形式で返します
     */

  }, {
    key: "numbers",
    value: function numbers() {
      init();
      return _browsers.numbers;
    }
  }]);

  return Safari;
}();



/***/ }),

/***/ "./src/device/devices.js":
/*!*******************************!*\
  !*** ./src/device/devices.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/08/28 - 16:39
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

/**
 * [native code] userAgent
 * `device/index.js`
 * @type {string}
 */
var ua = navigator.userAgent;
/**
 * [native code] appVersion
 * `device/index.js`
 * @type {string}
 */

var app = navigator.appVersion;
/**
 * Safari - userAgent に `Safari` が含まれる
 * - 【注意】Safari browser を保証しない
 * @type {boolean}
 */

var safari = !!ua.match(/safari/i);
/**
 * device property
 * `device/index.js`
 * @type {{
 * ios: boolean,
 * ipad: boolean,
 * ipod: boolean,
 * iphone: boolean,
 * windows: boolean,
 * android: boolean,
 * standard: boolean,
 * phone: boolean,
 * tablet: boolean,
 * hd: boolean,
 * webView: boolean,
 * standalone: boolean,
 * version: number,
 * major: number,
 * build: string,
 * numbers: [?number,?number,?number]
 * }}
 */

var props = {
  ios: false,
  ipad: false,
  ipod: false,
  iphone: false,
  windows: false,
  android: false,
  standard: false,
  phone: false,
  tablet: false,
  hd: false,
  webView: false,
  standalone: false,
  build: '',
  major: -1,
  numbers: [-1, -1, -1],
  version: -1
};
/**
 * browser property
 * `device/index.js`
 * @type {{
 *   safari: boolean,
 *   chrome: boolean,
 *   firefox: boolean,
 *   ie: boolean,
 *   ie6: boolean,
 *   ie7: boolean,
 *   ie8: boolean,
 *   ie9: boolean,
 *   ie10: boolean,
 *   ie11: boolean,
 *   edge: boolean,
 *   crios: boolean,
 *   fxios: boolean,
 *   standard: boolean,
 *   build: string,
 *   major: number,
 *   numbers: [null,null,null],
 *   version: number
 * }}
 */

var browsers = {
  safari: false,
  chrome: false,
  firefox: false,
  ie: false,
  ie6: false,
  ie7: false,
  ie8: false,
  ie9: false,
  ie10: false,
  ie11: false,
  edge: false,
  crios: false,
  fxios: false,
  standard: false,
  build: '',
  major: -1,
  numbers: [-1, -1, -1],
  version: -1
};
/**
 * devices object
 * `device/index.js`
 * ```
 * @import device from './device';
 * const property = Object.assign({}, device);
 * ```
 * @type {{
 *  ua: string,
 *  app: string,
 *  props: {ios: boolean, ipad: boolean, ipod: boolean, iphone: boolean, windows: boolean, android: boolean, standard: boolean, phone: boolean, tablet: boolean, hd: boolean, webView: boolean, standalone: boolean, version: number, major: number, build: number, numbers: Array.<number>},
 *  safari: boolean
 * }}
 */

/**
 * devices object
 * `device/index.js`
 * ```
 * @import device from './device';
 * const property = Object.assign({}, device);
 * ```
 * @type {{
 *    ua: string,
 *    app: string,
 *    props: {ios: boolean, ipad: boolean, ipod: boolean, iphone: boolean, windows: boolean, android: boolean, standard: boolean, phone: boolean, tablet: boolean, hd: boolean, webView: boolean, standalone: boolean, version: number, major: number, build: string, numbers: (number|number|number)[]},
 *    safari: boolean,
 *    browsers: {
 *      safari: boolean,
 *      chrome: boolean,
 *      firefox: boolean,
 *      ie: boolean,
 *      ie6: boolean,
 *      ie7: boolean,
 *      ie8: boolean,
 *      ie9: boolean,
 *      ie10: boolean,
 *      ie11: boolean,
 *      edge: boolean,
 *      crios: boolean,
 *      fxios: boolean,
 *      standard: boolean,
 *      build: string,
 *      major: number,
 *      numbers: [null,null,null],
 *      version: number
 *    }
 * }}
 */

var devices = {
  ua: ua,
  app: app,
  props: props,
  safari: safari,
  browsers: browsers
};
/* harmony default export */ __webpack_exports__["default"] = (devices);

/***/ }),

/***/ "./src/device/os/Android.js":
/*!**********************************!*\
  !*** ./src/device/os/Android.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Android; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_number_is_nan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.number.is-nan */ "./node_modules/core-js/modules/es6.number.is-nan.js");
/* harmony import */ var core_js_modules_es6_number_is_nan__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_is_nan__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _devices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../devices */ "./src/device/devices.js");
/* harmony import */ var _Windows__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Windows */ "./src/device/os/Windows.js");





function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/08/28 - 16:36
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */


/**
 * {@link devices}.props
 * {@link Android}
 * @type {?object}
 */

var props = null;
/**
 * version 情報を計算します
 * {@link Android}
 */

var version = function version() {
  var app = _devices__WEBPACK_IMPORTED_MODULE_4__["default"].app;
  var numbers = app.match(/android (\d+)\.(\d+)\.?(\d+)?/i);

  if (!Array.isArray(numbers)) {
    return;
  } // 先頭の Android 4.3 削除


  numbers.shift();
  var versions = numbers.map(function (number, index) {
    var int = parseInt(number, 10);

    if (index < 3) {
      return Number.isNaN(int) ? 0 : int;
    }

    return null;
  });
  props.build = versions.join('.');
  var strMajor = versions.strMajor,
      strMinor = versions.strMinor,
      strBuild = versions.strBuild;
  var major = parseInt(strMajor, 10);
  var minor = 0;

  if (versions.length >= 2) {
    minor = strMinor;
  }

  var build = '';

  if (versions.length >= 3) {
    build = strBuild;
  }

  props.major = major;
  props.version = parseFloat("".concat(major, ".").concat(minor).concat(build));
  props.numbers = versions;
};
/**
 * {@link Android}
 * - Android standard browser
 *   - `Mozilla/5.0 (Linux; U; Android 3.0; en-us; Xoom Build/HRI39) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13`,
 *   - `Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; Nexus One Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1`
 * - Windows phone
 *   - `Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; DEVICE INFO) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Mobile Safari/537.36 Edge/12.OS_BUILD_NUMBER`
 * - #ref: `https://msdn.microsoft.com/ja-jp/library/hh869301(v=vs.85).aspx`
 * - @see http://googlewebmastercentral.blogspot.jp/2011/03/mo-better-to-also-detect-mobile-user.html
 */


var init = function init() {
  if (props) {
    return;
  }

  props = Object.assign({}, _devices__WEBPACK_IMPORTED_MODULE_4__["default"].props);
  var ua = _devices__WEBPACK_IMPORTED_MODULE_4__["default"].ua; // windows phone ua に `Android` が入っている

  var android = !_Windows__WEBPACK_IMPORTED_MODULE_5__["default"].phone() && !!ua.match(/android/i);

  if (android) {
    props.android = true;
    props.phone = !!ua.match(/mobile/i); // phone / tablet

    if (!props.phone) {
      props.tablet = true;
    } // Android 標準 browser


    props.standard = _devices__WEBPACK_IMPORTED_MODULE_4__["default"].safari && (!!ua.match(/version/i) || !!ua.match(/samsungbrowser/i)); // hd

    props.hd = Math.max(window.innerWidth, window.innerHeight) > 1024; // version check

    version();
  }
};
/**
 * Android OS detector
 */


var Android =
/*#__PURE__*/
function () {
  function Android() {
    _classCallCheck(this, Android);
  }

  _createClass(Android, null, [{
    key: "is",

    /**
     * Android OS
     * @returns {boolean} true: Android OS
     */
    value: function is() {
      init();
      return props.android;
    }
    /**
     * Android OS && standard browser
     * @returns {boolean} true: Android standard browser
     */

  }, {
    key: "standard",
    value: function standard() {
      init();
      return props.standard;
    }
    /**
     * Android OS && phone
     * @returns {boolean} true: Android phone
     */

  }, {
    key: "phone",
    value: function phone() {
      init();
      return props.phone;
    }
    /**
     * Android OS && tablet
     * @returns {boolean} true: Android tablet
     */

  }, {
    key: "tablet",
    value: function tablet() {
      init();
      return props.tablet;
    }
    /**
     * Android OS && HD window
     * @returns {boolean} true: Android HD window
     */

  }, {
    key: "hd",
    value: function hd() {
      init();
      return props.hd;
    }
    /**
     * Android OS version
     * @returns {number} Android OS version, not Android -1
     */

  }, {
    key: "version",
    value: function version() {
      init();
      return props.version;
    }
    /**
     * Android OS major version
     * @returns {number} Android OS major version, not Android -1
     */

  }, {
    key: "major",
    value: function major() {
      init();
      return props.major;
    }
    /**
     * Android OS version `major.minor.build`
     * @returns {string} Android OS version NN.NN.NN 型（文字）で返します, not Android ''
     */

  }, {
    key: "build",
    value: function build() {
      init();
      return props.build;
    }
    /**
     * version を配列形式で取得します
     * @returns {Array.<number>} {{major: int, minor: int, build: int}} 形式で返します
     */

  }, {
    key: "numbers",
    value: function numbers() {
      init();
      return props.numbers;
    }
    /**
     * Android 4.3 ~ 4.4 && standard browser
     * - touchend が未実装
     * @returns {boolean} true: Android 4.3 ~ 4.4
     */

  }, {
    key: "kitKat",
    value: function kitKat() {
      // no touchend - standard browser 4.3 ~ 4.4
      var v = Android.version();
      return Android.standard() && v > 4.2 && v < 4.5;
    }
  }]);

  return Android;
}();



/***/ }),

/***/ "./src/device/os/Windows.js":
/*!**********************************!*\
  !*** ./src/device/os/Windows.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Windows; });
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _devices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../devices */ "./src/device/devices.js");



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/08/28 - 16:50
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

/**
 * {@link devices}.props
 * {@link Windows}
 * @type {?object}
 */

var props = null;
/**
 * `userAgent` を解析します
 * {@link Windows}
 * @private
 */

var init = function init() {
  if (props) {
    return;
  }

  props = Object.assign({}, _devices__WEBPACK_IMPORTED_MODULE_2__["default"].props);
  var ua = _devices__WEBPACK_IMPORTED_MODULE_2__["default"].ua;
  var windows = !!ua.match(/windows/i);

  if (windows) {
    props.windows = true;
    props.phone = !!ua.match(/windows phone/i);
  }
};
/**
 * windows phone detector
 */


var Windows =
/*#__PURE__*/
function () {
  function Windows() {
    _classCallCheck(this, Windows);
  }

  _createClass(Windows, null, [{
    key: "is",

    /**
     * windows OS
     * @returns {boolean} true; windows OS
     */
    value: function is() {
      init();
      return props.windows;
    }
    /**
     * windows phone
     * @returns {boolean} true: windows phone
     */

  }, {
    key: "phone",
    value: function phone() {
      init();
      return props.phone;
    }
  }]);

  return Windows;
}();



/***/ }),

/***/ "./src/device/os/iOS.js":
/*!******************************!*\
  !*** ./src/device/os/iOS.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return iOS; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_number_is_nan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.number.is-nan */ "./node_modules/core-js/modules/es6.number.is-nan.js");
/* harmony import */ var core_js_modules_es6_number_is_nan__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_is_nan__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _devices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../devices */ "./src/device/devices.js");





function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/08/28 - 17:39
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

/**
 * {@link devices}.props
 * {@link iOS}
 * @type {?object}
 */

var props = null;
/**
 * version 情報を計算します
 * {@link iOS}
 */

var version = function version() {
  var app = _devices__WEBPACK_IMPORTED_MODULE_4__["default"].app;
  var numbers = app.match(/os (\d+)_(\d+)_?(\d+)?/i);

  if (!Array.isArray(numbers)) {
    return;
  } // iOS N.N.N 削除


  numbers.shift();
  var versions = numbers.map(function (number) {
    var int = parseInt(number, 10);
    return Number.isNaN(int) ? 0 : int;
  });
  props.build = versions.join('.');
  var strMajor = versions.strMajor,
      strMinor = versions.strMinor,
      strBuild = versions.strBuild;
  var major = parseInt(strMajor, 10);
  var minor = 0;

  if (versions.length >= 2) {
    minor = strMinor;
  }

  var build = '';

  if (versions.length >= 3) {
    build = strBuild;
  }

  props.major = major;
  props.version = parseFloat("".concat(major, ".").concat(minor).concat(build));
  props.numbers = versions;
};
/**
 * iOS 判定を行います
 * {@link iOS}
 */


var init = function init() {
  if (props) {
    return;
  }

  props = Object.assign({}, _devices__WEBPACK_IMPORTED_MODULE_4__["default"].props);
  var ua = _devices__WEBPACK_IMPORTED_MODULE_4__["default"].ua;
  var ipad = !!ua.match(/ipad/i);
  var ipod = !!ua.match(/ipod/i);
  var iphone = !!ua.match(/iphone/i) && !ipad && !ipod;
  var ios = ipad || ipod || iphone;

  if (!ios) {
    return;
  }

  var standalone = !!navigator.standalone;
  props.stanalone = standalone;
  props.ios = ios;
  props.ipad = ipad;
  props.ipod = ipod;
  props.iphone = iphone;
  props.phone = iphone || ipod;
  props.tablet = ipad; // アプリ内コンテンツ

  props.webView = ios && !standalone && !_devices__WEBPACK_IMPORTED_MODULE_4__["default"].safari; // version check

  version();
};
/**
 * iOS detector
 */


var iOS =
/*#__PURE__*/
function () {
  function iOS() {
    _classCallCheck(this, iOS);
  }

  _createClass(iOS, null, [{
    key: "is",

    /**
     * iOS
     * @returns {boolean} true: iOS
     */
    value: function is() {
      init();
      return props.ios;
    }
    /**
     * iOS && iPhone or iPod
     * @returns {boolean} true: iOS && iPhone or iPod
     */

  }, {
    key: "phone",
    value: function phone() {
      init();
      return props.phone;
    }
    /**
     * iOS && iPad
     * @returns {boolean} true: iOS && iPad
     */

  }, {
    key: "tablet",
    value: function tablet() {
      init();
      return props.tablet;
    }
    /**
     * iOS && iPhone
     * @returns {boolean} true: iOS && iPhone
     */

  }, {
    key: "iphone",
    value: function iphone() {
      init();
      return props.iphone;
    }
    /**
     * iOS && iPad
     * @returns {boolean} true: iOS && iPad
     */

  }, {
    key: "ipad",
    value: function ipad() {
      init();
      return props.ipad;
    }
    /**
     * iOS && iPod
     * @returns {boolean} true: iOS && iPod
     */

  }, {
    key: "ipod",
    value: function ipod() {
      init();
      return props.ipod;
    }
    /**
     * iOS version
     * @returns {number} iOS version, not iOS -1
     */

  }, {
    key: "version",
    value: function version() {
      init();
      return props.version;
    }
    /**
     * iOS major version
     * @returns {number} iOS major version, not iOS -1
     */

  }, {
    key: "major",
    value: function major() {
      init();
      return props.major;
    }
    /**
     * iOS version `major.minor.build`
     * @returns {string} iOS version NN.NN.NN 型（文字）で返します, not iOS 空文字列
     */

  }, {
    key: "build",
    value: function build() {
      init();
      return props.build;
    }
    /**
     * version を配列形式で取得します
     * @returns {Array.<number>} {{major: int, minor: int, build: int}} 形式で返します
     */

  }, {
    key: "numbers",
    value: function numbers() {
      init();
      return props.numbers;
    }
    /**
     * iOS webView - 標準 UA のみ対応
     * @returns {boolean} true: iOS webView
     */

  }, {
    key: "webView",
    value: function webView() {
      init();
      return props.webView;
    }
    /**
     * iOS standalone - app mode
     * @returns {boolean} true: iOS app mode
     */

  }, {
    key: "standalone",
    value: function standalone() {
      return props.standalone;
    }
  }]);

  return iOS;
}();



/***/ }),

/***/ "./src/dom/Bounding.js":
/*!*****************************!*\
  !*** ./src/dom/Bounding.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bounding; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Copyright (c) 2011-2016 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/10/06 - 22:02
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

/**
 * Element の ClientRect 取得します
 * - bottom: float
 * - height: float
 * - left: float
 * - right: float
 * - top: float
 * - width: float
 * - x: float
 * - y: float
 *
 * #ref: MSDN `https://msdn.microsoft.com/ja-jp/library/hh826029(v=vs.85).aspx`
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
 */
var Bounding =
/*#__PURE__*/
function () {
  _createClass(Bounding, null, [{
    key: "offset",
    // ----------------------------------------
    // STATIC METHOD
    // ----------------------------------------

    /**
     * `getBoundingClientRect` を使用し引数 element の offset 値を取得します
     *
     * ```
     * {{top: Number, right: Number, left: Number, bottom: Number, width: Number, height: Number}}
     * ```
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
     *
     * @param {Element} element 調査対象 Element
     * @return {ClientRect} 引数 element の offset 値を返します
     */
    value: function offset(element) {
      return element.getBoundingClientRect();
    }
    /**
     * ClientRect の複製を Object 化し writable にします
     * @param {DOMRect|ClientRect} offset 複製元 ClientRect
     * @return {{
     *  top: number,
     *  right: number,
     *  bottom: number,
     *  left: number,
     *  width: number,
     *  height: number}} ClientRect の複製 (Object) を返します
     *  @see https://developer.mozilla.org/en-US/docs/Web/API/DOMRect
     *  @see https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
     */

  }, {
    key: "clone",
    value: function clone(offset) {
      return {
        top: offset.top,
        right: offset.right,
        bottom: offset.bottom,
        left: offset.left,
        width: offset.width,
        height: offset.height
      };
    } // ----------------------------------------
    // CONSTRUCTOR
    // ----------------------------------------

    /**
     * 操作対象 Element を保存します
     * @param {Element} element 操作対象 Element
     */

  }]);

  function Bounding(element) {
    _classCallCheck(this, Bounding);

    /**
     * 操作対象 Element
     * @type {Element}
     */
    this.element = element;
  } // ----------------------------------------
  // METHOD
  // ----------------------------------------

  /**
   * `getBoundingClientRect` を使用しプロパティ element の offset 値を取得します
   * @return {ClientRect} read only ClientRect を返します
   */


  _createClass(Bounding, [{
    key: "offset",
    value: function offset() {
      return Bounding.offset(this.element);
    }
    /**
     * writable な element の offset 値を取得します
     * @return {{
     *  top: number,
     *  right: number,
     *  bottom: number,
     *  left: number,
     *  width: number,
     *  height: number}} writable な element の offset
     *  */

  }, {
    key: "clone",
    value: function clone() {
      return Bounding.clone(this.offset());
    }
  }]);

  return Bounding;
}();



/***/ }),

/***/ "./src/dom/Classes.js":
/*!****************************!*\
  !*** ./src/dom/Classes.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Classes; });
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.from */ "./node_modules/core-js/modules/es6.array.from.js");
/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_4__);






function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Copyright (c) 2011-2016 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/11/22 - 11:38
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

/**
 * Element の CSS class を操作します
 */
var Classes =
/*#__PURE__*/
function () {
  _createClass(Classes, null, [{
    key: "convert",
    // ----------------------------------------
    // STATIC METHOD
    // ----------------------------------------

    /**
     * 可哀相な IE のための配列コンバーター, `.classList` 代用します
     * @param {Element} element 操作対象 NodeList
     * @returns {Array} 配列にコンバートして返します
     */
    value: function convert(element) {
      var arr = element.className.split(' ');
      var i = 0;
      var limit = arr.length;
      var empty = [];

      for (; i < limit; i += 1) {
        var className = arr[i];

        if (!!className && className !== ' ') {
          empty.push(className);
        }
      }

      return empty;
    }
    /**
     * 引数 `element` の class name list を取得します
     * 1. `classList` && `Array.from` - `Array.from(element.classList)`
     * 2. {@link Classes.convert}
     * @param {Element} element 操作対象 Element
     * @returns {Array.<string>} 引数 `element` の class を配列変換し返します
     */

  }, {
    key: "get",
    value: function get(element) {
      return element.classList && Array.from ? Array.from(element.classList) : Classes.convert(element);
    }
    /**
     * Elementが引数 className を有するかを調べます
     * @param {Element} element 操作対象 Element
     * @param {string} className 調査対象 CSS class name
     * @returns {boolean} 存在すると true を返します
     */

  }, {
    key: "has",
    value: function has(element, className) {
      return element.classList ? element.classList.contains(className) : Classes.get(element).includes(className); // const elementClasses = Classes.get(element);
      // return elementClasses.indexOf(className) !== -1;
    }
    /**
     * Element へ引数 className を追加します
     * - className 存在チェック
     * -
     * @param {Element} node 操作対象 Element
     * @param {string} className 追加対象 CSS class name
     * @returns {boolean} 追加に成功すると true を返します
     */

  }, {
    key: "add",
    value: function add(node, className) {
      if (node.classList) {
        node.classList.add(className);
        return true;
      } // CSS class の存在チェック


      if (Classes.has(node, className)) {
        return false;
      } // argument copy


      var element = node; // @type {Array<string>} - element class を取得し配列へ変換

      var elementClasses = Classes.get(element); // 置換え配列最後尾に新規 `className` を追加します

      elementClasses.push(className); // 配列を ' '（ワンスペース）でつなぎ文字列変換後に設定します

      element.className = elementClasses.join(' ');
      return true;
    }
    /**
     * Element から引数 className を削除します
     * @param {Element} node 操作対象 Element
     * @param {string} className 削除対象 CSS class name
     * @returns {boolean} 削除に成功すると true を返します
     */

  }, {
    key: "remove",
    value: function remove(node, className) {
      if (node.classList) {
        node.classList.remove(className);
        return true;
      }

      if (!Classes.has(node, className)) {
        return false;
      } // argument copy


      var element = node; // @type {Array<string>} - element class を取得し配列へ変換

      var elementClasses = Classes.get(element); // 配列での削除対象 class の位置を取得します

      var index = elementClasses.indexOf(className); // 配列位置を元に削除実行します

      elementClasses.splice(index, 1); // 削除後配列を ' '（ワンスペース）でつなぎ文字列変換後に設定します

      element.className = elementClasses.join(' ');
      return true;
    } // ----------------------------------------
    // CONSTRUCTOR
    // ----------------------------------------

    /**
     * 操作対象 Element を保持します
     * @param {Element} element 操作対象 Element
     */

  }]);

  function Classes(element) {
    _classCallCheck(this, Classes);

    /**
     * 操作対象 Element
     * @type {Element}
     */
    this.element = element;
  } // ----------------------------------------
  // METHOD
  // ----------------------------------------

  /**
   * className を有するかを調べます
   * @param {string} className 調査対象 CSS class name
   * @returns {boolean} 存在すると true を返します
   */


  _createClass(Classes, [{
    key: "has",
    value: function has(className) {
      return Classes.has(this.element, className);
    }
    /**
     * className を追加します
     * @param {string} className 追加対象 CSS class name
     * @returns {boolean} 追加に成功すると true を返します
     */

  }, {
    key: "add",
    value: function add(className) {
      return Classes.add(this.element, className);
    }
    /**
     * className を削除します
     * @param {string} className 削除対象 CSS class name
     * @returns {boolean} 削除に成功すると true を返します
     */

  }, {
    key: "remove",
    value: function remove(className) {
      return Classes.remove(this.element, className);
    }
  }]);

  return Classes;
}();



/***/ }),

/***/ "./src/dom/Elements.js":
/*!*****************************!*\
  !*** ./src/dom/Elements.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Elements; });
/* harmony import */ var _css_Style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/Style */ "./src/css/Style.js");
/* harmony import */ var _Bounding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bounding */ "./src/dom/Bounding.js");
/* harmony import */ var _Classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Classes */ "./src/dom/Classes.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Copyright (c) 2011-2016 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/10/06 - 21:49
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */
// css
 // don


 // util
// import Type from '../util/Type';

/**
 * HTMLElement の操作を行います。
 * 操作のために各種インスタンスを保持します
 * - {@link Classes}
 * - {@link Style}
 * - {@link Bounding}
 */

var Elements =
/*#__PURE__*/
function () {
  _createClass(Elements, null, [{
    key: "id",
    // ----------------------------------------
    // STATIC METHOD
    // ----------------------------------------

    /**
     * 引数の id attribute value で HTMLElement を `document.getElementById` で取得します
     * @param {string} idName id attribute value
     * @return {?Element} Element を返します, 取得できない時は null を返します
     */
    value: function id(idName) {
      // const element = document.getElementById(idName);
      // // 存在チェックを行います
      // return Type.exist(element) ? element : null;
      return document.getElementById(idName);
    }
    /**
     * querySelector を使用し Element を探します
     * @param {string} selector 探索 selector
     * @param {Element|*} [parentNode=document] 親 Node|Element
     * @return {?Element} Element or null
     */

  }, {
    key: "select",
    value: function select(selector) {
      var parentNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
      return parentNode.querySelector(selector);
    }
    /**
     * querySelectorAll を使用し Element を探します
     * @param {string} selector 探索 selector
     * @param {Element|*} [parentNode=document] 親 Node|Element
     * @return {?NodeList} NodeList or null
     */

  }, {
    key: "selects",
    value: function selects(selector) {
      var parentNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
      var elements = parentNode.querySelectorAll(selector);
      return elements.length > 0 ? elements : null;
    } // ----------------------------------------
    // CONSTRUCTOR
    // ----------------------------------------

    /**
     * 操作対象 Element を保存します
     * @param {Element|Node} element 操作対象 Element
     */

  }]);

  function Elements(element) {
    _classCallCheck(this, Elements);

    /**
     * 対象 Element の CSS 操作を行う Style instance
     * @type {Style}
     */
    this.style = new _css_Style__WEBPACK_IMPORTED_MODULE_0__["default"](element);
    /**
     * Element class 操作のために instance を作成します - Classes instance
     * @type {Classes}
     */

    this.classes = new _Classes__WEBPACK_IMPORTED_MODULE_2__["default"](element);
    /**
     * 操作対象 Element
     * @type {Element}
     */

    this.element = element;
    /**
     * Element class `ClientRect` 取得のために instance を作成します
     * @type {Bounding}
     */

    this.bounding = new _Bounding__WEBPACK_IMPORTED_MODULE_1__["default"](element);
  } // ----------------------------------------
  // METHOD
  // ----------------------------------------

  /**
   * `getBoundingClientRect` を使用し引数 element の offset 値を取得します
   *
   * ```
   * {{top: Number, right: Number, left: Number, bottom: Number, width: Number, height: Number}}
   * ```
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
   *
   * @return {ClientRect} プロパティ element の offset 値を返します
   */


  _createClass(Elements, [{
    key: "offset",
    value: function offset() {
      return this.bounding.offset();
    }
    /**
     * className を有するかを調べます
     * @param {string} className 調査対象 CSS class name
     * @returns {boolean} 存在すると true を返します
     * @since 0.4.6
     */

  }, {
    key: "has",
    value: function has(className) {
      return this.classes.has(className);
    }
    /**
     * className を追加します
     * @param {string} className 追加対象 CSS class name
     * @returns {boolean} 追加に成功すると true を返します
     * @since 0.4.6
     */

  }, {
    key: "add",
    value: function add(className) {
      return this.classes.add(className);
    }
    /**
     * className を削除します
     * @param {string} className 削除対象 CSS class name
     * @returns {boolean} 削除に成功すると true を返します
     * @since 0.4.6
     */

  }, {
    key: "remove",
    value: function remove(className) {
      return this.classes.remove(className);
    }
  }]);

  return Elements;
}();



/***/ }),

/***/ "./src/event/EventDispatcher.js":
/*!**************************************!*\
  !*** ./src/event/EventDispatcher.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventDispatcher; });
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _util_Type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/Type */ "./src/util/Type.js");






function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Copyright (c) 2011-2016 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/06/30 - 20:09
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */
// util
 // /**
//  * private property key, listeners Object
//  * @type {Symbol}
//  * @private
//  */
// const listenersKey = Symbol('event listeners object');

/**
 * Custom Event を作成し Event 通知を行います
 *
 * ```
 * const callback = (event) => {
 *  console.log(event);
 * };
 *
 * const event = new EventDispatcher();
 * event.on('abc', callback);
 *
 * console.log(event.has('abc', callback));// true
 *
 * event.dispatch(new Events('abc'));
 *
 * event.off('abc', callback);
 * console.log(event.has('abc', callback));// false
 * ```
 *
 * {@link Events}
 */

var EventDispatcher =
/*#__PURE__*/
function () {
  /**
   * listener property をイニシャライズします
   */
  function EventDispatcher() {
    _classCallCheck(this, EventDispatcher);

    /**
     * リスナーリスト object,
     * event type {string} を key, 値は Array.<function> になります
     * @type {Object}
     */
    this.listeners = _objectSpread({}, {}); // this.listeners = Object.create({});
  } // ----------------------------------------
  // METHOD
  // ----------------------------------------

  /**
   * 全てのリスナーを破棄します
   */


  _createClass(EventDispatcher, [{
    key: "destroy",
    value: function destroy() {
      // this.listeners = Object.create({});
      this.listeners = _objectSpread({}, {});
    }
    /**
     * event type に リスナー関数を bind します
     * @param {string} type event type（種類）
     * @param {Function} listener callback関数
     * @returns {boolean} 成功・不成功の真偽値を返します
     */

  }, {
    key: "on",
    value: function on(type, listener) {
      if (!_util_Type__WEBPACK_IMPORTED_MODULE_5__["default"].exist(type)) {
        // type が有効値ではないので処理しない
        return false;
      }

      if (!_util_Type__WEBPACK_IMPORTED_MODULE_5__["default"].method(listener)) {
        // listener が 関数でないので処理しない
        return false;
      } // type {Object} - {{eventType: array [listener: Function...]...}}


      var listeners = this.listeners;

      if (!_util_Type__WEBPACK_IMPORTED_MODULE_5__["default"].has(listeners, type)) {
        // listeners.type が存在しない場合は
        // listeners.type をキーに新規配列を作成し
        // listener {function} を配列へ追加（登録）します
        listeners[type] = [];
      } // すでに listeners.type が存在する


      listeners[type].push(listener);
      return true;
    }
    /**
     * event type からリスナー関数を remove します
     * - 一時的に null 設定にします
     * - {@link EventDispatcher.clean} で all null の時に空にします
     * @param {string} type event type（種類）
     * @param {Function} listener リスナー関数
     * @returns {boolean} 成功・不成功の真偽値を返します
     */

  }, {
    key: "off",
    value: function off(type, listener) {
      if (!_util_Type__WEBPACK_IMPORTED_MODULE_5__["default"].method(listener)) {
        // listener が 関数でないので処理しない
        return false;
      } // @type {Object} - events.type:String: [listener:Function...]


      var listeners = this.listeners;

      if (!_util_Type__WEBPACK_IMPORTED_MODULE_5__["default"].has(listeners, type)) {
        // listener.type が存在しない - 処理しない
        return false;
      } // @type {Array} - listener list


      var types = listeners[type]; // listener の配列位置を調べる
      // @type {number}

      var index = types.indexOf(listener);

      if (index === -1) {
        // 配列位置が -1, 見つからなかった
        // 処理しない
        return false;
      } // すぐに削除するのでは無く null 代入
      // loop(iterator) の中で off すると index 位置が変わりまずい


      types[index] = null;
      this.clean(type, types);
      return true;
    }
    /**
     * リスナー配列を調べ可能なら空にします
     * - リスナーリストが全て null の時に 空配列にします
     * @param {string} type event type（種類）
     * @param {Array<Function>} types event type に登録されている配列（関数）
     * @returns {boolean} 成功・不成功の真偽値を返します, true: 空にした
     */

  }, {
    key: "clean",
    value: function clean(type, types) {
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
      // Array.some は 戻り値が true の時に走査を止めます
      // types 配列に null 以外があるかを調べます
      // @type {boolean} - listener list に 関数(typeof 'function')が存在すると true になります
      var hasFunction = types.some(function (listener) {
        return _util_Type__WEBPACK_IMPORTED_MODULE_5__["default"].method(listener);
      });

      if (!hasFunction) {
        // null 以外が無いので空にする
        // this.listeners[type] = [].slice(0);
        this.listeners[type] = [].concat();
      } // 空配列にしたかを hasFunction flag を反転させることで知らせます


      return !hasFunction;
    }
    /**
     * event type にリスナー関数が登録されているかを調べます
     * @param {string} type event type（種類）
     * @param {Function} listener リスナー関数
     * @returns {boolean} event type にリスナー関数が登録されているかの真偽値を返します
     */

  }, {
    key: "has",
    value: function has(type, listener) {
      if (!_util_Type__WEBPACK_IMPORTED_MODULE_5__["default"].method(listener)) {
        // listener が 関数でないので処理しない
        return false;
      } // @type {Object} - events.type:String: [listener:Function...]


      var listeners = this.listeners;

      if (!_util_Type__WEBPACK_IMPORTED_MODULE_5__["default"].has(listeners, type)) {
        // listener.type が存在しない - 処理しない
        return false;
      } // @type {boolean} - 存在チェック
      // return listeners[type].indexOf(listener) !== -1;


      return listeners[type].includes(listener);
    }
    /**
     * イベントを発生させリスナー関数を call します
     * @param {Events|*} events 送信される Event Object.type キーにイベント種類が設定されています、dispatch 時に target プロパティを追加し this を設定します
     * @returns {boolean} 成功・不成功の真偽値を返します
     */

  }, {
    key: "dispatch",
    value: function dispatch(events) {
      var _this = this;

      // @type {Object} - events.type:string: [listener:Function...]
      var listeners = this.listeners; // @type {string} - event type

      var type = events.type;

      if (!_util_Type__WEBPACK_IMPORTED_MODULE_5__["default"].has(listeners, type)) {
        // listener.type が存在しない - 処理しない
        return false;
      } // event.target = this しようとすると
      // Assignment to property of function parameter 'event'  no-param-reassign
      // になるのでコピーし使用します


      var eventObject = events; // target プロパティに発生元を設定する

      eventObject.target = this; // callback を実行する

      listeners[type].map( // @param listener {Function}
      function (listener) {
        // null が混じっているのでタイプチェックを行い listener 関数を実行します
        if (_util_Type__WEBPACK_IMPORTED_MODULE_5__["default"].method(listener)) {
          return listener.call(_this, eventObject);
        }

        return null;
      });
      return true;
    }
    /**
     * **alias on**
     * - event type に リスナー関数を bind します
     * @deprecated instead use {@link EventDispatcher.on}
     * @param {string} type event type（種類）
     * @param {Function} listener callback関数
     * @returns {boolean} 成功・不成功の真偽値を返します
     */

  }, {
    key: "addEventListener",
    value: function addEventListener(type, listener) {
      return this.on(type, listener);
    }
    /**
     * **alias off**
     * - event type からリスナー関数を remove します
     * @deprecated instead use {@link EventDispatcher.off}
     * @param {string} type event type（種類）
     * @param {Function} listener リスナー関数
     * @returns {boolean} 成功・不成功の真偽値を返します
     */

  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, listener) {
      return this.off(type, listener);
    }
    /**
     * **alias has**
     * - event type にリスナー関数が登録されているかを調べます
     * @deprecated instead use {@link EventDispatcher.has}
     * @param {string} type event type（種類）
     * @param {Function} listener リスナー関数
     * @returns {boolean} event type にリスナー関数が登録されているかの真偽値を返します
     */

  }, {
    key: "hasEventListener",
    value: function hasEventListener(type, listener) {
      return this.has(type, listener);
    }
    /**
     * **alias dispatch**
     * - イベントを発生させリスナー関数を call します
     * @deprecated instead use {@link EventDispatcher.dispatch}
     * @param {Events} events typeキー が必須です
     * @returns {boolean} 成功・不成功の真偽値を返します
     */

  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(events) {
      return this.dispatch(events);
    }
  }]);

  return EventDispatcher;
}();



/***/ }),

/***/ "./src/event/Events.js":
/*!*****************************!*\
  !*** ./src/event/Events.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Events; });
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_2__);




function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Copyright (c) 2011-2016 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/07/12 - 19:07
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

/**
 * custom Event のリスナー関数引数に送られる Event Object
 *
 * EventDispatcher.dispatch する時の引数として使用します
 *
 * 3つのプロパティは必須項目です、イベントにあわせプロパティを追加します
 *
 * - type: string, イベント種類
 * - target: *, イベント発生インスタンス
 * - currentTarget: *, current イベント発生インスタンス
 */
var Events =
/*#__PURE__*/
function () {
  // ----------------------------------------
  // CONSTRUCTOR
  // ----------------------------------------

  /**
   * custom Event Object
   * @param {string} type イベント種類
   * @param {*} [currentTarget=this] current イベント発生インスタンス
   * @param {*} [target=this] イベント発生インスタンス
   * */
  function Events(type) {
    var currentTarget = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
    var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;

    _classCallCheck(this, Events);

    /**
     * イベント種類
     * @type {string}
     */
    this.type = type;
    /**
     * target instance
     * @type {*}
     */

    this.target = target;
    /**
     * currentTarget instance
     * @type {*}
     */

    this.currentTarget = currentTarget;
  } // ----------------------------------------
  // METHOD
  // ----------------------------------------

  /**
   * 複製を作成します
   * @returns {Events|*} 複製を返します
   */


  _createClass(Events, [{
    key: "clone",
    value: function clone() {
      // return new Events(this.type, this.currentTarget, this.target);
      // return Object.assign({}, this);
      return _objectSpread({}, this);
    }
  }]);

  return Events;
}();



/***/ }),

/***/ "./src/event/NativeResizing.js":
/*!*************************************!*\
  !*** ./src/event/NativeResizing.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NativeResizing; });
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Scroll */ "./src/event/Scroll.js");
/* harmony import */ var _EventDispatcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EventDispatcher */ "./src/event/EventDispatcher.js");
/* harmony import */ var _Resizing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Resizing */ "./src/event/Resizing.js");
/* harmony import */ var _events_ResizingEvents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events/ResizingEvents */ "./src/event/events/ResizingEvents.js");




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/08/29 - 15:34
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */
// event


 // event/events


/**
 * requestAnimationFrame が使えない奴のための resize 監視クラス
 * - {@link Scrolling}, {@link Resizing} class 代替します
 */

var NativeResizing =
/*#__PURE__*/
function (_EventDispatcher) {
  _inherits(NativeResizing, _EventDispatcher);

  // ----------------------------------------
  // CALLBACK
  // ----------------------------------------

  /**
   * 下記のプロパティをイベント・インスタンスに追加します
   * - original {Events} - Rate Events instance
   * - y {number} - scroll top
   * - height {number} - window height
   * - width {number} - window width
   * - bottom {number} - window bottom 位置 (y + height)
   * - previous {number} - 前回の scroll top
   * - moving {number} - 前回からの移動量, 正: scroll down, 負: scroll up
   * - wide {boolean} - width が 768 以上の時に true
   * - changed {boolean} - scroll top が前回と変わっていたら true
   * @param {?Event} [event] scroll / resize Event
   */
  // ----------------------------------------
  // CONSTRUCTOR
  // ----------------------------------------

  /**
   * events instance を準備します
   */
  function NativeResizing() {
    var _this;

    _classCallCheck(this, NativeResizing);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NativeResizing).call(this)); // ------

    /**
     * Resizing event を準備します
     * @type {ScrollEvents}
     */

    _this.onUpdate = function (event) {
      // @type {number} - scroll top
      var y = _Scroll__WEBPACK_IMPORTED_MODULE_3__["default"].y(); // @type {number} - previous scroll top

      var _assertThisInitialize = _assertThisInitialized(_assertThisInitialized(_this)),
          previous = _assertThisInitialize.previous; // --- [window]
      // @type {number} - window width


      var width = window.innerWidth; // @type {number} - window height

      var height = window.innerHeight; // --- [body]

      var bodyWidth = document.body.clientWidth;
      var bodyHeight = document.body.clientHeight; // @type {boolean} - 移動したかを表します,

      var changed = event === null || previous !== y || height !== _this.window.height || width !== _this.window.width || bodyWidth !== _this.body.width || bodyHeight !== _this.body.height; // ----------------------------------------------
      // @type {ScrollEvents} - events

      var events = _this.events.clone(); // @type {Event} - Rate Events instance


      events.original = event; // @type {number} - scroll top

      events.y = y; // @type {number} - window height

      events.height = height; // @type {number} - window width

      events.width = width; // -- body

      events.bodyWidth = bodyWidth;
      events.bodyHeight = bodyHeight; // @type {number} - window bottom(y + height)

      events.bottom = y + height; // @type {boolean} - 移動したかを表します,
      // event が null の時は強制発火なので移動量 0 （scroll top 位置に変更がない）でも changed を true にします

      events.changed = changed; // @type {number} - 前回の y 位置

      events.previous = previous; // @type {number} - 移動量 +: down, -: up

      events.moving = y - previous; // event fire
      // console.log('Resizing.onUpdate', events);

      _this.dispatch(events); // ----------------------------------------------


      _this.window.width = width;
      _this.window.height = height;
      _this.body.width = bodyWidth;
      _this.body.height = bodyHeight; // save scroll top -> previous

      _this.previous = y;
    };

    _this.events = new _events_ResizingEvents__WEBPACK_IMPORTED_MODULE_6__["default"](_Resizing__WEBPACK_IMPORTED_MODULE_5__["default"].UPDATE, _assertThisInitialized(_assertThisInitialized(_this)), _assertThisInitialized(_assertThisInitialized(_this))); // console.log('Resizing events', this.events);

    /**
     * document.body size - clientWidth / clientHeight
     * @type {{width: number, height: number}}
     */

    _this.body = {
      width: -1,
      height: -1
    };
    /**
     * window innerWidth / innerHeight
     * @type {{width: number, height: number}}
     */

    _this.window = {
      width: -1,
      height: -1
    };
    /**
     * 前回スクロールトップ値
     * @type {number}
     */

    _this.previous = -1;
    /**
     * 500ms timeout timer id
     * @type {number}
     */

    _this.timer = 0; // /**
    //  * bind onUpdate - scroll / resize / timer handler
    //  * @type {function}
    //  */
    // this.onUpdate = this.onUpdate.bind(this);

    return _this;
  } // ----------------------------------------
  // METHOD
  // ----------------------------------------

  /**
   * 監視を開始します
   * - 常時監視します - document.body.onresize が作動しないため
   * @returns {*} method chain 可能なように instance を返します
   */


  _createClass(NativeResizing, [{
    key: "start",
    value: function start() {
      var _this2 = this;

      this.stop();
      window.addEventListener('scroll', this.onUpdate, false);
      window.addEventListener('resize', this.onUpdate, false);
      this.timer = setTimeout(function () {
        _this2.onUpdate();
      }, 500);
      return this;
    }
    /**
     * 監視を停止します
     * @returns {*} method chain 可能なように instance を返します
     */

  }, {
    key: "stop",
    value: function stop() {
      clearTimeout(this.timer);
      window.removeEventListener('scroll', this.onUpdate);
      window.removeEventListener('resize', this.onUpdate);
      return this;
    }
    /**
     * 強制 update
     */

  }, {
    key: "fire",
    value: function fire() {
      this.onUpdate(null);
    }
  }]);

  return NativeResizing;
}(_EventDispatcher__WEBPACK_IMPORTED_MODULE_4__["default"]);



/***/ }),

/***/ "./src/event/NativeResizingSingle.js":
/*!*******************************************!*\
  !*** ./src/event/NativeResizingSingle.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NativeResizingSingle; });
/* harmony import */ var _NativeResizing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NativeResizing */ "./src/event/NativeResizing.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/08/09 - 18:47
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

/**
 * singleton Resizing instance
 * @type {?NativeResizing}
 */

var instance = null;
/**
 * Resizing instance を singleton 提供します
 */

var NativeResizingSingle =
/*#__PURE__*/
function () {
  function NativeResizingSingle() {
    _classCallCheck(this, NativeResizingSingle);
  }

  _createClass(NativeResizingSingle, null, [{
    key: "factory",
    // ----------------------------------------
    // STATIC METHOD
    // ----------------------------------------

    /**
     * NativeResizing instance を singleton 提供します
     * @returns {NativeResizing} NativeResizing instance
     */
    value: function factory() {
      if (!instance) {
        instance = new _NativeResizing__WEBPACK_IMPORTED_MODULE_0__["default"]();
      }

      return instance;
    }
  }]);

  return NativeResizingSingle;
}();



/***/ }),

/***/ "./src/event/Resizing.js":
/*!*******************************!*\
  !*** ./src/event/Resizing.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Resizing; });
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Scrolling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Scrolling */ "./src/event/Scrolling.js");
/* harmony import */ var _Scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Scroll */ "./src/event/Scroll.js");
/* harmony import */ var _events_ResizingEvents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events/ResizingEvents */ "./src/event/events/ResizingEvents.js");




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/08/03 - 19:33
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */
// event

 // event/events


/**
 * resize のみを監視します
 */

var Resizing =
/*#__PURE__*/
function (_Scrolling) {
  _inherits(Resizing, _Scrolling);

  // ----------------------------------------
  // STATIC PROPERTY
  // ----------------------------------------

  /**
   * Resizing event type - resizingUpdate
   * @event UPDATE
   * @type {string}
   */

  /**
   * 指定 rate(fps) 毎にスクロール位置を scroll top 位置をもたせた Scrolling.UPDATE custom event を発火します
   *
   * 下記のプロパティをイベント・インスタンスに追加します
   *
   * - original {Events} - Rate Events instance
   * - y {number} - scroll top
   * - height {number} - window height
   * - width {number} - window width
   * - bottom {number} - window bottom 位置 (y + height)
   * - previous {number} - 前回の scroll top
   * - moving {number} - 前回からの移動量, 正: scroll down, 負: scroll up
   * - wide {boolean} - width が 768 以上の時に true
   * - changed {boolean} - scroll top が前回と変わっていたら true
   *
   * @param {?Events} event {@link Rate.UPDATE} Events instance
   */
  // ----------------------------------------
  // CONSTRUCTOR
  // ----------------------------------------

  /**
   * events instance を準備します
   */
  function Resizing() {
    var _this;

    _classCallCheck(this, Resizing);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Resizing).call(this)); // ------
    // /**
    //  * bound onUpdate, Rate.UPDATE event handler
    //  * @type {function}
    //  */
    // this.onUpdate = this.onUpdate.bind(this);

    /**
     * Resizing event を準備します
     * @type {ScrollEvents}
     */

    _this.onUpdate = function (event) {
      // @type {number} - scroll top
      var y = _Scroll__WEBPACK_IMPORTED_MODULE_4__["default"].y(); // @type {number} - previous scroll top

      var _assertThisInitialize = _assertThisInitialized(_assertThisInitialized(_this)),
          previous = _assertThisInitialize.previous; // --- [window]
      // @type {number} - window width


      var width = window.innerWidth; // @type {number} - window height

      var height = window.innerHeight; // --- [body]

      var bodyWidth = document.body.clientWidth;
      var bodyHeight = document.body.clientHeight; // @type {boolean} - 移動したかを表します,

      var changed = event === null || previous !== y || height !== _this.window.height || width !== _this.window.width || bodyWidth !== _this.body.width || bodyHeight !== _this.body.height; // ----------------------------------------------
      // @type {ScrollEvents} - events

      var events = _this.events.clone(); // @type {Event} - Rate Events instance


      events.original = event; // @type {number} - scroll top

      events.y = y; // @type {number} - window height

      events.height = height; // @type {number} - window width

      events.width = width; // -- body

      events.bodyWidth = bodyWidth;
      events.bodyHeight = bodyHeight; // @type {number} - window bottom(y + height)

      events.bottom = y + height; // @type {boolean} - 移動したかを表します,
      // event が null の時は強制発火なので移動量 0 （scroll top 位置に変更がない）でも changed を true にします

      events.changed = changed; // @type {number} - 前回の y 位置

      events.previous = previous; // @type {number} - 移動量 +: down, -: up

      events.moving = y - previous; // event fire
      // console.log('Resizing.onUpdate', events);

      _this.dispatch(events); // ----------------------------------------------


      _this.window.width = width;
      _this.window.height = height;
      _this.body.width = bodyWidth;
      _this.body.height = bodyHeight; // save scroll top -> previous

      _this.previous = y; // // 移動量 0 の時は rate 監視を停止する
      // if (!changed) {
      //   this.unwatch();
      // }
    };

    _this.events = new _events_ResizingEvents__WEBPACK_IMPORTED_MODULE_5__["default"](Resizing.UPDATE, _assertThisInitialized(_assertThisInitialized(_this)), _assertThisInitialized(_assertThisInitialized(_this))); // console.log('Resizing events', this.events);

    /**
     * document.body size - clientWidth / clientHeight
     * @type {{width: number, height: number}}
     */

    _this.body = {
      width: -1,
      height: -1
    };
    /**
     * window innerWidth / innerHeight
     * @type {{width: number, height: number}}
     */

    _this.window = {
      width: -1,
      height: -1
    };
    /**
     * 前回スクロールトップ値
     * @type {number}
     */

    _this.previous = -1;
    return _this;
  } // ----------------------------------------
  // METHOD
  // ----------------------------------------

  /**
   * 監視を開始します
   * - 常時監視します - document.body.onresize が作動しないため
   * @returns {*} method chain 可能なように instance を返します
   */


  _createClass(Resizing, [{
    key: "start",
    value: function start() {
      this.watch();
      return this;
    }
    /**
     * 監視を停止します
     * @returns {*} method chain 可能なように instance を返します
     */

  }, {
    key: "stop",
    value: function stop() {
      this.unwatch();
      return this;
    }
  }]);

  return Resizing;
}(_Scrolling__WEBPACK_IMPORTED_MODULE_3__["default"]);

Resizing.UPDATE = 'resizingUpdate';


/***/ }),

/***/ "./src/event/ResizingSingle.js":
/*!*************************************!*\
  !*** ./src/event/ResizingSingle.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResizingSingle; });
/* harmony import */ var _Resizing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Resizing */ "./src/event/Resizing.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/08/09 - 18:47
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

/**
 * singleton Resizing instance
 * @type {?Resizing}
 */

var instance = null;
/**
 * Resizing instance を singleton 提供します
 */

var ResizingSingle =
/*#__PURE__*/
function () {
  function ResizingSingle() {
    _classCallCheck(this, ResizingSingle);
  }

  _createClass(ResizingSingle, null, [{
    key: "factory",
    // ----------------------------------------
    // STATIC METHOD
    // ----------------------------------------

    /**
     * Resizing instance を singleton 提供します
     * @returns {Resizing} Resizing instance
     */
    value: function factory() {
      if (!instance) {
        instance = new _Resizing__WEBPACK_IMPORTED_MODULE_0__["default"]();
      }

      return instance;
    }
  }]);

  return ResizingSingle;
}();



/***/ }),

/***/ "./src/event/Rising.js":
/*!*****************************!*\
  !*** ./src/event/Rising.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Rising; });
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Scrolling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Scrolling */ "./src/event/Scrolling.js");
/* harmony import */ var _EventDispatcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EventDispatcher */ "./src/event/EventDispatcher.js");
/* harmony import */ var _events_RisingEvents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events/RisingEvents */ "./src/event/events/RisingEvents.js");
/* harmony import */ var _util_Hit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/Hit */ "./src/util/Hit.js");




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/**
 * Copyright (c) 2011-2016 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/11/30 - 14:37
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */
// event
 // import Events from './Events';


 // hit


/**
 * {@link Scrolling} class を使用しスクロールトップ位置をチェクし対象 element と window の衝突判定を {@link Hit.test} で行います
 */

var Rising =
/*#__PURE__*/
function (_EventDispatcher) {
  _inherits(Rising, _EventDispatcher);

  // ----------------------------------------
  // STATIC EVENT
  // ----------------------------------------

  /**
   * 衝突イベント - risingCollision
   * @event COLLISION
   * @type {string}
   */

  /**
   * 衝突「していない」イベント - risingAlien
   * @event ALIEN
   * @type {string}
   */
  // ----------------------------------------
  // CALLBACK
  // ----------------------------------------

  /**
   * Scrolling.UPDATE event handler - {link Hit.test} 衝突判定を行います
   * @param {ScrollEvents} scrollEvents scroll events object
   * @return {boolean} 衝突時に true を返します
   */
  // ----------------------------------------
  // CONSTRUCTOR
  // ----------------------------------------

  /**
   * elements instance と scrolling instance を保存します
   * @param {Elements} elements 対象 element を Elements インスタンスに変換します
   * @param {Scrolling} scrolling スクロールトップ監視インスタンス
   */
  function Rising(elements) {
    var _this;

    var scrolling = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _Scrolling__WEBPACK_IMPORTED_MODULE_3__["default"]();

    _classCallCheck(this, Rising);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Rising).call(this));
    /**
     * 対象 element を Elements インスタンスに変換します
     * @type {elements}
     */

    _this.onUpdate = function (scrollEvents) {
      if (!scrollEvents.changed) {
        return false;
      } // element offset


      var offset = _this.elements.offset(); // hit result


      var hit = _util_Hit__WEBPACK_IMPORTED_MODULE_6__["default"].test(scrollEvents.height, offset);

      var _assertThisInitialize = _assertThisInitialized(_assertThisInitialized(_this)),
          events = _assertThisInitialize.events;

      events.type = hit.result ? Rising.COLLISION : Rising.ALIEN; // hit / original / offset を追加します

      events.hit = hit;
      events.original = scrollEvents;
      events.offset = offset; // 発火

      _this.dispatch(events);

      return hit.result;
    };

    _this.elements = elements;
    /**
     * スクロールトップ監視インスタンス
     * @type {Scrolling}
     */

    _this.scrolling = scrolling; // const boundScroll = this.scroll.bind(this);
    // /**
    //  * bound onUpdate, Rate.UPDATE event handler
    //  * @type {function}
    //  */
    // this.onUpdate = this.onUpdate.bind(this);

    /**
     * Rising.[COLLISION|ALIEN] event instance
     * @type {RisingEvents}
     */

    _this.events = new _events_RisingEvents__WEBPACK_IMPORTED_MODULE_5__["default"](Rising.COLLISION, _assertThisInitialized(_assertThisInitialized(_this)), _assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  } // ----------------------------------------
  // METHOD
  // ----------------------------------------

  /**
   * scroll を監視します
   * @returns {Rising} method chain 可能なように instance を返します
   */


  _createClass(Rising, [{
    key: "start",
    value: function start() {
      this.stop();
      this.scrolling.on(_Scrolling__WEBPACK_IMPORTED_MODULE_3__["default"].UPDATE, this.onUpdate);
      return this;
    }
    /**
     * scroll 監視を止めます
     * @returns {Rising} method chain 可能なように instance を返します
     */

  }, {
    key: "stop",
    value: function stop() {
      this.scrolling.off(_Scrolling__WEBPACK_IMPORTED_MODULE_3__["default"].UPDATE, this.onUpdate);
      return this;
    }
  }]);

  return Rising;
}(_EventDispatcher__WEBPACK_IMPORTED_MODULE_4__["default"]);

Rising.COLLISION = 'risingCollision';
Rising.ALIEN = 'risingAlien';


/***/ }),

/***/ "./src/event/Scroll.js":
/*!*****************************!*\
  !*** ./src/event/Scroll.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Scroll; });
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _EventDispatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EventDispatcher */ "./src/event/EventDispatcher.js");
/* harmony import */ var _events_ScrollEvents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events/ScrollEvents */ "./src/event/events/ScrollEvents.js");
/* harmony import */ var _util_Freeze__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/Freeze */ "./src/util/Freeze.js");




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/**
 * Copyright (c) 2011-2016 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/07/26 - 21:05
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */
// event

 // util


/**
 * new を許可しないための inner Symbol
 * @type {symbol}
 * @private
 */

var singletonSymbol = Symbol('Scroll singleton symbol');
/**
 * singleton instance, nullable
 * @type {?Scroll}
 * @private
 */

var instance = null;
/**
 * window scroll event を監視し通知を行います
 * - singleton です。 new ではなく factory を使用し instance を作成します
 *
 * @example
 *  const instance = Scroll.factory();
 */

var Scroll =
/*#__PURE__*/
function (_EventDispatcher) {
  _inherits(Scroll, _EventDispatcher);

  _createClass(Scroll, null, [{
    key: "factory",
    // ----------------------------------------
    // STATIC CONST
    // ----------------------------------------

    /**
     * scroll で発生するイベント - `scrollScroll`
     * @event SCROLL
     * @type {string}
     */
    // ----------------------------------------
    // STATIC METHOD
    // ----------------------------------------

    /**
     * Scroll instance を singleton を保証し作成します
     * @returns {Scroll} Scroll instance を返します
     */
    value: function factory() {
      if (instance === null) {
        instance = new Scroll(singletonSymbol);
      }

      return instance;
    }
    /**
     * y 位置に scroll top を即座に移動させます
     * @param {number} [y=0] scroll top 目標値
     * @param {number} [delay=0] time out 遅延 ms
     * @returns {number} time out id
     */

  }, {
    key: "jump",
    value: function jump() {
      var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return setTimeout(function () {
        window.scrollTo(0, y);
      }, delay);
    }
    /**
     * {@link Freeze}.freeze を実行し scroll 操作を一定期間不能にします
     * @returns {number} time out ID
     */

  }, {
    key: "freeze",
    value: function freeze() {
      return _util_Freeze__WEBPACK_IMPORTED_MODULE_5__["default"].freeze();
    }
    /**
     * scroll top 位置
     * @returns {number} scroll top 位置を返します
     * @see https://developer.mozilla.org/ja/docs/Web/API/Window/scrollY
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/pageYOffset
     */

  }, {
    key: "y",
    value: function y() {
      return typeof window.pageYOffset !== 'undefined' ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    } // ---------------------------------------------------
    //  CALLBACK
    // ---------------------------------------------------

    /**
     * window scroll event handler
     * - window scroll event 発生後に scroll top 位置をもたせた Scroll.SCROLL custom event を発火します
     * @param {?Event} event window scroll event, nullable
     */

  }]);

  // ---------------------------------------------------
  //  CONSTRUCTOR
  // ---------------------------------------------------

  /**
  /**
   * singleton です
   * @param {symbol} checkSymbol singleton を保証するための private instance
   * @returns {Scroll} singleton instance を返します
   */
  function Scroll(checkSymbol) {
    var _this;

    _classCallCheck(this, Scroll);

    // checkSymbol と singleton が等価かをチェックします
    if (checkSymbol !== singletonSymbol) {
      throw new Error('don\'t use new, instead use static factory method.');
    } // instance 作成済みかをチェックし instance が null の時 this を設定します


    if (instance !== null) {
      return _possibleConstructorReturn(_this, instance);
    } // onetime setting


    _this = _possibleConstructorReturn(this, _getPrototypeOf(Scroll).call(this)); // instance = this;
    // event handler
    // /**
    //  * bound onScroll, window.onscroll event handler
    //  * @type {function}
    //  */
    // this.onScroll = this.onScroll.bind(this);

    /**
     * ScrollEvents instance, 発火時に使用します
     * @type {ScrollEvents}
     */

    _this.onScroll = function (event) {
      // @type {number} - scroll top
      var y = Scroll.y(); // @type {number} - window height

      var _window = window,
          innerHeight = _window.innerHeight; // @type {number} - 前回の scroll top
      // @type {Events} - events

      var _assertThisInitialize = _assertThisInitialized(_assertThisInitialized(_this)),
          events = _assertThisInitialize.events,
          previous = _assertThisInitialize.previous; // @type {Event} - scroll event


      events.original = event; // @type {number} - scroll top

      events.y = y; // @type {number} - window height

      events.height = innerHeight; // @type {number} - window bottom(y + height)

      events.bottom = y + innerHeight;
      events.previous = previous; // @type {boolean} - 前回の scroll top と比較し移動したかを真偽値で取得します, true: 移動した

      events.changed = previous !== y; // @type {number} - 移動量 +（正）: down, -（負）: up

      events.moving = y - previous; // event fire

      _this.dispatch(events);

      _this.previous = y;
    };

    _this.events = new _events_ScrollEvents__WEBPACK_IMPORTED_MODULE_4__["default"](Scroll.SCROLL, _assertThisInitialized(_assertThisInitialized(_this)), _assertThisInitialized(_assertThisInitialized(_this)));
    /**
     * 前回 scroll top 位置
     * @type {number}
     * @default -1
     */

    _this.previous = -1; // 設定済み instance を返します

    return _possibleConstructorReturn(_this, _assertThisInitialized(_assertThisInitialized(_this)));
  } // ----------------------------------------
  // METHOD
  // ----------------------------------------

  /**
   * scroll event を監視します
   * @returns {Scroll} method chain 可能なように instance を返します
   */


  _createClass(Scroll, [{
    key: "start",
    value: function start() {
      this.stop();
      window.addEventListener('scroll', this.onScroll, false);
      return this;
    }
    /**
     * scroll event を監視を止めます
     * @returns {Scroll} method chain 可能なように instance を返します
     */

  }, {
    key: "stop",
    value: function stop() {
      window.removeEventListener('scroll', this.onScroll);
      return this;
    }
  }]);

  return Scroll;
}(_EventDispatcher__WEBPACK_IMPORTED_MODULE_3__["default"]);

Scroll.SCROLL = 'scrollScroll';


/***/ }),

/***/ "./src/event/Scrolling.js":
/*!********************************!*\
  !*** ./src/event/Scrolling.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Scrolling; });
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Scroll */ "./src/event/Scroll.js");
/* harmony import */ var _EventDispatcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EventDispatcher */ "./src/event/EventDispatcher.js");
/* harmony import */ var _events_ScrollEvents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events/ScrollEvents */ "./src/event/events/ScrollEvents.js");
/* harmony import */ var _tick_Rate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tick/Rate */ "./src/tick/Rate.js");




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/**
 * license inazumatv.com
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/11/04
 *
 * Copyright (c) 2011-2015 inazumatv.com, inc.
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 */
// event


 // tick


/**
 * fps: {@link Rate} new Rate(Rate.RATE_5)` で Scroll 位置を計算します
 *
 * @example
 * // 途中で rate を変更する
 * const scrolling = new Scrolling();
 * scrolling
 *    .start()
 *    .rate.setRate(Rate.RATE_12);
 * */

var Scrolling =
/*#__PURE__*/
function (_EventDispatcher) {
  _inherits(Scrolling, _EventDispatcher);

  // ---------------------------------------------------
  //  CONSTANT / EVENT
  // ---------------------------------------------------

  /**
   * fps: {@link Rate} で発生するイベント - scrollingUpdate
   * @event UPDATE
   */
  // ---------------------------------------------------
  //  CALLBACK
  // ---------------------------------------------------

  /**
   * 指定 rate(fps) 毎 scroll top 位置をもたせた Scrolling.UPDATE custom event を発火します
   *
   * 下記のプロパティをイベント・インスタンスに追加します
   *
   * - original {Events} - Rate Events instance
   * - y {number} - scroll top
   * - height {number} - window height
   * - width {number} - window width
   * - bottom {number} - window bottom 位置 (y + height)
   * - previous {number} - 前回の scroll top
   * - moving {number} - 前回からの移動量, 正: scroll down, 負: scroll up
   * - wide {boolean} - width が 768 以上の時に true
   * - changed {boolean} - scroll top が前回と変わっていたら true
   *
   * @param {?Events} event {@link Rate.UPDATE} Events instance
   */
  // ---------------------------------------------------
  //  CONSTRUCTOR
  // ---------------------------------------------------

  /**
   * @param {Rate} [rate=new Rate(Rate.RATE_30)] Rate instance, scroll 監視 fps を設定します
   */
  function Scrolling() {
    var _this;

    var rate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _tick_Rate__WEBPACK_IMPORTED_MODULE_6__["default"](_tick_Rate__WEBPACK_IMPORTED_MODULE_6__["default"].RATE_30);

    _classCallCheck(this, Scrolling);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Scrolling).call(this)); // @type {function}
    // const onUpdate = this.scroll.bind(this);
    // /**
    //  * bound onUpdate, Rate.UPDATE event handler
    //  * @type {function}
    //  */
    // this.onUpdate = this.onUpdate.bind(this);
    // this.onUpdate = onUpdate;
    // @type {ScrollEvents}
    // const events = new ScrollEvents(Scrolling.UPDATE, this, this);

    /**
     * ScrollEvents instance, 発火時に使用します
     * @type {ScrollEvents}
     */

    _this.onUpdate = function (event) {
      // @type {number} - scroll top
      var y = _Scroll__WEBPACK_IMPORTED_MODULE_3__["default"].y(); // @type {ScrollEvents} - events
      // const { events } = this;
      // @type {number} - previous scroll top

      var _assertThisInitialize = _assertThisInitialized(_assertThisInitialized(_this)),
          previous = _assertThisInitialize.previous,
          events = _assertThisInitialize.events; // @type {boolean} - 移動したかを表します,


      var changed = event === null || previous !== y; // 移動量 0 の時は rate 監視を停止する

      if (!changed) {
        _this.unwatch();
      } // @type {number} - window height


      var height = window.innerHeight; // @type {number} - window width

      var width = window.innerWidth; // @type {Event} - Rate Events instance

      events.original = event; // @type {number} - scroll top

      events.y = y; // @type {number} - window height

      events.height = height; // @type {number} - window width

      events.width = width; // @type {number} - window bottom(y + height)

      events.bottom = y + height; // @type {boolean} - 移動したかを表します,
      // event が null の時は強制発火なので移動量 0 （scroll top 位置に変更がない）でも changed を true にします

      events.changed = changed; // @type {number} - 前回の y 位置

      events.previous = previous; // @type {number} - 移動量 +: down, -: up

      events.moving = y - previous; // event fire
      // console.log('Scrolling.scroll', events);

      _this.dispatch(events); // save scroll top -> previous


      _this.previous = y;
    };

    _this.events = new _events_ScrollEvents__WEBPACK_IMPORTED_MODULE_5__["default"](Scrolling.UPDATE, _assertThisInitialized(_assertThisInitialized(_this)), _assertThisInitialized(_assertThisInitialized(_this))); // this.events = events;

    /**
     * 前回 scroll top 位置
     * @type {number}
     * @default -1
     */

    _this.previous = -1; // /**
    //  * start 済みフラッグ
    //  * @type {boolean}
    //  * @default false
    //  */
    // this.started = false;

    /**
     * Rate instance
     * @type {?Rate}
     */

    _this.rate = rate;
    /**
     * scrolling 監視開始 flag
     * @type {boolean}
     * @since 0.3.8
     */

    _this.watching = false;
    /**
     * bind onNativeEvent - window.onscroll|onresize event handler
     * @type {function}
     */

    _this.onNativeEvent = _this.onNativeEvent.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  } // ----------------------------------------
  // METHOD
  // ----------------------------------------

  /**
   * window.onscroll / window.onresize event handler,
   * `this.watching` flag を確認し `watch` を call します
   * @since 0.3.8
   */


  _createClass(Scrolling, [{
    key: "onNativeEvent",
    value: function onNativeEvent() {
      if (!this.watching) {
        this.watch();
      }
    }
    /**
     * window.onscroll / window.onresize 監視を開始します
     * @returns {Scrolling} method chain 可能なように instance を返します
     */

  }, {
    key: "start",
    value: function start() {
      window.addEventListener('scroll', this.onNativeEvent, false);
      window.addEventListener('resize', this.onNativeEvent, false);
      return this;
    }
    /**
     * window.onscroll / window.onresize 監視を停止します
     * @returns {Scrolling} method chain 可能なように instance を返します
     */

  }, {
    key: "stop",
    value: function stop() {
      window.removeEventListener('scroll', this.onNativeEvent);
      window.removeEventListener('resize', this.onNativeEvent);
      return this;
    }
    /**
     * fps を監視しスクロール位置を知らせます
     * @returns {Scrolling} method chain 可能なように instance を返します
     * @since 0.3.8
     */

  }, {
    key: "watch",
    value: function watch() {
      this.unwatch();
      this.watching = true;
      var rate = this.rate;
      rate.on(_tick_Rate__WEBPACK_IMPORTED_MODULE_6__["default"].UPDATE, this.onUpdate);
      rate.start();
      return this;
    }
    /**
     * fps 監視を止めます
     * @returns {Scrolling} method chain 可能なように instance を返します
     * @since 0.3.8
     */

  }, {
    key: "unwatch",
    value: function unwatch() {
      this.rate.off(_tick_Rate__WEBPACK_IMPORTED_MODULE_6__["default"].UPDATE, this.onUpdate);
      this.watching = false;
      return this;
    }
    /**
     * 強制的に Scrolling.SCROLL event を発火させます
     */

  }, {
    key: "fire",
    value: function fire() {
      this.onUpdate(null);
    }
  }]);

  return Scrolling;
}(_EventDispatcher__WEBPACK_IMPORTED_MODULE_4__["default"]);

Scrolling.UPDATE = 'scrollingUpdate';


/***/ }),

/***/ "./src/event/Swipe.js":
/*!****************************!*\
  !*** ./src/event/Swipe.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Swipe; });
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _EventDispatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EventDispatcher */ "./src/event/EventDispatcher.js");
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Events */ "./src/event/Events.js");
/* harmony import */ var _events_DragEvents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events/DragEvents */ "./src/event/events/DragEvents.js");
/* harmony import */ var _Touching__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Touching */ "./src/event/Touching.js");




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/09/30 - 18:21
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */
// event

 // event/events



/**
 * touch 端末 swipe 監視を行います
 * @since v0.4.4
 */

var Swipe =
/*#__PURE__*/
function (_EventDispatcher) {
  _inherits(Swipe, _EventDispatcher);

  // ----------------------------------------
  // EVENT
  // ----------------------------------------

  /**
   * LEFT - left
   * @type {string}
   */

  /**
   * RIGHT - right
   * @type {string}
   */

  /**
   * END - end
   * @type {string}
   */

  /**
   * DRAG - drag'
   * @type {string}
   */
  // ----------------------------------------
  // CALLBACK
  // ----------------------------------------

  /**
   * touchstart - event handler
   */

  /**
   * touchmove {@link Touching}.MOVE - event handler
   * @param {TouchingEvents} events events.between.y で移動量を計算します
   */

  /**
   * touchend {@link Touching}.END - event handler
   * @param {TouchingEvents} events events.between.y で移動量を計算します
   */

  /**
   * touchend {@link Touching}.CANCEL - event handler
   * - 処理を中止します
   */
  // ----------------------------------------
  // CONSTRUCTOR
  // ----------------------------------------

  /**
   * touch event 管理を行います
   * @param {Element} element touch target Element
   * @param {Touching} touching - 設定済み {@link Touching} instance
   * @param {number} [marginal=10] 閾値 X 方向 - 絶対値が超えると swipe event 発火します
   */
  function Swipe(element, touching) {
    var _this;

    var marginal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

    _classCallCheck(this, Swipe);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Swipe).call(this)); // ---`

    /**
     * drag / swipe target Element
     * @type {Element}
     */

    _initialiseProps.call(_assertThisInitialized(_assertThisInitialized(_this)));

    _this.element = element;
    /**
     * touch event 管理
     * @type {Touching}
     */

    _this.touching = touching;
    /**
     * 閾値 X 方向
     * @type {number}
     */

    _this.marginal = marginal; // /**
    //  * bound onStart - touchstart event handler
    //  * @type {function}
    //  */
    // this.onStart = this.onStart.bind(this);
    // /**
    //  * bound onMove - touchmove event handler
    //  * @type {function}
    //  */
    // this.onMove = this.onMove.bind(this);
    // /**
    //  * bound onEnd - touchend event handler
    //  * @type {function}
    //  */
    // this.onEnd = this.onEnd.bind(this);
    // /**
    //  * bound onCancel - touchcancel event handler
    //  * @type {function}
    //  */
    // this.onCancel = this.onCancel.bind(this);

    /**
     * X 移動量を累積加算します
     * @type {number}
     */

    _this.dragging = 0;
    /**
     * Swipe Events
     * - left - swipe left
     * - right - swipe right
     * - end - drag end
     * - drag - dragging
     * @type {{left: Events, right: Events, end: Events, drag: DragEvents}}
     */

    _this.events = {
      left: new _Events__WEBPACK_IMPORTED_MODULE_4__["default"](Swipe.LEFT, _assertThisInitialized(_assertThisInitialized(_this)), _assertThisInitialized(_assertThisInitialized(_this))),
      right: new _Events__WEBPACK_IMPORTED_MODULE_4__["default"](Swipe.RIGHT, _assertThisInitialized(_assertThisInitialized(_this)), _assertThisInitialized(_assertThisInitialized(_this))),
      end: new _Events__WEBPACK_IMPORTED_MODULE_4__["default"](Swipe.END, _assertThisInitialized(_assertThisInitialized(_this)), _assertThisInitialized(_assertThisInitialized(_this))),
      drag: new _events_DragEvents__WEBPACK_IMPORTED_MODULE_5__["default"](Swipe.DRAG, _assertThisInitialized(_assertThisInitialized(_this)), _assertThisInitialized(_assertThisInitialized(_this)), 0)
    };
    return _this;
  } // ----------------------------------------
  // METHOD
  // ----------------------------------------

  /**
   * x 方向閾値(`marginal`)超えているかをチェックします
   * - 超えているときは swipe 方向を check し `swipe` event を発火します
   *   - 負数 - swipe left
   *   - 正数 - swipe right
   * @return {boolean} true: 超えている
   */


  _createClass(Swipe, [{
    key: "swipeCheck",
    value: function swipeCheck() {
      var move = Math.abs(this.dragging) > this.marginal;

      if (move) {
        if (this.dragging < 0) {
          this.dispatch(this.events.left);
        } else {
          this.dispatch(this.events.right);
        }
      }

      return move;
    }
    /**
     * {@link Touching}.[MOVE|END|CANCEL] unbind します
     */

  }, {
    key: "dispose",
    value: function dispose() {
      var touching = this.touching;
      touching.off(_Touching__WEBPACK_IMPORTED_MODULE_6__["default"].MOVE, this.onMove);
      touching.off(_Touching__WEBPACK_IMPORTED_MODULE_6__["default"].END, this.onEnd);
      touching.off(_Touching__WEBPACK_IMPORTED_MODULE_6__["default"].CANCEL, this.onCancel);
    }
    /**
     * drag 量を `0` にします
     */

  }, {
    key: "reset",
    value: function reset() {
      this.dragging = 0;
    }
    /**
     * drag `x` value と共に通知します
     * @param {number} x 移動(px)
     */

  }, {
    key: "drag",
    value: function drag(x) {
      var events = this.events.drag;
      events.x = x;
      this.dispatch(events);
    }
    /**
     * {@link Touching}.START 監視を始めます
     */

  }, {
    key: "start",
    value: function start() {
      this.stop();
      var touching = this.touching;
      touching.on(_Touching__WEBPACK_IMPORTED_MODULE_6__["default"].START, this.onStart);
      touching.start();
    }
    /**
     * {@link Touching}.START 監視を停止します
     */

  }, {
    key: "stop",
    value: function stop() {
      var touching = this.touching;
      touching.off(_Touching__WEBPACK_IMPORTED_MODULE_6__["default"].START, this.onStart);
      touching.stop();
      this.dispose();
    }
  }]);

  return Swipe;
}(_EventDispatcher__WEBPACK_IMPORTED_MODULE_3__["default"]);

Swipe.LEFT = 'left';
Swipe.RIGHT = 'right';
Swipe.END = 'end';
Swipe.DRAG = 'drag';

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onStart = function () {
    _this2.dispose();

    _this2.reset(); // ----


    var touching = _this2.touching;
    touching.on(_Touching__WEBPACK_IMPORTED_MODULE_6__["default"].MOVE, _this2.onMove);
    touching.on(_Touching__WEBPACK_IMPORTED_MODULE_6__["default"].END, _this2.onEnd);
    touching.on(_Touching__WEBPACK_IMPORTED_MODULE_6__["default"].CANCEL, _this2.onCancel);
  };

  this.onMove = function (events) {
    // 移動量を累積する
    _this2.dragging += events.between.x;

    _this2.drag(_this2.dragging);

    if (_this2.swipeCheck()) {
      _this2.dispose();

      _this2.reset();
    }
  };

  this.onEnd = function (events) {
    // 移動量を累積する
    _this2.dragging += events.between.x;

    _this2.drag(_this2.dragging); // ---


    var move = _this2.swipeCheck();

    if (!move) {
      _this2.dispatch(_this2.events.end);
    } // ---


    _this2.dispose();

    _this2.reset();
  };

  this.onCancel = function () {
    _this2.dispose();

    _this2.reset();

    _this2.dispatch(_this2.events.end);
  };
};



/***/ }),

/***/ "./src/event/Touching.js":
/*!*******************************!*\
  !*** ./src/event/Touching.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Touching; });
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _EventDispatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EventDispatcher */ "./src/event/EventDispatcher.js");
/* harmony import */ var _events_TouchingEvents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events/TouchingEvents */ "./src/event/events/TouchingEvents.js");
/* harmony import */ var _util_Vectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/Vectors */ "./src/util/Vectors.js");
/* harmony import */ var _util_Type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/Type */ "./src/util/Type.js");
/* harmony import */ var _device_Can__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../device/Can */ "./src/device/Can.js");
/* harmony import */ var _device_os_Android__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../device/os/Android */ "./src/device/os/Android.js");




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/**
 * license inazumatv.com
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/10/08
 *
 * Copyright (c) 2011-2015 inazumatv.com, inc.
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 * f
 */
// event

 // util


 // device

 // device/os

 // // touchevent 3rd argument
// /**
//  * addEventListener 第三引数 - { passive: true } | false
//  * {@link Touching}
//  * @private
//  * @type {*}
//  * @since 0.3.2
//  */
// const event3rd = Can.passive() ? { passive: true } : false;

/**
 * Touch event を監視し y方向移動が `threshold` 以内の時に `TOUCH` event を発火します
 */

var Touching =
/*#__PURE__*/
function (_EventDispatcher) {
  _inherits(Touching, _EventDispatcher);

  _createClass(Touching, null, [{
    key: "scrolling",

    /**
     * addEventListener 第三引数 - { passive: true } | false
     * {@link Touching}
     * @private
     * @type {*}
     * @since 0.3.2
     */
    // ---------------------------------------------------
    //  CONSTANT / EVENT
    // ---------------------------------------------------

    /**
     * touchstart event type - touchingStart
     * @constant START
     * @type {string}
     */

    /**
     * touchend event type - touchingEnd
     * @constant END
     * @type {string}
     */

    /**
     * touchcancel event type - touchingCancel
     * @constant CANCEL
     * @type {string}
     */

    /**
     * touchmove event type - touchingMove
     * @constant MOVE
     * @type {string}
     */

    /**
     * touch event type - touchingTouch
     * @constant TOUCH
     * @type {string}
     */
    // ----------------------------------------
    // STATIC METHOD
    // ----------------------------------------

    /**
     * y 方向移動が threshold 以内か判定します
     * @param {Vectors} pointA スタートポイント(Vectors)
     * @param {Vectors} pointB エンドポイント(Vectors)
     * @param {number} threshold 閾値
     * @returns {boolean} true の時は閾値以上なのでスクロール判定になります
     */
    value: function scrolling(pointA, pointB, threshold) {
      var y = pointA.betweenY(pointB); // 正数値にし閾値と比較

      return Math.abs(y) >= threshold;
    }
    /**
     * MouseEvent|TouchEvent から pageX / pageY 座標を取得します
     * @param {Event|MouseEvent|TouchEvent} event down / move / up event object
     * @returns {{x: number, y: number}} pageX / pageY 座標を返します
     * @see https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent
     * @see https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/changedTouches
     * @see https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/touches
     */

  }, {
    key: "point",
    value: function point(event) {
      var x = event.pageX;
      var y = event.pageY; // event.pageX / pageY があればそのまま値を返します
      // Android で pageX / pageY 存在しても 0, 0 しか返さない端末あり

      if (_util_Type__WEBPACK_IMPORTED_MODULE_6__["default"].number(x) && _util_Type__WEBPACK_IMPORTED_MODULE_6__["default"].number(y) && x !== 0 && y !== 0) {
        return {
          x: x,
          y: y
        };
      } // event.pageX / pageY がない時は TouchEvent の changedTouches から取得します
      // touch event
      // @type {TouchList}


      var touches = event.changedTouches || event.touches; // touches が取得できない時は 0 をセットし返します

      if (!_util_Type__WEBPACK_IMPORTED_MODULE_6__["default"].exist(touches) || touches.length === 0) {
        return {
          x: 0,
          y: 0
        };
      } // changedTouches list の先頭データを取り出し pageX / pageY を取得します
      // @type {Touch}


      var touch = touches[0];
      return {
        x: touch.pageX,
        y: touch.pageY
      };
    } // ---------------------------------------------------
    //  CALLBACK
    // ---------------------------------------------------

    /**
     * touchstart event handler
     * @param {Event|TouchEvent} event touchstart event
     * @returns {void}
     */

  }]);

  // ---------------------------------------------------
  //  CONSTRUCTOR
  // ---------------------------------------------------

  /**
   * 処理対象 element などを保存します
   * @param {Element} element 処理対象 Element
   * @param {boolean} [canceling=false] touchmove 中に `preventDefault` を行うフラッグ
   * false の時は {@link Can.passive} を調べ可能なら `{ passive: true }` します - since 0.3.2
   * @param {number} [threshold=10] y 方向閾値
   */
  function Touching(element) {
    var _this;

    var canceling = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var threshold = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

    _classCallCheck(this, Touching);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Touching).call(this));
    /**
     * 処理対象 Element
     * @type {Element}
     */

    _this.onStart = function (event) {
      // event unbind <- 二重 bind にならないように
      _this.dispose(); // vectors を初期化


      _this.reset(); // 現在 position を保存


      var _assertThisInitialize = _assertThisInitialized(_assertThisInitialized(_this)),
          vectors = _assertThisInitialize.vectors,
          body = _assertThisInitialize.body,
          eventOption = _assertThisInitialize.eventOption;

      var point = Touching.point(event);
      vectors.start.update(point.x, point.y);
      vectors.moving.push(vectors.start); // キャンセル event 監視を開始
      // const eventOption = this.eventOption;
      // const body = this.body;

      body.addEventListener('touchend', _this.onEnd, eventOption);
      body.addEventListener('touchmove', _this.onMove, eventOption);
      body.addEventListener('touchcancel', _this.onCancel, eventOption); // Touching.START 発火

      _this.dispatch(new _events_TouchingEvents__WEBPACK_IMPORTED_MODULE_4__["default"](Touching.START, _assertThisInitialized(_assertThisInitialized(_this)), event, vectors.start));
    };

    _this.onMove = function (event) {
      // console.log('Touching.onMove', event);
      var _assertThisInitialize2 = _assertThisInitialized(_assertThisInitialized(_this)),
          vectors = _assertThisInitialize2.vectors;

      var movingArray = vectors.moving; // 現在 position

      var point = Touching.point(event);
      var position = new _util_Vectors__WEBPACK_IMPORTED_MODULE_5__["default"](point.x, point.y, Date.now()); // 前回 position <- moving 配列最後

      var previous = movingArray.pop(); // 戻す

      movingArray.push(previous); // scroll checked

      var scrolling = Touching.scrolling(position, previous, _this.threshold);
      position.scrolling = scrolling; // 現在 position を配列後ろにセット

      movingArray.push(position); // global cancel と 閾値チェックで `preventDefault` を実行し scroll を止める

      if (_this.canceling && !scrolling) {
        event.preventDefault();
      } // 移動量


      var between = position.between(previous); // Touching.MOVE 発火

      _this.dispatch(new _events_TouchingEvents__WEBPACK_IMPORTED_MODULE_4__["default"](Touching.MOVE, _assertThisInitialized(_assertThisInitialized(_this)), event, position, between, scrolling)); // kitkat(Android 4.3 ~ 4.4 && standard browser) - touchend 発火しないので check


      if (_this.kitkat) {
        _this.kitkatEnd(event);
      }
    };

    _this.onEnd = function (event) {
      // console.log('Touching.onEnd', event);
      var _assertThisInitialize3 = _assertThisInitialized(_assertThisInitialized(_this)),
          vectors = _assertThisInitialize3.vectors; // 現在 position


      var point = Touching.point(event);
      var position = new _util_Vectors__WEBPACK_IMPORTED_MODULE_5__["default"](point.x, point.y, Date.now()); // 前回 position を touchstart 位置としチェックします

      var previous = vectors.start;
      var scrolling = Touching.scrolling(position, previous, _this.threshold);
      position.scrolling = scrolling; // global cancel と 閾値チェックで `preventDefault` を実行し scroll を止める

      if (_this.canceling && !scrolling) {
        event.preventDefault();
      } // 移動量


      var between = position.between(previous); // Touching.END 発火

      _this.dispatch(new _events_TouchingEvents__WEBPACK_IMPORTED_MODULE_4__["default"](Touching.END, _assertThisInitialized(_assertThisInitialized(_this)), event, position, between, scrolling)); // Touching.Touch 発火


      _this.dispatch(new _events_TouchingEvents__WEBPACK_IMPORTED_MODULE_4__["default"](Touching.TOUCH, _assertThisInitialized(_assertThisInitialized(_this)), event, position, between, scrolling)); // ---


      _this.dispose();
    };

    _this.onCancel = function (event) {
      return _this.abort(event);
    };

    _this.onBlur = function (event) {
      return _this.abort(event);
    };

    _this.element = element;
    /**
     * touchmove 中に `preventDefault` を行うかのフラッグ
     * @type {boolean}
     * @default false
     */

    _this.canceling = canceling;
    /**
     * y 方向閾値, default: 10px
     * @type {number}
     * @default 10
     */

    _this.threshold = threshold; // /**
    //  * bound onStart
    //  * @type {function}
    //  */
    // this.onStart = this.onStart.bind(this);
    // /**
    //  * bound onMove
    //  * @type {function}
    //  */
    // this.onMove = this.onMove.bind(this);
    // /**
    //  * bound onEnd
    //  * @type {function}
    //  */
    // this.onEnd = this.onEnd.bind(this);
    // /**
    //  * bound onCancel
    //  * @type {function}
    //  */
    // this.onCancel = this.onCancel.bind(this);
    // /**
    //  * bound onBlur
    //  * @type {function}
    //  */
    // this.onBlur = this.onBlur.bind(this);

    /**
     * 位置管理を行う Vectors instance を含む object
     * @type {{start: Vectors, end: Vectors, moving: Array.<Vectors>}}
     */

    _this.vectors = {
      start: new _util_Vectors__WEBPACK_IMPORTED_MODULE_5__["default"](),
      end: new _util_Vectors__WEBPACK_IMPORTED_MODULE_5__["default"](),
      moving: [].slice(0)
    };
    /**
     * TouchEvent listener 3rd argument, option | useCapture
     * @type {boolean}
     * @since 0.3.2
     */

    _this.eventOption = canceling ? false : Touching.event3rd;
    /**
     * [native code] - document.body
     * @type {HTMLElement}
     */

    _this.body = document.body;
    /**
     * timer ID
     * - kitkat - touchend 強制実行
     * @type {{kitkat: number}}
     * @since v0.4.4
     */

    _this.timer = {
      kitkat: 0
    };
    /**
     * Android 4.3 ~ 4.4 && standard browser (webview) flag
     * @type {boolean}
     */

    _this.kitkat = _device_os_Android__WEBPACK_IMPORTED_MODULE_8__["default"].kitKat();
    return _this;
  } // ---------------------------------------------------
  //  METHOD
  // ---------------------------------------------------

  /**
   * Android 4.3 ~ 4.4 && standard browser - browser bug のため `touchend` が発火しません
   * - `touchmove` も 1 回だけ発火します - touchmove の後に本 method `kitkatEnd` を実行します
   * - `onEnd` を強制実行し `touchend` させます
   * @param {Event} event touch event
   * @since v0.4.4
   */


  _createClass(Touching, [{
    key: "kitkatEnd",
    value: function kitkatEnd(event) {
      var _this2 = this;

      clearTimeout(this.timer.kitkat);
      this.timer.kitkat = setTimeout(function () {
        _this2.onEnd(event);
      }, 32);
    } // 処理
    // ---------------------------------------------------

    /**
     * touch event 監視を開始します
     * - `element`.ontouchstart
     * - window.onblur - cancel するため
     * @since 0.4.4
     */

  }, {
    key: "start",
    value: function start() {
      this.stop();
      this.element.addEventListener('touchstart', this.onStart, this.eventOption);
      window.addEventListener('blur', this.onBlur, false);
    }
    /**
     * touch event 監視を停止します
     * @since 0.4.4
     */

  }, {
    key: "stop",
    value: function stop() {
      this.element.removeEventListener('touchstart', this.onStart);
      window.removeEventListener('blur', this.onBlur);
      this.dispose();
    }
    /**
     * @deprecated instead use `start`
     * 初期処理<br>
     * element への `touchstart` と<br>
     * window.blur event をそれぞれ bind します
     * @returns {void}
     */

  }, {
    key: "init",
    value: function init() {
      // this.element.addEventListener('touchstart', this.onStart, this.eventOption);
      // window.addEventListener('blur', this.onBlur, false);
      this.start();
    }
    /**
     * touch event での処理をキャンセルし、設定値を初期値に戻します
     * @param {Event} event touch / window.onblur Event
     * @returns {boolean} 正常終了時に true を返します
     */

  }, {
    key: "abort",
    value: function abort(event) {
      this.dispose();
      this.reset();
      this.dispatch(new _events_TouchingEvents__WEBPACK_IMPORTED_MODULE_4__["default"](Touching.CANCEL, this, event));
      return true;
    }
    /**
     * bind した event を unbind します
     * @returns {boolean} 正常終了時に true を返します
     */

  }, {
    key: "dispose",
    value: function dispose() {
      var body = this.body;
      body.removeEventListener('touchend', this.onEnd);
      body.removeEventListener('touchmove', this.onMove);
      body.removeEventListener('touchcancel', this.onCancel);
      return true;
    }
    /**
     * 移動監視に使用した vectors instance を全て reset します
     * @returns {{start: Vectors, end: Vectors, moving: Array.<Vectors>}}
     * reset 後の vectors object を返します
     */

  }, {
    key: "reset",
    value: function reset() {
      var vectors = this.vectors;
      vectors.start.reset();
      vectors.end.reset();
      vectors.moving = [].slice(0);
      return vectors;
    }
  }]);

  return Touching;
}(_EventDispatcher__WEBPACK_IMPORTED_MODULE_3__["default"]);

Touching.event3rd = _device_Can__WEBPACK_IMPORTED_MODULE_7__["default"].passive() ? {
  passive: true
} : false;
Touching.START = 'touchingStart';
Touching.END = 'touchingEnd';
Touching.CANCEL = 'touchingCancel';
Touching.MOVE = 'touchingMove';
Touching.TOUCH = 'touchingTouch';


/***/ }),

/***/ "./src/event/Wheel.js":
/*!****************************!*\
  !*** ./src/event/Wheel.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Wheel; });
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _EventDispatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EventDispatcher */ "./src/event/EventDispatcher.js");
/* harmony import */ var _events_WheelEvents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events/WheelEvents */ "./src/event/events/WheelEvents.js");




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/**
 * Copyright (c) 2011-2016 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/07/26 - 19:12
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */
// event


/**
 * mousewheel event を監視し通知を行います
 *
 * singleton です new ではなく factory を使用し instance を作成します
 *
 * event handler 引数 `events` は {@link WheelEvents} instance です
 * - events.moved > 0 - wheel up
 *
 * @example
 *  const up = (events) => {
 *    // wheel up
 *  };
 *  const down = (events) => {
 *    // wheel down
 *  };
 *  const update = (events) => {
 *    // wheel up / down
 *  };
 *  const wheel = new Wheel();
 *  wheel.threshold = 500;
 *  wheel.on(Wheel.UP, up);
 *  wheel.on(Wheel.DOWN, down);
 *  wheel.on(Wheel.UPDATE, update);
 *  wheel.start();
 */

var Wheel =
/*#__PURE__*/
function (_EventDispatcher) {
  _inherits(Wheel, _EventDispatcher);

  // ----------------------------------------
  // EVENT
  // ----------------------------------------

  /**
   * wheel up で発生するイベント - wheelUp
   * @type {string}
   */

  /**
   * wheel down で発生するイベント - wheelDown
   * @type {string}
   */

  /**
   * wheel move で発生するイベント - wheelUpdate
   * @type {string}
   */
  // ---------------------------------------------------
  //  CALLBACK
  // ---------------------------------------------------

  /**
   * window mousewheel event handler
   * <p>delta 値を取得し `this.moving` を実行します</p>
   *
   * @listens {WheelEvent} WheelEvent.wheel
   * @param {WheelEvent} event window wheel event
   * @returns {number} 前回移動量に delta 値 を加算した値を返します
   */
  // ---------------------------------------------------
  //  CONSTRUCTOR
  // ---------------------------------------------------

  /**
   * wheel event を管理します
   * @param {number} [threshold=200] 閾値 - event を発生させる移動量(px)
   */
  function Wheel() {
    var _this;

    var threshold = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;

    _classCallCheck(this, Wheel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Wheel).call(this)); // /**
    //  * bound onMouseWheel
    //  * @type {function}
    //  */
    // this.onMouseWheel = this.onMouseWheel.bind(this);

    /**
     * 閾値, wheel 移動量が閾値を超えたときにイベントを発生させます
     * @type {number}
     * @default 200
     */

    _this.onMouseWheel = function (event) {
      var deltaY = event.deltaY;
      return _this.moving(deltaY);
    };

    _this.threshold = threshold;
    /**
     * wheelDelta 移動量が閾値を超えるかをチェックするための積算計算変数
     * @type {number}
     */

    _this.moved = 0; // /**
    //  * start flag
    //  * @type {boolean}
    //  */
    // this.started = false;
    // const events = {
    //   up: new WheelEvents(Wheel.UP, this),
    //   down: new WheelEvents(Wheel.DOWN, this),
    // };

    /**
     * UP / DOWN Events instance
     * @returns {{up: WheelEvents, down: WheelEvents, update: WheelEvents}} UP / DOWN Events instance
     */

    _this.events = {
      up: new _events_WheelEvents__WEBPACK_IMPORTED_MODULE_4__["default"](Wheel.UP, _assertThisInitialized(_assertThisInitialized(_this)), _assertThisInitialized(_assertThisInitialized(_this))),
      down: new _events_WheelEvents__WEBPACK_IMPORTED_MODULE_4__["default"](Wheel.DOWN, _assertThisInitialized(_assertThisInitialized(_this)), _assertThisInitialized(_assertThisInitialized(_this))),
      update: new _events_WheelEvents__WEBPACK_IMPORTED_MODULE_4__["default"](Wheel.UPDATE, _assertThisInitialized(_assertThisInitialized(_this)), _assertThisInitialized(_assertThisInitialized(_this)))
    }; // 設定済み instance を返します
    // return this;

    return _this;
  } // ----------------------------------------
  // METHOD
  // ----------------------------------------

  /**
   * 移動量積算 property を `0` にします
   */


  _createClass(Wheel, [{
    key: "reset",
    value: function reset() {
      this.moved = 0;
    }
    /**
     * mousewheel event を監視します
     * @returns {Wheel} method chain 可能なように instance を返します
     */

  }, {
    key: "start",
    value: function start() {
      // if (this.started) {
      //   return this;
      // }
      // this.started = true;
      // this.unwatch();
      this.stop();
      this.reset();
      window.addEventListener('wheel', this.onMouseWheel, false);
      return this;
    }
    /**
     * mousewheel event を監視を止めます
     * @returns {Wheel} method chain 可能なように instance を返します
     */

  }, {
    key: "stop",
    value: function stop() {
      // if (!this.started) {
      //   return this;
      // }
      // this.started = false;
      window.removeEventListener('wheel', this.onMouseWheel);
      return this;
    }
    /**
     * mouse delta から移動量を計算します
     * @param {number} delta mouse delta 値
     * @returns {number} 前回移動量に delta 値 を加算した値を返します
     */

  }, {
    key: "moving",
    value: function moving(delta) {
      /**
       * 移動量が閾値を超えるかをチェックするための計算変数
       * @type {number}
       */
      this.moved += delta; // @type {number}

      var moved = this.moved; // 0 check

      if (moved === 0) {
        // 移動量が 0 なので処理をしない
        return moved;
      } // 閾値チェック


      if (Math.abs(moved) >= this.threshold) {
        // scroll event を発火します
        this.update(moved); // down / up

        if (moved > 0) {
          // scroll up
          this.up(moved);
        } else {
          this.down(moved);
        } // initialize moved, 発火後に積算移動変数を初期化します
        // this.moved = 0;


        this.reset();
        return moved;
      } // 閾値を超えていないので処理をしない


      return moved;
    }
    /**
     * scroll up イベントを発火します
     * @param {number} moved 移動量
     * @returns {number} 加算移動量を返します
     */

  }, {
    key: "up",
    value: function up(moved) {
      // @type {Events}
      var events = this.events.up;
      events.moved = moved;
      this.dispatch(events);
      return moved;
    }
    /**
     * scroll down イベントを発火します
     * @param {number} moved 移動量
     * @returns {number} 加算移動量を返します
     */

  }, {
    key: "down",
    value: function down(moved) {
      // @type {Events}
      var events = this.events.down;
      events.moved = moved;
      this.dispatch(events);
      return moved;
    }
    /**
     * scroll update イベントを発火します
     * @param {number} moved 移動量
     * @returns {number} 加算移動量を返します
     */

  }, {
    key: "update",
    value: function update(moved) {
      // @type {Events}
      var events = this.events.update;
      events.moved = moved;
      this.dispatch(events);
      return moved;
    }
  }]);

  return Wheel;
}(_EventDispatcher__WEBPACK_IMPORTED_MODULE_3__["default"]);

Wheel.UP = 'wheelUp';
Wheel.DOWN = 'wheelDown';
Wheel.UPDATE = 'wheelUpdate';


/***/ }),

/***/ "./src/event/events/DragEvents.js":
/*!****************************************!*\
  !*** ./src/event/events/DragEvents.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DragEvents; });
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Events */ "./src/event/Events.js");




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/09/30 - 18:19
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

/**
 * drag events
 * @since v0.4.4
 */

var DragEvents =
/*#__PURE__*/
function (_Events) {
  _inherits(DragEvents, _Events);

  /**
   * drag events
   * @param {string} type event type
   * @param {*} currentTarget currentTarget instance
   * @param {*} target target instance
   * @param {number} x drag px
   */
  function DragEvents(type, currentTarget, target, x) {
    var _this;

    _classCallCheck(this, DragEvents);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DragEvents).call(this, type, currentTarget, target));
    /**
     * drag px
     * @type {number}
     */

    _this.x = x;
    return _this;
  }

  return DragEvents;
}(_Events__WEBPACK_IMPORTED_MODULE_3__["default"]);



/***/ }),

/***/ "./src/event/events/ResizingEvents.js":
/*!********************************************!*\
  !*** ./src/event/events/ResizingEvents.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResizingEvents; });
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ScrollEvents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ScrollEvents */ "./src/event/events/ScrollEvents.js");




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/08/04 - 18:02
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

/**
 * {@link Resizing} Events
 */

var ResizingEvents =
/*#__PURE__*/
function (_ScrollEvents) {
  _inherits(ResizingEvents, _ScrollEvents);

  /**
   * {@link Resizing} Events
   * @param {string} type イベント種類
   * @param {*} currentTarget current イベント発生インスタンス
   * @param {*} [target=undefined] イベント発生インスタンス
   */
  function ResizingEvents(type, currentTarget) {
    var _this;

    var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

    _classCallCheck(this, ResizingEvents);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ResizingEvents).call(this, type, currentTarget, target)); // -----

    /**
     * body clientWidth
     * @type {number}
     */

    _this.bodyWidth = 0;
    /**
     * body clientHeight
     * @type {number}
     */

    _this.bodyHeight = 0;
    return _this;
  }

  return ResizingEvents;
}(_ScrollEvents__WEBPACK_IMPORTED_MODULE_3__["default"]);



/***/ }),

/***/ "./src/event/events/RisingEvents.js":
/*!******************************************!*\
  !*** ./src/event/events/RisingEvents.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RisingEvents; });
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Events */ "./src/event/Events.js");




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/06/02 - 15:02
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

/**
 * {@link Rising} Events
 */

var RisingEvents =
/*#__PURE__*/
function (_Events) {
  _inherits(RisingEvents, _Events);

  // ---------------------------------------------------
  //  CONSTRUCTOR
  // ---------------------------------------------------

  /**
   * custom Event Object
   * @param {string} type イベント種類
   * @param {*} currentTarget current イベント発生インスタンス
   * @param {*} [target=undefined] イベント発生インスタンス
   * */
  function RisingEvents(type, currentTarget) {
    var _this;

    var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

    _classCallCheck(this, RisingEvents);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RisingEvents).call(this, type, currentTarget, target)); // ---

    /**
     * 衝突判定, true: 衝突
     * @type {boolean}
     */

    _this.hit = false;
    /**
     * original event
     * @type {?Event|*}
     */

    _this.original = null;
    /**
     * ClientRect
     * @type {?ClientRect}
     */

    _this.offset = null;
    return _this;
  }

  return RisingEvents;
}(_Events__WEBPACK_IMPORTED_MODULE_3__["default"]);



/***/ }),

/***/ "./src/event/events/ScrollEvents.js":
/*!******************************************!*\
  !*** ./src/event/events/ScrollEvents.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScrollEvents; });
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Events */ "./src/event/Events.js");




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Copyright (c) 2011-2016 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/11/20 - 10:54
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

/**
 * {@link Scroll} Events
 */

var ScrollEvents =
/*#__PURE__*/
function (_Events) {
  _inherits(ScrollEvents, _Events);

  // ---------------------------------------------------
  //  CONSTRUCTOR
  // ---------------------------------------------------

  /**
   * custom Event Object
   * @param {string} type イベント種類
   * @param {*} currentTarget current イベント発生インスタンス
   * @param {*} [target=undefined] イベント発生インスタンス
   * */
  function ScrollEvents(type, currentTarget) {
    var _this;

    var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

    _classCallCheck(this, ScrollEvents);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ScrollEvents).call(this, type, currentTarget, target));
    /**
     * scroll top 前回位置(px)
     * @type {number}
     */

    _this.previous = -1;
    /**
     * オリジナルイベント(window.onscroll)
     * @type {?Events|Event}
     */

    _this.original = null;
    /**
     * scroll top 現在位置(px)
     * @type {number}
     */

    _this.y = 0;
    /**
     * window innerHeight
     * @type {number}
     */

    _this.height = 0;
    /**
     * window innerWidth
     * @type {number}
     */

    _this.width = 0;
    /**
     * window 下端位置(scroll top + window height)
     * @type {number}
     */

    _this.bottom = 0;
    /**
     * scroll top 位置が前回と違うかを表すフラッグ, true: 違う
     * @type {boolean}
     */

    _this.changed = false;
    /**
     * UP / DOWN と前回からの移動距離(px), 正(+): scroll down
     * @type {number}
     */

    _this.moving = 0;
    return _this;
  }

  return ScrollEvents;
}(_Events__WEBPACK_IMPORTED_MODULE_3__["default"]);



/***/ }),

/***/ "./src/event/events/TouchingEvents.js":
/*!********************************************!*\
  !*** ./src/event/events/TouchingEvents.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TouchingEvents; });
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Events */ "./src/event/Events.js");
/* harmony import */ var _util_Vectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/Vectors */ "./src/util/Vectors.js");




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * license inazumatv.com
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/10/08
 *
 * Copyright (c) 2011-2015 inazumatv.com, inc.
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 * TouchingEvents
 */
// events
 // util


/**
 * {@link Touching} Events
 */

var TouchingEvents =
/*#__PURE__*/
function (_Events) {
  _inherits(TouchingEvents, _Events);

  /**
   * Touching events object 各プロパティを設定します
   * @param {string} type event type
   * @param {*} target イベント発生インスタンス
   * @param {Event} origin 発生時のオリジナルイベント
   * @param {Vectors} current 現在の位置
   * @param {Vectors} between 前回位置との差
   * @param {boolean} scrolling scroll したかの真偽値, true: scroll している
   */
  function TouchingEvents(type, target, origin) {
    var _this;

    var current = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new _util_Vectors__WEBPACK_IMPORTED_MODULE_4__["default"]();
    var between = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : new _util_Vectors__WEBPACK_IMPORTED_MODULE_4__["default"]();
    var scrolling = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

    _classCallCheck(this, TouchingEvents);

    // super
    _this = _possibleConstructorReturn(this, _getPrototypeOf(TouchingEvents).call(this, type, target));
    /**
     * 発生時のオリジナルイベント
     * @type {Event}
     */

    _this.origin = origin;
    /**
     * 現在の位置
     * @type {Vectors}
     */

    _this.current = current;
    /**
     * 前回位置との差
     * @type {Vectors}
     */

    _this.between = between;
    /**
     * scroll したかの真偽値
     * @type {boolean}
     */

    _this.scrolling = scrolling;
    return _this;
  }

  return TouchingEvents;
}(_Events__WEBPACK_IMPORTED_MODULE_3__["default"]);



/***/ }),

/***/ "./src/event/events/WheelEvents.js":
/*!*****************************************!*\
  !*** ./src/event/events/WheelEvents.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WheelEvents; });
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Events */ "./src/event/Events.js");




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Copyright (c) 2011-2016 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/11/20 - 12:11
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

/**
 * {@link Wheel} Events, mouse wheel で発生するイベントを管理します
 */

var WheelEvents =
/*#__PURE__*/
function (_Events) {
  _inherits(WheelEvents, _Events);

  /**
   * custom Event Object
   * @param {string} type イベント種類
   * @param {*} currentTarget current イベント発生インスタンス
   * @param {*} [target=undefined] イベント発生インスタンス
   * */
  function WheelEvents(type, currentTarget) {
    var _this;

    var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

    _classCallCheck(this, WheelEvents);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WheelEvents).call(this, type, currentTarget, target));
    /**
     * 移動距離(px)
     * @type {number}
     */

    _this.moved = 0;
    return _this;
  }

  return WheelEvents;
}(_Events__WEBPACK_IMPORTED_MODULE_3__["default"]);



/***/ }),

/***/ "./src/moku.js":
/*!*********************!*\
  !*** ./src/moku.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfill */ "./src/polyfill/index.js");
/* harmony import */ var _event_EventDispatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event/EventDispatcher */ "./src/event/EventDispatcher.js");
/* harmony import */ var _event_Events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event/Events */ "./src/event/Events.js");
/* harmony import */ var _event_Rising__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event/Rising */ "./src/event/Rising.js");
/* harmony import */ var _event_Scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event/Scroll */ "./src/event/Scroll.js");
/* harmony import */ var _event_Scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event/Scrolling */ "./src/event/Scrolling.js");
/* harmony import */ var _event_Touching__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./event/Touching */ "./src/event/Touching.js");
/* harmony import */ var _event_Wheel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./event/Wheel */ "./src/event/Wheel.js");
/* harmony import */ var _event_Resizing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./event/Resizing */ "./src/event/Resizing.js");
/* harmony import */ var _event_ResizingSingle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./event/ResizingSingle */ "./src/event/ResizingSingle.js");
/* harmony import */ var _event_Swipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./event/Swipe */ "./src/event/Swipe.js");
/* harmony import */ var _event_NativeResizing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./event/NativeResizing */ "./src/event/NativeResizing.js");
/* harmony import */ var _event_NativeResizingSingle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./event/NativeResizingSingle */ "./src/event/NativeResizingSingle.js");
/* harmony import */ var _net_Ajax__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./net/Ajax */ "./src/net/Ajax.js");
/* harmony import */ var _net_Cookie__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./net/Cookie */ "./src/net/Cookie.js");
/* harmony import */ var _net_Queries__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./net/Queries */ "./src/net/Queries.js");
/* harmony import */ var _net_AjaxThunk__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./net/AjaxThunk */ "./src/net/AjaxThunk.js");
/* harmony import */ var _tick_Cycle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tick/Cycle */ "./src/tick/Cycle.js");
/* harmony import */ var _tick_Fps__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tick/Fps */ "./src/tick/Fps.js");
/* harmony import */ var _tick_Polling__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./tick/Polling */ "./src/tick/Polling.js");
/* harmony import */ var _tick_Rate__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./tick/Rate */ "./src/tick/Rate.js");
/* harmony import */ var _util_Type__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./util/Type */ "./src/util/Type.js");
/* harmony import */ var _util_Hit__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./util/Hit */ "./src/util/Hit.js");
/* harmony import */ var _util_List__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./util/List */ "./src/util/List.js");
/* harmony import */ var _util_Text__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./util/Text */ "./src/util/Text.js");
/* harmony import */ var _util_Times__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./util/Times */ "./src/util/Times.js");
/* harmony import */ var _util_Vectors__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./util/Vectors */ "./src/util/Vectors.js");
/* harmony import */ var _util_Iro__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./util/Iro */ "./src/util/Iro.js");
/* harmony import */ var _css_Patterns__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./css/Patterns */ "./src/css/Patterns.js");
/* harmony import */ var _css_Style__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./css/Style */ "./src/css/Style.js");
/* harmony import */ var _device_Can__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./device/Can */ "./src/device/Can.js");
/* harmony import */ var _device_devices__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./device/devices */ "./src/device/devices.js");
/* harmony import */ var _device_os_Android__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./device/os/Android */ "./src/device/os/Android.js");
/* harmony import */ var _device_os_Windows__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./device/os/Windows */ "./src/device/os/Windows.js");
/* harmony import */ var _device_os_iOS__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./device/os/iOS */ "./src/device/os/iOS.js");
/* harmony import */ var _device_browser_Chrome__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./device/browser/Chrome */ "./src/device/browser/Chrome.js");
/* harmony import */ var _device_browser_CriOS__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./device/browser/CriOS */ "./src/device/browser/CriOS.js");
/* harmony import */ var _device_browser_Edge__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./device/browser/Edge */ "./src/device/browser/Edge.js");
/* harmony import */ var _device_browser_Firefox__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./device/browser/Firefox */ "./src/device/browser/Firefox.js");
/* harmony import */ var _device_browser_FxiOS__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./device/browser/FxiOS */ "./src/device/browser/FxiOS.js");
/* harmony import */ var _device_browser_IE__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./device/browser/IE */ "./src/device/browser/IE.js");
/* harmony import */ var _device_browser_Safari__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./device/browser/Safari */ "./src/device/browser/Safari.js");
/* harmony import */ var _dom_Bounding__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./dom/Bounding */ "./src/dom/Bounding.js");
/* harmony import */ var _dom_Classes__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./dom/Classes */ "./src/dom/Classes.js");
/* harmony import */ var _dom_Elements__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./dom/Elements */ "./src/dom/Elements.js");
/*!
 * Copyright (c) inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/06/30 - 17:54
 *
 * @license MIT
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 */
// 'use strict';
// // fetch / promise
// import 'whatwg-fetch';
// import Promise from 'promise-polyfill';
// // for IE
// import 'babel-polyfill';
// polyfill
// - babel-polyfill
// - requestAnimationFrame
// - promise-polyfill
// - whatwg-fetch
 // event












 // net




 // tick




 // util







 // css


 // device


 // device/os



 // device/browser







 // dom



 // // ----------------------------------------------
// // promise
// // Promise: To add to window
// if (!window.Promise) {
//   window.Promise = Promise;
// }

/**
 * **MOKU**
 * - global Object
 * - public な Class はここからアクセス可能です
 * @type {Object}
 */

var MOKU = {};
/**
 * version number を取得します
 * @returns {string} version number を返します
 */

MOKU.version = function () {
  return "0.5.4";
};
/**
 * build 日時を取得します
 * @returns {string}  build 日時を返します
 */


MOKU.buildTime = function () {
  return 1550212615167;
};
/**
 * MOKU.event
 * @type {Object} MOKU.event object を返します
 */


MOKU.event = {
  EventDispatcher: _event_EventDispatcher__WEBPACK_IMPORTED_MODULE_1__["default"],
  Events: _event_Events__WEBPACK_IMPORTED_MODULE_2__["default"],
  Rising: _event_Rising__WEBPACK_IMPORTED_MODULE_3__["default"],
  Scroll: _event_Scroll__WEBPACK_IMPORTED_MODULE_4__["default"],
  Wheel: _event_Wheel__WEBPACK_IMPORTED_MODULE_7__["default"],
  Scrolling: _event_Scrolling__WEBPACK_IMPORTED_MODULE_5__["default"],
  Touching: _event_Touching__WEBPACK_IMPORTED_MODULE_6__["default"],
  Resizing: _event_Resizing__WEBPACK_IMPORTED_MODULE_8__["default"],
  ResizingSingle: _event_ResizingSingle__WEBPACK_IMPORTED_MODULE_9__["default"],
  Swipe: _event_Swipe__WEBPACK_IMPORTED_MODULE_10__["default"],
  NativeResizing: _event_NativeResizing__WEBPACK_IMPORTED_MODULE_11__["default"],
  NativeResizingSingle: _event_NativeResizingSingle__WEBPACK_IMPORTED_MODULE_12__["default"]
};
/**
 * MOKU.net
 * @type {Object} MOKU.net object を返します
 */

MOKU.net = {
  Ajax: _net_Ajax__WEBPACK_IMPORTED_MODULE_13__["default"],
  Cookie: _net_Cookie__WEBPACK_IMPORTED_MODULE_14__["default"],
  Queries: _net_Queries__WEBPACK_IMPORTED_MODULE_15__["default"],
  AjaxThunk: _net_AjaxThunk__WEBPACK_IMPORTED_MODULE_16__["default"]
};
/**
 * MOKU.tick
 * @type {Object} MOKU.tick object を返します
 */

MOKU.tick = {
  Cycle: _tick_Cycle__WEBPACK_IMPORTED_MODULE_17__["default"],
  Fps: _tick_Fps__WEBPACK_IMPORTED_MODULE_18__["default"],
  Polling: _tick_Polling__WEBPACK_IMPORTED_MODULE_19__["default"],
  Rate: _tick_Rate__WEBPACK_IMPORTED_MODULE_20__["default"]
};
/**
 * MOKU.util
 * @type {Object} MOKU.util object を返します
 */

MOKU.util = {
  Type: _util_Type__WEBPACK_IMPORTED_MODULE_21__["default"],
  List: _util_List__WEBPACK_IMPORTED_MODULE_23__["default"],
  Text: _util_Text__WEBPACK_IMPORTED_MODULE_24__["default"],
  Times: _util_Times__WEBPACK_IMPORTED_MODULE_25__["default"],
  Vectors: _util_Vectors__WEBPACK_IMPORTED_MODULE_26__["default"],
  Hit: _util_Hit__WEBPACK_IMPORTED_MODULE_22__["default"],
  Iro: _util_Iro__WEBPACK_IMPORTED_MODULE_27__["default"]
};
/**
 * MOKU.util
 * @type {Object} MOKU.css object を返します
 */

MOKU.css = {
  Patterns: _css_Patterns__WEBPACK_IMPORTED_MODULE_28__["default"],
  Style: _css_Style__WEBPACK_IMPORTED_MODULE_29__["default"],
  Can: _device_Can__WEBPACK_IMPORTED_MODULE_30__["default"]
};
/**
 * MOKU.util
 * @type {Object} MOKU.dom object を返します
 */

MOKU.dom = {
  Bounding: _dom_Bounding__WEBPACK_IMPORTED_MODULE_42__["default"],
  Classes: _dom_Classes__WEBPACK_IMPORTED_MODULE_43__["default"],
  Elements: _dom_Elements__WEBPACK_IMPORTED_MODULE_44__["default"]
};
MOKU.device = {
  Can: _device_Can__WEBPACK_IMPORTED_MODULE_30__["default"],
  devices: _device_devices__WEBPACK_IMPORTED_MODULE_31__["default"],
  os: {
    Android: _device_os_Android__WEBPACK_IMPORTED_MODULE_32__["default"],
    Windows: _device_os_Windows__WEBPACK_IMPORTED_MODULE_33__["default"],
    iOS: _device_os_iOS__WEBPACK_IMPORTED_MODULE_34__["default"]
  },
  browser: {
    Chrome: _device_browser_Chrome__WEBPACK_IMPORTED_MODULE_35__["default"],
    CriOS: _device_browser_CriOS__WEBPACK_IMPORTED_MODULE_36__["default"],
    Edge: _device_browser_Edge__WEBPACK_IMPORTED_MODULE_37__["default"],
    Firefox: _device_browser_Firefox__WEBPACK_IMPORTED_MODULE_38__["default"],
    FxiOS: _device_browser_FxiOS__WEBPACK_IMPORTED_MODULE_39__["default"],
    IE: _device_browser_IE__WEBPACK_IMPORTED_MODULE_40__["default"],
    Safari: _device_browser_Safari__WEBPACK_IMPORTED_MODULE_41__["default"]
  }
}; // export

/**
 * global object `MOKU`
 * @type {Object}
 */

window.MOKU = MOKU;
/* harmony default export */ __webpack_exports__["default"] = (MOKU);

/***/ }),

/***/ "./src/net/Ajax.js":
/*!*************************!*\
  !*** ./src/net/Ajax.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ajax; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_Type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Type */ "./src/util/Type.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Copyright (c) 2011-2016 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/07/01 - 19:41
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */
// util
 // // built-in function
// // Safari, IE はサポートしていないのでライブラリを使用すること
// /**
//  * fetch [native code]
//  * @see https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch
//  * @type {fetch}
//  * @private
//  * @static
//  */
// const fetch = self.fetch;
// /**
//  * fetch request instance を作成します
//  * @see https://developer.mozilla.org/ja/docs/Web/API/Request
//  * @type {Request}
//  * @private
//  * @static
//  */
// const Request = self.Request;

/**
 * <p>fetch API を使用し Ajax request を行います</p>
 * <p>Safari, IE はサポートしていないので polyfill ライブラリを使用します<br>
 * また、 fetch は Promise も必要としています。</p>
 *
 * ```
 * $ bower install fetch
 *
 * $ bower install es6-promise
 * ```
 *
 * thunk friendly - ES2017 async / await するために
 * - fetch Promise を返すように変更
 * - resolve / reject argument をオプション
 * - fetch.then から result / error を return
 *
 * [caution] resolve / reject を使用しない場合は {@link AjaxThunk} を使用する方が効率的です
 * @example
 * const ajax = new Ajax();
 * // async / await 1
 * async function request() {
 *  const json = await thunk.start('https://jsonplaceholder.typicode.com/posts');
 *  const pre = document.getElementById('pre');
 *  pre.innerHTML = JSON.stringify(json);
 * }
 * request();
 * // async / await 2
 * async function request() {
 *  return await thunk.start('https://jsonplaceholder.typicode.com/posts');
 * }
 * request()
 *  .then(json => {
 *    const pre = document.getElementById('pre');
 *    pre.innerHTML = JSON.stringify(json);
 *  });
 * // resolve / reject
 * const resolve = (json) => {
 *  const pre = document.getElementById('pre');
 *  pre.innerHTML = JSON.stringify(json);
 * };
 * const reject = (error) => {};
 * const ajax = new Ajax(resolve, reject);
 * ajax.start('https://jsonplaceholder.typicode.com/posts');
 *
 * @see http://caniuse.com/#feat=fetch
 * @see https://github.com/github/fetch
 * @see https://github.com/taylorhakes/promise-polyfill
 * @see https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch
 * @see https://developer.mozilla.org/ja/docs/Web/API/Fetch_API
 * @see https://developer.mozilla.org/ja/docs/Web/API/Request
 * @see https://developer.mozilla.org/ja/docs/Web/API/Request/Request
 * @see https://developer.mozilla.org/ja/docs/Web/API/Headers
 * @see https://developer.mozilla.org/ja/docs/Web/API/Body
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 * @see http://getmesh.io/Blog/Make%20AJAX-Requests%20Great%20Again
 * @since 0.3.4 - Thunk friendly
 */

var Ajax =
/*#__PURE__*/
function () {
  _createClass(Ajax, [{
    key: "option",
    // ----------------------------------------
    // STATIC METHOD
    // ----------------------------------------

    /**
     * <p>fetch API へ送るオプションを作成します</p>
     *
     * 必ず設定します
     * - method: GET, POST, PUT, DELETE...etc
     * - cache: 'no-cache'
     * - credentials: 'same-origin'
     *
     * headers, formData は存在すれば option に追加されます
     *
     * ```
     * var myRequest = new Request(input, init);
     * ```
     * <blockquote>
     * リクエストに適用するカスタム設定を含むオプションオブジェクト。設定可能なオプションは：
     *   method：リクエストメソッド、たとえば GET、POST。
     *   headers：Headers オブジェクトか ByteString を含む、リクエストに追加するヘッダー。
     *   body： リクエストに追加するボディー：Blob か BufferSource、FormData、URLSearchParams、USVString オブジェクトが使用できる。リクエストが GET か HEAD メソッドを使用している場合、ボディーを持てないことに注意。
     *   mode：リクエストで使用するモード。たとえば、cors か no-cors、same-origin。既定値は cors。Chrome では、47 以前は no-cors が既定値であり、 same-origin は 47 から使用できるようになった。
     *   credentials：リクエストで使用するリクエスト credential：omit か same-origin、include が使用できる。 既定値は omit。Chrome では、47 以前は same-origin が既定値であり、include は 47 から使用できるようになった。
     *   cache：リクエストで使用する cache モード：default か no-store、reload、no-cache、force-cache、only-if-cached が設定できる。
     *   redirect：使用するリダイレクトモード：follow か error、manual が使用できる。Chrome では、47 以前は既定値が follow であり、manual は 47 から使用できるようになった。
     *   referrer：no-referrer か client、URL を指定する USVString。既定値は client。
     * </blockquote>
     * @param {string|USVString|Request} path Ajax request path
     * @param {string} method GET, POST, PUT, DELETE...etc request method
     * @param {Headers|Object|null} headers Headers option
     * @param {FormData|null} formData 送信フォームデータオプション
     * @returns {*|Request} fetch API へ送る Request instance を返します
     *
     * @see https://developers.google.com/web/updates/2015/03/introduction-to-fetch
     * @see https://developer.mozilla.org/ja/docs/Web/API/Request
     * @see https://developer.mozilla.org/ja/docs/Web/API/Request/Request
     */
    value: function option(path, method, headers, formData) {
      // request option
      var option = Object.assign({}, this.props); // const option = Object.create({
      //   method,
      //   cache: 'no-cache',
      //   // https://developers.google.com/web/updates/2015/03/introduction-to-fetch
      //   credentials: 'same-origin',
      // });

      option.method = method; // headers option

      if (_util_Type__WEBPACK_IMPORTED_MODULE_1__["default"].exist(headers)) {
        option.headers = headers;
      } // body へ FormData をセット


      if (_util_Type__WEBPACK_IMPORTED_MODULE_1__["default"].exist(formData)) {
        option.body = formData;
      } // https://developer.mozilla.org/ja/docs/Web/API/Request


      return new Request(path, option);
    } // ----------------------------------------
    // CONSTRUCTOR
    // ----------------------------------------

    /**
     * request 可能 / 不可能 flag を true に設定します
     * @param {?function} [resolve=null] Promise success callback
     * @param {?function} [reject=null] Promise fail callback
     */

  }]);

  function Ajax() {
    var resolve = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var reject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, Ajax);

    /**
     * request 可能 / 不可能 flag, true: 実行可能
     * @type {boolean}
     */
    this.can = true;
    /**
     * Promise success callback
     * @type {Function}
     */

    this.resolve = resolve;
    /**
     * Promise fail callback
     * @type {Function}
     */

    this.reject = reject;
    /**
     * `Request` constructor に渡す option
     * - method: GET|POST|PUT|DELETE...
     * - cache: no-cache
     * - credentials: same-origin
     * @type {{method: ?string, cache: string, credentials: string}}
     * @see https://developer.mozilla.org/ja/docs/Web/API/Request/Request
     */

    this.props = {
      method: null,
      cache: 'no-cache',
      // https://developers.google.com/web/updates/2015/03/introduction-to-fetch
      credentials: 'same-origin'
    };
  } // ----------------------------------------
  // METHOD
  // ----------------------------------------

  /**
   * <p>Ajax request 開始します</p>
   * <p>request 可能 / 不可能 flag が false の時は実行しません<br>
   * true の時は false にしリクエストを開始します</p>
   *
   * from v0.3.4
   * - resolve, reject 関数確認後実行します
   * - Promise instance を返します
   * - json / error を返します
   *
   * @param {string} path Ajax request path
   * @param {string} [method=GET] GET, POST, PUT, DELETE...etc request method
   * @param {?Headers} [headers=null] Headers option, token などを埋め込むのに使用します
   * @param {?FormData} [formData=null] フォームデータを送信するのに使用します
   * @return {Promise} ajax request を開始し fetch Promise 返します
   */


  _createClass(Ajax, [{
    key: "start",
    value: function start(path) {
      var _this = this;

      var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
      var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var formData = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      // ajax request 開始
      if (!this.can) {
        throw new Error("Ajax request busy: ".concat(this.can));
      } // flag off


      this.disable(); // @type {Request} Request instance

      var request = this.option(path, method, headers, formData); // fetch start

      return fetch(request) // @param {Object} response - Ajax response
      .then(function (response) {
        // may be success
        if (response.status !== 200) {
          throw new Error("Ajax status error: (".concat(response.status, ")"));
        }

        return response.json();
      }) // @param {Object} - JSON パース済み Object
      .then(function (json) {
        // complete event fire
        if (_util_Type__WEBPACK_IMPORTED_MODULE_1__["default"].method(_this.resolve)) {
          _this.resolve(json);
        } // flag true


        _this.enable();

        return json;
      }) // @param {Error} - Ajax something error
      .catch(function (error) {
        // error event fire
        if (_util_Type__WEBPACK_IMPORTED_MODULE_1__["default"].method(_this.reject)) {
          _this.reject(error);
        } // flag true


        _this.enable();

        return error;
      });
    }
    /**
     * 実行可否 flag を true にします
     * @returns {boolean} 現在の this.can property を返します
     */

  }, {
    key: "enable",
    value: function enable() {
      this.can = true;
      return this.can;
    }
    /**
     * 実行可否 flag を false にします
     * @returns {boolean} 現在の this.can property を返します
     */

  }, {
    key: "disable",
    value: function disable() {
      this.can = false;
      return this.can;
    }
  }]);

  return Ajax;
}();



/***/ }),

/***/ "./src/net/AjaxThunk.js":
/*!******************************!*\
  !*** ./src/net/AjaxThunk.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AjaxThunk; });
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Ajax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Ajax */ "./src/net/Ajax.js");




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/06/05 - 21:26
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

/**
 * fetch API を使用し Ajax request を行います, ref: {@link Ajax}
 * @example
 * const ajax = new Ajax();
 * // async / await 1
 * async function request() {
 *  const json = await thunk.start('https://jsonplaceholder.typicode.com/posts');
 *  const pre = document.getElementById('pre');
 *  pre.innerHTML = JSON.stringify(json);
 * }
 * request();
 * // async / await 2
 * async function request() {
 *  return await thunk.start('https://jsonplaceholder.typicode.com/posts');
 * }
 * request()
 *  .then(json => {
 *    const pre = document.getElementById('pre');
 *    pre.innerHTML = JSON.stringify(json);
 *  });
 * @see http://caniuse.com/#feat=fetch
 * @see https://github.com/github/fetch
 * @see https://github.com/taylorhakes/promise-polyfill
 * @see https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch
 * @see https://developer.mozilla.org/ja/docs/Web/API/Fetch_API
 * @see https://developer.mozilla.org/ja/docs/Web/API/Request
 * @see https://developer.mozilla.org/ja/docs/Web/API/Request/Request
 * @see https://developer.mozilla.org/ja/docs/Web/API/Headers
 * @see https://developer.mozilla.org/ja/docs/Web/API/Body
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 * @see http://getmesh.io/Blog/Make%20AJAX-Requests%20Great%20Again
 * @since 0.3.4
 */

var AjaxThunk =
/*#__PURE__*/
function (_Ajax) {
  _inherits(AjaxThunk, _Ajax);

  function AjaxThunk() {
    _classCallCheck(this, AjaxThunk);

    return _possibleConstructorReturn(this, _getPrototypeOf(AjaxThunk).apply(this, arguments));
  }

  _createClass(AjaxThunk, [{
    key: "start",
    // ----------------------------------------
    // METHOD
    // ----------------------------------------

    /**
     * <p>Ajax request 開始します</p>
     * <p>request 可能 / 不可能 flag が false の時は実行しません<br>
     * true の時は false にしリクエストを開始します</p>
     *
     * - resolve, reject 関数確認後実行します
     * - Promise instance を返します
     * - json / error を返します
     *
     * @param {string} path Ajax request path
     * @param {string} [method=GET] GET, POST, PUT, DELETE...etc request method
     * @param {?Headers} [headers=null] Headers option, token などを埋め込むのに使用します
     * @param {?FormData} [formData=null] フォームデータを送信するのに使用します
     * @return {Promise} ajax request を開始し fetch Promise 返します
     */
    value: function start(path) {
      var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
      var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var formData = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      // ajax request 開始
      if (!this.can) {
        throw new Error("Ajax request busy: ".concat(this.can));
      } // flag off


      this.disable(); // @type {Request} Request instance

      var request = this.option(path, method, headers, formData); // fetch start

      return fetch(request) // @param {Object} response - Ajax response
      .then(function (response) {
        // may be success
        if (response.status !== 200) {
          throw new Error("Ajax status error: (".concat(response.status, ")"));
        }

        return response.json();
      });
    }
  }]);

  return AjaxThunk;
}(_Ajax__WEBPACK_IMPORTED_MODULE_3__["default"]);



/***/ }),

/***/ "./src/net/Cookie.js":
/*!***************************!*\
  !*** ./src/net/Cookie.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cookie; });
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.constructor */ "./node_modules/core-js/modules/es6.regexp.constructor.js");
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1__);



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Copyright (c) 2011-2016 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/12/16 - 14:45
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */
// // --------------------------------
// // copy [native code]
// /**
//  * copy [native code] - decodeURIComponent
//  * @type {function}
//  */
// const decodeURIComponent = self.decodeURIComponent;
// /**
//  * copy [native code] - encodeURIComponent
//  * @type {function}
//  */
// const encodeURIComponent = self.encodeURIComponent;
// /**
//  * copy [native code] - RegExp
//  * @type {function}
//  */
// const RegExp = self.RegExp;

/**
 * cookie を取得・保存・削除します
 */
var Cookie =
/*#__PURE__*/
function () {
  /**
   * cookie を処理します
   *
   * インスタンスは key 毎に作成します
   * @param {string} keyName cookie key
   * @param {?Date} [endValue=null] cookie end Date instance, null の時はプラウザ `quit` で削除されます
   * @param {string} [defaultPath='/'] cookie path
   * @param {string} [defaultDomain=''] cookie domain
   * @param {boolean} [secureSetting=false] true: https 通信のときのみ、クッキーが送信されます
   */
  function Cookie(keyName) {
    var endValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var defaultPath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '/';
    var defaultDomain = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
    var secureSetting = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    _classCallCheck(this, Cookie);

    var key = keyName;
    var end = endValue;
    var path = defaultPath;
    var domain = defaultDomain;
    var secure = secureSetting;
    /**
     * cookie key を取得します
     * @returns {string} cookie key を返します
     */

    this.key = function () {
      return key;
    };
    /**
     * cookie key を設定します
     * @param {string} setting 設定する key name
     */


    this.setKey = function (setting) {
      key = setting;
    };
    /**
     * cookie end を取得します
     * @returns {?Date} cookie end Date instance
     */


    this.end = function () {
      return end;
    };
    /**
     * cookie end を設定します
     * @param {Date} setting cookie end Date instance
     */


    this.setEnd = function (setting) {
      end = setting;
    };
    /**
     * cookie path を取得します
     * @returns {string} cookie path を返します
     */


    this.path = function () {
      return path;
    };
    /**
     * cookie path を設定します
     * @param {string} setting 設定する path name
     */


    this.setPath = function (setting) {
      path = setting;
    };
    /**
     * cookie domain を取得します
     * @returns {string} cookie domain を返します
     */


    this.domain = function () {
      return domain;
    };
    /**
     * cookie domain を設定します
     * @param {string} setting 設定する domain name
     */


    this.setDomain = function (setting) {
      domain = setting;
    };
    /**
     * https 通信のときのみクッキー送信を行うかのフラッグを取得します
     * @returns {boolean} https 通信のときのみクッキー送信を行うかのフラッグ
     */


    this.secure = function () {
      return secure;
    };
    /**
     * https 通信のときのみクッキー送信を行うかのフラッグを設定します
     * @param {boolean} setting https 通信のときのみクッキー送信を行うかのフラッグ
     */


    this.setSecure = function (setting) {
      secure = setting;
    };
  } // ----------------------------------------
  // METHOD
  // ----------------------------------------

  /**
   * cookie value を取得します
   * @returns {string|null} cookie value を返します
   */


  _createClass(Cookie, [{
    key: "get",
    value: function get() {
      return Cookie.get(this.key());
    }
    /**
     * cookie value を設定します
     * @param {string} value cookie value
     * @param {?Date} [end=null] cookie end Date instance, null の時はプラウザ `quit` で削除されます
     * @param {string} [path='/'] cookie path
     * @param {string} [domain=''] cookie domain
     * @param {boolean} [secure=false] true: https 通信のときのみ、クッキーが送信されます
     * @returns {string} 設定した cookie 文字列
     */

  }, {
    key: "set",
    value: function set(value) {
      var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.end();
      var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.path();
      var domain = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.domain();
      var secure = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.secure();
      return Cookie.set(this.key(), value, end, path, domain, secure);
    }
    /**
     * cookie を削除します
     * @returns {boolean} true: cookie 削除成功
     */

  }, {
    key: "remove",
    value: function remove() {
      return Cookie.remove(this.key());
    } // ----------------------------------------
    // STATIC METHOD
    // ----------------------------------------

    /**
     * cookie value を取得します
     * @param {string} key 取得する cookie key 名称
     * @returns {string|null} cookie value
     */

  }], [{
    key: "get",
    value: function get(key) {
      var _document = document,
          cookie = _document.cookie;
      var escapeKey = encodeURIComponent(key).replace(/[-.+*]/g, '\\$&');
      var exp = new RegExp("(?:(?:^|.*;)\\s*".concat(escapeKey, "\\s*\\=\\s*([^;]*).*$)|^.*$"));
      return decodeURIComponent(cookie.replace(exp, '$1')) || null;
    }
    /**
     * cookie value を設定します
     * @param {string} key cookie key
     * @param {string} value cookie value
     * @param {?Date} [end=null] cookie end date Date instance
     * @param {string} [path=/] cookie path
     * @param {string} [domain=''] cookie domain
     * @param {boolean} [secure=false] true: https 通信のときのみ、クッキーが送信されます
     * @returns {string} 設定した cookie 文字列
     */

  }, {
    key: "set",
    value: function set(key, value) {
      var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var path = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '/';
      var domain = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
      var secure = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
      var cookie = "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(value));

      if (end) {
        cookie += "; expires=".concat(end.toUTCString());
      }

      if (path) {
        cookie += "; path=".concat(path);
      }

      if (domain) {
        cookie += "; domain=".concat(domain);
      }

      if (secure) {
        cookie += '; secure';
      }

      document.cookie = cookie;
      return cookie;
    }
    /**
     * cookie を削除します
     *
     * 現在時間より前の時刻を設定します
     * @param {string} key cookie key
     * @returns {boolean} true: 削除成功
     */

  }, {
    key: "remove",
    value: function remove(key) {
      if (Cookie.has(key)) {
        Cookie.set(key, '', new Date());
        return true;
      }

      return false;
    }
    /**
     * cookie key が存在するかを調べます
     * @param {string} key cookie key
     * @returns {boolean} true: cookie key が存在します
     */

  }, {
    key: "has",
    value: function has(key) {
      return Cookie.get(key) !== null;
    }
  }]);

  return Cookie;
}();



/***/ }),

/***/ "./src/net/Queries.js":
/*!****************************!*\
  !*** ./src/net/Queries.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Queries; });
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _util_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/Text */ "./src/util/Text.js");







function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * license inazumatv.com
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/12/23
 *
 * Copyright (c) 2011-2015 inazumatv.com, inc.
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 */

/**
 * URL query をパースします
 */

var Queries =
/*#__PURE__*/
function () {
  /**
   * URL query を受取パースします
   * @param {string} [queryString=location.search] パースする URL 文字列
   */
  function Queries() {
    var queryString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.search;

    _classCallCheck(this, Queries);

    var _Queries$parse = Queries.parse(queryString),
        _Queries$parse2 = _slicedToArray(_Queries$parse, 2),
        data = _Queries$parse2[0],
        keys = _Queries$parse2[1];

    var naked = Queries.naked(queryString);
    /**
     * query key を取得します - query key array
     * @type {Array<string>}
     */

    this.keys = keys;
    /**
     * key: value 形式を取得します - URL query を key: value 形式で返します
     * @type {Object}
     */

    this.data = data;
    /**
     * query 文字列を取得します - パースする query 文字列
     * @type {string}
     */

    this.queryString = queryString;
    /**
     * パースしやすいように正規化した query 文字列 - `?` 以降文字 + `&amp;` を `&` へ置換えます
     * @type {string}
     */

    this.naked = naked;
  } // ----------------------------------------
  // METHOD
  // ----------------------------------------

  /**
   * key が存在するかを調べます
   * @param {string} keyName 調査対象 key 名称
   * @returns {boolean} true: 存在する
   */


  _createClass(Queries, [{
    key: "has",
    value: function has(keyName) {
      return this.keys.indexOf(keyName) !== -1;
    }
    /**
     * key 値を取得します
     * @param {string} keyName 調査対象 key 名称
     * @returns {string|undefined} 見つかると文字列で返します, 見つからない時は undefined を返します
     */

  }, {
    key: "get",
    value: function get(keyName) {
      return this.data[keyName];
    }
    /**
     * key: value 形式を取得します
     * @returns {Object} URL query を key: value 形式で返します
     */

  }, {
    key: "getAll",
    value: function getAll() {
      return this.data;
    } // ----------------------------------------
    // STATIC METHOD
    // ----------------------------------------
    // /**
    //  * `&amp;` を `&` へ置換えます
    //  * @param {string} targetText 操作対象文字列
    //  * @returns {string} `&amp;` を `&` へ置換え返します
    //  */
    // static amp(targetText) {
    //   return targetText.split('&amp;').join('&');
    // }

    /**
     * 文字列先頭に `?` があればそれ以降の文字列を返し {@link Text.and} を実行し `&amp;` を `&` 変換します
     * @param {string} targetText 操作対象文字列
     * @returns {string} query を正規化します
     */

  }], [{
    key: "naked",
    value: function naked(targetText) {
      // const queryString = Queries.amp(targetText);
      var queryString = _util_Text__WEBPACK_IMPORTED_MODULE_6__["default"].and(targetText);
      return queryString.substr(0, 1) === '?' ? queryString.substring(1) : targetText;
    }
    /**
     * query を kye: value 形式にします
     * @param {string} targetText 操作対象文字列
     * @returns {[Object, Array]} data, keys を返します
     */

  }, {
    key: "parse",
    value: function parse(targetText) {
      var query = Queries.naked(targetText);
      var pairs = query.split('&');
      var data = {};
      var keys = [];
      pairs.map(function (pair) {
        var keyName = '';

        if (pair && pair.indexOf('=') !== -1) {
          // @type {Array<string>} - `key=value` を `=` で分割する
          var keyValue = pair.split('='); // @type {string} keyName

          var key = keyValue.shift(); // data object へ keyName を key に値をセットする

          data[key] = keyValue.shift();
          keyName = key; // key 名称配列へ追加する

          keys.push(key);
        }

        return keyName;
      });
      return [data, keys];
    }
    /**
     * 引数 targetText (query) から引数 keyName 値を取得します
     * @param {string} keyName key 名称
     * @param {string} targetText query
     * @returns {string|undefined} 見つかると文字列で返します, 見つからない時は undefined を返します
     */

  }, {
    key: "get",
    value: function get(keyName) {
      var targetText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location.search;

      var _Queries$parse3 = Queries.parse(targetText),
          _Queries$parse4 = _slicedToArray(_Queries$parse3, 1),
          data = _Queries$parse4[0];

      return data[keyName];
    }
    /**
     * URL query の key: value 形式を取得します
     * @param {string} targetText query
     * @returns {[Object, Array]} URL query を key: value 形式で返します
     */

  }, {
    key: "getAll",
    value: function getAll() {
      var targetText = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.search;
      // const [data] = Queries.parse(targetText);
      return Queries.parse(targetText);
    }
  }]);

  return Queries;
}();



/***/ }),

/***/ "./src/polyfill/index.js":
/*!*******************************!*\
  !*** ./src/polyfill/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _method_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./method/promise */ "./src/polyfill/method/promise.js");
/* harmony import */ var _method_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./method/fetch */ "./src/polyfill/method/fetch.js");
/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/08/28 - 18:25
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */
// babel polyfill
// import './method/babel';
// promise
 // fetch

 // import animationFrame from './method/animationFrame';
// ------------------------------------------------
// animationFrame();
// /**
//  * 以下全てを読み込みます、一部だけ必要な時は個別に `import` します
//  * - babel-polyfill - `./method/babel`
//  *   - IE, Symbol 対応できない問題を解決するために...
//  *   - https://babeljs.io/docs/usage/polyfill/
//  *   - https://github.com/babel/babel-preset-env/issues/203
//  *   - `babel-preset-env includes plugins by default. To include polyfill you need:, specify useBuiltIns: true in presets options (see more), include import "babel-polyfill" to your codebase.`
//  * - promise-polyfill - `./method/promise`
//  *   - https://github.com/taylorhakes/promise-polyfill
//  *   - https://developers.google.com/web/fundamentals/getting-started/primers/promises
//  *   - Chrome 32、Opera 19、Firefox 29、Safari 8、および Microsoft Edge - enabled
//  * - whatwg-fetch - `./method/fetch`
//  *   - https://github.com/whatwg/fetch
//  *   - https://fetch.spec.whatwg.org/
//  *   - https://github.github.io/fetch/
//  * - animationFrame - `./method/animationFrame`
//  *   - Android 4.3 以下, requestAnimationFrame 未実装なので polyfill する
//  * @type {{animationFrame: function}}
//  */
// const polyfill = {
//   animationFrame,
// };
// export default polyfill;

/***/ }),

/***/ "./src/polyfill/method/fetch.js":
/*!**************************************!*\
  !*** ./src/polyfill/method/fetch.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/08/29 - 14:06
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */
// @see https://github.com/whatwg/fetch
// @see https://fetch.spec.whatwg.org/
// @see https://github.github.io/fetch/


/***/ }),

/***/ "./src/polyfill/method/promise.js":
/*!****************************************!*\
  !*** ./src/polyfill/method/promise.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var promise_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! promise-polyfill */ "./node_modules/promise-polyfill/src/index.js");
/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/08/29 - 14:05
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */
// @see https://github.com/taylorhakes/promise-polyfill
// @see https://developers.google.com/web/fundamentals/getting-started/primers/promises
// > Chrome 32、Opera 19、Firefox 29、Safari 8、および Microsoft Edge - enabled

/**
 * Promise 未実装ブラウザへ polyfill します
 * - Chrome 32、Opera 19、Firefox 29、Safari 8、および Microsoft Edge - enabled
 * @see https://github.com/taylorhakes/promise-polyfill
 * @see https://developers.google.com/web/fundamentals/getting-started/primers/promises
 */

var activate = function activate() {
  // Promise: To add to window
  if (!window.Promise) {
    window.Promise = promise_polyfill__WEBPACK_IMPORTED_MODULE_0__["default"];
  }
};

activate();
/* harmony default export */ __webpack_exports__["default"] = (activate);

/***/ }),

/***/ "./src/tick/Cycle.js":
/*!***************************!*\
  !*** ./src/tick/Cycle.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cycle; });
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _event_EventDispatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event/EventDispatcher */ "./src/event/EventDispatcher.js");
/* harmony import */ var _events_CycleEvents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events/CycleEvents */ "./src/tick/events/CycleEvents.js");




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/**
 * license inazumatv.com
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/07/03
 *
 * Copyright (c) 2011-2015 inazumatv.com, inc.
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 */
// event
 // import Events from '../event/Events';
// tick/events


/**
 * new を許可しないための Symbol
 * @type {Symbol}
 * @private
 */

var singletonSymbol = Symbol('singleton instance');
/**
 * singleton instance, nullable
 * @type {?Cycle}
 * @private
 */

var instance = null;
/**
 * <p>requestAnimationFrame を使用しループイベントを発生させます</p>
 * <p>singleton なので new ではなく factory を使用し instance を作成します</p>
 *
 * ```
 * const loop = Cycle.factory();
 * const update = () => {
 *  // code here, something do
 * };
 * loop.on(Cycle.UPDATE, update);
 * ```
 *
 * Cycle は `requestAnimationFrame` を auto start させます
 * <p>【注意】requestAnimationFrame は tab が active(focus) な時のみ発生します<br>
 * `blur` 時にも動作させたい時は使用しないでください。<br>
 *   `setTimeout` の利用を検討してください</p>
 */

var Cycle =
/*#__PURE__*/
function (_EventDispatcher) {
  _inherits(Cycle, _EventDispatcher);

  _createClass(Cycle, null, [{
    key: "factory",
    // ----------------------------------------
    //  CONSTANT / EVENT
    // ----------------------------------------

    /**
     * requestAnimationFrame 毎に発生するイベント - cycleUpdate
     * @event UPDATE
     * @type {string}
     */
    // ----------------------------------------
    // STATIC METHOD
    // ----------------------------------------

    /**
     * Cycle instance を singleton を保証し作成します
     * @returns {Cycle} Cycle instance を返します
     */
    value: function factory() {
      if (instance === null) {
        instance = new Cycle(singletonSymbol);
      }

      return instance;
    } // ----------------------------------------
    //  CONSTRUCTOR
    // ----------------------------------------

    /**
     * singleton です
     * @param {Symbol} checkSymbol singleton を保証するための private instance
     * @returns {Cycle} singleton instance を返します
     */

  }]);

  function Cycle(checkSymbol) {
    var _this;

    _classCallCheck(this, Cycle);

    // checkSymbol と singleton が等価かをチェックします
    if (checkSymbol !== singletonSymbol) {
      throw new Error('don\'t use new, instead use static factory method.');
    } // instance 作成済みかをチェックし instance が null の時 this を設定します


    if (instance !== null) {
      return _possibleConstructorReturn(_this, instance);
    }

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Cycle).call(this)); // -------------------------------
    // onetime setting

    /**
     * Cycle.UPDATE Events instance
     * @type {Events}
     */

    _this.events = new _events_CycleEvents__WEBPACK_IMPORTED_MODULE_4__["default"](Cycle.UPDATE, _assertThisInitialized(_assertThisInitialized(_this)), _assertThisInitialized(_assertThisInitialized(_this)));
    /**
     * bound update requestAnimationFrame callback
     * @type {function}
     */

    _this.onUpdate = _this.onUpdate.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    /**
     * requestAnimationFrame ID
     * @type {number}
     */

    _this.id = 0; // instance 作成時に自動スタートさせる

    _this.start(checkSymbol); // 設定済み instance を返します


    return _possibleConstructorReturn(_this, _assertThisInitialized(_assertThisInitialized(_this)));
  } // ----------------------------------------
  // METHOD
  // ----------------------------------------

  /**
   * loop(requestAnimationFrame) を開始します
   * @private
   * @param {Symbol} checkSymbol inner method 保証する inner Symbol
   */


  _createClass(Cycle, [{
    key: "start",
    value: function start(checkSymbol) {
      // checkSymbol と singleton が等価かをチェックします
      if (checkSymbol !== singletonSymbol) {
        throw new Error('start is private method, dont call this.');
      }

      this.onUpdate();
    }
    /**
     * loop(cancelAnimationFrame) を止めます
     * @param {number} [id] requestAnimationFrame id を使い cancelAnimationFrame をします
     */

  }, {
    key: "stop",
    value: function stop() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.id;
      cancelAnimationFrame(id);
    } // ----------------------------------------
    // PRIVATE METHOD
    // ----------------------------------------

    /**
     * loop(requestAnimationFrame)コールバック関数
     * - Cycle.UPDATE event を発火します
     * @param {number} time animation time
     * @returns {number} requestAnimationFrame ID
     */

  }, {
    key: "onUpdate",
    value: function onUpdate(time) {
      // @type {number} - requestAnimationFrame id
      var id = requestAnimationFrame(this.onUpdate);
      this.id = id; // @type {Events} - events

      var events = this.events;
      events.id = id;
      events.time = time; // event fire

      this.dispatch(events);
      return id;
    }
  }]);

  return Cycle;
}(_event_EventDispatcher__WEBPACK_IMPORTED_MODULE_3__["default"]);

Cycle.UPDATE = 'cycleUpdate';


/***/ }),

/***/ "./src/tick/Fps.js":
/*!*************************!*\
  !*** ./src/tick/Fps.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Fps; });
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Polling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Polling */ "./src/tick/Polling.js");
/* harmony import */ var _events_FpsEvents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events/FpsEvents */ "./src/tick/events/FpsEvents.js");




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/**
 * Copyright (c) 2011-2016 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/07/04 - 14:19
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */
// event
// import Events from '../event/Events';
// tick
 // tick/events


/**
 * フレームレート毎に `UPDATE` イベントを発生させます
 *
 * @example
 * // 2sec. interval
 * const fps = new Fps(0.5);
 * const update = () => {
 *  // code here, something do
 * };
 * fps.on(Fps.UPDATE, update);
 * fps.start();
 * */

var Fps =
/*#__PURE__*/
function (_Polling) {
  _inherits(Fps, _Polling);

  // ----------------------------------------
  // EVENT
  // ----------------------------------------

  /**
   * フレームレート毎に発生するイベント - fpsUpdate
   * @event UPDATE
   * @type {string}
   */
  // ----------------------------------------
  // CONSTRUCTOR
  // ----------------------------------------

  /**
   * 引数の frame rate に合わせ UPDATE イベントを発生させます
   * @param {number} [fps=30] frame rate, default: 30
   */
  function Fps() {
    var _this;

    var fps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;

    _classCallCheck(this, Fps);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Fps).call(this, 1000 / fps)); // @type {Events} - Events

    var events = new _events_FpsEvents__WEBPACK_IMPORTED_MODULE_4__["default"](Fps.UPDATE, _assertThisInitialized(_assertThisInitialized(_this)), _assertThisInitialized(_assertThisInitialized(_this)));
    events.fps = fps;
    /**
     * Fps.UPDATE Events instance
     * @type {Events}
     */

    _this.events = events;
    /**
     * frame rate
     * @type {number}
     */

    _this.fps = fps;
    return _this;
  } // ----------------------------------------
  // METHOD
  // ----------------------------------------

  /**
   * fps を変更します
   * 1. プロパティ polling 変更
   * 1. 継承 method update 実行
   * @param {number} interval fps
   * @returns {boolean} 継承 method `update` をコールし UPDATE event が発生すると true を返します
   */


  _createClass(Fps, [{
    key: "change",
    value: function change(interval) {
      /**
       * polling 間隔
       * @type {number}
       */
      this.interval = 1000 / interval;
      this.fps = interval;
      this.events.fps = interval; // return this.update();

      return this.start();
    }
  }]);

  return Fps;
}(_Polling__WEBPACK_IMPORTED_MODULE_3__["default"]);

Fps.UPDATE = 'fpsUpdate';


/***/ }),

/***/ "./src/tick/Polling.js":
/*!*****************************!*\
  !*** ./src/tick/Polling.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Polling; });
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _event_EventDispatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event/EventDispatcher */ "./src/event/EventDispatcher.js");
/* harmony import */ var _Cycle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Cycle */ "./src/tick/Cycle.js");
/* harmony import */ var _events_PollingEvents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events/PollingEvents */ "./src/tick/events/PollingEvents.js");




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/**
 * Copyright (c) 2011-2016 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/07/04 - 16:46
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */
// event
 // import Events from '../event/Events';
// tick

 // tick/events

 // import CycleEvents from './events/CycleEvents';

/**
 * 一定間隔毎に UPDATE イベントを発生させます
 *
 * @example
 * // 3sec. interval
 * const polling = new Polling(1000 * 3);
 * const update = () => {
 *  // code here, something do
 * };
 * polling.on(Polling.UPDATE, update);
 * polling.start();
 */

var Polling =
/*#__PURE__*/
function (_EventDispatcher) {
  _inherits(Polling, _EventDispatcher);

  // ----------------------------------------
  // STATIC EVENT
  // ----------------------------------------

  /**
   * 一定間隔(milliseconds)毎に発生するイベント - pollingUpdate
   * @event UPDATE
   * @type {string}
   */
  // ----------------------------------------
  // CONSTRUCTOR
  // ----------------------------------------

  /**
   * 引数の polling に合わせ UPDATE イベントを発生させます
   * @param {number} [interval=1000] イベント発生間隔 milliseconds
   */
  function Polling() {
    var _this;

    var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;

    _classCallCheck(this, Polling);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Polling).call(this));
    /**
     * Cycle instance を取得します
     * @ty[e {Cycle}
     */

    _this.cycle = _Cycle__WEBPACK_IMPORTED_MODULE_4__["default"].factory();
    /**
     * 間隔(ms)
     * @type {number}
     */

    _this.interval = interval;
    /**
     * bound onUpdate, Cycle.UPDATE event handler
     * @returns {function}
     */

    _this.onUpdate = _this.onUpdate.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    /**
     * Events instance - Polling.UPDATE Events object
     * @type {Events}
     */

    _this.events = new _events_PollingEvents__WEBPACK_IMPORTED_MODULE_5__["default"](Polling.UPDATE, _assertThisInitialized(_assertThisInitialized(_this)), _assertThisInitialized(_assertThisInitialized(_this)));
    /**
     * polling event 発生時間, event を発火すると 0 にリセットされます
     * @type {number}
     */

    _this.begin = 0;
    return _this;
  } // ----------------------------------------
  // METHOD
  // ----------------------------------------

  /**
   * polling 時間を変更します<br>
   * 1. プロパティ polling 変更
   * 1. update 実行
   * @param {number} interval polling 時間
   * @returns {boolean} `update` をコールし Polling.UPDATE event が発生すると true を返します
   */


  _createClass(Polling, [{
    key: "change",
    value: function change(interval) {
      this.interval = interval;
      return this.start();
    }
    /**
     * polling を開始します
     * @returns {boolean} start に成功すると true を返します
     */

  }, {
    key: "start",
    value: function start() {
      // event unbind
      this.stop(); // @type {number} - 開始時間

      this.begin = Date.now();
      this.cycle.on(_Cycle__WEBPACK_IMPORTED_MODULE_4__["default"].UPDATE, this.onUpdate);
      return true;
    }
    /**
     * polling を止めます
     * @returns {boolean} stop に成功すると true を返します
     */

  }, {
    key: "stop",
    value: function stop() {
      this.cycle.off(_Cycle__WEBPACK_IMPORTED_MODULE_4__["default"].UPDATE, this.onUpdate);
      return true;
    }
    /**
     * Cycle.UPDATE event handler, polling を計測しイベントを発火するかを判断します
     *
     * @param {CycleEvents} events Cycle event object
     * @listens {Cycle.UPDATE} Cycle.UPDATE が発生すると実行されます
     * @returns {boolean} Polling.UPDATE event が発生すると true を返します
     */

  }, {
    key: "onUpdate",
    value: function onUpdate(events) {
      // 現在時間
      // @type {number}
      var present = Date.now(); // @type {number} - interval 間隔
      // const interval = this.interval;
      // @type {number} - 開始時間

      var begin = this.begin,
          interval = this.interval; // 現在時間 が interval より大きくなったか

      if (present - begin >= interval) {
        // event 発火
        this.fire(this.updateEvents(begin, present, events)); // 開始時間を update

        this.begin = present; // event 発生

        return true;
      }

      return false;
    } // -----
    // event create & fire

    /**
     * events object を発火前に作成します
     * @param {number} begin 開始時間: 前回の発火時間
     * @param {number} present 現在時間
     * @param {CycleEvents} cycleEvents Cycle event object
     * @returns {Events} アップデートした Events を返します
     */

  }, {
    key: "updateEvents",
    value: function updateEvents(begin, present, cycleEvents) {
      this.begin = begin; // @type {Events} - start event

      var events = this.events;
      events.begin = begin;
      events.present = present;
      events.interval = this.interval;
      events.cycleEvents = cycleEvents;
      return events;
    }
    /**
     * Polling.UPDATE event を発生します
     * @param {Events} events Polling.UPDATE event object
     * @returns {void}
     */

  }, {
    key: "fire",
    value: function fire(events) {
      this.dispatch(events);
    }
  }]);

  return Polling;
}(_event_EventDispatcher__WEBPACK_IMPORTED_MODULE_3__["default"]);

Polling.UPDATE = 'pollingUpdate';


/***/ }),

/***/ "./src/tick/Rate.js":
/*!**************************!*\
  !*** ./src/tick/Rate.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Rate; });
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _event_Events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event/Events */ "./src/event/Events.js");
/* harmony import */ var _Polling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Polling */ "./src/tick/Polling.js");




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/**
 * license inazumatv.com
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/07/16
 *
 * Copyright (c) 2011-2015 inazumatv.com, inc.
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 */
// event
 // tick


/**
 * 固定値を使用し fps を決定します
 *
 * 以下のフレームレートが設定可能です
 *
 * - 60: Rate.RATE_60
 * - 30: RATE_30
 * - 20: RATE_20
 * - 15: RATE_15
 * - 12: RATE_12
 * - 10: RATE_10
 * - 6: RATE_6
 * - 5: RATE_5
 *
 * @example
 * // 1sec interval
 * const rate = new Rate(Rate.Rate_60);
 * const update = () => {
 *  // code here, something do
 * };
 * rate.on(Rate.UPDATE, update);
 * rate.start();
 */

var Rate =
/*#__PURE__*/
function (_Polling) {
  _inherits(Rate, _Polling);

  // ----------------------------------------
  // CONST
  // ----------------------------------------

  /**
   * fps 60 基準値
   * @type {number}
   */

  /**
   * fps 30 基準値
   * @type {number}
   */

  /**
   * fps 20 基準値
   * @type {number}
   */

  /**
   * fps 15 基準値
   * @type {number}
   */

  /**
   * fps 12 基準値
   * @type {number}
   */

  /**
   * fps 10 基準値
   * @type {number}
   */

  /**
   * fps 6 基準値
   * @type {number}
   */

  /**
   * fps 5 基準値
   * @type {number}
   */

  /**
   * fps 4 基準値
   * @type {number}
   */

  /**
   * fps 3 基準値
   * @type {number}
   */

  /**
   * fps 2 基準値
   * @type {number}
   */

  /**
   * fps 1 基準値
   * @type {number}
   */
  // ----------------------------------------
  // EVENT
  // ----------------------------------------

  /**
   * フレームレート毎に発生するイベント - rateUpdate
   * @event UPDATE
   * @type {string}
   */
  // ----------------------------------------
  // CONSTRUCTOR
  // ----------------------------------------

  /**
   * 固定値フレームレート毎に UPDATE イベントを発生させます
   * @param {number} [rateValue=Rate.RATE_5] fps, 固定値以外設定できません
   */
  function Rate() {
    var _this;

    var rateValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Rate.RATE_5;

    _classCallCheck(this, Rate);

    // 60fps で polling を行う
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Rate).call(this, 1000 / 60)); // @type {Events}

    var events = new _event_Events__WEBPACK_IMPORTED_MODULE_3__["default"](Rate.UPDATE, _assertThisInitialized(_assertThisInitialized(_this)), _assertThisInitialized(_assertThisInitialized(_this))); // 設定可能な rate list

    var rates = [Rate.RATE_60, Rate.RATE_30, Rate.RATE_20, Rate.RATE_15, Rate.RATE_12, Rate.RATE_10, Rate.RATE_6, Rate.RATE_5, Rate.RATE_4, Rate.RATE_3, Rate.RATE_2, Rate.RATE_1];
    /**
     * Rate 通知 Events instance
     * @type {Events}
     */

    _this.events = events;
    /**
     * 許容可能な rate
     * @type {Array<number>}
     */

    _this.rates = rates;
    /**
     * rate count, update 毎にカウントアップします<br>
     * 不正値の時は `Rate.RATE_5` を使用します
     * @type {number}
     */

    _this.count = 0; // let rate = this.validate(rateValue) ? rateValue : Rate.RATE_5;

    /**
     * rate 値
     * @type {?number}
     * @default Rate.RATE_5
     */

    _this.rate = _this.validate(rateValue) ? rateValue : Rate.RATE_5;
    return _this;
  } // ----------------------------------------
  // METHOD
  // ----------------------------------------

  /**
   * rate 値を設定します
   * - 正常値: `this.rate` 更新, value を返します
   * - 不正値: `this.rate` 更新しません, null を返します
   * @param {number} value rate 値
   * @returns {?number} 正しい rate は設定値を不正な時は null を返します
   */


  _createClass(Rate, [{
    key: "setRate",
    value: function setRate(value) {
      if (this.validate(value)) {
        this.rate = value;
        return value;
      }

      return null;
    }
    /**
     * 正規な rate 値かをチェックします
     * @param {number} rate 対象 rate
     * @returns {boolean} 正しいと true を返します
     */

  }, {
    key: "validate",
    value: function validate(rate) {
      return this.rates.indexOf(rate) !== -1;
    }
    /**
     * fps 基準値を設定します
     * @throws {Error} 引数 rate が設定可能値以外の時に例外エラーが発生します
     * @param {number} rate fps 基準値, <br>
     * RATE_60, RATE_30, RATE_20, RATE_15, RATE_12, RATE_10, <br>
     * RATE_6, RATE_5, RATE_4, RATE_3, RATE_2, RATE_1 の何れかが必須です
     * @returns {boolean} rate 設定に成功すると true を返します
     */

  }, {
    key: "change",
    value: function change(rate) {
      this.setRate(rate);
      return this.start();
    }
    /**
     * {@link Cycle}.UPDATE event handler
     *
     * count property を `+1` 加算後設定 rate で割り算し余りが `0` の時にイベント Rate.UPDATE を発生させます
     * @param {CycleEvents} events Polling event object
     * @returns {boolean} Rate.UPDATE event が発生すると true を返します
     */

  }, {
    key: "onUpdate",
    value: function onUpdate(events) {
      // 余りが 0 の時にイベントを発火します
      this.count += 1;
      var reminder = this.count % this.rate;

      if (reminder === 0) {
        this.count = 0;
        this.fire(this.updateEvents(0, 0, events));
        return true;
      }

      return false;
    }
  }]);

  return Rate;
}(_Polling__WEBPACK_IMPORTED_MODULE_4__["default"]);

Rate.RATE_60 = 1;
Rate.RATE_30 = 2;
Rate.RATE_20 = 3;
Rate.RATE_15 = 4;
Rate.RATE_12 = 5;
Rate.RATE_10 = 6;
Rate.RATE_6 = 10;
Rate.RATE_5 = 12;
Rate.RATE_4 = 15;
Rate.RATE_3 = 20;
Rate.RATE_2 = 30;
Rate.RATE_1 = 60;
Rate.UPDATE = 'rateUpdate';


/***/ }),

/***/ "./src/tick/events/CycleEvents.js":
/*!****************************************!*\
  !*** ./src/tick/events/CycleEvents.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CycleEvents; });
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _event_Events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../event/Events */ "./src/event/Events.js");




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/06/02 - 15:42
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

/**
 * requestAnimationFrame を singleton 実行する {@link Cycle} Events
 */

var CycleEvents =
/*#__PURE__*/
function (_Events) {
  _inherits(CycleEvents, _Events);

  // ---------------------------------------------------
  //  CONSTRUCTOR
  // ---------------------------------------------------

  /**
   * custom Event Object
   * @param {string} type イベント種類
   * @param {*} currentTarget current イベント発生インスタンス
   * @param {*} [target=undefined] イベント発生インスタンス
   * */
  function CycleEvents(type, currentTarget) {
    var _this;

    var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

    _classCallCheck(this, CycleEvents);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CycleEvents).call(this, type, currentTarget, target)); // ---

    /**
     * requestAnimationFrame 戻り値
     * @type {number}
     */

    _this.id = -1;
    /**
     * animation time
     * @type {number}
     * @since 2018-01-20
     */

    _this.time = 0;
    return _this;
  }

  return CycleEvents;
}(_event_Events__WEBPACK_IMPORTED_MODULE_3__["default"]);



/***/ }),

/***/ "./src/tick/events/FpsEvents.js":
/*!**************************************!*\
  !*** ./src/tick/events/FpsEvents.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FpsEvents; });
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PollingEvents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PollingEvents */ "./src/tick/events/PollingEvents.js");




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/06/02 - 15:42
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

/**
 * {@link Fps} Events
 */

var FpsEvents =
/*#__PURE__*/
function (_PollingEvents) {
  _inherits(FpsEvents, _PollingEvents);

  // ---------------------------------------------------
  //  CONSTRUCTOR
  // ---------------------------------------------------

  /**
   * custom Event Object
   * @param {string} type イベント種類
   * @param {*} currentTarget current イベント発生インスタンス
   * @param {*} [target=undefined] イベント発生インスタンス
   * */
  function FpsEvents(type, currentTarget) {
    var _this;

    var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

    _classCallCheck(this, FpsEvents);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FpsEvents).call(this, type, currentTarget, target)); // ---

    /**
     * fps - フレームレート値
     * @type {number}
     */

    _this.fps = -1;
    return _this;
  }

  return FpsEvents;
}(_PollingEvents__WEBPACK_IMPORTED_MODULE_3__["default"]);



/***/ }),

/***/ "./src/tick/events/PollingEvents.js":
/*!******************************************!*\
  !*** ./src/tick/events/PollingEvents.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PollingEvents; });
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _event_Events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../event/Events */ "./src/event/Events.js");




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/06/02 - 15:42
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

/**
 * {@link Polling} Events
 */

var PollingEvents =
/*#__PURE__*/
function (_Events) {
  _inherits(PollingEvents, _Events);

  // ---------------------------------------------------
  //  CONSTRUCTOR
  // ---------------------------------------------------

  /**
   * custom Event Object
   * @param {string} type イベント種類
   * @param {*} currentTarget current イベント発生インスタンス
   * @param {*} [target=undefined] イベント発生インスタンス
   * */
  function PollingEvents(type, currentTarget) {
    var _this;

    var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

    _classCallCheck(this, PollingEvents);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PollingEvents).call(this, type, currentTarget, target)); // ---

    /**
     * polling event 発生時間
     * @type {number}
     */

    _this.begin = 0;
    /**
     * 現在時間 - Date.now
     * @type {number}
     */

    _this.present = 0;
    /**
     * イベント間隔(ms)
     * @type {number}
     */

    _this.interval = 0;
    /**
     * CycleEvents
     * @type {CycleEvents}
     * @since 2018-01-20
     */

    _this.cycleEvents = 0;
    return _this;
  }

  return PollingEvents;
}(_event_Events__WEBPACK_IMPORTED_MODULE_3__["default"]);



/***/ }),

/***/ "./src/util/Freeze.js":
/*!****************************!*\
  !*** ./src/util/Freeze.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Freeze; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Copyright (c) 2011-2016 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/11/19 - 22:10
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

/**
 * scroll 操作を強制的に不可能にします
 */
var Freeze =
/*#__PURE__*/
function () {
  function Freeze() {
    _classCallCheck(this, Freeze);
  }

  _createClass(Freeze, null, [{
    key: "start",

    /**
     * scroll freeze timeout id
     * @type {number}
     */

    /**
     * scroll を止める時間
     * @type {number}
     * @default 200
     */

    /**
     * scroll 動作を受付不能にします
     * @returns {void}
     */
    value: function start() {
      window.addEventListener('touchstart', Freeze.onScroll, false);
      window.addEventListener('touchmove', Freeze.onScroll, false);
      window.addEventListener('touchend', Freeze.onScroll, false);
      window.addEventListener('scroll', Freeze.onScroll, false);
      document.addEventListener('wheel', Freeze.onScroll, false);
      document.addEventListener('mousewheel', Freeze.onScroll, false);
      window.addEventListener('DOMMouseScroll', Freeze.onScroll, false);
    }
    /**
     * scroll 動作を回復します
     * @returns {void}
     */

  }, {
    key: "stop",
    value: function stop() {
      window.removeEventListener('touchstart', Freeze.onScroll);
      window.removeEventListener('touchmove', Freeze.onScroll);
      window.removeEventListener('touchend', Freeze.onScroll);
      window.removeEventListener('scroll', Freeze.onScroll);
      document.removeEventListener('wheel', Freeze.onScroll);
      document.removeEventListener('mousewheel', Freeze.onScroll);
      window.removeEventListener('DOMMouseScroll', Freeze.onScroll);
    }
    /**
     * window scroll event handler, バブリング・伝播全てキャンセルします
     * @param {Event} event window scroll event
     * @returns {boolean} event をキャンセルするために false を返します
     */

  }, {
    key: "onScroll",
    value: function onScroll(event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    }
    /**
     * scroll 操作を引数(delay)の間キャンセルします
     * @param {number} [delay=200] 遅延時間(ms), 200
     * @returns {number} time out id
     */

  }, {
    key: "freeze",
    value: function freeze() {
      var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Freeze.delay;
      clearTimeout(Freeze.timerId); // timerId = 0;

      Freeze.start();

      if (delay > 0) {
        Freeze.timerId = setTimeout(Freeze.stop, delay);
      }

      return Freeze.timerId;
    }
  }]);

  return Freeze;
}();

Freeze.timerId = 0;
Freeze.delay = 200;


/***/ }),

/***/ "./src/util/Hit.js":
/*!*************************!*\
  !*** ./src/util/Hit.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hit; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Copyright (c) 2011-2016 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/11/29 - 22:06
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

/**
 * 衝突判定を行います
 */
var Hit =
/*#__PURE__*/
function () {
  function Hit() {
    _classCallCheck(this, Hit);
  }

  _createClass(Hit, null, [{
    key: "test",

    /**
     * element と window.top(0) window.bottom(height) のヒットテストを行います
     * @param {number} height 衝突対象物の高さ window.innerHeight
     * @param {ClientRect|Object} offset 比較対象物の element ClientRect または同等の Object
     * @returns {{
     *  top: boolean,
     *  bottom: boolean,
     *  contain: boolean,
     *  include: boolean,
     *  result: boolean
     * }} hit check object を返します
     */
    value: function test(height, offset) {
      // hit test
      var hit = {
        result: false,
        top: false,
        bottom: false,
        contain: false,
        include: false
      }; // top

      if (offset.top <= height && offset.top >= 0) {
        hit.top = true;
      } // bottom


      if (offset.bottom <= height && offset.bottom >= 0) {
        hit.bottom = true;
      } // contain check を行います


      if (offset.top <= 0 && offset.bottom >= height) {
        hit.contain = true;
      } // include check を行います


      if (offset.top >= 0 && offset.top <= height && offset.bottom >= 0 && offset.bottom <= height) {
        hit.include = true;
      } // return
      // return hit.top || hit.bottom || hit.contain || hit.include;


      hit.result = hit.top || hit.bottom || hit.contain || hit.include;
      return hit;
    }
  }]);

  return Hit;
}();



/***/ }),

/***/ "./src/util/Iro.js":
/*!*************************!*\
  !*** ./src/util/Iro.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Iro; });
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1__);



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Copyright (c) 2011-2017 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2017/01/19 - 15:13
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */
// --------------------------------
// copy [native code]

/**
 * copy [native code] - Math.floor
 * @type {function}
 * @private
 * @static
 */
var mathFloor = Math.floor;
/**
 * copy [native code] - Math.max
 * @type {function}
 * @private
 * @static
 */

var mathMax = Math.max;
/**
 * copy [native code] - Math.min
 * @type {function}
 * @private
 * @static
 */

var mathMin = Math.min; // /**
//  * copy [native code] - parseInt
//  * @type {function}
//  * @private
//  * @static
//  */
// const mathInt = self.parseInt;
// --------------------------------
// constant for calculate

/**
 * 計算定数
 * ```
 * 1 / 6
 * ```
 * @type {number}
 * @private
 * @static
 */

var ONE_SIX = 1 / 6;
/**
 * 計算定数
 * ```
 * 0.5
 * ```
 * @type {number}
 * @private
 * @static
 */

var HALF = 0.5;
/**
 * 計算定数
 * ```
 * 2 / 3
 * ```
 * @type {number}
 * @private
 * @static
 */

var TWO_THREE = 2 / 3;
/**
 * 計算定数
 * ```
 * 1 / 3
 * ```
 * @type {number}
 * @private
 * @static
 */

var ONE_THREE = 1 / 3;
/**
 * 色変換ユーティリティーです
 */

var Iro =
/*#__PURE__*/
function () {
  function Iro() {
    _classCallCheck(this, Iro);
  }

  _createClass(Iro, null, [{
    key: "rgb2hsl",
    // ----------------------------------------
    // HSL
    // ----------------------------------------

    /**
     * RGB を HSL 変換します
     * @see http://stackoverflow.com/questions/2353211/hsl-to-rgb-color-conversion
     * @see http://www.rapidtables.com/convert/color/rgb-to-hsl.htm
     * @param {number} red RGB.red 0 ~ 255
     * @param {number} green RGB.green 0 ~ 255
     * @param {number} blue RGB.blue 0 ~ 255
     * @returns {{h: number, s: number, l: number}}
     * {hue, saturation, luminance} object を返します, それぞれ 0 ~ 1
     * hue: 0 ~ 360 を 360 で正規化されます
     */
    value: function rgb2hsl(red, green, blue) {
      var r = red / 255;
      var g = green / 255;
      var b = blue / 255;
      var maxValue = mathMax(r, g, b);
      var minValue = mathMin(r, g, b); // luminance

      var l = (maxValue + minValue) * 0.5; // hue

      var h = 0; // saturation

      var s = 0;

      if (maxValue === minValue) {
        // achromatic: 〘光学〙無色の; 色消しの
        return {
          h: h,
          s: s,
          l: l
        };
      } // ---


      var d = maxValue - minValue;
      s = l > 0.5 ? d / (2 - maxValue - minValue) : d / (maxValue + minValue);

      switch (maxValue) {
        case r:
          {
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          }

        case g:
          {
            h = (b - r) / d + 2;
            break;
          }

        case b:
          {
            h = (r - g) / d + 4;
            break;
          }

        default:
          {
            h = 0;
            break;
          }
      }

      h /= 6; // return value

      return {
        h: h,
        s: s,
        l: l
      };
    } // rgb2hsl

    /**
     * HSL to RGB で `saturation !== 0` な時の R, G, B 変換 helper です
     * @param {number} point `(2 * l) - q`
     * @param {number} q `l < 0.5 ? l * (1 + s) : (l + s) - (l * s)`
     * @param {number} hue hue
     * @returns {number} 0 ~ 1 な値を返します
     */

  }, {
    key: "hue2rgb",
    value: function hue2rgb(point, q, hue) {
      var t = hue;

      if (t < 0) {
        t += 1;
      } else if (t > 1) {
        t -= 1;
      }

      if (t < ONE_SIX) {
        return point + (q - point) * 6 * t;
      }

      if (t < HALF) {
        return q;
      }

      if (t < TWO_THREE) {
        return point + (q - point) * (TWO_THREE - t) * 6;
      }

      return point;
    }
    /**
     * HSL to RGB 変換します
     * @param {number} h hue 0 ~ 1 degree / 360 正規化
     * @param {number} s saturation 0 ~ 1
     * @param {number} l luminance 0 ~ 1
     * @returns {{r: number, g: number, b: number}} r, g, b: 0 ~ 255 object を返します
     */

  }, {
    key: "hsl2rgb",
    value: function hsl2rgb(h, s, l) {
      var r = l;
      var g = l;
      var b = l;

      if (s !== 0) {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var point = 2 * l - q;
        r = Iro.hue2rgb(point, q, h + ONE_THREE);
        g = Iro.hue2rgb(point, q, h);
        b = Iro.hue2rgb(point, q, h - ONE_THREE);
      }

      return {
        // r: parseInt(r * 255, 10),
        // g: parseInt(g * 255, 10),
        // b: parseInt(b * 255, 10),
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
      };
    } // ----------------------------------------
    // HSV
    // ----------------------------------------

    /**
     * RGB to HSV(HSB) 変換
     * @param {number} r RGB.red 0 ~ 255
     * @param {number} g RGB.green 0 ~ 255
     * @param {number} b RGB.blue 0 ~ 255
     * @returns {{h: number, s: number, v: number}} 各 0 ~ 1
     */

  }, {
    key: "rgb2hsv",
    value: function rgb2hsv(r, g, b) {
      // 正規化
      var red = r / 255;
      var green = g / 255;
      var blue = b / 255;
      var maxValue = mathMax(red, green, blue);
      var minValue = mathMin(red, green, blue);
      var v = maxValue;
      var d = maxValue - minValue;
      var s = maxValue === 0 ? 0 : d / maxValue;
      var h = 0;

      if (maxValue === minValue) {
        // achromatic: 〘光学〙無色の; 色消しの
        return {
          h: h,
          s: s,
          v: v
        };
      } // ---


      switch (maxValue) {
        case red:
          {
            h = (green - blue) / d + (green < blue ? 6 : 0);
            break;
          }

        case green:
          {
            h = (blue - red) / d + 2;
            break;
          }

        case blue:
          {
            h = (red - green) / d + 4;
            break;
          }

        default:
          {
            h = 0;
            break;
          }
      }

      h /= 6;
      return {
        h: h,
        s: s,
        v: v
      };
    }
    /**
     * HSV(HSB) to RGB 変換します
     * @param {number} h hue 0 ~ 1
     * @param {number} s saturation 0 ~ 1
     * @param {number} v value(bright) 0 ~ 1
     * @returns {{r: Number, g: Number, b: Number}} 各 0 ~ 255
     */

  }, {
    key: "hsv2rgb",
    value: function hsv2rgb(h, s, v) {
      var i = mathFloor(h * 6);
      var f = h * 6 - i;
      var point = v * (1 - s);
      var q = v * (1 - f * s);
      var t = v * (1 - (1 - f) * s);
      var r = 0;
      var g = 0;
      var b = 0; // ---

      switch (i % 6) {
        case 0:
          r = v;
          g = t;
          b = point;
          break;

        case 1:
          r = q;
          g = v;
          b = point;
          break;

        case 2:
          r = point;
          g = v;
          b = t;
          break;

        case 3:
          r = point;
          g = q;
          b = v;
          break;

        case 4:
          r = t;
          g = point;
          b = v;
          break;

        case 5:
          r = v;
          g = point;
          b = q;
          break;

        default:
          r = 0;
          g = 0;
          b = 0;
          break;
      } // ---


      return {
        r: parseInt(r * 255, 10),
        g: parseInt(g * 255, 10),
        b: parseInt(b * 255, 10)
      };
    } // ----------------------------------------
    // HEX
    // ----------------------------------------

    /**
     * CSS shorthand 色指定をフル変換します
     * @param {string} hex `#f00` な CSS 色形式
     * @returns {?string} `ff0000` フル変換し返します
     * @see http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
     */

  }, {
    key: "shorthand",
    value: function shorthand(hex) {
      if (typeof hex !== 'string') {
        return null;
      }

      var pattern = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      var color = hex.replace(pattern, function (m, r, g, b) {
        return "".concat(r).concat(r).concat(g).concat(g).concat(b).concat(b);
      });
      return color.length === 7 ? color : "#".concat(color);
    }
    /**
     * CSS 色指定を RGB 変換します
     * @param {string} hex CSS 色形式 `#f00` or `#ff0000`
     * @returns {?{r: number, g: number, b: number}} nullable で返します
     */

  }, {
    key: "hex2rgb",
    value: function hex2rgb(hex) {
      var hexString = Iro.shorthand(hex);

      if (typeof hexString !== 'string') {
        return null;
      } // ---


      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexString);
      return Array.isArray(result) && result.length === 4 ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    }
    /**
     * 0 ~ 255 RGB color number を `00` な 16進形式に変換します
     * @param {number} colorNumber 変換する RGB color number
     * @returns {string} 2桁を保証し 16進 変換後文字列を返します
     */

  }, {
    key: "int16",
    value: function int16(colorNumber) {
      var hex = colorNumber.toString(16);
      return hex.length === 1 ? "0".concat(hex) : hex;
    }
    /**
     * RGB を CSS形式 hex 変換します
     * @param {number} r red 0 ~ 255
     * @param {number} g green 0 ~ 255
     * @param {number} b blue 0 ~ 255
     * @returns {string} CSS形式 hex `#ff0000` を返します
     */

  }, {
    key: "rgb2hex",
    value: function rgb2hex(r, g, b) {
      return "#".concat(Iro.int16(r)).concat(Iro.int16(g)).concat(Iro.int16(b));
    }
    /**
     * 0 ~ 16777215 数値を `#ffffff` な CSS 16進色形式に変換します
     * @param {number} rgb 0 ~ 16777215 名数値
     * @returns {string} `#ffffff` な CSS 16進色形式を返します
     */

  }, {
    key: "int2hex",
    value: function int2hex(rgb) {
      var hex = mathFloor(rgb).toString(16);
      var _hex = hex,
          length = _hex.length;

      if (length === 6) {
        return "#".concat(hex);
      }

      var step = 6 - length;

      while (step) {
        hex = "0".concat(hex);
        step -= 1;
      }

      return "#".concat(hex);
    }
    /**
     * `#ffffff` な CSS 16進色形式を 10進数変換します
     * @param {string} hex `#f00` or `#ff0000` な CSS 16進色形式
     * @returns {?number} 10進数へ変換し返します
     */

  }, {
    key: "hex2int",
    value: function hex2int(hex) {
      var hexString = Iro.shorthand(hex);

      if (typeof hexString !== 'string') {
        return null;
      }

      return parseInt(hexString.replace('#', ''), 16);
    }
    /**
     * #FFFFFF な CSS 16進を 0xFFFFFF 変換し 10進数にします
     * @param {string} hex #FFFFFF な CSS 16進
     * @return {Number} 10進数変換後の色ナンバーを返します
     */

  }, {
    key: "toInt",
    value: function toInt(hex) {
      return parseInt(hex.replace('#', '0x'), 16);
    }
  }]);

  return Iro;
}();



/***/ }),

/***/ "./src/util/List.js":
/*!**************************!*\
  !*** ./src/util/List.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return List; });
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.from */ "./node_modules/core-js/modules/es6.array.from.js");
/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_array_fill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.array.fill */ "./node_modules/core-js/modules/es6.array.fill.js");
/* harmony import */ var core_js_modules_es6_array_fill__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_fill__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Type */ "./src/util/Type.js");








function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Copyright (c) 2011-2016 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/10/26 - 14:57
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

/**
 * Array（配列）Utility
 */

var List =
/*#__PURE__*/
function () {
  function List() {
    _classCallCheck(this, List);
  }

  _createClass(List, null, [{
    key: "filling",

    /**
     * Array.prototype.fill, polyfill
     * @param {number} lengthData 配列長
     * @param {*} value fill する値
     * @returns {Array.<*>} fill 後の配列を返します
     * @private
     */
    value: function filling(lengthData, value) {
      var length = lengthData;
      var arr = [].slice(0);

      while (length > 0) {
        arr.push(value);
        length -= 1;
      }

      return arr;
    }
    /**
     * Array.prototype.fill を行います
     * @param {number} length 配列長
     * @param {*} value fill する値
     * @returns {Array.<*>} fill 後の配列を返しますd
     */

  }, {
    key: "fill",
    value: function fill(length) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      // 関数が使えない時は polyfill 関数を使用します
      if (!_Type__WEBPACK_IMPORTED_MODULE_7__["default"].method(Array.prototype.fill)) {
        return List.filling(length, value);
      } // native method


      return new Array(length).fill(value);
    }
    /**
     * 複数の配列を `concat` marge 結合します
     * @param {*} args 複数の配列
     * @returns {*[]} 複数の配列を結合し返します
     * @see https://gist.github.com/yesvods/51af798dd1e7058625f4
     */

  }, {
    key: "marge",
    value: function marge() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return args.reduce(function (acc, val) {
        return [].concat(_toConsumableArray(acc), _toConsumableArray(val));
      });
    }
    /**
     * 配列内配列（多次元配列）を1階層にします
     * @param {*} arr 多次元配列
     * @returns {*[]} 多次元配列を1階層にし返します
     * @see https://stackoverflow.com/questions/27266550/how-to-flatten-nested-array-in-javascript
     */

  }, {
    key: "flatten",
    value: function flatten(arr) {
      var _ref;

      var flat = (_ref = []).concat.apply(_ref, _toConsumableArray(arr));

      return flat.some(Array.isArray) ? List.flatten(flat) : flat;
    }
  }]);

  return List;
}();



/***/ }),

/***/ "./src/util/Text.js":
/*!**************************!*\
  !*** ./src/util/Text.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Text; });
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2__);




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Copyright (c) 2011-2016 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/11/22 - 13:53
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

/**
 * 文字列操作の utility
 */
var Text =
/*#__PURE__*/
function () {
  function Text() {
    _classCallCheck(this, Text);
  }

  _createClass(Text, null, [{
    key: "dash",

    /**
     * camel case を hyphenation に変換します
     * @param {string} str 操作対象文字列
     * @returns {string} キャメルケースをハイフネーションに変換後文字列を返します
     */
    value: function dash(str) {
      return str.replace(/([A-Z])/g, '-$1').toLowerCase();
    }
    /**
     * camel case へ変換します
     * @param {string} str 操作対象文字列
     * @returns {*|void|string|XML} キャメルケース文字列を返します
     */

  }, {
    key: "camel",
    value: function camel(str) {
      // return str.replace(/^\s+|\s+$/g, '');
      return str.replace(/-([a-z])/g, function (g) {
        var first = g[1];
        return first.toUpperCase();
      });
    }
    /**
     * 数値に3桁区切りの `,` カンマを挿入します
     * @param {number} number カンマを挿入する数値
     * @param {string} [locale=js-JP] ロケール
     * @returns {string} カンマ挿入後の文字列, 小数点なし
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
     * @see http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
     */

  }, {
    key: "comma",
    value: function comma(number) {
      var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ja-JP';
      var numbered = '';

      if (number.toLocaleString) {
        numbered = number.toLocaleString(locale);
      } else {
        numbered = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      } // IE 8 `NN.00` にするので `.` 以下削除


      return numbered.split('.').shift();
    }
    /**
     * 文字列の単語を置き換えます
     * @param {string} targetText 置換え対象文字列
     * @param {string} targetWord 置換え元単語
     * @param {string} replaceWord 置換える単語
     * @returns {string} 置換え後の文字列を返します
     */

  }, {
    key: "replace",
    value: function replace(targetText, targetWord, replaceWord) {
      return targetText.split(targetWord).join(replaceWord);
    }
    /**
     * 文字列から単語を削除します
     * @param {string} targetText 置換え対象文字列
     * @param {string} targetWord 削除する単語
     * @returns {string} 削除後の文字列を返します
     */

  }, {
    key: "remove",
    value: function remove(targetText, targetWord) {
      return Text.replace(targetText, targetWord, '');
    }
    /**
     * 文字列の `&` を `&amp;` へ置換えます
     * @param {string} targetText 操作対象文字列
     * @returns {string} `&amp;` 置換え後の文字列を返します
     */

  }, {
    key: "amp",
    value: function amp(targetText) {
      return Text.replace(targetText, '&', '&amp;');
    }
    /**
     * 文字列の `&amp;` を `&` へ置換えます
     * @param {string} targetText 操作対象文字列
     * @returns {string} `&` 置換え後の文字列を返します
     */

  }, {
    key: "and",
    value: function and(targetText) {
      return Text.replace(targetText, '&amp;', '&');
    }
  }]);

  return Text;
}();



/***/ }),

/***/ "./src/util/Times.js":
/*!***************************!*\
  !*** ./src/util/Times.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Times; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Copyright (c) 2011-2016 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/12/16 - 16:50
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */
// --------------------------------
// constant for calculate

/**
 * {@link Times}
 * 計算用定数 - 1 minute
 * ```
 * 1000 * 60
 * ```
 * @type {number}
 * @private
 * @static
 */
var oneMinute = 1000 * 60;
/**
 * {@link Times}
 * 計算用定数 - 1 hour
 * ```
 * 1000 * 60 * 60
 * ```
 * @type {number}
 * @private
 * @static
 */

var oneHour = oneMinute * 60;
/**
 * {@link Times}
 * 計算用定数 - 1 day
 * ```
 * 1000 * 60 * 60 * 24
 * ```
 * @type {number}
 * @private
 * @static
 */

var oneDay = oneHour * 24;
/**
 * {@link Times}
 * 計算用定数 - 1 week
 * ```
 * 1000 * 60 * 60 * 24 * 7
 * ```
 * @type {number}
 * @private
 * @static
 */

var oneWeek = oneDay * 7;
/**
 * {@link Times}
 * 計算用定数 - 1 month
 * ```
 * 1000 * 60 * 60 * 24 * 30
 * ```
 * @type {number}
 * @private
 * @static
 */

var oneMonth = oneDay * 30;
/**
 * 指定時間を計算し Date instance を作成します
 */

var Times =
/*#__PURE__*/
function () {
  function Times() {
    _classCallCheck(this, Times);
  }

  _createClass(Times, null, [{
    key: "present",
    // /**
    //  * 1970-1-1 00:00
    //  * @returns {Date} 1970-1-1 00:00
    //  */
    // static standard() {
    //   return new Date();
    // }

    /**
     * 現在時間 Date instance
     * @returns {Date} 現在時間 Date instance
     */
    value: function present() {
      return new Date();
    }
    /**
     * 指定分後の Date instance
     * @param {number} n 指定分
     * @returns {Date} 指定分後の Date instance
     */

  }, {
    key: "minute",
    value: function minute(n) {
      return new Date(Date.now() + n * oneMinute);
    }
    /**
     * 指定時間後の Date instance
     * @param {number} n 指定時間
     * @returns {Date} 指定時間後の Date instance
     */

  }, {
    key: "hour",
    value: function hour(n) {
      return new Date(Date.now() + n * oneHour);
    }
    /**
     * 指定日後の Date instance
     * @param {number} n 指定日
     * @returns {Date} 指定日後の Date instance
     */

  }, {
    key: "day",
    value: function day(n) {
      return new Date(Date.now() + n * oneDay);
    }
    /**
     * 指定週後の Date instance
     * @param {number} n 指定週
     * @returns {Date} 指定週後の Date instance
     */

  }, {
    key: "week",
    value: function week(n) {
      return new Date(Date.now() + n * oneWeek);
    }
    /**
     * 指定月後の Date instance
     * @param {number} n 指定月
     * @returns {Date} 指定月後の Date instance
     */

  }, {
    key: "month",
    value: function month(n) {
      return new Date(Date.now() + n * oneMonth);
    }
  }]);

  return Times;
}();



/***/ }),

/***/ "./src/util/Type.js":
/*!**************************!*\
  !*** ./src/util/Type.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Type; });
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_number_is_integer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.number.is-integer */ "./node_modules/core-js/modules/es6.number.is-integer.js");
/* harmony import */ var core_js_modules_es6_number_is_integer__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_is_integer__WEBPACK_IMPORTED_MODULE_7__);









function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Copyright (c) 2011-2016 inazumatv.com, inc.
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/07/12 - 18:24
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 *
 */

/**
 * 型チェックを行います
 * @static
 */
var Type =
/*#__PURE__*/
function () {
  function Type() {
    _classCallCheck(this, Type);
  }

  _createClass(Type, null, [{
    key: "method",

    /**
     * 引数(target)が関数かを調べます
     * @param {Function|*} target 調査対象
     * @returns {boolean} 引数(target)が関数かを調べ結果を返します、true: 関数
     */
    value: function method(target) {
      return typeof target === 'function';
    }
    /**
     * 引数(target)を `!!` で調べます
     * @param {*} target 調査対象
     * @returns {boolean} 引数(target)を `!!` で調べ結果を返します
     */

  }, {
    key: "exist",
    value: function exist(target) {
      return !!target;
    }
    /**
     * 引数(target)が number かを調べます
     * @param {*|string} target 調査対象
     * @returns {boolean} 引数(target)が number かを調べ結果を返します、true: number
     */

  }, {
    key: "number",
    value: function number(target) {
      // [参考] jQuery 2.x, jQuery 2 関数は文字列 "2" も true にするので type check を追加した
      return typeof target === 'number' && !Type.array(target) && target - parseFloat(target) + 1 >= 0;
    }
    /**
     * 引数(target)が int かを `Number.isInteger` を使用し調べます
     * @param {*} target 調査対象
     * @returns {boolean} 引数(target)が int かを調べ結果を返します、true: int
     */

  }, {
    key: "int",
    value: function int(target) {
      return Number.isInteger(target);
    }
    /**
     * 引数(target)が string かを調べます
     * @param {*} target 調査対象
     * @returns {boolean} 引数(target)が string かを調べ結果を返します、true: string
     */

  }, {
    key: "string",
    value: function string(target) {
      return typeof target === 'string';
    }
    /**
     * 引数(target)を `Array.isArray` で配列かを調べます
     * @param {*} target 調査対象
     * @returns {boolean} 引数(target)が 配列 かを調べ結果を返します、true: 配列
     */

  }, {
    key: "array",
    value: function array(target) {
      return Array.isArray(target);
    }
    /**
     * 引数(target)が null かを調べます
     * @param {*} target 調査対象
     * @returns {boolean} 引数(target)が null かを調べ結果を返します、true: null
     */

  }, {
    key: "nil",
    value: function nil(target) {
      return target === null;
    }
    /**
     * Object型 引数 `object` は String型 引数 `key` を [key] として所持しているかを調べます
     * @deprecated instead use Type.has
     * @param {Object} target 調査対象
     * @param {string} key Object.key 名称
     * @returns {boolean} 存在する時は true を返します
     */

  }, {
    key: "hasKey",
    value: function hasKey(target, key) {
      return Type.has(target, key);
    }
    /**
     * Object型 引数 `object` は String型 引数 `key` を [key] として所持しているかを調べます
     * @param {Object} target 調査対象
     * @param {string} key Object.key 名称
     * @returns {boolean} 存在する時は true を返します
     */

  }, {
    key: "has",
    value: function has(target, key) {
      // return Object.keys(target).indexOf(key) !== -1;
      return Object.keys(target).includes(key);
    }
    /**
     * target が undefined かを調べます
     * @param {*} target 調査対象
     * @returns {boolean} true: undefined
     * @since 2016-10-25
     */

  }, {
    key: "undef",
    value: function undef(target) {
      return typeof target === 'undefined';
    }
    /**
     * ファイル名から拡張子を取得します
     * @deprecated instead use Type.extension
     * @param {string} fileName 取得したいファイル名称
     * @returns {string} ファイル名の拡張子を返します
     */

  }, {
    key: "getExtension",
    value: function getExtension(fileName) {
      return Type.extension(fileName);
    }
    /**
     * ファイル名から拡張子を取得します
     * @param {string} fileName 取得したいファイル名称
     * @returns {string} ファイル名の拡張子を返します
     */

  }, {
    key: "extension",
    value: function extension(fileName) {
      if (typeof fileName !== 'string') {
        return '';
      }

      var splits = fileName.split('.');

      if (splits.length === 1) {
        return '';
      }

      return splits.pop().toLowerCase();
    } // ----------------------------------------------------------
    // 画像パスが正規かチェックする

    /**
     * 使用可能なbase64 file かを調べます
     * @param {string} fileName 調査対象ファイル名
     * @returns {boolean} jpeg / png の時に true を返します
     */

  }, {
    key: "base64",
    value: function base64(fileName) {
      if (!Type.exist(fileName)) {
        return false;
      }

      return fileName.indexOf('data:image/jpeg;base64') !== -1 || fileName.indexOf('data:image/png;base64') !== -1 || fileName.indexOf('data:image/jpg;base64') !== -1 || fileName.indexOf('data:image/gif;base64') !== -1;
    }
    /**
     * 拡張子から画像ファイルかを調べます
     * @param {string} fileName 調査対象ファイル名
     * @returns {Boolean} 'jpg', 'png', 'jpeg', 'gif' のいづれかに該当するかの真偽値を返します
     */

  }, {
    key: "img",
    value: function img(fileName) {
      if (!Type.exist(fileName)) {
        return false;
      } // base64


      if (Type.base64(fileName)) {
        return true;
      } // 拡張子チェック


      return ['jpg', 'png', 'jpeg', 'gif'].indexOf(Type.extension(fileName)) !== -1;
    }
  }]);

  return Type;
}();



/***/ }),

/***/ "./src/util/Vectors.js":
/*!*****************************!*\
  !*** ./src/util/Vectors.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vectors; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * license inazumatv.com
 * @author (at)taikiken / http://inazumatv.com
 * @date 2016/10/08
 *
 * Copyright (c) 2011-2015 inazumatv.com, inc.
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 * Vectors
 */

/**
 * ある点の座標(x, y)と時間(time)を管理します
 */
var Vectors =
/*#__PURE__*/
function () {
  /**
   * 座標と現在時間を元にインスタンスを作成します
   * @param {number} [x=0] 座標 x
   * @param {number} [y=0] 座標 y
   * @param {number} [time=Date.now()] 時間 milli seconds
   */
  function Vectors() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Date.now();

    _classCallCheck(this, Vectors);

    /**
     * 座標 x
     * @type {number}
     */
    this.x = x;
    /**
     * 座標 y
     * @type {number}
     */

    this.y = y;
    /**
     * 時間 milli seconds
     * @type {number}
     */

    this.time = time;
    /**
     * スクロール中かのフラッグ, true: スクロール中
     * @type {boolean}
     */

    this.scrolling = false;
  }
  /**
   * x, y, time プロパティを全て `0` にします
   * @returns {Vectors} メソッドチェイン可能なようにインスタンスを返します
   */


  _createClass(Vectors, [{
    key: "reset",
    value: function reset() {
      this.x = 0;
      this.y = 0;
      this.time = 0;
      return this;
    }
    /**
     * x, y, time を更新します
     * @param {number} x 座標 x
     * @param {number} y 座標 y
     * @param {number} [time=Date.now] 時間 milli seconds
     * @returns {Vectors} メソッドチェイン可能なようにインスタンスを返します
     */

  }, {
    key: "update",
    value: function update(x, y) {
      var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Date.now();
      this.x = x;
      this.y = y;
      this.time = time;
      return this;
    }
    /**
     * 引数 vectors 間の距離を測ります
     * @param {Vectors} vectors 計測したい対象 Vector instance
     * @returns {number} 距離を返します
     */

  }, {
    key: "distance",
    value: function distance(vectors) {
      var distanceX = this.x - vectors.x;
      var distanceY = this.y - vectors.y;
      var sqrt = distanceX * distanceX + distanceY * distanceY;
      return Math.sqrt(sqrt);
    }
    /**
     * 引数 vectors との時間差を計算します
     * @param {Vectors} vectors 計測したい対象 Vector instance
     * @returns {number} 時間差(milli seconds) を返します
     */

  }, {
    key: "duration",
    value: function duration(vectors) {
      return this.time - vectors.time;
    }
    /**
     * 複製を作成し返します
     * @returns {Vectors} 複製を返します
     */

  }, {
    key: "clone",
    value: function clone() {
      var clone = new Vectors(this.x, this.y, this.time);
      clone.scrolling = this.scrolling;
      return clone;
    }
    /**
     * ベクトルの大きさの２乗の平方根を計算します
     * @returns {number} ベクトルの大きさの２乗の平方根を返します
     */

  }, {
    key: "length",
    value: function length() {
      var x = this.x,
          y = this.y;
      return Math.sqrt(x * x + y * y);
    }
    /**
     * ベクトルの値を scalar 値で除算します
     *
     * @param {number} scalar 除算母数
     * @returns {Vectors} 除算後の Vector を返します
     */

  }, {
    key: "divideByScalar",
    value: function divideByScalar(scalar) {
      var clone = this.clone();

      if (scalar === 0) {
        clone.x = 0;
        clone.y = 0;
      } else {
        var x = clone.x,
            y = clone.y;
        var inverse = 1 / scalar;
        clone.x = x * inverse;
        clone.y = y * inverse;
      }

      return clone;
    }
    /**
     * ベクトルの値を scalar 値で乗算します
     *
     * @param {number} scalar 乗算母数
     * @returns {Vectors} 乗算後の Vector を返します
     */

  }, {
    key: "multiplyByScalar",
    value: function multiplyByScalar(scalar) {
      var clone = this.clone();
      clone.x *= scalar;
      clone.y *= scalar;
      return clone;
    }
    /**
     * 現在の Vectors を元に引数 `maxValue` 以下にした `Vectors` を取得します
     * @param {number} maxValue 最高目標値
     * @returns {Vectors} `maxValue` 以下にした `Vectors` を返します
     */

  }, {
    key: "truncate",
    value: function truncate(maxValue) {
      var minValue = Math.min(maxValue, this.length());
      var oldLength = this.length();

      if (oldLength !== 0 && minValue !== oldLength) {
        return this.multiplyByScalar(minValue / oldLength);
      }

      return this.clone();
    }
    /**
     * ベクトルの大きさを正規化（大きさを1）した Vector を作成します
     * @returns {Vectors} ベクトルの大きさを正規化（大きさを1）した Vectors を返します
     */

  }, {
    key: "normalize",
    value: function normalize() {
      return this.divideByScalar(this.length());
    }
    /**
     * ベクトルが正規化（length が 1）されているかを判定します
     * @returns {boolean} true: 正規化されている
     */

  }, {
    key: "isNormalize",
    value: function isNormalize() {
      return this.length() === 1;
    }
    /**
     * 引数 vectors との X 値を減算します
     * @param {Vectors} vectors 計測したい対象 Vectors instance
     * @returns {number} X 値を減算し返します
     */

  }, {
    key: "betweenX",
    value: function betweenX(vectors) {
      return this.x - vectors.x;
    }
    /**
     * 引数 vectors との Y 値を減算します
     * @param {Vectors} vectors 計測したい対象 Vectors instance
     * @returns {number} Y 値を減算し返します
     */

  }, {
    key: "betweenY",
    value: function betweenY(vectors) {
      return this.y - vectors.y;
    }
    /**
     * 引数 vectors との time 値を減算します
     * @param {Vectors} vectors 計測したい対象 Vectors instance
     * @returns {number} time 値を減算し返します
     */

  }, {
    key: "betweenTime",
    value: function betweenTime(vectors) {
      return this.time - vectors.time;
    }
    /**
     * 引数 vectors との x, y, time 値を減算します
     * @param {Vectors} vectors 計測したい対象 Vectors instance
     * @returns {Vectors} 引数 vectors との x, y, time 値を減算した clone を返します
     */

  }, {
    key: "between",
    value: function between(vectors) {
      var clone = this.clone();
      clone.x = clone.betweenX(vectors);
      clone.y = clone.betweenY(vectors);
      clone.time = clone.betweenTime(vectors);
      return clone;
    }
    /**
     * 引数ベクトルの内積を計算します
     * @param {Vectors} vectors 計測したい対象 Vectors instance
     * @returns {number} 内積を返します
     */

  }, {
    key: "dot",
    value: function dot(vectors) {
      return this.x * vectors.x + this.y * vectors.y;
    }
    /**
     * 引数ベクトルの値(x, y)が等しいかを判定します
     * @param {Vectors} vectors 計測したい対象 Vectors instance
     * @returns {boolean} true: 等しい
     */

  }, {
    key: "equals",
    value: function equals(vectors) {
      return vectors.x === this.x && vectors.y === this.y;
    }
    /**
     * 引数ベクトルとの角度を計算します
     * @param {Vectors} vectors 計測したい対象 Vectors instance
     * @returns {number} 角度を返します
     */

  }, {
    key: "angle",
    value: function angle(vectors) {
      var v1 = this.clone();
      var v2 = vectors.clone();

      if (!v1.isNormalize()) {
        v1 = v1.normalize();
      }

      if (!v2.isNormalize()) {
        v2 = v2.normalize();
      } // console.log('angle', v1, v2, v1.dot(v2), Math.acos(v1.dot(v2)));


      return Math.acos(v1.dot(v2));
    }
  }]);

  return Vectors;
}();



/***/ })

/******/ });
//# sourceMappingURL=moku.bundle.js.map