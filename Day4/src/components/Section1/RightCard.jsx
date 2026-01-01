import "remixicon/fonts/remixicon.css";
import { RightCardContent } from "./RightCardContent.jsx";
export const RightCard = (props) => {
  return (
    <div className="h-full w-60 overflow-hidden relative rounded-4xl">
      <img
        src={props.image}
        alt="Card-bg-img"
        className="h-full w-full object-cover"
      />
      <RightCardContent tag={props.tag} id={props.id} />
    </div>
  );
};
