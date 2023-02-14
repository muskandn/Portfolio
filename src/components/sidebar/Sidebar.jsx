import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import {sideBarMenu,socialIcons} from "../../data/data"
import {HiMenu} from 'react-icons/hi'
import {GrClose} from 'react-icons/gr'
import { BsXLg, BsListNested } from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import './sidebar.scss'
import logo from '../../assets/M_logo.png'
const Sidebar = () => {
  const [isMobile,setIsMobile]=React.useState(0)
  return (

    <>
    <aside className="aside">
        <div className={isMobile?"aside-wrapper01":"aside-wrapper"}>
            <Link to={"/"} className="logo-section">
            <img src={logo} alt="About image" className="sidebar__logo" />
            <p id="Name" className='switch__color'>Muskan Debnath</p>
            </Link>
            <div className='menubar'>
            <ul className={isMobile?"side-link01":"side-link"}>
            {sideBarMenu.map((link, index) => {
              const { text, icon, url } = link
              return (
                <li key={index}>
                  <NavLink
                    className={({ isActive }) => {
                      return isActive ? 'nav__links active-links' : 'nav__links'
                    }}
                    to={url}
                  >
                    {icon}
                    {text}
                  </NavLink>
                </li>
              )
            })}
          </ul>
            </div>
            
            <div className={isMobile?"social-icon01":"social-icon"}>
                {socialIcons.map((icons,index)=>{
                    return(
                        <a href={icons.url} key={index}>
                            {icons.icon}
                        </a>
                    )
                })}
            </div>
            
            
        </div>
        
    </aside>
    <a className='menu-bar-icon' onClick={()=>setIsMobile(!isMobile)}>{
                isMobile?<BsXLg className="icon switch__color"/>:<GiHamburgerMenu className="icon switch__color" />}</a>
        
    </>
  )
}

export default Sidebar