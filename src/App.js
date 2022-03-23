import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import react,{useState,useEffect} from "react"
import { Outlet, Link } from "react-router-dom";
import CatImages from './Components/CatImages';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
 } from "react-router-dom";


function App() {


  const [CatIamge, setCatIamge] = useState()

  useEffect(() => {
    axios.get('https://api.thecatapi.com/v1/images/search')
      .then(res => {
        console.log(res.data[0].id)
        setCatIamge(res.data)
      })
      .catch(err => {
        console.error(err); 
      })
  }, [])

  console.log(CatIamge )

  // function handlebtn ()  {


   
    // }

   
  return (
    <div className="App">

      
           <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
 {CatIamge?.map((Image) => (
      <Link
        style={{ display: "block", margin: "1rem 0" }}
        to={`/A/cats/${Image.id}`}
        key={Image}
      >
        Cats
      </Link>
    ))}
{/* <button style={{margin:'10px'}}  > get info</button>
  */}
    	
    

        
        
      </nav>

  
      <Outlet/>
   </div>


  );
}

export default App;
