import Particls from "../Particles";
import ParticleBackground from "../Particles/particle-background";

const OurServices = () => {
    return ( 
       
        <div className="  bg-[url('/Services/service.png')] bg-[#222831]   font-['Roboto_Condensed']  bg-cover bg-no-repeat  ">
        {/* <ParticleBackground /> */}
        <div className="grid grid-cols-1   lg:grid-cols-3 ">
                <div className="text-xl md:text-2xl justify-self-center bg-gradient-to-r w-4/5 lg:w-3/5 rounded-b-[50px] md:rounded-b-full   from-[#ffffff] to-[#ffffff]  hover:bg-gradient-to-l  text-center drop-shadow-2xl  pt-5 pb-5  md:pt-7 md:pb-7 lg:col-span-3 font-extrabold lg:text-4xl  text-[#1f8085]"> OUR<span className="text-black"> SERVICES</span></div>
                {/* <img alt="text" className=" justify-self-center lg:justify-self-end mt-5 lg:p-4 lg:self-center" src="/Services/service-logo.svg"/> */}
                <div className="justify-self-center text-white p-1 mt-10 self-center  lg:justify-self-center  lg:mt-10 lg:mb-5 italic  lg:col-span-3 lg:w-1/2  font-semibold text-gray-00 w-2/3 lg:text-xl  text-center">A Team of Highly Trained Professionals, dedicated in Smart Planning, Design Thinking, and Advanced </div>
        </div>
        

          <div className="p-10 lg:p-1  mx-automb-10   ">
          <div className="md:grid grid-cols-2 lg:grid lg:grid-cols-3  col-gap-10 lg:w-4/5 lg:m-auto ">  
                  <div className="max-w-sm w-11/12  mx-auto my-10 drop-shadow-sm hover:drop-shadow-2xl " >
                          <div className="h-48  bg-[url('/Services/titlebg.svg')]  flex-none bg-cover  rounded-t lg:rounded-t-none  border-gray-400 lg:rounded-l text-center overflow-hidden bg-[#00ADB5]"/>
                                <div className="   border-[#9ffaff]     bg-white rounded-b  p-4">
                                        <div className=" text-center ">
                                                <div className="text-[#00ADB5] font-bold text-md lg:text-lg mt-4 "> WEB DEVELOPMENT</div>
                                                
                                                <div className=" text-[10px] md:text-[12px] lg:text-[14px] font-extrabold text-gray-400 text-center p-3 justify-self-center lg:p-4">Our team ensures the designs of high effectiveness  provide our own touch in the most efficient and awesome way</div>
                                        </div>
                                        <div className="my-4 flex h-7  justify-center">
                                        <button className="float-center w-6/12 bg-[#00ADB5] text-[9px] md:text-[11px] lg:w-7/12 lg:px-8 font-semibold text-cyan-50 rounded-lg">Read More</button>
                                        </div>
                                </div>
                </div>
                  
                  <div className="max-w-sm w-11/12  mx-auto my-10 drop-shadow-xl hover:drop-shadow-2xl ">
                          <div className="h-48  bg-[url('/Services/titlebg.svg')]  flex-none bg-cover  rounded-t lg:rounded-t-none  border-gray-400 lg:rounded-l text-center overflow-hidden bg-[#00ADB5]"/>
                          <div className="   border-[#9ffaff]    bg-white rounded-b  p-4">
                                  <div className=" text-center ">
                                          <div className="text-[#00ADB5] font-bold text-md lg:text-lg mt-4 "> APP DEVELOPMENT</div>
                                          
                                          <div className=" text-[10px] md:text-[12px] lg:text-[14px] font-extrabold text-gray-400 text-center p-3 justify-self-center lg:p-4">Our team ensures the applications of high effectiveness  provide our own touch in the most efficient and awesome way</div>
                                  </div>
                                  <div className="my-4 flex h-7  justify-center">
                                  <button className="float-center w-6/12 bg-[#00ADB5] text-[9px] md:text-[11px] lg:w-7/12 lg:px-8 font-semibold text-cyan-50 rounded-lg">Read More</button>
                                  </div>
                          </div>
                  </div>

                  <div className="max-w-sm w-11/12  mx-auto my-10 drop-shadow-xl hover:drop-shadow-2xl ">
                          <div className="h-48  bg-[url('/Services/titlebg.svg')]  flex-none bg-cover  rounded-t lg:rounded-t-none  border-gray-400 lg:rounded-l text-center overflow-hidden bg-[#00ADB5]"/>
                          <div className="   border-[#9ffaff]    bg-white rounded-b  p-4">
                                  <div className=" text-center ">
                                          <div className="text-[#00ADB5] font-bold text-md lg:text-lg mt-4 ">CUSTOM SOFTWARE</div>
                                          
                                          <div className=" text-[10px] md:text-[12px] lg:text-[14px] font-extrabold text-gray-400 text-center p-3 justify-self-center lg:p-4">Our team ensures the softwares of high effectiveness  provide our own touch in the most efficient and awesome way</div>
                                  </div>
                                  <div className="my-4 flex h-7  justify-center">
                                  <button className="float-center w-6/12 bg-[#00ADB5] text-[9px] md:text-[11px] lg:w-7/12 lg:px-8 font-semibold text-cyan-50 rounded-lg">Read More</button>
                                  </div>
                          </div>
                  </div>
                  
                  <div className="max-w-sm w-11/12  mx-auto my-10 drop-shadow-xl hover:drop-shadow-2xl ">
                          <div className="h-48  bg-[url('/Services/titlebg.svg')]  flex-none bg-cover  rounded-t lg:rounded-t-none  border-gray-400 lg:rounded-l text-center overflow-hidden bg-[#00ADB5]"/>
                          <div className="   border-[#9ffaff]    bg-white rounded-b  p-4">
                                  <div className=" text-center ">
                                          <div className="text-[#00ADB5] font-bold text-md lg:text-lg mt-4 ">DIGITAL MARKETING</div>
                                          
                                          <div className=" text-[10px] md:text-[12px] lg:text-[14px] font-extrabold text-gray-400 text-center p-3 justify-self-center lg:p-4">Our team ensures the marketing of high effectiveness  provide our own touch in the most efficient and awesome way</div>
                                  </div>
                                  <div className="my-4 flex h-7  justify-center">
                                  <button className="float-center w-6/12 bg-[#00ADB5] text-[9px] md:text-[11px] lg:w-7/12 lg:px-8 font-semibold text-cyan-50 rounded-lg">Read More</button>
                                  </div>
                          </div>
                  </div>
                  <div className="max-w-sm w-11/12  mx-auto my-10 drop-shadow-xl hover:drop-shadow-2xl ">
                          <div className="h-48  bg-[url('/Services/titlebg.svg')]  flex-none bg-cover  rounded-t lg:rounded-t-none  border-gray-400 lg:rounded-l text-center overflow-hidden bg-[#00ADB5]"/>
                          <div className="   border-[#9ffaff]    bg-white rounded-b  p-4">
                                  <div className=" text-center ">
                                          <div className="text-[#00ADB5] font-bold text-md lg:text-lg mt-4 ">GRAPHIC DESIGN</div>
                                          
                                          <div className=" text-[10px] md:text-[12px] lg:text-[14px] font-extrabold text-gray-400 text-center p-3 justify-self-center lg:p-4">Our team ensures the designs of high effectiveness  provide our own touch in the most efficient and awesome way</div>
                                  </div>
                                  <div className="my-4 flex h-7  justify-center">
                                  <button className="float-center w-6/12 bg-[#00ADB5] text-[9px] md:text-[11px] lg:w-7/12 lg:px-8 font-semibold text-cyan-50 rounded-lg">Read More</button>
                                  </div>
                          </div>
                  </div>
                  <div className="max-w-sm w-11/12  mx-auto my-10 drop-shadow-xl hover:drop-shadow-2xl ">
                          <div className="h-48  bg-[url('/Services/titlebg.svg')]  flex-none bg-cover  rounded-t lg:rounded-t-none  border-gray-400 lg:rounded-l text-center overflow-hidden bg-[#00ADB5]"/>
                          <div className="   border-[#9ffaff]    bg-white rounded-b  p-4">
                                  <div className=" text-center ">
                                          <div className="text-[#00ADB5] font-bold text-md lg:text-lg mt-4 "> SEO / MONETIZATION</div>                            
                                          <div className=" text-[10px] md:text-[12px] lg:text-[14px] font-extrabold text-gray-400 text-center p-3 justify-self-center lg:p-4">Our team ensures the SEO of high effectiveness provide our own touch in the most efficient and awesome way</div>
                                  </div>
                                  <div className="my-4 flex h-7  justify-center">
                                  <button className="float-center w-6/12 bg-[#00ADB5] text-[9px] md:text-[11px] lg:w-7/12 lg:px-8 font-semibold text-cyan-50 rounded-lg">Read More</button>
                                  </div>
                          </div>
                  </div>
             

               
          </div>
          



          </div>
          <img src="/Services/6.png" className=" h-28 w-full"></img>

</div> 

     );
}
 
export default OurServices;