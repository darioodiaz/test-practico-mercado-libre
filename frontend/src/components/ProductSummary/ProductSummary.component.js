import React from 'react';
import { Link } from 'react-router-dom';

import './productSummary.style.css';

const ProductSummary = ({ product }) => {
    return (
        <article className="product-summary">
            <Link className="product-image-container" to={`/items/${product.id}`}>
                <img alt={product.title} src={product.picture} className="product-image" />
            </Link>
            <header className="product-summary-header">
                <h1 className="product-summary-header__price">{product.price.currency} {Number(product.price.amount).toLocaleString('es')}</h1>
                {
                    product.free_shipping && <mark className="product-summary-header__shipping"><i className="icon icon--shipping">Envio Gratuito</i></mark>
                }
                <p className="product-summary-header__title">{product.title}</p>
            </header>
            <aside className="product-summary-address">
                <h5 className="product-summary-address__location">{product.address}</h5>
            </aside>
        </article>);
}

export default ProductSummary;
