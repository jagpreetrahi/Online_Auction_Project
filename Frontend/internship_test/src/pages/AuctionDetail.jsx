import { useEffect, useMemo, useState} from "react"
import { useLocation } from "react-router-dom"
import {NavBar} from "./../component/NavBar"
import {Footer} from "./../component/Footer"
import {CounterTimer} from "./../component/CounterTime"
import {Button} from "./../component/Button"
import React from "react"

export const AuctionDetail = () => {
   const location = useLocation();
   const responseData = location.state;
   return <>
      <NavBar/>
      <AuctionRender userData = {responseData}/>
      <Footer/>
    </>
}

function AuctionRender({userData}){

   const [placedBit , setPlacedBit] = useState(userData.currentBid)
   const [inputValue , setInputValue] = useState(placedBit);
   

   const handleValue = (e) => {
      
      setPlacedBit(e.target.value);
     
      
   }

   const increaseValue = () => {
      setInputValue((prev) => prev + 1)
      
   }
   const decreaseValue = () => {
      
      if(inputValue <= placedBit){

         return alert("Cannot placed a bid below the currentBid")
      }
      setInputValue((prev) => prev - 1)
   }
   
   const handleBid = () => {
      
      setPlacedBit(inputValue);
       
   }

   return  <>
         <div className="container mt-5 mb-5">
            <div className="row g-3 d-flex justify-content-center">
               <div className="col-12    d-flex flex-column flex-lg-row justify-content-between">

                  <div className=" mt-4 me-0 me-lg-5 text-center" >
                     <img src={userData.imageURL} alt="" className="img-fluid rounded" style={{maxWidth: "100%" , height : 'auto'}}/>
                  </div>
                  <div className="w-100 w-lg-75 d-flex flex-column mx-1">
                        <div className="fs-3 fw-bold text-center text-lg-start">
                           <span style={{letterSpacing : "1px" , fontFamily : 'Roboto'}}>{userData.itemDescription}</span>
                        </div>

                        <div className=" mt-4 d-flex flex-column flex-lg-row justify-content-between align-items-center">
                           <div className="w-50 h-50">
                               <span className="text-white bg-danger border-none rounded px-2 py-1 mb-lg-0 ">Limited time deal</span>
                           </div>
                           
                           <div className="d-flex flex-row  bg-danger rounded w-75 h-75">
                              <span className=""><CounterTimer auctionTimer ={userData.closingTime}/></span>
                           </div>
                           
                        </div>

                        <div className="mt-5 text-center text-lg-start">
                           <span className="fs-3">Current Bid : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                              <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                           </svg>{placedBit}</span>
                        </div>

                        <div className=" w-100 w-lg-75 shadow-sm  mt-4  d-flex flex-column mx-auto" style={{height : "200px"  , maxWidth : "500px" , borderRadius :  "15px"}}>
                              <h3 className="mx-4  mt-2 text-center text-lg-start" style={{letterSpacing : "2px" , fontFamily : 'Roboto'}}>Placed a Bid</h3>
                              <div className="d-flex flex-row justify-content-center">
                                 <button  className="mx-4 border-0"style={{border : 'none'}}  onClick={increaseValue}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                                    </svg>
                                 </button>
                                 <input className="w-100  mx-5 border rounded mt-2 px-4 py-1 focus-ring" type="text" value={inputValue}  onChange={handleValue} />
                                 <button className="me-4 border-0" style={{border : 'none'}}  onClick={decreaseValue}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
                                 </svg></button>

                              </div>
                              
                              <div className="mt-5 mx-4 text-center">
                                 <Button label={"Bid Now"} onClick={handleBid}></Button>
                              </div>
                        </div>
                     </div>
                     
                     <LeaderBoard  currentBid={placedBit} />
               </div>
                  
            </div>
         
      </div>
   </>
   
}

function LeaderBoard({currentBid}) {

   const [userBid , setUserBid] = useState([]);

   // getting the userName from localstorage
   const fullName = useMemo(() => localStorage.getItem("UserName"), []);
  

   useEffect(() => {

      const interval = setInterval(() => {
         setUserBid((prevBid) => {
            if(!prevBid.includes(currentBid) && currentBid > Math.max(...prevBid , 0)){
               return [...prevBid , currentBid].sort((a,b) => b-a)
            }

            return prevBid
         })
         
      } , 1000)
      return () => clearInterval(interval)
   }, [currentBid])

    return  <div className="shadow-sm mx1 border d-flex flex-column" style={{width : "500px" , height : "400px" , marginLeft : "30px" , borderRadius : "15px"}}>
            <h4 className="mx-auto mt-2">Top Leaders</h4> 
           {userBid.map((bid, index) => (
              <div className="d-flex flex-row justify-content-center">
                 <div className="d-flex justify-content-between w-75 text-black h-75 mb-2 border rounded px-2 py-1 bg-secondary-subtle"  style={{
                     backgroundColor: index === 0 ? "#FFD700" : "white", 
                     color: index === 0 ? "black" : "gray",
                     fontWeight: index === 0 ? "bold" : "normal",
                     boxShadow: index === 0 ? "0px 0px 10px 3px rgba(255, 215, 0, 0.8)" : "none", 
                     borderRadius: "10px",
                     margin: "5px 0"}}
                  >
                     <span>#{index + 1}</span>
                     <h6>{fullName}</h6>
                     <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                              <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                        </svg>{bid}
                     </span>
                 </div>
                 
              </div>
           ))}
           
    </div>

}