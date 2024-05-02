function Skills(props) {
    return (
        <div className="skillBlock">
            <div className="skillDesc">
                <h3 className="skillName">{props.skillName}</h3>
                <p className='skillText'>{props.skillDesc}</p>            
            </div>
                <img className="skillImage" src={props.skillImage} alt={`Logo - ${props.name}`} />
        </div>
    )
}

export default Skills