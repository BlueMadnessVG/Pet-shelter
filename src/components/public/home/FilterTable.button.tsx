import FilterIcon from "../../../assets/icons/Filter.icon";
import FilterSelect from "./filter.select";

function FilterTableButton() {
  return (
    <div className="group flex bg-violet-600 rounded-full text-white items-center hover:rounded-br-xl hover:pr-2 transition-all duration-200 cursor-pointer drop-shadow-md z-20 ">
      <FilterIcon />
      <h1 className="hidden group-hover:block font-bold"> Filters </h1>

      <div className="hidden flex-col group-hover:flex absolute right-0 top-10 bg-zinc-50 p-4 drop-shadow-xl w-[25vw] gap-2">
        <FilterSelect name="breed" value="breed" options={""} />
        <FilterSelect name="age" value="age" options={""} />
        <FilterSelect name="size" value="size" options={""} />
        <FilterSelect name="gender" value="gender" options={""} />
      </div>
    </div>
  );
}
export default FilterTableButton;
