import "./TableOfContents.css";
import data from "./Blockchain.json";

const TableOfContents = () => {
    return (
        <div className="table-of-contents">
            <h2 className="table-of-contents-heading">Table of contents</h2>
            <div className="table-of-contents-content">
                {data.map((topic, index) => {
                    return (
                        <a href={`#${index}`} key={index}>
                            {topic["heading"]}
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default TableOfContents;
