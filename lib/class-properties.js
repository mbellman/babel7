"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldSet(receiver, privateMap, value) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to set private field on non-instance"); } var descriptor = privateMap.get(receiver); if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; return value; }

function _classPrivateFieldGet(receiver, privateMap) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return privateMap.get(receiver).value; }

var A =
/*#__PURE__*/
function () {
  function A() {
    _classCallCheck(this, A);

    _b.set(this, {
      writable: true,
      value: 1
    });

    _c.set(this, {
      writable: true,
      value: 2
    });
  }

  _createClass(A, [{
    key: "getB",
    value: function getB() {
      return _classPrivateFieldGet(this, _b);
    }
  }, {
    key: "setB",
    value: function setB(value) {
      _classPrivateFieldSet(this, _b, value);
    }
  }, {
    key: "getC",
    value: function getC() {
      return _classPrivateFieldGet(this, _c);
    }
  }]);

  return A;
}();

var _b = new WeakMap();

var _c = new WeakMap();