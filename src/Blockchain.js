import "./Blockchain.css";
import Article from "./Article";
import TableOfContents from "./TableOfContents";

const Blockchain = () => {
    return (
        <div className="blockchain">
            <TableOfContents />
            <Article />
        </div>
    );
};

export default Blockchain;
