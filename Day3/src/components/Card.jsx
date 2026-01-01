export const Card = (props) => {
  console.log(props);
  return (
    <div className="card">
      <h3>{props.userName}</h3>
      <h5>My Age is {props.age}</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  );
};
