if (!window.difference) {
  var difference = (function() {
    "use strict";

    var size = function(array) {
      return array.length;
    };

    var has = function(values, target) {
      var index = -1,
          length = size(values);

      while (++index < length) {
        if (Array.isArray(values[index]) && values[index].indexOf(target) > -1) {
          return true;
        }
      }
      return false;
    };

    var difference = function(array, values) {
      var result = [],
          index = -1,
          length = size(array);

      while (++index < length) {
        if (result.indexOf(array[index]) > -1 || !has(values, array[index])) {
          result.push(array[index]);
        }
      }
      return result;
    };

    return function(array, values) {
      if (!Array.isArray(array)) {
        return [];
      }
      values = Array.from(arguments).slice(1);

      return difference(array, values);
    };
  })();
}