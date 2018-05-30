/**
 * 2018-05-30
 * @linweinb
 *
 * primitiveType:
 * Return the primitive type.
 *
 * Syntax:
 * primitiveType(value)
 *
 * Arguments:
 * value(number|string|boolean|null|undefined): The primitive value to query.
 *
 * Return:
 * The primitive type.
 *
 *
 * For example:
 * 
 * primitiveType(12)  // => 'number'
 *
 * primitiveType(NaN)  // => 'NaN'
 *
 * primitiveType('hello')  // => 'string'
 *
 * primitiveType(true)  // => 'boolean'
 *
 * primitiveType(null)  // => 'null'
 *
 * primitiveType(undefined)  //  => 'undefined'
 *
 */

if(!window.primitiveType){
	var primitiveType=(function(){
		"use strict";

		// check if it is a number.
		var isNumber=function(value){
			return typeof value===type.number&&isFinite(value);
		};

		// check if it is a string.
		var isString=function(value){
			return typeof value===type.string;
		};

		// check if it is a boolean value.
		var isBoolean=function(value){
			return typeof value===type.boolean;
		};

		// check if it is undefined.
		var isUndefined=function(value){
			return typeof value===type.undefined;
		};

		// check if it is null.
		var isNull=function(value){
			return value===null;
		};

		// check if it is NaN.
		var isNaN=function(value){
			return value!==value;
		};

		// the type class.
		function Type(){
			this.number='number';
			this.string='string';
			this.boolean='boolean';
			this.undefined='undefined';
		}
		var type=new Type();

		return function(value){
			switch(true){
				case isNumber(value):
				     return 'number';
				case isString(value):
				     return 'string';
				case isBoolean(value):
				     return 'boolean';
				case isUndefined(value):
				     return 'undefined';
				case isNull(value):
				     return 'null';
				case isNaN(value):
				     return 'NaN';
				default:
				     return 'Not primitive type';                           
			}
		};
	})();
}
