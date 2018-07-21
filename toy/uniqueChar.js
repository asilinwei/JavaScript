/**
 * 2018-07-21
 * @LinWei
 *
 * uniqueChar:
 * Find the index of the first non-repeating character.
 *
 * Syntax:
 * uniqueChar(string)
 *
 * Arguments:
 * string(string): The string to query.
 *
 * Return:
 * The index of the first unique character.
 *
 * For example:
 *
 * uniqueChar('loveleetcode')
 * // => 2
 *
 * uniqueChar('leetcode')
 * // => 0
 *
 */

if(!window.uniqueChar){
	var uniqueChar=(function(){

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

		// check if the array has the element.
		var has=function(array,value){
			for(var i=0;i<length(array);i+=1){
				if(array[i]===value){
					return true;
				}
			}
			return false;
		};

		var collect=function(string,repeat){
			for(var i=0,j;i<length(string)-1;i+=1){
				for(j=i+1;j<length(string);j+=1){
					if(string[i]===string[j]&&!has(repeat,string[i])){
						repeat.push(string[i]);
					}
				}
			}
		};

		var index=function(string,repeat){
			for(var i=0;i<length(string);i+=1){
				if(!has(repeat,string[i])){
					return i;
				}
			}
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};
		
		return function(string){
			if(isString(string)){
				var repeat=[];
				collect(string,repeat);
				return index(string,repeat);
			}
			error('ArgsError','Not string.');
		};
	})();
}
