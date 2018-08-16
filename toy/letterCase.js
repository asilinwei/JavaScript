/**
 * 2018-08-16
 * @LinWei
 *
 * letterCase:
 * Give a string, transform every letter individually 
 * to be lowercase or uppercase to create another string,
 * return all possible strings.
 *
 * Syntax:
 * letterCase(string)
 *
 * Arguments:
 * string(string): The string to query.
 *
 * Return:
 * The array of all possible strings with letter case permutation.
 *
 * For example:
 *
 * letterCase('a1b2')
 * // => ['a1b2', 'a1B2', 'A1b2', 'A1B2']
 *
 * letterCase('3z4')
 * // => ['3z4', '3Z4']
 *
 * letterCase('12345')
 * // => ['12345']
 *
 */

if(!window.letterCase){
	var letterCase=(function(){
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

		var isLow=function(char){
			return char>='a'&&char<='z';
		};

		var isUp=function(char){
			return char>='A'&&char<='Z';
		};

		var toLow=function(str){
			return str.toLowerCase();
		};

		var toUp=function(str){
			return str.toUpperCase();
		};

		// check if it is letter.
		var isLetter=function(char){
			return isLow(char)||isUp(char);
		};

		var process=function(string,result,str,len,i){
			if(length(str)!==len){
				var left,right;
				while(!isLetter(string[i])){
					str+=string[i];
					i+=1;
					if(!string[i]){
						return str;
					}
				}
				left=process(string,result,str+toLow(string[i]),len,i+1);
				if(left){
					result.push(left);
				}
				right=process(string,result,str+toUp(string[i]),len,i+1);
				if(right){
					result.push(right);
				}
			}
			if(length(str)===len){
				return str;
			}
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(string){
			if(isString(string)){
				var result=[];
				var last=process(string,result,'',length(string),0);
				if(last){
					result.push(last);
				}
				return result;
			}
			error('ArgsError','Not string.');
		};
		
	})();
}