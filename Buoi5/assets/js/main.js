// // TRYT CAP VAO PHAN TU
// let wrapBox = document.querySelectorAll('.wrap-box');
// console.log(wrapBox);

// // Node.parentNode: truy cap gian tiep
// let heading_1 = document.querySelectorAll('.heading-1');
// console.log(heading_1);

// let parentHeading = heading_1[0].parentNode;
// console.log(parentHeading);



// /* B1:Truy cap phan tu
//    B2: Lay noi dung ra
//  */
// let heading_2 = document.querySelectorAll('.heading-2');
// console.log(heading_2);
// // console.log(heading_2[0].textContent);
// heading_2[0].textContent = 'xin chao moi nguoi';
// heading_2[0].style.color = 'red';



// Phuong thuc appendChild, prepend,
/* INPUT: them 1 the html moi vao trang html
    OUTPUT: them 1 the 'p'

    B1: truy cap
    B2: tao the minh muon them
    B3: Them the
 */
let heading_3 = document.querySelectorAll('.heading-3');
console.log(heading_3);

let para = document.createElement('p');
console.log(para);
para.textContent = 'tieu de 3.1';
// console.log(para);
heading_3[0].appendChild(para);

// Phuong thuc insertBefore
/* B1: Truy cap phan tu
    B2: tao the muon them
    B3: them bang insertBefor: document.body.insertBefore

 */

    let box_3 = document.querySelectorAll('.box-3');
    let para_1 = document.createElement('h4');
    para_1.textContent = 'the moi'
    document.body.insertBefore(para_1,box_3[0]);


    /* Xoa phan tu trong DOM
        C1:
        B1: truy cap phan tu
        B2.1: Xoa phan tu
     */
    let box_4 = document.querySelectorAll('.box-4');
    let boxChild = document.querySelectorAll('.heading-4');
    // console.log(boxChild);
    // box_4[0].removeChild(boxChild[1]);

    /* C2: 
     */
    boxChild[1].parentNode.removeChild(boxChild[1]);


// Thay the phan tu trong DOM
/* B1: Truy cap phan tu
    B2: Tao the moi
     */
    let heading_5 = document.querySelectorAll('.heading-5');
    let paHeading_5 = document.querySelectorAll('.box-5');

    let para_5 = document.createElement('p');
    para_5.textContent = "phan tu moi";

    paHeading_5[0].replaceChild(para_5, heading_5[0]);

    // SAO CHEP PHAN TU TRONG DOM
    /* B1: Truy cap phan tu

     */
    let heading_6 = document.querySelectorAll('.heading-6');
    
    let copyTag = heading_6[1].cloneNode(true);
    console.log(copyTag);