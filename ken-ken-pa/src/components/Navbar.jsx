import { React } from "react";
import UIText from "../data/locales.json";

export default function Navbar(props) {
    const { currentLocale, changeLangToJa, changeLangToEn, goToHome, currentView, handleViewChange, loggedIn } = props;

    return (
    <div className="navbar">
        { 
            currentView !== "Login"
                ? (
                    loggedIn
                        ? (
                            <>
                                <button className="button" value="AddNewMemory" onClick={handleViewChange} >
                                    { UIText["add-memory"][currentLocale] }
                                </button>
                                <button className="logout-button">{UIText.logout[currentLocale]}</button>
                            </>
                        ) : <button className="login-button" value="Login" onClick={handleViewChange}>{UIText.login[currentLocale]}</button>
                ) : <></>
        }

        { currentView === "Memories" || currentView === "PrefectureMemories" || currentView === "AddNewMemory" ? (
            <h1 
            className="home-button"
            onClick={goToHome}>{UIText.home[currentLocale]}
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
