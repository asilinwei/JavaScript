if(!window.trimAll){
	var trimAll=(function(){
		"use strict";
		var CustomError=function(message,type){
			this.type=type;
			this.message=message;
		};
		var isString=function(value){
			return typeof value==='string';
		};
		var getRidOf=function(array,store){
			for(var i=0;i<array.length;i+=1){
				if(array[i]<=' '){
					continue;
				}
				store.push(array[i]);
			}
		};
		return function(string){
			if(isString(string)){
				var array=Array.from(string);
				var result=[];
				getRidOf(array,result);
				return result.join('');
			} else{
				throw new CustomError('ArgumentsError','Not string.');
			}
		};
	})();
}