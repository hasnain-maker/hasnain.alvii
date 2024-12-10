    // menu icon on the navigation bar 

    let menuIcon = document.getElementById('menu-icon');
    let navBar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
      navBar.classList.toggle('active');
      menuIcon.classList.toggle('bx-x');
    }
  
// ============Sticky Nav=======

let header = document.querySelector('header');
let section = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header .navbar a')
window.onscroll = () => {
  section.forEach(sec=> {
    let top = window.scrollY;
    let offSet = sec.offsetTop - 150
    let height = sec.offsetHeight
    let id = sec.getAttribute('id');


    if (top >= offSet && top < offSet + height) {
      navLinks.forEach(links=> {
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*= '+ id + ']').classList.add('active')
      })
    }
  })
  header.classList.toggle('sticky', window.scrollY > 100);

  // Remove Navbar when active link (click) 

  navBar.classList.remove('active');
      menuIcon.classList.remove('bx-x');

}
// =================Typing Animation JavaScript==============

var typed = new Typed('.type-animation', {
    strings: ['Web developer', 'Graphics designer', 'Video Editor' , 'Ethical Hacker'],
    typeSpeed: 50,
    loop: true,
    backSpeed: 50,
  });


  


const swiper = new Swiper('.slider-wrapper', {
    // Optional parameters
    spaceBetween: 30,
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints:{
        0:{
            slidesPerView : 1
        },
        700:{
            slidesPerView : 2
        },
        1240:{
            slidesPerView : 3
        },
    }
    
  });

// ================Scroll Reveal JavaScript=============//


ScrollReveal({
  reset:true,
  distance: '100px',
  duration: 2500
});

ScrollReveal().reveal('.home-content, .heading, .service-box', {origin: 'top'});
ScrollReveal().reveal('.slider-wrapper, button, .portfoli-box, form, .text-typing-about', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img img, .service-box p, .left-section-details, .footer-text, .social-media ', { origin: 'left' });
ScrollReveal().reveal('.text-about-content, .home-content p, .footer-icon', { origin: 'right' });





function sendMessage(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Construct the WhatsApp message
    const whatsappNumber = '03466509261';
    const fullMessage = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0ASubject: ${subject}%0AMessage: ${message}`;
    const whatsappLink = `https://api.whatsapp.com/send?phone=${'03466509261'}&text=${fullMessage}`;

    // Redirect to WhatsApp
    window.open(whatsappLink, '_blank');
}