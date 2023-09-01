import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import React, { useContext } from 'react';
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';
import jwtDecode from 'jwt-decode';
import authContext from '../context/auth/authContext';


const Login = () => {
    // const [decoded, setDecoded] = useState(null);
    const { setDecoded } = useContext(authContext);

    

    return (
        <div className='flex justify-start items-center flex-col h-screen'>
            <div className='relative w-full h-full'>
                <video src={shareVideo} typeof='video/mp4' loop controls={false} muted autoPlay className='w-full h-full object-cover' />
                <div className='flex flex-col absolute justify-center items-center top-0 right-0 left-0 bottom-0 bg-gray-600/30 backdrop-brightness-50'>
                    <div className='p-5'>
                        <img src={logo} alt="logo" width="190px" />
                    </div>
                    <img src="" alt="" />
                    <div className="">
                        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
                            <GoogleLogin
                                onSuccess={credentialResponse => {
                                    var decoded = jwtDecode(credentialResponse.credential);
                                    setDecoded(decoded);
                                    console.log(decoded);
                                }}
                                onError={() => {
                                    console.log('Login Failed');
                                }}
                            />
                        </GoogleOAuthProvider>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Login;
