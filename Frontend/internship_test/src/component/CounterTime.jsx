import { useEffect, useState } from "react"

export  const CounterTimer = ({auctionTimer}) => {

    const [timeLeft , setTime] = useState("")

    useEffect(() => {
        const countDown = () => {
           
            const now = new Date();
            const endTime = new Date(auctionTimer);
            const diff =  endTime - now; // millisecond

            if(diff <= 0){
                setTime("00 : 00 : 00");
                return 
            }

            setTime(new Date(diff).toISOString().substr(11, 8)); // "hh:mm:ss"


        }

        countDown();
        const interval = setInterval(countDown , 1000) // update every second
        return () => clearInterval(interval);
    } , [auctionTimer])

    return <p className="py-1 mx-3 mt-2  text-white" style={{letterSpacing : '2px' , fontSize : "20px"}}>Time Left  {timeLeft}</p>
}