import { Card } from "./components/Card.jsx";

import { jobs } from "./components/jobs.js";
const App = () => {
  return (
    <div className="parent">
      {jobs.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Card
              company={elem.company}
              id={elem.id}
              level={elem.level}
              location={elem.location}
              logo={elem.logo}
              posted={elem.posted}
              salary={elem.salary}
              title={elem.title}
              type={elem.type}
            />
          </div>
        );
      })}
    </div>
  );
};
export default App;
