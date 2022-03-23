import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useState} from "react"
import { Link } from "react-router-dom";
import CatImages from './Components/CatImages';
import {
  BrowserRouter as Router,
  Switch,
  Route
 } from "react-router-dom";


function App() {


  const [CatIamge, setCatIamge] = useState()


  function handlebtn ()  {

    axios.get('https://api.thecatapi.com/v1/images/search')
    .then(res => {
      console.log(res.data[0].id)
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

<button style={{margin:'10px'}}  onClick={handlebtn} > get info</button>

    	<Route path='/cats/:catId'>
    		<CatImages data={CatIamge  } />
    	</Route>   

        <Link to="/cats">cats</Link> 

      </nav>

  
  
   </div>


  );
}

export default App;
