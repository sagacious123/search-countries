import React from 'react'
import { Link } from 'react-router-dom'

const CountryDetails = ({ getCountry, newCountries }) => {

  // const ncCountries = newCountries.filter(nc => {
  //   console.log(nc.name.includes(getCountry))
  //   if(nc.name.includes(getCountry)) {
  //     console.log(nc)
  //     return nc
  //   } else {
  //     console.log(getCountry)
  //   }
  //   // return nc.name === getCountry;
  // })

  return (
    <div className="w-11/12 max-w-7xl m-auto">
      <div>
        <Link to="/" className="px-3 py-2 shadow-md rounded-sm">
          <i className="fa fa-arrow-back mr-2"></i>
          Go back
        </Link>
      </div>
      <div className="flex md:items-center items-start justify-between md:flex-row flex-col m-auto max-w-97 md:max-w-full w-5/8 md:full">
        <div className="md:w-6/8 w-full">
          <img src={getCountry.flag} alt={getCountry.name} className="w-full h-full" />
        </div>
        <div className="lg:w-5/12 md:w-6/12 w-full">
          <h1>{getCountry.name}</h1>
          <div className="flex items-start justify-between md:flex-row flex-col">
            <div>
              <p><span>Native Name:</span> {getCountry.nativeName}</p>
              <p><span>Population:</span> {getCountry.population}</p>
              <p><span>Region:</span> {getCountry.region}</p>
              <p><span>Sub Region:</span> {getCountry.subregion}</p>
              <p><span>Capital:</span> {getCountry.capital}</p>
            </div>
            <div>
              <p><span>Top Level Domain:</span> {getCountry.TopLevelDomain}</p>
              {getCountry.currencies.map((currency) => {
                return <p><span>Currencies:</span> {currency.name}</p>
              })}
              {getCountry.currencies.map((currency) => {
                return <p><span>Languages:</span> {getCountry.languages.name}</p>
              })}
            </div>
          </div>
          <div>
            <p>Border Countries:</p>
            <div>
              {getCountry.borders.map((border) => {
                return <span>{border}</span>
              })}
              
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountryDetails
