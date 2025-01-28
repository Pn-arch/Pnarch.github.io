// script.js
window.addEventListener('scroll', function () {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (window.scrollY > 200) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});


function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}



function addImageZoomEffect() {
    const images = document.querySelectorAll('img');
    images.forEach(image => {

        image.style.transition = 'transform 0.3s ease';
        
        image.addEventListener('mouseover', () => {
            image.style.transform = 'scale(1.1)';
        });
        image.addEventListener('mouseout', () => {
            image.style.transform = 'scale(1)';
        });
    });
}
addImageZoomEffect();

function createMouseTrailEffect() {
    const trails = [];
    const trailCount = 10; 
    for (let i = 0; i < trailCount; i++) {
        const trail = document.createElement('div');
        trail.classList.add('mouse-trail');
        document.body.appendChild(trail);
        trails.push(trail);
    }
    document.addEventListener('mousemove', (event) => {
        const { clientX, clientY } = event;

        trails.forEach((trail, index) => {
            setTimeout(() => {
                trail.style.transform = `translate(${clientX}px, ${clientY}px)`;
                trail.style.opacity = `${1 - index * 0.1}`;
            }, index * 50); 
        });
    });
}
createMouseTrailEffect();
   
function createClock() {
    const clock = document.createElement('div');
    clock.style.position = 'fixed';
    clock.style.top = '10px';
    clock.style.left = '10px';
    clock.style.padding = '10px 20px';
    clock.style.backgroundColor = '#222';
    clock.style.color = '#fff';
    clock.style.borderRadius = '8px';
    clock.style.fontFamily = 'Arial, sans-serif';
    clock.style.fontSize = '20px';
    clock.style.zIndex = 1000;
    document.body.appendChild(clock);

    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        clock.innerText = `${hours}:${minutes}:${seconds}`;
    }

    setInterval(updateClock, 1000);
    updateClock(); 
}
createClock();


