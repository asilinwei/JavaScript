/**
 * 2018-06-06
 * @linweinb
 * 
 * xor:
 * Create an array to store the unique elements of all specified array.
 *
 * Syntax:
 * xor(array...)
 *
 * Arguments:
 * (array...)(Array): Some arrays to query.The elements of these 
 * arrays must be primitive type.
 *
 * Return:
 * The array with some unique elements.
 *
 * For example:
 *
 * xor([1,2],[2,3])
 * // => [1,3]
 *
 * xor([1,2,3],[1,3])
 * // => [2]
 *
 */

if(!window.xor){
	var xor=(function(){
		"use strict";

		var toString=Object.prototype.toString;

		// the class of custom error.
		function CustomError(type,message){
			this.type=type;
			this.message=message;
		}

		// check if it is an array.
		var isArray=function(array){
			return toString.apply(array)==='[object Array]';
		};

		// the length.
		var length=function(x){
			return x.length;
		};

		// check if it is null.
		var isNull=function(value){
			return equal(value,null);
		};

		// check if it is primitive type.
		var isPrimitiveType=function(value){
			return notEqual(typeof value,'object')||isNull(value);
		};

		var equal=function(a,b){
			return a===b;
		};

		var notEqual=function(a,b){
			return a!==b;
		};

		var include=function(array,element,index){
			for(var i=0;i<length(array);i+=1){
				if(equal(element,array[i])&&notEqual(index,i)){
					return true;
				}
			}
			return false;
		};

		var collect=function(x,store){
			for(var i=0,j;i<length(x);i+=1){
				if(isArray(x[i])){
					for(j=0;j<length(x[i]);j+=1){
						store.push(x[i][j]);
					}
				}
			}
		};

		var filter=function(array,result){
			for(var i=0;i<length(array);i+=1){
				if(isPrimitiveType(array[i])){
					if(include(array,array[i],i)){
						continue;
					}
					result.push(array[i]);
				} else{
					throw new CustomError('TypeError','Not primitive type.');
				}
			}
		};
		
		return function(){
			var args=arguments;
			var store=[];
			var result=[];
			collect(args,store);
			filter(store,result);
			return result;
		};
	})();
}

