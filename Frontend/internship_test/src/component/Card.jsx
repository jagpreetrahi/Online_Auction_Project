import { useState } from "react"

export function Card({
    title,
    amount,
    bidAmount,
    image,


})

  
 {
    const [auctionId] = useState(1 + parseInt(Math.random().toFixed(2) * 100));

    const start = Date.now();

   console.log(start)
  
    const timer = new Date();

    const end = Date.now();
   
    

   
  
     return <div class="card" style={{height : "590px"}}>
      <div>
        <h4 class='mt-4' style={{marginLeft  : "100px", fontSize  : "40px" , letterSpacing : '2px', fontFamily : 'Roboto sans-serif' }}>{title}</h4> 
        <h5 style={{marginLeft  : "120px", letterSpacing : '2px', fontFamily : 'Roboto sans-serif' }}>MRP :{amount} </h5>
      </div>
     

      
     <img src={image} class="img-responsive" style={{maxWidth : "180px" , margin : "auto" , marginTop : "15px"}}  alt="..."></img> 
     <div class="card-body">
       <p >Auction Id : {auctionId}</p>
       <div class='d-flex justify-content-between'>
          <span>Current : <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
            <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
         </svg>{bidAmount}</span>
          {/* <p class='fs-4'>{`${timer.getHours()} : ${timer.getMinutes()} : ${timer.getSeconds()}`}</p> */}
       </div>
       <a href="#" class="btn btn-primary" style={{marginTop : "45px", marginLeft :"100px", padding : "10px 30px"}}>Make a deal</a>
     </div>
   </div>
}