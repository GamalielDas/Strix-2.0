const ChooseUS = () => {
    return ( 
        <div className="grid grid-cols-1 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]  bg-[url('/choose-us/bg-design.svg')] bg-no-repeat bg-cover font-['Roboto_Condensed']  md:grid-cols-2 ">
            <div className="justify-self-center self-center text-3xl font-black mt-9 mb-9 md:text-4xl">WHY <span className="text-[#00ADB5]">CHOOSE US?</span></div>
            <div className="row-span-3 justify-self-center self-center mb-10 "><img alt="text" className="" src="/choose-us/left-art.svg"/></div>
            
            <div className="justify-self-center self-center font-semibold w-2/3 text-xl italic mb-10 text-center">Quality is our topmost priority, providing the best modern tech services and deals . Our dedicated high end team ensures timelined project management with optimum customer satisfaaction </div>
            <div className="grid grid-cols-3 mt-10 mb-10 ">
                <div className="justify-self-center"> <img alt="text" className="h-[2rem] md:h-[3rem]" src="/choose-us/timelined.svg"/></div>
                <div className="justify-self-center "><img alt="text" className="h-[2rem] md:h-[3rem]" src="/choose-us/quality.svg"/></div>
                <div className="justify-self-center"><img alt="text" className="h-[2rem] md:h-[3rem]" src="/choose-us/deals.svg"/></div>
                <h1 className="justify-self-center font-bold m-2 mb-10 lg:text-xl">Timelined</h1>
                <h1 className="justify-self-center  font-bold m-2 mb-10 lg:text-xl">Quality</h1>
                <h1 className="justify-self-center  font-bold m-2 mb-10 lg:text-xl">Best Deals</h1>
            </div>
        </div>
     );
}
 
export default ChooseUS;