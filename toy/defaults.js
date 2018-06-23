/**
 * 2018-06-23
 * @LinWei
 *
 * defaults:
 * Add enumerable properties for the object. If other objects
 * has the same key, ignored.
 * 
 * Note:
 * This method mutates object.
 *
 * Syntax:
 * defaults(object, [source])
 *
 * Arguments:
 * object(Object): The target object.
 * [source](Object): Some source objects.
 *
 * Return:
 * The target object.
 *
 * For example:
 *
 * defaults({ a:1 }, { b:2 }, { a:23 })
 * // => { a:1, b:2 }
 *
 */

if(!window.defaults){
	var defaults=(function(){
		"use strict";

		var typeOf=function(x){
			return typeof x;
		};

		var isTypeOfObject=function(x){
			return typeOf(x)==='object';
		};

		var isNull=function(value){
			return value===null;
		};

		// not include null.
		var isObject=function(obj){
			return isTypeOfObject(obj)&&!isNull(obj);
		};

		var isFunction=function(obj){
			return typeOf(obj)==='function';
		};

		// check if it is object type.
		var isObjectType=function(obj){
			return isObject(obj)||isFunction(obj)?true:false;
		};

		var length=function(obj){
			return obj.length;
		};

		var hasOwnProperty=function(obj,name){
			return obj.hasOwnProperty(name);
		};

		var add=function(obj,names,list,index){
			for(var i=0;i<length(names);i+=1){
				if(hasOwnProperty(obj,names[i])){
					continue;
				}
				obj[names[i]]=list[index][names[i]];
			}
		};

		var addProperties=function(obj,list){
			for(var i=1;i<length(list);i+=1){
				if(!isObjectType(obj)){
					continue;
				}
				add(obj,Object.keys(list[i]),list,i);
			}
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};
		
		return function(obj){
			if(isObjectType(obj)){
				addProperties(obj,arguments);
				return obj;
			}
			error('ArgsError','Not object type.');
		};
	})();
}

