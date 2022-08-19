import "./Topic.css";

const Topic = (props) => {
	return (
		<div id={props.index} className="topic">
			<h2 className="topic-heading">{props.heading}</h2>
			<div className="topic-content">
				{props.data.map((paragraph, index) => {
					return <p key={index}>{paragraph}</p>;
				})}
			</div>
		</div>
	);
};

export default Topic;
