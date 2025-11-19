function Counter({ start, increment }) {
    const [counter, setCounter] = React.useState(start);
    let startBtn = false;

    React.useEffect(() => {
        const tickTock = () => {
            if (startBtn) {
                setCounter((value) => value + 1);
            }
        }

        const timer = setInterval(tickTock, increment);

        return () => {
            clearInterval(timer);
        };

    }, []);  // [] tells it to only run once

    return (
        <main>
            <p>Counter ({increment}ms): {counter}</p>
            <button onClick={() => setCounter(0)}>
                Reset
            </button>
            <button onClick={() => startBtn = true}>Start</button>
            <button onClick={() => startBtn = false}>Stop</button>
        </main>
    );
}

function App() {
    return (
        <div>
            <Counter start={0} increment={1000} />
            <Counter start={0} increment={100} />
            <Counter start={0} increment={10} />
        </div>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);