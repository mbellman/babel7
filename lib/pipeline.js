"use strict";

var _ref, _greeting;

var uppercase = function uppercase(str) {
  return str.toUpperCase();
};

var stringToWords = function stringToWords(str) {
  return str.split(' ');
};

var greeting = 'Hello, I am a person.';
var uppercaseWords = (_ref = (_greeting = greeting, uppercase(_greeting)), stringToWords(_ref));