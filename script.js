// Function to show a welcome message on page load
window.onload = function() {
    alert("Welcome to Dr. Manobala.T's Portfolio!\nExplore my academic and professional journey.");
};

// Function to dynamically update the footer year
document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('footer');
    const year = new Date().getFullYear();
    footer.innerHTML = `&copy; ${year} Manobala.T | Sai University`;
    
    // Add hover effect to navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.backgroundColor = '#f4f4f4';
            link.style.color = '#0077b6';
            link.style.transition = 'all 0.3s ease';
        });
        link.addEventListener('mouseout', () => {
            link.style.backgroundColor = '';
            link.style.color = 'white';
        });
    });

    // Make sections clickable with a fun message
    const contentSection = document.querySelector('.content');
    contentSection.addEventListener('click', () => {
        alert("You're exploring Dr. Manobala.T's achievements! Want to know more?");
    });

    // Adding subtle fade-in animation to content
    contentSection.classList.add('fade-in');
});
