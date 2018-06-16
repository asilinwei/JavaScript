/**
 * 2018-06-16
 * @LinWei
 *
 * map:
 * This is like Array.prototype.map.
 *
 * Syntax:
 * map(array,fn)
 *
 * Arguments:
 * array(Array): The array to query.
 * fn(Function): The function to invoke for per element of array.
 * 
 * Return:
 * The array of result.
 *
 */

if(!window.map){
	var map=(function(){
		"use strict";

		// the class os custom error.
		function CustomError(type,message){
			this.type=type;
			this.message=message;
		}

		// the class of type.
		function Type(){
			this.array='Array';
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

			isFunction:function(fn){
				return this.typeOf(fn)===this.fn;
			},

			// check if the type of arguments is legal.
			isLegal:function(array,fn){
				return this.isArray(array)&&this.isFunction(fn);
			}

		};

		Tool.prototype={

			constructor:Tool,

			apply:function(obj,start,end){
				return toString.apply(obj).slice(start,end);
			},

			length:function(array){
				return array.length;
			}

		};
		
		Process.prototype={

			constructor:Process,

			push:function(array,store,fn){
				var length=tool.length(array);
				for(var i=0;i<length;i+=1){
					store.push(fn(array[i]));
				}
			}

		};

		var type=new Type();
		var tool=new Tool();
		var process=new Process();
		var ARGS_ERROR=new CustomError('ArgsError','Illegal type.');

		var toString=Object.prototype.toString;

		return function(array,fn){
			if(type.isLegal(array,fn)){
				var result=[];
				process.push(array,result,fn);
				return result;
			} 
			throw ARGS_ERROR;
		};
	})();
}

