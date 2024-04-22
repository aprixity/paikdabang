window.onload = function () {
  const header = document.querySelector('header');
  const headerHeight = header.getBoundingClientRect().height;
  const container = document.getElementById('container');

  container.addEventListener('scroll', () => {
    if (container.scrollTop > 0) {
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }
  });

  // 메뉴
  let navList = document.querySelector('nav > ul');
  let subMenus = document.querySelectorAll('.nav > ul > li > ul');

  subMenus.forEach(function (submenu) {
    submenu.style.display = 'block';
    submenu.style.height = '0';
    submenu.style.overflow = 'hidden';
    submenu.style.transition = 'all 600ms';
  });

  navList.addEventListener('mouseover', () => {
    navList.querySelectorAll('.submenu').forEach((sub) => {
      sub.style.height = '225px';
    });
    document.getElementById('header').classList.add('on');
  });

  navList.addEventListener('mouseout', () => {
    navList.querySelectorAll('.submenu').forEach((sub) => {
      sub.style.height = '0px';
    });
    document.getElementById('header').classList.remove('on');
  });
};
