/** 
 * 2018-08-04
 * @LinWei
 *
 * shift:
 * Give a string and an integer array shift.
 * Call the shifting of a letter, the next letter in the alphabet,
 * (wrapping around so that 'z' becomes 'a'). For example, shifting('a') === 'b',
 * shifting('t') === 'u', shifting('z') === 'a'. We want to shift
 * the first i+1 letters of string, shift[i] times. Return the final string after
 * all such shifts to string are applied.
 *
 * Syntax:
 * shift(s, shift)
 *
 * Arguments:
 * s(string): The string to query.
 * shift(Array): The array of times.
 *
 * Return:
 * The final string.
 *
 * For example:
 *
 * shift('abc', [3, 5, 9])
 * // => 'rpl'
 * We start with 'abc'.
 * After shifting the first 1 letters of s by 3, we have "dbc".
 * After shifting the first 2 letters of s by 5, we have "igc".
 * After shifting the first 3 letters of s by 9, we have "rpl", the answer. 
 *
 * shift('xyz', [1, 2, 3])
 * // => 'ddc'
 *
 */

if(!window.shift){
	var shift=(function(){
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

		// check if it is string.
		var isString=function(value){
			return typeOf(value)==='string';
		};

		// check if it is array.
		var isArray=function(obj){
			return apply(obj,8,13)==='Array';
		};

		var length=function(x){
			return x.length;
		};

		var charCodeAt=function(char){
			return char.charCodeAt();
		};

		var fromCharCode=function(num){
			return String.fromCharCode(num);
		};

		// the total shift.
		var sum=function(array,start){
			for(var i=start,sum=0;i<length(array);i+=1){
				if(!isNumber(array[i])){
					continue;
				}
				sum+=array[i];
			}
			return sum;
		};

		var toShift=function(chars,shift){
			var i=0,k=0,charCode,s;
			while(i<length(chars)){
				charCode=charCodeAt(chars[i]);
				s=sum(shift,k);
				charCode+=charCode+s>122?s-26:s;
				chars[i]=fromCharCode(charCode);
				i+=1;
				k+=1;
			}
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(string,shift){
			if(isString(string)&&isArray(shift)){
				var chars=Array.from(string);
				toShift(chars,shift);
				return chars.join('');
			}
			error('ArgsError','Illegal type.');
		};

	})();
}