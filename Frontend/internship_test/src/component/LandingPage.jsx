import {Card} from './Card'
export function LandingPage(){

  return <div>
      <div class="d-flex flex-row mb-3 justify-content-evenly" style={{marginTop : "70px"}}>
          <div class='main-content'>
              <h1 class='fs-1' style={{letterSpacing : "2px"}}>Online Auction made easy</h1>
              <p class='fs-3 text-secondary' style={{letterSpacing : "1px" , marginTop : "20px"}}>Bid, Sell, and Win on the Premier Online Auction Marketplace</p>
              <p class='fs-4 text-secondary' style={{letterSpacing : "1px"}}>With real-time bidding, automated price tracking, and secure payments, <br />you can bid with confidence, sell with ease, and win big!</p>
              <div className='mt-5 '>
                <button type="button" class="btn btn-primary" style={{letterSpacing : "1px" , padding : "10px 20px"}}>Start Biding</button>
                
              </div>
          </div>
         
          <div className="home-image">
              
            <img src="/infographic.png" class="img-fluid" alt="" />
              
           </div>
          
      </div>

      <div class="text-center" style={{marginTop : "150px"}}>
         <h3 class='fs-1' style={{letterSpacing : "1px"}}>In-Demand Live Auction</h3>
      </div>
  
      
      <div class="d-flex flex-row mb-3 justify-content-between mt-7" style={{marginTop : "40px"}}>
          <Card title= {"Jug"} amount={"10,0000"} bidAmount={"0.10"}/>
          <Card title= {""} amount={"7000"} bidAmount={"0.10"}/>
          <Card title= {"Ladies One Piece"} amount={"11,0000"} bidAmount={"0.10"}/>
          <Card title= {"Tractor"} amount={"12,999"} bidAmount={"0.10"}/>

      </div>
      <div class="text-center" style={{marginTop : "40px"}}>
         
           <h3 class='fs-1' style={{letterSpacing : "1px"}}>Closed Auction</h3>
           

      </div>
      
      <div class="d-flex flex-row mb-3 justify-content-between mt-7" style={{marginTop :"20px"}}>
          <Card title= {"Jug"} amount={"10,0000"} bidAmount={"0.10"}/>
          <Card title= {""} amount={"7000"} bidAmount={"0.10"}/>
          <Card title= {"Ladies One Piece"} amount={"11,0000"} bidAmount={"0.10"}/>
          <Card title= {"Tractor"} amount={"12,999"} bidAmount={"0.10"}/>

      </div>

     
     
    

    
  </div>
}


