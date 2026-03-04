document.addEventListener('DOMContentLoaded', () => {
    console.log("Wesley Hopkins site initialized.");
    
    // Smooth scrolling for navigation
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            console.log(`Navigating to ${e.target.innerText}`);
        });
    });
});

// Simple placeholder for the original cookie logic
function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    console.log("Cookies accepted by user.");
}
