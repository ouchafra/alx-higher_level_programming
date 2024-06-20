#!/usr/bin/node

exports.esrever = function (list) {
  const cplist = [];
  for (let i = list.length - 1; i >= 0; i--) {
    cplist.push(list[i]);
  }
  return cplist;
};
