const mobileMenu = document.querySelector('.mobile-menu')
const scrollBtn = document.querySelector('.scroll-top')

mobileMenu.addEventListener('click',()=>{
document.querySelector('.menu').classList.toggle('show')
})

// first function
window.addEventListener('scroll',function(){
    if(document.body.scrollTop>160 || document.documentElement.scrollTop >160){
        scrollBtn.style.display="block"
    }else{
        scrollBtn.style.display="none"
    }
}
)
// Second function
scrollBtn.addEventListener('click',()=>{
    document.documentElement.scrollTop = 0;
})
