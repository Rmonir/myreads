import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookSearch from './components/bookSearch'
import BookList from './components/bookList'
import * as BooksApi from './booksAPI'
import { Routes, Route } from "react-router-dom";
class BooksApp extends React.Component {
  state = {
    books: [],
    bookShelves: [],
    isFlip: false
  }

  componentDidMount() {
    this.getBooks();
  }

  // changing shelf 
  onShelfChange(book, shelf) {
    let booksList = this.state.books
    let bookIndex = booksList.findIndex(b => b.id == book.id)
    if (bookIndex === -1) {
      booksList.push(book)
    } else {
      book.shelf = shelf
      booksList[bookIndex] = book
    }

    this.drawBookShelves(booksList)
    // update book object data with selected shelf
    BooksApi.update(book, shelf)

    this.flip(!this.state.isFlip)
  }

  // fo rerender the component 
  flip(isFlip) {
    this.setState({
      isFlip: isFlip
    })
  }

  // load books and rearrange it as shelves containing books
  getBooks() {
    BooksApi.getAll().then((books) => {
      this.drawBookShelves(books)
    })
  }

  // draw book shelves containing related books
  drawBookShelves(books) {
    // get distinct shelves array 
    let shelves = [...new Set(books.map(c => c.shelf))]
    // loop for each shelf and put related books in an array for it
    let bookShelves = shelves.filter(s => s !== 'none').map(shelf => {
      return [shelf, books.filter(c => c.shelf === shelf)]
    })
    // update bookShelves state
    this.setState({
      books: books,
      bookShelves
    })
  }

  render() {
    return (
      <div className="app">
        <Routes>
          <Route exact path="/" element={
            <BookList bookShelves={this.state.bookShelves} onShelfChangeHndler={this.onShelfChange.bind(this)} />}
          ></Route>
          <Route path="/search" element={
            <BookSearch shelvedBooks={this.state.books} onShelfChangeHndler={this.onShelfChange.bind(this)} />} >
          </Route>
        </Routes>
      </div>
    )
  }
}

export default BooksApp
