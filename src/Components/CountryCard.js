import React from 'react'
import { Link } from 'react-router-dom'
// import DetailsPage from './DetailsPage'
import '../App.css'

const CountryCard = ({ countries, setGetCountry }) => {

  // const getValue = (e) => {
  //   console.log(e.target.value)
  // }
  // console.log(getCountry);
//  const hasLoaded = countries.length > 0;

  return (
    <>
      { countries.map(country => 

      // country > 0 ? 
        <Link key={country.numericCode} onClick={() => setGetCountry(country)} to="/DetailsPage" className="m-auto max-w-97 sm:max-w-full sm:w-6/8 md:w-4/8 lg:w-2/8 text-sm dark:bg-darkbg bg-white mb-14 rounded-md shadow-md">
          <figure className="h-44 sm:h-36 w-full rounded-t-md">
            <img src={country.flag} alt="flag" className="h-full w-full rounded-t-md" />
          </figure>
          <div className="p-6 pb-8">
            <h3 className="font-bold mb-3 text-lg">{country.name}</h3>
            <p className="text-xs mb-1"><span className="font-semibold text-sm">Population:</span>  {country.population}</p> 
            <p className="text-xs mb-1"><span className="font-semibold text-sm">Region:</span> {country.region}</p> 
            <p className="text-xs mb-1"><span className="font-semibold text-sm">Capital:</span> {country.capital}</p> 
          </div>
        </Link>
        // : 
        // <h1>Loading...</h1>
        )} 

          {/* <Link to="/DetailsPage" className="m-auto max-w-97 sm:max-w-full sm:w-6/8 md:w-4/8 lg:w-2/8 text-sm dark:bg-darkbg bg-white mb-14 rounded-md shadow-md">
            <figure className="h-44 sm:h-36 w-full rounded-t-md">
              <img src="image.jpg" alt="flag" className="h-full w-full rounded-t-md" />
            </figure>
            <div className="p-6 pb-8">
              <h3 className="font-bold mb-3 text-lg">Germany</h3>
              <p className="text-xs mb-1"><span className="font-semibold text-sm">Population:</span> 100,000</p> 
              <p className="text-xs mb-1"><span className="font-semibold text-sm">Region:</span> Europe</p> 
              <p className="text-xs mb-1"><span className="font-semibold text-sm">Capital:</span> Berlin</p> 
            </div>
          </Link> */}
      
    </>
  )
}

export default CountryCard
