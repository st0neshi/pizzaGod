// For popup test using now
const openLoginButtons = document.querySelectorAll('[data-login-target]');
const closeLoginButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openLoginButtons.forEach(button => {
    button.addEventListener('click', () => {
        const login = document.querySelector(button.dataset.loginTarget)
        openLogin(login)
    })
})

closeLoginButtons.forEach(button => {
    button.addEventListener('click', () => {
        const login = button.closest('.login')
        closeLogin(login)
    })
})

function openLogin(login) {
    if (login == null) return
    login.classList.add('active')
    overlay.classList.add('active')
}

function closeLogin(login) {
    if (login == null) return
    login.classList.remove('active')
    overlay.classList.remove('active')
}

overlay.addEventListener('click', () => {
    const login = document.querySelectorAll('.login.active')
    login.forEach(login => {
      closeLogin(login)
    })
  })