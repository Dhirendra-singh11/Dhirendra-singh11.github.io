// Fade-in on page load
window.addEventListener('load', function() {
    // Fade in the entire body first
    document.body.classList.add('loaded');
    
    // Then fade in individual sections with staggered delay
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.classList.add('fade-in');
        setTimeout(() => {
            section.classList.add('visible');
        }, index * 200); // Stagger the animation
    });
    
    // Fade in navigation
    const nav = document.querySelector('nav');
    nav.classList.add('fade-in', 'visible');
    
    // Fade in footer
    const footer = document.querySelector('footer');
    footer.classList.add('fade-in');
    setTimeout(() => {
        footer.classList.add('visible');
    }, 800);
});

// Progress Bar
window.addEventListener('scroll', () => {
    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
    const currentProgress = (window.pageYOffset / totalScroll) * 100;
    document.getElementById('progressBar').style.transform = `scaleX(${currentProgress / 100})`;
});

// Mobile Menu Toggle
document.getElementById('mobileMenuButton').addEventListener('click', () => {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('open');
    
    // Change icon
    const icon = document.querySelector('#mobileMenuButton i');
    if (mobileMenu.classList.contains('open')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Scroll to Section
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu.classList.contains('open')) {
            mobileMenu.classList.remove('open');
            const icon = document.querySelector('#mobileMenuButton i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }
}

// Scroll Achievements
function scrollAchievements(direction) {
    const container = document.getElementById('achievementsContainer');
    const scrollAmount = 350;
    
    if (container) {
        container.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    }
}

// Theme Toggle
  document.addEventListener("DOMContentLoaded", () => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.body.classList.add("dark");
    }
  });

document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    
    // Change icon
    const icon = document.querySelector('#themeToggle i');
    if (document.body.classList.contains('dark')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});