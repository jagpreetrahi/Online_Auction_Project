
import { NavBar } from "../component/NavBar"
import { Card } from "../component/Card"
import { Footer } from "../component/Footer"


export const Favourites = () => {

    

    return <>
      <NavBar/>
      <h3 className="mx-auto mt-4 fw-medium text-2xl  d-flex justify-content-center" style={{letterSpacing : '2px' , fontFamily : 'Roboto'}}>Your Favourites Bid Here!!</h3>
      <favouriteBid/>
      
    </>
}

function favouriteBid(){

   return <>
     <div className="d-flex flex-row justify-content-between">
     
     </div>
   </>

}