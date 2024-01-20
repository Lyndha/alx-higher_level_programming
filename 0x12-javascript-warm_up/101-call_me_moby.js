#!/usr/bin/node
exports.lyn = function (x, theFunction) {
  for (let i = 0; i < x; i++) {
    theFunction();
  }
};
