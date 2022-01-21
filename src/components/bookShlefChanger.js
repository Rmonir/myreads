import React, { useEffect, useState } from "react";
import { BookShelvesLkp } from "../data/bookShelveslkp";
import * as BooksApi from '../booksAPI'

export const BookShelfChanger = (props) => {
    let { book, onShelfChangeHndler } = props
    const [shelf, setShelf] = useState('')

    useEffect(() => {
        if (!book.shelf) {
            BooksApi.get(book.id).then((bookWithShelf) => {
                book.shelf = bookWithShelf.shelf
                setShelf(book.shelf)
            })
        }
        setShelf(book.shelf)
    }, [book])

    function onShelfChange(e) {
        let selectedShelf = e.target.value;
        setShelf(selectedShelf)
        BooksApi.update(book, selectedShelf).then((data) => {
            onShelfChangeHndler();
        })
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