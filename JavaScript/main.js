document.addEventListener('DOMContentLoaded', function() {

    const menuToggle = document.getElementById('menuToggle');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const mobileNavMenu = document.getElementById('mobileNavMenu');
    const mobileNavClose = document.getElementById('mobileNavClose');
    const body = document.body;
    const header = document.querySelector('.header');
    
    const btnLogin = document.getElementById('btnLogin');
    const btnOpenAccount = document.getElementById('btnOpenAccount');
    const mobileBtnLogin = document.getElementById('mobileBtnLogin');
    const mobileBtnOpenAccount = document.getElementById('mobileBtnOpenAccount');
    const heroBtnStart = document.getElementById('heroBtnStart');
    const heroBtnDemo = document.getElementById('heroBtnDemo');

    const navLinks = document.querySelectorAll('.nav-link');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const featureLinks = document.querySelectorAll('.feature-link');
    const footerLinks = document.querySelectorAll('.footer-links a');

    const faqQuestions = document.querySelectorAll('.faq-question');
    
    function openMobileMenu() {
        mobileNavMenu.classList.add('active');
        mobileMenuOverlay.classList.add('active');
        body.style.overflow = 'hidden';
        menuToggle.innerHTML = '<i class="fas fa-times"></i>';
        menuToggle.setAttribute('aria-expanded', 'true');

        const menuItems = document.querySelectorAll('.mobile-nav-item');
        menuItems.forEach((item, index) => {
            item.style.animationDelay = `${0.1 + (index * 0.05)}s`;
        });
    }
    
    function closeMobileMenu() {
        mobileNavMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        body.style.overflow = '';
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        menuToggle.setAttribute('aria-expanded', 'false');
    }

    function toggleMobileMenu() {
        if (mobileNavMenu.classList.contains('active')) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    }

    /**
     * 
     * @param {HTMLElement} item 
     */
    function toggleFAQItem(item) {
        const isActive = item.classList.contains('active');
        const toggleIcon = item.querySelector('.faq-toggle i');
        
        document.querySelectorAll('.faq-item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
                const otherIcon = otherItem.querySelector('.faq-toggle i');
                otherIcon.className = 'fas fa-plus';
                otherIcon.style.transform = 'rotate(0deg)';
                otherItem.setAttribute('aria-expanded', 'false');
            }
        });

        if (!isActive) {
            item.classList.add('active');
            toggleIcon.className = 'fas fa-plus';
            setTimeout(() => {
                toggleIcon.style.transform = 'rotate(135deg)';
            }, 10);
            item.setAttribute('aria-expanded', 'true');
        } else {
            item.classList.remove('active');
            toggleIcon.className = 'fas fa-plus';
            toggleIcon.style.transform = 'rotate(0deg)';
            item.setAttribute('aria-expanded', 'false');
        }
    }

    /**
     * @param {string} targetId 
     */
    function smoothScrollTo(targetId) {
        if (!targetId || targetId === '#') return;
        
        const targetElement = document.getElementById(targetId.substring(1));
        
        if (targetElement) {
            if (mobileNavMenu.classList.contains('active')) {
                closeMobileMenu();
            }

            const headerHeight = header.offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            history.pushState(null, null, `#${targetId}`);
        }
    }
    
    function updateActiveNavigation() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 150; 

        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = sectionId;
            }
        });
     
        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href').substring(1);
            link.classList.toggle('active', linkHref === currentSectionId);
        });
        
        mobileNavLinks.forEach(link => {
            const linkHref = link.getAttribute('href').substring(1);
            link.classList.toggle('active', linkHref === currentSectionId);
        });
    }

    function addButtonClickEffect(button) {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
        }, 150);
    }

    function handleActionButton(button, actionType) {
        addButtonClickEffect(button);
        
        switch(actionType) {
            case 'login':
                alert('Redirigiendo al portal de acceso...');
                break;
                
            case 'openAccount':
                smoothScrollTo('#cuentas');
                break;
                
            case 'start':
                smoothScrollTo('#cuentas');
                break;
                
            case 'demo':
                alert('Iniciando demostración interactiva...');
                break;
        }
    }
    
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMobileMenu();
    });
    
    mobileNavClose.addEventListener('click', closeMobileMenu);
    mobileMenuOverlay.addEventListener('click', closeMobileMenu);
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileNavMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            smoothScrollTo(href);
        });
    });
    
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            smoothScrollTo(href);
        });
    });
    
    featureLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            smoothScrollTo(href);
        });
    });
    
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            smoothScrollTo(href);
        });
    });
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            toggleFAQItem(item);
        });

        question.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const item = question.parentElement;
                toggleFAQItem(item);
            }
        });
    });
    
    [btnLogin, mobileBtnLogin].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => handleActionButton(btn, 'login'));
        }
    });
    
    [btnOpenAccount, mobileBtnOpenAccount].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => handleActionButton(btn, 'openAccount'));
        }
    });
    
    if (heroBtnStart) {
        heroBtnStart.addEventListener('click', () => handleActionButton(heroBtnStart, 'start'));
    }
    
    if (heroBtnDemo) {
        heroBtnDemo.addEventListener('click', () => handleActionButton(heroBtnDemo, 'demo'));
    }
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }
        
        updateActiveNavigation();
    });
    
    updateActiveNavigation();

    menuToggle.setAttribute('aria-label', 'Menú de navegación');
    menuToggle.setAttribute('aria-expanded', 'false');
    mobileNavClose.setAttribute('aria-label', 'Cerrar menú');

    document.querySelectorAll('.faq-item').forEach(item => {
        item.setAttribute('aria-expanded', 'false');
    });
    
    window.dispatchEvent(new Event('scroll'));

    document.addEventListener('click', (e) => {
        if (mobileNavMenu.classList.contains('active') && 
            !mobileNavMenu.contains(e.target) && 
            !menuToggle.contains(e.target)) {
            closeMobileMenu();
        }
    });
    
    mobileNavMenu.addEventListener('wheel', (e) => {
        if (!mobileNavMenu.contains(e.target)) {
            e.preventDefault();
        }
    }, { passive: false });

    console.log('Finanzia - JavaScript cargado correctamente');
    console.log(`Elementos cargados:
    - Menú toggle: ${menuToggle ? '✓' : '✗'}
    - Menú móvil: ${mobileNavMenu ? '✓' : '✗'}
    - Enlaces de navegación: ${navLinks.length}
    - Items FAQ: ${faqQuestions.length}
    - Tarjetas de características: ${document.querySelectorAll('.feature-card').length}`);
});