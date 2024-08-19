
import { useEffect, useState } from "react";
import { FaArrowRight,FaArrowLeft } from "react-icons/fa";

const Category = () => {
const [slide, setSlide] = useState(0)
  const [categories,setCategory] = useState([]);
  const fetchCategory = async() =>{
    const response =  await fetch("http://127.0.0.1:5500/category.json")
    const data = await response.json();
    setCategory(data)
    }


    useEffect(
    ()=> {
      fetchCategory();
    },[]
    
     ) 
     const nextSlide = ()=>{
      console.log(categories.length)
      if (categories.length - 11 == slide) return false;
      setSlide(slide + 3)
     }  
    
     const prevSlide = ()=>{
      if (slide == 0) return false;
      setSlide(slide - 3)
     }
    
  return (
    <div className="max-w-[1200px]  mx-auto">
  <div className="flex my-3 items-center justify-between">
    <div className="text-[25px] font-bold"> what is in your mind </div>

   
    <div className='flex'>
    <div className = ' flex w-[30px]  h-[30px] justify-center items-center      cursor-pointer bg-[#e2e2e7] rounded-full mx-2 'onClick={prevSlide}><FaArrowLeft /></div>
    <div className = '  flex w-[30px] h-[30px] justify-center items-center    cursor-pointer  bg-[#e2e2e7]  rounded-full mx-2 ' onClick={nextSlide}> <FaArrowRight /></div>
    </div>
    </div>

    
    <div className="flex border border-red-600 overflow-hidden">
      {/* overflow hidden is used to hide the extra item showed */}
     {
       categories.map(
        // now to show remaining items we must use css prop trasform translate
         (cat,index)=>{
          
           return (
            <div style={{
transform: `translateX(-${slide * 100}%)`
            }}
              key={index} className=" w-[100px] shrink-0" >
            <img src={"http://127.0.0.1:5500/images/"+ cat.image  } key={index}  />
               </div>
           )
         }
       )
     }
   </div>
   <hr className="my-6 border-[1px]" />
 </div>
  
  )
}

export default Category
