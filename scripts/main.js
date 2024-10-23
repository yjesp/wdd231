// Dynamically set the current year in the footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Dynamically display last modified date
document.getElementById('lastModified').textContent = "Last Modified: " + document.lastModified;

// Example API Fetching Climbing Spots
async function getClimbingSpots() {
    try {
        const response = await fetch('https://api.example.com/climbing-spots');  // Use a real API here
        const data = await response.json();
        const spotsDiv = document.getElementById('climbing-spots');
        data.forEach(spot => {
            const spotDiv = document.createElement('div');
            spotDiv.innerHTML = `
                <h3>${spot.name}</h3>
                <p>Location: ${spot.location}</p>
            `;
            spotsDiv.appendChild(spotDiv);
        });
    } catch (error) {
        console.error('Error fetching climbing spots:', error);
    }
}

// Lazy load images (optional)
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');
    const loadImage = (img) => {
        img.setAttribute('src', img.getAttribute('data-src'));
        img.removeAttribute('data-src');
    };
    
    const imgObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadImage(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });

    images.forEach(img => {
        imgObserver.observe(img);
    });

    // Fetch climbing spots
    getClimbingSpots();
});
