import { useEffect, useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  const deleteToDo = (index) => {
    setToDos(toDos.filter((item, todoIndex) => index !== todoIndex));
  };
  useEffect(() => console.log(toDos), [toDos]);
  return (
    <div>
      <h1>My To Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          text="text"
          placeholder="Write your to do"
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>
            {item}
            <span onClick={() => deleteToDo(index)}>❌</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
