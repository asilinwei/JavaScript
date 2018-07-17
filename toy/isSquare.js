/**
 * 2018-07-17
 * @LinWei
 *
 * isSquare:
 * Return true if the number is square of an integer, else false.
 *
 * Syntax:
 * isSquare(num)
 *
 * Arguments:
 * num(number): The number to query.
 *
 * Return:
 * true or false.
 *
 * For example:
 *
 * isSquare(16)
 * // => true
 *
 * isSquare(12)
 * // => false 
 *
 */

if(!window.isSquare){
	var isSquare=(function(){
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

		// check.
		var is=function(num){
			for(var i=0;i<=num;i+=1){
				if(i*i===num){
					return true;
				}
			}
			return false;
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(num){
			if(isNumber(num)){
				return num>=0?is(num):false;
			}
			error('ArgsError','Not number.');
		};
		
	})();
}
