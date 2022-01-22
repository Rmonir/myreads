import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as BooksApi from '../booksAPI'
import { SearchKeyWords } from "../data/searchKeywords";
import BookCard from "./bookCard";
export default function BookSearch(props) {
    const { shelvedBooks, onShelfChangeHndler } = props;
    const [searchTerm, setSearchTerm] = useState("")
    const [searchResult, setsearchResult] = useState([])

    // this effect will raised after changing searchTerm value
    useEffect(() => {
        // assure that searchTerm more than 2 letters
        if (searchTerm.length > 2) {
            let searchKeyword = searchTerm;
            // check if searchTerm in the SearchKeyWords predefined array 
            let keyWards = SearchKeyWords.filter(key => key.toLowerCase().includes(searchKeyword.trim().toLowerCase()));
            // if found  we will go through search process
            if (keyWards.length > 0) {
                // calling search api 
                BooksApi.search(searchKeyword.trim().toLowerCase()).then((searchResultData) => {
                    if (searchResultData && searchResultData.length > 0) {
                        searchResultData.map(book => {
                            let shelfedBook = shelvedBooks.filter(b => b.id == book.id);
                            book.shelf = (shelfedBook && shelfedBook.length > 0) ? shelfedBook[0].shelf : 'none'
                            return book;
                        })
                    }
                    // set search result state to update the searchResult with search result data
                    setsearchResult((searchResultData && searchResultData.length > 0) ? searchResultData : [])
                })
            } else {
                // clear data if there are any data returned 
                setsearchResult([])
            }
        } else {
            setsearchResult([])
        }
    }, [searchTerm])

    // updating search term by changing text in the searchTem input
    function searchTermOnChange(e) {
        let query = e.target.value;
        setSearchTerm(query)
    }

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to='/' title="close" className="close-search"  >
                    <button className="close-search" >Close</button>
                </Link>
                <div className="search-books-input-wrapper">
                    <input type="text" name="searchTem" value={searchTerm} onChange={searchTermOnChange} placeholder="Search by title or author" />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {
                        searchResult.map((book) => (
                            <li key={book.id}>
                                <BookCard book={book} onShelfChangeHndler={onShelfChangeHndler} />
                            </li>
                        ))
                    }
                </ol>
            </div>
        </div>
    )
}

