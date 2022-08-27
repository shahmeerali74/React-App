import React from 'react'
import { useState } from 'react'



export default function Home(props) {


const ToUpperCaseHandle=()=>{
  const newText=text.toLocaleUpperCase();
    setText(newText);
    console.log(newText);
  if(text.length===0){
    props.showSuccess("Enter text to convert to UpperCase","warning")
  }
  else{
    props.showSuccess("converted to upper case","success");
  }
 }
 const ToCopyHandle=()=>{
  let copyText= document.getElementById("mytextarea");
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
  document.getSelection().removeAllRanges();
   if(text.length===0){
    props.showSuccess("Enter text to Copy","warning")
  }
  else{
    props.showSuccess("Text being Copied","success");
  }

 }

 const ToLowerCaseHandle=()=>{
    const newText=text.toLocaleLowerCase();
    setText(newText)
    if(text.length===0){
      props.showSuccess("Enter text to convert to LowerCase","warning")
    }
    else{
      props.showSuccess("converted to Lowercase","success");
    }

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
          <button disabled={text.length===0} className='btn btn-primary my-4' onClick={ToUpperCaseHandle}>To UpperCase</button>
          <button disabled={text.length===0} className='btn btn-primary mx-4' onClick={ToLowerCaseHandle}>To LowerCase</button>
          <button disabled={text.length===0} className='btn btn-primary mx-4' onClick={ToCopyHandle}>To Copy Text</button>
          

      </div>

      <div className="container">
        <h1>Preview of written Text</h1>
        <p>{text.length!==0?`${text}`:"Enter Text to Preview"}</p>
      </div>

      <div className="container">
        <h1>Words per Minutes</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words</p>
        <p>{text.length} characters</p>
        <p>{0.08 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read </p>
      </div>
    </>
  )
}
