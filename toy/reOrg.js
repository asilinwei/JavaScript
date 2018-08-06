/** 
 * 2018-08-06
 * @LinWei
 *
 * reOrg:
 * Give a string, reorganize the string so that two
 * characters that are adjacent to each other are
 * not the same. Return the reorganized string, if
 * can not reorganize the string, return empty string.
 *
 * Syntax:
 * reOrg(str)
 *
 * Arguments:
 * str(string): The string to query.
 *
 * Return:
 * The reorganized string.
 *
 * For example:
 *
 * reOrg('aaabbb')
 * // => 'ababab'
 *
 * reOrg('aaab')
 * // => ''
 *
 */

if(!window.reOrg){
	var reOrg=(function(){
		"use strict";

		var typeOf=function(value){
			return typeof value;
		};

		// check if it is string.
		var isString=function(value){
			return typeOf(value)==='string';
		};

		// swap two characters.
		var swap=function(arr,i,j){
			var temp=arr[i];
			arr[i]=arr[j];
			arr[j]=temp;
		};

		var length=function(x){
			return x.length;
		};

		var process=function(chars){
			for(var i=0,j,be,af;i<length(chars)-1;i+=1){
				if(chars[i]===chars[i+1]){
					be=chars.join('');
					for(j=i+2;j<length(chars);j+=1){
						if(chars[i]!==chars[j]){
							swap(chars,i+1,j);
							break;
						}
					}
					af=chars.join('');
					if(be===af){
						return '';
					}
				}
			}
			return chars.join('');
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(str){
			if(isString(str)){
				var chars=Array.from(str);
				return process(chars);
			}
			error('ArgsError','Not string.');
		};
		
	})();
}
