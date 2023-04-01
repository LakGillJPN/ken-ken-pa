import { React } from "react";
import UIText from "../data/locales.json";
import "./Memories.css";

export default function Memories(props) {
    const { onClick, currentLocale } = props;

   return(
    <div className="memories-container">
        <h1>{UIText["my-memories"][0][currentLocale]}</h1>
        <h2>{UIText["my-memories"][1][currentLocale]}</h2>
        <p>Photo zone</p>
        
        <div className="side-menu">
            <button className="button" value="AddNewMemory" onClick={onClick} >
                { UIText["add-memory"][currentLocale] }
            </button>
        </div>
    </div>
   );
}