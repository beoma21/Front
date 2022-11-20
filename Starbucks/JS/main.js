// 검색기능
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색')
});

searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '')
});

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top')


// lodash cdn을 사용해서  _.throttle 일정 시간이 지날 때마다 함수를 실행하라
// gsap cdn 애니메이션 효과
window.addEventListener('scroll', _.throttle(function () {
  // 페이지 스크롤 위치가 500px이 넘으면.
  if (window.scrollY > 500) {
    // Badge 요소 숨기기!
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    })
    // 상단으로 스크롤 버튼 보이기!
    gsap.to(toTopEl, .2, {
      x: 0
    })

  // 페이지 스크롤 위치가 500px이 넘지 않으면.
  } else {
    // Badge 요소 보이기!
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    })
    // 상단으로 스크롤 버튼 숨기기!
    gsap.to(toTopEl, .2, {
      x: 100
    })
  }
}, 300));
// 상단으로 스크롤 버튼을 클릭하면,
toTopEl.addEventListener('click', function () {
  // 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동.
  gsap.to(window, .7, {
    scrollTo: 0
  })
});

// VISUAL
const fadeEls = document.querySelectorAll('.visual .fade-in')
fadeEls.forEach(function (fadeEls, index) {
  gsap.to(fadeEls, 1, {
    delay: (index+1)*.5,
    opacity: 1,
    display: 'block'
  });
}) ;

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal', 기본값
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 수
  spaceBetween: 10, // 슬라이드 사이 공백
  centeredSlides: true, // 1번  슬라이드가 가운데 보이기
  autoplay: {
    delay: 3000 //3초
  },
  loop : true,
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true //페이지 번호 요소 제어
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30, // 슬라이드 사이 공백
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});




const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion

  if(isHidePromotion)
  {
    promotionEl.classList.add('hide');
  }
  else
  {
    promotionEl.classList.remove('hide');
  }
})

function random(min, max) {
  return parseFloat((Math.random() * (max-min)+min).toFixed(2))
}
function floatingObject(selector, time, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    delay: time,
    ease: Power1. easeInOut
  });
}
floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5, 20)
floatingObject('.floating3', 1.5, 30)


const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ // 감시할 장면(Scene)을 추가
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
})

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();


// 모달 팝업
const modal = document.querySelector('.modal');
const btnOpenPopup = document.querySelectorAll('.open-popup');
const btnClosePopup = modal.querySelector('.close-popup');

btnOpenPopup[0].addEventListener('click', () => {
  modal.style.display = 'block',
  console.log("hello?")
});

btnOpenPopup[1].addEventListener('click', () => {
  modal.style.display = 'block',
  console.log("hello?")
});

btnClosePopup.addEventListener('click', () => {
  modal.style.display = 'none',
  console.log("why?")
});


// 여러 개의 모달 창을 띄우고 닫으려면?

