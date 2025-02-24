let userNameInput = document.querySelector('#username')
let labelUserName = document.querySelector('#username-label')

userNameInput.addEventListener('keyup', event => {
    if (event.target.value.length > 0) {
        labelUserName.classList.add('-top-3')

    }

})
