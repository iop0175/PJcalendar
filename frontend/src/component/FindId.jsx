import React, { useState } from 'react';
import axios from 'axios';
function FindId(props) {
    const {
        back
    } = props
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const findid = async () => {
        try {
            const res = await axios.post("http://localhost:3000/user/findid", { name , email});
            console.log('서버 응답:', res.data);
            if(res.data.success == false){
                alert('회원정보와 일칳하는 아이디가 없습니다')
            }else{
                alert(`회원님 아이디는 ${res.data.userid} 입니다`)
            }
        } catch (err) {
            console.error('로그인 오류:', err);
            
        }
    }
    return (
        <div className="loginContent">
            <h1>아이디 찾기</h1>
            <div className='inputBox'>
                <input type="text" id='name' placeholder='name'
                    value={name} onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div className='inputBox'>
                <input type="email" id='email' placeholder='email'
                    value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className='inputBox'>
                <button className='inputBoxbnt' onClick={findid}>아이디 찾기</button>
            </div>
            <div className='inputBox'>
                <button className='inputBoxbnt' onClick={back}>back</button>
            </div>
        </div>
    );
}

export default FindId;