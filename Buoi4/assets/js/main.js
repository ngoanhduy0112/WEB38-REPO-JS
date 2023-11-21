
// Phuong thuc SOME
// let arr = [1,2,3,4,5];

// let result = arr.some((value)=>{
//     return value > 4
// })

// console.log(result);

// Phuong thuc every
// let arr_1 = [10,22,23,24,25];

// let result_1 = arr_1.every((item)=>{ //item chinh la cac phan tu cua mang
//     console.log(item);

//     return item > 10;
// })
// console.log(result_1);


// Phuong Thuc cua object
let person = {
    name: "Nguyen Van A",
    age: 20,
    email: "nguyenvana@gmail.com",
    address: "Ha Noi"
}

// Truy cap phan tu object
// console.log(person.name);

// Lay danh sach cac key cua Object
// Object.keys(): Cu phap lay key cua Object

let keyArr = Object.keys(person);
// console.log(keyArr);

// Lay danh sach value cua Object
// Object.values: Cu phap lay danh sach value cua Object
let valueArr = Object.values(person);
// console.log(valueArr);


// C1: Lay tung phan tu cua key trong object
keyArr.forEach((value, index)=>{
    // console.log(value);
})

//c2: for .. in
for(let key in person){
    console.log(key);
    // Hien thi ra value cua person
    console.log(person[key]);
}