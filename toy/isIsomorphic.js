/**
 * 2018-07-20
 * @LinWei
 *
 * isIsomorphic:
 * Check if two strings are isomorphic.
 *
 * Syntax:
 * isIsomorphic(string, another)
 *
 * Arguments:
 * string(string): The string to query.
 * another(string): Another string to query.
 *
 * Return:
 * Return true if two strings are isomorphic, else false.
 *
 * For example:
 *
 * isIsomorphic('egg', 'add')
 * // => true
 *
 * isIsomorphic('foo', 'bar')
 * // => false
 *
 */

if(!window.isIsomorphic){
	var isIsomorphic=(function(){
		"use strict";

		var typeOf=function(value){
			return typeof value;
		};

		// check if it is string.
		var isString=function(value){
			return typeOf(value)==='string';
		};

		var length=function(x){
			return x.length;
		};

		var hasName=function(o,name){
			var keys=Object.keys(o);
			for(var i=0;i<length(keys);i+=1){
				if(keys[i]===name){
					return true;
				}
			}
			return false;
		};

		var hasValue=function(o,value){
			var keys=Object.keys(o);
			for(var i=0;i<length(keys);i+=1){
				if(o[keys[i]]===value){
					return true;
				}
			}
			return false;
		};

		var index=function(o,iso){
			for(var i=0;i<length(iso);i+=1){
				if(!hasValue(o,iso[i])){
					return i;
				}
			}
		};

		var add=function(obj,string,iso){
			for(var i=0;i<length(string);i+=1){
				if(!hasName(obj,string[i])){
					obj[string[i]]=iso[index(obj,iso)];
				}
			}
		};

		var check=function(string,iso,obj){
			for(var i=0,str='';i<length(string);i+=1){
				str+=obj[string[i]];
			}
			return str===iso;
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(string,iso){
			if(isString(string)&&isString(iso)){
				if(length(string)!==length(iso)){
					return false;
				}
				var obj={};
				add(obj,string,iso);
				return check(string,iso,obj);
			}
			error('ArgsError','Not string.');
		};
		
	})();
}
