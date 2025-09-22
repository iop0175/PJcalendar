import React from 'react';

function Milestones({ index, milestone, onChange }) {

    const addTodo = () => {
        const newTodos = milestone.todos ? [...milestone.todos, ""] : [""];
        onChange(index, 'todos', newTodos);
    };

    const handleTodoChange = (todoIdx, value) => {
        const newTodos = [...milestone.todos];
        newTodos[todoIdx] = value;
        onChange(index, 'todos', newTodos);
    };

    return (
        <div className="milestone">
            <label>
                일정 제목
                <input
                    type="text"
                    placeholder="일정 제목"
                    value={milestone.title}
                    onChange={e => onChange(index, 'title', e.target.value)}
                />
            </label>
            <label>
                시작일
                <input
                    type="date"
                    value={milestone.start}
                    onChange={e => onChange(index, 'start', e.target.value)}
                />
            </label>
            <label>
                종료일
                <input
                    type="date"
                    value={milestone.end}
                    onChange={e => onChange(index, 'end', e.target.value)}
                />
            </label>

            <div>
                {milestone.todos?.map((todo, idx) => (
                    <input
                        key={idx}
                        type="text"
                        placeholder="할일"
                        value={todo}
                        onChange={e => handleTodoChange(idx, e.target.value)}
                    />
                ))}
            </div>

            <div onClick={addTodo} style={{ cursor: 'pointer', color: 'blue' }}>
                + 할일 추가
            </div>
        </div>
    );
}

export default Milestones;
