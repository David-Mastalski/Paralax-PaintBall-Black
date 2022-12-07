const desktopNavWrapper = document.querySelector('.js-navigation')
const btnsNavContainer = document.querySelector('.btns-nav-container')
const mobileNavWrapper = document.querySelector('.mobile-nav-wrapper')
const pageDocument = document.querySelector('.content-wrapper')

//Buttons
const hamburgerMenuBtn = document.querySelector('.hamburger-btn')


const checkWidth = () => {
    const width = window.innerWidth

    if(width < 750){
        mobileNavWrapper.append(btnsNavContainer)
    }else{
        desktopNavWrapper.append(btnsNavContainer)
    }
}

checkWidth()
window.addEventListener('resize', checkWidth)

hamburgerMenuBtn.addEventListener('click', () => {
    mobileNavWrapper.classList.toggle('showMobileNav')
})

pageDocument.addEventListener('click', () => {
    if(mobileNavWrapper.classList.contains('showMobileNav')){
        mobileNavWrapper.classList.remove('showMobileNav')
    }
})