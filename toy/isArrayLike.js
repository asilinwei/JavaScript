/**
 * 2018-06-19
 * @LinWei
 *
 * isArrayLike:
 * Check if it is array-like.
 *
 * Syntax:
 * isArrayLike(something)
 *
 * Arguments:
 * something(*): Something to check.
 *
 * Return:
 * true if it is array-like, else false. 
 *
 * For example:
 *
 * isArrayLike([1,2,3])
 * // => true
 *
 * isArrayLike(document.body.children)
 * // => true
 *
 * isArrayLike('hello')
 * // => true
 *
 */

if(!window.isArrayLike){
	var isArrayLike=(function(){
		"use strict";

		var toString=Object.prototype.toString;

		// the class of type.
		function Type(){
			this.array='Array';
			this.object='object';
			this.string='string';
			this.fn='function';
			this.number='number';
		}

		// the class of tool.
		function Tool(){}

		// the class of process.
		function Process(){}

		Type.prototype={

			constructor:Type,

			typeOf:function(x){
				return typeof x;
			},

			isNumber:function(value){
				return this.typeOf(value)===this.number&&
				       isFinite(value);
			},

			isNull:function(value){
				return value===null;
			},

			isObject:function(obj){
				switch(true){
					case this.typeOf(obj)===this.object&&
					    !this.isNull(obj):
					case this.isFunction(obj):
					     return true;
					default:
					     return false;     
				}
			},

			isFunction:function(obj){
				return this.typeOf(obj)===this.fn;
			},

			isArray:function(obj){
				return tool.apply(obj,8,13)===this.array;
			},

			// check if it is the string includes number character.
			// like '0', '1', '2'.
			isNumString:function(value){
				return this.isNumber(value-1);
			},

			isString:function(value){
				return this.typeOf(value)===this.string;
			}

		};

		Tool.prototype={

			constructor:Type,

			length:function(array){
				return array.length;
			},

			apply:function(obj,start,end){
				return toString.apply(obj).slice(start,end);
			}

		};

		Process.prototype={

			constructor:Process,

			// check
			check:function(obj){
				var array=Object.keys(obj);
				if(type.isNumber(tool.length(obj))){
					for(var i=0;i<tool.length(array);i+=1){
						if(type.isNumString(array[i])){
							return true;
						}
					}
				}
				return false;
			}

		};

		var type=new Type();
		var tool=new Tool();
		var process=new Process();
		
		return function(something){
			switch(true){
				case type.isArray(something):
				case type.isString(something):
				     return true;
				case type.isObject(something):
				     return process.check(something); 
				default:
				     return false;       
			}
		};
	})();
}