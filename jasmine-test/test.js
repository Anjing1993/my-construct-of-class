// 1.
xdescribe("A suite of basic functions", function() {
    var name;

    it("sayHello", function() {
        name = "Conan";
        var exp = "Hello Conan";
        expect(exp).toEqual(sayHello(name));
    });
});

2.
xdescribe('JavaScript addition operator',function(){ 
	var a = 1;
    //建立it块
    it('adds two numbers together',function(){ 
        //测试1是否等于1
        expect(a).toEqual(1); 
    }); 
});



//3.
xit("reverse word",function(){
    expect("DCBA").toEqual(reverse("ABCD"));
    expect('wangjing').toEqual(reverse('gnijgnaw'));
});

//4.
//那么我会针对这个类写下如下单元测试代码：
xdescribe('test frame',function(){
    var select =new Select();
    it('select.show()',function(){ 
         expect(select.show()).toEqual('show'); 
    });
    it('select.hide()',function(){ 
         expect(select.hide()).toEqual('hide'); 
    });   
});


//5.对断言表达式的使用
xdescribe("A suite of jasmine's function", function() {
    describe("Expectations",function(){
        it("Expectations",function(){
            expect("AAA").toEqual("AAA");
            expect(52.78).toMatch(/\d*.\d\d/);
            expect(null).toBeNull();
            expect("ABCD").toContain("B");
            expect(52,78).toBeLessThan(99);
            expect(52.78).toBeGreaterThan(18);

            var x = true;
            var y;
            expect(x).toBe(true);
            expect(x).toBeDefined();
            expect(y).toBeUndefined();
            expect(x).toBeTruthy();
            expect(!x).toBeFalsy();

            var fun = function() { return a + 1;};
            expect(fun).toThrow();
        });
    });
});

//7.对开始前和使用后的变量赋值
 xdescribe("Setup and Teardown",function(){
        var foo;
        beforeEach(function() {
            foo = 0;
            foo += 1;
        });
        afterEach(function() {
            foo = 0;
        });

        it("is just a function, so it can contain any code", function() {
            expect(foo).toEqual(1);
        });

        it("can have more than one expectation", function() {
            expect(foo).toEqual(1);
            expect(true).toEqual(true);
        });
    });

//8.对忽略suite的声明
   xdescribe("Disabling Specs and Suites", function() {
        it("Disabling Specs and Suites",function(){
            expect("AAA").toEqual("AAA");
        });
    });
 //9.对异步程序的单元测试
   xdescribe("Asynchronous Support",function(){
        var value, flag;
        it("Asynchronous Support", function() {
            runs(function() {
                flag = false;
                value = 0;
                setTimeout(function() {
                    flag = true;
                }, 500);
            });
            waitsFor(function() {
                value++;
                return flag;
            }, "The Value should be incremented", 750);

            runs(function() {
                expect(value).toBeGreaterThan(0);
            });
        });
    });

  //9.类构造器的单元测试代码
  describe('the construction of calss',function(){
    //1.构造类测试
	    //（1）.无父类
	    it('the init of Class ',function(){
	  		var Person = Class.extend({
	 		init : function(name){
	 			this.name = name;
	 		},
	 		getName : function(){
	 			return this.name;
	 		}
	 	});
	  	var p1 = new Person('wangjing');
	  	var p2 = new Person('heihei')

	  	expect('wangjing').toBe(p1.getName());
	  	expect(p1.name).toBe('wangjing');
	  	expect('heihei').toBe(p2.getName());
	  	expect(p2.name).toBe('heihei');
	    });
	    //（2）.有父类
		it('the class of constructor with parent',function(){
		    	var Person = Class.extend({
		 		init : function(name){
		 			this.name = name;
		 		},
		 		getName : function(){
		 			return this.name;
		 		}
		 	});
		    var Child = Class.extend(Person,{
	 		init:function(name,id){
	 				  this.base(name);
	 		          this.id = id;
	 		      
	 		  },
	 		getId:function(){
	 				  return this.id;
	 				
	 			}
	 	});
	        var c1 = new Child('roy','123456');
	        expect(c1.name).toBe('roy');
	        expect(c1.getName()).toEqual('roy');
	        expect(c1.id).toBe('123456');
	        expect(c1.getId()).toEqual('123456');
	           
		});
		//（3）.
	//2.继承测试
		//（1）.单继承测试
		it('single innerit',function(){
		    	var Person = Class.extend({
		 		init : function(name){
		 			this.name = name;
		 		},
		 		getName : function(){
		 			return this.name;
		 		}
		 	});
		    var Child = Class.extend(Person,{
	 		init:function(name,id){
	 				  this.base(name);
	 		          this.id = id;
	 		      
	 		  },
	 		getId:function(){
	 				  return this.id;
	 				
	 			},
	 		getName: function(){
	 			return this.base();
	 		}
	 	});
	        var c1 = new Child('roy','123456');
	        expect(c1.name).toBe('roy');
	        expect(c1.getName()).toEqual('roy');
	        expect(c1.id).toBe('123456');
	        expect(c1.getId()).toEqual('123456');
	           
		});
		//（2）.多继承测试
		it('many inherit',function(){
			var Person1 = Class.extend({
		 		init : function(name){
		 			this.name = name;
		 		},
		 		getName : function(){
		 			return this.name;
		 		}
		 	});
		 	var Person2 = Class.extend({
		 		init : function(text){
		 			this.text = text;
		 		},
		 		getText :function(){
		 			return this.text;
		 		}
		 	});
		var Child = Class.extend(Person1,{
	 		init : function(name){
	 				  this.base(name);
	 			},
	 		getName :function(){
	 			return this.base();
	 		}
	 	});
	 	var p= new Person1('wj');
	 	console.log(p);
	 	Child = Class.extend(Person2,{
	 	     init:function(name, id, text){
	 	     	p.init.call(this, name);
	 	     	this.id = id;
	 	     	this.base(text);
	 	     	},
	 	     getText:function(){
	 	     		return this.base();
	 	     	},
	 	     getId : function(){
	 	     	    return this.id;
	 	     },
	 	     getName : function(){
	 	     	return p.getName.call(this);
	 	     }
	 	     });
	 	      var p1 = new Child('wj','04123168','are you ok ?');
	 	     console.log(p1);
	 	      expect(p1.name).toBe('wj');
	 	      expect(p1.id).toBe('04123168');
	 	      expect(p1.text).toBe('are you ok ?');
	 	      expect(p1.getName()).toBe('wj');
	 	      expect(p1.getId()).toBe('04123168');
	 	      expect(p1.getText()).toBe('are you ok ?');

		});
		//（3）.链式继承
		it('the chian of inherit',function(){
             var Animal = Class.extend({
             	init : function(name){
                     this.name = name;
             	},
             	getName : function(){
             		return this.name;
             	}
             });
             var Cat = Class.extend(Animal,{
             	init: function(name, perform){
                      this.base(name);
                      this.perform = perform;
             	},
             	getPerform : function(){
             		  return this.perform;
             	}
             });
             var Smailcat = Class.extend(Cat,{
             	init :function(name, perform, eat){
             		this.base(name, perform);
             		this.eat = eat;
             	},
             	getEat :function(){
             		return this.eat;
             	}
             });
             var a1 = new Smailcat('xiaohei','paizhao', 'fish')
             expect(a1.getName()).toBe('xiaohei');
             expect(a1.getPerform()).toBe('paizhao');
             expect(a1.getEat()).toBe('fish');

		});
		
		
});
 