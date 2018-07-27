/**
 * 2018-07-27
 * @LinWei
 *
 * harmonious:
 * Find the longest harmonious subsequence (https://en.wikipedia.org/wiki/Subsequence).
 * Harmonious subsequence is an array where the difference between its maximum value
 * and its minimum value is 1.
 *
 * Syntax:
 * harmonious(array)
 *
 * Arguments:
 * array(Array): The integer array to query.
 *
 * Return:
 * The longest harmonious subsequence.
 *
 * For example:
 *
 * harmonious([1, 3, 2, 2, 5, 2, 3, 7])
 * // => [3, 2, 2, 2, 3]
 *
 */

if(!window.harmonious){
	var harmonious=(function(){
		"use strict";

		var toString=Object.prototype.toString;

		var typeOf=function(value){
			return typeof value;
		};

		var apply=function(obj,start,end){
			return toString.apply(obj).slice(start,end);
		};

		// check if it is number.
		var isNumber=function(value){
			return typeOf(value)==='number'&&isFinite(value);
		};

		// check if it is array.
		var isArray=function(obj){
			return apply(obj,8,13)==='Array';
		};

		var length=function(array){
			return array.length;
		};

		// check if the array includes the number.
		var has=function(array,num){
			for(var i=0;i<length(array);i+=1){
				if(array[i]===num){
					return true;
				}
			}
			return false;
		};

		var chunk=function(array,result,num1,num2){
			for(var i=0,chunk=[];i<length(array);i+=1){
				if(num1===array[i]||num2===array[i]){
					chunk.push(array[i]);
				}
			}
			result.push(chunk);
		};

		// find the longest harmonious array.
		var longest=function(result){
			for(var i=0,max=0,longest;i<length(result);i+=1){
				if(max<length(result[i])){
					max=length(result[i]);
					longest=result[i];
				}
			}
			return longest;
		};

		var collect=function(array,result,hasFind){
			for(var i=0;i<length(array);i+=1){
				if(!isNumber(array[i])||has(hasFind,array[i])){
					continue;
				}
				hasFind.push(array[i]);
				chunk(array,result,array[i]-1,array[i]);
				chunk(array,result,array[i]+1,array[i]);
			}
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(array){
			if(isArray(array)){
				var result=[],hasFind=[];
				collect(array,result,hasFind);
				return longest(result);
			}
			error('ArgsError','Not array.');
		};
		
	})();
}
