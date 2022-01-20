import React from "react";
import { BookShelvesLkp } from "../data/bookShelveslkp";

export const BookShelfChanger = (props) => {

    return (
        <div className="book-shelf-changer">
            <select>
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