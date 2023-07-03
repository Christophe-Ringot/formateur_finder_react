import * as FaIcons from "react-icons/fa"; 
import {SidebarData} from './SidebarData';
import {NavLink} from 'react-router-dom';
import React, {useState} from "react";
import "./NavBarComponent.css";

function NavBarComponent({children}){
    const [show, setShow] = useState(false)
    const showSidebar = () => setShow(!show)
    
    return (
        <main className={show ? 'space-toggle' : null}>
            <header className={`header ${show ? 'space-toggle' : null}`}>
                <div className="header-toggle" onClick={showSidebar}>
                    <FaIcons.FaBars onClick={showSidebar}/>
                </div>
            </header>
            <aside className={`sidebar ${show ? 'show' : null}`}>
                <div className={"top_section"}>
                    <img style={{display: show ? "block" : "none"}} 
                         src={"http://utopios.solutions/wp-content/uploads/2019/12/Sans-titre-5-1.png"} 
                         alt={"logo_utopios"}
                         className={"logo"}
                    /> 
                </div>
                <div className="menu">
                    {
                        SidebarData.map((item, index) => (
                        <NavLink to={item.path} key={index} className={"link"}>
                            <div className={"icon"}>{item.icon}</div>
                            <div style={{display: show ? "block" : "none"}} className={"link_text"}>{item.title}</div>
                        </NavLink>
                        ))
                    }
                </div>
            </aside>
            <div>  
                {children}
            </div>
        </main>
    )
}

export default NavBarComponent;