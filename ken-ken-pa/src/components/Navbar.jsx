import { React } from "react";
import UIText from "../data/locales.json";

export default function Navbar(props) {
    const { currentLocale, changeLangToJa, changeLangToEn, goToHome, currentView, handleSeeMemoriesClicked } = props;

    return (
    <div className="navbar">
        <h2 className="logout-button">Logout</h2>

        { currentView === "Memories" || currentView === "PrefectureMemories" ? (
            <h1 
            className="home-button"
            onClick={goToHome}>Home
            </h1>
        ) : ("")}

        { currentView === "" || currentView === "PrefectureMemories" ? (
            <h1 
            className="my-memories-button"
            onClick={handleSeeMemoriesClicked}
            >
            { UIText["my-memories"][0][currentLocale] }
            </h1>
        ) : ("")}

        <div className="language-button">
            <button onClick={changeLangToJa}>日本語</button>
            <button onClick={changeLangToEn}>English</button>
        </div>
    </div>
   )
}
