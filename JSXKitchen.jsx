function Timer({start, type}) {
    const [counter, setCounter] = React.useState(start);
    const [running, setRunning] = React.useState(false);
    const [increment, setIncrement] = React.useState('0');

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
            <label form="title">Name:</label>
            <input id="name" type="text" placeholder="Tomato"/>

            <label form="ms">MilliSeconds:</label>
            <input id="ms" type="number" value={increment} onChange={(e) => setIncrement(e.target.value)} />

            <label form="time">Time:</label>
            <input id="time" type="number" value={counter} onChange={(e) => setCounter(e.target.value)} />
            <button onClick={reset}>Reset</button>
            <button onClick={() => setRunning(!running)}>Start/Stop</button>
        </main>
    );
}

function App() {
    return (
        <div>
            <Timer start={0}/>
            <Timer start={0}/>
            <Timer start={0}/>
            <Timer start={0}/>
        </div>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);