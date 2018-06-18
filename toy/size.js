/**
 * 2018-06-18
 * @LinWei
 *
 * size:
 * Gets the size of collection by returning its length of
 * array-like type or the number of enumerable properties
 * in object.
 *
 * Syntax:
 * size(collection)
 *
 * Arguments:
 * collection(Array|string|Object): The collection to query.
 *
 * Return:
 * The size.
 *
 * For example:
 *
 * size('hello')
 * // => 5
 *
 * size({a:1,b:2})
 * // => 2
 *
 * size([1,2,3])
 * // => 3
 *
 */

if(!window.size){
	var size=(function(){
		"use strict";

		var toString=Object.prototype.toString;

		// the class of type.
		function Type(){
			this.array='Array';
			this.string='string';
			this.fn='function';
			this.object='object';
		}

		// the class of tool.
		function Tool(){}

		Type.prototype={

			constructor:Type,

			typeOf:function(x){
				return typeof x;
			},

			isArray:function(obj){
				return tool.apply(obj,8,13)===this.array;
			},

			isString:function(value){
				return this.typeOf(value)===this.string;
			},

			isFunction:function(obj){
				return this.typeOf(obj)===this.fn;
			},

			isObject:function(obj){
				return this.typeOf(obj)===this.object&&
				      !this.isNull(obj);
			},

			isNull:function(value){
				return value===null;
			}

		};

		Tool.prototype={

			constructor:Tool,

			length:function(x){
				return x.length;
			},

			apply:function(obj,start,end){
				return toString.apply(obj).slice(start,end);
			}

		};

		var type=new Type();
		var tool=new Tool();
		
		return function(collect){
			switch(true){
				case type.isArray(collect):
				case type.isString(collect):
				     return tool.length(collect);
				case type.isObject(collect):     
				case type.isFunction(collect):
				     return tool.length(Object.keys(collect));
				default:
				     return null;     
			}
		};
	})();
}