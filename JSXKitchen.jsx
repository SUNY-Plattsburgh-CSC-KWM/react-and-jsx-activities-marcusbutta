function Timer({start, type, increment}) {
    const [counter, setCounter] = React.useState(start);
    const [running, setRunning] = React.useState(false);

    const reset = () => {
        setCounter(0); setRunning(false);
    }

    React.useEffect(() => {
        const tickTock = () => {
            if (running && counter > 0) {
                setCounter((value) => value - 1);
            }
        }

        const timer = setInterval(tickTock, increment);

        return () => {
            clearInterval(timer);
        };

    }, [running, counter]);  // used claude to learn I had to add running as a dep

    return (
        <main>
            <p>Counter ({type}):</p>
            <input type="text" placeholder="Tomato"/>
            <input type="number" value={counter} onChange={(e) => setCounter(e.target.value)} />
            <button onClick={reset}>Reset</button>
            <button onClick={() => setRunning(!running)}>Start/Stop</button>
        </main>
    );
}

function App() {
    return (
        <div>
            <Timer start={0} type={"Minutes"} increment={60000} />
            <Timer start={0} type={"Minutes"} increment={60000}/>
            <Timer start={0} type={"Seconds"} increment={1000}/>
            <Timer start={0} type={"Seconds"} increment={1000}/>
        </div>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);