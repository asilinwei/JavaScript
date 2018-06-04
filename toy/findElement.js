/**
 * 2018-06-04
 * @linweinb
 *
 * findElement:
 * Find the element with the specified condition. 
 *
 * Syntax:
 * findElement(array,fn)
 *
 * Arguments:
 * array(Array): The array to query.
 * fn(Function): The function called per iteration.
 *
 * Return:
 * The first matched element from the start of array, else undefined.
 *
 * For example:
 *
 * findElement([1,2,3,4],function(n){
       return n%2===1;	
   });
 * // => 1
 * 
 * findElement([1,2,3,4],function(n){
       return n===12;	
   });
 * // => undefined
 *    
 */

if(!window.findElement){
	var findElement=(function(){
		"use strict";

		// the class of custom error.
		function CustomError(type,message){
			this.type=type;
			this.message=message;
		}

		// check if it is a function.
		var isFunction=function(fn){
			return typeof fn==='function';
		};

		// check if it is an array.
		var isArray=function(array){
			var toString=Object.prototype.toString;
			return toString.apply(array)==='[object Array]';
		};

		// the length of array.
		var length=function(array){
			return array.length;
		};

		// check if the arguments is legal.
		var isLegal=function(array,fn){
			return isArray(array)&&isFunction(fn);
		};

		var compare=function(a,b){
			return a<b;
		};

		// find the element.
		var find=function(array,fn){
			for(var i=0;compare(i,length(array));i+=1){
				if(fn(array[i])){
					return array[i];
				}
			}
		};
		
		return function(array,fn){
			if(isLegal(array,fn)){
				return find(array,fn);
			} else{
				throw new CustomError('ArgumentsError','Illegal type.');
			}
		};
	})();
}
