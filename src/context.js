import React, { useState, useContext } from 'react'
// import sublinks from './data'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)

  function openSidebar () {
    setIsSidebarOpen(true)
  }

  function closeSidebar () {
    setIsSidebarOpen(false)
  }

  function openSubmenu () {
    setIsSubmenuOpen(true)
  }

  function closeSubmenu () {
    setIsSubmenuOpen(false)
  }
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useGlobalContext was used outside of its Provider')
  }
  return context
}
