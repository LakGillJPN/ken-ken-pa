import React, { useState } from "react";
import './App.css';
import Map from "./components/Map";
import Memories from "./components/Memories";
import PopupMenu from "./components/PopupMenu";
import UIText from "./data/locales.json";
import Navbar from "./components/Navbar";


export default function App() {
  const [isShown, setPopupMenu] = useState(false);
  const [currentView, setCurrentView] = useState("");
  const [currentLocale, setCurrentLocale] = useState("en");

  const handlePopupMenu = (event) => {
    event.preventDefault();
    setPopupMenu(true);
  }

  const handleSeeMemoriesClicked = (event) => {
    event.preventDefault();
    setCurrentView("Memories");
  }

  const changeLangToJa = (event) => {
    event.preventDefault();
    setCurrentLocale("ja");
  }

  const changeLangToEn = (event) => {
    event.preventDefault();
    setCurrentLocale("en");
  }

  const goToHome = (event) => {
    event.preventDefault();
    setCurrentView("")
  }


  return (
    <div className="App">
      <h1>{UIText.appName[currentLocale]}</h1>

      {currentView === "Memories" ? (
        <Memories currentLocale={currentLocale}></Memories>
      ) : (
        <div>
          <Map 
          handlePopupMenu={handlePopupMenu}></Map>

          {isShown === true ? (
            <PopupMenu currentLocale={currentLocale} onClick={handleSeeMemoriesClicked}></PopupMenu>
          ) : (
            <div></div>
          )}
        </div>
      )}
      <Navbar
      changeLangToJa={changeLangToJa}
      changeLangToEn={changeLangToEn}
      goToHome={goToHome}
      currentView={currentView}
      >
      </Navbar>
    </div>
  );
}