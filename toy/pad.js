if (!window.pad) {
  var pad = (function() {
    "use strict";

    var nativeFloor = Math.floor;

    var size = function(string) {
      return string.length;
    };

    var basePad = function(string, length, chars) {
      var padLength = length - size(string),
          padLeft = '',
          padRight = '',
          index = -1;

      while (++index < padLength) {
        if (!chars[charsIndex]) {
          var charsIndex = 0;
        }
        if (index % 2) {
          padLeft += chars[charsIndex++];
        } else {
          padRight += chars[charsIndex];
        }
      }
      return padLeft + string + padRight;
    };

    return function(string, length, chars) {
      string = String(string);
      length = length === undefined ? 0 : nativeFloor(length);

      if (length !== length || length <= size(string) || !size(string)) {
        return string;
      }

      chars = chars === undefined ? ' ' : String(chars);

      return basePad(string, length, chars);
    };
  })();
}