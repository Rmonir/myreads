import React from "react";
import BookCard from "./bookCard";

export default function BookShelf(props) {
    const {shelf, booksList} = props
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        booksList.map(book =>(
                            <li key={book.id}>
                                <BookCard  book={book} />
                            </li>
                        ))
                    }
                </ol>
            </div>
        </div>
    )
}