if (!window.merge) {
   var merge = (function() {
      "use strict";

      var size = function(obj) {
         return obj.length;
      };

      var initialise = function(obj, key, value) {
         obj[key] = [];
         obj[key].flag = true;
         obj[key].push(value);
      };

      var remove = function(obj) {
         var keys = Object.keys(obj),
             index = -1;

         while (++index < size(keys)) {
            if (Array.isArray(obj[keys[index]])) {
               delete obj[keys[index]].flag;
            }
         }    
      };

      var check = function(result, obj, index, key) {
         if (result.hasOwnProperty(key)) {
            var resultValue = result[key];

            if (Array.isArray(resultValue) && 
               !resultValue.flag || 
               !Array.isArray(resultValue)) {
               initialise(result, key, resultValue);
            } 
            result[key].push(obj[index][key]);
         } else {
            result[key] = obj[index][key];
         }
      };

      var travelKeys = function(result, obj, index) {
         var keys = Object.keys(obj[index]),
             keyIndex = -1;
             
         while (++keyIndex < size(keys)) {
            check(result, obj, index, keys[keyIndex]);
         }
      };

      var merge = function(obj) {
         var result = {},
             index = -1;

         while (++index < size(obj)) {
            if (typeof obj[index] === 'object' && obj[index] !== null) {
               travelKeys(result, obj, index);
            }
         }
         remove(result);
         return result;
      };

      return function() {
         return merge(arguments);
      };
   })();
}