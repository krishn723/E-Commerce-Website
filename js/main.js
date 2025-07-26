// DOM Elements
const accountBtn = document.getElementById('account-btn');
const wishlistBtn = document.getElementById('wishlist-btn');
const cartBtn = document.getElementById('cart-btn');
const homeBtn = document.getElementById('home-btn');
const shopBtn = document.getElementById('shop-btn');
const newArrivalsBtn = document.getElementById('new-arrivals-btn');
const dealsBtn = document.getElementById('deals-btn');
const aboutBtn = document.getElementById('about-btn');
const contactBtn = document.getElementById('contact-btn');
const accountModal = document.getElementById('account-modal');
const productModal = document.getElementById('product-modal');
const closeModalBtns = document.querySelectorAll('.close-modal');
const mainContent = document.getElementById('main-content');

// User Data
let user = {
    name: "Krishan Kumar",
    email: "krishansaini5152@gmail.com",
    phone: "9352450084",
    dob: "August 29, 2004",
    address: "123 Main Street, New York, NY 10001",
    wishlist: [],
    cart: []
};

// Initialize the page
function init() {
    // Load user data from localStorage if available
    const savedUser = localStorage.getItem('shopEasyUser');
    if (savedUser) {
        user = JSON.parse(savedUser);
        updateCartCount();
    }
    
    // Set up event listeners
    setupEventListeners();
    
    // Load home page by default
    showHomePage();
}

// Set up event listeners
function setupEventListeners() {
    // Navigation buttons
    accountBtn.addEventListener('click', () => {
        accountModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    
    wishlistBtn.addEventListener('click', () => {
        accountModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    
    cartBtn.addEventListener('click', () => {
        accountModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    
    homeBtn.addEventListener('click', showHomePage);
    shopBtn.addEventListener('click', showShopPage);
    newArrivalsBtn.addEventListener('click', showNewArrivalsPage);
    dealsBtn.addEventListener('click', showDealsPage);
    aboutBtn.addEventListener('click', showAboutPage);
    contactBtn.addEventListener('click', showContactPage);
    
    // Modal close buttons
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            accountModal.style.display = 'none';
            productModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === accountModal) {
            accountModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if (e.target === productModal) {
            productModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Page navigation functions
function showHomePage() {
    mainContent.innerHTML = `
        <section class="hero-slider">
            <!-- Slider content -->
        </section>
        
        <section class="featured-section">
            <h2 class="section-title">Featured Products</h2>
            <div class="products-grid" id="featured-products"></div>
        </section>
        
        <section class="featured-section">
            <h2 class="section-title">Best Sellers</h2>
            <div class="products-grid" id="best-sellers"></div>
        </section>
    `;
    
    // Load products
    renderFeaturedProducts();
    renderBestSellers();
    
    // Initialize slider
    initSlider();
    
    document.title = 'ShopEasy - Your One-Stop Online Store';
}

function showShopPage() {
    showHomePage();
    document.querySelector('.featured-section').scrollIntoView({ behavior: 'smooth' });
}

function showNewArrivalsPage() {
    mainContent.innerHTML = `
        <div class="page-container">
            <div class="page-header">
                <h1 class="page-title">New Arrivals</h1>
                <p>Discover our latest products just added to the store</p>
            </div>
            <div class="products-grid" id="new-arrivals-products"></div>
        </div>
    `;
    
    renderNewArrivals();
    document.title = 'ShopEasy - New Arrivals';
}

function showDealsPage() {
    mainContent.innerHTML = `
        <div class="deals-container">
            <div class="page-header">
                <h1 class="page-title">Hot Deals</h1>
                <p>Limited time offers with special discounts</p>
            </div>
            <div class="products-grid" id="deals-products"></div>
        </div>
    `;
    
    renderDeals();
    document.title = 'ShopEasy - Hot Deals';
}

function showAboutPage() {
    mainContent.innerHTML = `
        <div class="page-container">
            <div class="page-header">
                <h1 class="page-title">About ShopEasy</h1>
            </div>
            <div class="page-content">
                <h2>Our Story</h2>
                <p>Founded in 2020, ShopEasy has grown from a small startup to one of the leading e-commerce platforms in the region.</p>
                
                <h2>Meet the Developer</h2>
                <div class="developer-info">
                    <h3>Krishan Kumar</h3>
                    <p><strong>Contact Information:</strong></p>
                    <p>Phone: 9352450084</p>
                    <p>Email: krishansaini5152@gmail.com</p>
                    <p>LinkedIn: linkedin.com/in/krishan-saini-b33b26300</p>
                    <p>Instagram: @krishan_saini</p>
                    
                    <p><strong>Education:</strong></p>
                    <p>BTech in Artificial Intelligence (Second Year)</p>
                    <p>Institution: BKBIET, Pilani</p>
                    
                    <p><strong>Skills:</strong></p>
                    <p>Proficient in HTML, CSS, JavaScript</p>
                    <p>Experience in web development and digital marketing</p>
                </div>
            </div>
        </div>
    `;
    
    document.title = 'ShopEasy - About Us';
}

function showContactPage() {
    mainContent.innerHTML = `
        <div class="page-container">
            <div class="page-header">
                <h1 class="page-title">Contact Us</h1>
                <p>We'd love to hear from you! Reach out to us with any questions or feedback.</p>
            </div>
            <div class="page-content">
                <div class="contact-info">
                    <div class="contact-card">
                        <h3><i class="fas fa-map-marker-alt"></i> Address</h3>
                        <p>123 Main Street<br>New York, NY 10001<br>United States</p>
                    </div>
                    
                    <div class="contact-card">
                        <h3><i class="fas fa-phone"></i> Phone</h3>
                        <p>+1 (555) 123-4567<br>Monday - Friday: 9am - 6pm EST</p>
                    </div>
                    
                    <div class="contact-card">
                        <h3><i class="fas fa-envelope"></i> Email</h3>
                        <p>support@shopeasy.com<br>orders@shopeasy.com</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.title = 'ShopEasy - Contact Us';
}

// Update cart count display
function updateCartCount() {
    const count = user.cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelector('.cart-count').textContent = count;
}

// Save user data to localStorage
function saveUserData() {
    localStorage.setItem('shopEasyUser', JSON.stringify(user));
}

// Initialize the app
document.addEventListener('DOMContentLoaded', init);