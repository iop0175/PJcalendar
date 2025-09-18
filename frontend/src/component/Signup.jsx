import React, { useState } from 'react';
import { UserRound, LockKeyhole } from "lucide-react";
import axios from 'axios';
function Signup(props) {
    const {
        onLoginClick
    } = props
    const [userid, setUserid] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const signup = async () => {
        try {
            console.log(id,pw,name,email);
            const res = await axios.post("http://localhost:3000/user/signup", { userid, password , name , email});
            console.log('서버 응답:', res.data);
        } catch (err) {
            console.error('로그인 오류:', err);
        }
    }
return (
    <div className="loginContent">
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
            <input type="text" id='name' placeholder='name'
                value={name} onChange={(e) => setName(e.target.value)}></input>
        </div>
        <div className='inputBox'>
            <input type="email" id='email' placeholder='email'
                value={email} onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <div className='inputBox'>
            <button  className='inputBoxbnt' onClick={signup}>회원가입</button>
        </div>
        <div className='inputBox'>
            <button  className='inputBoxbnt' onClick={onLoginClick}>로그인</button>
        </div>
    </div>
);

}
export default Signup;