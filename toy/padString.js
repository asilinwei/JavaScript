/* 
   2018-05-07
   @linweinb

   This is a method like the native String.prototype.padEnd.

   Syntax:
   str.$_pad(padString,targetLength)

   Arguments:

   padString
   The string to pad the current string with. 
   If this string is too long to stay within the target length, it will be truncated and the left-most part will be applied. 

   targetLength
   The length of the resulting string once the current string has been padded. If the value is lower than the current string's length, 
   the current string will be returned as is.

*/



String.prototype.$_pad=(function(){

	// check if is it a string.
	var isString=function(string){
		return typeof string==='string';
	};

	// check if is it a number.
	var isNumber=function(value){
		return typeof value==='number'&&isFinite(value);
	};

	// throw the error.
	var error=function(){
		throw {
			name:'TypeError',
			message:'string is not a string or length is not a number.'
		};
	};


	return function(string,length){

		if(isString(string)&&isNumber(length)){

			var array=Array.from(this);      
			var difference=length-this.length;   // The difference between the specified length and the length of the current string.

			// travel the specified string.
			var loop=function(string){
				for(var i=0;i<string.length&&j<difference;i+=1,j+=1){
					array.push(string.charAt(i));
				}
			};

			var j=0;
			while(j<difference){
				loop(string);
			}
		} else{
			error();
		}
		return array.join('');
	};
})();