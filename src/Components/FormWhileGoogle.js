import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdCloseCircleOutline } from "react-icons/io";

const FormWhileGoogle = () => {
    return (
        <div className='flex justify-center text-slate-100 mt-2'>
            <div className={`bg-slate-600 mb-8 z-20 mx-2 container max-w-xs px-9 py-10 sm:px-10 sm:pb-10 sm:pt-5 rounded-lg shadow-lg  w-full lg:max-w-2xl transition ease-in-out duration-500 `}>

                <h1 className={`text-white text-3xl font-mono form-label transition  ease-in-out duration-500 inline-block mb-4 font-bold `}>Sign up</h1>
                <form >



                    {/* Name */}
                    <div className="mt-2 grid xl:grid-cols-2 xl:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="firstName" id="first_name" className={`block py-2.5 px-0 w-full text-base transition ease-in-out duration-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer`} placeholder=" " required />
                            <label htmlFor="first_name" className={`peer-focus:font-medium absolute text-lg text-gray-400  duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>First name</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="lastName" id="last_name" className={`block py-2.5 px-0 w-full text-base  transition ease-in-out duration-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  } peer`} placeholder=" " />
                            <label htmlFor="last_name" className={`peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>Last name</label>
                        </div>
                    </div>



                    {/* Email id */}
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="email" name="email" id='email' className={` block py-2 mt-3 px-0 w-full text-base transition ease-in-out duration-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer`} placeholder=" " required />
                        <label htmlFor="email" className={`peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>Email address</label>
                        <p className={` transition ease-in-out duration-500 mt-2 text-sm`}>Already have an account?
                            <Link to={'/login'} className={` transition ease-in-out duration-500 font-medium ml-1`} >Log in</Link></p>
                    </div>




                    {/* Username */}
                    <div className="relative z-0 w-full mb-6 group">
                        <input name="username" id="username" className={`block py-2.5 px-0 w-full text-base  transition ease-in-out duration-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 } peer`} placeholder=" " required />
                        <label htmlFor="cpassword" className={`peer-focus:font-medium absolute text-lg text-gray-400  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>Username</label>
                    </div>




                    {/* College Name */}
                    <div className="relative z-0 w-full mb-6 group">
                        <input name="collegeName" id="collegeName" className={`block py-2.5 px-0 w-full text-base  transition ease-in-out duration-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 } peer`} placeholder=" " required />
                        <label htmlFor="cpassword" className={`peer-focus:font-medium absolute text-lg text-gray-400  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>College Name</label>
                    </div>


                    {/* gender */}
                    <div className="col-span-6 sm:col-span-3 relative z-0 w-full mb-6 group">
                        <label htmlFor="gender" className={`block font-medium `}>
                            Gender
                        </label>
                        <select id="gender" name="gender" autoComplete="gender" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
                            <option value="">Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>


                    {/* Bio */}
                    <div className="relative z-0 w-full mb-4 group">
                        <input name="bio" id="bio" className={`block py-2.5 px-0 w-full text-base  transition ease-in-out duration-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 } peer`} placeholder=" " required />
                        <label htmlFor="bio" className={`peer-focus:font-medium absolute text-lg text-gray-400  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>Bio</label>
                    </div>


                    {/* Password */}
                    <div className="relative z-0 w-full mb-6 group">
                        <input minLength={5} type="password" name="password" id="password" className={`block py-2.5 px-0 w-full text-base  transition ease-in-out duration-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 } peer`} placeholder=" " required />
                        <label htmlFor="password" className={`peer-focus:font-medium absolute text-lg text-gray-400  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>Password</label>
                    </div>

                    {/* Confirm password */}
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="password" name="cpassword" id="cpassword" className={`block py-2.5 px-0 w-full text-base  transition ease-in-out duration-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 } peer`} placeholder=" " required />
                        <label htmlFor="cpassword" className={`peer-focus:font-medium absolute text-lg text-gray-400  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>Confirm password</label>
                        <span className={`text-red-500 flex transition ease-in-out duration-300`}>Password doesn't match <IoMdCloseCircleOutline className="h-5 w-4 mt-1 ml-1" /></span>
                    </div>










                    {/* Button */}
                    <div className="flex justify-center">

                        <button type='submit'
                            className=" w-full px-2 py-3 md:py-2.5 bg-blue-600 text-white font-medium text-lg leading-tight  rounded shadow-md md:hover:bg-blue-800 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg active:text-gray-400 transition  duration-150 ease-in-out">
                            Sign up
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default FormWhileGoogle