import React, { useState } from 'react';
import { UserRound, LockKeyhole } from "lucide-react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login(props) {
    const navigate = useNavigate();
    const {
        onSignupClick,
        findId,
        findPw
    } = props;
    const [userid, setUserid] = useState('');
    const [password, setPassword] = useState('');
    const login = async () => {
        try {
            const res = await axios.post("http://localhost:3000/user/login", { userid, password });
            console.log('서버 응답:', res.data);
            if (res.data.success == true) {
                localStorage.setItem('accessToken', res.data.accessToken);
                navigate("/main");
            } else {
                alert('로그인 x')
            }
        } catch (err) {
            console.error('로그인 오류:', err);

        }
    };
    return (
        <div className="loginContent">
            <h1>로그인</h1>
            <div className='inputBox'>
                <div>
                    <UserRound size={'50%'} />
                </div>
                <input type="text" id='id' placeholder="User ID"
                    value={userid} onChange={(e) => setUserid(e.target.value)}></input>
            </div>
            <div className='inputBox'>
                <div><LockKeyhole size={'50%'} /></div>
                <input type="password" id='pw' placeholder='Password'
                    value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <div className='inputBox'>
                <button  className='inputBoxbnt' onClick={login}
                >Login</button>
            </div>
            <div className='inputBox'>
                <button  className='inputBoxbnt' onClick={onSignupClick}>회원가입</button>
            </div>
            <div id='findBox'>
                <a onClick={findId}>아이디 찾기</a>
                <a onClick={findPw}>비밀번호 찾기</a>
            </div>
        </div>
    );
}

export default Login;