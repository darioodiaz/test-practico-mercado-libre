import React from 'react';

import './productDetails.style.css';

const ProductDetails = ({ product }) => {
    let productDOM = (<section></section>);

    const productInfo = (
        <section className="product-details">
            <article className="product-details-container">
                <img alt={product.title} src={product.picture} className="product-details-image" />
                <div className="product-details-footer">
                    <h1 className="product-details-footer__title">Descripcion del producto</h1>
                    <p className="product-details-footer__description">{product.description || `${product.title} no tiene descripcion, enviale un mensaje al vendedor para que te cuente mas detalles sobre su producto.`}</p>
                </div>
            </article>
            <aside className="product-details-header">
                <h6 className="product-details-header__condition-sold product-details-header__condition-sold--capitalized">{product.condition} - {product.sold_quantity} vendidos</h6>
                <h1 className="product-details-header__title product-details-header__title--capitalized">{product.title}</h1>
                <h4 className="product-details-header__price">{product.price.currency} {Number(product.price.amount).toLocaleString('es')}</h4>
                <button type="button" className="product-details-header__btn-buy">Comprar</button>
            </aside>
        </section>
    );
    if (product.id) {
        productDOM = productInfo;
    }
    return productDOM;
}

export default ProductDetails;
