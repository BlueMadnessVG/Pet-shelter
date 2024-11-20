import { useDispatch, useSelector } from "react-redux";
import Left_icon from "../../../../assets/icons/left.icon";
import Right_icon from "../../../../assets/icons/right.icon";
import PetCard from "./PetCard";
import { AppStore } from "../../../../global/store";
import { updateTable } from "../../../../global/states/table";

let buttonCSS =
  "bg-white p-2 gap-2 rounded-md shadow-[0_1px_3px_rgba(77,71,81,.2)] w-[14%] flex justify-center text-center items-center hover:bg-violet-600 hover:text-white transition-all duration-150";

function HomeTable() {
  const tableState = useSelector((store: AppStore) => store.table);
  const dispatch = useDispatch();

  const handleChangePage = (newPage: number) => {
    dispatch(updateTable({ index: newPage }));
  };

  return (
    <div>
      <div className="grid grid-cols-5 gap-4">
        <PetCard />
      </div>

      <div className="flex flex-row justify-end my-8 gap-6 text-violet-600 ">
        {!(tableState.index === 1) && (
          <button
            className={buttonCSS}
            onClick={() => handleChangePage(tableState.index - 1)}
          >
            <Left_icon />
            <span className="text-md font-black">PREVIOUS</span>
          </button>
        )}

        {tableState.index < tableState.maxPage && (
          <button
            className={buttonCSS}
            onClick={() => handleChangePage(tableState.index + 1)}
          >
            <span className="text-md font-black">NEXT</span>
            <Right_icon />
          </button>
        )}
      </div>
    </div>
  );
}
export default HomeTable;
