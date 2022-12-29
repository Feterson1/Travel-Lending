(function(){
const header = document.querySelector('header');
window.onscroll = () =>{
    if(window.pageYOffset > 50 ){
        header.classList.add('header_active');
    }else{
        header.classList.remove('header_active');
    }
}
}())

// Burger handler

(function(){
    const burgerItem = document.querySelector('.burger');
    const headerMenu = document.querySelector('.header__nav');
    const headerClose = document.querySelector('.header__nav-close');
    burgerItem.addEventListener('click', ()=>{
       headerMenu.classList.add('header__nav_active');
    })
    headerClose.addEventListener('click', () => {
        headerMenu.classList.remove('header__nav_active');
    })

}());

