import React from 'react'
import './SideBar.css'
import { menuData } from './menuData'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setLightMode, setDarkMode } from '../../../redux/admin/actions/ThemeActions'


function SideBar() {

  const {darkMode} = useSelector((state) => state.adminDarkMode.darkMode)
  const darkModeDispatch = useDispatch();

  return (
    <div className='sidebar'>
      {/* Sidebar top */}
      <div className="sidebar__top">
        <span className="sidebar__logo">LaDocha</span>
      </div>
      <hr />
      {/* Sidebar center or menu */}
      <div className="sidebar__center">
        <ul>

          {menuData.map((item) => (
            <div key={item.id} className='sidebar_element'>
              <p className="sidebar__title">{item.title}</p>
              {item.listItems.map((menuItem) => (
                <li className='sidebar__item' key={menuItem.id}>
                  <Link to={menuItem.url} className='sidebar__link'>
                    <span className='sidebar__icon'>{menuItem.icon}</span>
                    <span className='sidebar__text'>{menuItem.title}</span>
                  </Link>
                </li>
              ))}
            </div>
          ))}
        </ul>
      </div>
      {/* Sidebar bottom */}
      <div className="sidebar__bottom">
        <div className="sidebar__colorOption" onClick={() => darkModeDispatch(setLightMode())}></div>
        <div className="sidebar__colorOption" onClick={() => darkModeDispatch(setDarkMode())}></div>
        <div className="sidebar__colorOption"></div>
      </div>
    </div>
  )
}

export default SideBar