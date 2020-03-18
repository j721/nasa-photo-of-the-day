import React,{useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";

function App() {
  const [space, setSpace]= useState({})
  useEffect(()=>{
  axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(response=>{
    setSpace(response.data)
    console.log(response);
  })
  .catch(error=>{
    console.log('data failed to return', error);
  })
  },[])
  return (
    <div className="App">
      <AppTitle title={space.title} />
      <SpaceImage image ={nasa.hdurl}/>
    </div>
  );
}

export default App;
