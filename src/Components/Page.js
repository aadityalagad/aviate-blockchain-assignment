import About from "./About";
import Hero from "./Hero";
import "./Page.css";

const Page = (props) => {
	return (
		<>
			<div id={props.id} className="hero-wrapper">
				<Hero
					href={`#about-${props.id}`}
					class={props.class}
					title={props.title}
					description={props.description}
					colorClass={props.colorClass}
				/>
			</div>
			<About id={props.aboutId} data={props.data} />
		</>
	);
};

export default Page;
