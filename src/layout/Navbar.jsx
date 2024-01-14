import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md'

const Navbar = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <nav>
      <ul
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2em',
          padding: '0px',
          listStyle: 'none',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '2em',
          }}
        >
          <li>
            <Link to=''>Home</Link>
          </li>
          <li>
            <Link to='shop'>Shop</Link>
          </li>
        </div>

        <div>
          <li>
            <span
              onClick={toggleTheme}
              style={{
                cursor: 'pointer',
              }}
            >
              {theme === 'dark' ? <MdOutlineLightMode /> : <MdDarkMode />}
            </span>
          </li>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar
