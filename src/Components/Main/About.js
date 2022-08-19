import "./About.css";
import Article from "./Article";
import TableOfContents from "./TableOfContents";

const About = (props) => {
	return (
		<div id={props.id} className="about">
			{/* TableOfContent component to navigate to a particular topic in the article */}
			<TableOfContents data={props.data} />
			{/* Article component to render the article */}
			<Article data={props.data} />
		</div>
	);
};

export default About;
