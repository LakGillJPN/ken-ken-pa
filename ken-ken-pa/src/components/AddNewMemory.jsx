import React from "react";
import UIText from "../data/locales.json"

export default function AddNewMemory(props) {
    const { currentLocale, selectedPrefecture } = props;
    
    return (
        <div>
            <p>{UIText["add-memory"][currentLocale]}</p>
            <div>
                <p>{UIText["select-prefecture"][currentLocale]}</p>
                <div>prefecture dropdown for {selectedPrefecture}</div>
            </div>
            <div>
                <p>{UIText["select-photo"][currentLocale]}</p>
                <div>file upload/photo preview here</div>
                <p>{UIText["remove-photo"][currentLocale]}</p>
            </div>
            <div>
                <p>{UIText["explain-memory"][currentLocale]}</p>
                <div>text box here</div>
            </div>
            <div>
                <p>{UIText["submit-memory"][currentLocale]}</p>
            </div>
        </div>
    );
};