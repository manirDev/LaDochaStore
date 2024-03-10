import React from 'react'
import './NavBar.css'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import NavbarItem from './NavbarItem.js';

function NavBar() {
  return (
    <div className='navbar'>
      <div className="navbar__wrapper">
        {/* Right */}
        <div className="navbar__search">
          <input type="text" placeholder='Search...' />
          <SearchOutlinedIcon />
        </div>

        {/* Left */}
        <div className="navbar__items">
          <NavbarItem Icon={LanguageOutlinedIcon} text={"English"} />
          <NavbarItem Icon={DarkModeOutlinedIcon}  />
          <NavbarItem Icon={FullscreenExitOutlinedIcon}  />
          <NavbarItem Icon={NotificationsNoneOutlinedIcon} counter={"1"} />
          <NavbarItem Icon={ChatBubbleOutlineOutlinedIcon} counter={"2"}  />
          <NavbarItem Icon={ListOutlinedIcon}  />
          <div className="navbar__item">
            <img src="https://yt3.ggpht.com/yti/ANjgQV92gXZfSGNuf3mw-KaBe5C0VwKs-yteNJHOgPG8UIg=s88-c-k-c0x00ffffff-no-rj" alt=""  className='navbar__avatar' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar