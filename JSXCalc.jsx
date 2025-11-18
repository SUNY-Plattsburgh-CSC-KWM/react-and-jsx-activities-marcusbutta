// Used Claude so I could get an idea of what I was supposed to do: https://claude.ai/share/f0934dd3-b620-42c6-96e3-9e48843cc19e

function Counter({ start }) {
    const [total, setTotal] = React.useState(start);
    const [input, setInput] = React.useState('');

    const clear = () => {
        setTotal(0);
    }
    const add = () => {
        const num = parseInt(input);
        if (!isNaN(num)) {
            setTotal(total + num);
            setInput('');
        }
    }

    const minus = () => {
        const num = parseInt(input);
        if (!isNaN(num)) {
            setTotal(total - num);
            setInput('');
        }
    }

    const mult = () => {
        const num = parseInt(input);
        if (!isNaN(num)) {
            setTotal(total * num);
            setInput('');
        }
    }

    const div = () => {
        const num = parseInt(input);
        if (!isNaN(num)) {
            setTotal(total / num);
            setInput('');
        }
    }

    return (
        <main>
            <p>Total: {total}</p>
            <button onClick={clear}>C</button>
            <input type="number" value={input} onChange={(e) => setInput(e.target.value)} id="numInput"></input>
            <button onClick={add}>+</button>
            <button onClick={minus}>-</button>
            <button onClick={mult}>×</button>
            <button onClick={div}>÷</button>
        </main>
    );
}

function App() {
    return (
        <div>
            <Counter start={0}/>
        </div>
    );
}

const root = ReactDOM.render(<App />, document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);