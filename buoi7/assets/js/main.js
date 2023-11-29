let button_1 = document.querySelector('.button-1');
button_1.addEventListener('mouseout',(abc)=> {
    alert('helo');
    // console.log(abc.screenX);
})


// KEYBOARD trong JS
// B1: Truy cap phan tu
// B2: BAT SU KIEN 
// C1:
let button_2 = document.querySelector('.button-2');
document.addEventListener('keydown',(event) =>{
    alert('bam vao ban phim roi day');
    console.log(event);
});


// // C2

// let show = () =>{
//     alert('ckick');
// }
// document.addEventListener('keydown',show);
