/**
 * 2018-06-22
 * @LinWei
 *
 * mode:
 * Create an array included modes in the specified array.
 *
 * Syntax:
 * mode(array)
 *
 * Arguments:
 * array(Array): The array to query.
 *
 * Return:
 * The array included modes.
 *
 * For example:
 *
 * mode([2, 3, 1, 2, 5, 6, 2])
 * // => [2]
 *
 */

if(!window.mode){
	var mode=(function(){
		"use strict";

		var toString=Object.prototype.toString;

		var typeOf=function(value){
			return typeof value;
		};

		var apply=function(obj,start,end){
			return toString.apply(obj).slice(start,end);
		};

		var hasOwnProperty=function(obj,name){
			return obj.hasOwnProperty(name);
		};

		var isTypeOfNumber=function(value){
			return typeOf(value)==='number';
		};

		var isNumber=function(value){
			return isTypeOfNumber(value)&&isFinite(value);
		};

		var isArray=function(obj){
			return apply(obj,8,13)==='Array';
		};

		var length=function(array){
			return array.length;
		};

		// find the max count.
		var max=function(names,obj){
			var max=0;
			for(var i=0;i<length(names);i+=1){
				if(obj[names[i]]>max){
					max=obj[names[i]];
				}
			}
			return max;
		};

		// accumulate
		var tally=function(array,count,index){
			for(var i=0;i<length(array);i+=1){
				if(array[index]===array[i]){
					count+=1;
				}
			}
			return count;
		};

		// add a property to the count object.
		var addProperty=function(obj,array,index,count){
			if(!hasOwnProperty(obj,String(array[index]))){
				obj[array[index]]=count;
			}
		};

		// add some properties to the count object.
		var addProperties=function(obj,array){
			var count;
			for(var i=0;i<length(array);i+=1){
				if(!isNumber(array[i])){
					continue;
				}
				count=tally(array,0,i);
				addProperty(obj,array,i,count);
			}
		};

		// push elements to the result. 
		var push=function(store,names,obj){
			for(var i=0;i<length(names);i+=1){
				if(obj[names[i]]===max(names,obj)){
					store.push(Number(names[i]));
				}
			}
		};
		
		return function(array){
			if(isArray(array)){
				var obj={};
				var result=[];
				addProperties(obj,array);
				push(result,Object.keys(obj),obj);
				return result;
			}
		};
	})();
}

