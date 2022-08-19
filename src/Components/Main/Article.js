import "./Article.css";
import Topic from "./Topic";

const Article = (props) => {
	return (
		<div className="article">
			{props.data.map((topic, index) => {
				return (
					<Topic
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
