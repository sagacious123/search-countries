import React from 'react'
import Navbar from './Navbar'
import Form from './Form'
import Countries from './Countries'

// import { BrowserRouter as Router, Route } from 'react-router-dom'

const CountriesPage = ({ newCountries, searchText, setSearchText, getCountry, setGetCountry, regionValue, setRegionValue, regionDisplayValue, setRegionDisplayValue }) => {
  return (
    <div className="py-8 md:py-14 bg-lightbg dark:bg-verydarkbg text-lighttext dark:text-white relative top-20 sm:top-16">
      {/* <Navbar /> */}
      <Form 
        newCountries={newCountries}
        searchText={searchText}
        setSearchText={setSearchText}
        regionValue={regionValue} 
        setRegionValue={setRegionValue}
        regionDisplayValue={regionDisplayValue} 
        setRegionDisplayValue={setRegionDisplayValue}
      />
      <Countries 
        newCountries={newCountries} 
        searchText={searchText}
        setSearchText={setSearchText} 
        getCountry={getCountry}
        setGetCountry={setGetCountry}
        regionValue={regionValue} 
        setRegionValue={setRegionValue}
      />
    </div>
  )
}

export default CountriesPage
