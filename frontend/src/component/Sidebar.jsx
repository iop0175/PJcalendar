import React from 'react';
import '../css/Sidebar.css';
function Sidebar(props) {
    const {
        sideBarHidden,
        sideclose,
        person,
        team,
        showPerson,
        showTeam,
        userData
    } = props;
    return (
        <>
            <div id='sideBar' className={sideBarHidden ? 'hide' : ''}>
                <div id='header'>
                    <div>대</div>
                    <div>{userData?.name}</div>
                    <div onClick={sideclose}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.59 18L19 16.59L14.42 12L19 7.41L17.59 6L11.59 12L17.59 18Z" fill="white" />
                            <path d="M11 18L12.41 16.59L7.83 12L12.41 7.41L11 6L5 12L11 18Z" fill="white" />
                        </svg>

                    </div>
                    <div>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white" />
                        </svg>
                    </div>
                </div>
                <div id='nav'>
                    <a href="" className='navList'>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.5 11H11.71L11.43 10.73C12.444 9.55407 13.0012 8.05271 13 6.5C13 5.21442 12.6188 3.95772 11.9046 2.8888C11.1903 1.81988 10.1752 0.986756 8.98744 0.494786C7.79972 0.00281635 6.49279 -0.125905 5.23191 0.124899C3.97104 0.375703 2.81285 0.994767 1.90381 1.90381C0.994765 2.81285 0.3757 3.97104 0.124896 5.23192C-0.125908 6.49279 0.00281349 7.79973 0.494783 8.98744C0.986753 10.1752 1.81987 11.1903 2.88879 11.9046C3.95771 12.6188 5.21442 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
                                fill="white" />
                        </svg>
                        <div>검색</div>
                    </a>
                    <a href="" className='navList'>
                        <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.19785 15.655V10.655H11.1979V15.655C11.1979 16.205 11.6479 16.655 12.1979 16.655H15.1979C15.7479 16.655 16.1979 16.205 16.1979 15.655V8.655H17.8979C18.3579 8.655 18.5779 8.085 18.2279 7.785L9.86785 0.255C9.48785 -0.085 8.90785 -0.085 8.52785 0.255L0.167852 7.785C-0.172148 8.085 0.0378519 8.655 0.497852 8.655H2.19785V15.655C2.19785 16.205 2.64785 16.655 3.19785 16.655H6.19785C6.74785 16.655 7.19785 16.205 7.19785 15.655Z"
                                fill="white" />
                        </svg>
                        <div>Home</div>
                    </a>
                    <div className='navList' onClick={person}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 9.75C6.66848 9.75 6.35054 9.8817 6.11612 10.1161C5.8817 10.3505 5.75 10.6685 5.75 11C5.75 11.3315 5.8817 11.6495 6.11612 11.8839C6.35054 12.1183 6.66848 12.25 7 12.25C7.33152 12.25 7.64946 12.1183 7.88388 11.8839C8.1183 11.6495 8.25 11.3315 8.25 11C8.25 10.6685 8.1183 10.3505 7.88388 10.1161C7.64946 9.8817 7.33152 9.75 7 9.75ZM13 9.75C12.6685 9.75 12.3505 9.8817 12.1161 10.1161C11.8817 10.3505 11.75 10.6685 11.75 11C11.75 11.3315 11.8817 11.6495 12.1161 11.8839C12.3505 12.1183 12.6685 12.25 13 12.25C13.3315 12.25 13.6495 12.1183 13.8839 11.8839C14.1183 11.6495 14.25 11.3315 14.25 11C14.25 10.6685 14.1183 10.3505 13.8839 10.1161C13.6495 9.8817 13.3315 9.75 13 9.75ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 9.71 2.02 9.42 2.05 9.14C4.41 8.09 6.28 6.16 7.26 3.77C8.40289 5.39279 10.0041 6.63752 11.8587 7.34478C13.7133 8.05205 15.7367 8.18966 17.67 7.74C17.88 8.45 18 9.21 18 10C18 14.41 14.41 18 10 18Z"
                                fill="white" />
                        </svg>
                        <div>개인</div>
                    </div>
                    <div className='newProject' id='person' style={{ display: showPerson ? 'block' : 'none' }}><svg width="14"
                        height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white" />
                    </svg>개인 프로젝트 생성하기</div>
                    <div href="" className='navList' onClick={team}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14 8V0H4V4H0V18H8V14H10V18H18V8H14ZM4 16H2V14H4V16ZM4 12H2V10H4V12ZM4 8H2V6H4V8ZM8 12H6V10H8V12ZM8 8H6V6H8V8ZM8 4H6V2H8V4ZM12 12H10V10H12V12ZM12 8H10V6H12V8ZM12 4H10V2H12V4ZM16 16H14V14H16V16ZM16 12H14V10H16V12Z"
                                fill="white" />
                        </svg>
                        <div>팀</div>
                    </div>
                    <div className='newProject' id='team' style={{ display: showTeam ? 'block' : 'none' }}><svg width="14" height="14"
                        viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white" />
                    </svg>팀 프로젝트 생성하기</div>
                    <div id="bottomNav">
                        <a href="" className='navList'>
                            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19.7381 17.9818L11.4777 8.84028C12.2947 6.52979 11.8408 3.81748 10.1161 1.90882C8.30065 -0.100297 5.57745 -0.50212 3.39889 0.602895L7.30214 4.9225L4.57894 7.93617L0.584918 3.61657C-0.504361 6.02751 -0.0504944 9.04119 1.76497 11.0503C3.48966 12.959 5.94054 13.4612 8.02833 12.5571L16.2887 21.6986C16.6518 22.1005 17.1964 22.1005 17.5595 21.6986L19.6473 19.3881C20.1012 18.9863 20.1012 18.2831 19.7381 17.9818Z"
                                    fill="white" />
                            </svg>
                            <div>설정</div>
                        </a>
                        <a href="" className='navList'>
                            <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z"
                                    fill="white" />
                            </svg>
                            <div>휴지통</div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;