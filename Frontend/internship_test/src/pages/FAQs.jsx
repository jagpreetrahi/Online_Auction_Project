import { useEffect, useState } from "react";
import axios from "axios";
import { NavBar } from "../component/NavBar";
import { Footer } from "../component/Footer";

export const FAQs = () => {
  const [faq, setFAQ] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("https://online-auction-project.onrender.com/api/v1/question/answer");
      setFAQ(response.data.questionData);
    }

    fetchData();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="container mt-4">
        {faq.map((ques, index) => (
          <RenderQuestion key={index} question={ques.question} answer={ques.answer} />
        ))}
      </div>
      <Footer/>
    </div>
  );
};

function RenderQuestion({ answer, question }) {
  const [isVisible, setVisible] = useState(false);

  return (
    <>
       <div className="container w-100 d-flex flex-column align-items-center mb-4">
          <div className="w-100 p-3 bg-light  rounded" style={{ maxWidth: "600px" }}>
            <div className="d-flex justify-content-between align-items-center">
              <div className="fw-bold">{question}</div>
              <button
                className="btn btn-light"
                onClick={() => setVisible(!isVisible)}
                aria-expanded={isVisible}
              >
                {isVisible ? "−" : "+"}
              </button>
            </div>
            {isVisible && <div className="mt-2 p-2 border-top">{answer}</div>}
          </div>
         
       </div>

     
       
    </>
    
  );
}
