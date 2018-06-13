/**
 * 2018-06-13
 * @LinWei
 *
 * zipObject:
 * Accept two arrays, one of keys and one of corresponding
 * values. According to this, create an object.
 *
 * Syntax:
 * zipObject(key,value)
 *
 * Arguments:
 * key(Array): Keys of properties.  
 * value(Array): Values of properties.
 *
 * Return:
 * The new object.
 *
 * For example:
 * 
 * zipObject(['a','b'],[1,2])
 * // => { 'a':1, 'b':2 } 
 *
 */

if(!window.zipObject){
	var zipObject=(function(){
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
			this.string='string';
		}

		// the class of process.
		function Process(){}

		// the class of tool methods.
		function Tool(){}

		Type.prototype={

			constructor:Type,

			typeOf:function(x){
				return typeof x;
			},

			// check if it is array.
			isArray:function(obj){
				return tool.apply(obj,8,13)===this.array;
			},

			// check if two objects are both arrays.
			isBothArray:function(obj1,obj2){
				return this.isArray(obj1)&&this.isArray(obj2);
			},

			// check if it is string.
			isString:function(value){
				return this.typeOf(value)===this.string;
			},

			// check if elements of array are all strings.
			isAllString:function(array){
				for(var i=0;i<tool.length(array);i+=1){
					if(!this.isString(array[i])){
						return false;
					}
				}
				return true;
			}

		};

		Process.prototype={

			constructor:Process,

			// add properties.
			addProperty:function(key,value){
				var obj={};
				if(type.isAllString(key)){
					var array=key.concat(value);
					this.loop(key,array,obj);
				} else{
					throw ELEMENT_ERROR;
				}
				return obj;
			},

			loop:function(key,array,obj){
				for(var i=0;i<tool.length(key);i+=1){
					obj[array[i]]=array[i+tool.length(key)];
				}
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

		var type=new Type();
		var process=new Process();
		var ELEMENT_ERROR=new CustomError('ArrayElementTypeError','Not string.');
		var ARGS_ERROR=new CustomError('ArgumentsError','Not array.');
		var tool=new Tool();
		
		return function(key,value){
			if(type.isBothArray(key,value)){
				return process.addProperty(key,value);
			} else{
				throw ARGS_ERROR;
			}
		};
	})();
}