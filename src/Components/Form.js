import React, { useState } from 'react'

const Form = ({ newCountries, searchText, setSearchText }) => {

  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click);
  }

  return (
    <div className="mb-14">
      <form className="flex justify-between items-start sm:items-center flex-col sm:flex-row sm:max-w-7xl w-11/12 m-auto">
        <div className="w-full sm:w-6/12 md:w-3/8 relative mb-10 sm:mb-0">
          <input type="text" placeholder="Search for a country..." value={searchText} onChange={(e) => setSearchText(e.target.value)} className="p-3 placeholder-gray-300 dark:placeholder-gray-400 text-base pl-16 px-4 rounded-md shadow-md w-full focus:ring-1 ring-gray-300 focus:outline-none bg-white dark:bg-darkbg" />
          <i className="fa fa-search absolute left-7 text-lg top-2 text-gray-300"></i>
        </div>
        <div className=" w-3/5 sm:w-3/12 lg:w-2/12 relative">
          {/* <select name="region" className="p-3 py-4 rounded-md shadow-md w-full">
            <option value="africa">Africa</option>
            <option value="asia">Asia</option>
          </select> */}
          <input type="button" onClick={handleClick} value="Filter by Region" className="dropdown bg-white dark:bg-darkbg mb-1 text-left text-sm p-3 placeholder-gray-300 px-4 rounded-md shadow-md w-full cursor-pointer" />
          { click &&
          <ul className="bg-white dark:bg-darkbg shadow-md rounded-md text-sm absolute top-full w-full">
            { newCountries.map(country => {
                return <li onClick={handleClick} className="px-4 py-2 rounded-t-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700">{country.region}</li>
              })}
            {/* <li onClick={handleClick} className="px-4 py-2 cursor-pointer hover:bg-gray-200">America</li>
            <li onClick={handleClick} className="px-4 py-2 cursor-pointer hover:bg-gray-200">Asia</li>
            <li onClick={handleClick} className="px-4 py-2 cursor-pointer hover:bg-gray-200">Europe</li>
            <li onClick={handleClick} className="px-4 py-2 rounded-b-md cursor-pointer hover:bg-gray-200">Oceania</li> */}
          </ul>
          }
        </div>
      </form>
    </div>
  )
}

export default Form
