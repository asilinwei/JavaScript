/*
  @linweinb
  2018-05-11

  This is a method like the native String.prototype.charAt.


  Syntax:

  str.$_charAt(index);

  Arguments:

  index:
  An integer between 0 and 1-less-than the length of the string. 
  If no index is provided, the default is 0, so the first character 
  in the string is returned.

  return Value:
  A string representing the character at the specified index. 

  For example:

  var str='linwei';
  console.log(str.$_charAt(1));
  // => i

  console.log(str.$_charAt());
  // => l

  console.log(str.$_charAt(100));
  // throw the error.

*/  



if(!String.prototype.$_charAt){
	String.prototype.$_charAt=(function(){
		"use strict";

        // check if it is a number.
		var isNumber=function(value){
			return typeof value==='number'&&isFinite(value);
		};

        // check if it is an integer.
		var isInteger=function(value){
			return isNumber(value)&&value%1===0;
		};

        // check if it is a string.
		var isString=function(value){
			return typeof value==='string';
		};

		// check if it is overflow.
		var isOverflow=function(string,number){
			return !(isNumber(number)&&
			       isString(string)&&
			       number>=0&&
			       number<string.length);
		};

        // throw the error.
		var error=function(type,message){
			if(isString(type)&&isString(message)){
				throw {
					type:type,
					message:message
				};
			} else{
				error('TypeError','The argument must be a string');
			}
		};


		return function(number){
			var str=this.valueOf();     
			number=number||0;         
			if(isNumber(number)&&isString(str)){
				if(!isOverflow(str,number)&&isInteger(number)){
					for(var i=0;i<this.length;i+=1){
						if(number===i){
							return this[i];
						}
					}
				} else{
					error('RangeError','The range is overflow');
				}
			} else{
				error('TypeError','The argument must be a number.');
			}
		};
	})();
}

