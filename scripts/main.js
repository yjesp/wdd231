// Dynamically set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Lazy loading images below the fold for performance
document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll("img[loading='lazy']");
    lazyImages.forEach(img => {
        img.src = img.dataset.src || img.src;
    });
});

// Example: Array with dynamic DOM manipulation
const features = [
    { title: "Climbing Tips", description: "Get expert advice on climbing techniques and safety.", img: "images/climb1.jpg" },
    { title: "Upcoming Events", description: "Join us for our next event in the Rocky Mountains!", img: "images/climb2.jpg" },
    { title: "Meet Our Community", description: "Connect with like-minded climbers and adventurers.", img: "images/climb3.jpg" }
];

const featureContainer = document.querySelector('.features');
features.forEach(feature => {
    const article = document.createElement('article');
    article.innerHTML = `
        <img src="${feature.img}" alt="${feature.title}" loading="lazy">
        <h2>${feature.title}</h2>
        <p>${feature.description}</p>
    `;
    featureContainer.appendChild(article);
});

