import { useState, useEffect } from "react";

function App() {
  const [counter, setCount] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCount((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("call the API");
  }, []);
  useEffect(() => {
    console.log("i run when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => {
    console.log("i run when 'counter' changes.");
  }, [counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search Here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Press the button</button>
    </div>
  );
}

export default App;
