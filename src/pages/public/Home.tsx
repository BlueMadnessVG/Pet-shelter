import catBackground from "../../assets/images/catBackground.png";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../../global/store";
import { useEffect } from "react";
import { updateFilter } from "../../global/states/filter";
import { motion } from "framer-motion";
import HeroSection from "../../components/public/home/Hero.section";

function Home() {
  const filterState = useSelector((store: AppStore) => store.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateFilter({ type: "all" }));
  }, []);

  return (
    <motion.main className="flex-1 flex-col overflow-y-auto overflow-x-hidden bg-vio bg-zinc-100/60 relative">
      <HeroSection />

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
      </div>
    </motion.main>
  );
}
export default Home;
