import React, { useState } from 'react';
import axios from 'axios';
import Milestones from './Milestones';
import '../css/Add.css';

function Add(props) {
    const{
        userData
    }=props
    const [projectTitle, setProjectTitle] = useState('');
    const [projectDesc, setProjectDesc] = useState('');
    const [milestones, setMilestones] = useState([]);

    const addMilestone = () => {
        setMilestones(prev => [...prev, { title: '', start: '', end: '' ,todos:[]}]);
    };

    const handleMilestoneChange = (index, field, value) => {
        const newMilestones = [...milestones];
        newMilestones[index][field] = value;
        setMilestones(newMilestones);
    };

    const handleSubmit = async () => {
        try {
            const payload = {
                userid: userData.userid,
                title: projectTitle,
                description: projectDesc,
                milestones: milestones
            };
            console.log(payload);
            const res = await axios.post('http://localhost:3000/project/create', payload, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });

            console.log('서버 응답:', res.data);
            alert('프로젝트가 등록되었습니다!');
        } catch (err) {
            console.error('에러:', err);
            alert('등록 실패');
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
                            placeholder="프로젝트의 설명을 간단하게 작성해주세요 (Max 300자)"
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
                        <h2 className='addTitle' >썸네일</h2>
                        <p>프로젝트 대표이미지를 추가해 주세요</p>
                    </div>
                    <div>
                        <h2 className='addTitle'>프로젝트 팀원 추가</h2>
                        <p>프로젝트 함께 진행할 팀원을 추가해 주세요(팀원 추가 없으면 개인프로젝트)</p>
                        <div>+팀원 추가하기</div>
                    </div>
                </div>
            </div>

            <button onClick={handleSubmit} style={{ marginTop: '20px' }}>프로젝트 등록</button>
        </div>
    );
}

export default Add;
