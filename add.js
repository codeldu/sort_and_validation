let nameInp = document.querySelector('#name');
let surnameInp = document.querySelector('#surname');
let butt = document.querySelector('#send');
let text = document.querySelector('#errText')

butt.addEventListener('click',()=>{
    let name = nameInp.value;
    let surname = surnameInp.value;

    if(!name){
        text.style.display = 'inline'
    }


})



// nameInp.addEventListener('input',(e)=>{
//     if(e.target.value.length >= 8){
//         butt.disabled = false
//     }else{
//         butt.disabled = true
//     }
// })