import "remixicon/fonts/remixicon.css";
import { HeroText } from "./HeroText";
import { Arrow } from "./Arrow.jsx";
export const LeftContent = () => {
  return (
    <div className="h-full flex flex-col justify-between w-1/3 ">
      <HeroText />
      <Arrow />
    </div>
  );
};
