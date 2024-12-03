import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useState } from 'react';
import { IoHelpBuoySharp, IoHomeOutline } from 'react-icons/io5';
import { LiaSignOutAltSolid } from 'react-icons/lia';
import { MdRestaurantMenu } from 'react-icons/md';
import { PiUserCircleDashed } from 'react-icons/pi';
import { RiMenuUnfold3Fill } from 'react-icons/ri';
import { TbUsers } from 'react-icons/tb';
import { VscCoffee } from 'react-icons/vsc';
import { Link } from 'react-router';
import { useAuth } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const NavMenu = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const {signOutUser, user} = useAuth()

    const handleSignout = () => {
        Swal.fire({
            title: "Are you sure to sign out?",
            text: "You can sign in again any time!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Sign out!"
          }).then((result) => {
            if (result.isConfirmed) {
                signOutUser()
                .then((result) => {
                    Swal.fire({
                        title: "Sign out Successfull!",
                        icon: "success"
                    }); 
                }).catch(error => {
                    Swal.fire({
                        text: `Failed to Sign out! Try again..`,
                        title: "Failed!",
                        icon: "error"
                    }); 
                })            
            }
          });
        
    }
    return (
        <div className="text-right font-raleway z-50">
            <Menu>
                <MenuButton onClick={() => setOpenMenu(!openMenu)} className="inline-flex items-center gap-1 rounded-md border py-1 px-3 text-sm/6 font-semibold text-white shadow-inner  focus:outline-none data-[open]:bg-[#E3B577]">
                <span>{openMenu? <MdRestaurantMenu size={24} data-aos="flip-left" /> : <RiMenuUnfold3Fill size={22} data-aos="flip-left"/>} </span>
                <span className='font-raleway text-lg'>Menu</span>
                </MenuButton>

                <MenuItems data-aos="fade-left"
                transition
                anchor="bottom end"
                className="mt-5 font-raleway origin-top-right rounded-md border z-50 border-white space-y-1 bg-white text-black py-2 px-2 lg:px-3 font-medium w-64 md:w-72 text-sm/6 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                >
                {
                    user ? (
                    <div className='my-2 flex items-center gap-6 bg-white/15 p-2 gap-2 rounded-md'>
                        <img src={user?.photoURL} alt="" className='h-12 w-12 rounded-full bg-white ring ring-[#E6B577] ring-offset-2 ring-offset-white'/>
                        <div>
                            <p className='text-lg font-semibold'>{user?.displayName}</p>
                            <p>{user?.email}</p>
                        </div>
                    </div>) : <h4 className='font-raleway text-xl font-semibold text-red-600 my-4'>You're currently Sign out</h4>
                }
                <MenuItem>
                    <Link to={"/"} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-base-200"> <IoHomeOutline size={16} /> Home </Link>
                </MenuItem>
                <MenuItem>
                    <Link to={"/add-coffee"} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-base-200"> <VscCoffee size={16}/> Add Coffee </Link>
                </MenuItem>
                <MenuItem>
                    <Link to={"/users"} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-base-200"> <TbUsers size={16}/> Users </Link>
                </MenuItem>
                <MenuItem>
                    <Link to={"profile"} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-base-200"> <PiUserCircleDashed size={16}/> Profile </Link>
                </MenuItem>
                <MenuItem>
                    <Link to={"/privacy-policy"} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-base-200"> <IoHelpBuoySharp size={16}/> Privacy policy </Link>
                </MenuItem>
                <div className="my-2 h-px bg-base-300" />
                <div>
                    {
                        user ? (<button onClick={handleSignout} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-base-300 font-semibold text-red-500"> <LiaSignOutAltSolid /> Sign Out </button>) : 
                        <div className='flex justify-between items-center font-semibold'>
                            <Link to={"/auth/sign-in"} className='px-5 py-2 bg-[#E3B577] border border-[#E3B577] focus:bg-transparent hover:text-black hover:bg-transparent duration-300 text-white text-shadow rounded'>Sign in</Link>
                            <div className="divider lg:divider-horizontal mx-0 text-sm font-medium">OR</div>
                            <Link to={"/auth/sign-up"} className='px-5 py-2 border text-black/70 rounded border-[#E3B577] hover:bg-[#E3B577] hover:text-white text-shadow focus:bg-[#E3B577] focus:text-white duration-500'>Sign up</Link>
                        </div>
                    }
                    
                    
                </div>
                </MenuItems>
            </Menu>
        </div>
    );
};

export default NavMenu;