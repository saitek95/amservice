document.addEventListener('DOMContentLoaded', function () {
    const animateBtn = document.querySelectorAll('.button');
    animateBtn.forEach(item => {
        item.addEventListener('mouseenter', function () {
            item.classList.add('button_animated');
        })

        item.addEventListener('mouseleave', function () {
            item.classList.remove('button_animated');
        })
    })

    initInlineSVG();
    initPhoneMask();
})
function initPhoneMask(input) {
    input.value = '+7';

    input.addEventListener('input', function(e) {
        let digits = this.value.replace(/\D/g, '');

        // Всегда начинаем с +7
        let result = '+7';

        if (digits.startsWith('7') || digits.startsWith('8')) {
            digits = digits.substring(1);
        }

        digits = digits.substring(0, 10);

        if (digits.length > 0) result += ' ' + digits.substring(0, 3);
        if (digits.length > 3) result += ' ' + digits.substring(3, 6);
        if (digits.length > 6) result += ' ' + digits.substring(6, 8);
        if (digits.length > 8) result += ' ' + digits.substring(8, 10);

        this.value = result;

        this.setSelectionRange(result.length, result.length);
    });

    input.addEventListener('keydown', function(e) {
        if (this.selectionStart <= 3 &&
            (e.key === 'Backspace' || e.key === 'Delete' ||
                (e.key.length === 1 && !e.ctrlKey && !e.metaKey))) {
            e.preventDefault();
            if (e.key.length === 1) {
                setTimeout(() => {
                    this.value = '+7 ' + e.key;
                    this.setSelectionRange(4, 4);
                }, 0);
            }
        }
    });
}

document.querySelectorAll('[data-phone-mask]').forEach(initPhoneMask);

function initInlineSVG() {
    const svgElements = document.querySelectorAll('.svg:not(.replaced-svg)');

    svgElements.forEach(function(imgElement) {
        const imgClass = imgElement.className;
        const imgURL = imgElement.getAttribute('src');

        if (!imgURL) return;

        fetch(imgURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load SVG: ${response.status} ${response.statusText}`);
                }
                return response.text();
            })
            .then(data => {
                // Парсим SVG
                const parser = new DOMParser();
                const svgDoc = parser.parseFromString(data, 'image/svg+xml');
                let svgElement = svgDoc.querySelector('svg');

                if (!svgElement) {
                    console.warn('No SVG element found in:', imgURL);
                    return;
                }

                svgElement = svgElement.cloneNode(true);

                const newClass = imgClass ?
                    imgClass.replace('svg', 'replaced-svg') :
                    'replaced-svg';
                svgElement.className = newClass;

                svgElement.removeAttribute('xmlns:a');

                if (!svgElement.hasAttribute('viewBox') &&
                    svgElement.hasAttribute('height') &&
                    svgElement.hasAttribute('width')) {
                    const height = svgElement.getAttribute('height');
                    const width = svgElement.getAttribute('width');
                    svgElement.setAttribute('viewBox', `0 0 ${height} ${width}`);
                }

                imgElement.parentNode.replaceChild(svgElement, imgElement);
            })
            .catch(error => {
                console.error('Error loading SVG:', imgURL, error);
            });
    });
}

const mainSwiper = new Swiper('.main__swiper', {
    loop: false,
    speed: 800,
    grabCursor: true,
    slidesPerView: 1,

     autoplay: {
         delay: 5000,
         disableOnInteraction: false,
         pauseOnMouseEnter: false,
     },

    pagination: {
        el: '.main__swiper-pagination',
        clickable: true,
        renderBullet: function(index, className) {
            return `
                <span class="${className}">
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 0.5C8.11116 0.5 0.5 8.11116 0.5 17.5C0.5 26.8888 8.11116 34.5 17.5 34.5C26.8888 34.5 34.5 26.8888 34.5 17.5C34.5 8.11116 26.8888 0.5 17.5 0.5Z" stroke="white"/>
                    <rect x="14.1" y="14.1" width="6.8" height="6.8" rx="3.4" fill="white"/>
                    </svg>
                </span>
            `;
        },
        bulletClass: 'main__swiper-pagination-bullet',
        bulletActiveClass: 'main__swiper-pagination-bullet--active',
    },

    navigation: {
        nextEl: '.main__swiper-button-next',
        prevEl: '.main__swiper-button-prev',
    },
});

const lightbox = GLightbox({});