import Hero from "./Hero";
import "./Main.css";

const Main = (props) => {
    return (
        <div id={props.id} className="main">
            <Hero
                class={props.class}
                title={props.title}
                description={props.description}
                colorClass={props.colorClass}
            />
        </div>
    );
};

export default Main;
