/**
 * 2018-06-28
 * @LinWei
 *
 * anagram:
 * Return all groups of string that are anagrams.
 *
 * Note:
 * Two strings are anagram if they can be the same
 * after change the order of characters.
 *
 * Syntax:
 * anagram(array)
 *
 * Arguments:
 * array(Array): The array to query.
 *
 * Return:
 * The array of groups.
 *
 * For example:
 *
 * anagram(['he', 'hello', 'abc', 'lolhe', 'oellh', 'llo'])
 * // => [['he'], ['abc'], ['llo'], ['hello', 'lolhe', 'oellh']]
 *
 * anagram(['abc', 'cba', 'he', 'eh', 'lala'])
 * // => [['lala'], ['abc', 'cba'], ['he', 'eh']]
 *
 */

if(!window.anagram){
	var anagram=(function(){
		"use strict";

		var toString=Object.prototype.toString;

		var apply=function(obj,start,end){
			return toString.apply(obj).slice(start,end);
		};

		var typeOf=function(x){
			return typeof x;
		};

		// check if it is string.
		var isString=function(value){
			return typeOf(value)==='string';
		};

		// check if it is array.
		var isArray=function(obj){
			return apply(obj,8,13)==='Array';
		};

		var length=function(array){
			return array.length;
		};

		// sort.
		var sortJoin=function(string){
			return Array.from(string).sort().join('');
		};

		// check if the element includes in array.
		var include=function(array,element){
			for(var i=0;i<length(array);i+=1){
				if(array[i]===element){
					return true;
				}
			}
			return false;
		};

		var push=function(array,result,a,b){
			if(sortJoin(array[a])===sortJoin(array[b])){
				if(!include(result,array[a])){
					result.push(array[a]);
				}
				result.push(array[b]);
			}
		};

		var find=function(array,result,index){
			for(var i=index+1;i<length(array);i+=1){
				if(include(result,array[i])){
					continue;
				}
				push(array,result,index,i);
			}
		};

		var loop=function(array,result){
			for(var i=0;i<length(array);i+=1){
				if(!isString(array[i])){
					continue;
				}
				find(array,result,i);
			}
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		// make groups.
		var groups=function(find,result){
			var mark=sortJoin(find[0]);
			var chunk=[];
			for(var i=0;i<length(find);i+=1){
				if(sortJoin(find[i])===mark){
					chunk.push(find[i]);
					if(i===length(find)-1){
						result.push(chunk);
					}
				} else{
					result.push(chunk);
					chunk=[];
					chunk.push(find[i]);
					mark=sortJoin(find[i]);
				}
			}
		};

		// other groups.
		var other=function(array,find,result){
			for(var i=0,chunk;i<length(array);i+=1){
				if(include(find,array[i])){
					continue;
				}
				chunk=[];
				chunk.push(array[i]);
				result.push(chunk);
			}
		};
		
		return function(array){
			if(isArray(array)){
				var find=[];
				var result=[];
				loop(array,find);
				other(array,find,result);
				groups(find,result);
				return result;
			}
			error('ArgsError','Not array.');
		};
	})();
}


