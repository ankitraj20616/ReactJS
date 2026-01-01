import { RightCard } from "./RightCard.jsx";

export const RightContent = (props) => {
  return (
    <div className="h-full overflow-x-auto p-6 w-2/3 flex flex-nowrap gap-10">
      {props.users.map((elem, idx) => {
        return <RightCard key={idx} id={idx} image={elem.img} tag={elem.tag} />;
      })}
    </div>
  );
};
