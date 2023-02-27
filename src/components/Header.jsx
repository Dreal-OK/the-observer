import React, { useState } from 'react'

import { FaBalanceScale } from 'react-icons/fa'
import { TfiWrite } from 'react-icons/tfi'
import { RiLoginCircleLine } from 'react-icons/ri'
import { FcAbout } from 'react-icons/fc'
import { GiHamburgerMenu } from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Header = () => {
  const [menu, toggleMenu] = useState(false);


  return (
    <div className="header">
      <div className="header-content">
        <div className="brand hidden">
          <FaBalanceScale />
          <span>
            the <em>Observer</em>
          </span>
        </div>
        <div className="header-nav">
          <nav>
            <ul>
              <Link to="/compose" onClick={() => toggleMenu(false)}>
                <li>
                  <TfiWrite />
                </li>
              </Link>
              <li>
                <FcAbout />
              </li>
              <li>
                <RiLoginCircleLine />
              </li>
            </ul>
          </nav>
        </div>
        {!menu && (
          <div className="menu-toggle" onClick={() => toggleMenu(true)}>
            <GiHamburgerMenu />
          </div>
        )}

        {menu && (
          <div className="menu">
            <div className="menu-header">
              <h2 className="menu-brand">the Observer</h2>
              <div onClick={() => toggleMenu(false)}>
                <AiOutlineClose />
              </div>
            </div>
            <nav>
              <ul>
                <Link to="/compose" onClick={() => toggleMenu(false)}>
                  <li>
                    <TfiWrite />
                  </li>
                </Link>

                <li>
                  <FcAbout />
                </li>
                <li>
                  <RiLoginCircleLine />
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header