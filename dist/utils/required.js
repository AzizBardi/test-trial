"use strict";

exports.isRequired = function (name) {
  throw new Error("".concat(name, " is required"));
};