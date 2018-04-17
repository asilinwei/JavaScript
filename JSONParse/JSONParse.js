var JSONParse=(function(){
    var ch;
    var at;
    var text;
    var result;
    var parseValue=function(){
        switch(true){
            case ch==='{':
                 return object();
            case ch==='[':
                 return array();
            case /[0-9]/.test(ch):
                 return number();
            case ch==='\"':
                 return string();
            case ch==='t'||ch==='f':
                 return boolean();
            default:
                 throw new Error();                          
        }
    };
    var next=function(c){
        if(c&&c!==ch){
            throw new Error();
        }
        ch=text.charAt(at);
        at+=1;
        return ch;
    };
    var object=function(){
        var key;
        var obj={};
        next();
        while(ch){
            key='';
            next('\"');   // ch==='\"'
            while(ch!=='\"'){
                key+=ch;
                next();
            }
            next('\"');
            next(':');
            obj[key]=parseValue();
            if(ch==='}'){
                next('}');
                return obj;
            }
            next(',');
        }
    };
    var array=function(){
        var arr=[];
        while(ch!==']'){
            next();
            if(ch!==','){
                arr.push(parseValue());
            }
        }
        if(ch===']'){
            next(']');
            return arr;
        }    
        next(',');
    };
    var number=function(){
        var value='';
        var num;
        while(/[1-9]/.test(ch)){
            value+=ch;
            next();
        }
        num= +value;  
        return num;
    };
    var string=function(){
        var value='';
        next();
        while(ch!=='\"'){
            value+=ch;
            next();
        }
        if(ch==='\"'){
            next('\"');
            return value;
        }
    };
    var boolean=function(){
        var value='';
        switch(ch){
            case 't':
                 next('t');
                 next('r');
                 next('u');
                 next('e');
                 return true;
            case 'f':
                 next('f');
                 next('a');
                 next('l');
                 next('s');
                 next('e'); 
                 return false;     
        }
    };
    return function(sourse){
        at=0;
        text=sourse;
        next();
        result=parseValue();
        return result;
    };
})();
