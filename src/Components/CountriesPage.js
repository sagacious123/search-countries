import React from 'react'
import Navbar from './Navbar'
import Form from './Form'
import Countries from './Countries'

// import { BrowserRouter as Router, Route } from 'react-router-dom'

const CountriesPage = ({ newCountries, searchText, setSearchText, setGetCountry }) => {
  return (
    <div className="py-8 md:py-14 bg-lightbg dark:bg-verydarkbg text-lighttext dark:text-white relative top-20 sm:top-16">
      {/* <Navbar /> */}
      <Form 
        newCountries={newCountries}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <Countries 
        newCountries={newCountries} 
        searchText={searchText}
        setSearchText={setSearchText} 
        setGetCountry={setGetCountry}
      />
    </div>
  )
}

export default CountriesPage
