
import { useState } from "react";
import { useNavigate } from "react-router-dom"
export function NavBar(){

  const navigate = useNavigate();

    const [showUser , setUser] = useState(false)

    return  <nav className="navbar navbar-expand-sm" data-bs-theme="dark">
           <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{margin : 'auto' , padding : "10px"}}>
        <li className="nav-item fs-5">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item fs-5" style={{marginLeft : "35px"}}>
          <a  className="nav-link active" href="/dashboard">DashBoard</a>
        </li>
        <li  className="nav-item fs-5" style={{marginLeft : "35px"}}>
          <a className="nav-link active" href="/question">FAQs</a>
        </li>
        <li className="nav-item fs-5" style={{marginLeft : "35px", fontFamily : 'Roboto sans-serif' , letterSpacing : "2px"}}>
          <a className="nav-link active" href="/contact">Contact</a>
        </li>
        
       
      </ul>
    
      {localStorage.getItem("token") ? <button className="user-icon me-4 d-flex flex-row justify-content-center" onClick={() => setUser(!showUser)} style={{background : 'none' , border :'none'}}><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
      </svg></button> :   <form class="d-flex ml-5">
        <button className="btn btn-outline-tertirary text-white fs-5" type="button" onClick={() => navigate('/signIn')}>Log In</button>
        <button className="btn btn-outline-tertirary text-white fs-5" type="button" onClick={() => navigate('/signUp')}>Sign Up</button>
      </form>}
    </div>
  </div>
     </nav>
        
    
}