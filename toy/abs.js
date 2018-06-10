/**
 * 2018-06-10
 * @LinWei
 *
 * abs:
 * Return the absolute value of number.
 *
 * Syntax:
 * abs(number)
 *
 * Arguments:
 * number(number): The number to query. 
 *
 * Return:
 * The absolute value.
 *
 * For example:
 * 
 * abs(-12)
 * // => 12
 *
 * abs(12)
 * // => 12
 *
 * abs(-0)
 * // => 0
 * 
 */

if(!window.abs){
	var abs=(function(){
		"use strict";

		var isEqual=function(a,b){
			return a===b;
		};

		var and=function(a,b){
			return a&&b;
		};

		var condition=function(a,b,c){
			return a?b:c;
		};

		var isNumber=function(value){
			var type=typeof value;
			return and(isEqual(type,'number'),isFinite(value));
		};
		
		var other=function(x){
			return condition(x<0,-x,x);
		};

		var abs=function(value){
			return condition(isEqual(value,0),0,other(value));
		};

		return function(value){
			return condition(isNumber(value),abs(value),null);
		};
	})();
}