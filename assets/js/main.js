/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => (n.addEventListener('click', linkAction)))

// swiper projects

let swiperProjects = new Swiper(".projects__container", {
    // loop:true,
    spaceBetween:24,
    cssMode: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
            slidesPerView: 2,
            spaceBetween: -56,
        },
    },
});

let swiperTestimonial = new Swiper(".testimonial__container", {
    grabCursor:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const contactForm = document.getElementById("contact-form"),
    contactName =document.getElementById("contact-name"),
    contactEmail =document.getElementById("contact-email"),
    contactProject =document.getElementById("contact-project"),
    contactMessage =document.getElementById("contact-message");


const sendEmail =(e)=>{
    e.preventDefault()

    if(contactName.value === "" || contactEmail.value ==="" || contactProject.value === ""){
        contactMessage.classList.remove("color-blue");
        contactMessage.classList.add("color-red");

        contactMessage.textContent="Write all the input fields 📝";
    }else{
        emailjs.sendForm('service_h3o82cq','template_m1a9gda','#contact-form' , 'WcL23P42j2zw5ts2I')
            .then(()=>{
                contactMessage.classList.add("color-blue");
                contactMessage.textContent="Message sent ✅";
                setTimeout(()=>{
                    contactMessage.textContent="";
                },5000)
            },(error)=>{
                Swal.fire({
                    title: 'Something went wrong',
                    icon: 'warning',
                    showconfirmButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                })
            })
            contactName.value ="";
            contactEmail.value ="";
            contactProject.value ="";
    }
}
contactForm.addEventListener("submit",sendEmail);

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
    const scrollY = window.pageYOffset

	sections.forEach(current =>{
            const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}
	})
}
window.addEventListener('scroll', scrollActive)


const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)




// dark light mode
/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                        : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)


const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay: 400,
    // reset:true,
})

sr.reveal(`.home__data , .projects__container, .testimonial__container , .footer__container`);
sr.reveal(`.home__info div`, {delat:600, origin:'bottom' , interval: 100});
sr.reveal(`.skills__content:nth-child(1) , .skills__content:nth-child(3) , .contact__content:nth-child(1)`, { origin:'left' });
// sr.reveal(`.skills__content:nth-child(3)`, { origin:'left' });
sr.reveal(`.skills__content:nth-child(2) , .skills__content:nth-child(4) , .contact__content:nth-child(2)`, { origin:'right' });
// sr.reveal(`.skills__content:nth-child(4)`, { origin:'right' });
sr.reveal(`.qualification__content , .services__card` , { interval:100 });



let openProject= document.getElementById("open-Project");

openProject.onclick = (e)=>{
    e.preventDefault();

    Swal.fire({
        title: 'Something went wrong please try other one 😢',
        icon: 'warning',
        showconfirmButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
    })
//     Swal.fire({
//         imageUrl: 'https://unblast.com/wp-content/uploads/2023/01/Electricity-System-Isometric-Icons.jpg',
        
//         imageHeight: 500,
//         imageAlt: 'A tall image'
//     })
}