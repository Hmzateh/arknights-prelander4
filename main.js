// ============================================
// CONFIGURATION VARIABLES
// ============================================

const CTA_TEXTS = ['Click to Play Endfield PC for FREE', 'Play Now'];
const CTA_ROTATION_INTERVAL = 2000;
const AFFILIATE_LINK = 'http://to.wendiro.com/o?k=98099624c17e486ca92ac5061e7f9b35&via=22457';

// ============================================
// INITIALIZATION
// ============================================

(function() {
    // CTA text rotation
    var index = 0;
    var ctaText = document.getElementById('cta-text');
    
    setInterval(function() {
        index = (index + 1) % CTA_TEXTS.length;
        ctaText.style.opacity = '0';
        setTimeout(function() {
            ctaText.textContent = CTA_TEXTS[index];
            ctaText.style.opacity = '1';
        }, 200);
    }, CTA_ROTATION_INTERVAL);
    
    ctaText.style.transition = 'opacity 0.2s ease';

    // Video play button functionality
    var videoContainer = document.getElementById('video-container');
    var video = document.getElementById('promo-video');
    var playOverlay = document.getElementById('play-overlay');

    videoContainer.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            playOverlay.classList.add('hidden');
            window.open(AFFILIATE_LINK, '_blank');
        } else {
            video.pause();
            playOverlay.classList.remove('hidden');
        }
    });

    video.addEventListener('ended', function() {
        playOverlay.classList.remove('hidden');
    });
})();
