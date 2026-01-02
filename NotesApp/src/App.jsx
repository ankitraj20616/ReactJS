import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({ title, detail });
    setTask(copyTask);
    setTitle("");
    setDetail("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className="h-screen lg:flex bg-[#0a0a0a] text-white">
      {/* LEFT SIDE - FORM */}
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-5 lg:w-1/2 p-10 border-b lg:border-b-0 lg:border-r border-gray-700"
      >
        <h1 className="text-4xl font-bold mb-2 text-indigo-400">Add Notes</h1>

        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="w-full px-5 py-3 bg-transparent border border-gray-600 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Write Details here"
          className="w-full h-36 px-5 py-3 bg-transparent border border-gray-600 rounded-lg resize-none placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
        />

        <button className="mt-2 bg-indigo-600 hover:bg-indigo-700 transition active:scale-95 text-white font-semibold py-3 rounded-lg">
          Add Note
        </button>
      </form>

      {/* RIGHT SIDE - NOTES */}
      <div className="lg:w-1/2 p-10">
        <h1 className="text-4xl font-bold text-indigo-400">Recent Notes</h1>

        <div className="flex flex-wrap  gap-6 mt-8 h-[85%] overflow-auto pr-2 scrollbar-thin scrollbar-thumb-gray-600">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className=" flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]"
              >
                <div>
                  <h3 className="leading-tight text-lg font-bold">
                    {elem.title}
                  </h3>
                  <p className="mt-2 leading-tight text-xs font-semibold text-gray-600">
                    {elem.detail}
                  </p>
                </div>
                <button
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
