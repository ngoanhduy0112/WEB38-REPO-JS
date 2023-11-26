// C2: BAT SU KIEN TRONG HTML - ELEMENT
let button_2 = document.querySelector('.button-2');
button_2.onclick = () => {
    alert('ban da bi lua');
}

// C3: BAT 1 SU KIEN TRONG HTML - adEventListener: NEN DUNG
let button_3 = document.querySelector('.button-3');
button_3.addEventListener('click',()=>{
    alert('ban lai bi lua roi');
})
button_3.addEventListener("mouseout",() =>{
    alert('bi lua van click');
})