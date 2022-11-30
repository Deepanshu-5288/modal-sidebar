import React from 'react';
import logo from "./logo.svg";
import {FaTimes} from "react-icons/fa";
import {links, social} from "./data";
import {useGlobalContext} from "./context";

function Sidebar() {
    const {isSidebarOpen, closeSidebar}  = useGlobalContext();
  return (
    <aside className={`${isSidebarOpen? 'sidebar show-sidebar' : 'sidebar '}`}>
        <div className='sidebar-header'>
            <img className='logo' src={logo} alt="logo" />
            <button onClick={() => closeSidebar()} className='close-btn'>
                <FaTimes />
            </button>
        </div>
        <ul className='links'>
        {links.map((link) => {
            const {id, url, text} = link;
            return (
                <li key={id}>
                    <a href={url}>{text}</a>
                </li>
            );
        })}
        </ul>
        <ul className='social-icons'>
            {social.map((socialIcons) =>{
                const {id, url , icon} = socialIcons;
                return (
                    <li key={id}>
                        <a href={url}>{icon}</a>
                    </li>
                );
            })}
        </ul>
    </aside>
  )
}

export default Sidebar