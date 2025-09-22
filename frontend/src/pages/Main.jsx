import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import Sidebar from '../component/Sidebar.jsx';
import MainTop from '../component/MainTop.jsx';
import ModalSidebar from '../component/ModalSidebar.jsx';
import Card from '../component/Card.jsx';
import TeamCard from '../component/TeamCard.jsx';
import Fullcalendar from '../component/Fullcalendar.jsx';
import { useNavigate } from 'react-router-dom';
import '../css/Main.css';
function Main(props) {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        let isMounted = true;
        const token = localStorage.getItem('accessToken');
        if (!token) return;

        axios.post(
            "http://localhost:3000/user/token",
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
            .then(res => {
                setUserData(res.data);
                return axios.get("http://localhost:3000/project/list",
                    { params: { userid: res.data.userid } })
                    .then(res => {
                        setProjects(res.data);
                    })
            })
            .catch(err => {
                navigate("/");
                alert('시간만료');
            })
            .finally(() => setLoading(false));
    }, []);
    const [showPerson, setShowPerson] = useState(false);
    const [showTeam, setShowTeam] = useState(false);
    const [sideBarHidden, setSideBarHidden] = useState(false);
    const [Modalon, setModalon] = useState(false);
    function person() {
        setShowPerson(prev => !prev);
    }
    function team() {
        setShowTeam(prev => !prev);
    }
    function sideclose() {
        setSideBarHidden(true);
        setsideBarmenu(false);
    }
    function sideopen() {
        setSideBarHidden(false);
        setsideBarmenu(true);
    }
    return (
        <div id='mainBox'>
            {!loading && <Sidebar sideBarHidden={sideBarHidden}
                sideclose={sideclose}
                person={person}
                team={team}
                showPerson={showPerson}
                showTeam={showTeam}
                userData={userData}
                projects={projects} />}
            <div id='mainContent'>
                <MainTop sideBarHidden={sideBarHidden} setModalon={setModalon} Modalon={Modalon} />
                <div
                    style={{ display: sideBarHidden ? 'block' : 'none' }}
                    onMouseEnter={() => setModalon(true)}
                    onMouseLeave={() => setModalon(false)}
                >
                    <ModalSidebar Modalon={Modalon}
                        sideopen={sideopen}
                        person={person}
                        team={team}
                        showPerson={showPerson}
                        showTeam={showTeam}
                        userData={userData}
                        projects={projects} />
                </div>
                <div id='content'>
                    <h1>개인 프로젝트</h1>
                    <div className='cardbox'>
                        <Card projects={projects} />
                    </div>
                    <h1>팀 프로젝트</h1>
                    <div className='teamCardbox'>
                        <TeamCard />
                    </div>
                    <h1>프로젝트 달력</h1>
                    <Fullcalendar />
                </div>
            </div>
        </div>
    );
}

export default Main;