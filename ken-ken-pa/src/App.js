import React, { useState } from "react";
import './App.css';
import AddNewMemory from "./components/AddNewMemory";
import Login from "./components/Login";
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
  const [loggedIn, setLoggedIn] = useState(false);

  const handlePopupMenu = (event) => {
    event.preventDefault();
    setPopupMenu(true);
  }

  const handleViewChange = (event) => {
    // When user clicks button, currentView changes to value of button
    event.preventDefault();
    if (currentView === "Memories") {
      setSelectedPrefecture("");
    }
    setCurrentView(event.target.value);
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

  return (
    <div className="App">
      <h1>{UIText.appName[currentLocale]}</h1>
      {
        currentView === "Memories" ? (
          <Memories currentLocale={currentLocale} onClick={handleViewChange}></Memories>
        ) : (
          currentView === "PrefectureMemories" ? (
            <PrefectureMemories currentLocale={currentLocale} selectedPrefecture={selectedPrefecture} onClick={handleViewChange}></PrefectureMemories>
          ) : (
            currentView === "AddNewMemory" ? (
              <AddNewMemory currentLocale={currentLocale} selectedPrefecture={selectedPrefecture}></AddNewMemory>
            ) : (
              currentView === "Login" ? (
                <Login currentLocale={currentLocale}/>
              ) : (
                <div>
                  <Map 
                  handlePopupMenu={handlePopupMenu}
                  setSelectedPrefecture={setSelectedPrefecture}></Map>

                  {isShown === true ? (
                    <PopupMenu currentLocale={currentLocale} selectedPrefecture={selectedPrefecture} onClick={handleViewChange} ></PopupMenu>
                  ) : (
                    <div></div>
                  )}
                </div>
        ))))
      }

          <Navbar
          currentLocale={currentLocale}
          changeLangToJa={changeLangToJa}
          changeLangToEn={changeLangToEn}
          goToHome={goToHome}
          currentView={currentView}
          handleViewChange={handleViewChange}
          loggedIn={loggedIn}
          >
          </Navbar>
    </div>
  );
}