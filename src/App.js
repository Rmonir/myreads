import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookSearch from './components/bookSearch'
import BookList from './components/bookList'
import * as BooksApi from './booksAPI'
import { Routes, Route } from "react-router-dom";
class BooksApp extends React.Component {
  state = {
    bookShelves: []
  }
  componentDidMount() {
    this.getBookShelves();
  }

  onShelfChangeHndler() {
    this.getBookShelves();
  }

  getBookShelves() {
    BooksApi.getAll().then((books) => {
      let shelves = [... new Set(books.map(c => c.shelf))]
      let bookShelves = shelves.map(shelf => {
        return [shelf, books.filter(c => c.shelf === shelf)]
      })
      this.setState({
        bookShelves
      })
    })
  }

  render() {
    return (
      <div className="app">
        <Routes>
          <Route exact path="/"  element={
            <BookList bookShelves={this.state.bookShelves} onShelfChangeHndler={this.onShelfChangeHndler.bind(this)} />}
          ></Route>
          <Route path="/search" element={
            <BookSearch />} >
          </Route>
        </Routes>
      </div>
    )
  }
}

export default BooksApp
