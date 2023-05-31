import { useState } from "react";

function App() {
  const [color, setColor] = useState("red");
  const buttonText = color === "red" ? "Blue" : "Red";

  const handleClick = () => {
    if (color === "red") {
      setColor("blue");
    } else {
      setColor("red");
    }
  };

  return (
    <div className="App">
      <button style={{ backgroundColor: color }} onClick={handleClick}>
        {/* {color === "red" ? "Change to Blue" : "Change to Red"} */}
        Change to {buttonText}
      </button>
    </div>
  );
}

export default App;
