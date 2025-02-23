import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { SubHeading } from "../component/SubHeading";
import { InputBox } from "../component/InputBox";
import { Heading } from "../component/Heading";
import { Button } from "../component/Button";
import { BottomWarning } from "../component/BottomWarning";

export const SignUp = () => {
    const [firstName , setFirstName] = useState("");
    const [lastName , setLastName] = useState("");
    const [userEmail , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const navigate = useNavigate();

    return <div class="min-vh-100 bg-secondary-subtle d-flex justify-content-center">
         
        <div class="d-flex flex-column justify-content-center">
            <div class="rouded bg-white w-80 h-90 p-2 px-4 mt-5 pb-4">
                <Heading label={"Sign Up"}/>
                <SubHeading label={"Enter your infromation to create an account"}/>
                <InputBox placeholder={"John"} label={"First Name"} onChange={(e) => setFirstName(e.target.value)}/>
                <InputBox placeholder={"Doe"} label={"Last Name"} onChange={(e) => setLastName(e.target.value)}/>
                <InputBox placeholder={"xyz@gmail.com"} label={"Email"} onChange={(e) => setEmail(e.target.value)}/>
                <InputBox placeholder={"1234"} label={"Password"} onChange={(e) => setPassword(e.target.value)}/>
                <div class="pt-4">
                    <Button onClick={async () => {
                        const response = await axiox.post("http://localhost:3000/api/v1/user/signUp"  , {
                            userEmail,
                            firstName,
                            lastName,
                            password
                        });
                        localStorage.setItems('token' , response.data.token)
                        navigate("/")
                    }} label={"Sign Up"}/>
                        
                </div>
                <BottomWarning label={"Don't have an account"} buttonText={"Sign In"} to={"/signIn"}/>

            </div>
        </div>
    </div>
}