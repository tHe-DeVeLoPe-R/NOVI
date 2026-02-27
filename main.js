// ============================================
// NOVI Jewelry - Main JavaScript
// Core functionality and interactions
// ============================================

// DOM Ready
document.addEventListener('DOMContentLoaded', function () {
    initNavigation();
    initScrollEffects();
    initRevealAnimations();
    initForms();
    updateCartCount();
});

// ============================================
// Navigation
// ============================================
function initNavigation() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const header = document.querySelector('.header');

    // Mobile menu toggle
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function () {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking nav links
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Header scroll effect
    if (header) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Set active nav link based on current page
    setActiveNavLink();
}

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// ============================================
// Scroll Effects
// ============================================
function initScrollEffects() {
    // Smooth scroll for anchor links
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
}

// ============================================
// Reveal Animations (Intersection Observer)
// ============================================
function initRevealAnimations() {
    const reveals = document.querySelectorAll('.reveal');

    if (reveals.length === 0) return;

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });
}

// ============================================
// Form Validation
// ============================================
function initForms() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            if (validateForm(this)) {
                handleFormSubmit(this);
            }
        });

        // Real-time validation
        const inputs = form.querySelectorAll('.form-input, .form-textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function () {
                validateField(this);
            });
        });
    });
}

function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('.form-input, .form-textarea');

    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });

    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    const type = field.type;
    const required = field.hasAttribute('required');
    let errorMessage = '';

    // Remove existing error
    const existingError = field.parentElement.querySelector('.form-error');
    if (existingError) {
        existingError.remove();
    }
    field.classList.remove('error');

    // Required check
    if (required && !value) {
        errorMessage = 'This field is required';
    }
    // Email validation
    else if (type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            errorMessage = 'Please enter a valid email address';
        }
    }
    // Password validation
    else if (type === 'password' && value && value.length < 6) {
        errorMessage = 'Password must be at least 6 characters';
    }
    // Phone validation
    else if (field.name === 'phone' && value) {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(value) || value.replace(/\D/g, '').length < 10) {
            errorMessage = 'Please enter a valid phone number';
        }
    }

    if (errorMessage) {
        showFieldError(field, errorMessage);
        return false;
    }

    return true;
}

function showFieldError(field, message) {
    field.classList.add('error');
    const error = document.createElement('div');
    error.className = 'form-error';
    error.textContent = message;
    field.parentElement.appendChild(error);
}

function handleFormSubmit(form) {
    const formId = form.id;

    // Simulate form submission
    showNotification('Form submitted successfully!');

    // Handle specific forms
    if (formId === 'signup-form') {
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1500);
    } else if (formId === 'login-form') {
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    } else if (formId === 'contact-form') {
        form.reset();
    }
}

// ============================================
// Modal Functions
// ============================================
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close modal on backdrop click
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('modal-backdrop')) {
        closeModal(e.target.id);
    }
});

// Close modal on Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        const activeModal = document.querySelector('.modal-backdrop.active');
        if (activeModal) {
            closeModal(activeModal.id);
        }
    }
});

// ============================================
// Filter & Sort Functions
// ============================================
function initFilters() {
    const categoryFilter = document.getElementById('category-filter');
    const sortFilter = document.getElementById('sort-filter');
    const priceFilter = document.getElementById('price-filter');

    if (categoryFilter) {
        categoryFilter.addEventListener('change', applyFilters);
    }

    if (sortFilter) {
        sortFilter.addEventListener('change', applyFilters);
    }

    if (priceFilter) {
        priceFilter.addEventListener('change', applyFilters);
    }
}

function applyFilters() {
    const category = document.getElementById('category-filter')?.value || 'all';
    const sortBy = document.getElementById('sort-filter')?.value || 'newest';
    const priceRange = getPriceRange();

    const currentCategory = getCurrentCategory();
    let products = getProductsByCategory(currentCategory);

    const filters = {
        category: category,
        sortBy: sortBy,
        priceRange: priceRange
    };

    const filtered = filterProducts(products, filters);
    renderProducts(filtered, 'products-grid');
}

function getPriceRange() {
    const priceFilter = document.getElementById('price-filter');
    if (!priceFilter) return null;

    const value = priceFilter.value;
    const ranges = {
        'under-100': [0, 100],
        '100-300': [100, 300],
        '300-500': [300, 500],
        'over-500': [500, 10000]
    };

    return ranges[value] || null;
}

function getCurrentCategory() {
    const path = window.location.pathname;
    if (path.includes('men.html')) return 'men';
    if (path.includes('women.html')) return 'women';
    if (path.includes('unisex.html')) return 'unisex';
    return 'all';
}

// ============================================
// FAQ Accordion
// ============================================
function initAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const item = this.parentElement;
            const isActive = item.classList.contains('active');

            // Close all accordions
            document.querySelectorAll('.accordion-item').forEach(i => {
                i.classList.remove('active');
            });

            // Open clicked accordion if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// ============================================
// Newsletter Subscription
// ============================================
function subscribeNewsletter(email) {
    if (!email || !email.includes('@')) {
        showNotification('Please enter a valid email address');
        return;
    }

    showNotification('Thank you for subscribing to our newsletter!');

    // Clear the input
    const newsletterInput = document.querySelector('.newsletter-input');
    if (newsletterInput) {
        newsletterInput.value = '';
    }
}

// ============================================
// Utility Functions
// ============================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================================
// Initialize page-specific functions
// ============================================
window.addEventListener('load', function () {
    // Initialize filters if on product pages
    if (document.getElementById('products-grid')) {
        initFilters();
    }

    // Initialize accordion if on help page
    if (document.querySelector('.accordion-item')) {
        initAccordion();
    }
});
