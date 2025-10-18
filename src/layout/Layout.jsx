import { Outlet } from 'react-router-dom';
import NavBar from "../assets/components/header/NavBar";
import Footer from "../assets/components/footer/Footer";

const Layout = () => {
    <>
        <NavBar />  
        <Outlet /> 
        <Footer />
    </>
}

export default Layout; 