import "./Information.css";

const Information = (props) => {
    return (
        <div id={props.index}>
            <h2 className="information-heading">{props.heading}</h2>
            <div className="information-content">
                {props.data.map((paragraph, index) => {
                    return <p key={index}>{paragraph}</p>;
                })}
            </div>
        </div>
    );
};

export default Information;
