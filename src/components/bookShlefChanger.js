import React, { useEffect, useState } from "react";
import { BookShelvesLkp } from "../data/bookShelveslkp";
import * as BooksApi from '../booksAPI'

export const BookShelfChanger = (props) => {
    let { book, onShelfChangeHndler } = props
    const [shelf, setShelf] = useState('')

    // this effect will raised while changing 
    useEffect(() => {
       setShelf(book.shelf)
    }, [book])

    // changing shelf 
    function onShelfChange(e) {
        let selectedShelf = e.target.value;
        onShelfChangeHndler(book,selectedShelf);
    }

    return (
        <div className="book-shelf-changer">
            <select value={shelf} onChange={(event) => onShelfChange(event)}>
                <option value="move" disabled>Move to...</option>
                {
                    Object.keys(BookShelvesLkp).map(key => (
                        <option key={key} value={key}>{BookShelvesLkp[key]}</option>
                    ))
                }
            </select>
        </div>
    )
}