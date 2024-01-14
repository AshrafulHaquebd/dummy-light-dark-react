import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import { useTheme } from '../context/themeContext'

const MainLayout = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default MainLayout
