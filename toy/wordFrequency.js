/**
 * 2018-07-13
 * @LinWei
 *
 * wordFrequency:
 * Calculate the frequency of each word.
 *
 * Syntax:
 * wordFrequency(text)
 *
 * Arguments:
 * text(string): The text to query.
 *
 * Return:
 * The object of frequency.
 *
 * For example:
 *
 * wordFrequency('the day is sunny the the the sunny is is')
 * // => { the:4, day:1, is:3, sunny:2 }
 *
 */

if(!window.wordFrequency){
	var wordFrequency=(function(){
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

		var hasOwnProperty=function(obj,name){
			return obj.hasOwnProperty(name);
		};

		// initialize the count.
		var initialize=function(match,obj){
			for(var i=0,name;i<length(match);i+=1){
				name=match[i];
				if(!hasOwnProperty(obj,name)){
					obj[name]=1;
				}
			}
		};

		// calculate the count.
		var count=function(match,obj){
			for(var i=0,j,name;i<length(match)-1;i+=1){
				name=match[i];
				if(obj[name]!==1){
					continue;
				}
				for(j=i+1;j<length(match);j+=1){
					if(name===match[j]){
						obj[name]+=1;
					}
				}
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
				var match=string.match(/\b[a-z]+\b/ig);
				var obj={};
				initialize(match,obj);
				count(match,obj);
				return obj;
			}
			error('ArgsError','Not string.');
		};

	})();
}
