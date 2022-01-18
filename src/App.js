import React, { useState } from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookSearch from './components/bookSearch'
import BookList from './components/bookList'
import * as BooksApi from './booksAPI'
class BooksApp extends React.Component {

  state = {
    books: [],
    bookShelves: []
  }

  componentDidMount() {
    BooksApi.getAll().then((books) => {
      let shelves = [... new Set(books.map(c => c.shelf))]
      let bookShelves = shelves.map(shelf => {
        return [shelf, books.filter(c => c.shelf === shelf)]
      })
      console.log(bookShelves)
      this.setState({
        books,
        bookShelves

      })
    })
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <BookSearch books={this.state.books} />
        ) : (
          <BookList bookShelves={this.state.bookShelves} />
        )}
      </div>
    )
  }
}

export default BooksApp
