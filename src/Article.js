import Information from "./Information";
import content from "./Blockchain.json";
import "./Article.css";

const Article = () => {
    return (
        <div className="information">
            {content.map((topic, index) => {
                return (
                    <Information
                        key={index}
                        index={index}
                        heading={topic["heading"]}
                        data={topic["data"]}
                    />
                );
            })}
        </div>
    );
};

export default Article;
