
1.
function sayHello(name){
    return "Hello " + name;
}

//3.
function reverse(name){
    return name.split('').reverse().join('');
}

//4.
var Select =function(){
};
Select.prototype ={
    show :function(){
       return 'show';
    },
    hide :function(){
       return 'hide';
    },
    change :function(){
    	return 'change';
    },
    width :function(){
    	return 'width';
    }
}
Select.prototype.constructor=Select;

//5.类构造器的逻辑代码

(function(){
      var flag = false;
      Class=function(){};//这里定义Class为全局变量，是为了在任何地方都可以访问，比如在外面调用的时候
      Class.extend=function(parent, prop){
        if(typeof (parent) === 'object'){
          prop = parent;
          parent = null
        }
       //全程调用的构造函数
       function createConsturctor(){
          if(!flag){  //在实例化阶段去调用init函数
            if(parent){  //如果父类存在，就将当前对象的baseprototype指向父类的原型，便于后面在实例对象中调用父类
              this.baseprototype = parent.prototype;
            }
            this.init.apply(this, arguments);}
          
       }
       //若是需要从其他类扩展，则需要进行实例化实现继承
       if(parent){
           flag = true;
           createConsturctor.prototype = new parent();
           createConsturctor.prototype.constructor = createConsturctor;
           flag = false;  //类的实例化结束，标志位初始化
       }
       createConsturctor.extend = arguments.callee;
       //覆盖父类的同名函数
       for(var name in prop){
        if(prop.hasOwnProperty(name)){
          //如果存在父类，并且当前本身，父类原型中存在同名函数，就调用父类的同名函数prop[name],返回结果
          if(parent && typeof (prop[name]) ==='function' && typeof (createConsturctor.prototype[name]) === 'function'){
//重定义函数name -
//首先在函数上下文设置this.base指向父类原型中的同名函数
//然后调用函数prop[name]，返回函数结果
//注意：这里的自执行函数创建了一个上下文，这个上下文返回另一个函数，
//此函数中可以应用此上下文中的变量，这就是闭包（Closure）。

//这是JavaScript框架开发中常用的技巧。
              createConsturctor.prototype[name]=(function(name, fn){
                      return function(){
                        this.base = parent.prototype[name];
                        return fn.apply(this, arguments);
                      }
              })(name, prop[name]);
          }else{
            //将属性直接复制到类中，可以在类上直接调用
            //createConsturctor[name] = prop[name];
            //将属性复制到类的原型中，类的实例也会拥有这个属性
            createConsturctor.prototype[name] = prop[name];
          }
          
        }
    }
       return createConsturctor;//构造函数作为返回值
  }
  })();
