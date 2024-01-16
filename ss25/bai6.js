var numbers=[-1,-2,-3,-4,-5,-6,-7,-8,0,1,2,3,4,5,6,7,8];
var arr = [];
for(var i = 0;i<numbers.length;i++){
    if(numbers[i]<0){
        arr.push(numbers[i]);
    }else {
        arr.unshift(numbers[i]);
    }
}
console.log(arr);
