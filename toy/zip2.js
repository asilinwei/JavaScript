if (!window.zip) {
  var zip = (function() {
    "use strict";

    var size = function(obj) {
      return obj.length;
    };

    var max = function(obj) {
      var index = -1,
          max = 0;

      while (++index < size(obj)) {
        if (Array.isArray(obj[index])) {
          max = Math.max(max, size(obj[index]));
        }
      }
      return max;
    };

    var zip = function(obj) {
      var length = max(obj),
          index = -1,
          result = [];

      while (++index < length) {
        var chunk = [],
            argsIndex = -1;

        while (++argsIndex < size(obj)) {
          var args = obj[argsIndex];

          if (Array.isArray(args)) {
            chunk.push(args[index]);
          }
        }
        result.push(chunk);
      }
      return result;
    };

    return function() {
      return zip(arguments);
    };
  })();
}