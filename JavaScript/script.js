        const mainHeader = document.getElementById('mainHeader');
        const hamburgerBtn = document.getElementById('hamburgerBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const menuOverlay = document.getElementById('menuOverlay');
        const mobileCloseBtn = document.getElementById('mobileCloseBtn');
        const body = document.body;
        
        let lastScrollTop = 0;
        const scrollThreshold = 100;
        
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
                mainHeader.classList.add('hide');
            } else {
                mainHeader.classList.remove('hide');
            }
            
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        });
        
        function toggleMenu() {
            const isActive = mobileMenu.classList.contains('active');
            
            if (!isActive) {
                hamburgerBtn.classList.add('active');
                mobileMenu.classList.add('active');
                menuOverlay.classList.add('active');
                body.style.overflow = 'hidden';
                mainHeader.classList.remove('hide');
            } else {
                hamburgerBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
                menuOverlay.classList.remove('active');
                body.style.overflow = 'auto';
            }
        }
        
        hamburgerBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMenu();
        });
        
        mobileCloseBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMenu();
        });
        
        menuOverlay.addEventListener('click', toggleMenu);
        
        document.querySelectorAll('.mobile-menu-content a').forEach(link => {
            link.addEventListener('click', toggleMenu);
        });
        
        document.querySelectorAll('.mobile-menu-footer .btn').forEach(button => {
            button.addEventListener('click', function() {
                toggleMenu();
                
                const buttonText = this.textContent.trim();
                if (buttonText.includes('Open an Account')) {
                    setTimeout(() => {
                        alert('Thank you for your interest in Openbank! This would redirect to the account opening process.');
                    }, 300);
                } else if (buttonText.includes('Sign In')) {
                    setTimeout(() => {
                        alert('This would redirect to the login page.');
                    }, 300);
                }
            });
        });
        
        document.querySelectorAll('.hero-btn').forEach(button => {
            button.addEventListener('click', function() {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
                
                const buttonText = this.textContent.trim();
                if (buttonText.includes('Open an account')) {
                    alert('Thank you for your interest in Openbank! This would redirect to the account opening process.');
                } else if (buttonText.includes('Explore High Yield Savings')) {
                    alert('This would redirect to learn more about High Yield Savings accounts.');
                }
            });
        });
        
        document.querySelectorAll('.benefits-btn').forEach(button => {
            button.addEventListener('click', function() {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
                
                alert('This would redirect to learn more about High Yield Savings accounts.');
            });
        });
        
        document.querySelectorAll('.digital-btn').forEach(button => {
            button.addEventListener('click', function() {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
                
                alert('This would redirect to learn about Openbank history.');
            });
        });
        
        document.querySelectorAll('.security-btn').forEach(button => {
            button.addEventListener('click', function() {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
                
                alert('This would redirect to learn about security features.');
            });
        });
        
        document.querySelectorAll('.faq-btn').forEach(button => {
            button.addEventListener('click', function() {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
                
                alert('This would redirect to view frequently asked questions.');
            });
        });
        
        document.getElementById('appStoreBtn').addEventListener('click', function(e) {
            e.preventDefault();
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            alert('This would redirect to the App Store to download the Openbank app.');
        });
        
        document.getElementById('googlePlayBtn').addEventListener('click', function(e) {
            e.preventDefault();
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            alert('This would redirect to Google Play to download the Openbank app.');
        });
        
        document.querySelectorAll('.footer-links-row a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const linkText = this.textContent.trim();
                alert(`This would redirect to the ${linkText} page.`);
            });
        });
        
        document.querySelectorAll('.header-buttons .btn').forEach(button => {
            button.addEventListener('click', function() {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
                
                const buttonText = this.textContent.trim();
                if (buttonText.includes('Open Account')) {
                    alert('Thank you for your interest in Openbank! This would redirect to the account opening process.');
                } else if (buttonText.includes('Log In')) {
                    alert('This would redirect to the login page.');
                }
            });
        });
        
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        window.addEventListener('load', function() {
            document.querySelectorAll('img').forEach(img => {
                if (img.naturalWidth > img.parentElement.offsetWidth) {
                    img.style.width = '100%';
                    img.style.height = 'auto';
                }
            });
        });
        
        let resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                if (window.innerWidth <= 767) {
                    document.body.style.overflowX = 'hidden';
                }
            }, 250);
        });