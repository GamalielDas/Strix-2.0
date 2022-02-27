const ContactUs = () => {
    return ( 

        <div className="flex flex-col bg-[url('/contact-us/contactus-bgmb.jpg')] md:bg-[url('/contact-us/contactus-bg.jpg')] lg:mb-20  bg-no-repeat bg-cover font-['Roboto_Condensed']  md:grid-cols-2 pt-16 pb-16 lg:h-screen ">
            <div className="justify-self-center self-center text-2xl font-black mt-9 mb-9 md:text-4xl">GET <span className="text-[#00ADB5]">IN TOUCH</span></div>
            <div className=" justify-self-center self-center font-semibold w-4/5 lg:w-2/5 text-sm italic mb-10 text-center lg:mb-20 text-gray-600">A Team of Highly Trained Professionals, dedicated in Smart Planning, Design Thinking, and Advanced Tech Combining professionalism and innovation </div>
                    <div className="grid grid-cols-1 justify-self-center self-center w-3/5 lg:grid-cols-2 lg:w-4/5 mb-10">
                            <div className="grid grid-cols-1 rounded-b-[50px] rounded-l-[50px] p-10 justify-self-center self-center w-full box-content border-2 shadow-lg bg-[#222831] lg:row-span-3 lg:w-4/5 ">
                                    <input type="text" className="w-full rounded-3xl rounded-b-none mb-3 h-[40px] bg-white border shadow-sm border-slate-300 placeholder-slate-400  text-sm " placeholder="  &nbsp;&nbsp;you@example.com"  />
                                    <input type="email" className="w-full  mb-3 h-[40px] bg-white border shadow-sm border-slate-300 placeholder-slate-400  text-sm " placeholder="  &nbsp;&nbsp;you@example.com"  />
                                    <input type=" text" className="w-full  h-[100px]  bg-white border shadow-sm border-slate-300 placeholder-slate-400  text-sm " placeholder="  &nbsp;&nbsp;you@example.com"  />
                                    <button className="bg-[#00ADB5] rounded-3xl rounded-t-none px-10 py-2 mt-3 lg:px-10 font-semibold text-cyan-50">SEND</button>
                            </div>
                            <div className="grid grid-cols-5 p-10 mt-5  rounded-r-[50px] justify-self-center self-center hover:bg-white hover:shadow-xl  w-full box-content border-2 shadow-lg lg:w-4/5 lg:p-8 lg:mt-0 ">
                                <img className="w-6 justify-self-left" src="/contact-us/MailBox.png"></img> 
                                <h1 className="text-sm lg:text-lg col-span-4 justify-self-center">codestrix.offcl@gmail.com</h1>
                            </div>
                            <div className="grid grid-cols-5 p-10 mt-5 rounded-r-[50px] justify-self-center self-center hover:bg-white hover:shadow-xl  w-full box-content border-2 shadow-lg lg:w-4/5 lg:p-8 ">
                                <img className="w-6 justify-self-left" src="/contact-us/MailBox.png"></img> 
                                <h1 className="text-sm lg:text-lg col-span-4 justify-self-center">codestrix.offcl@gmail.com</h1>
                            </div>
                            <div className=" grid grid-cols-5 p-10 mt-5 rounded-b-[50px] rounded-r-[50px] justify-self-center self-center hover:bg-white hover:shadow-xl  w-full box-content border-2 shadow-lg lg:w-4/5 lg:p-8 ">
                                <img className="w-6 justify-self-left" src="/contact-us/MailBox.png"></img> 
                                <h1 className="text-sm lg:text-lg col-span-4 justify-self-center">codestrix.offcl@gmail.com</h1>
                            </div>
                    </div>
        </div>

     );
}
 
export default ContactUs;