import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard'
import '../App.css'


const Countries = ({ newCountries, searchText, setSearchText, setGetCountry }) => {

  // const [newCountries, setNewCountries] = useState([]);
  // const [newFilteredCountries, setNewFilteredCountries] = useState([]);

  

  // useEffect(() => {

  //   axios.get("https://restcountries.eu/rest/v2/all")
  //     .then(res => setNewCountries(res.data) )   
  //   }, [])

    const filteredCountries = newCountries.filter((filteredCountry) => {
      // console.log(filteredCountry)
      // console.log(filteredCountry.name.toLowerCase().includes(searchText))
      return filteredCountry.name.toLowerCase().includes(searchText);
    })

    const hasLoaded = newCountries.length > 0;

  return (
    <div className="w-5/8 sm:max-w-7xl sm:w-11/12 m-auto flex">
      <div className="flex flex-wrap sm:gap-4/9 md:gap-3/9 lg:gap-2/9 text-gray-800 dark:text-white">
        { hasLoaded ? <CountryCard countries={filteredCountries} setGetCountry={setGetCountry} /> : <h2>Loading</h2> }
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
