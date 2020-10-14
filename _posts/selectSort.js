let step = 0

function selectSort(arr) {
    let min
    for (let outer = 0; outer < arr.length - 2; ++outer) {
        min = outer
        for (let inner = outer + 1; inner <= arr.length - 1; ++inner) {
            arr[inner] < arr[min] && (min = inner)
            swap(arr,outer,min)
        }
    }
    // console.log(arr.toString());
    return arr.toString()
}


function swap(arr,index1,index2) {
    const backup = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = backup
    step++

    // console.log(arr.toString())
    // console.log();
}


function benchMark(fun) {
    if(typeof fun !== 'function') {
        console.warn('benchMark should receive a function');
    }
    console.time('test')
    let res = fun()
    console.timeEnd('test')
    console.log('一共执行',step,'步');
    console.log('排序结果：',res);
   

}

benchMark(()=>selectSort([12,123,435,765,324,5,76,32]))