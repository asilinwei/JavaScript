/**
 * 2018-07-30
 * @LinWei
 *
 * parentheses:
 * Give a string only containing the characters '(', ')',
 * '[', ']', '{' and '}'. Return true if the string is valid,
 * else false.
 *
 * Note:
 * The string is valid if:
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 *
 * Syntax:
 * parentheses(string)
 *
 * Arguments:
 * string(string): The string to query.
 *
 * Return:
 * true or false.
 *
 * For example:
 *
 * parentheses('()')
 * // => true
 *
 * parentheses('()[]{}')
 * // => true
 *
 * parentheses('(]')
 * // => false
 *
 * parentheses('([)]')
 * // => false
 *
 * parentheses('{[]}')
 * // => true
 *
 */

if(!window.parentheses){
	var parentheses=(function(){
		"use strict";

		var typeOf=function(value){
			return typeof value;
		};

		// check if it is string.
		var isString=function(value){
			return typeOf(value)==='string';
		};

		var length=function(x){
			return x.length;
		};

		var isBracket=function(char){
			switch(char){
				case '(':
				case '[':
				case '{':
				case ')':
				case ']':
				case '}':
				     return true;
				default:
				     return false;     
			}
		};

		// check if it is left bracket.
		var isLeft=function(char){
			switch(char){
				case '(':
				case '[':
				case '{':
				     return true;
				default:
				     return false;     
			}
		};

		var process=function(string,stack,obj){
			for(var i=0;i<length(string);i+=1){
				if(!isBracket(string[i])){
					return false;
				}
				if(isLeft(string[i])){
					stack.push(string[i]);
				} else{
					if(!i){
						return false;
					}
					if(obj[stack[length(stack)-1]]===string[i]){
						stack.pop();
					}
				}
			}
			return !length(stack);
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(string){
			if(isString(string)){
				var stack=[];
				var obj={
					"(":")",
					"[":"]",
					"{":"}"
				};
				return !length(string)?true:process(string,stack,obj);
			}
			error('ArgsError','Not string.');
		};	
		
	})();	
}

