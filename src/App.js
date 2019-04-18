import React, { Component } from 'react';
import './App.css';
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Logo from "./components/Logo";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            keyword: "",
            fetchingBooks: false,
            bookFetchSuccess: false,
            bookFetchError: false,
        };
        this.searchAction = this.searchAction.bind(this);
        this.fetchBooks = this.fetchBooks.bind(this);
    }

    handleKeywordChange = (event) => {
        this.setState({
            keyword: event.target.value
        });
    };

    searchAction() {
        this.clearBooks();
        this.fetchBooks();
    }

    async fetchBooks() {
        if(!this.state.fetchingBooks) {
            const query = `q=${this.state.keyword}`;
            const key = `key=your own google api key, see readme for more details`;
            const startingIndex = `startingIndex=${this.state.books.length}`;
            const maxResults = `maxResults=${40}`;
            const url = `https://www.googleapis.com/books/v1/volumes?${query}&${key}&${startingIndex}&${maxResults}`;

            this.setState({
                fetchingBooks: true,
                bookFetchSuccess: false,
                bookFetchError: false
            });

            fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    books: [ ...this.state.books, ...data.items],
                    fetchingBooks: false,
                    bookFetchSuccess: true,
                    bookFetchError: false
                });
            }).catch((error) => {
                console.log(error);
                this.setState({
                    fetchingBooks: false,
                    bookFetchSuccess: false,
                    bookFetchError: true
                });
            });
        }
    };

    clearBooks() {
        this.setState({
            books: []
        });
    }

    render() {
        return (
            <div className="searchApp">
                <Logo loading={this.state.fetchingBooks} />
                <SearchBar
                    keyword={this.state.keyword}
                    handleKeywordChange={this.handleKeywordChange}
                    searchAction={this.searchAction}
                />
                <SearchResults
                    books={this.state.books}
                    fetchBooks={this.fetchBooks}
                />
            </div>
        );
    }
}

export default App;
