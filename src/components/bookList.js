import React, { useState } from "react";
import BookShelf from "./bookShelf";

export default function BookList(props) {
    const {bookShelves} = props
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                {
                    bookShelves.map(shelf => (
                        <div key={shelf[0]}>
                            <BookShelf  shelf={shelf[0]} booksList={shelf[1]} />
                        </div>
                    ))
                }
            </div>
            <div className="open-search">
                <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
        </div>
    )
}