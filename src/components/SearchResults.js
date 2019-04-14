import React, { Component } from 'react';

export default class SearchResults extends Component {
    renderBook(item, index) {
        return(
          <li key={index}>
              <span className="bookIndex">
                  {index}
              </span>
              <span className="bookTitle">
                  {item.volumeInfo.title}
              </span>
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
                    <ol
                        className="bookList"
                    >
                        {
                            this.props.books.map((book, index) => {
                                return this.renderBook(book, index);
                            })
                        }
                    </ol>
                </div>
            );
        }

        return null;
    }
}