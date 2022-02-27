const Footer = () => {
    return ( 

        <div className="grid grid-cols-1 bg-[url('/Footer/Footer-Bg1.png')]  bg-[#222831] font-['Roboto_Condensed']  bg-cover bg-no-repeat lg:grid-cols-2">
   
            <div className="grid grid-cols-5 box-content  md:grid-cols-4 lg:col-span-2  ">
                 <img alt="text" className=" justify-self-center  self-end col-span-5  h-3 w-4/5" src="/Footer/bar.jpg"/>
                 <img alt="text" src="/Footer/Logo.png" className="col-span-2 pt-5 pb-5 justify-self-end self-center w-[75px] md:col-span-2"></img>
                 <div className=" col-span-3 justify-self-start  self-center md:col-span-2 pt-5 pb-5 ">
                     <h1 className=" text-2xl md:text-3xl font-bold  text-cyan-50 italic ">CODESTRIX</h1>
                     <h1 className=" text-sm md:text-lg text-white">Software Company</h1>
                </div>
                <img alt="text" className=" justify-self-center col-span-5 h-1 w-3/5" src="/Footer/bar.jpg"/>
            </div>
            <div className="flex flex-row justify-evenly lg:justify-center mb-5 lg:col-span-2 pt-5 ">
            
                <a className="text-[10px] md:text-base lg:mr-12  text-white justify-self-center">ABOUT US</a>
                <a className="text-[10px] md:text-base lg:mr-12  text-white justify-self-center">SERVICES</a>
                <a className="text-[10px] md:text-base lg:mr-12  text-white justify-self-center">PORTFOLIO</a>
                <a className="text-[10px] md:text-base lg:mr-12  text-white justify-self-center">SERVICES</a>
                <a className="text-[10px] md:text-base lg:mr-12  text-white justify-self-start">PORTFOLIO</a>
                
            </div>
            <div className="grid grid-cols-2  w-4/5 mt-10 mb-5 md:grid-cols-2 ">
                  <img alt="text" className="justify-self-center w-[20px] mb-3 h-[20px] md:w-[30px] md:h-[30px]lg:justify-self-center  " src="/Footer/mail.png"/>
                  <h1 className=" col-span-1  text-white font-bold text-sm md:text-lg   lg:justify-self-start">Codestrix.offcl@gmail.com</h1>
               
                  <img alt="text" className="justify-self-center w-[20px] mb-3 h-[20px] md:w-[30px] md:h-[30px]  lg:justify-self-center" src="/Footer/location.png"/>
                  <h1 className="  text-white   text-sm col-span-1 font-bold md:text-lg   lg:justify-self-start"> Fully Virtual</h1>
               
                 <img alt="text" className="justify-self-center w-[20px] mb-3 h-[20px] md:w-[30px] md:h-[30px] lg:justify-self-center" src="/Footer/phone.png"/>
                 <h1 className="  text-white text-sm col-span-1  font-bold md:text-lg  lg:justify-self-start" > +91 XXXXXXXXXX</h1>
            </div>
            <div className=" w-full mt-10 mb-10 ">
                <h1 className=" text-center text-gray-400 font-extrabold text-sm md:text-lg">DIGITAL PROFILES:</h1>
                <div className=" grid grid-cols-7  p-5 h-1/2 justify-items-center   ">
                        <div></div>
                        <img alt="text" src="/Footer/Facebook.svg" className="h-[30px] md:h-[50px]" />
                        <img alt="text" src="/Footer/linkedin.svg" className=" h-[34px] md:h-[54px]" />
                        <img alt="text" src="/Footer/instagram.svg" className=" h-[34px] md:h-[54px] " />
                        <img alt="text" src="/Footer/twitter.svg" className="md:h-[54px] " />
                        <img alt="text" src="/Footer/youtube.svg" className=" md:h-[54px]" />
                        <div></div>
                </div>
           
            </div>
            <div className=" text-center p-7 lg:col-span-2 text-md md:text-lg border-4 box-content font-bold text-gray-600 bg-white">
                        Copyright © 2022 • CODESTRIX Inc.
            </div>
           
        </div>

     );
}
 
export default Footer;