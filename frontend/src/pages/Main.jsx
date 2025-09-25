import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import Sidebar from '../component/Sidebar.jsx';
import MainTop from '../component/MainTop.jsx';
import ModalSidebar from '../component/ModalSidebar.jsx';
import MainContent from '../component/MainContent.jsx'
import { useNavigate } from 'react-router-dom';
import Add from '../component/Add.jsx'

function Main(props) {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showPerson, setShowPerson] = useState(false);
    const [showTeam, setShowTeam] = useState(false);
    const [sideBarHidden, setSideBarHidden] = useState(false);
    const [Modalon, setModalon] = useState(false);
    const token = localStorage.getItem('accessToken');
    const [activePage, setActivePage] = useState("main");
    const [reload, setReload] = useState(false);
    useEffect(() => {

        let isMounted = true;

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
    }, [reload]);
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
                projects={projects}
                setActivePage ={setActivePage} />}
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
                        projects={projects} 
                        setActivePage ={setActivePage}/>
                </div>
                {activePage === "main" && <MainContent projects={projects} />}
                {activePage === "add" && <Add userData={userData} setReload={setReload}/>}
            </div>
        </div>
    );
}

export default Main;