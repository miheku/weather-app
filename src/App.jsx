import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Weather from './Weather'
import './index.css'
import cityData from './data'
function App() {
const [data, setData] = useState()
const [city,setCity] = useState("yangon")
const [citycountry, setCountry] = useState(cityData)
  useEffect(()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=c3355030de2bdfba782ef5716c981990`)
      .then(response => response.json())
      .then(data => setData(data))
  },[city])

  function getData(formData){
    let name = formData.get("city")
    if(name === ""){
      name = "yangon"
    }
    setCity(name)
  }
  function handleChange(e){
    citycountry.includes((e.target.value).toLowerCase())?
    document.getElementById("button").disabled = false
    :
    document.getElementById('button').disabled = true
  }
  return (
    <>
    <div>
    </div>
    <div className='app-bg'>
      <div className="glass-card">
        <form className="search-bar" action={getData}>
          <input
            type="text"
            name="city"
            className="search-input"
            placeholder="Enter city name"
            autoComplete="off"
            autoCorrect='on'
            onChange={(e)=>handleChange(e)}
          />
          <button type="submit" className="search-btn" aria-label="Search" id='button'>
            <span role="img" aria-label="search">🔎</span>
          </button>
        </form>
        {data ? <Weather {...data} /> : null}
      </div>
    </div>
      
    </>
  )
}

export default App
