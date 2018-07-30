'use strict';

var src = {
  findByID: function findByID(id) {
    return true;
  }
};
var src_1 = src.findByID;

var main = {
  findByID: src_1
};

module.exports = main;
