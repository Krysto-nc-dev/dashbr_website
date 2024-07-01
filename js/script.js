document.addEventListener('DOMContentLoaded', function () {
  // Get the input element and button element
  const toggleButton = document.querySelector('.navbar .mobile-menu-toggle')

  const mobileMenu = document.querySelector('.navbar .mobile-menu-items')

  toggleButton.addEventListener('click', function () {
    // Toggle the display property of the mobile menu items
    mobileMenu.classList.toggle('active')
  })
})
