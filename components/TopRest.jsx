
import { useEffect, useState } from "react";
import Card from "./card";
import { FaArrowRight,FaArrowLeft } from "react-icons/fa";
const TopRest = () => {
    const [data, setData] = useState([])

    const fetchTopRestaurent = async () =>{
const response = await fetch ("http://127.0.0.1:5500/restaurantChains.json");
const apiData = await response.json();
setData(apiData);
    }
useEffect(
()=>{
    fetchTopRestaurent();

},[]
)
  return (
<div className="max-w-[1200px]  mx-auto ">
  <div className="flex my-3 items-center justify-between">
    <div className="text-[25px] font-bold"> top Restaurants in jaipur  </div>

   
    <div className='flex'>
    <div className = ' flex w-[30px]  h-[30px] justify-center items-center      cursor-pointer bg-[#e2e2e7] rounded-full mx-2 '><FaArrowLeft/> </div>
    <div className = '  flex w-[30px] h-[30px] justify-center items-center    cursor-pointer  bg-[#e2e2e7]  rounded-full mx-2 '> <FaArrowRight/></div>
    </div>
    </div>
    <div className="flex overflow-hidden gap-3">
{
  data.map(
    (d,i)=>{
      return <Card {...d} key= {i}/>
    }
  )
}




</div>
<hr className="my-3 border-[1px]"/>
    </div>
   

  )
}

export default TopRest
