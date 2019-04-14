import React, { Component } from 'react';
import './App.css';
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Loader from "./components/Loader";

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
            let url = new URL("https://www.googleapis.com/books/v1/volumes");
            url.search = new URLSearchParams({
                q: this.state.keyword,
                key: "AIzaSyD0RewGs-7f9r5G-pkg7NWnNJ2QnPe6Gqk",
                startingIndex: this.state.books.length,
                maxResults: 40
            });

            this.setState({
                fetchingBooks: true,
                bookFetchSuccess: false,
                bookFetchError: false
            });

            fetch(url)
            .then(response => response.json())
            .then(data => {
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
            <div>
            <SearchBar
                keyword={this.state.keyword}
                handleKeywordChange={this.handleKeywordChange}
                searchAction={this.searchAction}
            />
            <SearchResults
                books={this.state.books}
                fetchBooks={this.fetchBooks}
            />
            <Loader loading={this.state.fetchingBooks} />
            </div>
        );
    }
}

export default App;
