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

<<<<<<< HEAD
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


=======
  const handleSeePrefectureMemoriesClicked = (event) => {
    event.preventDefault();
    setCurrentView("PrefectureMemories");
  }

>>>>>>> main
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
<<<<<<< HEAD
            <div></div>
          )}
        </div>
      )}
      <Navbar
      changeLangToJa={changeLangToJa}
      changeLangToEn={changeLangToEn}
      goToHome={goToHome}
      currentView={currentView}
      handleSeeMemoriesClicked={handleSeeMemoriesClicked}
      >
      </Navbar>
=======
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
>>>>>>> main
    </div>
  );
}