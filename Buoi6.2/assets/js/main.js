// B1: truy cap phan tu
// B2: bat su kien nguoi dung bam vao nut
let contentMess = document.querySelector('.content-mess');
let iconMess = document.querySelector('.icon-mess');
let closeMess = document.querySelector('.close-mess')
let isPopup = false;


iconMess.addEventListener('click',() => {
    if(isPopup == false){
        contentMess.style.bottom = '120px';
        isPopup = true;
    }else {
        contentMess.style.bottom = '-600px';
        isPopup = false;
    }
});
closeMess.addEventListener('click',() => {
    contentMess.style.bottom = '-600px';
});

/*  =: gan gia ttri
    ==: so sanh gia tri
    ===: so sanh gia tri phan tu + so sanh kieu du lieu
 */

    