/**
 * 2018-08-02
 * @LinWei
 *
 * replace:
 * Give an integer n and you can do operations as follow:
 * 1. If n is even, replace n with n / 2.
 * 2. If n is odd, you can replace n with either n + 1 or n - 1.
 * Return the minimum number of replacements needed for n to become 1. 
 * 
 * Syntax:
 * replace(integer)
 *
 * Arguments:
 * integer(number): The integer to query.
 *
 * Return:
 * The minimum of replacements.
 *
 * For example:
 *
 * replace(8)
 * // => 3
 * // 8 -> 4 -> 2 -> 1. The replacements are 4, 2 and 1.
 *
 * replace(7)
 * // => 4
 * // 7 -> 8 -> 4 -> 2 -> 1.
 * // 7 -> 6 -> 3 -> 2 -> 1.
 * 
 */

if(!window.replace){
	var replace=(function(){
		"use strict";

		var typeOf=function(value){
			return typeof value;
		};

		// check if it is number.
		var isNumber=function(value){
			return typeOf(value)==='number'&&isFinite(value);
		};

		var half=function(num,count){
			if(num!==((num>=0)?1:-1)){
				var add,minus;
				if(!(num%2)){
					num/=2;
					count=half(num,count+1);
				} else{
					add=half(num+1,count+1);
					minus=half(num-1,count+1);
					count=add>minus?minus:add;
				}
			}
			return count;
		};

		return function(num){
			return isNumber(num)?half(num,0):NaN;
		};
		
	})();
}

