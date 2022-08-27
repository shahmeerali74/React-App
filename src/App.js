import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Success from './component/Success';
import About from './component/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  const[success,setsuccess]=useState(null);
  const showSuccess=(message,type)=>{
    setsuccess({
      msg:message,
      typ:type
    })

    setTimeout(() => {
      setsuccess(null);
    }, 1500);
  }
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
      setdarkmode("Enable dark mode");
      setFirstColor({
        backgroundColor:"#072423",
        color:"red",
      })
            showSuccess(" Dark mode has been disable","success");
      
    }
  }
    else{
      setMode("dark");
      document.body.style.backgroundColor="#603224";
      document.body.style.color="white";
      setdarkmode("Enable light mode");
      setFirstColor({
        backgroundColor:"brown",
        color:"pink",
      })
    showSuccess(" light mode has been disable","success");

      
    }

 }







  return (
    <>
    
    <Router>
    <Navbar mode={Mode} handleModeChange={handleModeChange} darkmode={darkmode} />
    <Success alert={success}/>
  <div className="container">
    
    <Switch>
          <Route exact path="/">
              <Home showSuccess={showSuccess}/>
          </Route>

          <Route exact path="/about">
              <About mode={Mode} showSuccess={showSuccess}/>
          </Route>

   
    </Switch>

    </div>
    </Router>
    </>
  );
  }


export default App;
