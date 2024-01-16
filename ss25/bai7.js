let arr = [1,3,5,7,9,2,4,6,8];
let find = +prompt("nhap so de tim arr_con :")
let sonArr =[];
sum = 0;
cont =0;

for(let i = 0 ; i < arr.length ; i++){
    sonArr.push(arr[i])
    sum+=arr[i]
    if(sum === find){
        cont=1;
        break;
    }
}
if(sum > find){
    while(sum>find && sonArr.length>0){
    sum -= son_Arr[0];
    sonArr.shift();
    }
    if(sum === find){
        cont=1;
    }
}
if(cont == 1){
    console.log(sonArr)

}
else{
    
    console.log(`không có mảng nào thỏa mãn`); 
}
