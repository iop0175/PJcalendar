import axios from "axios";
import { useState, useEffect } from 'react';
function Useradd({ setAdduser, onSelectUsers, selectedUsers, setSelectedUsers }) {
    const [userIdInput, setUserIdInput] = useState('');
    const [users, setUsers] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [inputstate, setInputstate] = useState(true)

    useEffect(() => {
        axios.get("http://localhost:3000/user")
            .then(res => setUsers(res.data))
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        if (!userIdInput) {
            setSuggestions([]);
            return;
        }
        const filtered = users.filter(user =>
            user.userid.toLowerCase().startsWith(userIdInput.toLowerCase()) &&
            !selectedUsers.some(u => u.userid === user.userid)
        );
        setSuggestions(filtered);
    }, [userIdInput, users, selectedUsers]);

    const handleInputChange = (e) => {
        setUserIdInput(e.target.value);
        console.log(e.target.value);
        setInputstate(e.target.value === '');
    }

    const handleSuggestionClick = (user) => {
        onSelectUsers([...selectedUsers, user]);
        setUserIdInput('');
        setSuggestions([]);
        setInputstate(true);
    }


    const handleRemoveUser = (user) => {
        onSelectUsers(selectedUsers.filter(u => u.userid !== user.userid));
    }

    return (
        <div className='userAddBox'>
            <div>
                <div className="userAddTop">
                    <h2>팀원등록하기</h2>
                    <div onClick={() => setAdduser(prev => !prev)}>x</div>
                </div>
                <div className="userAddContent">
                    <div>
                        <h3>팀원검색</h3>
                        <input className={inputstate ? 'boderInput' : 'noneInput'}
                            type="text"
                            value={userIdInput}
                            onChange={handleInputChange}
                            placeholder="사용자 ID 입력"
                        />
                        <div className="suggestions">
                            {suggestions.map((user, idx) => (
                                <div key={idx} onClick={() => handleSuggestionClick(user)} style={{ cursor: 'pointer' }}>
                                    {user.userid}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="selectedUsers">
                        <h3>팀원</h3>
                        {selectedUsers.map(user => (
                            <div key={user.userid} className="selectUser">
                                {user.userid} <span style={{ cursor: 'pointer', color: 'red' }} onClick={() => handleRemoveUser(user)}>x</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="addusers" onClick={()=>{setAdduser(false)}}>등록</div>
            </div>
        </div>
    );
}

export default Useradd;
