/**
 * 2018-05-19
   @linweinb

   compact:
	Return a new array with all falsy values removed.

   Syntax:
   compact(array);

   Arguments:
   array(Array): The array to compact.

   Return:
   A new array of filtered values.

   For example:
    var array=[1,0,null,7,''];

    console.log(compact(array));  // => [1,7]
*/    



if(!window.compact){
	var compact=(function(){
		"use strict";
		var isArray=function(array){
			var toString=Object.prototype.toString;
			return toString.apply(array)==='[object Array]';
		};

		return function(array){
			if(isArray(array)&&array.length){
				var result=[];
				for(var i=0;i<array.length;i+=1){
					if(array[i]){
						result.push(array[i]);
					}
				}
			} else{
				return [];
			}
			return result;
		};
	})();
}