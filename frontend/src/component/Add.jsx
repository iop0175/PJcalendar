import React, { useState } from 'react';
import axios from 'axios';
import Milestones from './Milestones';
import '../css/Add.css';
import Useradd from './Useradd';

function Add(props) {
    const { userData } = props;
    const [file, setFile] = useState(null);
    const [projectTitle, setProjectTitle] = useState('');
    const [projectDesc, setProjectDesc] = useState('');
    const [milestones, setMilestones] = useState([]);
    const [mindate, setMindate] = useState('');
    const [maxdate, setMaxdate] = useState('');
    const [adduser, setAdduser] = useState(false);
    const [selectedUsers, setSelectedUsers] = useState([]);
    const handleRemoveMilestone = (index) => {
        const newMilestones = milestones.filter((_, i) => i !== index);
        setMilestones(newMilestones);
    };
    const addMilestone = () => {
        setMilestones(prev => [...prev, { title: '', start: '', end: '', todos: [] }]);
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleMilestoneChange = (index, field, value) => {
        const newMilestones = [...milestones];
        newMilestones[index][field] = value;
        setMilestones(newMilestones);

        const allDates = newMilestones.flatMap(item => [
            new Date(item.start),
            new Date(item.end || item.start)
        ]);

        setMindate(new Date(Math.min(...allDates)));
        setMaxdate(new Date(Math.max(...allDates)));
    };

    const handleSubmit = async () => {
        if (!file) {
            alert("파일을 선택하세요!");
            return;
        }

        if (!projectTitle.trim()) {
            alert("프로젝트 제목을 입력하세요!");
            return;
        }

        if (!projectDesc.trim()) {
            alert("프로젝트 설명을 입력하세요!");
            return;
        }

        if (projectDesc.length > 100) {
            alert("프로젝트 설명은 100자 이내로 작성해주세요!");
            return;
        }

        if (milestones.length === 0) {
            alert("일정을 최소 1개 이상 추가하세요!");
            return;
        }

        if (milestones.length === 0 || milestones.some(m => !m.title || m.title.trim() === "")) {
            alert("일정 제목을 입력하세요!");
            return;
        }

        if (milestones.length === 0 || milestones.some(m => !m.start || m.start.trim() === "")) {
            alert("일정 시작일을 입력하세요!");
            return;
        }

        if (milestones.length === 0 || milestones.some(m => !m.end || m.end.trim() === "")) {
            alert("일정 종료일을 입력하세요!");
            return;
        }
        try {
            const formData = new FormData();
            formData.append("file", file);

            const fileRes = await axios.post("http://localhost:3000/project/file", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });

            console.log("파일 업로드 응답:", fileRes.data);


            if (selectedUsers.length > 0) {
                const payload = {
                    userid: userData.userid,
                    title: projectTitle,
                    description: projectDesc,
                    start: mindate,
                    end: maxdate,
                    milestones: milestones,
                    filename: fileRes.data.filename,
                    path: fileRes.data.path,
                    mate: selectedUsers.map(u => ({
                        userid: u.userid,
                        name: u.name
                    }))
                };

                const projectRes = await axios.post("http://localhost:3000/project/teamcreate", payload, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                console.log("팀 프로젝트 생성 응답:", projectRes.data);
            } else {
                const payload = {
                    userid: userData.userid,
                    title: projectTitle,
                    description: projectDesc,
                    start: mindate,
                    end: maxdate,
                    milestones: milestones,
                    filename: fileRes.data.filename,
                    path: fileRes.data.path
                };
                const projectRes = await axios.post("http://localhost:3000/project/create", payload, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                console.log("프로젝트 생성 응답:", projectRes.data);
            }
            props.setReload(prev => !prev);
        } catch (err) {
            console.error("에러:", err);
        }
    };

    return (
        <div id='content'>
            <div className='title'>프로젝트 등록하기</div>

            <div className='addContentBox'>
                <div>
                    <div>
                        <h2 className='addTitle'>프로젝트 제목</h2>
                        <input
                            type="text"
                            placeholder="생성하실 프로젝트의 제목을 입력하세요"
                            value={projectTitle}
                            onChange={e => setProjectTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <h2 className='addTitle'>프로젝트 개요</h2>
                        <input
                            type="text"
                            placeholder="프로젝트의 설명을 간단하게 작성해주세요 (Max 100자)"
                            value={projectDesc}
                            onChange={e => setProjectDesc(e.target.value)}
                        />
                    </div>
                    <div>
                        <h2 className='addTitle'>프로젝트 일정</h2>
                        <p>프로젝트 진행 예정 일정을 등록해 주세요</p>
                        <div>
                            {milestones.map((m, idx) => (
                                <Milestones
                                    key={idx}
                                    index={idx}
                                    milestone={m}
                                    onChange={handleMilestoneChange}
                                    onRemove={handleRemoveMilestone}
                                />
                            ))}
                        </div>
                        <div
                            onClick={addMilestone}
                            style={{ cursor: 'pointer', color: 'blue', marginTop: '5px' }}
                        >
                            + 일정 추가하기
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className='addTitle'>썸네일</h2>
                        <input type="file" onChange={handleFileChange} />
                        <p>프로젝트 대표이미지를 추가해 주세요</p>
                    </div>
                    <div>
                        <h2 className='addTitle'>프로젝트 팀원 추가</h2>
                        <p>프로젝트 함께 진행할 팀원을 추가해 주세요(팀원 추가 없으면 개인프로젝트)</p>
                        <div onClick={() => setAdduser(prev => !prev)}>+팀원 추가하기</div>
                        <div>
                            {selectedUsers.map(user => (
                                <div key={user.userid} className="selectUser">
                                    {user.userid}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <button onClick={handleSubmit} style={{ marginTop: '20px' }}>프로젝트 등록</button>
            {adduser && <Useradd setAdduser={setAdduser} selectedUsers={selectedUsers} onSelectUsers={setSelectedUsers} />}
        </div>
    );
}

export default Add;
