if (window.conformsTo == null) {
  var conformsTo = (function() {
    "use strict";

    var getKeys = Object.keys;

    var isObject = function(object) {
      return typeof object === 'object' && object !== null;
    };

    var baseConformsTo = function(object, source) {
      var keys = getKeys(source),
          index = -1,
          length = keys.length;

      while (++index < length) {
        var propName = keys[index];
        try {
          if (!source[propName](object[propName])) {
            return false;
          }
        } catch (error) {
          return false;
        }
      }    
      return true;
    };

    return function(object, source) {
      if (!isObject(object) || !isObject(source)) {
        return false;
      }
      return baseConformsTo(object, source);
    };
  })();
}