/**
 * This is the function library for adding sort public method for native array of JavaScript.
 * You can introduction of this library through <script> tag.
 * You must introduce this file before you use it.
 * Also,this library is only for personal learning. 
 */



 // Bubble sort.The result is from small to large.

Array.prototype.bubbleSort=function(){
	var temp;
	function exchangeNumber(a,b){
		temp=this[a];
		this[a]=this[b];
		this[b]=temp;
	}
	for(var i=0,len1=this.length;i<len1;i+=1){
		for(var j=0,len2=this.length-1;j<len2;j+=1){
			if(this[j]>this[j+1]){
				exchangeNumber.apply(this,[j,j+1]);
			}
		}
	}
};
