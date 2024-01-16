var arr1 = [1, 2, 3, 4, 5] ;
var size1 =0;
var arr2=[-3, -1, 0, 1, 5] ;
var size2 =0;
var arr3=[1, 5, 6, 7] ;
var size3 =0;
var i = 0;
var j = 0;
var k = 0 ;
while (i < arr1.length && j < arr2.length && k < arr3.length) {
    if (arr1[i] == arr2[j] && arr2[j] == arr3[k]) {
        i++;
        j++;
        k++;
    } else if (arr1[i] < arr2[j]) {
        i++;
    } else if (arr2[j] < arr3[k]) {
        j++;
    } else {
        k++;
    }
}
console.log(arr1,size1,arr2,size2,arr3,size3);

