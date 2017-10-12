import React, { Component } from 'react';

import MLAPI from '../../utils/mercado-libre-api';
import ProductDetails from '../../components/ProductDetails/ProductDetails.component';

class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                price: {}
            }
        };
        this.search = this.search.bind(this);
    }
    search() {
        this.props.activateSpinner(true);
        MLAPI.getItemById(this.props.match.params.id)
            .then(({ item: product }) => {
                this.props.activateSpinner(false);
                this.setState({ product });
            })
            .catch((error) => {
                this.props.activateSpinner(false);
                console.warn('Query error', error);
                alert('Ocurrio un error, revisar la consola');
            });
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            this.search();
        }
    }
    render() {
        return (<ProductDetails product={this.state.product} />);
    }

}

export default ProductPage;
