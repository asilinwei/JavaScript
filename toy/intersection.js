/**
 * 2018-06-11
 * @LinWei
 *
 * intersection:
 * Create an array of values that are included in all arrays.
 * 
 * Syntax:
 * intersection([arrays])
 *
 * Arguments:
 * [arrays](Array): The arrays to inspect. 
 *
 * Return:
 * The array of values that are included in all arrays.
 *
 * For example:
 * 
 * intersection([1,2],[2,3])
 * // => [2]
 *
 */

if(!window.intersection){
	var intersection=(function(){
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
			this.fn='function';
			this.object='object';
		}

		Type.prototype={

			constructor:Type,

			typeOf:function(n){
				return typeof n;
			},

			// check if it is array.
			isArray:function(array){
				return isEqual(apply(array,8,13),this.array);
			},

			// check if it is function.
			isFunction:function(fn){
				return isEqual(this.typeOf(fn),this.fn);
			},

			// check if it is object, but includes null.
			isObject:function(obj){
				return isEqual(this.typeOf(obj),this.object)||
				       this.isFunction(obj);
			},

			// check if is null.
			isNull:function(value){
				return isEqual(value,null);
			},

			// check if it is primitive type.
			isPrimitive:function(value){
				return !this.isObject(value)||this.isNull(value);
			}

		};

		var type=new Type();

		var apply=function(obj,start,end){
			return toString.apply(obj).slice(start,end);
		};

		var isEqual=function(a,b){
			return a===b;
		};

		var length=function(x){
			return x.length;
		};

		// check if the array includes the element.
		var include=function(array,element){
			for(var i=0;i<length(array);i+=1){
				if(isEqual(array[i],element)){
					return true;
				}
			}
			return false;
		};

		// calculate the amount of arrays.
		var collect=function(obj,index,count){
			for(var j=1;j<length(obj);j+=1){
				if(!type.isArray(obj[j])){
					continue;
				}
				if(include(obj[j],obj[0][index])){
					count+=1;
				}
			}
			return count;
		};

		// push element into the result.
		var push=function(obj,count,store,index){
			if(isEqual(count,length(obj)-1)){
				store.push(obj[0][index]);
			}
		};

		var process=function(obj,store){
			var count;
			for(var i=0;i<length(obj[0]);i+=1){
				if(!type.isPrimitive(obj[0][i])){
					continue;
				}
				count=collect(obj,i,0);
				push(obj,count,store,i);
			}
		};

		return function(){
			var args=arguments;
			if(type.isArray(args[0])){
				var count;
				var result=[];
				process(args,result);
				return result;
			} else{
				throw new CustomError('ArgumentsError','Not array.');
			}
		};
		
	})();
}
