import React from 'react'
import CountryDetails from './CountryDetails'


const DetailsPage = ({ getCountry, newCountries, setGetCountry }) => {
  return (
    <div className="md:pt-14 pt-10 pb-14 md:pb-40 relative top-20 sm:top-16 bg-lightbg dark:bg-verydarkbg text-lighttext dark:text-white">
      {/* <Navbar /> */}
      <CountryDetails getCountry={getCountry} setGetCountry={setGetCountry} newCountries={newCountries} />
    </div>
  )
}

export default DetailsPage
