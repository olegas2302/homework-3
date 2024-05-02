function FilterCompetencies(props) {

    return (
        <button className="showBtn" onClick={props.onClick}>
          {props.label}
        </button>
    );
}

export default FilterCompetencies