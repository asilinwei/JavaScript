/**
 * 2018-11-09
 * @author LinWei
 */
if (!Object.prototype.deepClone) {
   Object.prototype.deepClone = (function() {
      "use strict";

      var size = function(array) {
         return array.length;
      };

      var isObject = function(obj) {
         return typeof obj === 'object' && obj !== null;
      };

      var getValue = function(base, key) {
         if (Array.isArray(base[key])) {
            return array(base[key]);
         } else if (isObject(base[key])) {
            return object(base[key]);
         } else {
            return base[key];
         }
      };

      var array = function(array) {
         var result = [],
             index = -1;

         while (++index < size(array)) {
            result.push(array[index]);
         }
         return result;
      };

      var object = function(base) {
         var getKeys = Object.keys(base),
             result = {},
             key,
             index = -1;

         while (++index < size(getKeys)) {
            key = getKeys[index];
            result[key] = getValue(base, key);
         }
         return result;
      };

      var baseDeepClone = function() {
         return object(this);
      };

      return function() {
         return baseDeepClone.apply(this);
      };
   })();
}