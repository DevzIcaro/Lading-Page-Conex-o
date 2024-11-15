/*MENU HAMBURGUER */
    const hamMenu = document.querySelector('.ham-menu');
    
    const offScreenLi = document.querySelectorAll('.off-screen-li');

    const offScreenMenu = document.querySelector('.off-screen-menu');

    hamMenu.addEventListener('click', () => {
        hamMenu.classList.toggle('active');
        offScreenMenu.classList.toggle('active');
    })
    offScreenLi.forEach(item =>{
        item.addEventListener('click', () =>{
            offScreenMenu.classList.remove('active');
            hamMenu.classList.remove('active');
        })
    })
    function activeHamMenu(){
        hamMenu.classList.toggle('active');
    }
    function closeHamMenu(){
        hamMenu.classList.remove('');
    }
/*FIM MENU HAMBURGUER */
/*SLIDER OBJETIVO */
let slidePosition = 0;
const slides = document.getElementsByClassName('carousel-item');
const totalSlides = slides.length;


document
    .getElementById('carousel_button--next')
    .addEventListener("click", function(){
        moveToNextSlide();
    })

document
    .getElementById('carousel_button--prev')
    .addEventListener("click", function(){
        moveToPrevSlide();
    })

function updateSlidePosition(){
    for(let slide of slides){
        slide.classList.remove('card-visivel');
        slide.classList.add('carousel_item--hidden');
    }
    slides[slidePosition].classList.add('card-visivel');
}

function moveToNextSlide(){
    if(slidePosition == totalSlides -1){
        slidePosition = 0;
    }else{
        slidePosition ++;
    }
    updateSlidePosition();
}

function moveToPrevSlide(){
    if(slidePosition == 0){
        slidePosition = totalSlides -1; 
    }else{
        slidePosition --;
    }
    updateSlidePosition();
}
/*FIM SLIDER OBJETIVO */


/*EVENTO LINK-SCROLL*/
const links = document.querySelectorAll("li");

links.forEach((link) =>{
    link.addEventListener("click", (event) =>{
        const targetId= link.getAttribute("data-target");
        const targetSection = document.getElementById(targetId);
            if (targetSection){
                window.scrollTo({
                    behavior: "smooth",
                    top: targetSection.offsetTop,
                    left: 0,
                });
            }
        });
    });
/*FIM EVENTO LINK-SCROLL*/

/*SCROLL VANTAGENS*/
const topicos = document.querySelectorAll(".topicos");

document
    .addEventListener("scroll", function(){
        topicos.forEach(topicos => {
            if(isInView(topicos)){
                topicos.classList.add("topicos-visivel");
            }
        })
    })

function isInView(element){
    const rect = element.getBoundingClientRect();
    return(
        rect.bottom > 0 &&
        rect.top < (window.innerHeight -150 || documentElement.clientHeight -150)
    );
}
/*FIM SCROLL VANTAGENS*/

/*SCROLL SOBRE-NOS*/
const paragrafo = document.querySelectorAll(".topicos-paragrafo");

document
    .addEventListener("scroll", function(){
           paragrafo.forEach(paragrafo => {
            if(isInView(paragrafo)){
                paragrafo.classList.add("topicos-paragrafo-visivel");
                }
           })
        });


/*FIM SCROLL SOBRE-NOS*/