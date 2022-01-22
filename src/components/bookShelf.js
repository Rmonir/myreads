import React from "react";
import BookCard from "./bookCard";
import { BookShelvesLkp } from "../data/bookShelveslkp";
import PropTypes from 'prop-types'
function BookShelf(props) {
    const { shelf, booksList, onShelfChangeHndler } = props
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{BookShelvesLkp[shelf]}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        /*
                            for each shelf we have to draw books list as BookCard
                        */
                        booksList.map(book => (
                            <li key={book.id}>
                                <BookCard book={book} onShelfChangeHndler={onShelfChangeHndler} />
                            </li>
                        ))
                    }
                </ol>
            </div>
        </div>
    )
}

BookShelf.propTypes = {
    shelf: PropTypes.string.isRequired,
    booksList: PropTypes.array.isRequired,
    onShelfChangeHndler: PropTypes.func.isRequired
}
export default BookShelf
