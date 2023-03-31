import { React } from "react";
import UIText from "../data/locales.json";

export default function Navbar(props) {
    const { currentLocale, changeLangToJa, changeLangToEn, goToHome, currentView, handleViewChange } = props;

    return (
    <div className="navbar">
        <h2 className="logout-button">Logout</h2>

        { currentView === "Memories" || currentView === "PrefectureMemories" || currentView === "AddNewMemory" ? (
            <h1 
            className="home-button"
            onClick={goToHome}>Home
            </h1>
        ) : ("")}

        { currentView === "" || currentView === "PrefectureMemories" ? (
            <button 
            className="my-memories-button"
            value="Memories"
            onClick={handleViewChange}
            >
            { UIText["my-memories"][0][currentLocale] }
            </button>
        ) : ("")}

        <div className="language-button">
            <button onClick={changeLangToJa}>日本語</button>
            <button onClick={changeLangToEn}>English</button>
        </div>
    </div>
   )
}
