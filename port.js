document.addEventListener('DOMContentLoaded', () => {
    // --- Project Data (Updated with Tech Icons) ---
    const projects = [
        {
            title: "Alumni-Tracking-System",
            icon: "fas fa-network-wired", // New Tech Icon
            description: "Developed a dynamic web-based application to manage and update the details of university graduates. Utilized Express.js, Node.js, and AngularJS for a robust and interactive solution.",
            link: "https://github.com/m-panda-f/Alumni-Tracking-System"
        },
        {
            title: "Zoo-Management-System",
            icon: "fas fa-server", // New Tech Icon
            description: "A web-based application using Node.js and JavaScript, allowing access to detailed animal information and including an online ticket booking system (AngularJS frontend, Node.js/Express.js backend).",
            link: "#"
        },
        {
            title: "Eve's Guide",
            icon: "fas fa-shield-alt", // New Tech Icon
            description: "Mobile Application (Flutter/Dart & Firebase) focused on women's safety and reproductive health, featuring safety articles, fake caller, period tracker, and more.",
            link: "https://github.com/m-panda-f/EvesGuide"
        },
        {
            title: "BRILNIX",
            icon: "fas fa-brain", // New Tech Icon (AI/Learning)
            description: "Mobile Application (Flutter/Dart & Firebase) for digital education and skill enhancement, including AI verification of concepts, a social community, and an instant help Chatbot.",
            link: "https://github.com/m-panda-f/BRILNIX"
        },
        {
            title: "CGPA Calculator",
            icon: "fas fa-calculator", // New Tech Icon
            description: "A web-based application to calculate and visualize CGPA scores forVTU students, built with HTML, CSS, and JavaScript.",
            link: "https://m-panda-f.github.io/VTUCGPA/"
        },
        {
            title: "Chocolate-House-Retail-Management-System",
            icon: "fas fa-store-alt", // New Tech Icon
            description: "A Django-powered retail management system for a chocolate house, featuring ingredient inventory tracking, seasonal flavor management, and a dedicated customer feedback module.",
            link: "https://github.com/m-panda-f/Choco-Mohammed-Faizan-"
        }
    ];

    // --- DOM Elements ---
    const body = document.getElementById('body');
    const themeSwitch = document.getElementById('theme-switch');
    const menuButton = document.getElementById('menu-button');
    const navLinks = document.getElementById('nav-links');
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    const submitBtn = document.getElementById('submit-btn');
    const navbar = document.getElementById('navbar');


    // --- 1. Theme Toggle Logic (Ensure it defaults to dark) ---
    // Check for explicit 'light-mode' in local storage, otherwise use dark.
    const isLightMode = localStorage.getItem('lightMode') === 'true';

    if (isLightMode) {
        body.classList.add('light-mode');
        themeSwitch.checked = true;
    } else {
        body.classList.remove('light-mode');
        themeSwitch.checked = false;
    }

    themeSwitch.addEventListener('change', () => {
        body.classList.toggle('light-mode');
        localStorage.setItem('lightMode', body.classList.contains('light-mode'));
    });
    
    // --- 2. Mobile Menu Toggle ---
    menuButton.addEventListener('click', () => {
        const hamburger = menuButton.querySelector('.hamburger');
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuButton.querySelector('.hamburger').classList.remove('active');
        });
    });

    // --- 3. Dynamic Project Card Creation ---
    const projectsContainer = document.querySelector('.projects-container');
    projects.forEach(project => {
        const cardHTML = `
            <div class="project-card">
                <i class="${project.icon}"></i>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank" class="project-link">View Project</a>
            </div>
        `;
        projectsContainer.insertAdjacentHTML('beforeend', cardHTML);
    });

    // --- 4. Intersection Observer for Animations/Active State ---
    const sections = document.querySelectorAll('.section');
    const navLinksA = document.querySelectorAll('#nav-links a');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3 
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            const sectionId = entry.target.id;
            const navLink = document.querySelector(`#nav-links a[href="#${sectionId}"]`);

            if (entry.isIntersecting) {
                // Activate section visibility class
                entry.target.classList.add('active');
                
                // Add Entrance Animations on Scroll
                const elementsToAnimate = entry.target.querySelectorAll('.animate__animated');
                elementsToAnimate.forEach(el => el.classList.remove('animate__animated', 'animate__fadeInLeft', 'animate__fadeInRight', 'animate__fadeInUp'));
                setTimeout(() => {
                    if (sectionId === 'home') {
                        entry.target.querySelector('.home-text').classList.add('animate__animated', 'animate__fadeInLeft');
                        entry.target.querySelector('.home-image').classList.add('animate__animated', 'animate__fadeInRight');
                    } else if (sectionId === 'about') {
                        entry.target.querySelectorAll('.animate__animated').forEach(el => el.classList.add('animate__animated', 'animate__fadeInUp'));
                        startCountUp(entry.target);
                    } else if (sectionId === 'contact') {
                        entry.target.querySelector('#contact-form').classList.add('animate__animated', 'animate__fadeInLeft');
                        entry.target.querySelector('.contact-info').classList.add('animate__animated', 'animate__fadeInRight');
                    }
                    // Projects cards animate__fadeInUp is applied in CSS via card, so we'll skip complex JS there.
                }, 100); 

                // Set active nav link
                navLinksA.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
                
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // --- 5. Count-Up Animation Logic ---
    function startCountUp(section) {
        section.querySelectorAll('.stat-number').forEach(stat => {
            if (stat.hasAttribute('data-counted')) return;

            const target = parseInt(stat.getAttribute('data-target'));
            const suffix = stat.getAttribute('data-suffix') || '';
            let current = 0;
            const duration = 2000; 
            const startTime = performance.now();

            const step = (timestamp) => {
                const elapsed = timestamp - startTime;
                const progress = Math.min(elapsed / duration, 1);
                current = Math.floor(progress * target);
                stat.textContent = current + suffix;

                if (progress < 1) {
                    window.requestAnimationFrame(step);
                } else {
                    stat.setAttribute('data-counted', 'true');
                }
            };
            
            window.requestAnimationFrame(step);
        });
    }
    
    // --- 6. Contact Form Submission (using EmailJS) ---
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        submitBtn.disabled = true;
        submitBtn.querySelector('span').textContent = 'Sending...';

        // Placeholder for EmailJS keys. User must replace these.
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
            .then(function() {
                formMessage.textContent = 'Message sent successfully! Access granted.';
                formMessage.className = 'form-message success';
                formMessage.style.display = 'block';
                form.reset();
            }, function(error) {
                formMessage.textContent = `Error: Connection terminated. Failed to send message.`;
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.querySelector('span').textContent = 'Send Message';
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000); 
            });
    });
});