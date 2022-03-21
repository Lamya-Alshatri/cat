import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useState} from "react"
import { Link } from "react-router-dom";
import CatImages from './Components/CatImages';



function App() {
  const [CatIamge, setCatIamge] = useState()


  function handlebtn ()  {

    axios.get('https://api.thecatapi.com/v1/images/search')
    .then(res => {
      console.log(res)
      setCatIamge(res.data[0].url)
    })
    .catch(err => {
      console.error(err); 
    })
    }


    
  return (
    <div className="App">
           <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/cats">cats</Link> 

      </nav>
<CatImages CatIamge = {CatIamge} />
   <button style={{margin:'50px'}}  onClick={handlebtn} > get info</button>
  
   </div>


  );
}

export default App;
