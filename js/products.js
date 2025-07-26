function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Create unique images array for this product
    const productImages = [
        product.image,
        `images/products/${productId}_1.jpg`,
        `images/products/${productId}_2.jpg`,
        `images/products/${productId}_3.jpg`
    ];
    
    // Generate HTML for product detail
    const detailHTML = `
        <div class="product-detail-container">
            <div class="product-gallery">
                <div class="product-thumbnails">
                    ${productImages.map((img, index) => `
                        <img src="${img}" alt="${product.title} view ${index+1}" 
                             class="product-thumbnail ${index === 0 ? 'active' : ''}">
                    `).join('')}
                </div>
                <img src="${productImages[0]}" alt="${product.title}" class="product-main-image">
            </div>
            
            <div class="product-details">
                <!-- Detailed product info -->
            </div>
        </div>
    `;
    
    // Show modal
    document.getElementById('product-detail-content').innerHTML = detailHTML;
    productModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Add event listeners for thumbnails
    const thumbnails = document.querySelectorAll('.product-thumbnail');
    const mainImage = document.querySelector('.product-main-image');
    
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => {
            thumbnails.forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
            mainImage.src = thumb.src;
        });
    });
}