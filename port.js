
document.addEventListener('DOMContentLoaded', () => {
            
            // --- 1. Custom Cursor Logic ---
            const cursorDot = document.getElementById('cursor-dot');
            const cursorRing = document.getElementById('cursor-ring');
            
            let mouseX = 0, mouseY = 0;
            let ringX = 0, ringY = 0;

            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
            });

            function animateCursor() {
                // Smooth Lerp for the ring
                ringX += (mouseX - ringX) * 0.15;
                ringY += (mouseY - ringY) * 0.15;
                
                cursorDot.style.left = `${mouseX}px`;
                cursorDot.style.top = `${mouseY}px`;
                cursorRing.style.left = `${ringX}px`;
                cursorRing.style.top = `${ringY}px`;

                requestAnimationFrame(animateCursor);
            }
            animateCursor();

            // Hover interactions
            const interactives = document.querySelectorAll('.hover-trigger');
            interactives.forEach(el => {
                el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
                el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
            });

            // --- 2. Mobile Menu Toggle ---
            const menuBtn = document.getElementById('menu-btn');
            const navMenu = document.getElementById('nav-menu');
            
            menuBtn.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });

            // Close menu when clicking a link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                });
            });

            // --- 3. Projects Injection ---
            const projects = [
                {
                    title: "Alumni Tracking System",
                    desc: "A full-stack platform to connect graduates. Built with MEAN Stack (MongoDB, Express, Angular, Node).",
                    tags: ["Angular", "Node.js", "MySQL"],
                    icon: "fas fa-user-graduate",
                    link: "https://github.com/m-panda-f/Alumni-Tracking-System"
                },
                {
                    title: "Eve's Guide",
                    desc: "Award-winning safety app for women featuring geolocation tracking, fake calls, and health tips.",
                    tags: ["Flutter", "Dart", "Firebase"],
                    icon: "fas fa-shield-alt",
                    link: "https://github.com/m-panda-f/EvesGuide"
                },
                {
                    title: "BRILNIX EdTech",
                    desc: "Interactive learning platform with AI concept verification and instant chatbot support.",
                    tags: ["AI", "Flutter", "API"],
                    icon: "fas fa-brain",
                    link: "https://github.com/m-panda-f/BRILNIX"
                },
                {
                    title: "Zoo-Management-System",
                    tags: ["Angular", "Node.js", "MySQL"],
                    icon: "fas fa-server", // New Tech Icon
                    desc: "A web-based application using Node.js and JavaScript, allowing access to detailed animal information and including an online ticket booking system (AngularJS frontend, Node.js/Express.js backend).",
                    link: "#"
                },
                {
                    title: "CGPA Calculator",
                    tags: ["HTML", "CSS", "JavaScript"],
                    icon: "fas fa-calculator", // New Tech Icon
                    desc: "A web-based application to calculate and visualize CGPA scores for VTU students, built with HTML, CSS, and JavaScript.",
                    link: "https://m-panda-f.github.io/VTUCGPA/"

                },
                {
                    title: "Choco Retail Manager",
                    desc: "Inventory and sales management system for a boutique chocolate store using Django.",
                    tags: ["Python", "Django", "SQL"],
                    icon: "fas fa-store",
                    link: "https://github.com/m-panda-f/Choco-Mohammed-Faizan-"
                },
                {
                    title: "Pandas-Weather",
                    desc: "A sleek weather app providing real-time updates and forecasts using React.js and WeatherAPI.",
                    tags: ["React.js", "Bootstrap", "WeatherAPI"],
                    icon: "fas fa-sun",
                    link: "https://pandas-weather.onrender.com/"
                }
            ];

            const container = document.getElementById('projects-container');
            
            projects.forEach(proj => {
                const tagsHtml = proj.tags.map(tag => `<span class="mini-tag">${tag}</span>`).join('');
                const html = `
                    <div class="project-card reveal hover-trigger">
                        <div class="project-img">
                            <i class="${proj.icon}"></i>
                        </div>
                        <div class="project-body">
                            <div class="project-tags">${tagsHtml}</div>
                            <h3 class="project-title">${proj.title}</h3>
                            <p class="project-desc">${proj.desc}</p>
                            <div class="project-footer">
                                <a href="${proj.link}" target="_blank" class="btn btn-outline" style="padding: 8px 20px; font-size: 0.8rem;">
                                    View Code <i class="fab fa-github" style="margin-left: 5px;"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                `;
                container.insertAdjacentHTML('beforeend', html);
            });

            // --- 4. Scroll Reveal Animation ---
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        });

        