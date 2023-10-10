import { FaUserCircle } from 'react-icons/fa';
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    const handleSignOut = () => {
        return logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li>
            <NavLink to="/" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#8758F1] underline" : ""
            }
            >Home

            </NavLink>
        </li>
        <li>
            <NavLink to="/about" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#8758F1] underline" : ""
            }
            >About

            </NavLink>
        </li>
        <li>
            <NavLink to="/signup" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#8758F1] underline" : ""
            }
            >Sign Up

            </NavLink>
        </li>
    </>

    return (
        <div className="navbar shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex items-center">
                    <img className="h-20" src="https://i.ibb.co/pw9nnzj/logo.jpg" alt="" />
                    <h3 className="text-3xl font-extrabold italic ml-[-10px] logoText">CorpoEvent</h3>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-6 px-1 text-lg">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end mr-6">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full flex justify-center items-center">
                            {
                                user ? <img src={user?.photoURL} />
                                    : <FaUserCircle className='text-[40px]'></FaUserCircle>
                            }

                            {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-slate-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
                {
                    user ? <button onClick={handleSignOut} >Sign Out</button>
                        :
                        <Link to='/signin'>
                            <button>Sign In</button>
                        </Link>
                }

            </div>
        </div>
    );
};

export default Navbar;