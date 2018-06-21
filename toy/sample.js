/**
 * 2018-06-21
 * @LinWei
 * 
 * sample:
 * Get a random element or value of property from collection.
 *
 * Syntax:
 * sample(collection)
 *
 * Arguments:
 * collection(Array|Object): The collection to query.
 *
 * Note: The Object must be a object literal.
 *
 * Return:
 * The random element or value of property.
 *
 * For example:
 * 
 * sample([1, 2, 3, 4])
 * // => 3
 *
 * sample({a:12, b:36, c:100})
 * // => 12
 * 
 */

if(!window.sample){
	var sample=(function(){
		"use strict";

		var prototype=Object.prototype;
		var toString=prototype.toString;
		var getPrototype=Object.getPrototypeOf;

		var apply=function(obj,start,end){
			return toString.apply(obj).slice(start,end);
		};

		// check if it is object literal. 
		var isObjectLiteral=function(obj){
			return getPrototype(obj)==prototype;
		};

		var isArray=function(obj){
			return apply(obj,8,13)==='Array';
		};

		// random index.
		var random=function(low,up){
			var choice=up-low+1;
			return Math.floor(Math.random()*choice+low);
		};

		var length=function(array){
			return array.length;
		};

		// process element of array.
		var arraySample=function(array){
			return array[random(0,length(array)-1)];
		};

		// process value of property.
		var objectSample=function(obj){
			var array=Object.keys(obj);
			return obj[arraySample(array)];
		};
		
		return function(collect){
			switch(true){
				case isArray(collect):
				     return arraySample(collect);
				case isObjectLiteral(collect):
				     return objectSample(collect);
				default:
				     return null;          
			}
		};
	})();
}


