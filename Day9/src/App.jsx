import { useEffect, useState } from "react";
function App() {
  // useEffect(function () {
  //   console.log("Under use Effect");
  // });
  const [num, setNum] = useState(0);
  useEffect(
    function () {
      console.log("Under use Effect");
    },
    [num]
  );

  return (
    <>
      <div>
        <h1>Use Effect Hook</h1>
        <h2>{num}</h2>
        <button
          onClick={() => {
            setNum(num + 1);
          }}
        >
          Increment
        </button>
      </div>
    </>
  );
}

export default App;
