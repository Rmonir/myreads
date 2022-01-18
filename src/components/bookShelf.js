import React from "react";
import BookCard from "./bookCard";

export default function BookShelf() {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    <li>
                        <BookCard />
                    </li>
                    <li>
                        <BookCard />
                    </li>
                </ol>
            </div>
        </div>
    )
}