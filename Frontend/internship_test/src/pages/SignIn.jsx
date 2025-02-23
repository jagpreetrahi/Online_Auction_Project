import { useState } from "react"
import { SubHeading } from "../component/SubHeading";
import { Heading } from "../component/Heading";
import { InputBox } from "../component/InputBox";
import { Button } from "../component/Button";
import { BottomWarning } from "../component/BottomWarning";

export const SignIn = () => {
    const [userEmail , setEmail] = useState("");
    const [password , setPassword] = useState("");
    return <div class="min-vh-100 bg-secondary-subtle d-flex justify-content-center">
        <div class="d-flex flex-column justify-content-center">
            <div class="rounded w-80 bg-white  px-4 p-2 mt-5">
                 <Heading label = {"Sign In"}/>
                 <SubHeading label={"Enter your credentials to access your account"}/>
                 <InputBox placeholder="jaggy@gmail.com" label={"Email"} onchange={(e) => setEmail(e.target.value)} />
                 <InputBox placeholder="1234" label={"Password"} onchange={(e) => setPassword(e.target.value)} />
                 <div class="pt-5">
                    <Button onClick = { async() => {
                       const response = await axios.post("http://localhost:3001/api/v1/user/signIn" , {
                        userEmail , 
                        password
                       });
                       localStorage.setItem("token" , response.data.token);
                       Navigate("/")

                    }} label ={"Sign In"}/>
                 </div>
                 <BottomWarning label={"Don't have an account"} buttonText={"Sign Up"} to = {"/signUp"}/>
            </div>

        </div>

    </div>
}
