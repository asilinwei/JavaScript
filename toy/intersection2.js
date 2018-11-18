if (!window.intersection) {
  var intersection = (function() {
    "use strict";

    var size = function(array) {
      return array.length;
    };

    var startIndex = function(arrays) {
      var index = -1,
          length = size(arrays);

      while (++index < length) {
        if (Array.isArray(arrays[index])) {
          return index;
        }
      }
      return -1;
    };

    var isNotHas = function(arrays, target) {
      var index = -1,
          length = size(arrays);

      while (++index < length) {
        if (Array.isArray(arrays[index]) && arrays[index].indexOf(target) < 0) {
          return true;
        }
      }
      return false;
    };

    var intersection = function(arrays) {
      var start = startIndex(arrays),
          otherArgs = arrays.slice(start + 1),
          first = arrays[start],
          index = -1,
          result = [],
          length = first ? size(first) : 0;

      while (++index < length) {
        if (!isNotHas(otherArgs, first[index])) {
          result.push(first[index]);
        }
      }
      return result;
    };

    return function(arrays) {
      arrays = Array.from(arguments);

      return intersection(arrays);
    };
  })();
}