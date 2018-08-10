/**
 * 2018-08-10
 * @LinWei
 *
 * superPow:
 * Calculate num, and num === Math.pow(base, exponent),
 * base is a positive integer, exponent is a positive integer
 * given in the form of an array.
 *
 * Syntax:
 * superPow(base, exponent)
 *
 * Arguments:
 * base(number): The base.
 * exponent(Array): The array represented a positive integer.
 *
 * Return:
 * Return num.
 *
 * For example:
 *
 * superPow(2, [1, 0])
 * // => 1024
 *
 * superPow(2, [1, 'hello', 0])
 * // => 1024
 *
 * superPow(2.4, [1, 0])
 * // => 1024
 *
 * superPow(2, [1, -1])
 * // => 2048
 *
 * superPow(-2, [1, 0])
 * // => NaN
 *
 */

if(!window.superPow){
	var superPow=(function(){
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
			return typeof value==='number'&&isFinite(value);
		};

		// check if it is array.
		var isArray=function(obj){
			return apply(obj,8,13)==='Array';
		};

		// the length of array.
		var length=function(array){
			return array.length;
		};

		// the power.
		var pow=function(base,exponent){
			for(var i=0,result=1;i<exponent;i+=1){
				result*=base;
			}
			return result;
		};

		var count=function(array){
			var count=0,i=0;
			while(i<length(array)){
				if(isNumber(array[i])){
					count+=1;
				}
				i+=1;
			}
			return count;
		};

		var abs=function(num){
			return num>=0?num:-num;
		};

		// calculate the exponent.
		var ex=function(array){
			var exponent=0;
			var k=count(array)-1;
			for(var i=0;i<length(array);i+=1){
				if(!isNumber(array[i])){
					continue;
				}
				exponent+=Math.floor(abs(array[i]))*pow(10,k);
				k-=1;
			}
			return exponent;
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};
		
		return function(base,exponent){
			if(isNumber(base)&&isArray(exponent)){
				base=Math.floor(base);
				return base>=0?pow(base,ex(exponent)):NaN;
			}
			error('ArgsError','Illegal type.');
		};
	})();
}
