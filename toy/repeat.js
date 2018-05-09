/*
  @linweinb
  2018-05-08

  This is a method like the native String.prototype.repeat.

  Syntax:

  'abc'.$_repeat(countNumber)
  


  Argument:

  countNumber
  The positive integer of repeat.
*/  


if(!String.prototype.$_repeat){

	String.prototype.$_repeat=(function(){

		// check if is it a number.
		var isNumber=function(value){
			return typeof value==='number'&&isFinite(value);
		};

		// check if is it a positive integer.
		var isPositiveInteger=function(value){
			return isNumber(value)&&value%1===0&&value>=0;
		};

		// throw the error.
		var error=function(){
			throw {
				name:'TypeError',
				message:'The argument is not a positive integer.'
			};
		};

		// the function which is returned.
		return function(count){
			if(isNumber(count)&&isPositiveInteger(count)){
				var array=Array.from(this);
				for(var i=0,len=array.length,j;i<count-1;i+=1){
					for(j=0;j<len;j+=1){
						array.push(array[j]);
					}
				}
			} else{
				error();
			}
			return array.join('');
		};
	})();

}
