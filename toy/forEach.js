/**
 * 2018-06-15
 * @LinWei
 *
 * forEach:
 * This method is like Array.prototype.forEach except it can
 * invoke iteratee for each property of object literal.
 * 
 * Syntax:
 * forEach(collection,fn)
 *
 * Arguments
 * collection(Array|Object): The collection to query.
 * fn(Function): The function invoked per iteration.
 *
 * For example:
 * 
 * forEach([1,2,3],funcion(element){
       console.log(element);	
   });
 * // => 1 2 3
 *
 * forEach({a:1,b:2},function(key,value){
	   console.log(key,value);
   });
 * // => a 1
 * // => b 2     
 *
 */

if(!window.forEach){
	var forEach=(function(){
		"use strict";

		// the class of custom error.
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

			isFunction:function(obj){
				return this.typeOf(obj)===this.fn;
			},

			isObjectLiteral:function(obj){
				return getPrototypeOf(obj)===prototype;
			}

		};

		Tool.prototype={

			constructor:Tool,

			apply:function(obj,start,end){
				return toString.apply(obj).slice(start,end);
			},

			length:function(array){
				return array.length;
			},

			hasOwnProperty:function(obj,name){
				return obj.hasOwnProperty(name);
			}

		};

		Process.prototype={

			constructor:Process,

			// filter 
			filter:function(obj,fn,name){
				if(tool.hasOwnProperty(obj,name)){
					fn(name,obj[name]);
				}
			},

			// process if the argument is array.
			array:function(obj,fn){
				for(var i=0;i<tool.length(obj);i+=1){
					fn(obj[i]);
				}
			},

			// process if the argument is object literal.
			objectLiteral:function(obj,fn){
				for(var name in obj){
					this.filter(obj,fn,name);
				}
			},

			// invoke the function.
			invoke:function(obj,fn){
				switch(true){
					case type.isArray(obj):
					     this.array(obj,fn);
					     break;
					case type.isObjectLiteral(obj):
					     this.objectLiteral(obj,fn);
					     break;
					default:
					     throw ARGS_ERROR;          
				}
			}

		};

		// instances
		var type=new Type();
		var tool=new Tool();
		var process=new Process();
		var ARGS_ERROR=new CustomError('ArgumentsError','Illegal type.');


		var toString=Object.prototype.toString;
		var getPrototypeOf=Object.getPrototypeOf;
		var prototype=Object.prototype;


		return function(obj,fn){
			if(type.isFunction(fn)){
				process.invoke(obj,fn);
			} else{
				throw ARGS_ERROR;
			}
		};

	})();
}