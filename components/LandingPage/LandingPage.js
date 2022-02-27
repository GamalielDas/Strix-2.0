import SideIcons from '../SideIcons';
const LandingPage = () => {
    return ( 
       <div className="grid grid-cols-1 lg:grid-cols-5 bg-[url('/Landing-Page/Land-Bg1.jpg')] lg:bg-[url('/Landing-Page/Land-Bglag1.jpg')]  font-['Roboto_Condensed'] bg-no-repeat bg-cover pt-[76px] lg:min-h-screen"> 
             <SideIcons/>
                <div className="justify-self-center lg:justify-self-start self-center lg:col-span-2 lg:ml-[-50px] ">                   
                        <div className=" text-xs md:text-lg font-semibold p-10 md:mt-8 lg:mt-24 lg:p-7 justify-self-center text-center text-slate-600">|| TOP NOTCH EXPERTISE SERVICES</div>
                        <div className="text-center font-extrabold text-xl  text-[#00ADB5] md:text-4xl lg:mt-4"> ACQUIRE TECHNOLOGY </div>
                        <div className="text-center font-black text-xl text-[#222831] md:text-3xl lg:text-4xl  md:pt-3">  AT YOUR OWN WILL </div>
                            <div className="justify-self-center pb-10 pt-5 md:pt-8 self-center lg:mt-4  ">  
                                <button className="bg-[#00ADB5] text-[13px] md:text-xl rounded-full  px-7  py-2 md:py-4 lg:px-12 lg:py-4 mt-3 md:px-10 font-semibold text-white mr-2 border-2 border-[#00ADB5] hover:bg-[#35858B] hover:drop-shadow-xl hover:white duration-300">GET STARTED</button>
                                <button className=" text-[#00ADB5] text-[13px] md:text-xl rounded-full   px-7 py-2 md:py-4 lg:px-12 lg:py-4 mt-3 md:px-10 font-semibold bg-white  border-2 border-[#00ADB5] hover:bg-[#ffffff] hover:drop-shadow-xl hover:text-[#35858B] duration-300 ">CONTACT US</button>  
                            </div> 
                </div>
                 <img alt="text" src="/Landing-page/Home-Art1.png" className="justify-self-center self-center lg:mt-10 w-3/4 lg:w-auto lg:col-span-2 " />           
                   <div className='lg:w-screen lg:items-center '>
                        <div className="grid grid-cols-1 lg:w-4/5 lg:m-auto  lg:self-center lg:justify-self-center lg:justify-items-center lg:grid-cols-3 lg:col-span-4 justify-self-center pb-16 pt-10  w-full   ">
                            
                            <div className=" w-3/4  py-5 justify-self-center mt-5 bg-gradient-to-r rounded-l-full rounded-t-full from-[#222831] to-[#35858B] text-white hover:shadow-xl text-center  font-bold box-content  shadow-lg md:text-2xl lg:text-xl md:font-semibold md:p-7 md:mt-9">WEB DEVELOPMENT</div>
                            <div className=" w-3/4 py-5 justify-self-center mt-5 bg-gradient-to-r   rounded-t-3xl   from-[#35858B] to-[#35858B] text-white hover:shadow-xl text-center   box-content font-bold shadow-lg md:text-2xl lg:text-xl md:font-semibold md:p-7 md:mt-9 ">GRAPHICAL DESIGN</div>
                            <div className=" w-3/4 py-5 justify-self-center mt-5 bg-gradient-to-r rounded-r-full rounded-t-full from-[#35858B] to-[#222831] text-white hover:shadow-xl text-center   box-content font-bold  shadow-lg md:text-2xl lg:text-xl md:font-semibold md:p-7 md:mt-9 ">CUSTOM SOFTWARE</div>
                        </div>
                    </div>
     </div>
);
}
 
export default LandingPage;