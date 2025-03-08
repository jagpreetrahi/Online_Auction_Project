import React from "react";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { CounterTimer } from "../component/CounterTime";


export const  Card = React.memo(({items , currentPrice}) =>  {
  const navigate = useNavigate();
  
  const timeValid = new Date();
  const isLoggedUser = Boolean(localStorage.getItem("token"));
  const [isFavourite , setFavourite] = useState(false);

  const toggleFavourite = () => {
    setFavourite(!isFavourite)
    if(isFavourite){
        
    }
    
  }

  const [auctionId] = useState(() =>
    items.map(() => 1 + parseInt(Math.random().toFixed(2) * 100))
  );
  

  

  return (
    <>
        <div className="container">
          <div className="row">

            {items.length > 0 ?  ( items.map((item , index) => {
                  
                
                return  <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}> 
                  <div className="card  shadow-sm p-3" style={{ height: "610px", width : "300px"}}>
                    <div className="d-flex flex-col justify-content-between">
                      <div>
                          <h4 style={{ fontSize: "21px", letterSpacing: "2px", fontFamily: "Roboto, sans-serif" }}>
                            {item.itemName}
                          </h4>
                      </div>
                       <div className="me-5">
                          <p># {auctionId}</p>
                       </div>

                       <div className="me-2 ml-4">
                          <span className="border rounded px-2 py-1 focus-ring">{item.isClosed || item.closingTime < timeValid? <span>Closed</span> : <span>Live</span>}</span>
                       </div>
                      
                    </div>
      
                    <img src={item.imageURL} className="img-fluid  d-block mt-1" style={{ maxWidth: "170px" }} alt="Product" />
      
                    <div className="d-flex mt-2">
                         <p>{item.itemDescription}</p>
                    </div>
      
                    <div className="me-3">
                      <div className= "d-flex justify-content-between mb-2 mt-3">
                        <h5 style={{ letterSpacing: "2px", fontFamily: "Roboto, sans-serif" }}>
                          Current Bid : {item.currentBid <= currentPrice ? currentPrice : item.currentBid }
                        </h5>
                           
                      </div>
                     
                     <div className="d-flex flex-row justify-content-between">
                        <button className="bg-primary text-white border rounded px-2 py-1 mb-2" style={{letterSpacing : '2px'}} onClick={function () {
                            if(!isLoggedUser){
                                navigate('/signIn')
                            }
                            else{
                            navigate('/auctionDetail' , {state : item})
                            }
                          
                        }}>Make a Deal</button>
                         <button onClick={toggleFavourite} style={{border : 'none' , background : 'none'}}><span class="material-symbols-outlined fs-2" style={{ color: isFavourite ? "red" : "#D3D3D3" ,    fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48"}}>favorite</span></button>
                     </div>
                    

                    
                    </div>

                    <div className="bg-black mt-auto fixed">
                         <CounterTimer auctionTimer={item.closingTime}/>
                    </div>
                  </div>
               </div>
            })) : (<p>Loaoding :</p>)}
              
         

          </div>

        </div>
       
    </>
   
  );
})
