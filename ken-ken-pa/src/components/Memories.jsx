import { React, useRef } from "react";

export default function Memories() {
   const inputRef = useRef();

   return(
    <div className="memories-container">
        <h1>My memories</h1>
        <h2>Your photos and memos</h2>
        <p>Photo zone</p>
        
        <div className="side-menu">
            <input ref={inputRef} type="file" style={{display: "none"}}/>
            <button className="button" onClick={() => { inputRef.current.click(); }} >
                Add a New Memory of prefecture name
            </button>
        </div>
    </div>
   );
}