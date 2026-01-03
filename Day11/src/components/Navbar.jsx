export const Navbar = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          props.setTheme("Dark");
          //   console.log(props.theme);
        }}
      >
        Change Theme
      </button>
    </div>
  );
};
