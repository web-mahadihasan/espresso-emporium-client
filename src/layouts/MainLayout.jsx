import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
    useEffect(() => {
        AOS.init({
             duration: 800,
             once: false,
           })
     }, [])
     
    return (
        <div>
            <Toaster />
            {/* Navbar  */}
            <header>
                <Navbar/> 
            </header>
            
            {/* Outlet  */}
            <div className="min-h-[calc(100vh-732px)]">
                <Outlet/>
            </div>

            {/* Footer  */}
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default MainLayout;