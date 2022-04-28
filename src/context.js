import React, { useState, useContext } from 'react'
// import sublinks from './data'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)

  function openSidebar () {
    return setIsSidebarOpen(true)
  }

  function closeSidebar () {
    return setIsSidebarOpen(false)
  }

  function openSubmenu () {
    return setIsSubmenuOpen(true)
  }

  function closeSubmenu () {
    return setIsSubmenuOpen(false)
  }
  return (
    <AppContext.Provider
      value={
        (isSidebarOpen,
        isSubmenuOpen,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu)
      }
    >
      {children}
    </AppContext.Provider>
  )
}

export const GlobalContext = () => {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useUserContext was used outside of its Provider')
  }
  return context
}
