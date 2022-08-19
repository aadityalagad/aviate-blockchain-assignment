import "./About.css";
import Article from "./Article";
import TableOfContents from "./TableOfContents";

const About = (props) => {
    return (
        <div className={props.class}>
            <TableOfContents />
            <Article />
        </div>
    );
};

export default About;
