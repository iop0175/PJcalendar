import React from 'react';
import '../css/TeamCard.css';
function TeamCard(props) {
    return (
        <div className='teamCard'>
            <div>
                <img src="/imgs/test.png" alt="" />
                <div>D-<span>60</span></div>
            </div>
            <div>
                <h2>서울 중앙지검 페이지 리뉴얼</h2>
                <p>2025 서울 중앙지검 페이지 리뉴얼 작업</p>
            </div>
            <div>
                <div>시작일</div>
                <div>2025-07-15</div>
                <div>마감일</div>
                <div>2025-08-15</div>
            </div>
            <div>
                <div>팀원</div>
                <div className='teamMembers'>
                    <div>
                        <div></div>
                        <div>김민혁</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamCard;