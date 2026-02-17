// =============================================
// CONFIGURATION - Modifier ici
// =============================================

const CONFIG = {
    // CTA Button (rotating text)
    ctaTexts: [
        "CLICK TO PLAY ENDFIELD",
        "PLAY NOW"
    ],
    ctaLink: "http://to.wendiro.com/o?k=98099624c17e486ca92ac5061e7f9b35&via=22457",

    // Hero Image
    heroImage: "hero-endfield.png"
};

// =============================================
// META PIXEL TRACKER - Prevents duplicates
// =============================================

const PixelTracker = {
    firedEvents: {},
    
    track: function(eventName) {
        if (this.firedEvents[eventName]) return;
        if (typeof fbq !== 'function') return;
        
        fbq('trackCustom', eventName);
        this.firedEvents[eventName] = true;
    }
};

// =============================================
// APPLICATION - Ne pas modifier
// =============================================

document.addEventListener('DOMContentLoaded', function() {
    // CTA Button
    const ctaBtn = document.getElementById('cta-btn');
    const ctaTextEl = ctaBtn ? ctaBtn.querySelector('.cta-text') : null;
    
    if (ctaBtn) {
        ctaBtn.href = CONFIG.ctaLink;
        
        // CTA text rotation
        if (ctaTextEl) {
            let ctaIndex = 0;
            ctaTextEl.textContent = CONFIG.ctaTexts[0];
            
            setInterval(() => {
                ctaTextEl.style.opacity = '0';
                setTimeout(() => {
                    ctaIndex = (ctaIndex + 1) % CONFIG.ctaTexts.length;
                    ctaTextEl.textContent = CONFIG.ctaTexts[ctaIndex];
                    ctaTextEl.style.opacity = '1';
                }, 150);
            }, 2000);
        }
        
        // CTA click → go2offer2
        ctaBtn.addEventListener('click', function() {
            PixelTracker.track('go2offer2');
        });
    }

    // Hero Image
    const heroImg = document.querySelector('.hero-image img');
    if (heroImg && CONFIG.heroImage) {
        heroImg.src = CONFIG.heroImage;
    }
    
    // Hero Image click → go2offer1
    const heroLink = document.getElementById('hero-link');
    if (heroLink) {
        heroLink.addEventListener('click', function() {
            PixelTracker.track('go2offer1');
        });
    }
    
    // Video play event → go2offer1 (if user interacts with video)
    const video = document.querySelector('.video-background');
    if (video) {
        video.addEventListener('play', function() {
            PixelTracker.track('go2offer1');
        }, { once: true });
    }
});
