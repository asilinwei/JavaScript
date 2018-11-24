if (!window.xor) {
  var xor = (function() {
    "use strict";

    var size = function(array) {
      return array.length;
    };

    var curry = function(target) {
      return function(array) {
        return array.indexOf(target) < 0;
      };
    };

    var has = function(arrays, index, target) {
      var length = size(arrays);

      while (++index < length) {
        var array = arrays[index];

        if (Array.isArray(array) && array.indexOf(target) > -1) {
          return true;
        }
      }
      return false;
    };

    var difference = function(arrays, array, result, repeat, index) {
      var length = size(array),
          arrIndex = -1;

      while (++arrIndex < length) {
        var target = array[arrIndex],
            isNotFound = curry(target);

        if (isNotFound(result) && isNotFound(repeat)) {
          if (has(arrays, index, target)) {
            repeat.push(target);
            continue;
          }
          result.push(target);
        }
      }
    };

    var xor = function(arrays) {
      var result = [],
          repeat = [],
          index = -1,
          length = size(arrays);

      while (++index < length) {
        if (Array.isArray(arrays[index])) {
          difference(arrays, arrays[index], result, repeat, index);
        }
      }
      return result;
    };

    return function(arrays) {
      arrays = Array.from(arguments);

      return xor(arrays);
    };
  })();
}