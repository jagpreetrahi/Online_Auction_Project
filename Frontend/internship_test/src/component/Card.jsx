import React from "react";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { CounterTimer } from "../component/CounterTime";


export const  Card = React.memo(({items}) =>  {
   const navigate = useNavigate();
  
  const timeValid = new Date();
  const isLoggedUser = Boolean(localStorage.getItem("token"));

  return (
    <>
        <div className="container">
          <div className="row">

            {items.length > 0 ?  ( items.map((item , index) => {
                  
                const [auctionId] = useMemo(() => items.map(() => 1 + parseInt(Math.random().toFixed(2) * 100)) , [items])
                return  <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}> 
                  <div className="card  shadow-sm p-3" style={{ height: "540px", width : "300px"}}>
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
                          <span className="border rounded px-2 py-1 focus-ring">{item.isClosed || item.closingTime > timeValid? <span>CLosed</span> : <span>Live</span>}</span>
                       </div>
                      
                    </div>
      
                    <img src={item.imageURL} className="img-fluid  d-block mt-1" style={{ maxWidth: "170px" }} alt="Product" />
      
                    <div className="d-flex mt-2">
                         <p>{item.itemDescription}</p>
                    </div>
      
                    <div className="me-3">
                      <div className= "d-flex justify-content-between mb-2 mt-3">
                        <h5 style={{ letterSpacing: "2px", fontFamily: "Roboto, sans-serif" }}>
                          Current Bid : {item.currentBid}
                        </h5>
                           
                      </div>
                     
                     <button className="bg-primary text-white border rounded px-2 py-1 mb-2" style={{letterSpacing : '2px'}} onClick={function () {
                        if(!isLoggedUser){
                            navigate('/signIn')
                        }
                        else{
                         navigate('/auctionDetail' , {state : item})
                        }
                      
                     }}>Make a Deal</button>
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
