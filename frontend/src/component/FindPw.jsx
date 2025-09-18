import React, { useState } from 'react';
import { UserRound} from "lucide-react";
function FindPw(props) {
    const {
        back
    } = props
    const [userid, setUserid] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
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
                <button className='inputBoxbnt'>비밀번호 찾기</button>
            </div>
            <div className='inputBox'>
                <button className='inputBoxbnt' onClick={back}>back</button>
            </div>
        </div>
    );
}

export default FindPw;