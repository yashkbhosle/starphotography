// Mobile menu toggle
function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    const menuBtn = document.querySelector('.mobile-menu-btn');

    nav.classList.toggle('show-menu');
    menuBtn.classList.toggle('active');
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header background on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'white';
    } else {
        header.style.background = 'white';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.service-card, .testimonial-card, .stat-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Book Now button click handler
document.addEventListener('DOMContentLoaded', function() {
    const bookButtons = document.querySelectorAll('.hero-btn, .cta-button');
    
    bookButtons.forEach(button => {
        button.addEventListener('click', function() {
            // You can replace this with actual booking functionality
            alert('Thank you for your interest! Please call us at +1 4379720635 or emails to schedule your photo shoot.');
        });
    });
});

// Counter animation for stats
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toString().includes('+') ? target : target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toString();
        }
    }, 20);
}

// Initialize counter animation when stats section is visible
const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                if (text.includes('55,000+')) {
                    animateCounter(stat, 55000);
                } else if (text.includes('18+')) {
                    animateCounter(stat, 18);
                } else if (text.includes('1,000+')) {
                    animateCounter(stat, 1000);
                } else if (text.includes('24/7')) {
                    stat.textContent = '24/7';
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', function() {
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Form validation (if you add a contact form later)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#dc2626';
        } else {
            input.style.borderColor = '';
        }
    });
    
    return isValid;
}

// Pricing card hover effect
document.addEventListener('DOMContentLoaded', function() {
    const pricingCard = document.querySelector('.pricing-card');
    if (pricingCard) {
        pricingCard.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        pricingCard.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
});