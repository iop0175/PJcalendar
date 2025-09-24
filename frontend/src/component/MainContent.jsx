import React from 'react';
import Card from './Card.jsx';
import TeamCard from './TeamCard.jsx';
import Fullcalendar from './Fullcalendar.jsx';
import '../css/Main.css';
function MainContent(props) {
    const { projects } = props
    return (
        <div id='content'>
            <h1>개인 프로젝트</h1>
            <Card projects={projects} />
            <h1>팀 프로젝트</h1>
            <div className='teamCardbox'>
                <TeamCard />
            </div>
            <h1>프로젝트 달력</h1>
            <Fullcalendar />
        </div>
    );
}

export default MainContent;