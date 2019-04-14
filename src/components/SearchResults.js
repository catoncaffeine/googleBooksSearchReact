import React, { Component } from 'react';

export default class SearchResults extends Component {
    renderBook(book, index) {
        return(
          <li key={index}>
              {book.volumeInfo.title}
          </li>
        );
    }

    handleScroll = (event) => {
        const {scrollTop, scrollHeight, offsetHeight} = event.target;
        if((scrollHeight - offsetHeight - scrollTop) <= 0) {
            this.props.fetchBooks();
        }
    };

    render() {
        if(this.props.books && this.props.books.length) {
            return (
                <div
                    className="searchResults"
                    onScroll={this.handleScroll}
                >
                    <ol>
                        {
                            this.props.books.map((book, index) => {
                                return this.renderBook(book, index);
                            })
                        }
                    </ol>
                </div>
            );
        }

        return "";
    }
}