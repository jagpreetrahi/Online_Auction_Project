import { useState } from "react"
import {Button} from '../component/Button'
import { InputBox } from "../component/InputBox";
import { NavBar } from "../component/NavBar";

export const Contact = () => {

    return <div>
        <NavBar/>
        <RenderContact/>
    </div>
}

function RenderContact()  {

    const [isVisible , setVisible] = useState(false);

    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [description , setDescription] = useState("");

    const handleMessage = () => {
        setVisible(!isVisible)
        window.addEventListener('click' , () => {
            const message = document.getElementById("msg")
            message.style.display = "none" ? "block" :  "none"
        })
    }

    return <div class="d-flex justify-content-center shadow-md">
        
        <div class="w-50 h-50  mt-5 ms-5 rounded-2 shadow-lg">
            <div class="d-flex justify-content-around flex-row mt-2">
            <InputBox placehoder={"Enter Your Name"} label={"Name"} onchange={(e) => setName(e.target.value)}/>
            <InputBox placehoder={"Enter Your Email"} label={"Email"} onchange={(e) => setName(e.target.value)}/>
            </div>
            <div class="d-flex flex-column">
                <div class="d-flex flex-column">
                  <label htmlFor="" class="flex text-sm fw-medium pb-3 pt-3 text-xl mx-5 mt-3" style={{letterSpacing : "1px"}}>Description</label>
                  <input type="text" placeholder="Enter your description" required   class='w-75 px-2 py-1 mx-5  rounded border border-secondary-subtle'/>
                </div>
                <div class="mx-auto mt-5">
                  <Button onClick={handleMessage} label={"Contact Us"}></Button>
                </div>
            </div>
            
            
        </div>

        

        {isVisible && ( <div class="w-25 h-25 border-success-subtle bg-success fs-5 mt-5 rounded text-white" id="msg" style={{letterSpacing : "2px", marginLeft : "5px"}}>
            <span>Your Contact Request Send</span>
        </div>)}
    
      
        
    </div>
}