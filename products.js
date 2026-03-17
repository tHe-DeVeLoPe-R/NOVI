// ============================================
// NOVI Jewelry - Product Data
// Dummy data for demonstration
// ============================================

const products = {
  men: [
    {
      id: 1,
      name: "Black & Gold Bracelet",
      category: "Man Jewelry",
      price: 299,
      originalPrice: null,
      image: "images/man/blackgoldenbracelete.png",
      rating: 4.5,
      isNew: false,
      onSale: false
    },
    {
      id: 2,
      name: "Royal Chain Bracelet",
      category: "Man Jewelry",
      price: 189,
      originalPrice: 249,
      image: "images/man/bracelet1.png",
      rating: 4.8,
      isNew: false,
      onSale: true
    },
    {
      id: 3,
      name: "Classic Steel Bracelet",
      category: "Man Jewelry",
      price: 159,
      originalPrice: 199,
      image: "images/man/bracelet2.jpg",
      rating: 4.6,
      isNew: false,
      onSale: true
    },
    {
      id: 4,
      name: "Platinum Curb Chain",
      category: "Man Jewelry",
      price: 449,
      originalPrice: null,
      image: "images/man/platinumchain.png",
      rating: 4.9,
      isNew: false,
      onSale: false
    },
    {
      id: 5,
      name: "Silver Neck Chain",
      category: "Man Jewelry",
      price: 349,
      originalPrice: null,
      image: "images/man/silvernechchain.png",
      rating: 4.7,
      isNew: false,
      onSale: false
    },
    {
      id: 6,
      name: "Luxury Chronograph Watch",
      category: "Man Jewelry",
      price: 899,
      originalPrice: null,
      image: "images/man/ringand watchset.jpeg",
      rating: 5.0,
      isNew: true,
      onSale: false
    },
    {
      id: 7,
      name: "Eagle Pendant Necklace",
      category: "Man Jewelry",
      price: 279,
      originalPrice: 359,
      image: "images/unisex/eaglenecklace.png",
      rating: 4.6,
      isNew: false,
      onSale: true
    },
    {
      id: 8,
      name: "Dragon Scale Bracelet",
      category: "Man Jewelry",
      price: 199,
      originalPrice: null,
      image: "images/unisex/dragonbracelet.png",
      rating: 4.8,
      isNew: true,
      onSale: false
    }
  ],
  women: [
    {
      id: 9,
      name: "Butterfly Pendant Necklace",
      category: "Woman Jewelry",
      price: 299,
      originalPrice: null,
      image: "images/women/butterflystylenecklace.jpg",
      rating: 4.9,
      isNew: true,
      onSale: false
    },
    {
      id: 10,
      name: "Grand Bridal Set",
      category: "Woman Jewelry",
      price: 1299,
      originalPrice: 1599,
      image: "images/women/completejewelleryset.jpg",
      rating: 5.0,
      isNew: false,
      onSale: true
    },
    {
      id: 11,
      name: "Gold Leaf Ring",
      category: "Woman Jewelry",
      price: 189,
      originalPrice: null,
      image: "images/women/goldplatedleafring.png",
      rating: 4.7,
      isNew: false,
      onSale: false
    },
    {
      id: 12,
      name: "Classic Locket Set",
      category: "Woman Jewelry",
      price: 549,
      originalPrice: null,
      image: "images/women/locketandearringsset.jpg",
      rating: 4.8,
      isNew: true,
      onSale: false
    },
    {
      id: 13,
      name: "Elegant Pearl Necklace",
      category: "Woman Jewelry",
      price: 899,
      originalPrice: 1199,
      image: "images/women/nechlessset.png",
      rating: 4.9,
      isNew: false,
      onSale: true
    },
    {
      id: 14,
      name: "Silver & Gold Duo Ring",
      category: "Woman Jewelry",
      price: 249,
      originalPrice: null,
      image: "images/women/silvergoldenring.jpg",
      rating: 4.6,
      isNew: false,
      onSale: false
    },
    {
      id: 15,
      name: "Turkish Sterling Ring",
      category: "Woman Jewelry",
      price: 219,
      originalPrice: 279,
      image: "images/women/turkishsterlingring.png",
      rating: 4.7,
      isNew: false,
      onSale: true
    },
    {
      id: 16,
      name: "Fashion Wrist Bracelet",
      category: "Woman Jewelry",
      price: 159,
      originalPrice: null,
      image: "images/women/wristfashion.png",
      rating: 4.5,
      isNew: true,
      onSale: false
    }
  ],
  unisex: [
    {
      id: 17,
      name: "Minimalist Jewelry Set",
      category: "Unisex Jewelry",
      price: 349,
      originalPrice: 429,
      image: "images/unisex/blackringandsilvernecklaceset.png",
      rating: 4.8,
      isNew: false,
      onSale: true
    },
    {
      id: 18,
      name: "Modern Bracelet Trio",
      category: "Unisex Jewelry",
      price: 129,
      originalPrice: null,
      image: "images/unisex/braceletset.png",
      rating: 4.5,
      isNew: true,
      onSale: false
    },
    {
      id: 19,
      name: "Geometric Band Ring",
      category: "Unisex Jewelry",
      price: 199,
      originalPrice: null,
      image: "images/unisex/goldenring2.jpg",
      rating: 4.6,
      isNew: false,
      onSale: false
    },
    {
      id: 20,
      name: "Signature Ring Collection",
      category: "Unisex Jewelry",
      price: 279,
      originalPrice: 359,
      image: "images/unisex/goldenringset.webp",
      rating: 4.7,
      isNew: false,
      onSale: true
    },
    {
      id: 21,
      name: "Emerald Green Necklace",
      category: "Unisex Jewelry",
      price: 449,
      originalPrice: null,
      image: "images/unisex/greennecklace.png",
      rating: 4.9,
      isNew: true,
      onSale: false
    },
    {
      id: 22,
      name: "Chain & Ring Duo",
      category: "Unisex Jewelry",
      price: 229,
      originalPrice: null,
      image: "images/unisex/neckchainwithring.png",
      rating: 4.6,
      isNew: false,
      onSale: false
    },
    {
      id: 23,
      name: "Lion Crest Signet Ring",
      category: "Unisex Jewelry",
      price: 389,
      originalPrice: 499,
      image: "images/man/lionlogoring.jpg",
      rating: 4.9,
      isNew: false,
      onSale: true
    },
    {
      id: 24,
      name: "Italian Craft Band",
      category: "Unisex Jewelry",
      price: 319,
      originalPrice: null,
      image: "images/man/italianring.jpg",
      rating: 4.8,
      isNew: true,
      onSale: false
    }
  ],
};

// Get all products
function getAllProducts() {
  return [...products.men, ...products.women, ...products.unisex];
}

// Get products by category
function getProductsByCategory(category) {
  return products[category] || [];
}

// Get new arrivals
function getNewArrivals() {
  return getAllProducts().filter(product => product.isNew);
}

// Get sale products
function getSaleProducts() {
  return getAllProducts().filter(product => product.onSale);
}

// Render product card
function renderProductCard(product) {
  const badge = product.isNew ? 'new' : product.onSale ? 'sale' : '';
  const badgeText = product.isNew ? 'NEW' : product.onSale ? 'SALE' : '';
  const priceHTML = product.originalPrice 
    ? `<span class="price-current">R.O ${product.price}</span><span class="price-original">R.O ${product.originalPrice}</span>`
    : `<span class="price-current">R.O ${product.price}</span>`;
  
  const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
  
  return `
    <div class="product-card reveal">
      <div class="product-image-wrapper">
        <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
        ${badge ? `<div class="product-badge ${badge}">${badgeText}</div>` : ''}
        <div class="product-overlay">
          <div class="product-quick-actions">
            <button class="quick-action-btn" onclick="addToCart(${product.id})">Add to Cart</button>
            <button class="quick-action-btn" onclick="quickView(${product.id})">Quick View</button>
          </div>
        </div>
      </div>
      <div class="product-info">
        <div class="product-category">${product.category}</div>
        <h3 class="product-title">${product.name}</h3>
        <div class="product-price">
          ${priceHTML}
        </div>
        <div class="product-rating">
          <span>${stars}</span>
          <span>(${product.rating})</span>
        </div>
      </div>
    </div>
  `;
}

// Render products to container
function renderProducts(products, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = products.map(product => renderProductCard(product)).join('');
  
  // Trigger reveal animations
  setTimeout(() => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('active');
      }, index * 100);
    });
  }, 100);
}

// Cart functionality (dummy)
let cart = [];

function addToCart(productId) {
  const product = getAllProducts().find(p => p.id === productId);
  if (product) {
    cart.push(product);
    updateCartCount();
    showNotification(`${product.name} added to cart!`);
  }
}

function updateCartCount() {
  const cartBadge = document.querySelector('.cart-badge');
  if (cartBadge) {
    cartBadge.setAttribute('data-count', cart.length);
  }
}

function quickView(productId) {
  const product = getAllProducts().find(p => p.id === productId);
  if (product) {
    showNotification(`Quick view for ${product.name} (Feature coming soon)`);
  }
}

// Notification system
function showNotification(message) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: var(--gradient-gold);
    color: white;
    padding: 1rem 1.5rem;
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-xl);
    z-index: 10000;
    animation: slideInRight 0.3s ease-out;
  `;
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'fadeOut 0.3s ease-out';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Filter products
function filterProducts(products, filters) {
  let filtered = [...products];
  
  if (filters.category && filters.category !== 'all') {
    filtered = filtered.filter(p => p.category.toLowerCase() === filters.category.toLowerCase());
  }
  
  if (filters.priceRange) {
    const [min, max] = filters.priceRange;
    filtered = filtered.filter(p => p.price >= min && p.price <= max);
  }
  
  if (filters.sortBy) {
    switch(filters.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => b.isNew - a.isNew);
        break;
    }
  }
  
  return filtered;
}
