import * as Typicons from "react-icons/ti";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import React from "react";

export const SidebarData = [
    {
        title: 'DashBoard',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName : 'nav-text'
    },
    {
        title: 'Former',
        path: '/former',
        icon: <FaIcons.FaChalkboardTeacher/>,
        cName : 'nav-text'
    },
    {
        title: 'FormerPicker',
        path: '/formerPicker',
        icon: <Typicons.TiUserAddOutline/>,
        cName : 'nav-text'
    }
]