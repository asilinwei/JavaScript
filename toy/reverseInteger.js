/**
 * 2018-07-02
 * @LinWei
 *
 * reverseInteger:
 * Reverse integer.
 *
 * Syntax:
 * reverseInteger(integer)
 *
 * Arguments:
 * integer(number): The integer to query.
 *
 * Return:
 * The reverse integer.
 *
 * For example:
 *
 * reverseInteger(12)
 * // => 21
 *
 * reverseInteger(-12)
 * // => -21
 *
 * reverseInteger(120)
 * // => 21
 *
 */

if(!window.reverseInteger){
	var reverseInteger=(function(){
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

		// check if it is integer.
		var isInteger=function(value){
			return value%1===0;
		};

		// the length of array.
		var length=function(array){
			return array.length;
		};

		var dislodge=function(string){
			var array=Array.from(string).reverse();
			for(var i=0;i<length(array);i+=1){
				if(array[i]==='0'){
					delete array[i];
				}
			}
			return Number(array.join(''));
		};

		var substr=function(string,start){
			return string.substring(start);
		};

		var reverse=function(number){
			var string=String(number);
			switch(true){
				case number<0:
				     return -dislodge(substr(string,1));
				case number>0:
				     return dislodge(string);
				default:
				     return 0;          
			}
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(number){
			if(isNumber(number)){
				if(isInteger(number)){
					return reverse(number);
				}
				error('TypeError','Not integer.');
			}
			error('ArgsError','Not number.');
		};
	})();

}
