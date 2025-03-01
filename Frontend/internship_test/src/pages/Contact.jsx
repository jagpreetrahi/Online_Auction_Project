import {useState } from "react";
import { Button } from "../component/Button";
import { InputBox } from "../component/InputBox";
import { NavBar } from "../component/NavBar";
import axios from "axios";
import { Footer } from "../component/Footer";

export const Contact = () => {
  return (
    <div>
      <NavBar />
      <RenderContact />
    </div>
  );
};

function RenderContact() {
  const [isVisible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const handleMessage = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/api/v1/contact/user", {
        userName: name,
        userEmail: email,
        description,
      });

      console.log(response.data);
      setVisible(true);

      setTimeout(() => {
        setVisible(false);
      }, 3000);
    } catch (error) {
      console.error("Error sending contact request:", error);
    }
  };

  return (
     <>
        
      <div className="d-flex justify-content-center align-items-center position-relative p-3 mb-4">
      
        {isVisible && (
          <div
            className="position-absolute w-50 text-center border-success fs-5 mt-5 rounded p-2"
            style={{
              background: "#d4edda",
              color: "#155724",
              letterSpacing: "1px",
              fontWeight: "bold",
            }}
          >
            Your Contact Request Sent!
          </div>
        )}

      
        <div className="col-12 col-md-6 w-75 mt-5 rounded-2 shadow-lg p-4">
          <div className="row g-3">
          
            <div className="col-12 col-md-6">
              <InputBox placeholder={"Enter Your Name"} label = {"Name"} onchange={(e) => setName(e.target.value)} />
            </div>

            
            <div className="col-12 col-md-6">
              <InputBox placeholder={'Enter Your email'} label= {"Email"} onchange={(e) => setEmail(e.target.value)} />
            </div>
          </div>

       
        <div className="mt-3">
          <label htmlFor="description" className="fw-medium text-xl" style={{ letterSpacing: "1px" }}>
            Description
          </label>
          <input
            type="text"
            id="description"
            placeholder="Enter your description"
            required
            className="form-control mt-2"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        
        <div className="text-center mt-4">
          <Button onClick={handleMessage} label="Contact Us" />
        </div>
      </div>
    </div>

      <Footer/>
     </>
   
  );
}
