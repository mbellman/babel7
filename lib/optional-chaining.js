"use strict";

var _a$b, _c$getX, _c$getX$call$y;

var a = {
  b: {
    c: 5,
    getX: function getX() {
      return {
        x: {
          y: {
            z: 10
          }
        }
      };
    }
  }
};
var c = a === null || a === void 0 ? void 0 : (_a$b = a.b) === null || _a$b === void 0 ? void 0 : _a$b.c;
var z = c === null || c === void 0 ? void 0 : (_c$getX = c.getX) === null || _c$getX === void 0 ? void 0 : (_c$getX$call$y = _c$getX.call(c).y) === null || _c$getX$call$y === void 0 ? void 0 : _c$getX$call$y.z;