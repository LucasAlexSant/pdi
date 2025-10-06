// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    initializeProgressBars();
    initializeEditableElements();
    initializeTechCounter();
});

// Initialize progress bars animation
function initializeProgressBars() {
    const progressBars = document.querySelectorAll('.skill-progress, .stat-progress');
    progressBars.forEach(bar => {
        const targetWidth = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 500);
    });
}

// Initialize editable elements
function initializeEditableElements() {
    document.querySelectorAll('.editable').forEach(element => {
        element.addEventListener('blur', function() {
            console.log('Content updated:', this.textContent);
            // Here you could add logic to save changes
            showSaveIndicator();
        });
        
        // Add focus/blur effects
        element.addEventListener('focus', function() {
            this.style.borderBottomColor = '#FF4E08';
        });
        
        element.addEventListener('blur', function() {
            this.style.borderBottomColor = 'transparent';
        });
    });
}

// Show save indicator (visual feedback)
function showSaveIndicator() {
    // Create a temporary save indicator
    const indicator = document.createElement('div');
    indicator.textContent = '✓ Salvo automaticamente';
    indicator.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #27ae60;
        color: white;
        padding: 10px 15px;
        border-radius: 5px;
        font-size: 0.9rem;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(indicator);
    
    // Remove after 2 seconds
    setTimeout(() => {
        indicator.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(indicator);
        }, 300);
    }, 2000);
}

// Popover functions
function openPopover(learningId) {
    const popover = document.getElementById(`popover-${learningId}`);
    if (popover) {
        popover.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Add escape key listener
        document.addEventListener('keydown', handleEscapeKey);
    }
}

function closePopover(learningId) {
    const popover = document.getElementById(`popover-${learningId}`);
    if (popover) {
        popover.classList.remove('active');
        document.body.style.overflow = 'auto';
        
        // Remove escape key listener
        document.removeEventListener('keydown', handleEscapeKey);
    }
}

// Badge carousel functions
function scrollCarousel(direction) {
    const carousel = document.getElementById('badgesCarousel');
    if (carousel) {
        const scrollAmount = 200;
        carousel.scrollBy({
            left: direction * scrollAmount,
            behavior: 'smooth'
        });
    }
}

function openBadgeDetail(badgeId) {
    const modalId = `badge-modal-${badgeId.slice(-1)}`;
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Add escape key listener
        document.addEventListener('keydown', handleEscapeKey);
    }
}

function closeBadgeModal() {
    document.querySelectorAll('.badge-modal').forEach(modal => {
        modal.classList.remove('active');
    });
    document.body.style.overflow = 'auto';
    
    // Remove escape key listener
    document.removeEventListener('keydown', handleEscapeKey);
}

// Handle escape key for closing modals
function handleEscapeKey(event) {
    if (event.key === 'Escape') {
        // Close any open popovers
        document.querySelectorAll('.popover.active').forEach(popover => {
            popover.classList.remove('active');
        });
        
        // Close any open badge modals
        document.querySelectorAll('.badge-modal.active').forEach(modal => {
            modal.classList.remove('active');
        });
        
        document.body.style.overflow = 'auto';
        document.removeEventListener('keydown', handleEscapeKey);
    }
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    // Close popovers when clicking outside
    if (event.target.classList.contains('popover')) {
        event.target.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    // Close badge modals when clicking outside
    if (event.target.classList.contains('badge-modal')) {
        event.target.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Technology counter function
function initializeTechCounter() {
    const techCounts = {};
    document.querySelectorAll('.tech-tag').forEach(tag => {
        const tech = tag.getAttribute('data-tech') || tag.textContent.trim();
        if (tech) {
            techCounts[tech] = (techCounts[tech] || 0) + 1;
        }
    });
    
    console.log('Technology usage count:', techCounts);
    return techCounts;
}

// Update tech statistics dynamically
function updateTechStatistics() {
    const techCounts = initializeTechCounter();
    
    // Find the most used technologies
    const sortedTechs = Object.entries(techCounts)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 5);
    
    console.log('Top 5 most used technologies:', sortedTechs);
    return sortedTechs;
}

// Smooth scrolling for internal links
function smoothScrollTo(targetId) {
    const target = document.getElementById(targetId);
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add loading animation to progress bars
function animateProgressBars() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.skill-progress, .stat-progress');
                if (progressBar) {
                    const targetWidth = progressBar.dataset.width || progressBar.style.width;
                    progressBar.style.width = '0%';
                    setTimeout(() => {
                        progressBar.style.width = targetWidth;
                    }, 200);
                }
            }
        });
    }, {
        threshold: 0.5
    });
    
    // Observe all stat cards and skill categories
    document.querySelectorAll('.stat-card, .skill-category').forEach(card => {
        observer.observe(card);
    });
}

// Initialize intersection observer for animations
function initializeAnimations() {
    animateProgressBars();
    
    // Add entrance animations for cards
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Apply to various card elements
    const cardSelectors = [
        '.timeline-item',
        '.stat-card',
        '.learning-card',
        '.goal-card',
        '.feedback-card',
        '.strength-item',
        '.improvement-item'
    ];
    
    cardSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(element);
        });
    });
}

// Badge carousel auto-scroll (optional)
function initializeCarouselAutoScroll() {
    const carousel = document.getElementById('badgesCarousel');
    if (carousel && carousel.children.length > 3) {
        let currentIndex = 0;
        const totalItems = carousel.children.length;
        
        // Auto-scroll every 5 seconds
        setInterval(() => {
            currentIndex = (currentIndex + 1) % totalItems;
            const scrollLeft = currentIndex * 170; // Adjust based on badge width
            carousel.scrollTo({
                left: scrollLeft,
                behavior: 'smooth'
            });
        }, 5000);
    }
}

// Export data functionality (for future use)
function exportPDIData() {
    const pdiData = {
        profile: {
            name: document.querySelector('.profile-name').textContent,
            position: document.querySelector('.detail-row:nth-child(1) .editable').textContent,
            squad: document.querySelector('.detail-row:nth-child(2) .editable').textContent,
            community: document.querySelector('.detail-row:nth-child(3) .editable').textContent,
            period: document.querySelector('.detail-row:nth-child(4) .editable').textContent
        },
        biography: document.querySelector('.biography-content').textContent,
        strengths: Array.from(document.querySelectorAll('.strength-item')).map(item => ({
            title: item.querySelector('strong').textContent,
            description: item.querySelector('p').textContent
        })),
        improvements: Array.from(document.querySelectorAll('.improvement-item')).map(item => ({
            title: item.querySelector('strong').textContent,
            description: item.querySelector('p').textContent
        })),
        projects: Array.from(document.querySelectorAll('.timeline-item')).map(item => ({
            title: item.querySelector('h3').textContent,
            description: item.querySelector('p').textContent,
            date: item.querySelector('.date').textContent,
            technologies: Array.from(item.querySelectorAll('.tech-tag')).map(tag => tag.textContent)
        })),
        goals: Array.from(document.querySelectorAll('.goal-card')).map(card => ({
            priority: card.querySelector('.priority').textContent,
            title: card.querySelector('h3').textContent,
            description: card.querySelector('p').textContent
        }))
    };
    
    console.log('PDI Data:', pdiData);
    return pdiData;
}

// Print functionality
function printPDI() {
    // Hide interactive elements before printing
    const interactiveElements = document.querySelectorAll('.carousel-controls, .close-btn, .card-arrow');
    interactiveElements.forEach(el => el.style.display = 'none');
    
    window.print();
    
    // Restore interactive elements after printing
    setTimeout(() => {
        interactiveElements.forEach(el => el.style.display = '');
    }, 1000);
}

// Initialize all features when page loads
window.addEventListener('load', function() {
    initializeAnimations();
    // Uncomment the line below if you want auto-scrolling carousel
    // initializeCarouselAutoScroll();
    
    console.log('PDI System initialized successfully');
});

// Utility function to format dates
function formatDate(date) {
    return new Intl.DateTimeFormat('pt-BR', {
        year: 'numeric',
        month: 'long'
    }).format(new Date(date));
}

// Add keyboard navigation for carousel
document.addEventListener('keydown', function(event) {
    if (event.target.closest('.badges-carousel-container')) {
        if (event.key === 'ArrowLeft') {
            scrollCarousel(-1);
            event.preventDefault();
        } else if (event.key === 'ArrowRight') {
            scrollCarousel(1);
            event.preventDefault();
        }
    }
});

// Add touch/swipe support for mobile carousel
let startX = 0;
let scrollLeft = 0;

document.addEventListener('touchstart', function(e) {
    if (e.target.closest('.badges-carousel')) {
        startX = e.touches[0].pageX;
        scrollLeft = e.target.closest('.badges-carousel').scrollLeft;
    }
});

document.addEventListener('touchmove', function(e) {
    if (e.target.closest('.badges-carousel')) {
        const x = e.touches[0].pageX;
        const walk = (x - startX) * 2;
        e.target.closest('.badges-carousel').scrollLeft = scrollLeft - walk;
        e.preventDefault();
    }
});