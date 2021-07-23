import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard'
import '../App.css'


const Countries = ({ newCountries, searchText, setSearchText, setGetCountry, regionValue, setRegionValue }) => {

  // const [newCountries, setNewCountries] = useState([]);
  // const [newFilteredCountries, setNewFilteredCountries] = useState([]);

  

  // useEffect(() => {

  //   axios.get("https://restcountries.eu/rest/v2/all")
  //     .then(res => setNewCountries(res.data) )   
  //   }, [])

    const filteredCountries = newCountries.filter((filteredCountry) => {
      // console.log(filteredCountry)
      // console.log(filteredCountry.name.toLowerCase().includes(searchText))
      return filteredCountry.name.toLowerCase().includes(searchText) && filteredCountry.region.includes(regionValue);
    })

    const hasLoaded = newCountries.length > 0;

  return (
    <div className="w-5/8 sm:max-w-7xl sm:w-11/12 m-auto flex">
      <div className="flex flex-wrap sm:gap-4/9 md:gap-3/9 lg:gap-2/9 text-gray-800 dark:text-white">
        { hasLoaded ? <CountryCard countries={filteredCountries} setGetCountry={setGetCountry} /> : <div className="h-screen w-screen flex items-center justify-center absolute top-0 left-0"><i className="fa fa-spinner fa-spin text-4xl text-darkbg dark:text-lightbg block"></i></div> }
        {/* <CountryCard countries={filteredCountries} setGetCountry={setGetCountry} /> */}
        {/* <CountryCard countries={filteredCountries} setGetCountry={setGetCountry} />
        <CountryCard countries={filteredCountries} setGetCountry={setGetCountry} />
        <CountryCard countries={filteredCountries} setGetCountry={setGetCountry} />
        <CountryCard countries={filteredCountries} setGetCountry={setGetCountry} />
        <CountryCard countries={filteredCountries} setGetCountry={setGetCountry} />
        <CountryCard countries={filteredCountries} setGetCountry={setGetCountry} />
        <CountryCard countries={filteredCountries} setGetCountry={setGetCountry} />
        <CountryCard countries={filteredCountries} setGetCountry={setGetCountry} /> */}
      </div>
    </div>
  )
}

export default Countries