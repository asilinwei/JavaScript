/**
 * 2018-07-13
 * @LinWei
 *
 * lastWordLength:
 * Return the length of last word in the string.
 *
 * Syntax:
 * lastWordLength(string)
 *
 * Arguments:
 * string(string): The string to query.
 *
 * Return:
 * The length.
 *
 * For example:
 *
 * lastWordLength('good boy')
 * // => 3
 *
 * Another solution:
 * function lastWordLength(string){
	   var match=string.match(/\b[a-z]+\b/ig);
	   return match[match.length-1].length;
   }
 *
 */

if(!window.lastWordLength){
	var lastWordLength=(function(){
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

		// check if it is upper-case character.
		var isUp=function(character){
			return character>='A'&&character<='Z';
		};

		// check if it is lower-case character.
		var isLow=function(character){
			return character>='a'&&character<='z';
		};

		// the length of last word.
		var last=function(string,len){
			for(var i=0,str='';i<length(string);i+=1){
				if(isUp(string[i])||isLow(string[i])){
					str+=string[i];
					if(i===length(string)-1){
						len.push(length(str));
					}
				} else{
					if(str!==''){
						len.push(length(str));
					}
					str='';
				}
			}
			return len[length(len)-1];
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(string){
			if(isString(string)){
				var len=[];
				return last(string,len);
			}
			error('ArgsError','Not string.');
		};
	})();

}