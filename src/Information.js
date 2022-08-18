import "./Information.css";

const Information = (props) => {
    return (
        <div className="information">
            <h2 className="information-heading">{props.heading}</h2>
            <div className="information-data">
                {props.data.map((item, index) => {
                    <p key={index}>{item}</p>;
                })}
            </div>
        </div>
    );
};

export default Information;
