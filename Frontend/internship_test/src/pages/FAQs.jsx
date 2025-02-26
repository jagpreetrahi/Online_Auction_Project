import { useEffect, useState } from "react"
import axios  from "axios"
import { NavBar } from "../component/NavBar"

export const FAQs = () => {
    const [faq , setFAQ] = useState([])
    

    useEffect(() => {
        async function fetchData(){
            const response = await axios.get("http://localhost:3001/api/v1/question/answer")
            setFAQ(response.data.questionData)
        }

        fetchData()
    } , [])

    console.log(faq)

    return <div>
        <NavBar/>
        {faq.map((ques , index) => (<RenderQuestion key={index} question ={ques.question} answer= {ques.answer}/>))}

    </div>
}


function RenderQuestion({answer , question}){

    const [isVisible , setVisible] = useState(false)

    const handleToggle = () => {
        
        setVisible(!isVisible)
        document.getElementById("btn").addEventListener('click' , () => {
            let content = document.getElementById("content");
            content.style.display =  "none" ? "block" : "none"
        })
    }

    return <div class="d-flex justify-content-center  w-50 shadow-md bg-secondary-subtle mt-5 mx-auto  rounded-2 mb-5  fs-5" style={{letterSpacing : "1px" , fontFamily : "Roboto sans-serif"}}>
        
            <div class="d-flex   flex-column ml-5">
                <div class="d-flex justify-content-around g-row-4" >
                    <div class="mt-3 mb-2 pl-3 ">
                       {question}
                    </div>
                    <div class="d-flex justify-content-center flex-column mt-2 me-5 ">
                        <button class="" style={{border : "none"}} onClick={handleToggle} id="btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                <path d="M8 1a.5.5 0 0 1 .5.5V7.5H14a.5.5 0 0 1 0 1H8.5V14a.5.5 0 0 1-1 0V8.5H2a.5.5 0 0 1 0-1h5.5V1.5A.5.5 0 0 1 8 1z"/>
                            </svg>
                        </button>
                       
                    </div>
                </div>
                {isVisible && (<div id="content mb-2 text-center">
                {answer}
                </div>)}
                
            </div>
        
       
      
    </div>
}