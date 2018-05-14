if(!window.parseDecimal){
	var parseDecimal=(function(){
		var isString=function(value){
			return typeof value==='string';
		};
		var isNumber=function(value){
			return typeof value==='number'&&
			       isFinite(value);
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
				    };
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
				    };
				for(var i=0;i<length;i+=1){
					var ch=string.charAt(i);
					if(/[0-9.]/.test(ch)){
						if(string.includes('.')&&pointIndex(0,1)&&pointNumber(string,1,'.')){
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