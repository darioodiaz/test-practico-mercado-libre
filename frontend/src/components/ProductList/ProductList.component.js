import React from 'react';

import './productList.style.css'

import ProductSummary from '../ProductSummary/ProductSummary.component';

const ProductList = ({ products = [] }) => {
    return (
        <section className="products-list">
            {products.map(product => <ProductSummary key={product.id} product={product} />)}
        </section>
    );
}

export default ProductList;
