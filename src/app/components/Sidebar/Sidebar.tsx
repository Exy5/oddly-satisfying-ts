"use client";
import { sidebarStyle,  } from './Sidebar.css';
import SidebarButton from './SidebarButton/SidebarButton';

const Sidebar = () => {
  return (
    <div className={sidebarStyle}>
      <nav>
        <ul>
          <SidebarButton href="/"> Hello Test</SidebarButton>
          <SidebarButton href="/" >Home</SidebarButton>
          <SidebarButton href="/about">About</SidebarButton>
          <SidebarButton href="/services" >Services</SidebarButton>
          <SidebarButton href="/contact" >Contact</SidebarButton>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
