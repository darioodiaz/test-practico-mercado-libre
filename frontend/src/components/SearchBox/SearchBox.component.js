import React, { Component } from 'react';

import './searchBox.style.css';

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = { query: '' };
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }
    componentWillReceiveProps({ query }) {
        if (query) {
            this.setState({ query })
        }
    }
    onSubmitHandler(e) {
        e.preventDefault();
        this.props.onSearch(this.state.query);
    }
    onChangeHandler(e) {
        this.setState({ query: e.currentTarget.value });
    }
    render() {
        return (
            <form className="searchBox" onSubmit={this.onSubmitHandler} role="search">
                <input className="searchBox__input searchBox__input--floated" onChange={this.onChangeHandler} value={this.state.query} tabIndex="1" type="text" maxLength="100" autoCapitalize="off" autoCorrect="off" spellCheck="false" autoFocus placeholder="Nunca dejes de buscar" autoComplete="off" />
                <button type="submit" className="searchBox__btn searchBox__btn--appended"><i className="icon icon--search">Buscar</i></button>
            </form>
        );
    }
}

export default SearchBox;