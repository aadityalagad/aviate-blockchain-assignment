import "./About.css";
import Article from "./Article";
import TableOfContents from "./TableOfContents";

const About = (props) => {
    return (
        <div className="about">
            <TableOfContents data={props.data} />
            <Article data={props.data} />
        </div>
    );
};

export default About;
