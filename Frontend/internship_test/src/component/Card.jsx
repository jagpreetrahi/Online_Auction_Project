import { useState } from "react"

export function Card({
    title,
    amount,
    bidAmount,


})

  
 {
    const [auctionId] = useState(1 + parseInt(Math.random().toFixed(2) * 100));
    const images   =[
       {path : '/bug.jpg' , name : "Jug"},
       {path : '/dummy.jpg' , name : "Tractor"},
       {path : '/kurti.jpg' , name : "Ladies Clothes"},
       {path : '/watch.jpg' , name : "Watch"},
       {path : '/roller.jpeg' , name : "Gym-Roller"},
       {path : '/speaker.jpg' , name : "Speaker"},
       {path  : '/buds.jpg' , name : "Realme Buds"},
       {path : '/25_credit.jpg' , name : "Cards"},
       
    ]
    

    const randomImage = images[Math.floor(Math.random() * images.length)]
  
     return <div class="card">
      <div>
        <h4 class="card-title">{title}</h4> 
        <h5 class="card-title">{amount} </h5>
      </div>
     

      
     <img src={randomImage.path} class="card-img-top" alt="..."></img> 
     <div class="card-body">
       <p >Auction Id : {auctionId}</p>
       <div>
          <span>{bidAmount}</span>
          {}
       </div>
       <a href="#" class="btn btn-primary">Go somewhere</a>
     </div>
   </div>
}