function App() {
  // const btnClicker = () => {
  //   console.log("Button is clicked");
  // };
  function catchInputFieldValue(elem) {
    console.log(elem.target.value);
  }
  // return (
  //   <div>
  //     <h1>Functions</h1>
  //     <button
  //       onClick={() => {
  //         console.log("Button Clicked");
  //       }}
  //     >
  //       Change User
  //     </button>
  //     {/* <input
  //       onChange={(elem) => {
  //         console.log(elem.target.value);
  //       }}
  //       type="text"
  //       placeholder="Enter Your Name"
  //     /> */}
  //     <input
  //       onChange={(elem) => {
  //         catchInputFieldValue(elem);
  //       }}
  //       type="text"
  //       placeholder="Enter Your Name"
  //     />
  //   </div>
  // );

  function pageScrolling(val) {
    console.log(val);
  }

  return (
    // <div
    //   onMouseMove={(elem) => {
    //     console.log(elem.clientX);
    //   }}
    //   className="box"
    // ></div>
    <div
      onWheel={(elem) => {
        // console.log(elem.deltaY);
        pageScrolling(elem.deltaY);
      }}
    >
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  );
}

export default App;
