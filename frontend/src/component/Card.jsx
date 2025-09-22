import '../css/Card.css';
function Card(props) {
    const {
        projects
    } = props
    console.log(projects )
    return (
        <div>
            {projects.length > 0 ? (
                projects.map(project => (
                    <div className='card' key={project._id}>
                        <div>
                            <img src="/imgs/Rectangle 6.png" alt="" />
                            <div>D-<span>60</span></div>
                        </div>
                        <div>
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                        </div>
                        <div>
                            <div>시작일</div>
                            <div>{project.startDate || 'N/A'}</div>
                            <div>마감일</div>
                            <div>{project.endDate || 'N/A'}</div>
                        </div>
                    </div>
                ))
            ) : (
                <div className='card'>프로젝트가 없습니다. 추가해주세요.</div>
            )}

        </div>
    );
}

export default Card;