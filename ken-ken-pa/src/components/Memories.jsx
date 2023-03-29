import { React, useRef } from "react";
import UIText from "../data/locales.json";

export default function Memories(props) {
    const { currentLocale } = props;
    const inputRef = useRef();

   return(
    <div className="memories-container">
        <h1>{UIText["my-memories"][currentLocale][0]}</h1>
        <h2>{UIText["my-memories"][currentLocale][1]}</h2>
        <p>Photo zone</p>
        
        <div className="side-menu">
            <input ref={inputRef} type="file" style={{display: "none"}}/>
            <button className="button" onClick={() => { inputRef.current.click(); }} >
                {
                    currentLocale === "en"
                        ? UIText["add-memory-of"][currentLocale] + "prefecture name"
                        : "prefecture name" + UIText["add-memory-of"][currentLocale]
                }
            </button>
        </div>
    </div>
   );
}