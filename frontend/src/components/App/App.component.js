import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './app.style.css';

import SearchResultsPage from '../../pages/SearchResultsPage/SearchResultsPage.page';
import ProductPage from '../../pages/ProductPage/ProductPage.page';
import Header from '../Header/Header.component';
import Spinner from '../Spinner/Spinner.component';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSpinner: false
        };
        this.onSearchHandler = this.onSearchHandler.bind(this);
        this.activateSpinnerHandler = this.activateSpinnerHandler.bind(this);
    }
    onSearchHandler(query) {
        this.props.history.push(`/items?q=${query}`);
    }
    activateSpinnerHandler(showSpinner = false) {
        this.setState({ showSpinner });
    }
    render() {
        return (
            <div className="app-container" >
                <Spinner show={this.state.showSpinner} />
                <Header onSearch={this.onSearchHandler} />
                <main className="app-content">
                    <Switch>
                        <Route exact path='/items' render={(props) => <SearchResultsPage {...props} activateSpinner={this.activateSpinnerHandler} />} />
                        <Route exact path='/items/:id' render={(props) => <ProductPage {...props} activateSpinner={this.activateSpinnerHandler} />} />
                    </Switch>
                </main>
            </div>
        );
    }
}

export default App;