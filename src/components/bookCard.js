import React from "react";
import { BookShelfChanger } from "./bookShlefChanger";

export default function BookCard(props) {
    const { book } = props
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                <BookShelfChanger />
            </div>
            <div className="book-title">{book.title}</div>
            {book.authors.map(author => (
                <div key={author} className="book-authors">
                    {
                        author
                    }
                </div>

            ))}
        </div>
    )
}