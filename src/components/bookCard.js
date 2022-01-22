import React from "react";
import BookShelfChanger from "./bookShlefChanger";
import PropTypes from 'prop-types'

function BookCard(props) {
    let { book, onShelfChangeHndler } = props

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{
                    width: 128, height: 193, backgroundImage: `url("${(book.imageLinks && book.imageLinks.thumbnail) && (
                        book.imageLinks.thumbnail)}")`
                }}></div>
                <BookShelfChanger book={book} onShelfChangeHndler={onShelfChangeHndler} />
            </div>
            <div className="book-title">{book.title}</div>
            {book.authors && (
                book.authors.map(author => (
                    <div key={author} className="book-authors">
                        {
                            author
                        }
                    </div>
                ))
            )}
        </div>
    )
}

BookCard.propTypes = {
    book: PropTypes.object.isRequired,
    onShelfChangeHndler: PropTypes.func.isRequired
}

export default BookCard