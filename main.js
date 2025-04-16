document.addEventListener('DOMContentLoaded', function() {
    const headerTop = document.querySelector('.header-top');
    const originalOffset = headerTop.offsetTop;
    
    function handleScroll() {
        if (window.pageYOffset > originalOffset) {
            headerTop.classList.add('sticky');
        } else {
            headerTop.classList.remove('sticky');
        }
    }
    
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });
});
