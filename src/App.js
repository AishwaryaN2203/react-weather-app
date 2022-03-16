 import React, {useState} from 'react';
const api = {
  key: "12031b65a3fe942b7ce4a02904275629",
  base: "https://api.openweathermap.org/data/2.5/"
  // "https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=12031b65a3fe942b7ce4a02904275629"
}

function App() {

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  const [searchCity, setSearchCity] = useState("");
  const [cityData, setCityData] = useState(null);

    const search = async (event) => {

        if(event.key==='Enter'){
          const url = `${api.base}weather?q=${searchCity}&appid=${api.key}&units=metric`
          const response = await fetch(url);
          const resJson = await response.json();
          setCityData(resJson);

        }
        
    }

    const applyChange = () => {
        return cityData ? ( ((cityData.cod!=404) && (cityData.main.temp>16)) ? 'app-warm': 'app'): 'app';
    }

  return (
    <div className={applyChange()}>
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder='Search...' 
            onChange = { (event) => { setSearchCity(event.target.value)} }
            value ={searchCity} 
            onKeyPress={search}
          ></input>
        </div>

    { (!cityData || cityData.cod==404) ? (<p>Data Not Found</p>): 
    (
      <div>
        {console.log(cityData)}
        <div className='location-box'>
          <div className='location'>{cityData.name}, {cityData.sys.country}</div>
          <div className='date'>{date}</div>
        </div>

        <div className='weather-box'>
          <div className='temp'>{Math.round(cityData.main.temp)}°C</div>
          <div className='weather'> {cityData.weather[0].main} </div>
        </div>
    
      </div>
    )}
    
    </main>
  </div> 
  );
}

export default App;
