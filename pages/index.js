import Head from 'next/head'
import AboutUs from "../components/AboutUs/AboutUs";
import ChooseUS from "../components/ChooseUS/ChooseUS";
import ContactUs from "../components/ContactUs/ContactUs";
import Counter from "../components/Counter/Counter";
import LandingPage from "../components/LandingPage/LandingPage";
import Newsletter from "../components/Newsletter/Newsletter";
import OurServices from "../components/OurServices/OurServices";
import OurTeam from "../components/OurTeam/OurTeam";
import Carousel from '../components/Projects/Carousel';;
import '../node_modules/font-awesome/css/font-awesome.min.css';


export default function Home() {
  return (
  <>
    <Head>
         <title>Codestrix | Software Company</title>
         <meta name='keywords'></meta>
     </Head>
    <div className='grid grid-cols-1   '  >
                  
                  
                    <LandingPage/>
                    <AboutUs className='w-4/5 '/>
                    <OurServices/>
                    <Counter/>
                    <ChooseUS/>
                    <Carousel/>
                    <Newsletter/>
                    <OurTeam/>
                    <ContactUs/> 

    </div>
  </>
  )
}
