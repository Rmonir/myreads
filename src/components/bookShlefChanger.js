import React from "react";
import { BookShelvesLkp } from "../bookShelveslkp";

export const BookShelfChanger = (props) => {

    return (
        <div className="book-shelf-changer">
            <select>
                <option value="move" disabled>Move to...</option>
                {
                    Object.keys(BookShelvesLkp).map(key => (
                        key != 'none' ?
                            <option key={key} value={key}>{BookShelvesLkp[key]}</option>
                            :
                            <option key={key} value="none">None</option>
                    ))
                }
            </select>
        </div>
    )

}