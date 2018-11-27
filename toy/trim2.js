if (!window.trim) {
  var trim = (function() {
    "use strict";

    var size = function(string) {
      return string.length;
    };

    var indexOf = function(string, target) {
      return string.indexOf(target);
    };

    var slice = function(string, start, end) {
      return string.slice(start, end);
    };

    var curry = function(string, chars) {
      return function(from) {
        return fromIndex(string, chars, from);
      };
    };

    var fromIndex = function(string, chars, from) {
      var index = from,
          length = size(string);

      while (from === length ? --index > -1 : ++index < length) {
        if (indexOf(chars, string[index]) < 0) {
          return index;
        }
      }
      return -1;
    };

    var baseTrim = function(string, chars) {
      var curried = curry(string, chars),
          start = curried(-1),
          end = curried(size(string));

      return start < 0 && end < 0 
        ? string 
        : slice(string, start, end + 1);
    };

    return function(string, chars) {
      string = string === undefined ? '' : String(string);

      if (!size(string)) {
        return '';
      }
      chars = chars === undefined ? ' ' : String(chars);

      return baseTrim(string, chars);
    };
  })();
}