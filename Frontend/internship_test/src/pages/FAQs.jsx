import { useEffect, useState } from "react"
import axios from 'axios'

export const FAQs = () => {
    const [faqs , setFaqs] = useState([])
    

    useEffect(() => {
        axios.get("http://localhost:3001/api/v1/question/answer")
        .then(response => {
            console.log(response.data)
            setFaqs(response.data)
        })
        .catch(error => {
            console.log("Error is:" , error)
        })
    } , [])

    return <div>
          <h1>Faqs :</h1>
          {faqs.length > 0 ? (
                faqs.map((faq, index) => (
                    <div key={index}>
                        <strong>Question:</strong> {faq.question} <br />
                        <strong>Answer:</strong> {faq.answer} <br />
                        <hr />
                    </div>
                ))
            ) : (
                <p>No FAQs found.</p>
            )}
    </div>

}