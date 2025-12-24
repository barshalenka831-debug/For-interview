
const galleryItems  = [
    { img: 'hair-transformation.jpg', title: 'Hair Transformation' },
    { img: 'facial-treatment.jpg', title: 'Facial Treatment' },
    { img: 'bridal-makeup.jpg', title: 'Bridal Makeup' },
    { img: 'hair-coloring.jpg', title: 'Hair Coloring' },
    { img: 'skin-care.jpg', title: 'Skin Care' },
    { img: 'evening-makeup.jpg', title: 'Evening Makeup' }
];
document.addEventListener('DOMContentLoaded', function () {

    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');

    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', function () {
            mobileMenuBtn.classList.toggle('active');
            mainNav.classList.toggle('active');
        });

        document.querySelectorAll('.main-nav a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                mainNav.classList.remove('active');
            });
        });
    }
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 90,
                    behavior: 'smooth'
                });
            }
        });
    });
    const galleryGrid = document.querySelector('.gallery-grid');
    if (galleryGrid) {
        galleryItems.forEach(item => {
            const div = document.createElement('div');
            div.className = 'gallery-item';

            div.innerHTML = `
                <img src="./images/${item.img}" alt="${item.title}">
                <div class="gallery-overlay">
                    <h4>${item.title}</h4>
                </div>
            `;

            galleryGrid.appendChild(div);
        });
    }
    const appointmentForm = document.getElementById('appointmentForm');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const btn = this.querySelector('button');
            btn.innerHTML = 'Booking...';
            btn.disabled = true;

            setTimeout(() => {
                alert('Appointment booked successfully!');
                btn.innerHTML = 'Book Appointment';
                btn.disabled = false;
                this.reset();
            }, 1500);
        });
    }
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const email = this.querySelector('input[type="email"]').value;
            if (!email.includes('@')) {
                alert('Please enter a valid email');
                return;
            }

            alert('Subscribed successfully!');
            this.reset();
        });
    }

});
