document.addEventListener('DOMContentLoaded', () => {
  
    const skills = [
        'C++', 'Java', 'HTML5', 'CSS3', 'JavaScript', 
        'CCNA 1', 'Réseau Cisco', 'Administration Système', 
        'POO', 'Git/GitHub', 'Responsive Design'
    ];

    const container = document.getElementById('skills-list');

    if (container) {
        skills.forEach(skill => {
            const span = document.createElement('span');
            span.className = 'skill-tag';
            span.innerText = skill;
            container.appendChild(span);
        });
    }

  
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.project-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.getElementById('main-menu');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', String(!isExpanded));
            navLinks.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.setAttribute('aria-expanded', 'false');
                navLinks.classList.remove('active');
            });
        });
    }
});