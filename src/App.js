import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import Navbar from './Components/Navbar'
import DetailsPage from './Components/DetailsPage'
import CountriesPage from './Components/CountriesPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {

  const [newCountries, setNewCountries] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [getCountry, setGetCountry] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [regionValue, setRegionValue] = useState("");
  const [regionDisplayValue, setRegionDisplayValue] = useState("Filter by Region");

  useEffect(() => {

    axios.get("https://restcountries.eu/rest/v2/all")
      .then(res => setNewCountries(res.data))  
      .catch(err => console.log(err))
    }, [])

    console.log(getCountry)

  return (
    <div className={`transition-colors duration-300 ${darkMode && "dark"}`}>
      
      <Router>
        <Navbar 
          darkMode={darkMode} 
          setDarkMode={setDarkMode} 
        />
        <Switch>
          <Route path="/" exact render={(props) => (
            <CountriesPage 
              {...props} 
              newCountries={newCountries} 
              searchText={searchText}
              setSearchText={setSearchText}
              setGetCountry={setGetCountry}
              regionValue={regionValue}
              setRegionValue={setRegionValue}
              regionDisplayValue={regionDisplayValue} 
              setRegionDisplayValue={setRegionDisplayValue}
            />
            )}
          />
          <Route path="/DetailsPage/:name" render={(props) => (
            <DetailsPage 
              {...props} 
              newCountries={newCountries} 
              searchText={searchText}
              setSearchText={setSearchText}
              setGetCountry={setGetCountry}
              getCountry={getCountry}
            />
            )} 
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
