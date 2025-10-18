import { Outlet } from 'react-router-dom';
import NavBar from "../assets/components/NavBar";
import Footer from "../assets/components/Footer";

const Layout = () => {
    <>
        <NavBar />  
        <Outlet /> 
        <Footer />
    </>
}

export default Layout; 