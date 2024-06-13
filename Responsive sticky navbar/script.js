function toggleMenu() {
      var menuItems = document.querySelector('.menu-items');
      menuItems.classList.toggle('show');

      var menuIcon = document.querySelector('.menu-icon');

      if (menuItems.classList.contains('show')) {
            menuIcon.classList.add('open');
      } else {
            menuIcon.classList.remove('open');
      }
}

window.addEventListener('scroll', function () {
      var topMenu = document.getElementById('top-menu');
      if (window.scrollY > 50) {
            topMenu.classList.add('scrolled');
      } else {
            topMenu.classList.remove('scrolled');
      }
});