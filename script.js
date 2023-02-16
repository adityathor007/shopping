// 'use strict'

//////////////////////sticky-nav//////////////////////////
const header = document.querySelector('.top-bar')
const nav = document.querySelector('.nav')

// const init = header.getBoundingClientRect()

// window.addEventListener('scroll', function () {
//   // console.log(window.scrollY);


//   // let top = (window);
//   // console.log(top + "px");

//   // if (top > 0) {
//   //   nav.style.top = top + "px"
//   // }
// })
// console.log(init.top);
// console.log(init);
// console.log(init.height);


const stickyNav = function (entries) {
  const [entry] = entries;

  console.log(entry.boundingClientRect.height);
  console.log(entry.boundingClientRect.y);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});
headerObserver.observe(header);

/////////////////////////////////////////////////cons/////////////
/// Slide
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');



  let curSlide = 0;

  let maxSlide = slides.length

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  //// Next slide //////
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };
  const seti = setInterval(() => {
    nextSlide()

  }, [4000])
  //// Event handlers /////
  btnRight.addEventListener('click', () => {
    nextSlide()
    clearInterval(seti)
    slider()

  });
  btnLeft.addEventListener('click', () => {
    prevSlide()
    clearInterval(seti)
    slider()

  });

  document.addEventListener('keydown', function (e) {
    e.key === 'ArrowLeft' && prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });
  /////////////////////////////////////////////////////////////
  /// Set-time Interval

};
slider();