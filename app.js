// IDP Study Abroad Website JavaScript - Fixed Version

// Destination data based on provided JSON
const destinationsData = {
  "Australia": {
    name: "Study Abroad in Australia",
    shortDesc: "World-class education with vibrant lifestyle and excellent post-study opportunities",
    tuitionRange: "₹18L - ₹35L per year",
    livingCost: "₹9L - ₹14L per year",
    workHours: "48 hours per fortnight",
    postStudyVisa: "2-4 years",
    highlights: ["Go8 universities", "High quality of life", "Strong job prospects", "Post-study work visa"]
  },
  "Canada": {
    name: "Study Abroad in Canada",
    shortDesc: "Safe, multicultural environment with clear pathways to permanent residency",
    tuitionRange: "₹12L - ₹30L per year",
    livingCost: "₹8L - ₹12L per year",
    workHours: "20 hours per week",
    postStudyVisa: "Up to 3 years",
    highlights: ["PGWP program", "Multicultural society", "High safety", "PR pathways"]
  },
  "Ireland": {
    name: "Study Abroad in Ireland",
    shortDesc: "English-speaking European education hub with strong tech industry presence",
    tuitionRange: "₹12L - ₹30L per year",
    livingCost: "₹8L - ₹12L per year",
    workHours: "20 hours per week",
    postStudyVisa: "2 years",
    highlights: ["English speaking", "Tech companies", "EU access", "Friendly culture"]
  },
  "New Zealand": {
    name: "Study Abroad in New Zealand",
    shortDesc: "High-quality education in a stunning natural environment with friendly culture",
    tuitionRange: "₹15L - ₹28L per year",
    livingCost: "₹7L - ₹11L per year",
    workHours: "20 hours per week",
    postStudyVisa: "3 years",
    highlights: ["Natural beauty", "Quality education", "Safe environment", "Work opportunities"]
  },
  "United Kingdom": {
    name: "Study Abroad in the UK",
    shortDesc: "Historic universities and world-renowned education with rich cultural heritage",
    tuitionRange: "₹15L - ₹35L per year",
    livingCost: "₹10L - ₹15L per year",
    workHours: "20 hours per week",
    postStudyVisa: "2 years",
    highlights: ["Russell Group", "1-year masters", "Rich history", "Global recognition"]
  },
  "United States": {
    name: "Study Abroad in the USA",
    shortDesc: "Top-ranked universities and innovative research opportunities across diverse states",
    tuitionRange: "₹25L - ₹50L per year",
    livingCost: "₹12L - ₹20L per year",
    workHours: "20 hours per week",
    postStudyVisa: "1-3 years (OPT)",
    highlights: ["Ivy League schools", "Research opportunities", "STEM OPT", "Diverse culture"]
  }
};

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('IDP website loaded, initializing...');
  
  initializeNavigation();
  initializeDestinationCards();
  initializeModal();
  initializeFAQ();
  initializeButtons();
  initializeSmoothScrolling();
  initializeScrollEffects();
  initializeAnimations();
});

// Navigation functionality
function initializeNavigation() {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      
      // Animate hamburger menu
      const spans = navToggle.querySelectorAll('span');
      spans.forEach((span, index) => {
        if (navMenu.classList.contains('active')) {
          if (index === 0) span.style.transform = 'rotate(-45deg) translate(-5px, 6px)';
          if (index === 1) span.style.opacity = '0';
          if (index === 2) span.style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
          span.style.transform = 'none';
          span.style.opacity = '1';
        }
      });
    });

    // Close mobile menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        
        // Close mobile menu
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans.forEach(span => {
          span.style.transform = 'none';
          span.style.opacity = '1';
        });
        
        // Navigate to section
        if (href && href.startsWith('#')) {
          scrollToSection(href);
        }
      });
    });
  }
}

// Destination cards functionality
function initializeDestinationCards() {
  const destinationCards = document.querySelectorAll('.destination-card');
  
  destinationCards.forEach(card => {
    const learnMoreBtn = card.querySelector('.destination-btn');
    const country = card.getAttribute('data-country');
    
    // Add click event to both card and button
    const clickHandler = function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('Opening modal for:', country);
      openDestinationModal(country);
    };
    
    if (card) {
      card.addEventListener('click', clickHandler);
      card.style.cursor = 'pointer';
    }
    
    if (learnMoreBtn) {
      learnMoreBtn.addEventListener('click', clickHandler);
    }
  });
}

// Modal functionality
function initializeModal() {
  const destinationModal = document.getElementById('destinationModal');
  const modalClose = document.querySelector('.modal-close');
  const modalOverlay = document.querySelector('.modal-overlay');
  
  if (modalClose) {
    modalClose.addEventListener('click', closeDestinationModal);
  }
  
  if (modalOverlay) {
    modalOverlay.addEventListener('click', closeDestinationModal);
  }

  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && destinationModal && !destinationModal.classList.contains('hidden')) {
      closeDestinationModal();
    }
  });
}

// Open destination modal
function openDestinationModal(country) {
  const data = destinationsData[country];
  const destinationModal = document.getElementById('destinationModal');
  
  if (!data || !destinationModal) {
    console.error('Modal data or element not found', { country, data, destinationModal });
    return;
  }

  console.log('Opening modal with data:', data);

  // Populate modal content
  const modalTitle = document.getElementById('modalTitle');
  const modalTuition = document.getElementById('modalTuition');
  const modalLiving = document.getElementById('modalLiving');
  const modalWork = document.getElementById('modalWork');
  const modalVisa = document.getElementById('modalVisa');
  const highlightsContainer = document.getElementById('modalHighlights');

  if (modalTitle) modalTitle.textContent = data.name;
  if (modalTuition) modalTuition.textContent = data.tuitionRange;
  if (modalLiving) modalLiving.textContent = data.livingCost;
  if (modalWork) modalWork.textContent = data.workHours;
  if (modalVisa) modalVisa.textContent = data.postStudyVisa;

  // Populate highlights
  if (highlightsContainer) {
    highlightsContainer.innerHTML = data.highlights
      .map(highlight => `<span class="highlight-tag">${highlight}</span>`)
      .join('');
  }

  // Show modal
  destinationModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  // Animate modal entrance
  const modalContent = destinationModal.querySelector('.modal-content');
  if (modalContent) {
    modalContent.style.transform = 'scale(0.7)';
    modalContent.style.opacity = '0';
    
    setTimeout(() => {
      modalContent.style.transform = 'scale(1)';
      modalContent.style.opacity = '1';
      modalContent.style.transition = 'all 0.3s ease';
    }, 50);
  }
}

// Close destination modal
function closeDestinationModal() {
  const destinationModal = document.getElementById('destinationModal');
  if (!destinationModal) return;
  
  const modalContent = destinationModal.querySelector('.modal-content');
  if (modalContent) {
    modalContent.style.transform = 'scale(0.7)';
    modalContent.style.opacity = '0';
  }
  
  setTimeout(() => {
    destinationModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }, 200);
}

// FAQ functionality - FIXED
function initializeFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    if (question && answer) {
      question.addEventListener('click', function(e) {
        e.preventDefault();
        const isActive = item.classList.contains('active');
        
        // Close all other FAQ items
        faqItems.forEach(otherItem => {
          otherItem.classList.remove('active');
          const otherAnswer = otherItem.querySelector('.faq-answer');
          if (otherAnswer) {
            otherAnswer.style.maxHeight = '0';
            otherAnswer.style.padding = '0 var(--space-20)';
          }
        });
        
        // Toggle current item
        if (!isActive) {
          item.classList.add('active');
          answer.style.maxHeight = '200px';
          answer.style.padding = 'var(--space-20)';
        } else {
          item.classList.remove('active');
          answer.style.maxHeight = '0';
          answer.style.padding = '0 var(--space-20)';
        }
      });
    }
  });
}

// Initialize all buttons with click effects - FIXED
function initializeButtons() {
  // Navigation "Get Free Counselling" button
  const navAdviceBtn = document.querySelector('.nav-menu .btn--primary');
  if (navAdviceBtn) {
    navAdviceBtn.addEventListener('click', function(e) {
      e.preventDefault();
      showNotification('Thank you for your interest! Our counselors will contact you soon.', 'success');
    });
  }

  // Hero CTA button
  const heroCTA = document.querySelector('.hero-cta');
  if (heroCTA) {
    heroCTA.addEventListener('click', function(e) {
      e.preventDefault();
      scrollToSection('#destinations');
    });
  }

  // Scholarship button
  const scholarshipBtn = document.querySelector('.scholarship-btn');
  if (scholarshipBtn) {
    scholarshipBtn.addEventListener('click', function(e) {
      e.preventDefault();
      showNotification('Scholarship application process will be available soon! Contact our counselors for more details.', 'info');
    });
  }

  // Service buttons
  const serviceButtons = document.querySelectorAll('.service-card .btn');
  serviceButtons.forEach((btn, index) => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      if (index === 0) {
        showNotification('Personalization quiz coming soon! Our counselors can help you decide now.', 'info');
      } else {
        showNotification('Cost calculator will be available soon! Contact us for a detailed cost breakdown.', 'info');
      }
    });
  });

  // Modal CTA button
  const modalCTA = document.getElementById('modalCTA');
  if (modalCTA) {
    modalCTA.addEventListener('click', function(e) {
      e.preventDefault();
      closeDestinationModal();
      setTimeout(() => {
        showNotification('Great choice! Our expert counselors will help you with your application.', 'success');
      }, 300);
    });
  }

  // Article cards
  const articleCards = document.querySelectorAll('.article-card');
  articleCards.forEach((card, index) => {
    card.addEventListener('click', function(e) {
      e.preventDefault();
      const title = this.querySelector('h4').textContent;
      showNotification(`Reading: ${title.substring(0, 50)}...`, 'info');
    });
  });

  // Question items in ASK IDP section
  const questionItems = document.querySelectorAll('.question-item');
  questionItems.forEach((item, index) => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const question = this.textContent;
      showNotification(`Great question! Our counselors will answer: "${question.substring(0, 50)}..."`, 'info');
    });
  });
}

// Smooth scrolling for navigation links - FIXED
function initializeSmoothScrolling() {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        scrollToSection(targetId);
      }
    });
  });
}

// Utility function to scroll to a section - FIXED
function scrollToSection(selector) {
  const section = document.querySelector(selector);
  if (section) {
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 70;
    const targetPosition = section.offsetTop - navbarHeight - 20;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  } else {
    console.log('Section not found:', selector);
  }
}

// Show notification function
function showNotification(message, type = 'info') {
  // Remove existing notification
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) {
    existingNotification.remove();
  }

  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  
  let bgColor;
  switch(type) {
    case 'success':
      bgColor = '#10b981';
      break;
    case 'error':
      bgColor = '#ef4444';
      break;
    case 'info':
    default:
      bgColor = '#1a365d';
      break;
  }
  
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: ${bgColor};
    color: white;
    padding: 16px 24px;
    border-radius: 8px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
    z-index: 9999;
    max-width: 400px;
    font-weight: 500;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    line-height: 1.4;
    font-size: 14px;
  `;
  
  notification.textContent = message;
  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);

  // Auto remove after 4 seconds
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 300);
  }, 4000);
}

// Add scroll effects for navbar
function initializeScrollEffects() {
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
      if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
        navbar.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.15)';
      } else {
        navbar.style.background = '#ffffff';
        navbar.style.backdropFilter = 'none';
        navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
      }
    }
  });
}

// Add loading animations for elements
function initializeAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const elementObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 100);
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animatedElements = document.querySelectorAll('.destination-card, .service-card, .benefit-item, .program-item, .article-card, .faq-item, .question-item');
  
  animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.6s ease';
    elementObserver.observe(element);
  });

  // Stagger animation for scholarship highlight
  const scholarshipHighlight = document.querySelector('.scholarship-highlight');
  if (scholarshipHighlight) {
    scholarshipHighlight.style.opacity = '0';
    scholarshipHighlight.style.transform = 'translateY(40px)';
    scholarshipHighlight.style.transition = 'all 0.8s ease';
    elementObserver.observe(scholarshipHighlight);
  }
}

// Add interactive features without persistent blue circles
document.addEventListener('DOMContentLoaded', function() {
  // Add hover effect to program items
  const programItems = document.querySelectorAll('.program-item');
  programItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-4px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
    
    // Add click handler for program items
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const programName = this.textContent;
      showNotification(`Learn more about ${programName} programs. Contact our counselors for details!`, 'info');
    });
  });

  // Add click feedback to interactive elements (without persistent effects)
  const interactiveElements = document.querySelectorAll('button, .destination-card, .article-card, .question-item');
  interactiveElements.forEach(element => {
    element.addEventListener('mousedown', function() {
      this.style.transform = 'scale(0.98)';
    });
    
    element.addEventListener('mouseup', function() {
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 100);
    });
    
    element.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });
});

// Console log for debugging
console.log('IDP Study Abroad website fully loaded and interactive!');