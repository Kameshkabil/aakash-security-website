/* MOBILE MENU */

const menuBtn = document.getElementById('menuBtn');

const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {

  mobileMenu.classList.toggle('active');

});

const mobileLinks = document.querySelectorAll('.mobile-menu a');

mobileLinks.forEach(link => {

  link.addEventListener('click', () => {

    mobileMenu.classList.remove('active');

  });

});

/* COUNTER ANIMATION ON SCROLL */

const counters = document.querySelectorAll('.counter');

let started = false;

function startCounters() {

  counters.forEach(counter => {

    const target = +counter.getAttribute('data-target');

    let count = 0;

    const increment = target / 120;

    const updateCounter = () => {

      count += increment;

      if(count < target){

        counter.innerText = Math.ceil(count);

        requestAnimationFrame(updateCounter);

      }else{

        if(target === 24){

          counter.innerText = "24/7";

        }else if(target === 100){

  counter.innerText = "100%";

}else{

          counter.innerText = target + "+";

        }

      }

    };

    updateCounter();

  });

}

window.addEventListener('scroll', () => {

  const statsSection = document.querySelector('.stats');

  const sectionTop = statsSection.offsetTop;

  const screenPosition = window.innerHeight;

  if(window.scrollY > sectionTop - screenPosition + 150){

    if(!started){

      startCounters();

      started = true;
    }

  }

});

/* TESTIMONIAL SLIDER */

const wrapper = document.getElementById("testimonialWrapper");

const nextBtn = document.querySelector(".next-btn");

const prevBtn = document.querySelector(".prev-btn");

const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

const totalSlides = 3;

function updateSlider(){

  wrapper.scrollTo({

    left: currentSlide * wrapper.offsetWidth,

    behavior:"smooth"

  });

  dots.forEach(dot => dot.classList.remove("active"));

  dots[currentSlide].classList.add("active");

}

/* NEXT */

nextBtn.addEventListener("click", () => {

  currentSlide++;

  if(currentSlide >= totalSlides){

    currentSlide = 0;

  }

  updateSlider();

});

/* PREV */

prevBtn.addEventListener("click", () => {

  currentSlide--;

  if(currentSlide < 0){

    currentSlide = totalSlides - 1;

  }

  updateSlider();

});

/* AUTO SLIDE */

setInterval(() => {

  currentSlide++;

  if(currentSlide >= totalSlides){

    currentSlide = 0;

  }

  updateSlider();

}, 4000);