import React from "react";

import { CounterTimer } from "../component/CounterTime";


export const  Card = React.memo(({items}) =>  {
  const [auctionId] = items.map(() => 1 + parseInt(Math.random().toFixed(2) * 100))

  const handleClick =() => {
    
  }

  
  return (
    <>
        <div className="container">
          <div className="row">

            {items.length > 0 ?  ( items.map((item , index) => {
                  
                
                return  <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}> 
                  <div className="card  shadow-sm p-3" style={{ height: "450px" }}>
                    <div className="d-flex flex-col justify-content-between">
                      <div>
                          <h4 className="" style={{ fontSize: "25px", letterSpacing: "2px", fontFamily: "Roboto, sans-serif" }}>
                            {item.itemName}
                          </h4>
                      </div>
                       <div className="me-5">
                          <p># {auctionId}</p>
                       </div>

                       <div className="me-5 ml-4">
                          <span className="border rounded px-2 py-1 focus-ring">{item.isClosed ? <span>Live</span> : <span>Closed</span>}</span>
                       </div>
                      
                    </div>
      
                    <img src={''} className="img-fluid mx-auto d-block mt-3" style={{ maxWidth: "180px" }} alt="Product" />
      
                    <div className="d-flex">
                         <p>{item.itemDescription}</p>
                    </div>
      
                    <div className="card-body ">
                      <div className= "d-flex justify-content-between mb-5">
                        <h5 className="text-center" style={{ letterSpacing: "2px", fontFamily: "Roboto, sans-serif" }}>
                          Current Bid : {item.currentBid}
                        </h5>
                           
                      </div>
                     
                     <button className="bg-primary text-white border rounded px-2 py-1" style={{letterSpacing : '2px'}} onClick={handleClick}>Make a Deal</button>
                    </div>

                    <div className="bg-black " style={{marginTop : 'auto'}}>
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
