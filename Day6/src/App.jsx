import { useState } from "react";

function App() {
  const [a, setA] = useState(0);
  function incrementA() {
    setA(a + 1);
  }
  function decrementA() {
    setA(a - 1);
  }

  // return (
  //   <div>
  //     <h1>Value of a is {a}</h1> <br />
  //     <button onClick={incrementA}>Increment a</button> <br />
  //     <br />
  //     <button onClick={decrementA}>Decrement a</button>
  //   </div>
  // );

  // const [user, setUser] = useState({ name: "Aman", age: 21 });
  // const [user, setUser] = useState([10, 20, 30]);
  // const changeUser = () => {
  // let newUser = { ...user };
  // // console.log(newUser);
  // newUser.name = "Ankit";
  // newUser.age = 22;
  // setUser(newUser);

  // setUser((prev) => ({ ...prev, age: 50 }));

  // let newUser = [...user];
  // newUser.push(40);
  // setUser(newUser);
  // };

  // return (
  //   <div>
  //     <h1>
  //       {user.name}- {user.age}
  //       {/* {user} */}
  //     </h1>
  //     <br />
  //     <button onClick={changeUser}>Change User</button>
  //   </div>
  // );

  const [num, setNum] = useState(0);
  const increment = () => {
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
  };

  return (
    <div>
      <h1>{num}</h1>
      <br />
      <button onClick={increment}>Increment</button>
    </div>
  );
}
export default App;
