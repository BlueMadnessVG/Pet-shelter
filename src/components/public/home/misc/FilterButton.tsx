import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { AppStore } from "../../../../global/store";

const baseButtonStyle = `flex flex-col bg-white py-2 px-6 gap-1 rounded-lg drop-shadow-lg items-center hover:scale-110 border-2 hover:border-violet-700 transform-all duration-150`;

function FilterButton({
  icon,
  text,
  action,
}: {
  icon: ReactElement;
  text: string;
  action: () => void;
}) {
  const filterState = useSelector((store: AppStore) => store.filter);

  return (
    <button
      className={`${baseButtonStyle} ${
        filterState.type !== text
          ? "border-white"
          : "border-violet-700 scale-110"
      }`}
      onClick={action}
    >
      {icon}
      <h3 className="font-bold text-xl "> {text} </h3>
    </button>
  );
}
export default FilterButton;
