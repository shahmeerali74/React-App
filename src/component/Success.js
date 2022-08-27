import React from 'react'

export default function Success(props) {

  const capitalize=(word)=>{
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
  }
  const space=(words)=>{
    const space=words;
    return space.split("  ")
  }
  return (
    <div style={{height:"50px"}}>
      {props.alert && <div class={`alert alert-success-${props.alert.typ}`} role="alert">
          <strong>{capitalize(props.alert.typ)}</strong> :<strong>{space(props.alert.msg)}</strong>
      </div>}
    </div>
  )
}
