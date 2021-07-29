import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const CountryDetails = ({ getCountry, newCountries, setGetCountry }) => {

  console.log(getCountry.name);

  

  const showBorderCountry = (e) => {
    const filteredBorderCountry = newCountries.filter(borderCountry => {
      console.log(borderCountry.alpha3Code.includes(e.target.innerHTML))
      
      return borderCountry.alpha3Code.includes(e.target.innerHTML);
      
    })
    setGetCountry(filteredBorderCountry[0])
  }

  useEffect(() => {
    localStorage.setItem("getCountry", JSON.stringify(getCountry));
    // setGetCountry(getCountry[0].name)
  }, [getCountry])
  // console.log(getCountry[0].name)

  return (
    <div className="w-11/12 max-w-7xl m-auto text-base">
      <div className="w-97 max-w-6/8 md:max-w-full md:w-full m-auto md:mb-14 mb-12">
        <Link to="/" className="text-sm px-5 py-2 inline-block shadow-md rounded-sm bg-white dark:bg-darkbg dark:hover:bg-gray-600 hover:bg-gray-100 transition-all duration-300">
          <i className="fa fa-arrow-left mr-2"></i>
          Go back
        </Link>
      </div>
      <div className="flex lg:items-center items-start justify-between md:flex-row flex-col m-auto w-97 max-w-6/8 md:max-w-full md:w-full ">
        <div className="md:w-6/12 lg:w-6/8 w-full mb-14 md:mb-0">
          <img src={getCountry.flag} alt={getCountry.name} className="w-full h-full" />
        </div>
        <div className="lg:w-6/8 md:w-5/12 w-full">
          <h1 className="lg:text-3xl text-2xl font-bold mb-8">{getCountry.name}</h1>
          <div className="flex items-start justify-between lg:flex-row flex-col mb-12">
            <div className="lg:mb-0 md:mb-10 mb-12 text-m">
              <p className="mb-1 text-sm"><span className="font-bold text-base">Native Name:</span> {getCountry.nativeName}</p>
              <p className="mb-1 text-sm"><span className="font-bold text-base">Population:</span> {getCountry.population}</p>
              <p className="mb-1 text-sm"><span className="font-bold text-base">Region:</span> {getCountry.region}</p>
              <p className="mb-1 text-sm"><span className="font-bold text-base">Sub Region:</span> {getCountry.subregion}</p>
              <p className="mb-1 text-sm"><span className="font-bold text-base">Capital:</span> {getCountry.capital}</p>
            </div>
            <div>
              <p className="mb-1 text-sm"><span className="font-bold text-base">Top Level Domain:</span> {getCountry.topLevelDomain}</p>
              {getCountry.currencies.map((currency) => {
                return <p className="mb-1 text-sm">
                <span className="font-bold text-base">Currencies:</span> 
                {currency.name}
              </p>
              })}
              
                <p className="mb-1 text-sm"><span className="font-bold text-base">Languages:</span> { getCountry.languages.map((language) => `${language.name}, `)}</p>

            </div>
          </div>
          <div className="flex lg:flex-row flex-col">
            <p className="font-bold text-base mr-6 mb-4">Border Countries:</p>
            <div className="flex flex-row flex-wrap">
              {
              getCountry.borders.map((border) => {
                    console.log(border);     
                    
                 return <span onClick={showBorderCountry} className="px-3 mb-3 py-1 mr-3 text-sm cursor-pointer rounded-sm shadow-md dark:hover:bg-gray-600 hover:bg-gray-100 transition-all duration-300 bg-white dark:bg-darkbg">{border}</span> 
                })
              }
              
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