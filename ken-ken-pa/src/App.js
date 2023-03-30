import React, { useState } from "react";
import './App.css';
import Map from "./components/Map";
import Memories from "./components/Memories";
import PopupMenu from "./components/PopupMenu";


export default function App() {
  //The menu is poped up === isShown is true
  const [isShown, setPopupMenu] = useState(false);
  //currentView becomes "Memories", if see memories button in the pop-up menu is clicked
  const [currentView, setCurrentView] = useState("");

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

  return (
    <div className="App">
      <h1>Ken-Ken-PA!</h1>

      {currentView === "Memories" ? (
        <Memories></Memories>
      ) : (
        <div>
          <Map 
          handlePopupMenu={handlePopupMenu}></Map>

          {isShown === true ? (
            <PopupMenu onClick={handleSeeMemoriesClicked}></PopupMenu>
          ) : (
            <div></div>
          )}
        </div>
      )}

      <div className="side-menu">
        <button>日本語</button>
        <button>English</button>
      </div>
    </div>
  );
}