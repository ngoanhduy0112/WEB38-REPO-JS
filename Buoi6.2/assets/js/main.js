// B1: truy cap phan tu
// B2: bat su kien nguoi dung bam vao nut
let contentMess = document.querySelector('.content-mess');
let iconMess = document.querySelector('.icon-mess');
let closeMess = document.querySelector('.close-mess')


iconMess.addEventListener('click',() => {
    contentMess.style.bottom = '120px';
});
closeMess.addEventListener('click',() => {
    contentMess.style.bottom = '-600px';
});
