import React, { Component } from 'react';

import MLAPI from '../../utils/mercado-libre-api';
import ProductList from '../../components/ProductList/ProductList.component';

class SearchResultsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
        this.search = this.search.bind(this);
        this.parseQuery = this.parseQuery.bind(this);
    }
    search(query) {
        this.props.activateSpinner(true);
        MLAPI.getItemsByQuery(query)
            .then(({ items: products, categories }) => {
                this.props.activateSpinner(false);
                this.setState({ products, categories });
            })
            .catch((error) => {
                this.props.activateSpinner(false);
                console.warn('Query error', error);
                alert('Ocurrio un error, revisar la consola');
            });
    }
    parseQuery(search) {
        const params = new URLSearchParams(search);
        return params.get('q') || '';
    }
    componentWillReceiveProps(nextProps) {
        const newQuery = this.parseQuery(nextProps.location.search);
        const oldQuery = this.parseQuery(this.props.location.search);

        const areValidQuery = newQuery && oldQuery;
        const areDifferentQueries = newQuery !== oldQuery;

        if (areValidQuery && areDifferentQueries) {
            this.search(newQuery);
        }
    }
    componentDidMount() {
        const query = this.parseQuery(this.props.location.search);
        if (query) {
            this.search(query);
        }
    }
    render() {
        return (<ProductList products={this.state.products} />);
    }

}

export default SearchResultsPage;
