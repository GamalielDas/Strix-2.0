import React  from "react";
function Popup (props) {
    return ( props.trigger)?(
        <div className="flex justify-center items-center align-it fixed top-0 left-0 w-full h-full bg-black/[0.8] z-50 ">
                <div className=" grid grid-cols-1 w-md md:w-4/6 lg:w-2/5 justify-items-center p-8 w-full h-full  justify-self-center  ">
                    {props.children}
                    <button className=" justify-end mt-2 px-5" onClick={()=>props.setTrigger(false)}> <img alt="text" className=" w-16" src="/popup/close.png"/></button>
                </div>
        </div>
     ):"";
}
 
export default Popup;