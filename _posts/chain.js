
    // var user = function(name, age) {
    //   this.name = name;
    //   this.age = age;
    //   this.getAge = function() {
    //     console.log(this.age);
    //     return this;
    //   };
    //   this.getName = function() {
    //     console.log(this.name);
    //     return this;
    //   };
    // };
    // var user1 = new user("zjf", 22);
    // user1.getName().getAge();


    const A = {
        bar:function(){
            console.log('bar');
            return this;
        },
        foo:function(){
            console.log('foo');
            return this;
        }
    }

A.foo().bar()