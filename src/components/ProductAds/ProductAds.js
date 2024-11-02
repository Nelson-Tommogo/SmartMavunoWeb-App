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
            title: "Product 1",
            price: "$29.99",
        },
        {
            image: product2Image,
            link: "https://yourmarketplace.com/product2",
            title: "Product 2",
            price: "$39.99",
        },
        {
            image: product3Image,
            link: "https://yourmarketplace.com/product3",
            title: "Product 3",
            price: "$19.99",
        },
        {
            image: product4Image,
            link: "https://yourmarketplace.com/product4",
            title: "Product 4",
            price: "$49.99",
        },
    ];

    // Create an array with each product repeated 10 times
    const repeatedProducts = Array.from({ length: 2 }, () => products).flat();

    return (
        <div className="product-ads">
            <h2>Featured Products</h2>
            <div className="ads-container">
                {repeatedProducts.map((product, index) => (
                    <div key={index} className="ad-item">
                        <a href={product.link} target="_blank" rel="noopener noreferrer">
                            <img src={product.image} alt={`Product ${index + 1}`} className="ad-image" />
                        </a>
                        <div className="product-info">
                            <p className="product-title">{product.title}</p>
                            <p className="product-price">{product.price}</p>
                            <button className="add-to-cart">Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductAds;
