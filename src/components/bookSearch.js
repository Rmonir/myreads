import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as BooksApi from '../booksAPI'
import { SearchKeyWords } from "../data/searchKeywords";
import BookCard from "./bookCard";
export default function BookSearch(props) {
    const [searchTerm, setSearchTerm] = useState("")
    const [searchResult, setsearchResult] = useState([])

    useEffect(() => {
        if (searchTerm.length > 2) {
            let searchKeyword = searchTerm;
            let keyWards = SearchKeyWords.filter(key => key.toLowerCase().includes(searchKeyword.trim().toLowerCase()));
            if (keyWards.length > 0) {
                BooksApi.search(searchKeyword.trim().toLowerCase()).then((searchResultData) => {
                    setsearchResult((searchResultData && searchResultData.length > 0) ? searchResultData : [])
                })
            } else {
                setsearchResult([])
            }
        }
    }, [searchTerm])

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
                                <BookCard book={book} />
                            </li>
                        ))
                    }
                </ol>
            </div>
        </div>
    )
}

