import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";
import Popup from "../pages/CheckPopup/popup";

const Links = (props) => {
	return (
		<Link to={props.w} smooth={true} offset={50} duration={500} className="uppercase cursor-pointer hover:bg-blue-900 text-black hover:text-white px-3 py-2 rounded-md text-md font-medium">{props.name}</Link>
	)
}

const MLinks = (props) => {
	return (
		<Link to={props.where} smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-blue-900 text-black hover:text-white block px-3 py-2 rounded-md text-md font-medium"> {props.name} </Link>
	)
}



function Nav() {
	const [isOpen, setIsOpen] = useState(false);
	const [buttonPopup,setButtonPopup]=useState(false);
	const [Register,setRegistered]=useState(true);
	const [switched,setSwitched]=useState(false);
	return (
       <>
		<div>
			<nav className="bg-[#ffffff] shadow-sm fixed w-full z-10 drop-shadow-xl ">
				<div className="w-full">
					<div className="flex items-center h-22 w-full">
						<div className="flex w-full">
							<div className="flex items-center mx-20 ml-0  justify-between w-full">
								<div className="bg-[#222831] px-32 py-8 my-auto drop-shadow-xl ">
									<div className="flex justify-center items-center flex-shrink-0 ">
										<h1 className=" font-bold text-slate-50 text-xl cursor-pointer uppercase">
											Codestrix
										</h1>
									</div>
								</div>
								<div className="hidden md:block">
									<div className="ml-10 flex items-baseline space-x-4">
										<Links where="home" name="Home" />
										<Links where="about" name="About" />
										<Links where="work" name="Work" />
										<Links where="service" name="Services" />
										<Links where="contact" name="Contact" />
										<button className="flex-nowrap cursor-pointer bg-[#222831] text-white hover:bg-[#00CFD9] hover:text-slate-50 ml-3 px-5 py-2 rounded-md text-md font-medium uppercase" onClick={()=> setButtonPopup(true)}>Login</button>
									</div>
								</div>
							</div>
						</div>
						<div className="mr-10 flex md:hidden ">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-[#222831] inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-[#222831] focus:outline-none "
								aria-controls="tab-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
									</svg>
								) : (
									<svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>
				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-100 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="px-6 pt-3 pb-5 md:hidden " id="mobile-menu">
							<div ref={ref} className="bg-blue px-3 pt-2 pb-3 space-y-1 sm:px-4 ">
								<MLinks where="home" name="Home" />
								<MLinks where="about" name="About" />
								<MLinks where="work" name="Work" />
								<MLinks where="service" name="Services" />
								<MLinks where="contact" name="Contact" />
								<button className="flex-nowrap cursor-pointer bg-[#222831] text-white hover:bg-[#00CFD9] hover:text-slate-50 ml-3 px-3 py-2 rounded-md text-sm font-medium uppercase" onClick={()=> setButtonPopup(true)}>Login</button>
							</div>
						</div>
					)}
				</Transition>
			</nav>
			
		</div>
		<Popup  trigger={buttonPopup} setTrigger={setButtonPopup}>

				  {switched ? (

							<div className="flex w-full md:w-full justify-items-center font-['Roboto_Condensed']" >
								<div className="grid grid-cols-1 rounded-2xl p-10 justify-self-center self-center w-full box-content border-2 shadow-lg bg-white lg:row-span-3 ">
										<img alt="text" className=' object-contain  justify-self-center  ' src="/popup/login.jpg"></img>
											<div className=" justify-self-center  self-center  pt-5 pb-3 ">
													<h1 className=" text-base md:text-xl font-medium text-center  ">CODESTRIX SIGNUP</h1>
													<h1 className=" text-[11px] text-center  ">Enter the below details to Register</h1>
											</div>
										<img alt="text" className='pb-7  justify-self-center object-cover'  src="/popup/Seperator.png"></img>

										{Register?(
											<>
												<input type="email" className="w-full rounded-lg mb-1 h-[40px] bg-white border shadow-sm border-slate-300 placeholder-slate-400  text-xs " placeholder="  &nbsp;&nbsp;Enter Your Email* "  />
												<input type="password" className="w-full rounded-lg mb-1  h-[40px] bg-white border shadow-sm border-slate-300 placeholder-slate-400  text-xs " placeholder="  &nbsp;&nbsp;Enter Your Password*"  />
												<input type="password" className="w-full rounded-lg mb-1  h-[40px] bg-white border shadow-sm border-slate-300 placeholder-slate-400  text-xs " placeholder="  &nbsp;&nbsp;Enter Your Password*"  />
												<button className="bg-[#00ADB5] rounded-lg px-10 py-2 mt-1 lg:px-10 font-semibold text-cyan-50" onClick={()=> setRegistered(false)}>Register</button>
												<h1 className=" text-[12px] text-center mt-7  ">Already have an Account? <span className=' text-sky-500' onClick={()=> setSwitched(false)}> Sign In</span></h1>
											</>

										):(

											<>
											<input placeholder="Enter OTP"  className="w-full rounded-lg  h-[40px] bg-white border px-5  shadow-sm border-slate-300 placeholder-slate-400  text-xs "></input>
											<button className="bg-[#00ADB5] rounded-lg px-10 py-2 mt-1 lg:px-10 font-semibold text-cyan-50">
											Verify OTP
											</button>
										</>
										)}
										
								</div> 
							</div>
					  	

				  )
				  :
				  (
						<div className="flex w-full md:w-full justify-items-center font-['Roboto_Condensed']" >
							<div className="grid grid-cols-1 rounded-2xl p-10 justify-self-center self-center w-full box-content border-2 shadow-lg bg-white lg:row-span-3 ">
									<img alt="text" className=' object-contain  justify-self-center  ' src="/popup/login.jpg"></img>
										<div className=" justify-self-center  self-center  pt-5 pb-3 ">
												<h1 className=" text-base md:text-xl font-medium text-center  ">CODESTRIX SIGNIN</h1>
												<h1 className=" text-[11px] text-center  ">Enter the below details to Login</h1>
										</div>
									<img alt="text" className='pb-7  justify-self-center object-cover'  src="/popup/Seperator.png"></img>
									<input type="email" className="w-full rounded-lg mb-1 h-[40px] bg-white border shadow-sm border-slate-300 placeholder-slate-400  text-xs " placeholder="  &nbsp;&nbsp;Enter Your Email* "  />
									<input type="password" className="w-full rounded-lg mb-1  h-[40px] bg-white border shadow-sm border-slate-300 placeholder-slate-400  text-xs " placeholder="  &nbsp;&nbsp;Enter Your Password*"  />
									<button className="bg-[#00ADB5] rounded-lg px-10 py-2 mt-1 lg:px-10 font-semibold text-cyan-50">Login</button>
									<h1 className=" text-[12px] text-center mt-7  ">Already have an Account? <span className=' text-sky-500' onClick={()=> setSwitched(true)}> Sign Up</span></h1>								
							</div> 
					    </div>

					
				  )}  		
        </Popup>
	   </>
		
	);
}

export default Nav;