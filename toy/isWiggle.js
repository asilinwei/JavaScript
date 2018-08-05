/**
 * 2018-08-05
 * @LinWei
 *
 * isWiggle:
 * Give an integer array, check if it is wiggle array.
 *
 * Note:
 * The wiggle array is the differences between
 * successive numbers strictly alternate between
 * positive and negative.
 *
 * Syntax:
 * isWiggle(array)
 *
 * Arguments:
 * array(Array): The array to check.
 *
 * Return:
 * Return true if it is wiggle array, else false.
 *
 * For example:
 *
 * isWiggle([1, 7, 4, 9, 2, 5])
 * // => true
 * // The differences are -6, 3, -5, 7, -3.
 *
 * isWiggle([1, 4, 7, 2, 5])
 * // => false
 * // The differences are -3, -3, 5, -3.
 * // The first two differences are negative.
 *
 */

if(!window.isWiggle){
	var isWiggle=(function(){
		"use strict";

		var toString=Object.prototype.toString;

		var typeOf=function(value){
			return typeof value;
		};

		var apply=function(obj,start,end){
			return toString.apply(obj).slice(start,end);
		};

		// check if it is number.
		var isNumber=function(value){
			return typeOf(value)==='number'&&isFinite(value);
		};

		// check if it is array.
		var isArray=function(obj){
			return apply(obj,8,13)==='Array';
		};

		var length=function(array){
			return array.length;
		};

		var index=function(array,start){
			for(var i=start;i<length(array);i+=1){
				if(isNumber(array[i])){
					return i;
				}
			}
		};

		var pos=function(a){
			var i=0,k=1,next;
			while(i<length(a)-1){
				next=index(a,i+1);
				if(k%2?a[i]<=a[next]:a[i]>=a[next]){
					return false;
				}
				i+=1;
				k+=1;
			}
			return true;
		};

		var neg=function(a){
			var i=0,k=1,next;
			while(i<length(a)-1){
				next=index(a,i+1);
				if(k%2?a[i]>=a[next]:a[i]<=a[next]){
					return false;
				}
				i+=1;
				k+=1;
			}
			return true;
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(array){
			if(isArray(array)){
				return pos(array)||neg(array);
			}
			error('ArgsError','Not array.');
		};

	})();
}
