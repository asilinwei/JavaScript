/**
 * 2018-08-18
 * @LinWei
 *
 * minSteps:
 * See https://leetcode.com/problems/2-keys-keyboard/description/
 *
 * Syntax:
 * minSteps(num)
 *
 * Arguments:
 * num(number): The number of 'A' want to get.
 *
 * Return:
 * The minimum number of steps.
 *
 * For example:
 *
 * minSteps(3)
 * // => 3
 *
 * minSteps(0)
 * // => NaN
 *
 * minSteps(3.4)
 * // => 3
 *
 */

if(!window.minSteps){
	var minSteps=(function(){
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

		var count=function(num){
			var str='A',count=0,paste;
			while(length(str)<num){
				if(!(num%length(str))){
					paste=str;
				}
				str+=paste;
				count+=(!(num%length(str))?2:1);
			}
			return count;
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(num){
			if(isNumber(num)){
				num=Math.floor(num);
				return num>=1?count(num):NaN;
			}
			error('ArgsError','Not number.');
		};
		
	})();
}