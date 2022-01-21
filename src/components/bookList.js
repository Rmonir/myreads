import React from "react";
import BookShelf from "./bookShelf";
import { Link } from 'react-router-dom'

export default function BookList(props) {
    const { bookShelves, onShelfChangeHndler } = props
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                {
                    bookShelves.map(shelf => (
                        <div key={shelf[0]}>
                            <BookShelf shelf={shelf[0]} booksList={shelf[1]} onShelfChangeHndler={onShelfChangeHndler}/>
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