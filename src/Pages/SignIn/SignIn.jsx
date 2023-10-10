import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SignIn = () => {
    const { logIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleSignIn = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        logIn(email, password)
            .then(result => {
                console.log(result.user.email)
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
            })

    }
    return (
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-16">

            <div className="w-full mx-auto max-w-sm p-4 border bg-slate-100 border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
                <h5 className="text-3xl font-bold text-gray-900 text-center">Sign In to <span className="logoText">corpoEvent</span></h5>
                <button className="border-2 border-purple-600 rounded-lg py-3 px-4 mt-6 flex gap-4 justify-center font-semibold w-full">
                    <span><img className="h-6" src="https://i.ibb.co/1RHYhnL/download.png" alt="" /></span>
                    Continue with Google
                </button>

                <h3 className="text-center py-6">-------------- or --------------</h3>

                <form className="space-y-4" onSubmit={handleSignIn}>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                    </div>

                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login to your account</button>
                    <div className="text-sm font-medium text-gray-500">
                        Not registered? <Link to='/signup'><button className="text-blue-700 hover:underline dark:text-blue-500">Sign Up</button></Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;