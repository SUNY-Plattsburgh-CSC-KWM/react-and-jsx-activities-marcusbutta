function Counter({ start }) {
    const [total, setTotal] = React.useState(start);
    return (
        <main>
            <p>Total: {total}</p>
            <input type="number"></input>
            <input type="radio" id="add" name="drone" value="add" checked/>
            <label htmlFor="add">+</label>
            <input type="radio" id="sub" name="drone" value="sub" />
            <label htmlFor="sub">-</label>
            <input type="radio" id="mult" name="drone" value="mult"/>
            <label htmlFor="mult">×</label>
            <input type="radio" id="div" name="drone" value="div" />
            <label htmlFor="div">÷</label>
            <button onClick={() => setTotal((value) => value + 1)}>=</button>
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