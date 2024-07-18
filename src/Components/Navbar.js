import React from 'react'
import PropTypes from 'prop-types'
// import { a } from 'react-router-dom' ;


export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.tittle}</a>
        <buthrefn className="navbar-hrefggler" type="buthrefn" data-bs-hrefggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="hrefggle navigation">
          <span className="navbar-hrefggler-icon"></span>
        </buthrefn>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auhref mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-a active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-a" href="/about">About</a>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <buthrefn className="btn btn-outline-primary" type="submit">Search</buthrefn>
          </form> */}
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.hrefggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
          </div>
        </div>
      </div>
  </nav>
    </div>
  )
}

Navbar.prohreftype = {tittle : PropTypes.string,mode: PropTypes.string.isRequired,
  hrefggleMode: PropTypes.func.isRequired,}
