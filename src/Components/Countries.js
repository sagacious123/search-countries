import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard'
import '../App.css'


const Countries = ({ newCountries, searchText, setSearchText, getCountry, setGetCountry, regionValue, setRegionValue }) => {

    const filteredCountries = newCountries.filter((filteredCountry) => {

      return filteredCountry.name.toLowerCase().includes(searchText) && filteredCountry.region.includes(regionValue);
    })

    const hasLoaded = newCountries.length > 0;

  return (
    <div className="w-5/8 sm:max-w-7xl sm:w-11/12 m-auto flex">
      <div className="flex flex-wrap sm:gap-4/9 md:gap-3/9 lg:gap-2/9 text-gray-800 dark:text-white">
        { hasLoaded ? <CountryCard countries={filteredCountries} getCountry={getCountry} setGetCountry={setGetCountry} /> : 
        <div className="h-screen w-screen flex items-center justify-center absolute top-0 left-0">
          <div className="-top-14 sm:-top-20 relative flex items-center justify-center flex-col">
            <div className="cm-spinner"></div>
            <span className="text-sm font-bold inline-block mt-2 text-gray-400">Loading...</span>
            </div>
          </div> 
        }
      </div>
    </div>
  )
}

export default Countries