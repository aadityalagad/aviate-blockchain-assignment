import About from "./About";
import Hero from "./Hero";
import "./Page.css";

const Page = (props) => {
	return (
		<>
			<div id={props.id} className="hero-wrapper">
				{/* Hero component to render heading title and images */}
				<Hero
					href={`#about-${props.id}`}
					class={props.class}
					title={props.title}
					description={props.description}
					colorClass={props.colorClass}
				/>
			</div>
			{/* About component to render table of contents and article */}
			<About id={props.aboutId} data={props.data} />
		</>
	);
};

export default Page;
