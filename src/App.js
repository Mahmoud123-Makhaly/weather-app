import axios from 'axios';
import React, { useEffect, useState } from 'react'

const App = () => {
const [data,setData] = useState([]);

const getData = async ()=>{
  const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=cfc0aa81fa7b7e3af2b5158c098d881c`)
setData(res.data)
}
useEffect(()=>{getData()} , [])
const searchData =async (word)=>{
if(word===""){
  getData()
}
else{
  const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${word}&appid=cfc0aa81fa7b7e3af2b5158c098d881c`)
setData(res.data)
}
}
const onSearch = (city)=>{
  searchData(city)
}
  return (
    <div className='app'>
      <div className='search'>
        <input type="text" onChange={(e)=>{onSearch(e.target.value)}} 
        placeholder='Enter Your Location'  />
      </div>
    <div className='container'>
      <div className='top'>
        <h3 className='mb-4'>{data.name}</h3>
        <div className='desc'>
          <span className='temp'>{data.main&&data.main.temp.toFixed()} F</span>
          <span className='cloud'>{data.weather&&data.weather[0].main}</span>
        </div>
      </div>
  <div className='bottom'>
    <div className='first-bottom'>
<h3>{data.main&&data.main.feels_like.toFixed()} F</h3>
<p>Feels Like</p>
    </div>
    <div className='second-bottom'>
    <h3>{data.main&&data.main.humidity.toFixed()} %</h3>
<p>Humidity</p>
      </div>
      <div className='third-bottom'>
      <h3>{data.wind&&data.wind.speed.toFixed()}MPH</h3>
<p>Wind Speed</p>
      </div>
  </div>
    </div>
      </div>
  )
}

export default App
