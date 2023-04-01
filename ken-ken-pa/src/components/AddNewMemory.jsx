import React, { useState, useRef } from "react";
import UIText from "../data/locales.json"
import SubmitBtn from "./SubmitBtn";
import "./AddNewMemory.css";

export default function AddNewMemory(props) {
    const { currentLocale, selectedPrefecture } = props;
    const [photoIsSelected, setPhotoIsSelected] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);
    const inputRef = useRef();

    const updateImageDisplay = (event) => {
        if (event.target.files && event.target.files[0]) {
            setPhotoIsSelected(true);
            setCurrentImage(URL.createObjectURL(event.target.files[0]));
        } else {
            setPhotoIsSelected(false);
            inputRef.current.value = null;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // const form = event.target;
        // const formData = new FormData(form);

        // fetch('/api', {method: form.method, body: formData});

        return; // Send to server here
    }
    
    return (
        <form className="memory-form" method="post" onSubmit={handleSubmit}>
            <h1>{UIText["add-memory"][currentLocale]}</h1>
            <div>
                <label>
                    {UIText["select-prefecture"][currentLocale]}
                    <select name="prefecture" id="select-prefecture" defaultValue={selectedPrefecture} required>
                        {
                            Object.keys(UIText.prefectures).sort((a, b) => Number(a) - Number(b)).map((id) => {
                                return <option value={id} key={id}>{UIText.prefectures[id][currentLocale]}</option>;
                            })
                        }
                    </select>
                </label>
            </div>
            <div className="memory-content-container">
                <div className="photo-selector">
                    <label>
                        {UIText["select-photo"][currentLocale]}
                        <input name="photo" id="photo-fileselect" ref={inputRef} type="file" style={{display: "none"}} onChange={updateImageDisplay} required/>
                    </label>
                    { photoIsSelected
                        ? (
                            <>
                                <img src={currentImage} alt="User selection."/>
                                <button type="button" onClick={updateImageDisplay}>
                                    × {UIText["remove-photo"][currentLocale]}
                                </button>
                            </>
                        )
                        : (
                            <>
                                <button type="button" onClick={() => { inputRef.current.click() }} >
                                    {UIText["choose-photo"][currentLocale]}
                                </button>
                            </>
                        )
                    }
                </div>
                <div className="text-editor">
                    <label htmlFor="memory-textarea">
                        {UIText["explain-memory"][currentLocale]}
                    </label>
                    <textarea name="memoryText" id="memory-textarea" type="text" rows="5"/>
                </div>
            </div>
            <div>
                <SubmitBtn type="memory" currentLocale={currentLocale}/>
            </div>
        </form>
    );
};