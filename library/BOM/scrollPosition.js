/**
 * 这个文件是有关文档和元素的滚动和位置
 * 你可以通过script标签引用
 * 仅供学习
 */


 // 共享构造函数
 function Share(){

 	// 获取滚动条滚动信息，该函数返回一个信息对象
 	this.getScrollOffset=function(){
    	return document.compatMode==="CSS1Compat"?{
    		// 标准模式
    		x:document.documentElement.scrollLeft,
    		y:document.documentEleemnt.scrollTop
    	}:{ // 怪异模式
    		x:document.body.scrollLeft,
    		y:document.body.scrollTop
    	};
 	};


 	// 获取视口规格，该函数返回一个规格对象
 	this.getViewportSize=function(){
 		return document.compatMode==="CSS1Compat"?{
 			// 标准模式
 			width:document.documentElement.clientWidth,   
 			height:document.documentElement.clientHeight
 		}:{ // 怪异模式
 			width:document.body.clientWidth,
 			height:document.body.clientHeight
 		};
 	};

 }

// 共享实例
 var share=new Share();

 // 冻结实例
 Object.freeze(share);