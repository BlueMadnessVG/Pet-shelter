import CatIcon from "../../../assets/icons/cat.icon";
import DogIcon from "../../../assets/icons/dog.icon";
import InfoIcon from "../../../assets/icons/info.icon";
import OthersIcon from "../../../assets/icons/others.icon";
import catBackground from "../../../assets/images/catBackground.png";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../../../global/store";
import { useEffect } from "react";
import { updateFilter } from "../../../global/states/filter";
import FilterButton from "./misc/FilterButton";
import PetCard from "./misc/PetCard";
import FilterTableButton from "./misc/FilterTable.button";
import HomeTable from "./misc/home.table";
import ChangePage from "../../../utils/ChangePage.motion";
import { motion } from "framer-motion";

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
    <motion.main className="flex-1 flex-col overflow-y-auto overflow-x-hidden bg-vio bg-zinc-100/60 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full relative">
        <motion.div
          className="absolute w-[200vw] h-[200vw] -z-10 bg-gradient-to-r from-[#52dab6] to-[#75dbc0] top-[-120vh] left-[50vw] rounded-[40%] mix-blend-multiply"
          initial={{ rotate: 10 }}
          animate={{
            rotate: 360,
            transition: {
              ease: "linear",
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
        />
        <motion.div
          className="absolute w-[200vw] h-[200vw] -z-10 bg-gradient-to-r from-[#52dab6] to-[#75dbc0] top-[-120vh] left-[50vw] rounded-[40%] rotate-[30deg] mix-blend-multiply"
          initial={{ rotate: 40 }}
          animate={{
            rotate: 380,
            transition: {
              ease: "linear",
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
        />
        <motion.div
          className="absolute w-[200vw] h-[200vw] -z-10 bg-gradient-to-r from-[#52dab6] to-[#75dbc0] top-[-120vh] left-[50vw] rounded-[40%] rotate-[30deg] mix-blend-multiply"
          initial={{ rotate: 80 }}
          animate={{
            rotate: 420,
            transition: {
              ease: "linear",
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
        />

        <div>asldkhjasdklja</div>
      </div>
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
    </motion.main>
  );
}
export default Home;
