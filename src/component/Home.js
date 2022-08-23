import React from 'react'
import { useState } from 'react'
import Success from './Success';


export default function Home(props) {


const ToUpperCaseHandle=()=>{
  const newText=text.toLocaleUpperCase();
    setText(newText);
    console.log(newText);
    props.showSuccess("converted to upper case","success")
 }
 const ToCopyHandle=()=>{
  let copyText= document.getElementById("mytextarea");
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
  props.showSuccess("converted to upper case","success")

 }

 const ToLowerCaseHandle=()=>{
    const newText=text.toLocaleLowerCase();
    setText(newText)
    props.showSuccess("converted to lower case","success")

 }
    let onChangeHandler=(event)=>{
        setText(event.target.value)
    }

    const[text,setText]=useState("")
  return (
    
    <>
      <div className='container'>
          <h1 className="mx-4 mt-4">{props.heading}</h1>
          <textarea className="form-control" value={text} style={props.color} id="mytextarea" onChange={onChangeHandler} rows="8"></textarea>
          <button className='btn btn-primary my-4' onClick={ToUpperCaseHandle}>To UpperCase</button>
          <button className='btn btn-primary mx-4' onClick={ToLowerCaseHandle}>To LowerCase</button>
          <button className='btn btn-primary mx-4' onClick={ToCopyHandle}>To Copy Text</button>
          

      </div>

      <div className="container">
        <h1>Preview of written Text</h1>
        <p>{text}</p>
      </div>

      <div className="container">
        <h1>Words per Minutes</h1>
        <p>{text.split(" ").length} words</p>
        <p>{text.length} characters</p>
        <p></p>
      </div>
    </>
  )
}
