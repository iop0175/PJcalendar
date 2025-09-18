import React, { useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import '../css/FullCalendar.css';

function Calendar() {
  const calendarRef = useRef(null);
  const listRef = useRef(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();

  const allEvents = [
    { title: '회의', start: '2025-09-09', end:'2025-09-13T12:30:00', type:'team' },
    { title: '점심 약속', start: '2025-09-09T12:30:00', type:'personal' },
    { title: '워크숍', start: '2025-09-10', type:'personal' },
    { title: '회의', start: '2025-09-11T14:00:00', type:'team' },
    { title: '세미나', start: '2025-09-12T09:00:00', type:'team' },
  ];

  // 이벤트 필터링
  const filterEvents = (type) => {
    const filtered = type === 'all' ? allEvents : allEvents.filter(e => e.type === type);
    const calendarApi = calendarRef.current.getApi();
    const listApi = listRef.current.getApi();

    calendarApi.removeAllEvents();
    listApi.removeAllEvents();

    filtered.forEach(e => {
      calendarApi.addEvent(e);
      listApi.addEvent(e);
    });
  };

  // 달력 이동 함수
  const handlePrev = () => {
    calendarRef.current.getApi().prev();
    listRef.current.getApi().prev();
    setCurrentDate(calendarRef.current.getApi().getDate());
  };
  const handleNext = () => {
    calendarRef.current.getApi().next();
    listRef.current.getApi().next();
    setCurrentDate(calendarRef.current.getApi().getDate());
  };
  const handleToday = () => {
    calendarRef.current.getApi().today();
    listRef.current.getApi().today();
    setCurrentDate(new Date());
  };

  // 현재 달 표시
  const formattedMonth = currentDate.toLocaleString('ko-KR', { year: 'numeric', month: 'long' });

  // 이벤트 렌더링 스타일 공통
  const handleEventDidMount = (info) => {
    // end가 없는 이벤트는 제외
    if (!info.event.end) return;

    // 종료일까지 남은 일수 계산
    const endDate = new Date(info.event.end);
    const diffTime = endDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // 7일 이내면 빨간색
    if (diffDays <= 7 && diffDays >= 0) {
      info.el.style.backgroundColor = 'red';
      info.el.style.color = 'white';
    }

    // 리스트 뷰 호버시 글자색 인라인 변경
    info.el.addEventListener('mouseenter', () => {
      info.el.style.color = 'blue';
      info.el.style.cursor = 'pointer';
    });
    info.el.addEventListener('mouseleave', () => {
      // 빨간색이면 흰색, 아니면 검정
      info.el.style.color = (diffDays <= 7 && diffDays >= 0) ? 'white' : 'black';
    });
  };

  return (
    <div className="App">
      <h2>{formattedMonth}</h2>

      <div id='btnlist' style={{ marginBottom: '1%' }}>
        <button onClick={handlePrev}>◀ 이전</button>
        <button onClick={() => filterEvents('personal')}>개인</button>
        <button onClick={() => filterEvents('team')}>팀</button>
        <button onClick={() => filterEvents('all')}>전체</button>
        <button onClick={handleToday}>오늘</button>
        <button onClick={handleNext}>다음 ▶</button>
      </div>

      <div id='calendarBox' style={{ display:'flex', gap:'2%' }}>
        <div id='calendar' style={{ flex:2 }}>
          <FullCalendar
            locale="kr"
            height="41vw"
            ref={calendarRef}
            initialDate={currentDate}
            plugins={[dayGridPlugin]}
            events={allEvents}
            headerToolbar={false}
            eventDidMount={handleEventDidMount}
          />
        </div>

        <div id='calendarList' style={{ flex:1 }}>
          <FullCalendar
            locale="kr"
            ref={listRef}
            plugins={[listPlugin]}
            initialView="listMonth"
            height="41vw"
            initialDate={currentDate}
            events={allEvents}
            allDayText="종일"
            headerToolbar={false}
            eventDidMount={handleEventDidMount}
          />
        </div>
      </div>
    </div>
  );
}

export default Calendar;
