function ShowCompetencies(props) {

    return (
        <button className="showBtn" onClick={props.onClick}>
          {props.open ? 'Убрать компетенции' : 'Показать компетенции'}
        </button>
    );
}

export default ShowCompetencies