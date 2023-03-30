import { React, useRef } from "react";
import UIText from "../data/locales.json";

export default function PrefectureMemories(props) {
    const { currentLocale, selectedPrefecture } = props;
    const inputRef = useRef();

   return(
    <div className="memories-container">
        <h1>{UIText["memories-of"][0][currentLocale] + UIText.prefectures[selectedPrefecture][currentLocale]}</h1>
        <h2>{UIText["memories-of"][1][currentLocale]}</h2>
        <p>Photo zone</p>
        
        <div className="side-menu">
            <input ref={inputRef} type="file" style={{display: "none"}}/>
            <button className="button" onClick={() => { inputRef.current.click(); }} >
                {
                    currentLocale === "en"
                        ? UIText["add-memory-of"][currentLocale] + UIText.prefectures[selectedPrefecture][currentLocale]
                        : UIText.prefectures[selectedPrefecture][currentLocale] + UIText["add-memory-of"][currentLocale]
                }
            </button>
        </div>
    </div>
   );
}