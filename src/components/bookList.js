import React from "react";
import BookShelf from "./bookShelf";
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

 function BookList(props) {
    const { bookShelves, onShelfChangeHndler } = props
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                {
                    /* loop for each shelf to set BookShlf properties 
                       shelf => book shelf title
                       booksList => the books in this shelf
                       onShelfChangeHndler => to rais the event for changing any shelf to parent app
                    */
                    bookShelves.map(shelf => (
                        <div key={shelf[0]}>
                            <BookShelf shelf={shelf[0]} booksList={shelf[1]} onShelfChangeHndler={onShelfChangeHndler} />
                        </div>
                    ))
                }
            </div>
            <div className="open-search">
                <Link to='/search' title="Add a book" className="search-link" >
                    <button className="search-link" > Add a book</button>
                </Link>
            </div>
        </div>
    )
}

BookList.propTypes  = {
    bookShelves: PropTypes.array.isRequired,
    onShelfChangeHndler: PropTypes.func.isRequired
}

export default BookList