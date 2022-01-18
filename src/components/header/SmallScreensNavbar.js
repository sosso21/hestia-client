//SmallScreensNavbar.js
import React, { useState } from "react";
import { NavComponent } from "./Navbar";

const SmallScreensNavbar = () => {
  // declare 'translate' as a state variable
  let [translate, setTranslate] = useState(true);
  return (
    <div>
      <button
        className="btn-night hamburger-btn"
        onClick={() => setTranslate(!translate)}
      >
        {" "}
        {/* toggle translate */}
        {/* change the btn text based on whether translate is true or false */}
        {translate ? <span>&#9776;</span> : <span>&times;</span>}
      </button>
      {/*hide and show the sidebar list based on whether translate is true or false*/}
      <div
        id="sidebar-list"
        className={`bg-dark ${!translate ? "addFade-left" : "removeFade-left"}`}
      >
        <NavComponent
          navClass="nav-small"
          linkClassName="nav-small-link"
          onClick={() => setTranslate(true)} //set translate to true to hide the sidebar list
        />
      </div>
    </div>
  );
};
export default SmallScreensNavbar;
