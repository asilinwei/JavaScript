/**
 * 2018-07-16
 * @LinWei
 *
 * miss:
 * Give an array containing n distinct integers taken from
 * 0 to n (include n), find all missing integers from the array.
 *
 * Syntax:
 * miss(array)
 *
 * Arguments:
 * array(Array): The array to query.
 *
 * Return:
 * The array includes missing numbers.
 *
 * For example:
 *
 * miss([0, 1, 2, 3, 5, 7], 7)
 * // => [4, 6]
 *
 */

if(!window.miss){
	var miss=(function(){
		"use strict";

		var toString=Object.prototype.toString;

		var apply=function(obj,start,end){
			return toString.apply(obj).slice(start,end);
		};

		var typeOf=function(value){
			return typeof value;
		};

		// check if it is array.
		var isArray=function(obj){
			return apply(obj,8,13)==='Array';
		};

		var isTypeOfNumber=function(value){
			return typeOf(value)==='number';
		};

		// check if it is number.
		var isNumber=function(value){
			return isTypeOfNumber(value)&&isFinite(value);
		};

		var length=function(array){
			return array.length;
		};

		var has=function(array,num){
			for(var i=0;i<length(array);i+=1){
				if(!isNumber(array[i])){
					continue;
				}
				if(array[i]===num){
					return true;
				}
			}
			return false;
		};

		var push=function(miss,array,n){
			for(var i=0;i<=n;i+=1){
				if(!has(array,i)){
					miss.push(i);
				}
			}
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(array,n){
			if(isArray(array)&&isNumber(n)){
				var miss=[];
				push(miss,array,n);
				return miss;
			}
			error('ArgsError','Illegal type.');
		};
		
	})();
}
