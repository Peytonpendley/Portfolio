// template_e92aoxd //service_6jd2p3b //eD9csehKualV664C5
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event){
    const shapes = document.querySelectorAll(`.shape`);
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    
    for(let i = 0; i < shapes.length; i++){
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}

function toggleContrast(){
    contrastToggle = !contrastToggle;
    if(contrastToggle){
        document.body.classList += ` dark-theme`;
    }
    else{
        document.body.classList.remove(`dark-theme`);
    }
}

function contact(event){
    event.preventDefault();
    const loading = document.querySelector(`.module_overlay-loading`);
    const success = document.querySelector(`.module_overlay-success`);
    loading.classList += ` module_overlay-visible`;
    emailjs
        .sendForm(
            `service_6jd2p3b`,
            `template_e92aoxd`,
            event.target,
            `eD9csehKualV664C5`
        ).then(() => {
            loading.classList.remove(`module_overlay-visible`);
            success.classList += ` module_overlay-visible`;
        }).catch(() => {
            loading.classList.remove(`module_overlay-visible`);
            alert(`The email service is temporarily unavailable. Please contact me directly on peytonpendley18@gmail.com`);
        })
        loading.classList += ` module_overlay-visible`;
        setTimeout(() => {
            console.log(`it worked`);
        }, 1000);
}

let isModuleOpen = false;
function toggleModule(){
    if(isModuleOpen){
        isModuleOpen = false;
        return document.body.classList.remove(`module-open`)
    }
    isModuleOpen = true;
    document.body.classList += ` module-open`
}