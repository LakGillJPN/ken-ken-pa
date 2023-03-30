import React from "react";
import UIText from "../data/locales.json"

export default function AddNewMemory(props) {
    const { currentLocale, selectedPrefecture } = props;
    
    return (
        <div>
            <h1>{UIText["add-memory"][currentLocale]}</h1>
            <div>
                <p>{UIText["select-prefecture"][currentLocale]}</p>
                <div>prefecture dropdown for {selectedPrefecture}</div>
            </div>
            <div>
                <p>{UIText["select-photo"][currentLocale]}</p>
                <div>file upload/photo preview here</div>
                <input ref={inputRef} type="file" style={{display: "none"}}/>
                <button className="button" onClick={() => { inputRef.current.click() }} >
                    {UIText["choose-photo"][currentLocale]}
                </button>
                <button className="button">
                    × {UIText["remove-photo"][currentLocale]}
                </button>
            </div>
            <div>
                <p>{UIText["explain-memory"][currentLocale]}</p>
                <div>text box here</div>
            </div>
            <div>
                <button>{UIText["submit-memory"][currentLocale]}</button>
            </div>
        </div>
    );
};