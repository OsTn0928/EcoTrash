document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.info-block, .feature');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => {
        el.classList.add('hidden');
        observer.observe(el);
    });
});