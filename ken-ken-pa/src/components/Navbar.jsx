import { React } from "react";

export default function Navbar(props) {
    const { changeLangToJa, changeLangToEn, goToHome, currentView } = props;

    return (
    <div className="navbar">
        <h2>Logout</h2>

        { currentView === "Memories" ? (
            <h1 
            className="home-button"
            onClick={goToHome}>Home
            </h1>
        ) : (
            <button>My Memories</button>
        )}

        <div>
            <button onClick={changeLangToJa}>日本語</button>
            <button onClick={changeLangToEn}>English</button>
        </div>
    </div>
   )
}
