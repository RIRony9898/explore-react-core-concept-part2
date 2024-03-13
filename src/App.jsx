import "./App.css";
import Counter from "./Counter";
import Users from "./Users";
import Friends from "../Friends";

function App() {
  function handleClick1() {
    alert("Button 1 clicked");
  }
  const handleClick2 = () => {
    alert("Button 2 clicked");
  };
  const addToFive = (num) => {
    alert(num + 5)
  }
  return (
    <>
      <h3>React core concept 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <button onClick={handleClick1}>Button 1</button>
      <br /> <br />
      <button onClick={handleClick2}>Button 2</button>
      <br />
      <br />
      <button
        onClick={() => {
          alert("Button 3 clicked");
        }}
      >
        Button 3
      </button>
      <br /><br />
      {/* Vejailla */}
      <button onClick={() => {addToFive(3)}}>Add To Five</button>
    </>
  );
}

export default App;
