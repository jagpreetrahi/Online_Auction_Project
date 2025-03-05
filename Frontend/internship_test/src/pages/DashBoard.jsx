import { useEffect, useState , useRef, useMemo} from "react"
import { NavBar } from "../component/NavBar"
import { Card } from "../component/Card"
import { Footer } from "../component/Footer"
import axios from 'axios'

export const DashBoard = () => {
    
    return <>
        <DashBoardRender/>
    </>
}


function DashBoardRender(){

    const phrases  = [
        "Race Against the Clock – Place Your Bids Now",
        "Exclusive Items, Elite Bidders",
        "Your Next Great Deal is Just a Bid Away",
        "Bid Like a Pro, Win Like a Legend",
        "Auction Frenzy – Get in the Game",
        "Rare Finds, Unbeatable Prices",
        "Live Auctions, Limitless Possibilities"

    ]

    const [items , setItemsDetail] = useState([]);


    useEffect(() => {
        const handleDetails = async () => {

           try {
                const response = await axios.get("http://localhost:3001/api/v1/auctionItem/auctions");
                console.log(response.data)
                setItemsDetail(response.data)
           } catch (error) {
              console.log("Erro is " , error)
           }
            
            
            
        }
        handleDetails()
    }, [])

    // dynamically add the category for live and demand items
    const newItems = useMemo(() => items.map((item , index) => ({
        ...item,
        category: index % 2 === 0 ? "Live" : "Demand"
    })),
       [items]
    )

    const liveItems = useMemo(() => newItems.filter((item => item.category == "Live")));
    const demandItems = useMemo(() => newItems.filter((item => item.category == "Demand")));

    

    
 
    // track the index of message
    const [currentIndex , SetIndex] = useState(0)
    const intervalRef = useRef(null);

    useEffect(() => {
          intervalRef.currentIndex = setInterval(() => {
             SetIndex((prevIndex) => (prevIndex + 1)% phrases.length)
         }, 1.5 * 1000)

         return () => clearInterval(intervalRef.currentIndex)
    } , [])

    return <>
        <NavBar/>
       <div  className="container  d-flex justify-content-center align-items-center">
          <h3  className="fs-2 mt-5 text-center " style={{fontFamily : "Roboto", color : "#8E4585"}}>Your personalized auction hub—track live bids, place strategic offers, and win exclusive deals effortlessly </h3>
       </div>

     
       <div className="container w-75 h-25  text-center p-3">
                <span className="dynamic-text fs-4">{phrases[currentIndex]} !!</span>
        </div>

        <div className="d-flex justify-content-md-center justify-content-center">
             <button className="lg-color rounded-pill px-3 py-1"> 
                 Favourites
             </button>
             <button className="lg-color rounded-pill mx-4 px-3 py-1">
                My Bid
             </button>
             <button className="lg-color rounded-pill  me-2 px-3 py-1" >
                Demand Auction
             </button>
        </div>

        {/* Live Auction Auction */}
        <div className="container d-flex justify-content-center  mt-4 mb-4">
             <h3 style={{letterSpacing : "2px", fontSize : "35px"}}>Live Auction</h3>
        </div>

       {/* Card  container */}
        <div className="container">
            <div className="row g-3 d-flex justify-content-center ">
                {liveItems.length > 0 ? (
                    liveItems.map((item, index) => (
                      <div className="col-md-4" key={index}>
                        <Card items={[item]} />
                      </div>
                    ))
                  ) : (
                  <p>Loading...</p>
                )}

            </div>
        </div>

         {/* Demand Auction Auction */}
         <div className="container d-flex justify-content-center fs-3 mt-5 mb-5">
             <h1 style={{letterSpacing : "2px", fontSize : "35px"}}>Demand Auction</h1>
        </div>

       {/* Card  container */}
        <div className="container mb-4">
            <div className="row g-3 d-flex justify-content-center ">
               {demandItems.length > 0 ? (
                    demandItems.map((item, index) => (
                      <div className="col-md-4" key={index}>
                        <Card items={[item]} /> 
                      </div>
                    ))
                  ) : (
                  <p>Loading...</p>
                )}

            </div>
        </div>

         {/* footer page */}
        <Footer/>
    </>
   
}