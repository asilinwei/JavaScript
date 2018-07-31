/**
 * 2018-07-31
 * @LinWei
 *
 * shortest:
 * Give a string and a character, return an array of integers
 * representing the shortest distance from the character.
 *
 * Syntax:
 * shortest(string, character)
 *
 * Arguments:
 * string(string): The string to query.
 * character(string): The character to query.
 *
 * Return:
 * The array includes shortest distances.
 *
 * For example:
 *
 * shortest('loveleetcode','e')
 * // => [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
 *
 */

if(!window.shortest){
	var shortest=(function(){
		"use strict";

		var typeOf=function(value){
			return typeof value;
		};

		var length=function(x){
			return x.length;
		};

		var min=function(num1,num2){
			return num1<=num2?num1:num2;
		};

		// check if it is string.
		var isString=function(value){
			return typeOf(value)==='string';
		};

		// check if it is character.
		var isChar=function(value){
			return isString(value)&&length(value)===1;
		};

		var distance=function(string,shortest,chunk,index){
			for(var i=0,distance;i<length(chunk);i+=1){
				if(index===length(string)-1){
					distance=i+1;
				} else if(index!==undefined){
					distance=index-i;
				} else{
					distance=min(i+1,length(chunk)-i);
				}
				shortest.push(distance);
			}
			if(index!==length(string)-1){
				shortest.push(0);
			}
		};

		var push=function(string,shortest,array,c){
			for(var i=0,j,chunk=[];i<length(string);i+=1){
				if(string[i]!==c){
					chunk.push(string[i]);
					if(i===length(string)-1){
						distance(string,shortest,chunk,i);
					}
				} else{
					if(!length(array)){
						distance(string,shortest,chunk,i);
					} else{
						distance(string,shortest,chunk);
					}
					array.push(chunk);
					chunk=[];
				}
			}
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(string,c){
			if(isString(string)&&isChar(c)){
				var shortest=[],array=[];
				push(string,shortest,array,c);
				return shortest;
			}
			error('ArgsError','Illegal type.');
		};
		
	})();
}
