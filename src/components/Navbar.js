import React from 'react'
import PropTypes from 'prop-types'



export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">{props.aboutText}</a>
              </li>
            </ul>
            <div className="d-flex">
              <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height:'30px',width:'30px', cursor:'pointer'}}></div>
              <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height:'30px',width:'30px', cursor:'pointer'}}></div>
              <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height:'30px',width:'30px', cursor:'pointer'}}></div>
              <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height:'30px',width:'30px', cursor:'pointer'}}></div>
            </div>
            <div className="form-check form-switch">
              <input className="form-check-input" onClick={()=>{props.toggleMode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className={`form-check-label text-${props.fontColor}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
            {/* <form bindsubmit="" className="d-flex">
                <input className="from-control me-2" type="search" aria-label='Search' />
                <button className="btn btn-online-success" type='submit'>Search</button>
            </form> */}
          </div>
        </div>
      </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText : PropTypes.string
}

Navbar.defaultProps = {
    title: 'this is title',
    aboutText: "About Us"
  };