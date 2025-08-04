// ======= Sticky
document.addEventListener('DOMContentLoaded', function () {
  window.onscroll = function () {
    const ud_header = document.querySelector('.ud-header');
    
    // 检查元素是否存在
    if (!ud_header) {
      return;
    }
    
    const sticky = ud_header.offsetTop;
    const logo = document.querySelectorAll('.header-logo');

    if (window.pageYOffset > sticky) {
      ud_header.classList.add('sticky-header');
      ud_header.classList.remove('absolute', 'bg-transparent', 'z-40');
    } else {
      ud_header.classList.remove('sticky-header');
      ud_header.classList.add('absolute', 'bg-transparent', 'z-40');
    }

    if(logo.length) {
      // === logo change
      if (ud_header.classList.contains('sticky-header')) {
        document.querySelector(".header-logo").src = '/assets/logo/logo.svg';
      } else {
        document.querySelector('.header-logo').src = '/assets/logo/logo-white.svg';
      }
    }

    if (document.documentElement.classList.contains('dark')) {
      if (logo.length) {
        // === logo change
        if (ud_header.classList.contains('sticky-header')) {
          document.querySelector('.header-logo').src = '/assets/logo/logo-white.svg';
        } 
      }
    }

    // BackToTop functionality is now handled in the BackToTop component itself
  };
});
