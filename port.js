// AngularJS Application
angular.module('portfolioApp', [])
.controller('PortfolioCtrl', ['$scope', '$timeout', function($scope, $timeout) {
    // Initialize variables
    $scope.currentSection = 'home';
    $scope.darkMode = false;
    $scope.menuOpen = false;
    $scope.currentProjectIndex = 0;
    $scope.sending = false;
    $scope.messageSent = false;
    $scope.messageError = false;
    $scope.messageText = '';
    
    // Projects data
    $scope.projects = [
        {
            title: "Alumni-Tracking-System",
            description: "Developed a dynamic web-based application to manage and update the details of university graduates, providing them with daily updates on university events. Utilized Express.js and Node.js for a robust backend architecture, while leveraging AngularJS for a user-friendly and interactive frontend.",
            link: "https://github.com/m-panda-f/Alumni-Tracking-System"
        },
        {
            title: "Zoo-Management-System",
            description: "I developed a web-based application using Node.js and JavaScript. The app allows users to access detailed information about animals and includes an online ticket booking system for zoo visits. I used AngularJS for the frontend and Node.js and Express.js for the backend.",
            link: "#"
        },
        {
            title: "Eve's Guide",
            description: "It is a Mobile Application Based Project built with Flutter/Dart and Firebase which is specifically built with a concept for women's safety and their reproductive health. It comprises Safety Articles, Fake Caller, Medicine/pads Purchase facilities, period Tracker, and much more.",
            link: "https://github.com/m-panda-f/EvesGuide"
        },
        {
            title: "BRILNIX",
            description: "It is a Mobile Application Based Project built with Flutter/Dart and Firebase which is specifically built with a concept of digital education and skill enhancement for students. It comprises various features like the student can show their understanding of concepts or share knowledge on the platform with AI verification, social Community, Chatbot for instant help, and much more.",
            link: "https://github.com/m-panda-f/BRILNIX"
        }
    ];

    // Show section function
    $scope.showSection = function(section) {
        $scope.currentSection = section;
        // Scroll to top when changing sections
        window.scrollTo(0, 0);
    };

    $scope.setDarkMode = function() {
        $scope.darkMode = true;
        document.body.classList.add('dark-mode');
        document.querySelector('.theme-toggle').classList.add('dark-mode');
        localStorage.setItem('darkMode', 'true');
    };
    
    $scope.setLightMode = function() {
        $scope.darkMode = false;
        document.body.classList.remove('dark-mode');
        document.querySelector('.theme-toggle').classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'false');
    };
    
    // Check for saved theme preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
        $scope.setDarkMode();
    } else {
        $scope.setLightMode();
    }

    // Project navigation functions
    $scope.nextProject = function() {
        if ($scope.currentProjectIndex < $scope.projects.length - 1) {
            $scope.currentProjectIndex++;
        }
    };

    $scope.prevProject = function() {
        if ($scope.currentProjectIndex > 0) {
            $scope.currentProjectIndex--;
        }
    };

    // Initialize EmailJS
    emailjs.init('hecxcItnw-wJp3Wsy'); // Replace with your EmailJS user ID

    // Contact form submission
    $scope.sendEmail = function() {
        const form = document.getElementById('contact-form');
        $scope.sending = true;
        $scope.messageSent = false;
        $scope.messageError = false;

        emailjs.sendForm('service_i6f7mdu', 'template_3s0x4jm', form)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                $scope.messageSent = true;
                $scope.messageText = 'Message sent successfully!';
                form.reset();
            }, function(error) {
                console.log('FAILED...', error);
                $scope.messageError = true;
                $scope.messageText = 'Failed to send message. Please try again.';
            })
            .finally(function() {
                $scope.sending = false;
                $timeout(function() {
                    $scope.messageSent = false;
                    $scope.messageError = false;
                }, 5000);
            });
    };

    // Count-up animation directive
    angular.module('portfolioApp').directive('countUp', ['$timeout', function($timeout) {
        return {
            restrict: 'A',
            scope: {
                endVal: '@',
                duration: '@'
            },
            link: function(scope, element, attrs) {
                const endVal = parseInt(scope.endVal) || 0;
                const duration = parseInt(scope.duration) || 2;
                const frameDuration = 1000 / 60; // 60 fps
                const totalFrames = Math.round(duration * 1000 / frameDuration);
                const easeOutQuad = t => t * (2 - t);
                
                let frame = 0;
                const countTo = endVal;
                
                const counter = setInterval(() => {
                    frame++;
                    const progress = easeOutQuad(frame / totalFrames);
                    const currentCount = Math.round(countTo * progress);
                    
                    if (parseInt(element.text()) !== currentCount) {
                        element.text(currentCount);
                    }
                    
                    if (frame === totalFrames) {
                        clearInterval(counter);
                    }
                }, frameDuration);
            }
        };
    }]);

    // Initialize with light mode
    $scope.setLightMode();
}]);

// Close menu when clicking outside
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(event) {
        const nav = document.querySelector('#navb');
        const menuButton = document.getElementById('menu-button');
        
        if (!nav.contains(event.target) && event.target !== menuButton) {
            angular.element(document.querySelector('[ng-controller="PortfolioCtrl"]')).scope().menuOpen = false;
            angular.element(document.querySelector('[ng-controller="PortfolioCtrl"]')).scope().$apply();
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate__animated');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Run once on page load

// Typing animation
function setupTypingAnimation() {
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        const originalText = typingElement.textContent;
        const words = originalText.split(' ');
        typingElement.textContent = '';
        typingElement.style.borderRight = '2px solid ' + getComputedStyle(typingElement).getPropertyValue('--primary-color');

        let currentWordIndex = 0;
        let currentLine = '';
        const maxWordsPerLine = 12; // Average of 10-15
        const minWordsPerLine = 10;
        
        
        function typeNextWord() {
            if (currentWordIndex < words.length) {
                // Add current word to line
                currentLine += words[currentWordIndex] + ' ';
                currentWordIndex++;
                
                // Check if we should wrap to new line
                const shouldWrap = 
                    currentWordIndex === words.length || // Last word
                    (currentLine.split(' ').length > minWordsPerLine && 
                     (currentLine.length > 50 || // Rough character count check
                      Math.random() < 0.3 || // Random chance to wrap
                      currentLine.split(' ').length >= maxWordsPerLine));
                
                if (shouldWrap) {
                    typingElement.textContent += currentLine.trim() + '\n';
                    currentLine = '';
                }
                
                // Update displayed text
                typingElement.textContent = typingElement.textContent.split('\n').slice(0, -1).join('\n') + '\n' + currentLine;
                
                // Set timeout for next word (variable speed for more natural feel)
                const speed = 100 + Math.random() * 100; // Between 100-200ms
                setTimeout(typeNextWord, speed);
            } else {
                // Animation complete
                typingElement.textContent = originalText; // Ensure final text is perfect
                typingElement.style.borderRight = 'none';
            }
        }
        
        // Start the animation
        typeNextWord();
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setupTypingAnimation();
    
    // Set active nav link based on current section
    const navLinks = document.querySelectorAll('#navb ul li a');
    const sections = document.querySelectorAll('.section');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('ng-click').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});