/**
 * 2018-06-27
 * @LinWei
 *
 * rotate:
 * Rotate string by offset.
 *
 * Syntax:
 * rotate(string,[offset=0])
 *
 * Arguments:
 * string(String): The string to query.
 * [offset=0](number): The offset.
 *
 * Return:
 * The rotate string.
 *
 * For example:
 *
 * rotate('abcdefg')
 * // => 'abcdefg'
 *
 * rotate('abcdefg',1)
 * // => 'gabcdef'
 *
 * rotate('abcdefg',2)
 * // => 'fgabcde'
 *
 * rotate('abcdefg',3)
 * // => 'efgabcd'
 *
 */

if(!window.rotate){
	var rotate=(function(){
		"use strict";

		var typeOf=function(x){
			return typeof x;
		};

		var isString=function(value){
			return typeOf(value)==='string';
		};

		var isTypeOfNumber=function(value){
			return typeOf(value)==='number';
		};

		// check if it is number.
		var isNumber=function(value){
			return isTypeOfNumber(value)&&isFinite(value);
		};

		// the length of string.
		var length=function(string){
			return string.length;
		};

		// substring.
		var substring=function(string,start,end){
			end=end!==undefined?end:length(string);
			return string.substring(start,end);
		};

		var calculate=function(string,offset){
			return (offset>=0?length(string):0)-offset%length(string);
		};
		
		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};
		return function(string,offset){
			offset=offset!==undefined?offset:0;
			if(isString(string)&&isNumber(offset)){
				return substring(string,calculate(string,offset))+
				       substring(string,0,calculate(string,offset));
			}
			error('ArgsError','Illegal type.');
		};
	})();
}
