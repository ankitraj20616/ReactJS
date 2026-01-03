import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  let printUserData = "No User Available";

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=100`
    );
    setUserData(response.data);
    // console.log(userData);
  };

  useEffect(() => {
    getData();
  }, [index]);

  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {
      return (
        <div key={idx}>
          <div className="h-40 w-44 overflow-hidden bg-white rounded-xl">
            <a href={elem.url}>
              <img
                className="h-full object-cover"
                src={elem.download_url}
                alt=""
              />
            </a>
          </div>
          <h2>{elem.author}</h2>
        </div>
      );
    });
  }

  return (
    <>
      <div className="bg-black overflow-auto h-screen p-4 text-white">
        {/* <button
          onClick={() => {
            getData();
          }}
          className="bg-green-600 px-5 py-2 mb-3 active:scale-95 rounded text-white"
        >
          Get Data
        </button> */}
        <div className="flex flex-wrap gap-4">
          {printUserData} <br />
        </div>
        <div className="justify-center flex items-center p-4 gap-3">
          <button
            className="bg-amber-300 text-black rounded px-4 py-2 font-semibold text-sm cursor-pointer active:scale-95"
            onClick={() => {
              if (index > 1) {
                setIndex(index - 1);
              }
            }}
          >
            Prev
          </button>
          <h4>{index}</h4>
          <button
            className="bg-amber-300 text-black rounded px-4 py-2 font-semibold text-sm cursor-pointer active:scale-95"
            onClick={() => {
              setIndex(index + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
