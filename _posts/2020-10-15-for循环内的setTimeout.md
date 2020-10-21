

```js
// 错误
for (var i = 0; i < 10; i++) {
    setInterval(function(){
        console.log(i);
    },interval);
}

/**
*setInterval是异步的，等到到达执行的时间的时候里面的i已经变成3了。需要通过作用域来确保变量的值是想要的值
*
*/

// 正确
for (var i = 0; i < 10; i++) {
    (function(i1){
        setInterval(function(){
            console.log(i1);
        },interval);
    })(i);//执行传入i, 匿名函数function的形参是i1,实参就是传入的i
}
```