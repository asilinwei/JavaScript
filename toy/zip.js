/**
 *
 * 2018-06-14
 * @LinWei
 *
 * zip:
 * Create an array, the first element is the first element of arrays, 
 * the second element is the second element of arrays, and so on.
 * 
 * Syntax:
 * zip(arrays)
 *
 * Arguments
 * arrays(Array...): Some arrays to query.
 *
 * Return:
 * The result of array.
 * 
 * For example:
 * 
 * zip([1,2],[true,false],['hello','world'])
 * // => [[1,true,'hello'], [2,false,'world']]  
 *
 *
 */

if(!window.zip){
	var zip=(function(){
		"use strict";

		var toString=Object.prototype.toString;

		var apply=function(obj,start,end){
			return toString.apply(obj).slice(start,end);
		};

		// check if it is array.
		var isArray=function(obj){
			return apply(obj,8,13)==='Array';
		};

		var length=function(x){
			return x.length;
		};

		// find the max.
		var filter=function(max,obj,index){
			if(max<length(obj[index])){
				max=length(obj[index]);
			}
			return max;
		};

		// the longest length of arrays.
		var longest=function(obj){
			var max=0;
			for(var i=0;i<length(obj);i+=1){
				if(!isArray(obj[i])){
					continue;
				}
				max=filter(max,obj,i);
			}
			return max;
		};

		var push=function(chunk,obj,index){
			for(var i=0;i<length(obj);i+=1){
				if(!isArray(obj[i])){
					continue;
				}
				chunk.push(obj[i][index]);
			}
		};

		var process=function(obj,store){
			var chunk;
			for(var i=0;i<longest(obj);i+=1){
				chunk=[];
				push(chunk,obj,i);
				store.push(chunk);
			}
		};

		return function(){
			var result=[];
			process(arguments,result);
			return result;
		};
	})();
}
