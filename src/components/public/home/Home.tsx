import CatIcon from "../../../assets/icons/cat.icon";
import DogIcon from "../../../assets/icons/dog.icon";
import InfoIcon from "../../../assets/icons/info.icon";
import OthersIcon from "../../../assets/icons/others.icon";
import catBackground from "../../../assets/images/homeBackground.jpg";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../../../global/store";
import { useEffect } from "react";
import { updateFilter } from "../../../global/states/filter";
import FilterButton from "./misc/FilterButton";
import PetCard from "./misc/PetCard";
import FilterTableButton from "./misc/FilterTable.button";
import HomeTable from "./misc/home.table";

function Home() {
  const filterState = useSelector((store: AppStore) => store.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateFilter({ type: "all" }));
  }, []);

  const changeFilter = (value: string) => {
    dispatch(updateFilter({ type: value }));
  };

  return (
    <div className="flex-1 flex-col overflow-y-auto bg-vio bg-zinc-100/60 relative">
      <div className="relative flex flex-col items-center h-[44%] justify-end border-b-8 border-violet-700">
        <picture className="absolute w-full h-full ">
          <img src={catBackground} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </picture>
        <h1 className="font-bold text-5xl text-white z-10">
          Find your new best friend
        </h1>
        <h2 className="font-bold text-2xl text-white mt-3 z-10">
          Brows in our shelter to find your ideal companion today in just a few
          fo clicks
        </h2>

        <div className="flex flex-row gap-8 translate-y-16">
          <FilterButton
            icon={<DogIcon />}
            text="Dogs"
            action={() => changeFilter("Dogs")}
          />

          <FilterButton
            icon={<CatIcon />}
            text="Cats"
            action={() => changeFilter("Cats")}
          />

          <FilterButton
            icon={<OthersIcon />}
            text="Other Animals"
            action={() => changeFilter("Other Animals")}
          />

          <FilterButton
            icon={<InfoIcon />}
            text="About adoption"
            action={() => console.log("im going to navigate")}
          />
        </div>
      </div>

      <div className="mt-16 pt-8 mx-[4%]">
        <div className="relative flex flex-col gap-4">
          <div className="flex justify-between items-center text-violet-600">
            <a className="text-2xl font-extrabold pl-4">
              Pets Available for Adoption
            </a>

            <FilterTableButton />
          </div>

          <HomeTable />
        </div>
      </div>
    </div>
  );
}
export default Home;
