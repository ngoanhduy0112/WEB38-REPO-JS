// // KHAI BAO FUNCTION
// function hello() {
//     console.log('hello mng')
// }
// // SỬ DỤNG
// hello();





// PHÂN BIỆT FUNCTION GIỮA THAM SỐ & ĐỐI SỐ
// function hi(name) {   /*PARAMETER: (tham số)*/
    
//     console.log(`hi ${name}. mình lớp web38 `);
// }
// // THỰC THI
// hi("moi nguoi");   /*ARGUMENT: (đối số)*/




// FUNCTION TÍNH TỔNG
// function sum(a, b, c) {
//     // let a =10 ;
//     // let b =5 ;

//     let total =a +b +c;
//     return total;
//    // return console.log(a+b+c);  /*RETURN: TRẢ VỀ 1 GIÁ TRỊ CỦA FUNCTION */
// }
// console.log(sum(3 , 2 , 1));
// // sum(10,5,7);




// // FUNCTION KHÔNG CÓ THAM SỐ
// function sayHello(){
//     console.log('funtion khong co tham so')
// }
// sayHello();


// // FUNCTION CÓ THAM SỐ, KHÔNG CÓ GIÁ TRỊ TRẢ VỀ(THIẾU RETURN)
// function sayHello_1(name){
//     console.log(`Hello ${name}`);
// }
// sayHello_1("WEB38");



// // DẤU LỚN HƠN: >
// // DẤU LỚN HƠN HOẶC BẰNG: >=
// // DẤU BÉ HƠN HOẶC BẰNG: <=
// // DẤU BÉ HƠN: <
// // DẤU BẰNG: ==
// // CÂU LỆNH IF(NẾU)
// let money =30 ;
// if(money==29){
//     console.log("ĐỦ TIỀN MUA MÁY MỚI")
// }




// // CÂU LỆNH IF ELSE
// let hour = 5;
// if(hour<12){
//     console.log("chào buổi sáng");
// }else{
//     console.log("chào buổi chiều");
// }




// // IF - ELSE IF - ELSE: CÂU LỆNH ĐIỀU KIỆN
// let hour = 19;
// if(hour<12){
//     console.log('chào buổi sáng');
// }else if(hour>=12 && hour<=18){
//     console.log('chào buổi chiều');
// }else{
//     console.log('chào buổi tối');
// }





// //  CÂU LỆNH SWITCH-CASE: CÂU LỆNH ĐIỀU KIỆN
// let money = 12000;
// switch(money) {
//     case 10000: {
//         console.log('cà phê đá');
//         break; /*THOÁT RA NGOÀI*/
//     }
//     case 12000: {
//         console.log('cà phê sữa');
//         break;
//     }
//     case 8000: {
//         console.log('sting dâu');
//         break;
//     }
//     case 2000: {
//         console.log('trà đá');
//         break;
//     }
//     default: {
//         console.log('món khác');
//         break;
//     }
// }





// // FIRST CLASS FUNCTION

// // HÀM TÍNH TỔNG 2 SỐ
// let count = function(a,b){
//     return a+b;
// } 
// // console.log(count(100,4));

// // HÀM TÍNH TỔNG 3 SỐ
// function isSum(count,c){
//     return count +c;
// }
// console.log(isSum(count(3,4),6));


// ES6: CÚ PHÁP VIẾT FUNCTION
// KHAI BÁO 1 FUNCTION HIỂN THỊ LỜI CHÀO
let sayHello = () => {
    console.log("chào mng");
}
sayHello();

// KHAI BÁO 1 FUNCTION TÍNH TỔNG
let sum = (a,b,c) => {
    return a+b+c;
}
console.log(sum(10,20,35));




























































