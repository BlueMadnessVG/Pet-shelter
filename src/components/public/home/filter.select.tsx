import Down_icon from "../../../assets/icons/down.icon";

function FilterSelect({
  name,
  value,
  options,
}: {
  name: string;
  value: string;
  options: any;
}) {
  return (
    <>
      <label
        htmlFor={name}
        className="text-zinc-700 font-bold text-center first-letter:uppercase"
      >
        {name}
      </label>
      <div className="grid items-center group ">
        <select
          name={name}
          className="appearance-none row-start-1 col-start-1 text-black p-2 rounded-md shadow-sm shadow-zinc-400 outline-none border-2 border-transparent active:border-violet-500 focus:rounded-b-none peer cursor-pointer"
        >
          <option value="" className="text-zinc-700 font-bold">
            Some option
          </option>
          <option value="" className="text-zinc-700 font-bold">
            Some option
          </option>
        </select>
        <Down_icon />
      </div>
    </>
  );
}
export default FilterSelect;
