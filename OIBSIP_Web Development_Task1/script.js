 // Simple interactive features
        document.querySelectorAll('.cta-button, .download-btn').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Create ripple effect
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.style.position = 'absolute';
                ripple.style.borderRadius = '50%';
                ripple.style.background = 'rgba(255,255,255,0.5)';
                ripple.style.transform = 'scale(0)';
                ripple.style.animation = 'ripple 0.6s linear';
                ripple.style.pointerEvents = 'none';
                
                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
                
                // Simulate download/action
                if(this.textContent.includes('Download')) {
                    this.textContent = 'Downloading...';
                    this.style.background = 'linear-gradient(45deg, #4CAF50, #45a049)';
                    setTimeout(() => {
                        this.textContent = 'Downloaded ✓';
                    }, 2000);
                }
            });
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if(target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Category chip interactions
        document.querySelectorAll('.chip').forEach(chip => {
            chip.addEventListener('click', function() {
                // Remove active class from all chips
                document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked chip
                this.classList.add('active');
                
                // Simple filter simulation
                const category = this.textContent.toLowerCase();
                console.log(`Filtering games by: ${category}`);
                
                // Add visual feedback
                this.style.background = 'rgba(255, 215, 0, 0.3)';
                setTimeout(() => {
                    this.style.background = 'rgba(255, 255, 255, 0.2)';
                }, 1000);
            });
        });

        // Add CSS for ripple animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);