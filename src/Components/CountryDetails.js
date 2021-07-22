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
    <div>
      <Link to="/" className="px-3 py-2 shadow-md rounded-sm">
        Go back
      </Link>
      <div>{getCountry.name}</div>
      <img className="w-16" src="image.jpg" />
      <h2>details</h2>
      {/* <div>{ncCountries}</div> */}
    </div>
  )
}

export default CountryDetails
