import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'

export function SignUp(){
    
    const navigate = useNavigate();
    const [fullName , setFullName] = useState("");
    const [userEmail , setUserEmail] = useState("");
    const [password , setPasword] = useState("");
    

    const handleSumit = (e) => {
         e.preventDefault()
    }


    

    return  <div class='border rounded p-2 mb-auto   bg-body-tertiary shadow mx-auto d-flex ' style={{width : "450px", height : "550px" , marginTop :"70px"}}>
        
        <form action="" onSubmit={handleSumit}>

            <label htmlFor="" class ='fs-3 mb-3 mt-3' style={{letterSpacing : "3px", fontFamily : "Roboto sans-serif"}}>FullName</label>
            <div>
                <input type="text" style = {{padding : "13px"}} class='mb-3 border border-light rounded-md ' placeholder="Enter your Name"  onChange={(e) => setFullName(e.target.value)} required/>
            </div>
            
            <label htmlFor="" class ='fs-3 mb-3 mt-3' style={{letterSpacing : "3px", fontFamily : "Roboto sans-serif"}}>Email</label>
            <div>
               <input type="text"  style = {{padding : "13px"}} class='mb-3 border border-light rounded-md ' placeholder="Enter Your Email"  onChange={(e) => setUserEmail(e.target.value)} required/>
            </div>

            <label htmlFor="" class ='fs-3 mb-3 mt-3' style={{letterSpacing : "3px", fontFamily : "Roboto sans-serif"}}>Password</label>
            <div>
                <input type="text" style = {{padding : "13px"}} class='mb-3 border border-light rounded-md ' placeholder="Enter Your Password"  onChange={() => setPasword(e.target.value)} required/>
            </div>
            
             <button class='text-white bg-primary rounded mt-3 ' onClick={() => navigate('/')} style={{padding : "10px 20px" , letterSpacing : "1px" , border : 'none' , marginLeft : "100px"}}>Sign Up</button>
        </form>
    </div>
}