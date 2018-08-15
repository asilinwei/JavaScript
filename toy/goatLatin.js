/**
 * 2018-08-15
 * @LinWei
 *
 * goatLatin:
 * Give a sentence s, composed of words separated by spaces.
 * Convert s to "Goat Latin"(a made-up language similar to Pig Latin.).
 * The rules of Goat Latin are as follow:
 * 1. If a word begins with a vowel(a, e, i, o, or u), append "ma" to the end of the word.
 *    For example, the word "apple" becomes "applema".
 * 2. If a word begins with a consonant(not a vowel),  remove the first letter and append it to the end, then add "ma".
 *    For example, the word "goat" becomes "oatgma". 
 * 3. Add one letter "a" to the end of each word per its word index in s, starting with 1.
 *    For example, the first word gets "a" added to the end, the second word gets "aa" added to 
 *    the end and so on.
 * Return final s.
 *
 * Syntax:
 * goatLatin(s)
 *
 * Arguments:
 * s(string): The sentence to convert.
 *
 * Return:
 * The Goat Latin string.
 *
 * For example:
 *
 * goatLatin('I speak Goat Latin')
 * // => 'Imaa peaksmaaa oatGmaaaa atinLmaaaaa'
 *
 */

if(!window.goatLatin){
	var goatLatin=(function(){
		"use strict";

		var typeOf=function(value){
			return typeof value;
		};

		// check if it is string.
		var isString=function(value){
			return typeOf(value)==='string';
		};

		var match=function(str,reg){
			return str.match(reg);
		};

		var length=function(x){
			return x.length;
		};

		// check if the character is vowel.
		var isVowel=function(char){
			switch(char){
				case 'a':
				case 'e':
				case 'i':
				case 'o':
				case 'u':
				     return true;
				default:
				     return false;     
			}
		};

		// add 'a'.
		var add=function(index){
			var i=0,str='';
			while(i<=index){
				str+='a';
				i+=1;
			}
			return str;
		};

		var slice=function(str,start,end){
			return str.slice(start,end);
		};

		var process=function(array){
			for(var i=0,w;i<length(array);i+=1){
				w=array[i];
				if(!isVowel(w[0])){
					w=slice(w,1,length(w))+slice(w,0,1);
				}
				w+='ma';
				w+=add(i);
				array[i]=w;
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
				var words=match(string,/\b[a-z]+\b/ig);
				if(words){
					process(words);
					return words.join(' ');
				}
				error('MatchError','Can not match any words.');
			}
			error('ArgsError','Not string.');
		};
		
	})();
}