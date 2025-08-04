// ===== responsive navbar
let navbarToggler = document.querySelector('#navbarToggler');
const navbarCollapse = document.querySelector('#navbarCollapse');

// 检查元素是否存在，避免错误
if (navbarToggler && navbarCollapse) {
  navbarToggler.addEventListener('click', () => {
    navbarToggler.classList.toggle('navbarTogglerActive');
    navbarCollapse.classList.toggle('hidden');
  });

  //===== close navbar-collapse when a  clicked
  document.querySelectorAll('#navbarCollapse ul li:not(.submenu-item) a').forEach((e) =>
    e.addEventListener('click', () => {
      navbarToggler.classList.remove('navbarTogglerActive');
      navbarCollapse.classList.add('hidden');
    })
  );
}

// ===== Sub-menu
const submenuItems = document.querySelectorAll('.submenu-item');
submenuItems.forEach((el) => {
  const link = el.querySelector('a');
  const submenu = el.querySelector('.submenu');
  if (link && submenu) {
    link.addEventListener('click', () => {
      submenu.classList.toggle('hidden');
    });
  }
});
