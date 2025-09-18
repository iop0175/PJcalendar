import React, { useState } from 'react';
function FindId(props) {
    const {
        back
    } = props
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
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
                <button className='inputBoxbnt'>회원가입</button>
            </div>
            <div className='inputBox'>
                <button className='inputBoxbnt' onClick={back}>back</button>
            </div>
        </div>
    );
}

export default FindId;