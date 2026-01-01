import { Navbar } from "./Navbar.jsx";
import { PageContent } from "./Page1Content.jsx";

export const Section1 = (props) => {
  return (
    <div className="h-screen w-full ">
      <Navbar />
      <PageContent users={props.users} />
    </div>
  );
};
