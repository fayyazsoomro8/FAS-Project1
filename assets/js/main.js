var headerAlert = document.getElementById('header-alert');
  var fixedElement = document.getElementById('fixedmy');

  window.addEventListener('scroll', function() {
      if (window.scrollY > 10) {
          headerAlert.classList.add('hidden');
          fixedElement.style.top = '0'; 
      } else {
          headerAlert.classList.remove('hidden');
          fixedElement.style.top = '50px'; 
      }
  });