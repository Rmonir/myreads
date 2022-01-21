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

  // reload data after changing book shelf
  onRefreshData() {
    this.getBookShelves();
  }

  // load books and rearrange it as shelves containing books
  getBookShelves() {
    BooksApi.getAll().then((books) => {
      // get distinct shelves array 
      let shelves = [... new Set(books.map(c => c.shelf))]
      // loop for each shelf and put related books in an array for it
      let bookShelves = shelves.map(shelf => {
        return [shelf, books.filter(c => c.shelf === shelf)]
      })
      // update bookShelves state
      this.setState({
        bookShelves
      })
    })
  }

  render() {
    return (
      <div className="app">
        <Routes>
          <Route exact path="/" element={
            <BookList bookShelves={this.state.bookShelves} onShelfChangeHndler={this.onRefreshData.bind(this)} />}
          ></Route>
          <Route path="/search" element={
            <BookSearch onGoBack={() => { this.onRefreshData() }} />} >
          </Route>
        </Routes>
      </div>
    )
  }
}

export default BooksApp
