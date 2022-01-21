import React from "react";
import { BookShelfChanger } from "./bookShlefChanger";
import * as BooksApi from '../booksAPI'

export default function BookCard(props) {
    let { book, onShelfChangeHndler } = props
    function refreshBookData() {
        BooksApi.get(book.id).then((bookData) => {
            book = bookData
        })
    }
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{
                    width: 128, height: 193, backgroundImage: `url("${(book.imageLinks && book.imageLinks.thumbnail) && (
                        book.imageLinks.thumbnail)}")`
                }}></div>
                <BookShelfChanger book={book} onShelfChangeHndler={onShelfChangeHndler == null ? refreshBookData : onShelfChangeHndler} />
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