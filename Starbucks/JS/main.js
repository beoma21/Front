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

