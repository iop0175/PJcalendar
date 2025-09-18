import React from 'react';
import { useState } from 'react';
import axios from "axios";
import Sidebar from '../component/Sidebar.jsx';
import MainTop from '../component/MainTop.jsx';
import ModalSidebar from '../component/ModalSidebar.jsx';
import Card from '../component/Card.jsx';
import TeamCard from '../component/TeamCard.jsx';
import Fullcalendar from '../component/Fullcalendar.jsx';
import '../css/Main.css';
function Main(props) {
    const [count, setCount] = useState(0)
    function teest() {
        axios.get("http://localhost:3000/api/test")
            .then(res => console.log(res.data))
    }
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
            <Sidebar sideBarHidden={sideBarHidden}
                sideclose={sideclose}
                person={person}
                team={team}
                showPerson={showPerson}
                showTeam={showTeam} />
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
                        showTeam={showTeam} />
                </div>
                <div id='content'>
                    <h1>개인 프로젝트</h1>
                    <div className='cardbox'>
                        <Card />
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