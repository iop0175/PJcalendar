import React from 'react';
import '../css/MainTop.css';
function MainTop(props) {
    const { sideBarHidden, setModalon, Modalon } = props;
    return (
        <div id='mainTop'>
    {!Modalon && <div
        id='menu'
        onMouseEnter={() => setModalon(true)}
        onMouseLeave={() => setModalon(false)}
        style={{ display: sideBarHidden ? 'block' : 'none' }}
    >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 14H2C0.897 14 0 14.897 0 16C0 17.103 0.897 18 2 18H16C17.103 18 18 17.103 18 16C18 14.897 17.103 14 16 14ZM16 7H2C0.897 7 0 7.897 0 9C0 10.103 0.897 11 2 11H16C17.103 11 18 10.103 18 9C18 7.897 17.103 7 16 7ZM16 0H2C0.897 0 0 0.897 0 2C0 3.103 0.897 4 2 4H16C17.103 4 18 3.103 18 2C18 0.897 17.103 0 16 0Z" fill="black" />
        </svg>
    </div>}
    <div id='mainTopRight'>
        <div>공유</div>
        <div><svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 2C1 2.26522 1.10536 2.51957 1.29289 2.70711C1.48043 2.89464 1.73478 3 2 3C2.26522 3 2.51957 2.89464 2.70711 2.70711C2.89464 2.51957 3 2.26522 3 2C3 1.73478 2.89464 1.48043 2.70711 1.29289C2.51957 1.10536 2.26522 1 2 1C1.73478 1 1.48043 1.10536 1.29289 1.29289C1.10536 1.48043 1 1.73478 1 2ZM8 2C8 2.26522 8.10536 2.51957 8.29289 2.70711C8.48043 2.89464 8.73478 3 9 3C9.26522 3 9.51957 2.89464 9.70711 2.70711C9.89464 2.51957 10 2.26522 10 2C10 1.73478 9.89464 1.48043 9.70711 1.29289C9.51957 1.10536 9.26522 1 9 1C8.73478 1 8.48043 1.10536 8.29289 1.29289C8.10536 1.48043 8 1.73478 8 2ZM15 2C15 2.26522 15.1054 2.51957 15.2929 2.70711C15.4804 2.89464 15.7348 3 16 3C16.2652 3 16.5196 2.89464 16.7071 2.70711C16.8946 2.51957 17 2.26522 17 2C17 1.73478 16.8946 1.48043 16.7071 1.29289C16.5196 1.10536 16.2652 1 16 1C15.7348 1 15.4804 1.10536 15.2929 1.29289C15.1054 1.48043 15 1.73478 15 2Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        </div>
    </div>
</div>
    );
}

export default MainTop;