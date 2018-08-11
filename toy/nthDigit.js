/**
 * 2018-08-11
 * @LinWei
 *
 * nthDigit:
 * Find the n-th digit of the infinite integer sequence
 * start from 1.
 *
 * Syntax:
 * nthDigit(n)
 *
 * Arguments:
 * n(number): n-th.
 *
 * Return:
 * The n-th digit.
 *
 * For example:
 *
 * nthDigit(3)
 * // => 3
 *
 * nthDigit(11)
 * // => 0
 * // The 11-th digit of the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,... is a 0, which is part of the number 10.
 *
 * nthDigit(11.4)
 * // => 0
 * // Ignore decimal point.
 *
 * nthDigit(-11)
 * // => NaN 
 *
 */

if(!window.nthDigit){
	var nthDigit=(function(){
		"use strict";

		var typeOf=function(value){
			return typeof value;
		};

		// check if it is number.
		var isNumber=function(value){
			return typeOf(value)==='number'&&isFinite(value);
		};

		// the length of string.
		var length=function(string){
			return string.length;
		};

		var find=function(n){
			var i=0,str='';
			while(n>=length(str)){
				str+=i++;
			}
			return +str[n];
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(n){
			if(isNumber(n)){
				n=Math.floor(n);
				return n>=1?find(n):NaN;
			}
			error('ArgsError','Not number.');
		};
		
	})();
}
