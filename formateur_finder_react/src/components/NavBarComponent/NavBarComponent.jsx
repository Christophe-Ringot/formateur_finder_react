import * as FaIcons from "react-icons/fa"; 
import {SidebarData} from './SidebarData';
import {NavLink} from 'react-router-dom';
import React, {useState} from "react";
import "./NavBarComponent.css";

function NavBarComponent({children}){
    const [show, setShow] = useState(false)
    const showSidebar = () => setShow(!show)
    
    return (
        <main className={`main ${show ? 'main-showed' : null}`}>
            <aside className='sidebar'>
                <div className="top-section">
                </div>
                <div className="menu">
                    <img
                        src={"https://utopios.solutions/wp-content/uploads/2023/08/Logo_UTOPIOS_blanc-1.svg"}
                        alt={"logo_utopios"}
                        className={`logo-utopios ${show ? 'logo-utopios-showed' : null}`}
                    />
                    <img
                        src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAe1BMVEX////+/v7U2ebT2OYkSJEALYUAL4YAJ4NZb6XM0uEdQY0AKYTw8vcAMIYUPIsANYgGN4kaP4xUa6OircqPnL97i7VpfKwgRI9zhLE7V5kAH4Hl6PA0UpZNZaBidanAx9uvuNG3v9WYpMWkr8uJlrxFXpzo6/IAG38AEH3m4Q+HAAABO0lEQVR4AX3SBZLEMAwEwAmzHC0z0/9feL7YitZ7MAWhrnEMQBT/mSQGEKVZ/meKEqiy+p80LapOHsiYnogDkL8BM5lOZ/PFUgRbzJmCfoUhqQdcr8o1bxTkW0Q2MAJ2sIkiAdxF3wCR/DPt3fPYwK6gbQQchhfasHNgKw39XIE2RkhyAbMASCOO46ynH2DuwMkIOAdAGnER0B1DYK4O3HoP8jgEnWvEijzItgGQRhxIt0mBNuLuAZsoANII3StEI9BGQEbg3e8gks2kyQfIBhBhyeFWKIgdWJAD2TEAug7JZqigHdwzBNDKz2ra9EQd+Um1euTGeW/n+8NVHk4PBRcZdIi/TbWB3akNgulTQU1Wf3yvmsyCphbBFd4IcM64aIF7k/tkr7LS73H5yoo5bB6a7VaH2W4fD/v0BeKgINm0r/tTAAAAAElFTkSuQmCC"}
                        alt={"logo_U_utopios"}
                        className={`logo-u-utopios-showed ${show ? 'logo-u-utopios' : null}`}
                    />
                    {
                        SidebarData.map((item, index) => (
                        <NavLink to={item.path} key={index} className={"link"}>
                            <div className={"icon"}>{item.icon}</div>
                            <div className={`link-text ${show ? 'link-text-showed' : null}`}>{item.title}</div>
                        </NavLink>
                        ))
                    }
                </div>
            </aside>
            <div className='main-page'>  
                <header className='header'>
                    <div className="header-btn" onClick={showSidebar}>
                                <FaIcons.FaBars onClick={showSidebar} />
                    </div>
                    <div className="photo-profile">
                        <img src="https://us.123rf.com/450wm/salamatik/salamatik1712/salamatik171200045/92143748-ic%C3%B4ne-de-visage-de-profil-anonyme-silhouette-grise-avatar-par-d%C3%A9faut-masculin-photo-placeholder.jpg" alt="photo_profile" />
                    </div>
                 </header>
                <div className='main-content'>
                    {children}
                </div>
            </div>
        </main>
    )
}

export default NavBarComponent;