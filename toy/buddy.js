/**
 * 2018-07-11
 * @LinWei
 *
 * buddy:
 * Return true if and only if the string swaps two letters
 * so that the result is equal to buddy string, else return
 * false.
 *
 * Syntax:
 * buddy(string, buddy)
 *
 * Arguments:
 * string(string): The string to query.
 * buddy(string): The buddy string to query.
 * 
 * Return:
 * true or false.
 *
 * For example:
 *
 * buddy('ab','ba')
 * // => true
 *
 * buddy('aaabcd','aaadcb')
 * // => true
 *
 * buddy('ab','ab')
 * // => false
 *
 */

if(!window.buddy){
	var buddy=(function(){
		"use strict";

		var typeOf=function(value){
			return typeof value;
		};

		// check if it is string.
		var isString=function(value){
			return typeOf(value)==='string';
		};

		var length=function(string){
			return string.length;
		};

		// the first difference.
		var first=function(string,buddy){
			for(var i=0;i<length(string);i+=1){
				if(string[i]!==buddy[i]){
					return {
						a:string[i],
						b:buddy[i],
						index:i
					};
				}
			}
		};

		// the second difference.
		var second=function(string,buddy,index){
			for(index=index+1;index<length(string);index+=1){
				if(string[index]!==buddy[index]){
					return {
						a:string[index],
						b:buddy[index],
						index:index
					};
				}
			}
		};

		var rest=function(string,buddy,index,a,b,c,d){
			for(index=index+1;index<length(string);index+=1){
				if(string[index]!==buddy[index]){
					return false;
				}
			}
			if(a===d&&b===c){
				return true;
			}
			return false;
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(string,buddy){
			if(isString(string)&&isString(buddy)){
				if(length(string)!==length(buddy)||string===buddy){
					return false;
				}
				var a=first(string,buddy).a;
				var b=first(string,buddy).b;
				var index1=first(string,buddy).index;
				var c=second(string,buddy,index1).a;
				var d=second(string,buddy,index1).b;
				var index2=second(string,buddy,index1).index;
				return rest(string,buddy,index2,a,b,c,d);
			}
			error('ArgsError','Not string.');
		};
	})();
	
}

