const arrowBtn = document.querySelector('.arrow')
const arrowIcon = document.querySelector('.arr')
const menuA = document.querySelector('.menu')
const navIte = document.querySelector('.container')


//1.nasłuchiwanie 'click na przycisk
//2.dodawanie klasy'hide
//3 obracać strzałke

const showImg = () => {
    menuA.classList.toggle('hide');
    navIte.classList.toggle('hide')
   
   

    if(menuA.classList.contains('hide')) {
        arrowIcon.style.transform = 'rotate(0deg)'
        
        
    
    } else {
        arrowIcon.style.transform = 'rotate(180deg)'
        
        
    }
}


arrowBtn.addEventListener('click', showImg)



