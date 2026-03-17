document.addEventListener('DOMContentLoaded', () => {
    console.log("Wesley Hopkins site initialized.");
    
    // Smooth scrolling / Navigation logging
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            console.log(`Navigating to ${e.target.innerText}`);
            
            // Close the mobile menu after clicking a link
            const navLinks = document.getElementById('navLinks');
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Close menu if user clicks outside of the navigation area
    document.addEventListener('click', (e) => {
        const navLinks = document.getElementById('navLinks');
        const menuToggle = document.querySelector('.menu-toggle');
        
        if (navLinks.classList.contains('active') && 
            !navLinks.contains(e.target) && 
            !menuToggle.contains(e.target)) {
            navLinks.classList.remove('active');
        }
    });
});

/**
 * Toggles the mobile navigation menu
 * This works in tandem with the .active class in styles.css
 */
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        navLinks.classList.toggle('active');
        console.log("Mobile menu toggled.");
    }
}

// Simple placeholder for the original cookie logic
function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    console.log("Cookies accepted by user.");
}
