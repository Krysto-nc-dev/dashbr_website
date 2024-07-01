// toggle mobile menu

document.addEventListener('DOMContentLoaded', function () {
  // Get the input element and button element
  const toggleButton = document.querySelector('.navbar .mobile-menu-toggle')

  const mobileMenu = document.querySelector('.navbar .mobile-menu-items')

  toggleButton.addEventListener('click', function () {
    // Toggle the display property of the mobile menu items
    mobileMenu.classList.toggle('active')
  })
})

// change navbar background on scroll

window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar')

  // Check if the scroll position is greater than 0
  if (window.scrollY > 0) {
    navbar.classList.add('navbar-scroll')
  } else {
    navbar.classList.remove('navbar-scroll')
  }
})
