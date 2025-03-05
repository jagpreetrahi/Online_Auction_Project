import { useState} from "react"
import { useLocation } from "react-router-dom"
import {NavBar} from "./../component/NavBar"
import {Footer} from "./../component/Footer"
import {CounterTimer} from "./../component/CounterTime"
import {Button} from "./../component/Button"
export const AuctionDetail = () => {
   const location = useLocation();
   const responseData = location.state
   
    return <>
      <NavBar/>
      <AuctionRender userData = {responseData} />
      <Footer/>
    </>
}

function AuctionRender({userData}){

   const [placedBit , setPlacedBit] = useState(userData.currentBid)
   

   const handleValue = (e) => {
      
      setPlacedBit(e.target.value);
     
      
   }

   

   return  <>
         <div className=" container mt-5 mb-5">
            <div className="row g-3 ">
               <div className=" col-12  d-flex justify-content-between">

                  <div className="mt-4 d-flex me-5" style={{width : "500px" , height : '300px'}}>
                     <img src={userData.imageURL} alt="" />
                  </div>
                  <div className="w-75 d-flex flex-column mx-1">
                        <div className="fs-3 fw-bold">
                           <span style={{letterSpacing : "1px" , fontFamily : 'Roboto'}}>{userData.itemDescription}</span>
                        </div>

                        <div className=" mt-4 d-flex justify-content-center">
                           <div className="w-50">
                               <span className="text-white bg-danger border-none rounded px-2 py-1">Limited time deal</span>
                           </div>
                           
                           <div className="bg-danger rounded w-50 h-75">
                              <span className=""><CounterTimer auctionTimer ={userData.closingTime}/></span>
                           </div>
                           
                        </div>

                        <div className="mt-5">
                           <span className="fs-3">Current Bid : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                              <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                           </svg>{userData.currentBid}</span>
                        </div>

                        <div className="w-75 shadow-sm  mt-4  d-flex flex-column" style={{height : "200px"  , maxWidth : "500px" , borderRadius :  "15px"}}>
                              <h3 className="mx-4  mt-2" style={{letterSpacing : "2px" , fontFamily : 'Roboto'}}>Placed a Bid</h3>
                              <input className="w-50 mx-5 border rounded mt-2 px-2 py-1 focus-ring" type="text" placeholder={placedBit} onChange={handleValue} />
                              <div className="mt-5 mx-4">
                                 <Button label={"Bid Now"} onClick={() => userData.currentBid = placedBit}></Button>
                              </div>
                        </div>

                        
                  </div>

                  <div className="shadow-sm mx-1 border" style={{width : "400px" , height : "400px" , marginLeft : "30px" , borderRadius : "15px"}}>

                  </div>
               </div>
                  
            </div>
         
      </div>
   </>
   
}