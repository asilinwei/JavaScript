if (window.zip == null) {
  var zip = (function() {
    "use strict";

    var isArray = Array.isArray;

    var toArray = Array.from;

    var nativeMax = Math.max;

    var maxLength = function(arrays) {
      var max = 0,
          index = -1,
          length = arrays.length;

      while (++index < length) {
        if (isArray(arrays[index])) {
          max = nativeMax(max, arrays[index].length);
        }
      }    
      return max;
    };

    var chunk = function(arrays, current) {
      var chunk = [],
          index = -1,
          length = arrays.length;

      while (++index < length) {
        if (isArray(arrays[index])) {
          chunk.push(arrays[index][current]);
        }
      }    
      return chunk;
    };

    var baseZip = function(arrays) {
      var result = [],
          index = -1,
          length = maxLength(arrays);

      while (++index < length) {
        result.push(chunk(arrays, index));
      }    
      return result;
    };

    return function(arrays) {
      arrays = toArray(arguments);
      return baseZip(arrays);
    };
  })();
}