
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// import { NavBar } from './component/NavBar';
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import {LandingPage} from './pages/LandingPage'

import './App.css'

import React from 'react';
import {SignIn} from './pages/SignIn'
import {SignUp} from './pages/SignUp'
import { FAQs } from './pages/FAQs';
import {Contact} from './pages/Contact'




function App() {


  return (
     
        <BrowserRouter>
        
          
          <Routes>
              <Route path='/' element={<LandingPage/>}/>
              
                <Route path='/signIn' element={<SignIn/>}/>
                
                <Route path='/signUp' element={<SignUp/>}/>

                <Route path='/question' element={<FAQs/>} />

                <Route path='/contact' element={<Contact/>} />
              
          </Routes>
        </BrowserRouter>
       
     
  )
}

export default App
