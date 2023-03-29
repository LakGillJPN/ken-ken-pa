import { React, useRef } from "react";

export default function PopupMenu(props) {
    const {onClick} = props;
    const inputRef = useRef();

    return (
        <div className="popup-menu-container">
            <input ref={inputRef} type="file" style={{display: "none"}}/>
            <button className="button" onClick={() => { inputRef.current.click() }} >
                Add a New Memory of prefecture name
            </button>
            
            <button className="button" onClick={onClick}>
                See Memories of prefecture name
            </button>
        </div>
    )
}