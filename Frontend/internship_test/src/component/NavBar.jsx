
import { useNavigate } from "react-router-dom"
export function NavBar(){

  const navigate = useNavigate();

    return  <nav class="navbar  navbar-expand-lg bg-primary" data-bs-theme="dark">
           <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{margin : 'auto' , padding : "10px"}}>
        <li class="nav-item fs-5">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item fs-5" style={{marginLeft : "35px"}}>
          <a class="nav-link active" href="/dashboard">DashBoard</a>
        </li>
        <li class="nav-item fs-5" style={{marginLeft : "35px"}}>
          <a class="nav-link active" href="/question">FAQs</a>
        </li>
        <li class="nav-item fs-5" style={{marginLeft : "35px", fontFamily : 'Roboto sans-serif' , letterSpacing : "2px"}}>
          <a class="nav-link active" href="/contact">Contact</a>
        </li>
        
       
      </ul>
      <form class="d-flex ml-5">
        
        <button class="btn btn-outline-tertirary text-white fs-5" type="button" onClick={() => navigate('/signIn')}>Log In</button>
        <button class="btn btn-outline-tertirary text-white fs-5" type="button" onClick={() => navigate('/signUp')}>Sign Up</button>
      </form>
    </div>
  </div>
     </nav>
        
    
}