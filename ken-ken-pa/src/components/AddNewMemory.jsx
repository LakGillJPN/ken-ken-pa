import React from "react";
import UIText from "../data/locales.json"

export default function AddNewMemory(props) {
    const { currentLocale, selectedPrefecture } = props;
    const { photoIsSelected, setPhotoIsSelected } = useState(false);
    const inputRef = useRef();
    
    return (
        <div>
            <h1>{UIText["add-memory"][currentLocale]}</h1>
            <div>
                <label for="select-prefecture">{UIText["select-prefecture"][currentLocale]}</label>
                <select id="select-prefecture" required>
                    {
                        Object.keys(UIText.prefectures).map((id) => {
                            return id === selectedPrefecture
                                ? <option value={id} selected>{UIText.prefectures[id][currentLocale]}</option>
                                : <option value={id}>{UIText.prefectures[id][currentLocale]}</option>;
                        })
                    }
                </select>
            </div>
            <div>
            <label for="photo-fileselect">{UIText["select-photo"][currentLocale]}</label>
            <input id="photo-fileselect" ref={inputRef} type="file" style={{display: "none"}}/>
            { photoIsSelected
                ? (
                    <>
                        <img src=""/>
                        <button className="button">
                            × {UIText["remove-photo"][currentLocale]}
                        </button>
                    </>
                )
                : (
                    <>
                        <button className="button" onClick={() => { inputRef.current.click() }} >
                            {UIText["choose-photo"][currentLocale]}
                        </button>
                    </>
                )
            }
            </div>
            <div>
                <label for="memory-textarea">{UIText["explain-memory"][currentLocale]}</label>
                <textarea id="memory-textarea" type="text" rows="5"></textarea>
            </div>
            <div>
                <button>{UIText["submit-memory"][currentLocale]}</button>
            </div>
        </div>
    );
};