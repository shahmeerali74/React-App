import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {


 return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.Mode}  bg-${props.Mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Navbar</Link>
          {/* <a className="navbar-brand" href="#">Navbar</a> */}

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                {/* <a className="nav-link active" aria-current="page" href="#">Home</a>  */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
                {/* <a className="nav-link" href="/about">About</a> */}

              </li>
            </ul>

            <div className="d-flex mx-5">
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Color Changer
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" onClick={()=>{props.handleModeChange('primary')}} href="#">Primary Mode</a></li>
                <li><a className="dropdown-item"  onClick={()=>{props.handleModeChange('secondary')}} href="#">Secondary Mode</a></li>
                  <li><a className="dropdown-item" onClick={()=>{props.handleModeChange('warning')}} href="#">Warning Mode</a></li>
                  <li><a className="dropdown-item" onClick={()=>{props.handleModeChange('success')}} href="#">Success Mode</a></li>
                  <li><a className="dropdown-item" onClick={()=>{props.handleModeChange('danger')}} href="#">Danger Mode</a></li>
                </ul>
              </div>
            </div>

            <div className="form-check form-switch">
              <input className="form-check-input" onClick={()=>{(props.handleModeChange(null))}} type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.darkmode}</label>
            </div>
            {/*             
            <form className="d-flex">
              <input className="form-control me-2"  type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}

          </div>
        </div>
      </nav>
    </div>
  )
}
