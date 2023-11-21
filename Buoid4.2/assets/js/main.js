/* Bai Toan 1: Doi mau phan tu HTML tieu de 1 */

// B1: Truy cap toi phan tu theo ID
//Tra ve cho minh duy nhat 1 phan tu

let heading_1 = document.getElementById("heading-1");
// console.log(heading_1);

// B2: Doi mau phan tu. style cu phap
heading_1.style.color = "red";





/* Bai Toan 2: Doi mau phan HTML tieu de 2 */ 

// B1: Truy cap phan tu heading theo CLASS
//Tra ve 1 list danh sach cac tieu de co class heading-2 => 1 mang array

let heading_2 = document.getElementsByClassName("heading-2");
// console.log(heading_2);

// B2: Doi mau phan tu sang mau xanh
for(let i = 0; i < heading_2.length; i ++) {
    //console.log(i); //Chi so cua mang
    //console.log(heading_2[i]); //Lay tung pt trong mang

    heading_2[i].style.color = "blue";
    heading_2[i].style.fontSize = "40px";
}


/* Bai toan 3: Truy cap PT theo TAG*/

// B1: TRUY CAP PT theo TAG
// Tra ve cho minh d/s cac the => 1 mang array

let headingTag = document.getElementsByTagName("h3");
// console.log(headingTag);

//B2: Doi mau sang mau Tim
for(let item = 0; item < headingTag.length; item++){
    // console.log(item); //Chi so
    headingTag[item].style.color = 'violet';
}


/* Bai toan 4: su dung querySelector -- Nen nho */
let headeing_4 = document.querySelector("#heading-4"); //id
// console.log(headeing_4);

let heading_5 = document.querySelectorAll(".heading-5"); //class, tag
console.log(heading_5);