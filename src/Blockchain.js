import "./Blockchain.css";

const Blockchain = () => {
    const listOfTopics = [
        "What Is a Blockchain?",
        "How does Blockchain work?",
        "Blockchain decentralization",
        "Transparency",
        "Is Blockchain secure?",
        "Blockchains vs banks",
        "How are blockchains used?",
        "Pros and cons of Blockchain",
    ];

    // const listOfInformation = [
    //     {
    //         heading: "What Is a Blockchain?",
    //         data: [
    //             `A blockchain is a distributed database or ledger that is
    // 			shared among the nodes of a computer network. As a database,
    // 			a blockchain stores information electronically in digital
    // 			format. Blockchains are best known for their crucial role in
    // 			cryptocurrency systems, such as Bitcoin, for maintaining a
    // 			secure and decentralized record of transactions. The
    // 			innovation with a blockchain is that it guarantees the
    // 			fidelity and security of a record of data and generates
    // 			trust without the need for a trusted third party.`,

    // 			`One key difference between a typical database and a
    // 			blockchain is how the data is structured. A blockchain
    // 			collects information together in groups, known as blocks,
    // 			that hold sets of information. Blocks have certain storage
    // 			capacities and, when filled, are closed and linked to the
    // 			previously filled block, forming a chain of data known as
    // 			the blockchain. All new information that follows that
    // 			freshly added block is compiled into a newly formed block
    // 			that will then also be added to the chain once filled.`,

    // 			`A database usually structures its data into tables, whereas
    // 			a blockchain, as its name implies, structures its data into
    // 			chunks (blocks) that are strung together. This data
    // 			structure inherently makes an irreversible timeline of data
    // 			when implemented in a decentralized nature. When a block is
    // 			filled, it is set in stone and becomes a part of this
    // 			timeline. Each block in the chain is given an exact
    // 			timestamp when it is added to the chain.`,

    //         ],
    //     },
    // ];
    return (
        <div className="blockchain">
            <div className="table-of-contents">
                <h2 className="table-of-contents-heading">Table of contents</h2>
                <div className="table-of-contents-content">
                    {listOfTopics.map((topic, index) => {
                        return (
                            <a href={`#${topic}`} key={index}>
                                {topic}
                            </a>
                        );
                    })}
                </div>
            </div>
            <div className="information">
                <div id="What Is a Blockchain?">
                    <h2
                        className="information-heading"
                    >
                        What Is a Blockchain?
                    </h2>
                    <div className="information-content">
                        <p>
                            A blockchain is a distributed database or ledger
                            that is shared among the nodes of a computer
                            network. As a database, a blockchain stores
                            information electronically in digital format.
                            Blockchains are best known for their crucial role in
                            cryptocurrency systems, such as Bitcoin, for
                            maintaining a secure and decentralized record of
                            transactions. The innovation with a blockchain is
                            that it guarantees the fidelity and security of a
                            record of data and generates trust without the need
                            for a trusted third party.
                        </p>
                        <p>
                            One key difference between a typical database and a
                            blockchain is how the data is structured. A
                            blockchain collects information together in groups,
                            known as blocks, that hold sets of information.
                            Blocks have certain storage capacities and, when
                            filled, are closed and linked to the previously
                            filled block, forming a chain of data known as the
                            blockchain. All new information that follows that
                            freshly added block is compiled into a newly formed
                            block that will then also be added to the chain once
                            filled.
                        </p>
                        <p>
                            A database usually structures its data into tables,
                            whereas a blockchain, as its name implies,
                            structures its data into chunks (blocks) that are
                            strung together. This data structure inherently
                            makes an irreversible timeline of data when
                            implemented in a decentralized nature. When a block
                            is filled, it is set in stone and becomes a part of
                            this timeline. Each block in the chain is given an
                            exact timestamp when it is added to the chain.
                        </p>
                        <p>
                            Blockchain is a type of shared database that differs
                            from a typical database in the way that it stores
                            information; blockchains store data in blocks that
                            are then linked together via cryptography. As new
                            data comes in, it is entered into a fresh block.
                            Once the block is filled with data, it is chained
                            onto the previous block, which makes the data
                            chained together in chronological order. Different
                            types of information can be stored on a blockchain,
                            but the most common use so far has been as a ledger
                            for transactions. In Bitcoin's case, blockchain is
                            used in a decentralized way so that no single person
                            or group has control—rather, all users collectively
                            retain control. Decentralized blockchains are
                            immutable, which means that the data entered is
                            irreversible. For Bitcoin, this means that
                            transactions are permanently recorded and viewable
                            to anyone.
                        </p>
                    </div>
                </div>
                <h2
                    id="How does Blockchain work?"
                    className="information-heading"
                >
                    How does Blockchain work?
                </h2>
                <div className="information-content">
                    <p>
                        A blockchain is a distributed database or ledger that is
                        shared among the nodes of a computer network. As a
                        database, a blockchain stores information electronically
                        in digital format. Blockchains are best known for their
                        crucial role in cryptocurrency systems, such as Bitcoin,
                        for maintaining a secure and decentralized record of
                        transactions. The innovation with a blockchain is that
                        it guarantees the fidelity and security of a record of
                        data and generates trust without the need for a trusted
                        third party.
                    </p>
                    <p>
                        One key difference between a typical database and a
                        blockchain is how the data is structured. A blockchain
                        collects information together in groups, known as
                        blocks, that hold sets of information. Blocks have
                        certain storage capacities and, when filled, are closed
                        and linked to the previously filled block, forming a
                        chain of data known as the blockchain. All new
                        information that follows that freshly added block is
                        compiled into a newly formed block that will then also
                        be added to the chain once filled.
                    </p>
                    <p>
                        A database usually structures its data into tables,
                        whereas a blockchain, as its name implies, structures
                        its data into chunks (blocks) that are strung together.
                        This data structure inherently makes an irreversible
                        timeline of data when implemented in a decentralized
                        nature. When a block is filled, it is set in stone and
                        becomes a part of this timeline. Each block in the chain
                        is given an exact timestamp when it is added to the
                        chain.
                    </p>
                    <p>
                        Blockchain is a type of shared database that differs
                        from a typical database in the way that it stores
                        information; blockchains store data in blocks that are
                        then linked together via cryptography. As new data comes
                        in, it is entered into a fresh block. Once the block is
                        filled with data, it is chained onto the previous block,
                        which makes the data chained together in chronological
                        order. Different types of information can be stored on a
                        blockchain, but the most common use so far has been as a
                        ledger for transactions. In Bitcoin's case, blockchain
                        is used in a decentralized way so that no single person
                        or group has control—rather, all users collectively
                        retain control. Decentralized blockchains are immutable,
                        which means that the data entered is irreversible. For
                        Bitcoin, this means that transactions are permanently
                        recorded and viewable to anyone.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blockchain;
