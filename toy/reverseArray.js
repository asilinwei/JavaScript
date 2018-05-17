/*
  2018-05-17
  @linweinb

  This is a method like the native Array.prototype.reserve.
  It reverses the elements of array. 

  Syntax:
  array.$_reverse()

  For example:
  var array=[1,2,3];
  console.log(array.$_reverse());  // => [3,2,1]

*/  



if(!Array.prototype.$_reverse){
	Array.prototype.$_reverse=(function(){

		// check if it is a number.
		var isNumber=function(value){
			return typeof value==='number'&&isFinite(value);
		};

		// check if it is an array.
		var isArray=function(array){
			var toString=Object.prototype.toString;
			return toString.apply(array)==='[object Array]';
		};

		// exchange two elements of the array.
		var exchange=function(array,index1,index2){
			if(isArray(array)&&isNumber(index1)&&isNumber(index2)){
				var temp;
				temp=array[index2];
				array[index2]=array[index1];
				array[index1]=temp;
			}
		};
		return function(){
			if(this.length){
				var count=(this.length+1)/2;
				for(var i=0,j=this.length-1;i<count-1;i+=1,j-=1){
					exchange(this,i,j);
				}
			}
			return this;
		};
	})();
}
