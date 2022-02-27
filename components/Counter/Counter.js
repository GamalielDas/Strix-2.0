const Counter = () => {
    return ( 
        
         <div className="grid grid-rows-4 bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] font-['Roboto_Condensed'] md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 lg:h-52  ">
                
                
                <div className="grid grid-cols-3 justify-items-center h-24 lg:self-center">
                    <h1 className=" font-bold text-4xl text-[#00ADB5] m-7 justify-self-end"> 02 </h1>
                    <h1 className="align-middle font-bold text-base text-left leading-5 m-auto "> YEARS OF EXPERIENCE </h1>
                    <img alt="text" className=" h-10 m-6 justify-self-start" src="/Counter/ED.svg"/>
                </div>
                <div className="grid grid-cols-3 justify-items-center h-24 lg:self-center">
                    <h1 className=" font-bold text-4xl text-[#00ADB5] m-7 justify-self-end "> 05 </h1>
                    <h1 className=" font-bold text-base text-left leading-5 m-auto  "> EXPERT DEVELOPERS</h1>
                    <img alt="text" className=" h-10 m-6 justify-self-start" src="/Counter/Mobile.svg"/>
                </div>
                <div className="grid grid-cols-3 justify-items-center h-24 lg:self-center">
                    <h1 className=" font-bold text-4xl text-[#00ADB5] m-7 justify-self-end"> 5+ </h1>
                    <h1 className=" font-bold text-base text-left leading-5  m-auto "> MAJOR PROJECTS </h1>
                    <img alt="text" className=" h-10 m-6 justify-self-start" src="/Counter/Projects.svg"/>
                </div>
                <div className="grid grid-cols-3 justify-items-center h-24 lg:self-center">
                    <h1 className=" font-bold text-4xl text-[#00ADB5] m-7 justify-self-end"> 9+ </h1>
                    <h1 className=" font-bold text-base text-left leading-5  m-auto "> NO OF CLIENTS </h1>
                    <img alt="text" className=" h-10 m-6 justify-self-start" src="/Counter/Clients.svg"/>
                </div>
                

         </div>
       

     );
}
 
export default Counter;