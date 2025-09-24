import '../css/Card.css';
function Card(props) {
    const {
        projects
    } = props
    console.log(projects)
    return (
        <div className='cardbox'>
            {projects.length > 0 ? (
                projects.map(project => {
                    const startDate = project.start ? new Date(project.start) : null;
                    const endDate = project.end ? new Date(project.end) : null;
                    const today = new Date();

                    const start = startDate ? startDate.toISOString().slice(0, 10) : 'N/A';
                    const end = endDate ? endDate.toISOString().slice(0, 10) : 'N/A';

                    let diffDays = null;
                    if (endDate) {
                        const diff = Math.ceil((endDate - today) / (1000 * 60 * 60 * 24));
                        diffDays = diff >= 0 ? `D-${diff}` : `D+${Math.abs(diff)}`;
                    }


                    return (
                        <div className='card' key={project._id}>
                            <div>
                                <img src={`http://localhost:3000/${project.path}`} alt={project.title} />
                                <div>{diffDays}</div>
                            </div>
                            <div>
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                            </div>
                            <div>
                                <div>시작일</div>
                                <div>{start}</div>
                                <div>마감일</div>
                                <div>{end}</div>
                            </div>
                        </div>
                    );
                })
            ) : (
                <div className='card'>프로젝트가 없습니다. 추가해주세요.</div>
            )}
        </div>
    );
}

export default Card;