import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [firstColor,setFirstColor]=useState({
    backgroundColor:"#072423",
    color:"red",
  });

  const[darkmode,setdarkmode]=useState("enable dark mode");



const[Mode,setMode]=useState("");
 const handleModeChange=()=>{
  console.log("helo i am running");
  if(Mode==='dark'){
    {
      setMode("light");
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      setdarkmode("Enable light mode");
      setFirstColor({
        backgroundColor:"#072423",
        color:"red",
      })
      
    }
  }
    else{
      setMode("dark");
      document.body.style.backgroundColor="grey";
      document.body.style.color="green";
      setdarkmode("Enable dark mode");
      setFirstColor({
        backgroundColor:"brown",
        color:"pink",
      })
      
    }

 }







  return (
    <>
    <Router>
    <Navbar mode={Mode} handleModeChange={handleModeChange} darkmode={darkmode}/>

      {/* <Textutlities heading="Enter Your Text Down Here" txtvalue="Enter text here" color={firstColor} /> */}
  <div className="container">
    <Switch>
          <Route exact path="/">
              <Home/>
          </Route>

          <Route exact path="/about">
              <About/>
          </Route>

   
    </Switch>
    </div>
    </Router>
    </>
  );
  }


export default App;
