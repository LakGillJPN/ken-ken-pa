import { React, useRef } from "react";
import UIText from "../data/locales.json";

export default function PopupMenu(props) {
    const {onClick, currentLocale, selectedPrefecture} = props;
    const inputRef = useRef();

    return (
        <div className="popup-menu-container">
            <input ref={inputRef} type="file" style={{display: "none"}}/>
            <button className="button" onClick={() => { inputRef.current.click() }} >
                {
                    currentLocale === "en"
                        ? UIText["add-memory-of"][currentLocale] + UIText.prefectures[selectedPrefecture][currentLocale]
                        : UIText.prefectures[selectedPrefecture][currentLocale] + UIText["add-memory-of"][currentLocale]
                }
            </button>
            
            <button className="button" onClick={onClick}>
                {
                    currentLocale === "en"
                        ? UIText["see-memories-of"][currentLocale] + UIText.prefectures[selectedPrefecture][currentLocale]
                        : UIText.prefectures[selectedPrefecture][currentLocale] + UIText["see-memories-of"][currentLocale]
                }
            </button>
        </div>
    )
}