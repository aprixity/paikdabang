window.onload = function () {
  // 헤더 고정
  const header = document.querySelector('header');
  const headerHeight = header.getBoundingClientRect().height;
  const container = document.getElementById('fullpage');

  container.addEventListener('scroll', () => {
    if (container.scrollTop > 0) {
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }
  });

  // 메뉴

  let subMenus = document.querySelectorAll('.nav > ul > li > ul');

  subMenus.forEach(function (submenu) {
    submenu.style.display = 'block';
    submenu.style.height = '0';
    submenu.style.overflow = 'hidden';
    submenu.style.transition = 'all 600ms';
  });

  //new menu 페이드
  var mql = window.matchMedia('screen and (max-width: 430px)');

  if (mql.matches) {
    let MnavList = document.querySelectorAll('.nav > ul > li');

    MnavList.forEach(function (navItem) {
      navItem.addEventListener('mouseover', function () {
        let subMenu = this.querySelector('.submenu');
        subMenu.style.height = subMenu.scrollHeight + 'px';
      });

      navItem.addEventListener('mouseout', function () {
        this.querySelector('.submenu').style.height = '0px';
      });
    });

    let currentIndex = 0;
    const newMenu = document.querySelectorAll('.new-menu');

    newMenu.forEach((img) => (img.style.opacity = '0'));
    newMenu[0].style.opacity = '1';

    setInterval(() => {
      let nextIndex = (currentIndex + 1) % newMenu.length;

      newMenu[currentIndex].style.opacity = '0';
      newMenu[nextIndex].style.opacity = '1';
      newMenu.forEach((img) => (img.style.transition = 'all 1s'));

      currentIndex = nextIndex;
    }, 3000);
  } else {
    let navList = document.querySelector('nav > ul');

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
  }

  // best-menu 슬라이드
  const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 50,
    pagination: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: false,
    breakpoints: {
      431: {
        slidesPerView: 5,
        spaceBetween: 150,
        slidesOffsetBefore: 50,
        centeredSlides: true,
      },
    },
  });

  // 모바일 메뉴
  document.querySelector('.menu-btn').addEventListener('click', function () {
    document.querySelector('.nav-list').style.display = 'block';
    document.querySelector('.close-btn').style.display = 'block';
    document.querySelector('.menu-btn').style.display = 'none';
  });
  document.querySelector('.close-btn').addEventListener('click', function () {
    document.querySelector('.nav-list').style.display = 'none';
    document.querySelector('.close-btn').style.display = 'none';
    document.querySelector('.menu-btn').style.display = 'block';
  });
};
