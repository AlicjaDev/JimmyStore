document.addEventListener('DOMContentLoaded', function () {
    const scrollContainer = document.querySelector('.scroll-items-wrapper');
    const scrollLeftButton = document.querySelector('.scroll-arrow-left');
    const scrollRightButton = document.querySelector('.scroll-arrow-right');
    
    function updateArrowVisibility() {
        const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        const currentScrollLeft = scrollContainer.scrollLeft;
        
   
        if (currentScrollLeft > 0) {
            scrollLeftButton.style.display = 'block'; 
        } else {
            scrollLeftButton.style.display = 'none';
        }
        
        if (currentScrollLeft < maxScrollLeft) {
            scrollRightButton.style.display = 'block'; 
        } else {
            scrollRightButton.style.display = 'none'; 
        }
    }


    scrollLeftButton.addEventListener('click', function () {
        scrollContainer.scrollBy({
            left: -300,
            behavior: 'smooth'
        });
    });

    scrollRightButton.addEventListener('click', function () {
        scrollContainer.scrollBy({
            left: 300, 
            behavior: 'smooth'
        });
    });

    updateArrowVisibility();
    scrollContainer.addEventListener('scroll', updateArrowVisibility);
});





// AOS.init({
//     duration: 1000, 
//     offset: 300,    
//     once: true, 
//   });




// // Select the promo-section
// const promoSection = document.getElementById('promo-section');

// // Set up the Intersection Observer
// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             // Show the promo section first
//             entry.target.style.opacity = 1;
//             entry.target.style.transform = 'translateX(0)';  // Move section into place

//             // Delay text animation
//             setTimeout(() => {
//                 const promoText = entry.target.querySelector('.promo-text');
//                 promoText.style.opacity = 1;
//                 promoText.style.transform = 'translateY(0)';  // Text moves from top to bottom
//             }, 500);  // Delay text animation after section becomes visible

//             // Delay image animation
//             setTimeout(() => {
//                 const promoImage = entry.target.querySelector('.promo-image');
//                 promoImage.style.opacity = 1;
//                 promoImage.style.transform = 'translateX(0)';  // Image moves from right to left
//             }, 2500);  // Delay image animation after text starts
//         }
//     });
// }, {
//     threshold: 0.5,  // Trigger when 50% of the section is visible
//     rootMargin: '0px 0px -200px 0px',  // Trigger earlier before the section is fully in the viewport
// });

// // Observe the promo-section
// observer.observe(promoSection);





document.addEventListener('DOMContentLoaded', function () {
    const ageOverlay = document.getElementById('age-overlay');
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');

    if (sessionStorage.getItem('ageVerified') === 'true') {
        ageOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto'; 
        return;
    }

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden'; 

  
    yesButton.addEventListener('click', function () {
        ageOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
        sessionStorage.setItem('ageVerified', 'true');
    });

    // If the user clicks "No" (not verified), redirect to Google
    noButton.addEventListener('click', function () {
        window.location.href = 'https://www.google.com';
    });
});




const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "CannabisStore",
    "name": "Kannabis King",
    "url": "https://www.kannabisking.ca/",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1066 Adelaide St. N Unit #4",
      "addressLocality": "London",
      "addressRegion": "Ontario",
      "postalCode": "N5Y 2N1",
      "addressCountry": "Canada"
    },
    "telephone": "+1-548-690-9020"
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(jsonLdData);

  document.head.appendChild(script);
  


  function openGalleryOverlay(src) {
    const overlayImage = document.getElementById('overlayImage');
    overlayImage.src = src;

    const maxWidth = window.innerWidth * 0.9;
    const maxHeight = window.innerHeight * 0.9;

    overlayImage.onload = function() {

        const naturalWidth = overlayImage.naturalWidth;
        const naturalHeight = overlayImage.naturalHeight;

        let scaleFactor = 1;
        

        if (naturalWidth < maxWidth && naturalHeight < maxHeight) {
            scaleFactor = 2; 
        }

 
        overlayImage.style.width = naturalWidth + 'px';
        overlayImage.style.height = naturalHeight + 'px';

  
        if (naturalWidth > maxWidth || naturalHeight > maxHeight) {
            const widthRatio = maxWidth / naturalWidth;
            const heightRatio = maxHeight / naturalHeight;
            const scaleRatio = Math.min(widthRatio, heightRatio);

            // scaling
            overlayImage.style.width = (naturalWidth * scaleRatio) + 'px';
            overlayImage.style.height = (naturalHeight * scaleRatio) + 'px';
        }

        overlayImage.style.transform = `scale(${scaleFactor})`;
    };

    document.getElementById('galleryOverlay').style.display = 'flex';
}

function closeGalleryOverlay() {
    document.getElementById('galleryOverlay').style.display = 'none';
}