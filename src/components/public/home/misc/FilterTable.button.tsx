import FilterIcon from "../../../../assets/icons/Filter.icon";

function FilterTableButton() {
  return (
    <button className="group flex bg-violet-600 rounded-full text-white items-center hover:rounded-br-xl   hover:pr-2 transition-all duration-200 cursor-pointer drop-shadow-md z-20 ">
      <FilterIcon />
      <h1 className="hidden group-hover:block font-bold"> Filters </h1>

      <div className="hidden group-hover:block absolute right-0 top-10 bg-white p-2 drop-shadow-xl w-[20vw]">
        <h1 className="text-black">asdlahsdl</h1>
      </div>
    </button>
  );
}
export default FilterTableButton;
