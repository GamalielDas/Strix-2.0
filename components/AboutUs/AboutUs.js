const AboutUs = () => {
    return ( 
        <div className="grid grid-cols-1 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] bg-[url('/about-us/About-Bgsm.jpg')] md:bg-[url('/about-us/About-Bgmd.jpg')]  lg:bg-[url('/about-us/About-Bg.jpg')] bg-no-repeat bg-cover font-['Roboto_Condensed']  md:grid-cols-2 pt-16 pb-16 ">
            <div className="justify-self-center self-center text-2xl font-black mt-9 mb-9 md:text-4xl">MORE <span className="text-[#00ADB5]">ABOUT US?</span></div>
                    <div className="row-span-3 justify-self-center self-center mb-10 ">
                        <video className=" w-full md:w-[500px] lg:w-[600px] lg:pt-10  self-center" controls autoPlay loop> <source src="/about-us/video.mp4" type="video/mp4"/>
                        </video>
                    <h1 className="   bg-[#00ADB5]  px-4 py-2 lg:px-10 font-semibold text-cyan-50 text-center">VIDEO SHOWCASE</h1>
                    </div>
                    <div className="justify-self-center self-center font-semibold w-2/3 text-xl italic mb-10 text-center">A Team of Highly Trained Professionals, dedicated in Smart Planning, Design Thinking, and Advanced Tech Combining professionalism and innovation </div>
                    <div className="grid grid-cols-6 mt-10 mb-10 box-border ">
                        <div></div>
                        <div className="justify-self-center"> <img alt="text" className="h-[2rem] md:h-[3rem]" src="/about-us/WebDev-Icon.svg"/></div>
                        <div className="justify-self-center "><img alt="text" className="h-[2rem] md:h-[3rem]" src="/about-us/MobDev-Icon.svg"/></div>
                        <div className="justify-self-center"><img alt="text" className="h-[2rem] md:h-[3rem]" src="/about-us/Digital-Icon.svg"/></div>
                        <div className="justify-self-center"><img alt="text" className="h-[2rem] md:h-[3rem]" src="/about-us/SD-Icon.svg"/></div>
                        <div></div>
                    </div>
        </div>
     );
}
 
export default AboutUs;