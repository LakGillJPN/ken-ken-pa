import { React } from "react";
import UIText from "../data/locales.json";
import "./Navbar.css"

export default function Navbar(props) {
    const { currentLocale, changeLangToJa, changeLangToEn, goToHome, currentView, handleViewChange, loggedIn } = props;

    return (
    <div className="navbar">
        { 
            currentView !== "Login"
                && ( loggedIn
                        ? (
                            <>
                                <button className="button" value="AddNewMemory" onClick={handleViewChange} >
                                    { UIText["add-memory"][currentLocale] }
                                </button>
                                <button className="logout-button">{UIText.logout[currentLocale]}</button>
                            </>
                        ) : <button className="login-button" value="Login" onClick={handleViewChange}>{UIText.login[currentLocale]}</button>
        )}

        { currentView === "Memories" || currentView === "PrefectureMemories" || currentView === "AddNewMemory" ? (
            <button 
            className="home-button"
            onClick={goToHome}>{UIText.home[currentLocale]}
            </button>
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

        <div className="language-button-container">
            <button
            className="language-button"
            onClick={changeLangToJa}
            >日本語
            </button>
            
            <button
            className="language-button"
            onClick={changeLangToEn}
            >English</button>
        </div>
    </div>
   )
}
