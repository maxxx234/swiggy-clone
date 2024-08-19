import Start from "./Start"
const card = (props) => {
  return (
<div className="w-[273px] shrink-0 grow mb-3">
<div className=" group h-[182px] rounded-[15px] overflow-hidden relative">
<img className=" group-hover:scale-110 duration-150 object-cover  w-full h-full " src={"http://127.0.0.1:5500/images/" + props.image} alt="" />
<div className="image-overlay  w-full h-full absolute top-0  items-end flex p-2 font-bold text-white text-[25px] tracking-tighter">
  {/* tracking tighter is used to shrink the available distance present in between */}
{props.offer}
</div>
</div>
<div className="m-3 text-xl font-bold ">
 {props.title}
</div>
<div className="flex font-bold">
<Start className="inline m-0.5 text-bold" />  {props.rating}
  <span className="ml-3  ">{props.minTime} - {props.maxTime} mins </span>
</div>
<div className="flex">
  {props.name}
  <br/>
  {props.place}
</div>
</div>
)
}
export default card



