// console.log("Hello word");
// //tạo ra 1 danh sách các học sinh trong lớp

// let student1 = "học sinh a";
// let student2 = "học sinh b";
// let student3 = "học sinh c";

// let studentList= new Array(student1,student2,student3);

// let numberList = [ 10,20,30,40];
// let randomList=[true,false ,10 ,20 ,"Hello Word",[]];

// console.log(numberList);

// console.log(studentList);

// console.log(randomList);

let numbers=[10,20,30,40,50];
//Index      0   1  2  3  4 (length/size - 1)

//Thuộc tính length
numbers.length;
console.log("Độ dài (length ) của mảng numbers=",numbers.length);//5

console.log("numbers[2]=", numbers[2]); //30
console.log("numbers[0]=", numbers[0]) //10
console.log("numbers[4]=", numbers[4]) //50
console.log("numbers[4]",numbers[numbers.length-1]);//50

// for(let i = 0; i<numbers.length;i++){
//     //i----->0 - 4
//     //numbers[i] ---> 10 - 50
//     console.log(`number[${i}]=`,numbers [i]);
// }

// for(let number of numbers){
//     console.log("Từng phần tử",number);
// }

// for (let index in numbers){
//     //index --0--length -1
//     console.log(`numbers[${index}]=`,numbers[index]);
// }

let students = [
    "học sinh 1",
    "học sinh 2",
    "học sinh 3",
    
];
console.log("Danh sách SV hiện tại:",students);
//Create

//1.Thêm đầu (unshift)
// students.unshift("học sinh 4");

// console.log("Danh sách sau khi thêm vào đầu",students);

// //2.Thêm cuối(push)
// students.push("học sinh 5");
// console.log("Danh sách SV sau khi thêm cuối:",students);

// //3.Thêm vào vị trí bất kì(splice)
// students.splice(2,0,"học sinh n");
// console.log("Danh sách SV sau khi thêm vị trí 2:",students);


// //update

// console.log("Danh sách students thời điểm hiện tại là:",students);

// // students[2] = "học sinh 6";
// students.splice(2,1,"học sinh 6");
// console.log("Danh sách students sau khi được cập nhật",students);

//Delete

//1.Xóa đâu (shift)
students.shift();
console.log("Danh sách sau khi xóa ỏ đầu",students);

//2.Xóa cuối(pop)
students.pop();
console.log("Danh sách sau khi xóa ở cuối",students);

//3.Xóa vị trí bât kì(splice)
students.splice(1,1);
console.log("Danh sách sau khi xóa ở phần tử index=1",students);
