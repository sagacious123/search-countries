import React from 'react'


const Navbar = ({ darkMode, setDarkMode }) => {
  return(
    <header className={`dark:bg-darkbg bg-white text-lighttext dark:text-white shadow-md fixed z-10 w-full`}>
      <nav className="w-11/12 max-w-7xl m-auto flex justify-between items-center py-7 sm:py-5">
        <h1 className="text-base sm:text-lg md:text-2xl font-bold">Where in the world?</h1>   
        <div className="cursor-pointer font-semibold text-sm" onClick={() => setDarkMode(!darkMode)}>
          <input type="checkbox" className="opacity-0" />
          <i className={`${darkMode ? "fas fa-moon" : "far fa-moon"} mr-2`}></i>
          <h3 className="inline-block">Dark Mode</h3>
        </div>
      </nav>
    </header>
  )
}

export default Navbar