import "./TableOfContents.css";

const TableOfContents = (props) => {
	return (
		<div className="table-of-contents">
			<h2 className="table-of-contents-heading">Table of contents</h2>
			{/* Table of content */}
			<div className="table-of-contents-content">
				{props.data.map((topic, index) => {
					return (
						<a href={`#${topic["id"]}`} key={index}>
							{topic["heading"]}
						</a>
					);
				})}
			</div>
		</div>
	);
};

export default TableOfContents;
