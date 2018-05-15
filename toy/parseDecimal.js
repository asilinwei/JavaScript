if(!window.parseDecimal){
	var parseDecimal=(function(){
		"use strict";
		var isString=function(value){
			return typeof value==='string';
		};
		var isNumber=function(value){
			return typeof value==='number'&&
			       isFinite(value);
		};
		var isBoolean=function(value){
			return typeof value==='boolean';
		};
		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};
		return function(string){
			if(isString(string)){
				var str='',
				    length=string.length,
				    pointIndex=function(index1,index2){
				    	if(isNumber(index1)&&isNumber(index2)){
				    		return string.indexOf('.')===index1||
				    	           string.indexOf('.')===index2;
				    	} else{
				    		error('TypeError','The argument must be a number.');
				    	}
				    },
				    pointNumber=function(string,num,ch){
				    	if(isString(string)&&isNumber(num)){
				    		var length=string.length,
				    		    count=0;
				    		for(var i=0;i<length;i+=1){
				    			var char=string.charAt(i);
				    			if(char===ch){
				    				count+=1;
				    			}
				    		}
				    	}
				    	return count===num;
				    },
				    isFloatFormat=function(bool1,bool2,bool3){
				    	if(isBoolean(bool1)&&isBoolean(bool2)&&isBoolean(bool3)){
				    		return bool1&&bool2&&bool3;
				    	}
				    };
				for(var i=0;i<length;i+=1){
					var ch=string.charAt(i);
					if(/[0-9.]/.test(ch)){
						if(isFloatFormat(string.includes('.'),pointIndex(0,1),pointNumber(string,1,'.'))){
							str+=ch;
						} else if(!string.includes('.')){
							str+=ch;
						} else{
							error('FormatError','Bad Number.');
						}
					} else{
						break;
					}
				}    
			} else{
				error('TypeError','The argument must be a string');
			}
			return +str;
		};
	})();
}