import logo from '../assets/images/logo.png'
import NavMenu from './NavMenu';

const Navbar = () => {
    return (
        <div className="w-full bg-nav-Bg bg-no-repeat bg-cover bg-center text-white bg-opacity-40">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                <div className='hidden lg:flex'></div>
                {/* Logo  */}
                <div className='flex items-center gap-3 py-2'>
                    <img src={logo} alt="logo" className='w-14'/>
                    <h3 className='text-3xl md:text-4xl lg:text-5xl font-rancho'>Espresso Emporium</h3>
                </div>
                {/* Menu  */}
                <div>
                    <NavMenu/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;