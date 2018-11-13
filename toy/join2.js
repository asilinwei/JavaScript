if (!window.join) {
  var join = (function() {
    "use strict";

    var size = function(array) {
      return array.length;
    };

    var join = function(array, sep) {
      var result = '',
          index = -1,
          diff = 0,
          length = 2 * size(array) - 1;

      while (++index < length) {
        result += index % 2 ? sep : array[index + diff--];
      }
      return result;
    };

    return function(array, separator) {
      if (!Array.isArray(array)) {
        return '';
      }
      separator = separator === undefined ? ',' : '' + separator;

      return join(array, separator);
    };
  })();
}