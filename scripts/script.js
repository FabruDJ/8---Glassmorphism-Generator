let result = document.querySelector(".result");
const colorInput = document.querySelector("#color");
const transpInput = document.querySelector('#transparencia');
const blurInput = document.querySelector('#blur');

const counterBlur = document.querySelector('.counter-blur'); 
const counterTransp = document.querySelector('.counter-transp');

//colorInput.addEventListener('input', (e) => {
//    result.style.background = e.target.value;
//});

transpInput.addEventListener('input', (e) => {
    let transpCounter;
    transpCounter = e.target.value;
    result.style.background = `rgba(255, 255, 255, ${transpCounter})`;
    counterTransp.innerHTML = `<p>${transpCounter}</p>`;
});

blurInput.addEventListener('input', (e) => {
    let blurCounter;
    blurCounter = e.target.value;
    result.style.backdropFilter = `blur(${blurCounter}px)`;
    counterBlur.innerHTML = `<p>${blurCounter}px</p>`;
})



