import { useState } from "react";
import axios from "axios";

function App() {
  // localStorage.clear();
  // sessionStorage.clear();
  // localStorage.setItem("name", "Ankit");
  // const user = localStorage.getItem("name");
  // console.log(user);
  // localStorage.removeItem("name");

  // const user = {
  //   name: "Ankit",
  //   age: 21,
  //   location: "Bhagalpur",
  // };

  // localStorage.setItem("user", JSON.stringify(user));
  // const localUser = JSON.parse(localStorage.getItem("user"));
  // console.log(localUser);

  // localStorage.clear();

  // const getData = () => {
  //   // console.log("Got Data");
  //   fetch("https://jsonplaceholder.typicode.com/todos/1")
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // };

  // async function getData() {
  //   const resp = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  //   const data = await resp.json();
  //   console.log(data);
  // }

  const [data, setData] = useState([]);

  const getData = async () => {
    // const resp = await axios.get(
    //   "https://jsonplaceholder.typicode.com/todos/1"
    // );
    // console.log(resp.data);

    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    // console.log(data);
    setData(response.data);
  };

  return (
    <div>
      {/* <h1>Local Storage</h1> */}
      <h1>API</h1>
      <br />
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function (item, idx) {
          return <h3 key={idx}>{item.email}</h3>;
        })}
      </div>
    </div>
  );
}

export default App;
