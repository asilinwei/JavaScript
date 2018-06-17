/**
 * 2018-06-17
 * @LinWei
 *
 * uniq:
 * Create an array includes duplicate-free elements.
 *
 * Syntax:
 * uniq(array)
 *
 * Arguments:
 * array(Array): The array to query.
 *
 * Return:
 * The array includes duplicate-free elements.
 *
 * For example:
 *
 * uniq([1,2,1,2])
 * // => [1,2]
 * 
 */

if(!window.uniq){
	var uniq=(function(){
		"use strict";

		var toString=Object.prototype.toString;

		// the class of custom error.
		function CustomError(type,message){
			this.type=type;
			this.message=message;
		}

		var apply=function(obj,start,end){
			return toString.apply(obj).slice(start,end);
		};

		var length=function(array){
			return array.length;
		};

		var isArray=function(obj){
			return apply(obj,8,13)==='Array';
		};

		// check if the array include the element.
		var isInclude=function(array,element){
			for(var i=0;i<length(array);i+=1){
				if(array[i]===element){
					return true;
				}
			}
			return false;
		};

		var push=function(array,store){
			for(var i=0;i<length(array);i+=1){
				if(isInclude(store,array[i])){
					continue;
				}
				store.push(array[i]);
			}
		};
		
		return function(array){
			if(isArray(array)){
				var result=[];
				push(array,result);
				return result;
			}
			throw new CustomError('ArgsError','Not array.');
		};
	})();
}
