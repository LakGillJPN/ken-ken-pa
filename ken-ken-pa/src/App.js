import React, { useState } from "react";
import './App.css';
import Map from "./components/Map";
import Memories from "./components/Memories";
import PopupMenu from "./components/PopupMenu";
import PrefectureMemories from "./components/PrefectureMemories";
import UIText from "./data/locales.json";


export default function App() {
  //The menu is poped up === isShown is true
  const [isShown, setPopupMenu] = useState(false);
  //currentView becomes "Memories", if see memories button in the pop-up menu is clicked
  const [currentView, setCurrentView] = useState("");
  const [currentLocale, setCurrentLocale] = useState("en");
  const [selectedPrefecture, setSelectedPrefecture] = useState("");

  const handlePopupMenu = (event) => {
    //if users click a prefecture, the menu is poped up
    event.preventDefault();
    setPopupMenu(true);
  }

  const handleSeeMemoriesClicked = (event) => {
    //if see memories button in the menu clicked, currentView becomes "Memories"
    event.preventDefault();
    setCurrentView("Memories");
  }

  const handleSeePrefectureMemoriesClicked = (event) => {
    event.preventDefault();
    setCurrentView("PrefectureMemories");
  }

  return (
    <div className="App">
      <h1>{UIText.appName[currentLocale]}</h1>

      {
        currentView === "Memories" ? (
          <Memories currentLocale={currentLocale}></Memories>
        ) : (
          currentView === "PrefectureMemories" ? (
            <PrefectureMemories currentLocale={currentLocale} selectedPrefecture={selectedPrefecture}></PrefectureMemories>
          ) : (
          <div>
            <Map 
            handlePopupMenu={handlePopupMenu}
            setSelectedPrefecture={setSelectedPrefecture}></Map>

            {isShown === true ? (
              <PopupMenu currentLocale={currentLocale} selectedPrefecture={selectedPrefecture} onClick={handleSeePrefectureMemoriesClicked}></PopupMenu>
            ) : (
              <div></div>
            )}
          </div>
        ))
      }

      <div className="side-menu">
        <button onClick={() => setCurrentLocale("ja")}>日本語</button>
        <button onClick={() => setCurrentLocale("en")}>English</button>
      </div>
    </div>
  );
}