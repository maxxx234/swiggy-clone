import Card from './card'
import {useEffect,useState} from 'react'
const OnlineDelivery = () => {
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
 <>
    <div className="max-w-[1200px]  mx-auto">
    <div className="flex my-3 items-center justify-between">
      <div className="text-[25px] font-bold"> Restaurents  with online food delivery in jodhpur  </div>

      </div>
     



  
      <div className="grid grid-cols-4 gap-3">
        {
          data.map(
            (d,i) => {
             return <Card{...d} key  = {i} />
            }
          )
        }
      </div>

</div>
    
</>
  )

}
export default OnlineDelivery