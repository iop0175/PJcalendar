import React, { useState } from 'react';
import '../css/Login.css';
import logo from '@/assets/imgs/logob.png';
import LoginForm from '@/component/Login';
import SignupForm from '@/component/Signup';
import FindIdForm from '@/component/FindId';   
import FindPwForm from '@/component/FindPw';
function Login(props) {
    const [logoMoved, setLogoMoved] = useState(false);
    const [viewFindId, setviewFindId] = useState(false);
    const [viewFindPw, setViewFindPw] = useState(false);
    const handleFindId = () => {
        console.log('id')
        setviewFindId(true);
        setViewFindPw(false);
        setLogoMoved(true);
    };

    const handleFindPw = () => {
        console.log('pw')
        setviewFindId(false);
        setViewFindPw(true);
        setLogoMoved(true);
    };

    const handleBack = () => {
        setviewFindId(false);
        setViewFindPw(false);
        setLogoMoved(false);
    };
    return (
        <div id="loginBox">
            <div id='Logincontentbox'>
                <div>
                    {!viewFindPw && !viewFindId && logoMoved && <SignupForm onLoginClick={() => setLogoMoved(false)} />}
                    {viewFindId && <FindIdForm back={handleBack}/>}
                    {viewFindPw && <FindPwForm back={handleBack}/>}
                </div>
                <div>
                    {!logoMoved && <LoginForm onSignupClick={() => setLogoMoved(true)}  findId={handleFindId} findPw={handleFindPw} />}
                </div>

                <div id='logoBox' style={{ transform: logoMoved ? 'translateX(100%)' : 'translateX(0%)', transition: '0.5s' }}>
                    <img src={logo} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Login;