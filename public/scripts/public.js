const mobileMenuOpenBtn = document.querySelector('#menu-open-btn')
const mobileMenuCloseBtn = document.querySelector('#menu-close-btn')
const mobileMenuWrapper = document.querySelector('#mobile-menu')

function mobileMenuHandler() {
    mobileMenuWrapper.classList.toggle('-right-80')
    mobileMenuWrapper.classList.toggle('opacity-0')
    mobileMenuWrapper.classList.toggle('right-0')
}

mobileMenuCloseBtn.addEventListener('click', () => {
    mobileMenuHandler()
})
mobileMenuOpenBtn.addEventListener('click', () => {
    mobileMenuHandler()
})