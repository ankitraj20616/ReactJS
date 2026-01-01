import { Card } from "./components/Card.jsx";
const App = () => {
  return (
    <div className="parent">
      <Card userName="Ankit Raj" age={22} />
      <Card userName="Aman Kumar" age={20} />
    </div>
  );
};
export default App;
