/**
 * 这个文件是有关文档和元素的滚动和位置
 * 你可以通过script标签引用
 * 仅供学习
 */


 ;(function(){
    // 共享构造函数
    function Share(){

        // 获取滚动条滚动信息，该函数返回一个信息对象
        this.getScrollOffset=function(){
            return document.compatMode==="CSS1Compat"?{
                // 标准模式
                x:document.documentElement.scrollLeft,
                y:document.documentElement.scrollTop
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


        // 获取元素文档坐标，该函数返回一个坐标对象
        this.getDocumentPosition=function(element){
            if(element&&element.nodeType===1){     // 判断节点类型
                // 初始化文档坐标
                var offsetX=0,
                    offsetY=0;
                while(element){
                    if(element.offsetParent!==null||element===document.body){
                        offsetX+=element.offsetLeft;       // 累加
                        offsetY+=element.offsetTop;
                        element=element.offsetParent;      // 将element修改为最近的定位元素     
                    } else{
                        throw new Error("The display of element.offsetParent is none.");
                    }
                }
                return {                 // 返回文档坐标对象
                    x:offsetX,
                    y:offsetY
                };
            } else{
                return null;             // 如果节点不是元素，返回null
            }
        };

    }

    // 共享实例
    var share=new Share();

    // 冻结实例
    Object.freeze(share);

    Object.defineProperties(HTMLElement.prototype,{

        // 将元素滚动到视口可见的地方，类似元素的scrollIntoView()方法
        scrollElementIntoView:{
            value:function(bool){
                var offsetX,       // 滚动条横向文档坐标
                    offsetY;       // 滚动条纵向文档坐标

                // 如果默认情况下或传入参数为true的话使元素出现在视口左上角    
                if(bool===undefined||bool===true){
                    offsetX=share.getScrollOffset().x+this.getBoundingClientRect().left;  // 使元素视口横向坐标转为文档坐标
                    offsetY=share.getScrollOffset().y+this.getBoundingClientRect().top;   // 使元素视口纵向坐标转为文档坐标
                    window.scroll(offsetX,offsetY);   // 滚动到指定文档坐标
                } else if(bool===false){      // 如果传入参数为false的话使元素出现在视口右下角
                    offsetX=share.getScrollOffset().x+this.getBoundingClientRect().right-share.getViewportSize().width;
                    offsetY=share.getScrollOffset().y+this.getBoundingClientRect().bottom-share.getViewportSize().height;
                    window.scroll(offsetX,offsetY);   // 滚动到指定文档坐标
                } else{
                    throw new Error("parameter error:parameter must be boolean value.");
                }
            },

            // 不可修改
            writable:false,

            // 不可重新配置
            configurable:false,

            // 可以枚举
            enumerable:true
        }
    });
 })();