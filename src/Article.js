import Information from "./Information";
import "./Article.css";

const Article = (props) => {
	return (
		<div className="information">
			{props.data.map((topic, index) => {
				return (
					<Information
						key={index}
						index={index}
						heading={topic["heading"]}
						data={topic["data"]}
					/>
				);
			})}
		</div>
	);
};

export default Article;
