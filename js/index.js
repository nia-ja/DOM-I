const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])

// nav > nav-items
let navItem = document.querySelectorAll('a');
console.log(navItem);
navItem[0].textContent = 'Services';
navItem[1].textContent = 'Product';
navItem[2].textContent = 'Vision';
navItem[3].textContent = 'Features';
navItem[4].textContent = 'About';
navItem[5].textContent = 'Contact';

// nav > img-src
const logo = document.querySelector('#logo-img');
logo.src = "img/logo.png";


// cta > h1
const ctaH1 = document.querySelector('.cta-text > h1');
ctaH1.textContent = 'DOM Is Awesome';


// cta > button
const ctaButton = document.querySelector('.cta-text > button');
ctaButton.textContent = 'Get Started';


// cta > img-src
const ctaImage = document.querySelector('#cta-img');
ctaImage.setAttribute('src', 'img/header-img.png');


// h4 elements
const h4 = document.querySelectorAll('h4');
h4[0].textContent = 'Features'; // main-content > features-h4
h4[1].textContent = 'About'; // main-content > about-h4
h4[2].textContent = 'Services'; // main-content > services-h4
h4[3].textContent = 'Product'; // main-content > product-h4
h4[4].textContent = 'Vision'; // main-content > vision-h4
h4[5].textContent = 'Contact'; // main-content > contact-h4


// p elements
const p = document.querySelectorAll('p');
p[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'; // main-content > features-content
p[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'; // main-content > about-content
p[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'; // main-content > services-content
p[3].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'; // main-content > product-content
p[4].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'; // main-content > vision-content
p[5].textContent = '123 Way 456 Street Somewhere, USA'; // contact > address
p[6].textContent = '1 (888) 888-8888'; // contact > phone
p[7].textContent = 'sales@greatidea.io'; // contact > email
p[8].textContent = 'Copyright Great Idea! 2018'; //footer > copyright


// main-content > middle-img-src
const middleImage = document.querySelector('#middle-img');
middleImage.src = 'img/mid-page-accent.jpg';

// color of the navigation text
navItem.forEach(function(navItem) {
  navItem.style.color = "green";
});

// utilize .appendChild()
const navBar = document.querySelector('nav');
let lastItem = document.createElement('a');
lastItem.href = '#';
lastItem.textContent = 'Last Item';
navBar.appendChild(lastItem);
lastItem.style.color = "green";

// utilize .prepend()
let firstItem = document.createElement('a');
firstItem.href = '#';
firstItem.textContent = "First Item";
navBar.prepend(firstItem);
firstItem.style.color = "green";