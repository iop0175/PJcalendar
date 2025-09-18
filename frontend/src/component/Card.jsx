import React from 'react';
import '../css/Card.css';
function card(props) {
    return (
        <div className='card'>
            <div>
                <img src="/imgs/Rectangle 6.png" alt="" />
                <div>D-<span>60</span></div>
            </div>
            <div>
                <h2>포트폴리오 프로젝트</h2>
                <p>포트폴리오 작성을 위한 개인 프로젝트</p>
            </div>
            <div>
                <div>시작일</div>
                <div>2025-07-15</div>
                <div>마감일</div>
                <div>2025-08-15</div>
            </div>
        </div>
    );
}

export default card;