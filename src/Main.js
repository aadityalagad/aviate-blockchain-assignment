import Hero from "./Hero";
import "./Main.css";

const Main = (props) => {
    return (
        <div id={props.id} className="main">
            <Hero title={props.title} description={props.description} />
        </div>
    );
};

export default Main;
