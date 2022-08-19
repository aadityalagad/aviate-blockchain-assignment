import "./Article.css";
import Topic from "./Topic";

const Article = (props) => {
	return (
		<div className="article">
			{props.data.map((topic, index) => {
				return (
					// Topic component to render topics in an article
					<Topic
						key={index}
						index={topic["id"]}
						heading={topic["heading"]}
						data={topic["data"]}
					/>
				);
			})}
		</div>
	);
};

export default Article;
