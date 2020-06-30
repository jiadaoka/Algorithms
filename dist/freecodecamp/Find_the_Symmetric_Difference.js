"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function symCall(result, args) {
  var resultArr = [];
  var arr = [_toConsumableArray(result), _toConsumableArray(args.shift())];
  var arrLength = arr.length;
  var itemObj = {};

  for (var i1 = 0; i1 < arrLength; i1++) {
    var arg = _toConsumableArray(new Set(arr[i1]));

    var arr2Length = arg.length;

    for (var i2 = 0; i2 < arr2Length; i2++) {
      if (arg[i2] in itemObj) {
        itemObj[arg[i2]] = false;
      } else {
        itemObj[arg[i2]] = true;
      }
    }
  }

  for (var i in itemObj) {
    if (itemObj[i]) resultArr.push(parseInt(i));
  }

  if (args.length === 0) return resultArr;else return symCall(resultArr, args);
}

function sym() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var _args = [].concat(args);

  var arrOne = _args.shift();

  var arr = symCall(arrOne, _args);
  return arr;
}

console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));