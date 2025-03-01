import { Button } from "../component/Button";
import { useState } from "react";

export function Card({ title, amount, bidAmount, image }) {
  const [auctionId] = useState(1 + parseInt(Math.random().toFixed(2) * 100));

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"> 
      <div className="card  shadow-sm p-3" style={{ height: "500px" }}>
        <div>
          <h4 className="mt-4 text-center" style={{ fontSize: "40px", letterSpacing: "2px", fontFamily: "Roboto, sans-serif" }}>
            {title}
          </h4>
          <h5 className="text-center" style={{ letterSpacing: "2px", fontFamily: "Roboto, sans-serif" }}>
            MRP: {amount}
          </h5>
        </div>

        <img src={image} className="img-fluid mx-auto d-block mt-3" style={{ maxWidth: "180px" }} alt="Product" />

        <div className="card-body text-center">
          <p>Auction Id: {auctionId}</p>
          <div className="d-flex justify-content-between">
            <span>
              Current:
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-currency-rupee" viewBox="0 0 16 16">
                <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
              </svg>
              {bidAmount}
            </span>
          </div>

          <Button label="Make a Deal" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}
