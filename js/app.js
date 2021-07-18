const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./img/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        fade: "right",
        delay: "100",
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "./img/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
        fade: "left",
        delay: "100",
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "./img/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
        fade: "right",
        delay: "200",
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./img/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
        fade: "left",
        delay: "200",
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "./img/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
        fade: "right",
        delay: "300",
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "./img/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
        fade: "left",
        delay: "300",
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./img/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
        fade: "right",
        delay: "400",
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "./img/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
        fade: "left",
        delay: "400",
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "./img/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
        fade: "right",
        delay: "500",
    },
    {
        id: 10,
        title: "steak dinner",
        category: "dinner",
        price: 39.99,
        img: "./img/item-10.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
        fade: "left",
        delay: "500",
    },
];


// MOBLIE NAVIGATION SLIDER

const toggleIcon = document.querySelector('.toggle-icons');
const mobileNav = document.querySelector('.mobile-nav');
const mobToggle = document.querySelector('.mob-toggle');
const mobLink = document.querySelectorAll('.mob-link');


function toggleActive() {
    mobileNav.classList.toggle('active')
}


toggleIcon.addEventListener('click', toggleActive);

mobToggle.addEventListener('click', toggleActive);

mobLink.forEach(btn => {
    btn.addEventListener('click', toggleActive)
});



// ADDING MENU ITEMS

window.addEventListener('DOMContentLoaded', function () {

    menu.forEach(function addItem(item) {
        const sectionCenter = document.querySelector('.section-center');
        const dishes = document.createElement('article');
        dishes.className = 'menu-item';
        dishes.setAttribute("data-aos", `fade-${item.fade}`)
        dishes.setAttribute("data-aos-delay", `${item.delay}`)

        dishes.innerHTML =
            `<div class="photo-container">
                <img src=${item.img} class="photo" alt=${item.title}>
            </div>
            <div class="item-info">
                <header class= "flex-row">
                    <h4>${item.title}</h4>
                    <h4 class="price">$${item.price}</h4>
                    <div class="add-cart"><button>+</button></div>
                </header>
                <p class="item-text">${item.desc}</p>
            </div>`

        sectionCenter.appendChild(dishes);
    });
});



// NAVBAR SCROLL EFFECT 

window.addEventListener('scroll', function () {
    let header = this.document.querySelector('.nav');
    let windowPositon = window.scrollY > 0;
    header.classList.toggle('scroll-active', windowPositon);
});


// IMAGE SLIDESHOW

var i = 0;
var images = [];
var time = 3000;

images[0] = 'img/slide-1.jpg';
images[1] = 'img/slide-2.jpg';
images[2] = 'img/slide-3.jpg';

function changeImg() {
    document.slide.src = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout('changeImg()', time);
}



window.onload = function () {
    changeImg();
    document.querySelector('.loader-wrapper').style.display = 'none';
}

AOS.init(
    {
        offset: 200,
        delay: 0,
        duration: 500,

    }
);





