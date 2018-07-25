/**
 * 2018-07-25
 * @LinWei
 *
 * license:
 * Give a license key which consists only alphanumeric character
 * and dashes. Give a number k, reformat the license key such that
 * each group contains exactly k characters, except for the first
 * group which could be shorter than k, but still contain at
 * least one character. Furthermore, there is a dash inserted between
 * two groups and all lowercase letters is converted to uppercase.
 *
 * Syntax:
 * license(key, [k=1])
 *
 * Arguments:
 * key(string): The license key to query.
 * [k=1](number): The number k.
 *
 * Return:
 * The reformatted license key.
 *
 * For example:
 *
 * license('5F3Z-2e-9-w', 4)
 * // => '5F3Z-2E9W'
 *
 * license('5F3Z-2e-9-w')
 * // => '5-F-3-Z-2-E-9-W'
 *
 */

if(!window.license){
	var license=(function(){
		"use strict";

		var typeOf=function(value){
			return typeof value;
		};

		// check if it is string.
		var isString=function(value){
			return typeOf(value)==='string';
		};

		// check if it is number.
		var isNumber=function(value){
			return typeOf(value)==='number'&&isFinite(value);
		};

		// check if it is uppercase letter.
		var isUp=function(char){
			return char>='A'&&char<='Z';
		};

		// check if it is lowercase letter.
		var isLow=function(char){
			return char>='a'&&char<='z';
		};

		// To uppercase letter.
		var toUp=function(char){
			return char.toUpperCase();
		};

		// check if it is the character includes single digit.
		var isNumChar=function(char){
			return char>='0'&&char<='9';
		};

		var length=function(x){
			return x.length;
		};

		var accumulate=function(string){
			for(var i=0,str='';i<length(string);i+=1){
				if(!(isUp(string[i])||isLow(string[i])||isNumChar(string[i]))){
					continue;
				}
				str+=(isLow(string[i])?toUp(string[i]):string[i]);
			}
			return str;
		};

		var push=function(result,chunk,str,index,len){
			chunk+=str[index];
			if(length(chunk)===len){
				result.push(chunk);
				chunk='';
			}
			return chunk;
		};

		var chunks=function(str,result,k){
			for(var i=0,chunk='';i<length(str);i+=1){
				if(!length(result)&&length(str)%k){
					chunk=push(result,chunk,str,i,length(str)%k);
				} else{
					chunk=push(result,chunk,str,i,k);
				}
			}
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(string,k){
			k=k!==undefined?k:1;
			if(isString(string)&&isNumber(k)){
				var result=[];
				chunks(accumulate(string),result,k);
				return result.join('-');
			}
			error('ArgsError','Illegal type.');
		};
		
	})();
}
