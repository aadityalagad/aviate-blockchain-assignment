import "./App.css";
import Header from "./Header";
import Main from "./Main";
import About from "./About";

function App() {
    return (
        <div className="app">
            <Header />
            <Main
                id="blockchain"
                title="Blockchain"
                description="A blockchain is a distributed database or ledger that is shared among the nodes of a computer network. 
                As a database, a blockchain stores information electronically in digital format."
            />
            <About class="blockchain" />
        </div>
    );
}

export default App;
