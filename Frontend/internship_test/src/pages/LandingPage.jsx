import { Card } from "../component/Card";
import { NavBar } from "../component/NavBar";
import { Button } from "../component/Button";
import { useState } from "react";
import { Footer } from "../component/Footer";
import axios from 'axios'
import { useEffect , useMemo} from "react";
import { useNavigate } from "react-router-dom";



export function LandingPage() {
 
  const [items , setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    
      
      const handleData = async () => {
        
         try {
          const response = await axios.get("http://localhost:3001/api/v1/auctionItem/auctions")
           console.log(response.data)
          setItems(response.data)
         } catch (error) {
            console.log("Error is " , error)
         }
         
         
        
      }

      handleData()
  }, [])

  const handleClick = () => {
    navigate('/signIn')
  };

   ;

  return (
    <>
      <NavBar />

      
      <div className="container mt-5">
        <div className="row g-2 d-flex justify-content-center">
          
          <div className="col-12  col-md-6  text-start">
            <h1 className="fs-1" style={{ letterSpacing: "2px", maxWidth: "550px" }}>
              Online Auction Made Easy
            </h1>
            <p className="fs-3 text-secondary mt-3" style={{ letterSpacing: "1px", maxWidth: "550px" }}>
              Bid, Sell, and Win on the Premier Online Auction Marketplace
            </p>
            <p className="fs-4 text-secondary" style={{ maxWidth: "620px" }}>
              With real-time bidding, automated price tracking, and secure payments, <br />
              you can bid with confidence, sell with ease, and win big!
            </p>
            <div className="mt-4">
              <Button label={"Start Bidding"} onClick={handleClick} />
            </div>
          </div>

          
          <div className="col-12 col-md-6 d-flex justify-content-md-end">
            <img src="/infographic.png" className="img-fluid" style={{ maxWidth: "400px" }} alt="Auction Infographic" />
          </div>
        </div>
      </div>

      
      {/* Live Auction Auction */}
      <div className="container d-flex justify-content-center  mt-4 mb-4">
             <h3 style={{letterSpacing : "2px", fontSize : "35px"}}>Demand Auction</h3>
        </div>

       {/* Card  container */}
        <div className="container">
            <div className="row g-3 d-flex justify-content-center ">
                {items.length > 0 ? (
                    items.map((item, index) => (
                      <div className="col-md-4" key={index}>
                        <Card items={[item]} />
                      </div>
                    ))
                  ) : (
                  <p>Loading...</p>
                )}
                
            </div>
        </div>

       

      
       
      
      <Footer/>
    </>
  );
}
