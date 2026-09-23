function getVisitorCount() {
  let count = localStorage.getItem('alberto_visitors');
  if (!count) {
    count = Math.floor(Math.random() * 5000) + 1000;
  }
  count = parseInt(count) + 1;
  localStorage.setItem('alberto_visitors', count);
  return count.toLocaleString();
}

function updateTicker() {
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  const timeStr = now.toLocaleTimeString('en-US');

  let locationStr = 'Locating...';
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        locationStr = `Lat: ${pos.coords.latitude.toFixed(2)}, Lon: ${pos.coords.longitude.toFixed(2)}`;
        setTickerText(dateStr, timeStr, locationStr);
      },
      () => {
        locationStr = 'Location unavailable';
        setTickerText(dateStr, timeStr, locationStr);
      },
      { timeout: 5000 }
    );
  } else {
    locationStr = 'Geolocation not supported';
    setTickerText(dateStr, timeStr, locationStr);
  }
  setTickerText(dateStr, timeStr, locationStr);
}

function setTickerText(dateStr, timeStr, locationStr) {
  const el = document.querySelector('.ticker-scroll');
  if (el) {
    el.innerHTML = `&nbsp; Alberto Clocks &mdash; ${dateStr} &nbsp;|&nbsp; ${timeStr} &nbsp;|&nbsp; ${locationStr} &nbsp;|&nbsp; Time is the ultimate luxury &nbsp;||&nbsp;`;
  }
}

function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    },
    { threshold: 0.15 }
  );
  reveals.forEach((el) => observer.observe(el));
}

function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
}

function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link-custom').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === path) {
      link.classList.add('active');
    }
  });
}

const products = {

  vintage1: {
    name: 'Heritage 1947',
    brand: 'Alberto',
    category: 'Vintage',
    price: 'PKR 686,000',
    img: 'https://images.pexels.com/photos/17717727/pexels-photo-17717727.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    desc: 'A timeless vintage piece with leather strap and Roman numerals.'
  },

  vintage2: {
    name: 'Classic Round 1952',
    brand: 'Alberto',
    category: 'Vintage',
    price: 'PKR 529,200',
    img: 'https://images.pexels.com/photos/1467188/pexels-photo-1467188.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    desc: 'Classic silver wristwatch with genuine leather strap and elegant design.'
  },

  vintage3: {
    name: 'Antique Pocket 1890',
    brand: 'Alberto',
    category: 'Vintage',
    price: 'PKR 896,000',
    img: 'https://images.pexels.com/photos/8327563/pexels-photo-8327563.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    desc: 'Rare antique pocket watch with intricate mechanical movement.'
  },

  vintage4: {
    name: 'Vintage Gold Classic',
    brand: 'Alberto',
    category: 'Vintage',
    price: 'PKR 742,000',
    img: 'https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    desc: 'A refined vintage-inspired watch with classic dial and leather strap.'
  },

  vintage5: {
    name: 'Heritage Silver 1965',
    brand: 'Alberto',
    category: 'Vintage',
    price: 'PKR 615,000',
    img: 'https://images.pexels.com/photos/364822/pexels-photo-364822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    desc: 'A sophisticated vintage timepiece with polished case and traditional dial.'
  },

  luxury1: {
    name: 'Gold Imperial',
    brand: 'Alberto',
    category: 'Luxury',
    price: 'PKR 2,506,000',
    img: 'https://images.pexels.com/photos/25052866/pexels-photo-25052866.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    desc: 'Luxurious gold wristwatch with black dial and Roman numerals.'
  },

  luxury2: {
    name: 'Royal Skeleton',
    brand: 'Alberto',
    category: 'Luxury',
    price: 'PKR 3,472,000',
    img: 'https://images.pexels.com/photos/3809175/pexels-photo-3809175.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    desc: 'Skeleton-style luxury watch with gold and silver detailing.'
  },

  luxury3: {
    name: 'Gold Noir',
    brand: 'Alberto',
    category: 'Luxury',
    price: 'PKR 1,890,000',
    img: 'https://images.pexels.com/photos/28135838/pexels-photo-28135838.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    desc: 'Gold wristwatch with elegant black dial and luxury finish.'
  },

  luxury4: {
    name: 'Royal Gold Prestige',
    brand: 'Alberto',
    category: 'Luxury',
    price: 'PKR 3,150,000',
    img: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    desc: 'A statement luxury watch combining refined gold case and elegant dial.'
  },

  luxury5: {
    name: 'Midnight Executive',
    brand: 'Alberto',
    category: 'Luxury',
    price: 'PKR 2,750,000',
    img: 'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    desc: 'A sophisticated dark-dial timepiece designed for an elegant luxury look.'
  },

  smart1: {
    name: 'Alberto Smart Pro',
    brand: 'Alberto',
    category: 'Smart',
    price: 'PKR 249,200',
    img: 'https://images.pexels.com/photos/437038/pexels-photo-437038.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    desc: 'Modern smartwatch with fitness tracking and smart notifications.'
  },

  smart2: {
    name: 'Smart Lite Green',
    brand: 'Alberto',
    category: 'Smart',
    price: 'PKR 182,000',
    img: 'https://images.pexels.com/photos/31406895/pexels-photo-31406895.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    desc: 'Sleek smartwatch with GPS tracking and water resistance.'
  },

  smart3: {
    name: 'Smart Touch White',
    brand: 'Alberto',
    category: 'Smart',
    price: 'PKR 201,600',
    img: 'https://images.pexels.com/photos/31406903/pexels-photo-31406903.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    desc: 'White minimalist smartwatch with touchscreen interface.'
  },

  smart4: {
    name: 'Alberto Smart X',
    brand: 'Alberto',
    category: 'Smart',
    price: 'PKR 225,000',
    img: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    desc: 'Modern smartwatch with digital display and fitness tracking.'
  },

  smart5: {
    name: 'Alberto Smart Elite',
    brand: 'Alberto',
    category: 'Smart',
    price: 'PKR 275,000',
    img: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    desc: 'Premium smartwatch offering health tracking, GPS and notifications.'
  },

  rolex1: {
    name: 'Rolex Submariner Date',
    brand: 'Rolex',
    category: 'Luxury',
    price: 'PKR 3,920,000',
    img: 'https://images.pexels.com/photos/9979862/pexels-photo-9979862.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    desc: 'Iconic Rolex diving watch with a sophisticated luxury design.'
  },

  rolex2: {
    name: 'Rolex Datejust 41',
    brand: 'Rolex',
    category: 'Vintage',
    price: 'PKR 3,360,000',
    img: 'https://images.pexels.com/photos/10401777/pexels-photo-10401777.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    desc: 'Classic Rolex Datejust with timeless elegance and refined styling.'
  },

  rolex3: {
    name: 'Rolex GMT-Master II',
    brand: 'Rolex',
    category: 'Luxury',
    price: 'PKR 4,200,000',
    img: 'https://images.pexels.com/photos/9979862/pexels-photo-9979862.jpeg',
    desc: 'A sophisticated Rolex timepiece with a distinctive luxury design.'
  },

  rolex4: {
    name: 'Rolex Oyster Perpetual',
    brand: 'Rolex',
    category: 'Vintage',
    price: 'PKR 2,900,000',
    img: 'https://images.pexels.com/photos/10401777/pexels-photo-10401777.jpeg',
    desc: 'A classic Rolex design combining elegance and everyday versatility.'
  },

  rolex5: {
    name: 'Rolex Day-Date',
    brand: 'Rolex',
    category: 'Luxury',
    price: 'PKR 5,100,000',
    img: 'https://images.pexels.com/photos/12790205/pexels-photo-12790205.jpeg',
    desc: 'A prestigious timepiece representing classic luxury and refined craftsmanship.'
  },

  omega1: {
    name: 'Omega Seamaster 300',
    brand: 'Omega',
    category: 'Luxury',
    price: 'PKR 2,800,000',
    img: 'https://images.pexels.com/photos/12790205/pexels-photo-12790205.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    desc: 'Professional diver watch with a premium luxury design.'
  },

  omega2: {
    name: 'Omega Speedmaster Moonwatch',
    brand: 'Omega',
    category: 'Vintage',
    price: 'PKR 2,520,000',
    img: 'https://images.pexels.com/photos/1600601/pexels-photo-1600601.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    desc: 'Legendary Omega chronograph with a classic vintage character.'
  },

  omega3: {
    name: 'Omega Constellation',
    brand: 'Omega',
    category: 'Luxury',
    price: 'PKR 2,950,000',
    img: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg',
    desc: 'Elegant Omega timepiece combining precision and luxury.'
  },

  omega4: {
    name: 'Omega De Ville',
    brand: 'Omega',
    category: 'Vintage',
    price: 'PKR 2,400,000',
    img: 'https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg',
    desc: 'A refined dress watch with timeless design and craftsmanship.'
  },

  omega5: {
    name: 'Omega Aqua Terra',
    brand: 'Omega',
    category: 'Luxury',
    price: 'PKR 2,700,000',
    img: 'https://images.pexels.com/photos/364822/pexels-photo-364822.jpeg',
    desc: 'A versatile luxury watch designed for elegance and performance.'
  },

  cartier1: {
    name: 'Cartier Tank Solo',
    brand: 'Cartier',
    category: 'Vintage',
    price: 'PKR 1,680,000',
    img: 'https://images.pexels.com/photos/3782373/pexels-photo-3782373.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    desc: 'Iconic Cartier Tank design with a classic rectangular case.'
  },

  cartier2: {
    name: 'Cartier Santos de Cartier',
    brand: 'Cartier',
    category: 'Luxury',
    price: 'PKR 2,240,000',
    img: 'https://images.pexels.com/photos/5772096/pexels-photo-5772096.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    desc: 'Square Cartier case with sophisticated luxury styling.'
  },

  cartier3: {
    name: 'Cartier Ballon Bleu',
    brand: 'Cartier',
    category: 'Luxury',
    price: 'PKR 2,600,000',
    img: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg',
    desc: 'A sophisticated Cartier watch with distinctive rounded styling.'
  },

  cartier4: {
    name: 'Cartier Panthere',
    brand: 'Cartier',
    category: 'Vintage',
    price: 'PKR 2,300,000',
    img: 'https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg',
    desc: 'Elegant Cartier design inspired by timeless heritage.'
  },

  cartier5: {
    name: 'Cartier Drive',
    brand: 'Cartier',
    category: 'Luxury',
    price: 'PKR 2,850,000',
    img: 'https://images.pexels.com/photos/364822/pexels-photo-364822.jpeg',
    desc: 'Modern luxury timepiece with distinctive sophisticated styling.'
  },

  pp1: {
    name: 'Patek Philippe Calatrava',
    brand: 'Patek Philippe',
    category: 'Vintage',
    price: 'PKR 7,840,000',
    img: 'https://images.pexels.com/photos/3754296/pexels-photo-3754296.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    desc: 'Quintessential dress watch with minimalist dial and elegant design.'
  },

  pp2: {
    name: 'Patek Philippe Nautilus',
    brand: 'Patek Philippe',
    category: 'Luxury',
    price: 'PKR 11,200,000',
    img: 'https://images.pexels.com/photos/3708006/pexels-photo-3708006.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    desc: 'Iconic luxury watch with distinctive porthole-inspired design.'
  },

  pp3: {
    name: 'Patek Philippe Aquanaut',
    brand: 'Patek Philippe',
    category: 'Luxury',
    price: 'PKR 9,500,000',
    img: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg',
    desc: 'Sporty luxury watch with refined mechanical craftsmanship.'
  },

  pp4: {
    name: 'Patek Philippe Grand Complications',
    brand: 'Patek Philippe',
    category: 'Luxury',
    price: 'PKR 13,500,000',
    img: 'https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg',
    desc: 'Exceptional timepiece showcasing advanced watchmaking.'
  },

  pp5: {
    name: 'Patek Philippe Twenty~4',
    brand: 'Patek Philippe',
    category: 'Vintage',
    price: 'PKR 8,200,000',
    img: 'https://images.pexels.com/photos/364822/pexels-photo-364822.jpeg',
    desc: 'Elegant contemporary watch with timeless Patek sophistication.'
  },

  hublot1: {
    name: 'Hublot Big Bang Unico',
    brand: 'Hublot',
    category: 'Luxury',
    price: 'PKR 4,480,000',
    img: 'https://images.pexels.com/photos/2477237/pexels-photo-2477237.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    desc: 'Bold chronograph with a powerful luxury design.'
  },

  hublot2: {
    name: 'Hublot Classic Fusion',
    brand: 'Hublot',
    category: 'Vintage',
    price: 'PKR 2,800,000',
    img: 'https://images.pexels.com/photos/33277498/pexels-photo-33277498.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    desc: 'Elegant fusion of modern materials and classic watchmaking.'
  },

  hublot3: {
    name: 'Hublot Spirit of Big Bang',
    brand: 'Hublot',
    category: 'Luxury',
    price: 'PKR 4,900,000',
    img: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg',
    desc: 'Bold tonneau-shaped watch combining modern materials and design.'
  },

  hublot4: {
    name: 'Hublot Classic Fusion Chronograph',
    brand: 'Hublot',
    category: 'Vintage',
    price: 'PKR 3,600,000',
    img: 'https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg',
    desc: 'Sophisticated chronograph blending contemporary and classic style.'
  },

  hublot5: {
    name: 'Hublot Big Bang Meca-10',
    brand: 'Hublot',
    category: 'Luxury',
    price: 'PKR 5,200,000',
    img: 'https://images.pexels.com/photos/364822/pexels-photo-364822.jpeg',
    desc: 'Powerful luxury timepiece featuring bold construction and mechanics.'
  },

  mk1: {
    name: 'Michael Kors Runway',
    brand: 'Michael Kors',
    category: 'Luxury',
    price: 'PKR 84,000',
    img: 'https://images.pexels.com/photos/1181235/pexels-photo-1181235.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    desc: 'Glamorous gold-tone watch with an elegant fashion design.'
  },

  mk2: {
    name: 'Michael Kors Slim Runway',
    brand: 'Michael Kors',
    category: 'Vintage',
    price: 'PKR 70,000',
    img: 'https://images.pexels.com/photos/9978724/pexels-photo-9978724.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    desc: 'Sleek slim profile watch with minimalist styling.'
  },

  mk3: {
    name: 'Michael Kors Lexington',
    brand: 'Michael Kors',
    category: 'Luxury',
    price: 'PKR 92,000',
    img: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg',
    desc: 'Stylish fashion watch with polished finish and modern design.'
  },

  mk4: {
    name: 'Michael Kors Parker',
    brand: 'Michael Kors',
    category: 'Vintage',
    price: 'PKR 78,000',
    img: 'https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg',
    desc: 'Glamorous timepiece designed with sophisticated details.'
  },

  mk5: {
    name: 'Michael Kors Bradshaw',
    brand: 'Michael Kors',
    category: 'Luxury',
    price: 'PKR 88,000',
    img: 'https://images.pexels.com/photos/364822/pexels-photo-364822.jpeg',
    desc: 'Bold fashion watch combining luxury styling with versatility.'
  }

};

let selectedBrand = "All";
let selectedCategory = "All";

function filterBrand(brand) {

  selectedBrand = brand;
  selectedCategory = "All";

  const title = document.getElementById("selected-brand");

  if (title) {
    title.textContent = brand + " Collection";
  }

  showBrandProducts();

  const section = document.getElementById("brand-products");

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

function filterCategory(category) {

  selectedCategory = category;

  showBrandProducts();
}

function showBrandProducts() {

  const row = document.getElementById("brandProductRow");

  if (!row) return;

  row.innerHTML = "";

  let found = false;

  for (let id in products) {

    const product = products[id];

    if (
      product.brand &&
      (selectedBrand === "All" || product.brand === selectedBrand) &&
      (selectedCategory === "All" || product.category === selectedCategory)
    ) {

      found = true;

      row.innerHTML += `
        <div class="col-md-6 col-lg-4 col-xl-3">
          
          <div class="product-card">

            <div class="card-img-wrapper">
              <img 
                src="${product.img}" 
                alt="${product.name}">
            </div>

            <div class="card-body">

              <h5>${product.name}</h5>

              <p class="price">${product.price}</p>

              <button 
                class="btn btn-outline-gold" 
                onclick="showProductModal('${id}')">
                View Details
              </button>

            </div>

          </div>

        </div>
      `;
    }
  }

  if (!found) {

    row.innerHTML = `
      <div class="col-12 text-center">
        <p style="color: var(--gray-soft);">
          No products found in this category.
        </p>
      </div>
    `;
  }
}

function showProductModal(id) {
  const p = products[id];
  if (!p) return;
  const modalEl = document.getElementById('productModal');
  if (!modalEl) return;

  modalEl.querySelector('.modal-title').textContent = p.name;

  modalEl.querySelector('.modal-body').innerHTML = `
    <img src="${p.img}" alt="${p.name}" class="img-fluid rounded mb-3" style="max-height:300px;object-fit:cover;width:100%;">
    <h4 class="text-center" style="color:var(--gold-dark)">${p.price}</h4>
    <p class="text-center" style="color:var(--green-deep);font-size:0.9rem;letter-spacing:2px;text-transform:uppercase">Brand: ${p.brand}</p>
    <p class="mt-3" style="font-size:1.1rem;color:var(--gray-soft)">${p.desc}</p>
  `;

  const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
  modal.show();
}

function initSearch() {
  const input = document.getElementById('searchInput');
  const results = document.getElementById('searchResults');
  if (!input || !results) return;

  input.addEventListener('input', () => {
    const query = input.value.trim().toLowerCase();

    if (query.length < 1) {
      results.classList.remove('show');
      results.innerHTML = '';
      return;
    }

    const matches = Object.entries(products).filter(([key, p]) => {
      return p.name.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query) ||
        p.price.toLowerCase().includes(query);
    });

    if (matches.length === 0) {
      results.innerHTML = '<div class="search-no-results">No watches found. Try another search.</div>';
    } else {
      results.innerHTML = matches.map(([key, p]) => `
        <div class="search-result-item" onclick="handleSearchClick('${key}')">
          <img src="${p.img}" alt="${p.name}">
          <div>
            <div class="sri-name">${p.name}</div>
            <div class="sri-price">${p.price} &middot; ${p.brand}</div>
          </div>
        </div>
      `).join('');
    }

    results.classList.add('show');
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const firstResult = results.querySelector('.search-result-item');
      if (firstResult) firstResult.click();
    }
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-wrapper')) {
      results.classList.remove('show');
    }
  });
}

function handleSearchClick(key) {
  const results = document.getElementById('searchResults');
  const input = document.getElementById('searchInput');

  if (results) results.classList.remove('show');
  if (input) input.value = '';

  const productEl = document.getElementById(key);

  if (productEl) {
    productEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    productEl.style.transition = 'box-shadow 0.4s ease';
    productEl.style.boxShadow = '0 0 20px rgba(201,162,39,0.6)';
    setTimeout(() => {
      productEl.style.boxShadow = '';
    }, 2000);
  } else {
    showProductModal(key);
  }
}

function filterBrand(brand) {
  const section = document.getElementById('brand-products');

  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  const columns = document.querySelectorAll('#brand-products .col-md-4');

  columns.forEach((col) => {
    const productId = col.id;
    const product = products[productId];

    if (brand === 'all') {
      col.style.display = '';
    } else if (product && product.brand === brand) {
      col.style.display = '';
    } else {
      col.style.display = 'none';
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const counterEl = document.getElementById('visitorCount');

  if (counterEl) {
    counterEl.textContent = getVisitorCount();
  }

  updateTicker();
  setInterval(updateTicker, 1000);

  initScrollReveal();
  initNavbarScroll();
  setActiveNav();
  initSearch();
});

function filterBrand(brand) {
  const section = document.getElementById('brand-products');

  if (!section) return;

  const columns = document.querySelectorAll('#brand-products .row > div[id]');

  columns.forEach((col) => {
    const productId = col.id;
    const product = products[productId];

    if (product && product.brand === brand) {
      col.style.display = '';
    } else {
      col.style.display = 'none';
    }
  });

  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

{
  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

function showBrandProducts() {

  const row = document.getElementById("brandProductRow");

  row.innerHTML = "";

  for (let id in products) {

    const product = products[id];

    if (
      product.brand &&
      (selectedBrand === "All" || product.brand === selectedBrand) &&
      (selectedCategory === "All" || product.category === selectedCategory)
    ) {

      row.innerHTML += `

        <div class="col-md-4 col-lg-3 reveal">

          <div class="product-card">

            <div class="card-img-wrapper">

              <img src="${product.image}" alt="${product.name}">

            </div>

            <div class="card-body">

              <h5>${product.name}</h5>

              <p class="price">${product.price}</p>

              <button 
                class="btn btn-outline-gold" 
                onclick="showProductModal('${id}')">
                View Details
              </button>

            </div>

          </div>

        </div>

      `;
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {

  const feedbackForm = document.getElementById("feedbackForm");
  const feedbackName = document.getElementById("feedbackName");
  const feedbackEmail = document.getElementById("feedbackEmail");
  const feedbackText = document.getElementById("feedbackText");
  const feedbackMessage = document.getElementById("feedbackMessage");
  const submitButton = feedbackForm.querySelector("button[type='submit']");

  let feedbackSubmitted = false;

  feedbackForm.addEventListener("submit", function (event) {

    event.preventDefault();

    if (feedbackSubmitted) {
      return;
    }

    if (feedbackName.value.trim() === "") {
      alert("Please enter your name.");
      feedbackName.focus();
      return;
    }

    if (feedbackEmail.value.trim() === "") {
      alert("Please enter your email address.");
      feedbackEmail.focus();
      return;
    }

    if (!feedbackEmail.checkValidity()) {
      alert("Please enter a valid email address.");
      feedbackEmail.focus();
      return;
    }

    if (feedbackText.value.trim() === "") {
      alert("Please write your feedback.");
      feedbackText.focus();
      return;
    }

    feedbackSubmitted = true;

    feedbackMessage.innerHTML =
      "Thanks for your feedback!";

    feedbackName.disabled = true;
    feedbackEmail.disabled = true;
    feedbackText.disabled = true;

    submitButton.disabled = true;
    submitButton.innerHTML = "FEEDBACK SUBMITTED";

  });

});

document.addEventListener("DOMContentLoaded", function () {

  const leftEl = document.getElementById("heroLeft");
  const rightEl = document.getElementById("heroRight");
  const contentEl = document.getElementById("heroContent");

  const observerOptions = {
    threshold: 0.3,
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  observer.observe(leftEl);
  observer.observe(rightEl);
  observer.observe(contentEl);

});