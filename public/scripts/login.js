let userNameInput = document.querySelector('#username')
let labelUserName = document.querySelector('#username-label')
let passwordInput = document.querySelector('#password')
let labelPassword = document.querySelector('#password-label')
let passwordStatusButton = document.querySelector('#pass-status-btn')
let eyeOffSvg = document.querySelector('#eye-off-icon')
let eyeSvg = document.querySelector('#eye-icon')
// Check that we have a value in the user name input
userNameInput.addEventListener('keyup', event => {
    if (event.target.value.length > 0) {
        labelUserName.classList.add('-top-3')
    } else {
        labelUserName.classList.remove('-top-3')
    }
})
// Check that we have a value in the password input
passwordInput.addEventListener('keyup', event => {
    if (event.target.value.length > 0) {
        labelPassword.classList.add('-top-3')
    } else {
        labelPassword.classList.remove('-top-3')
    }
})
// password show & hidden
passwordStatusButton.addEventListener('click', event => {
    event.preventDefault()
    eyeOffSvg.classList.toggle('hidden')
    eyeSvg.classList.toggle('hidden')
    if (eyeOffSvg.classList.contains('hidden')) {
        passwordInput.type = 'text'
    } else {
        passwordInput.type = 'password'
    }
})

