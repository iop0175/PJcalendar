import React, { useState } from 'react';
import { UserRound} from "lucide-react";
import axios from 'axios';
function FindPw(props) {
    const {
        back
    } = props
    const [userid, setUserid] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const findpw = async () => {
        try {
            const res = await axios.post("http://localhost:3000/user/findpw", {userid , name , email});
            console.log('서버 응답:', res.data);
            if(res.data.success == false){
                alert('회원정보와 일칳하는 정보가 없습니다')
            }else{
                alert(`회원님 비밀번호는 ${res.data.userpw} 입니다`)
            }
        } catch (err) {
            console.error('로그인 오류:', err);
            
        }
    }
    return (
        <div className="loginContent">
            <h1>비밀번호 찾기</h1>
            <div className='inputBox'>
                <div>
                    <UserRound size={'50%'} />
                </div>
                <input type="text" id='id' placeholder="User ID"
                    value={userid} onChange={(e) => setUserid(e.target.value)}></input>
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
                <button className='inputBoxbnt' onClick={findpw}>비밀번호 찾기</button>
            </div>
            <div className='inputBox'>
                <button className='inputBoxbnt' onClick={back}>back</button>
            </div>
        </div>
    );
}

export default FindPw;