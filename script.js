// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// Model Tabs Functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked button and corresponding pane
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
});

// Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all accordion items
            accordionItems.forEach(accItem => {
                accItem.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});

// Smooth Scrolling for Navigation Links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Navbar Background Change on Scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for Animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe all sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Observe cards and other elements
    const animatedElements = document.querySelectorAll('.model-card, .capability-card, .feature-item, .principle-card, .metric-card');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});

// Performance Metrics Counter Animation
document.addEventListener('DOMContentLoaded', function() {
    const metricValues = document.querySelectorAll('.metric-value');
    
    const animateCounter = (element, target, duration = 2000) => {
        let start = 0;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                if (element.textContent.includes('%')) {
                    element.textContent = start.toFixed(1) + '%';
                } else if (element.textContent.includes('M')) {
                    element.textContent = (start / 1000000).toFixed(1) + 'M+ tokens';
                } else {
                    element.textContent = start.toFixed(1);
                }
            }
        }, 16);
    };
    
    // Create intersection observer for metrics
    const metricsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const metricValue = entry.target;
                const text = metricValue.textContent;
                
                if (text.includes('90.0%')) {
                    animateCounter(metricValue, 90.0);
                } else if (text.includes('74.4%')) {
                    animateCounter(metricValue, 74.4);
                } else if (text.includes('94.4%')) {
                    animateCounter(metricValue, 94.4);
                } else if (text.includes('1M+')) {
                    animateCounter(metricValue, 1000000);
                }
                
                metricsObserver.unobserve(metricValue);
            }
        });
    }, { threshold: 0.5 });
    
    metricValues.forEach(metric => {
        metricsObserver.observe(metric);
    });
});

// Search Functionality (Placeholder)
document.addEventListener('DOMContentLoaded', function() {
    // This is a placeholder for future search functionality
    console.log('Search functionality ready for implementation');
});

// Copy to Clipboard Functionality (Optional Enhancement)
document.addEventListener('DOMContentLoaded', function() {
    // Add copy buttons to code snippets if they exist
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach(codeBlock => {
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-btn';
        copyButton.innerHTML = '<i class="fas fa-copy"></i>';
        copyButton.title = 'Copy to clipboard';
        
        copyButton.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(codeBlock.textContent);
                copyButton.innerHTML = '<i class="fas fa-check"></i>';
                copyButton.style.background = '#10b981';
                
                setTimeout(() => {
                    copyButton.innerHTML = '<i class="fas fa-copy"></i>';
                    copyButton.style.background = '';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
        });
        
        // Insert copy button before the code block
        codeBlock.parentNode.insertBefore(copyButton, codeBlock);
    });
});

// Enhanced Mobile Experience
document.addEventListener('DOMContentLoaded', function() {
    // Add touch gestures for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    document.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - could be used for navigation
                console.log('Swiped left');
            } else {
                // Swipe right - could be used for navigation
                console.log('Swiped right');
            }
        }
    }
    
    // Add loading states for better UX
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.contains('btn-primary')) {
                const originalText = this.textContent;
                this.textContent = 'Loading...';
                this.disabled = true;
                
                // Simulate loading (remove in production)
                setTimeout(() => {
                    this.textContent = originalText;
                    this.disabled = false;
                }, 2000);
            }
        });
    });
});

// Performance Optimization
document.addEventListener('DOMContentLoaded', function() {
    // Lazy load images if they exist
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    // Debounce scroll events for better performance
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        
        scrollTimeout = setTimeout(function() {
            // Handle scroll-based animations or effects here
        }, 16);
    });
});

// Accessibility Enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Add keyboard navigation for tabs
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
        button.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
        
        // Add ARIA attributes
        button.setAttribute('role', 'tab');
        button.setAttribute('aria-selected', 'false');
    });
    
    // Update ARIA attributes when tabs change
    const updateTabAria = (activeButton) => {
        tabButtons.forEach(btn => {
            btn.setAttribute('aria-selected', btn === activeButton);
        });
    };
    
    // Add focus management for accordion
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.setAttribute('tabindex', '0');
        header.setAttribute('role', 'button');
        header.setAttribute('aria-expanded', 'false');
        
        header.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Update ARIA attributes when accordion changes
    const updateAccordionAria = (activeItem) => {
        accordionHeaders.forEach(header => {
            const isActive = header.parentNode === activeItem;
            header.setAttribute('aria-expanded', isActive);
        });
    };
});

// Console Welcome Message
console.log(`
%cWelcome to Gemini AI Platform! 🚀
%c
%cThis is a professional showcase of Google's most capable AI model.
%cBuilt with modern web technologies and best practices.
%c
%cExplore the models, capabilities, and start building with Gemini!
%c
%cFor more information, visit: https://ai.google.dev/gemini
`,
'color: #6366f1; font-size: 20px; font-weight: bold;',
'',
'color: #666; font-size: 14px;',
'color: #666; font-size: 14px;',
'',
'color: #10b981; font-size: 16px; font-weight: bold;',
'',
'color: #6366f1; font-size: 12px;'
);

