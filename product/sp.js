document.addEventListener('DOMContentLoaded', function() {
    // --- Product Image Gallery ---
    const mainImage = document.getElementById('main-product-image');
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Update main image source
            mainImage.src = this.src;

            // Update active state for thumbnails
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // --- Scroll to Top Button ---
    const scrollToTopBtn = document.getElementById('scroll-to-top');

    // Show/hide button on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'flex';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    // Scroll to top on click
    scrollToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // --- Load More Thumbnails ---
    const moreBtn = document.querySelector('.thumbnail-more');
    if (moreBtn) {
        moreBtn.addEventListener('click', function() {
            const hiddenThumbs = document.querySelectorAll('.thumbnail.hidden');
            for (let i = 0; i < 3 && i < hiddenThumbs.length; i++) {
                hiddenThumbs[i].classList.remove('hidden');
            }
            // Hide button if no more thumbnails are hidden
            if (document.querySelectorAll('.thumbnail.hidden').length === 0) {
                this.style.display = 'none';
            }
        });
    }

    // --- View More Specifications ---
    const viewMore = document.querySelector('.view-more-link');
    const specMore = document.querySelector('.spec-more');
    if (viewMore && specMore) {
        viewMore.addEventListener('click', function() {
            specMore.style.display = 'block';
            viewMore.style.display = 'none';
        });
    }
});