import { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";
import { RiDiscountPercentLine } from "react-icons/ri";
import { IoIosHelpCircle } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
const Header = () => {
   const [toggle, setToggle] = useState(false)
    const showSideMenu = () =>{
        setToggle(true)
    }
    const hideSideMenu = ()=>{
setToggle(false)
    }
    const links = [
{
    icon: <FaSearch/>,
    name: "Search"
},
{
    icon: <RiDiscountPercentLine/>,
    name: "Offers",
    sup: "new"
},
{
    icon: <FaCartShopping />,
    name: "Cart"
},

{
    icon: < FaRegUser/>,
   name: "Sign-in"
},

{
    icon:  <IoIosHelpCircle/>,
   name: "Help"
}

    ]
  return (
  <>

<div className = "black-overlay w-full h-full fixed duration-500 " onClick={hideSideMenu} style={{
        opacity: toggle ? 1 : 0,
        visibility: toggle ? "visible" : "hidden"
    }}>
<div onClick={(e)=>{
    e.stopPropagation();
}}   className="w-[500px] bg-white h-full absolute duration-[400ms]" style={{
    left: toggle ? '0%':'-100'
}}>

</div>

    </div>
  <header className="p-0 shadow-xl ">
<div className="max-w-[1200px]  mx-auto border border-red-500 flex items-center">
 <div className="w-[100px] " >

    <img src = "images/logo.png" className="w-full"/>
    </div>
<div className=''>
  <span className="font-bold border-b-[2px] border-[black]">Mansarover</span> jodhpur,Rajasthan,india <RxCaretDown fontSize={25}  onClick={showSideMenu}  className="  font-bold  inline text-[#fc8019]"/>


 </div>
 <nav className="flex list-none gap-5 ml-auto font-semibold  text-[18px]">
   
{
    links.map (
        (link,index) => { 
           
           
            return <li key ={index} className = "flex items-center gap-2">
            {link.icon}
                {link.name}
              <sup> { link.sup}</sup>
               
    </li> 
        }
    )
}
 </nav>
</div>
  </header>
  </>
  )
}

export default Header
// we have to make such a variable when its vales changes the component will react
