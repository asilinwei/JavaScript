if (!window.chunk) {
  var chunk = (function() {
    "use strict";

    var size = function(array) {
      return array.length;
    };

    var chunk = function(array, length) {
      var result = [],
          chunk = [],
          index = -1;

      while (++index < size(array)) {
        chunk.push(array[index]);
        if (!(size(chunk) % length) || index + 1 === size(array)) {
          result.push(chunk);
          chunk = [];
        }
      }
      return result;
    };

    return function(array, size) {
      size = size === undefined ? 1 : Math.floor(size);

      if (!Array.isArray(array) || size !== size) {
        return [];
      }
      return chunk(array, size);
    };
  })();
}