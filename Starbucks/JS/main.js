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


// lodash cdn을 사용해서  _.throttle 일정 시간이 지날 때마다 함수를 실행하라
// gsap cdn 애니메이션 효과
window.addEventListener('scroll', _.throttle(function () {
  console.log('scroll');
  console.log(window.scrollY);

  if (window.scrollY > 500) {
    //배지 숨기기
    // gsap.to(요소, 지속시간, 옵션)
    gsap.to(badgeEl, .3, {
      opacity: 0,
      display: 'none'
    });
    // badgeEl.style.display = 'none';
  } else {
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, .3, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300));

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
  spaceBetween: 10, // 슬라이드 사이 영백
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