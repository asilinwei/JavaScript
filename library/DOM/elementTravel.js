/**
 * 这个文件是关于元素遍历的库。
 * 你能通过<script>标签引用它。
 * 你必须在使用它之前先引用它。
 * 仅供个人学习使用。
 */


// 所有方法都不能被修改。

// 定义在HTMLElement.prototype上的方法。

Object.defineProperties(HTMLElement.prototype,{

    // 获取元素祖先元素。

	// 你能给这个方法传递向上第几层祖先元素的层数。

	getElementAncestor:{

		value:function(floor){
			if(this.nodeType===1){
				if(floor>0){
					var element=this;
					while(floor>0&&element!==null){
						element=element.parentNode;
						floor--;
					}
					if(element!==null){
						return element;
					} else{
						return document;
					}
				} else if(floor===0){
					return this;
				} else if(floor<0){
					throw new Error("You cannot get the child element.");
				} else{
					throw new Error("The parameter is not a number.");
				}
			} else{
				return null;
			}
		},

        // 无法被更改

		writable:false,

        // 无法配置

		configurable:false,

        // 能够被枚举

		enumerable:true

	},

	// 获取兄弟元素。

	// 你能够给这个方法传递从当前元素开始的第几个兄弟元素的数字。 

	getElementSibling:{

		value:function(number){
			if(this.nodeType===1){
				var parentElement=this.parentNode,      // 获取父元素
                    element=this;
                switch(true){

                	// 如果number为正，返回后续的第number个兄弟元素。
                	case number>0:
                	     while(number>0&&element!==null){
                             element=element.nextElementSibling;
                             number--;
                	     }
                	     return element!==null?element:parentElement.lastElementChild;   // 如果结果元素不是null则返回结果元素，否则返回最后的兄弟元素。
                    
                    // 如果number为0，返回元素本身。
                	case number===0:
                	     return element;

                	// 如果number为负，返回前面的第number个兄弟元素。
                	case number<0:
                	     while(number<0&&element!==null){
                	     	element=element.previousElementSibling;
                	     	number++;
                	     }     
                	     return element!==null?element:parentElement.firstElementChild;  // 如果结果元素不是null则返回结果元素，否则返回第一个兄弟元素。
                	default:
                	     throw new Error("You must pass a number to the method.");     
                }    
			} else{
				throw new Error("Not element.");
			}
		},

		// 无法被更改

		writable:false,

		// 无法配置

		configurable:false,

		// 能够被枚举

		enumerable:true
		
	},

	// 获取元素后代所有文本节点并拼接

	getElementTextContent:{

		value:function(){

			var text=[];      // 收集所有文本的数组
            
            // 递归函数
            function recurrenceHandler(e){
            	var childNodes=e.childNodes;    // 获取元素所有子节点

            	// 遍历
            	for(var i=0,len=childNodes.length;i<len;i+=1){
                	
                	// 筛选
                    switch(childNodes[i].nodeType){

                    	// 如果是元素节点，则递归遍历元素子节点
                    	case 1:
                             recurrenceHandler(childNodes[i]);
                             break;

                        // 如果是文本节点，则推入数组text
                        case 3:
                             text.push(childNodes[i].nodeValue);
                             break;

                    }

            	}

            }

            recurrenceHandler(this);
            return text.join("").match(/\S+/gi).join("");  // 返回拼接字符串
		},

		// 无法更改

		writable:false,

		// 无法配置

		configurable:false,

		// 能够被枚举

		enumerable:true
		
	},

	// 获取指定元素后代中指定名字的所有元素并返回一个数组，类似getElementsByTagName(tagName)方法

	getChildElementsByTagName:{

		value:function(tagName){
			var childElements=[];     // 定义存放指定名字的后代元素的数组

			// 递归函数
			function recurrenceHandler(e){
				for(var i=0,len=e.childNodes.length;i<len;i+=1){

					// 判断是否为元素节点
					if(e.childNodes[i].nodeType===1){

						// 如果是指定元素则推入数组并递归遍历后代节点
                    	if(e.childNodes[i].nodeName.toLowerCase()===tagName){
                    		childElements.push(e.childNodes[i]);
                    		recurrenceHandler(e.childNodes[i]);     

                    	// 如果不是则递归遍历后代节点	
                    	} else{
                    		recurrenceHandler(e.childNodes[i]);        
                    	}
					} else{
						continue;
					}
				}
			}

			// 检查传入的参数
			if(this.nodeType!==1||typeof tagName!=="string"){
				throw new Error("parameter error.");
			} else{
                recurrenceHandler(this);
			}
			return childElements;
		},

		// 无法更改

		writable:false,

		// 无法配置

		configurable:false,

		// 能够被枚举

		enumerable:true
	}
});