/**
 * 2018-06-10
 * @LinWei
 *
 * concat:
 * Create an array concatenating elements of the array 
 * and other arguments.
 *
 * Syntax:
 * concat(array,args...)
 *
 * Arguments:
 * array(Array): The array to query.
 * args(*): The args to concatenate.
 *
 * Return:
 * The concatenating array.
 *
 * For example:
 * 
 * concat([1,2],3,4,[[5]])
 * // => [1,2,3,4,[5]]
 * 
 */

if(!window.concat){
	var concat=(function(){
		"use strict";

		var toString=Object.prototype.toString;

		// the class of custom error.
		function CustomError(type,message){
			this.type=type;
			this.message=message;
		}

		// the class of type.
		function Type(){
			this.array='Array';
		}

		// the class of compare.
		function Compare(){}

		Type.prototype={

			constructor:Type,

			// check if it is array.
			isArray:function(array){
				return compare.isEqual(apply(array,8,13),this.array);
			}

		};

		Compare.prototype={

			constructor:Compare,

			// check if both them are equal.
			isEqual:function(a,b){
				return a===b;
			}
			
		};

		var type=new Type();
		var compare=new Compare();

		var apply=function(obj,start,end){
			return toString.apply(obj).slice(start,end);
		};

		var length=function(x){
			return x.length;
		};

		var loop=function(array,store){
			for(var j=0;j<length(array);j+=1){
				store.push(array[j]);
			}
		};

		var push=function(array,store,obj){
			for(var i=0,j;i<length(obj);i+=1){
				if(!type.isArray(obj[i])){
					store.push(obj[i]);
					continue;
				}
				loop(obj[i],store);
			}
		};

		return function(array){
			if(type.isArray(array)){
				var result=[];
				push(array,result,arguments);
			} else{
				throw new CustomError('ArgumentsError','Illegal type.');
			}
			return result;
		};

	})();
}
