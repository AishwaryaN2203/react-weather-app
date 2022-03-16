import React from 'react';
// const api = {
//   key: "a7a0cc53395537aca7f491f9b241b31d"
//  // base: "https://api.openweathermap.org/data/2.5/"
// }

function App() {

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder='Search...'  
          ></input>
        </div>

        <div className='location-box'>
          <div className='location'>
            New Delhi, IND
          </div>
          <div className='date'>
            {date}
          </div>
        </div>

        <div className='weather-box'>
          <div className='temp'>
            15 C
          </div>
          <div className='weather'>
            Cold
          </div>
        </div>


      </main>
    </div>
  );
}

export default App;
