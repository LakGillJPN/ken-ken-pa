import { React, useRef } from "react";
import UIText from "../data/locales.json";

export default function PopupMenu(props) {
    const {onClick, currentLocale} = props;
    const inputRef = useRef();

    return (
        <div className="popup-menu-container">
            <input ref={inputRef} type="file" style={{display: "none"}}/>
            <button className="button" onClick={() => { inputRef.current.click() }} >
                {
                    currentLocale === "en"
                        ? UIText["add-memory-of"][currentLocale] + "prefecture name"
                        : "prefecture name" + UIText["add-memory-of"][currentLocale]
                }
            </button>
            
            <button className="button" onClick={onClick}>
                {
                    currentLocale === "en"
                        ? UIText["see-memories-of"][currentLocale] + "prefecture name"
                        : "prefecture name" + UIText["see-memories-of"][currentLocale]
                }
            </button>
        </div>
    )
}