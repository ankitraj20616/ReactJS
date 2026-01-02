import { useState } from "react";
function App() {
  const [name, setName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    setName("");
  };
  return (
    <div>
      <h1>Form Handling</h1>
      <br />
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            console.log(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default App;
