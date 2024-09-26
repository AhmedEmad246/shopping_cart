/*=============== SHOW MENU ===============*/

/*===== Menu Show =====*/
/* Validate if constant exists */

/*===== Hide Show =====*/
/* Validate if constant exists */

/*=============== IMAGE GALLERY ===============*/
function imgGallery() {
    const mainImg = document.querySelector('.details-img');
    const smallImg = document.querySelectorAll('.details-small-img');

    if (!mainImg || smallImg.length === 0) {
        console.error('Image gallery elements not found.');
        return;
    }

    smallImg.forEach((img) => {
        img.addEventListener('click', function () {
            mainImg.src = this.src;
        });
    });
}
imgGallery(); // Call function to ensure it runs

/*=============== SWIPER CATEGORIES ===============*/

let swiper = new Swiper('.categories-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1400: {
            slidesPerView: 6,
            spaceBetween: 24,
        },
    }
});

/*=============== SWIPER PRODUCTS ===============*/

let swiperProducts = new Swiper('.new-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        350: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 24,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
    }
});

/*=============== PRODUCTS TABS ===============*/

const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

if (tabs.length === 0 || tabContents.length === 0) {
    console.error('Tabs or tab contents not found.');
}

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        if (!target) {
            console.error('Target content not found:', tab.dataset.target);
            return;
        }

        tabContents.forEach((tabContent) => {
            tabContent.classList.remove('active-tab');
        });

        target.classList.add('active-tab');

        tabs.forEach((tab) => {
            tab.classList.remove('active-tab');
        });

        tab.classList.add('active-tab');
    });
});

/*=============== Details TABS ===============*/
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.detail-tab');
    const contents = document.querySelectorAll('.details-tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active-tab'));
            contents.forEach(c => c.classList.remove('active-tab'));
            tab.classList.add('active-tab');
            const targetId = tab.getAttribute('data-target');
            document.querySelector(targetId).classList.add('active-tab');
        });
    });
});
/*=============== Details TABS ===============*/



let addItemId = 0;

function addToCart(item) {
    addItemId += 1;
    let selectedItem = document.createElement('div');
    selectedItem.classList.add('cartImg');
    selectedItem.setAttribute('id', addItemId);
    let img = document.createElement('img')
    img.setAttribute('src', item)
    let cartItems = document.getElementById('title')
    selectedItem.append(img)
    cartItems.append(selectedItem)

}






// add to cart function


function addToCart() {
    // Get form data
    const form = document.getElementById('add-to-cart-form');
    const formData = new FormData(form);

    // Convert form data to a plain object
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Retrieve the cart from local storage, or initialize it if not present
    let cart = JSON.parse(localStorage.getItem('cart')) || {};

    // Check if product is already in the cart
    if (cart[data['product-id']]) {
        // Update quantity if product already exists
        cart[data['product-id']].quantity = parseInt(cart[data['product-id']].quantity) + parseInt(data['quantity']);
    } else {
        // Add new product to the cart
        cart[data['product-id']] = {
            name: data['product-name'],
            price: data['product-price'],
            quantity: data['quantity']
        };
    }

    // Save updated cart to local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Provide feedback to the user
    alert('Product added to cart!');
}