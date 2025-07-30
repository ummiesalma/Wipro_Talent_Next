// Create snowflakes
function createSnowflakes() {
    const snowflakesContainer = document.getElementById('snowflakes');
    const snowflakeCount = 50;
    
    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.innerHTML = '❄';
        
        // Random properties
        const size = Math.random() * 15 + 5;
        const posX = Math.random() * window.innerWidth;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 5;
        const opacity = Math.random() * 0.5 + 0.3;
        
        snowflake.style.left = `${posX}px`;
        snowflake.style.fontSize = `${size}px`;
        snowflake.style.opacity = opacity;
        snowflake.style.animationDelay = `${delay}s`;
        snowflake.style.animationDuration = `${duration}s`;
        
        snowflakesContainer.appendChild(snowflake);
    }
}

// Hint counter functionality
function setupHintCounter() {
    const countBtn = document.getElementById('countBtn');
    const collectionInput = document.getElementById('collectionInput');
    const result = document.getElementById('result');
    
    countBtn.addEventListener('click', () => {
        const input = collectionInput.value.trim();
        
        if (input === '') {
            result.textContent = 'Please enter a value';
            return;
        }
        
        // Check if input is a number
        if (!isNaN(input)) {
            result.textContent = `Number counted: ${input}`;
        } else {
            // Treat as string and count characters
            const count = input.length;
            result.textContent = `Characters counted: ${count}`;
        }
    });
    
    // Also allow Enter key
    collectionInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            countBtn.click();
        }
    });
}

// Set current year in footer
function setCurrentYear() {
    document.getElementById('year').textContent = new Date().getFullYear();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createSnowflakes();
    setupHintCounter();
    setCurrentYear();
});

// Make snowflakes responsive
window.addEventListener('resize', () => {
    const snowflakes = document.querySelectorAll('.snowflake');
    snowflakes.forEach(snowflake => {
        const currentLeft = parseFloat(snowflake.style.left);
        const ratio = currentLeft / window.innerWidth;
        snowflake.style.left = `${ratio * document.documentElement.clientWidth}px`;
    });
});