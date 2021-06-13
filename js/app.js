const button = document.querySelector('button')
const input = document.querySelector('input')
const error = document.querySelector('.error-message')

const verify = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

button.addEventListener('click', () => {
    if(!verify.test(input.value)){
        input.style.border = 'solid 1px hsl(354, 100%, 66%)'
        error.style.visibility = 'visible'
    }else{
        input.style.border = 'solid 1px hsl(223, 100%, 88%)'
        error.style.visibility = 'hidden'

    }
})



