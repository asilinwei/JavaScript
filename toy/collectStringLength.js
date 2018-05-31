/**
 * 2018-05-31
 * @linweinb
 *
 * collectStringLength:
 * If the element is a string in the array, collect the length of it.
 *
 * Syntax:
 * collectStringLength(array)
 *
 * Arguments:
 * array(Array): The array to query.
 *
 * Return:
 * The array includes the length of all string.
 *
 *
 * For example:
 *
 * collectStringLength([1,'son',2,'father'])
 * // => [3,6]
 *
 */


if(!window.collectStringLength){
	var collectStringLength=(function(){
		"use strict";

		// the custom error.
		function CustomError(type,message){
			this.type=type;
			this.message=message;
		}

		// check if it is a string.
		var isString=function(value){
			return typeof value==='string';
		};

		// check if it is an array.
		var isArray=function(array){
			var toString=Object.prototype.toString;
			return toString.apply(array)==='[object Array]';
		};

		// the length of an array or a string.
		var length=function(x){
			return x.length>=0?x.length:undefined;
		};

		// collect the length.
		var collection=function(array,collect){
			for(var i=0;i<length(array);i+=1){
				if(!isString(array[i])){
					continue;
				}
				collect.push(length(array[i]));
			}
		};

		return function(array){
			if(isArray(array)){

				var collect=[];    // the collecting result.

				collection(array,collect);
				return collect;
			} else{
				throw new CustomError('ArgumentsError','Not array.');
			}
		};
	})();
}
