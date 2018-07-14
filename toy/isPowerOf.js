/**
 * 2018-07-14
 * @LinWei
 *
 * isPowerOf:
 * Return true if the number is a power of the base, else false.
 *
 * Syntax:
 * isPowerOf(power, base)
 *
 * Arguments:
 * power(number): The power to query.
 * base(number): The base.
 *
 * Return:
 * true or false.
 *
 * For example:
 *
 * isPowerOf(8, 2)
 * // => true
 *
 * isPowerOf(7, 2)
 * // => false 
 *
 */

if(!window.isPowerOf){
	var isPowerOf=(function(){
		"use strict";

		var typeOf=function(value){
			return typeof value;
		};

		var isTypeOfNumber=function(value){
			return typeOf(value)==='number';
		};

		// check if it is number.
		var isNumber=function(value){
			return isTypeOfNumber(value)&&isFinite(value);
		};

		// recursion
		var mod=function(value,base){
			if(value%base===0){
				var is=mod(value/base,base);
			} else{
				return value===1?true:false;
			}
			return is;
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(number,base){
			if(isNumber(number)&&isNumber(base)){
				if(number>=1){
					return mod(number,base);
				} else if(number>0&&number<1){
					return mod(1/number,base);
				} else{
					return false;
				}
			}
			error('ArgsError','Not number.');
		};
		
	})();
}
