import React, { Component } from 'react';

export default class SearchBar extends Component {
    render() {
        return(
            <div className="searchBar">
                <input
                    className="searchInput"
                    type="text"
                    placeholder="Enter keyword for books"
                    onChange={this.props.handleKeywordChange}
                />
                <button
                    onClick={this.props.searchAction}
                >
                    Search!
                </button>
            </div>
        );
    }
}