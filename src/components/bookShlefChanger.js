import React, { useEffect, useState } from "react";
import { BookShelvesLkp } from "../data/bookShelveslkp";
import * as BooksApi from '../booksAPI'

export const BookShelfChanger = (props) => {
    let { book, onShelfChangeHndler } = props
    const [shelf, setShelf] = useState('')

    // this effect will raised while changing 
    useEffect(() => {
        /* in case of book data have no shelf attribute
         ( in case of calling search api => returns book object with out shelf )*/
        if (!book.shelf) {
            BooksApi.get(book.id).then((bookWithShelf) => {
                // set book shelf 
                book.shelf = bookWithShelf.shelf
                // set shelf state
                setShelf(book.shelf)
            })
        }
        // in case of book object have shelf we dirctly set shelf state from 
        setShelf(book.shelf)
    }, [book])

    // changing shelf 
    function onShelfChange(e) {
        let selectedShelf = e.target.value;
        // set shelf state
        setShelf(selectedShelf)
        // update book object data with selected shelf
        BooksApi.update(book, selectedShelf).then((data) => {
            // call the handler that will raised after changing shelf
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