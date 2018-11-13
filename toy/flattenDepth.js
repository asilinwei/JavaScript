if (!window.flattenDepth) {
  var flattenDepth = (function() {
    "use strict";

    var size = function(array) {
      return array.length;
    };

    var flatten = function(array, result, depth) {
      for (var i = 0; i < size(array); i += 1) {
        if (Array.isArray(array[i]) && depth > 0) {
          flatten(array[i], result, depth - 1);
        } else {
          result.push(array[i]);
        }
      }
    };

    var flattenDepth = function(array, depth) {
      var result = [];

      flatten(array, result, depth);
      return result;
    };

    return function(array, depth) {
      depth = depth === undefined ? 1 : Math.floor(depth);

      if (!Array.isArray(array)) {
        return [];
      }
      if (depth !== depth) {
        depth = 0;
      }
      return flattenDepth(array, depth);
    };
  })();
}