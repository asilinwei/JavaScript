/**
 * 2018-08-13
 * @LinWei
 *
 * repeatDNA:
 * All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, 
 * for example: "ACGAATTCCG". Find all the 10-letter-long sequences(substrings)
 * that occur more than once in a DNA molecule.
 *
 * Syntax:
 * repeatDNA(dna)
 *
 * Arguments:
 * dna(string): The DNA sequence.
 *
 * Return:
 * The array of 10-letter-long substring.
 *
 * For example:
 *
 * repeatDNA('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT')
 * // => ['AAAAACCCCC', 'CCCCCAAAAA']
 *
 */

if(!window.repeatDNA){
	var repeatDNA=(function(){
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

		var find=function(array,dna,str,index){
			for(var i=index+1;i<length(dna)-9;i+=1){
				if(str===dna.slice(i,i+10)){
					array.push(str);
					return;
				}
			}
		};

		var push=function(array,dna){
			for(var i=0,str;i<length(dna)-10;i+=1){
				str=dna.slice(i,i+10);
				find(array,dna,str,i);
			}
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(dna){
			if(isString(dna)){
				var result=[];
				push(result,dna);
				return result;
			}
			error('ArgsError','Not string.');
		};
		
	})();
}