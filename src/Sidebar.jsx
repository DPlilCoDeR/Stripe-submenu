import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { GlobalContext } from './context'

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen, isSubmenuOpen } = GlobalContext()
  console.log(isSidebarOpen, isSubmenuOpen)

  return (
    <aside
      className={`${
        isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'
      }`}
    >
      <div className='sidebar'>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>

      <div className='sidebar-links'>
        {sublinks.map((sublinks, index) => {
          const { page, links } = sublinks
          return (
            (<h4>{page}</h4>),
            links.map((link, index) => {
              return (
                <ul key={index}>
                  <li>{link.label}</li>
                  <li>{link.icon}</li>
                  <li>
                    <a href={link.url}>{link.label}</a>
                  </li>
                </ul>
              )
            })
          )
        })}
      </div>
    </aside>
  )
}

export default Sidebar
