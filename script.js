let wrapper = document.querySelector('#wrapper');
let select = document.querySelector('#sortAlpha');

let info = [];

const writeNames = (arr) =>{
    wrapper.innerHTML = '';
    arr.forEach(el =>{
        wrapper.innerHTML += `<h1>${el.first_name}</h1>`
    })
}

fetch('http://localhost:3000/api/')
.then(r=>r.json())
.then(data => {
    info = data;
    writeNames(info);
})



select.addEventListener('change',(e)=>{

    let infoClone = [...info];

    if(e.target.value == 'a-z'){
       let sortAz = infoClone.sort((a,b)=>a.first_name.localeCompare(b.first_name));
       writeNames(sortAz)
    }else if(e.target.value == 'z-a'){
        let sortZa = infoClone.sort((a,b)=> b.first_name.localeCompare(a.first_name));
        writeNames(sortZa)
    }else{      
        writeNames(info)
    }
})