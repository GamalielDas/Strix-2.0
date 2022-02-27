const Newsletter = () => {
    return ( 
        <div className="grid grid-rows-2 font-['Roboto_Condensed'] bg-[#222831]  bg-cover lg:grid-cols-2 lg:grid-rows-1 lg:h-[120px] ">
            
           <h1 className=" justify-self-center self-center w-2/3 mb-5 mt-5 text-center text-white lg:text-xl italic">JOIN OUR NEWSLETTERFOR DAILY UPDATES</h1>
           <div className="justify-self-center self-start lg:self-center ">
               <input type="email" name="email" className=" h-[40px] bg-white border shadow-sm border-slate-300 placeholder-slate-400  sm:text-sm float-left" placeholder="  &nbsp;&nbsp;you@example.com"  />
               <button className="float-left  bg-[#00ADB5]  px-4 py-2 lg:px-10 font-semibold text-cyan-50">SUBSCRIBE</button></div> 
          </div>
     );
}
 
export default Newsletter;