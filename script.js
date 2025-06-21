// Simple and safe falling stars effect
document.addEventListener('DOMContentLoaded', function() {
    // Only add stars effect, no other complex interactions
    createStarsContainer();
    
    function createStarsContainer() {
        // Create stars container
        const starsContainer = document.createElement('div');
        starsContainer.className = 'stars-container';
        document.body.appendChild(starsContainer);
        
        // Create initial stars
        for (let i = 0; i < 15; i++) {
            setTimeout(() => createStar(starsContainer), i * 200);
        }
        
        // Continue creating stars
        setInterval(() => {
            if (Math.random() > 0.7) {
                createStar(starsContainer);
            }
        }, 1000);
    }
    
    function createStar(container) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random star types
        const types = ['', 'diamond', 'circle', 'plus'];
        const randomType = types[Math.floor(Math.random() * types.length)];
        if (randomType) star.classList.add(randomType);
        
        // Random position
        star.style.left = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 2 + 's';
        star.style.animationDuration = (Math.random() * 3 + 3) + 's';
        
        container.appendChild(star);
        
        // Remove star after animation
        setTimeout(() => {
            if (star.parentNode) {
                star.parentNode.removeChild(star);
            }
        }, 8000);
    }
});
