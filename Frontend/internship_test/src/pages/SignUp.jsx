import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { SubHeading } from "../component/SubHeading";
import { InputBox } from "../component/InputBox";
import { Heading } from "../component/Heading";
import { Button } from "../component/Button";
import { BottomWarning } from "../component/BottomWarning";
import axios from "axios";

export const SignUp = () => {
   
    const [fullName , setFullName] = useState("");
    const [userEmail , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const navigate = useNavigate();

    return <div class="min-vh-100 bg-secondary-subtle d-flex justify-content-center">
         
        <div class="d-flex flex-column justify-content-center">
            <div class="rouded bg-white w-80 h-90 p-2 px-4 mt-5 pb-4">
                <Heading label={"Sign Up"}/>
                <SubHeading label={"Enter your infromation to create an account"}/>
                <InputBox placeholder={"John Doe"} label={"Full Name"} onchange={(e) => setFullName(e.target.value)}/>
                <InputBox placeholder={"xyz@gmail.com"} label={"Email"} onchange={(e) => setEmail(e.target.value)}/>
                <InputBox placeholder={"1234"} label={"Password"} onchange={(e) => setPassword(e.target.value)}/>
                <div class="pt-4">
                    <Button onClick={async () => {
                        const response = await axios.post("http://localhost:3001/api/v1/user/signUp"  , {
                            userEmail,
                            fullName,
                            password
                        });
                        console.log("Generated Token:", response.data.token);
                        localStorage.setItem('token' , response.data.token)
                        navigate("/")
                    }} label={"Sign Up"}/>
                        
                </div>
                <BottomWarning label={"Don't have an account"} buttonText={"Sign In"} to={"/signIn"}/>

            </div>
        </div>
    </div>
}