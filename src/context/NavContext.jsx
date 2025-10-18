'use client'
import React, { createContext, useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export const NavbarContext = createContext()
export const NavbarColorContext = createContext()

export const NavbarProvider = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false)
  const [navColor, setNavColor] = useState('light')
  const pathname = usePathname()

  useEffect(() => {
    if (pathname === '/about') setNavColor('dark')
    else setNavColor('light')
  }, [pathname])

  return (
    <NavbarContext.Provider value={[navOpen, setNavOpen]}>
      <NavbarColorContext.Provider value={[navColor, setNavColor]}>
        {children}
      </NavbarColorContext.Provider>
    </NavbarContext.Provider>
  )
}
