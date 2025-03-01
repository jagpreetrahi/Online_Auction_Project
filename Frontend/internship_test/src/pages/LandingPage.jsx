import { Card } from "../component/Card";
import { NavBar } from "../component/NavBar";
import { Button } from "../component/Button";
import { useState } from "react";
import { Footer } from "../component/Footer";

export function LandingPage() {
  const [isLogin, setLogin] = useState(false);

  const handleClick = () => {};

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

      
      <div className="container d-flex justify-content-center  mt-4 mb-4">
             <h3 style={{letterSpacing : "2px", fontSize : "35px"}}>Live Auction</h3>
      </div>

        
        <div className="container mt-4">
          <div className="row g-3">
            <div className="col-md-4 ">
              <Card title="Glass Jug" amount="10,0000" bidAmount="0.10" image="/bug.jpg" />
            </div>
            <div className="col-md-4">
              <Card title="Realme Bud" amount="7000" bidAmount="0.10" image="/buds.jpg" />
            </div>
            <div className="col-md-4">
              <Card title="One Piece" amount="11,0000" bidAmount="0.10" image="/kurti.jpg" />
            </div>
            <div className="col-md-4">
              <Card title="Tractor" amount="12,999" bidAmount="0.10" image="/dummy.jpg" />
            </div>
          </div>
        </div>
      
      

     
        <div className="container d-flex justify-content-center  mt-4 mb-4">
             <h3 style={{letterSpacing : "2px", fontSize : "35px"}}>Live Auction</h3>
        </div>

        
        <div className="container mt-4">
          <div className="row mt-4 g-3">
            <div className="col-md-4">
              <Card title="Speaker" amount="10,0000" bidAmount="0.10" image="/speaker.jpg" />
            </div>
            <div className="col-md-4">
              <Card title="Watch" amount="7000" bidAmount="0.10" image="/watch.jpeg" />
            </div>
            <div className="col-md-4">
              <Card title="Credits" amount="11,0000" bidAmount="0.10" image="/25_credit.jpg" />
            </div>
            <div className="col-md-4">
              <Card title="Roller" amount="12,999" bidAmount="0.10" image="/roller.jpeg" />
            </div>
          </div>
        </div>
       
      
      <Footer/>
    </>
  );
}
