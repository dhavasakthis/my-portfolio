console.log('script.js loaded');

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');

    const landing = document.getElementById('landing');
    const exploreButton = document.getElementById('explore-button');
    const returnButton = document.getElementById('return-button');

    if (exploreButton) {
        console.log('Explore button found');
        exploreButton.addEventListener('click', () => {
            console.log('Explore Portfolio clicked!');
            landing.classList.add('hidden');
            document.body.style.overflow = 'auto';
        });
    } else {
        console.error('Explore button not found!');
    }

    if (returnButton) {
        console.log('Return button found');
        returnButton.addEventListener('click', () => {
            console.log('Return to Home clicked!');
            landing.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    } else {
        console.error('Return button not found!');
    }

    // Smooth scrolling for nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(`Nav link clicked: ${link.getAttribute('href')}`);
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                landing.classList.add('hidden');
                document.body.style.overflow = 'auto';
                targetElement.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.error(`Target section #${targetId} not found!`);
            }
        });
    });

    // Project details toggle
    window.toggleDetails = function(element) {
        console.log('Toggling project details');
        const details = element.querySelector('.project-details');
        document.querySelectorAll('.project-details').forEach(d => {
            if (d !== details) d.style.display = 'none';
        });
        details.style.display = details.style.display === 'block' ? 'none' : 'block';
    };

    // Particle animation
    const canvas = document.getElementById('particle-canvas');
    if (canvas) {
        console.log('Canvas found');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const colors = ['#00D4FF', '#FF2A6D', '#7B2CBF'];

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 2 - 1;
                this.speedY = Math.random() * 2 - 1;
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.shadowBlur = 10;
                ctx.shadowColor = this.color;
                ctx.fill();
            }
        }

        for (let i = 0; i < 30; i++) {
            particles.push(new Particle());
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animateParticles);
        }

        animateParticles();
    } else {
        console.error('Canvas not found!');
    }
});
