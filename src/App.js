import { useState } from "react";

function App() {
  const [color, setColor] = useState("red");
  const buttonText = color === "red" ? "Blue" : "Red";

  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    if (color === "red") {
      setColor("blue");
    } else {
      setColor("red");
    }
  };

  const handleDisabled = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <div className="App">
      <button
        style={{ backgroundColor: color }}
        onClick={handleClick}
        disabled={isDisabled}
      >
        {/* {color === "red" ? "Change to Blue" : "Change to Red"} */}
        Change to {buttonText}
      </button>
      <div>
        <input type="checkbox" id="checkbox" onChange={handleDisabled} />
        <label htmlFor="checkbox">Change the button state</label>
      </div>
    </div>
  );
}

export default App;
