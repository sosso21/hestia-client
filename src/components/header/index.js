// Header.js
import React from "react";
import {data} from "../../store/data"
import Navbar from "./Navbar";
import SmallScreensNavbar from "./SmallScreensNavbar";
import { useWindowWidthAndHeight } from "../../plugins/useWindowWidthAndHeight";
import "../../styles/header.css";

const Header = () => {
  const [width, height] = useWindowWidthAndHeight();

  return (
    <header className="bg-dark">
      <div className="header-inner">
         
        <a href="/" title="Home" className="fs-3 logo nav-link">
          <i className="bi bi-bank d-inlinline mx-2"></i><h1 className="d-inline fs-3 fw-lighter">{data.name}</h1>  
        </a>

        {/*if the width of the window is bigger than 1000px use <Navebar/>,
                   else user <SmallScreensNavbar/>*/}
        {width > 1000 ? (
          <Navbar navClass="nav-big" linkClassName="nav-big-link" />
        ) : (
          <SmallScreensNavbar
            navClass="nav-small"
            linkClassName="nav-small-link"
          />
        )}
      </div>
    </header>
  );
};

export default Header;
