import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.svg";

export default function TopMenu() {

  // set selected language to localStorage
  const handleClick=(id)=>localStorage.setItem('lang',id)

  return (
    <header>
      <div className="navbar navbar-expand-md fixed-top">
        <div className="header-item d-flex  flex-grow-1">
          <Link className="navbar-brand" href="/">
          <Image
                src={logo}
                width={50}
                height={50}
                alt="..."
              />
          </Link>
        </div>
        <div className="d-flex flex-column flex-wrap ">
          <div className="header-item">
            <ul className="tabs navbar-nav mr-auto flex-row">
              <li className="nav-item">
                <Link className="nav-link" href="/el" title="Ελληνικά" onClick={()=>handleClick('el')}>
                  GR
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/en" title="English" onClick={()=>handleClick('en')}>
                  EN
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/it" title="Italiano" onClick={()=>handleClick('it')}>
                  IT
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/ru" title="Русский" onClick={()=>handleClick('ru')}>
                  RU
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/ro" title="Română" onClick={()=>handleClick('ro')}>
                  RO
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/pl" title="Polski" onClick={()=>handleClick('pl')}>
                  PL
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/fr" title="Francais" onClick={()=>handleClick('fr')}>
                  FR
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/sq" title="Squip" onClick={()=>handleClick('sq')}>
                  AL
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}


