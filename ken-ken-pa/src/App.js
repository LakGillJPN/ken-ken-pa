import React, { useState } from "react";
import './App.css';
import Map from "./components/Map";
import Memories from "./components/Memories";
import PopupMenu from "./components/PopupMenu";
import PrefectureMemories from "./components/PrefectureMemories";
import UIText from "./data/locales.json";
import Navbar from "./components/Navbar";


export default function App() {
  const [isShown, setPopupMenu] = useState(false);
  const [currentView, setCurrentView] = useState("");
  const [currentLocale, setCurrentLocale] = useState("en");
  const [selectedPrefecture, setSelectedPrefecture] = useState("");

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
    setCurrentView("");
    setPopupMenu(false);
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
            <Map 
            handlePopupMenu={handlePopupMenu}
            setSelectedPrefecture={setSelectedPrefecture}></Map>
          )
        )
      }
          <div>
            {isShown === true && currentView === "" ? (
              <PopupMenu currentLocale={currentLocale} selectedPrefecture={selectedPrefecture} onClick={handleSeePrefectureMemoriesClicked}></PopupMenu>
            ) : (
              <div></div>
            )}
          </div>
      
          <Navbar
          currentLocale={currentLocale}
          changeLangToJa={changeLangToJa}
          changeLangToEn={changeLangToEn}
          goToHome={goToHome}
          currentView={currentView}
          handleSeeMemoriesClicked={handleSeeMemoriesClicked}
          >
          </Navbar>
    </div>
  );
}