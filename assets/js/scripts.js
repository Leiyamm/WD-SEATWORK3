document.querySelectorAll('.feature').forEach(feature => {
    feature.addEventListener('mouseenter', () => {
        const heading = feature.querySelector('h2');
        heading.style.opacity = '1';
    });

    feature.addEventListener('mouseleave', () => {
        const heading = feature.querySelector('h2');
        heading.style.opacity = '0';
    });
});
