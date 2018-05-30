/**
 * 2018-05-30
 * @linweinb
 *
 * referenceType:
 * Return the type of an object.
 *
 * Syntax:
 * referenceType(object)
 *
 * Arguments:
 * object(Array|Function|Object|Date|RegExp|Custom): The object to query.
 *
 * Return:
 * The type of an object.
 *
 *
 * For example:
 * 
 * referenceType([1,2,3])  // => 'Array'
 *
 * referenceType({a:1})  // => 'Object'
 *
 * referenceType(function(){})  // => 'Function'
 *
 * referenceType(new Date())  // => 'Date'
 *
 * referenceType(/\w/)  // => 'RegExp'
 *
 * function Foo(){}
 * var instance=new Foo();
 * referenceType(instance)  // => 'Custom'
 *
 */

if(!window.referenceType){
	var referenceType=(function(){
		"use strict";

		var toString=Object.prototype.toString;
		var getPrototypeOf=Object.getPrototypeOf;
		var objPrototype=Object.prototype;

		// the Type class.
		var Type=function(){
			this.array='[object Array]';
			this.obj='[object Object]';
			this.fn='[object Function]';
			this.date='[object Date]';
			this.regexp='[object RegExp]';
		};
		var type=new Type();

		// check if it is an object literal.
		var isObject=function(obj){
			return getPrototypeOf(obj)===objPrototype;
		};

		// check if it is an array.
		var isArray=function(array){
			return toString.apply(array)===type.array;
		};
		var isFunction=function(fn){
			return toString.apply(fn)===type.fn;
		};

		// check if it is a date object.
		var isDate=function(date){
			return toString.apply(date)===type.date;
		};

		// check if it is a regular expression.
		var isRegExp=function(regexp){
			return toString.apply(regexp)===type.regexp;
		};

		// check if it is a custom object.
		var isCustom=function(custom){
			return toString.apply(custom)===type.obj&&!isObject(custom);
		};

		return function(object){
			switch(true){
				case isObject(object):
				     return 'Object';
				case isArray(object):
				     return 'Array';
				case isFunction(object):
				     return 'Function';
				case isDate(object):
				     return 'Date';
				case isRegExp(object):
				     return 'RegExp';
				case isCustom(object):
				     return 'Custom';
				default:
				     return 'unknown';                              
			}
		};
	})();
}