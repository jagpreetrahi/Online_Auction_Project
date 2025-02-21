
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'

export function SignIn(){
    
    const navigate = useNavigate();
    const [isAuthenticate , setAuthenticate]  = useState(false);
    const [userEmail , setUserEmail] = useState("");
    const [password , setPasword] = useState("");
    const [message , setMessage] = useState("")

    const handleSumit = (e) => {
         e.preventDefault()
    }


    useEffect(() => {

        const regiterUsers = JSON.parse(localStorage.getItem('users')) || [];
        const userExits = regiterUsers.find(user => user.email === userEmail && user.password === password)
        if(userExits){
            setAuthenticate(true);
            
            setMessage("Login Successfully")
            return 
        }
        else{
            setAuthenticate(false);
            
            setMessage("Invalid User")
        }

    }, [userEmail , password])

    return  <div class='border rounded p-2 mb-auto   bg-body-tertiary shadow mx-auto d-flex ' style={{width : "350px", height : "400px" , marginTop :"100px"}}>
        {isAuthenticate ? <div>
            <div>
                <p>{message}</p>
            </div>
        </div> : null}
        <form action="" onSubmit={handleSumit}>
            
            <label htmlFor="" class ='fs-3 mb-3 mt-3' style={{letterSpacing : "3px", fontFamily : "Roboto sans-serif"}}>Email</label>
            <div>
               <input type="text" class='mb-3 border border-light rounded-md ' style={{padding : "13px"}} placeholder="Enter Your Email"  onChange={(e) => setUserEmail(e.target.value)} required/>
            </div>

            <label htmlFor="" class='fs-3 mb-4' style={{letterSpacing : "1px"}}>Password</label>
            <div>
                <input type="text rounded" required style = {{padding : "13px"}} class='mb-3 border border-light rounded-md '  placeholder="Enter Your Password"  onChange={() => setPasword(e.target.value)} />
            </div>
            
             <button class='text-white bg-primary rounded mt-3 '  onClick={() => navigate('/')} style={{padding : "10px 20px" , letterSpacing : "1px" , border : 'none' , marginLeft : "100px"}}>Sign In</button>
        </form>
    </div>
}