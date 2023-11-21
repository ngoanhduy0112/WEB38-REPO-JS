// // CÚ PHÁP KHAI BÁO 1 OBJECT
// let obj = {
//     name: 'Nguyễn Văn A',
//     age: '18',
//     email: 'alo@gmail.com'
// };
// console.log(obj);

// // // TRUY CẬP VÀO 1 OBJECT
// // console.log(obj.name);
// // console.log(obj.age);
// // console.log(obj.email);

// // CẬP NHẬT OBJECT
// obj.name = 25 ;
// console.log(obj);

// // THÊM GIÁ TRỊ VÀO OBJ
// obj.address= 'Hà Nội';
// console.log(obj);

// // XÓA GIÁ TRỊ TRONG OBJ
// delete obj.email;





// // PHƯƠNG THỨC LÀM VIỆC HỮU ÍCH VỚI ARRAY
// // PHƯƠNG THỨC MAP
// let arr = [1,2,3,4,5,6];
// let sum =0;
// arr.map((value,index) =>{
//     sum+= value;  
// }
// )
// console.log(arr);
// console.log(sum);




// // // PHƯƠNG THỨC FILTER
// // // CÁCH TRUYỀN THỐNG
// // /*
// //     input: 1 mảng gồm: [1,2,3,4,5,6]
// //     output: hiện thị danh sách mảng chứa toàn số lẻ
// // */
// let arr_1 = [2,3,4,5,6,7];
// // let result = [];
// // arr_1.forEach((item,index)=>{
// //     // console.log(item);
// //     if(item % 2 == 1){
// //         // console.log(item);
// //         result.push(item);
// //     }
// // })
// // console.log(result);
// SỬ DỤNG FILTER
// let count= arr_1.filter((e)=>{
//     // console.log(e);
//     return e % 2 == 1;
// })
// console.log(count);



// // CÁCH REDUCE
// let arr = [10,5,6,7,22];
// let result= arr.reduce((sum,element)=>{
//     // console.log(sum);
//     // console.log(element);
//     let total = sum + element;
//     return total;
// },0)
// console.log(result);






// PHƯƠNG THỨC FIND
/*
    input: mảng [1,2,3,4,5,6,7]
    output: tìm ra phần tử đầu tiên thỏa mãn điều kiện
*/
let arr = [1,2,3,4,5,6,7];
let result = arr.findIndex((item)=>{
    console.log(item);
    return item > 5;
})
console.log(result);






















































































