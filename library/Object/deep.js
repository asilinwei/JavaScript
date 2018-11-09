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
            if (Array.isArray(base[key])) {
               result[key] = array(base[key]);
            } else if (isObject(base[key])) {
               result[key] = object(base[key]);
            } else {
               result[key] = base[key];
            }
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