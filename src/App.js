import React,{useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import NasaContent from "./components/Content";
import NasaImage from "./components/Image";
import NasaHeader from "./components/Header";


function App() {
  const [space, setSpace] = useState({});
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => {
        setSpace(response.data);
        console.log(response);
      })
      .catch(error => {
        console.log("data failed to return", error);
      });
  }, []);
  return (
    <div className="App">
      <NasaHeader title={space.title} />
      <NasaContent date={space.date} explanation={space.explanation} />
      <NasaImage image={space.hdurl} />
    </div>
  );
}


export default App;
