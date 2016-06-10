"use strict";


var calculator = (function() {

  var memory = 0, total = 0;

  function load(x) {
    validate(x);
    total = x;
    return total;
  }

  function getTotal() {
    return total;
  }

  function add(x) {
    validate(x);
    total += x;
  }

  function subtract(x) {
    validate(x);
    total -= x;
  }

  function multiply(x) {
    validate(x);
    total *= x;
  }

  function divide(x) {
    validate(x);
    total /= x;
  }

  function recallMemory() {
    return memory;
  }

  function saveMemory() {
    memory = total;
    return memory;
  }

  function clearMemory() {
    memory = 0;
    return memory;
  }

  function validate(x) {
    if (typeof x !== 'number') {
        throw Error('Error');
    }
  }


  return {
      load: load,
      getTotal: getTotal,
      add: add,
      subtract: subtract,
      multiply: multiply,
      divide: divide,
      recallMemory: recallMemory,
      saveMemory: saveMemory,
      clearMemory: clearMemory,
      validate: validate

  };
})();