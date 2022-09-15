const mobileNavToggle = document.querySelector('.mobile-menu')
const navBar = document.querySelector('.nav')
const overlay = document.querySelector('.mobile-menu-overlay')

mobileNavToggle.addEventListener('click', () => {
    const isVisible = navBar.getAttribute('data-visibility')
    if (isVisible === 'false') {
        navBar.setAttribute('data-visibility', true)
        overlay.setAttribute('data-overlay', true)
        mobileNavToggle.setAttribute('aria-expanded', true)
    } else {
        navBar.setAttribute('data-visibility', false)
        overlay.setAttribute('data-overlay', false)
        mobileNavToggle.setAttribute('aria-expanded', false)
    }
})