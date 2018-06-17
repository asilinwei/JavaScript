/**
 * 2018-06-17
 * @LinWei
 *
 * difference:
 * Create an array, the elements of it is not included 
 * in other arrays. The result elements are determined by 
 * the first array.
 * 
 * Note:
 * The array of result don't includes the object type.
 *
 * Syntax:
 * difference([arrays...])
 *
 * Arguments:
 * [arrays...](Array): The arrays to query.
 *
 * Return:
 * The array of result.
 * 
 * For example:
 *
 * difference([1,2,3],[3,4,5],[2,4,6])
 * // => [1]
 *
 * difference([1,{a:12}],[3,4])
 * // => [1]
 *
 */

if(!window.difference){
	var difference=(function(){
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
			this.object='object';
			this.fn='function';
		}

		// the class of tool methods.
		function Tool(){}

		// the class of process.
		function Process(){}

		Type.prototype={

			constructor:Type,

			typeOf:function(x){
				return typeof x;
			},

			isArray:function(obj){
				return tool.apply(obj,8,13)===this.array;
			},

			isFunction:function(obj){
				return this.typeOf(obj)===this.fn;
			},

			isObject:function(obj){
				return this.typeOf(obj)===this.object;
			},

			isNull:function(value){
				return value===null;
			},

			// check if it is primitive type.
			isPrimitive:function(value){
				switch(true){
					case !(this.isFunction(value)||this.isObject(value)):
					case this.isNull(value):
					     return true;
					default:
					     return false;     
				}
			}

		};

		Tool.prototype={

			constructor:Tool,

			apply:function(obj,start,end){
				return toString.apply(obj).slice(start,end);
			},

			length:function(obj){
				return obj.length;
			},

			// check if the array includes the element.
			isInclude:function(array,element){
				for(var i=0;i<this.length(array);i+=1){
					if(element===array[i]){
						return true;
					}
				}
				return false;
			},

			// check if some arrays include the element.
			isHave:function(obj,element){
				for(var i=1;i<this.length(obj);i+=1){
					if(!type.isArray(obj[i])){
						continue;
					}
					if(this.isInclude(obj[i],element)){
						return true;
					}
				}
				return false;
			}

		};

		Process.prototype={

			constructor:Process,

			push:function(obj,array,store){
				for(var i=0;i<tool.length(array);i+=1){
					if(!type.isPrimitive(array[i])||tool.isHave(obj,array[i])){
						continue;
					}
					store.push(array[i]);
				}
			}

		};

		var type=new Type();
		var tool=new Tool();
		var process=new Process();
		var ARGS_ERROR=new CustomError('ArgsError','Not array.');


		return function(array){
			if(type.isArray(array)){
				var result=[];
				process.push(arguments,array,result);
				return result;
			}
			throw ARGS_ERROR;
		};
	})();
}

