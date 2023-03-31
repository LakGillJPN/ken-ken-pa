import { React, useRef } from "react";
import UIText from "../data/locales.json";

export default function Memories(props) {
    const { currentLocale } = props;
    const inputRef = useRef();

   return(
    <div className="memories-container">
        <h1>{UIText["my-memories"][0][currentLocale]}</h1>
        <h2>{UIText["my-memories"][1][currentLocale]}</h2>
        <p>Photo zone</p>
        
        <div className="side-menu">
            <input ref={inputRef} type="file" style={{display: "none"}}/>
            <button className="button" onClick={() => { inputRef.current.click(); }} >
                { UIText["add-memory"][currentLocale] }
            </button>
        </div>
    </div>
   );
}