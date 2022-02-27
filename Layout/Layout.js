
import Footer from "../components/Footer";
import Nav from "../components/Navbar";

const Layout = ({children}) => {
    return (
        <div>
            <div className="content">
                    <Nav/>
                    { children}
                    <Footer/>
            </div>
        </div>

    ); 
}
 
export default Layout;