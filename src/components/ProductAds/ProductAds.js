import React from 'react';
import './ProductAds.css'; // Create a CSS file for styling

// Import your product images
import product1Image from '../../assets/products/product.png';
import product2Image from '../../assets/products/product1.png';
import product3Image from '../../assets/products/product2.png';
import product4Image from '../../assets/products/product3.png';

const ProductAds = () => {
    // Sample product data
    const products = [
        {
            image: product1Image,
            link: "https://yourmarketplace.com/product1",
        },
        {
            image: product2Image,
            link: "https://yourmarketplace.com/product2",
        },
        {
            image: product3Image,
            link: "https://yourmarketplace.com/product3",
        },
        {
            image: product4Image,
            link: "https://yourmarketplace.com/product4",
        },
    ];

    return (
        <div className="product-ads">
            <h2>Featured Products</h2>
            <div className="ads-container">
                {products.map((product, index) => (
                    <div key={index} className="ad-item">
                        <a href={product.link} target="_blank" rel="noopener noreferrer">
                            <img src={product.image} alt={`Product ${index + 1}`} className="ad-image" />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductAds;
