import catBackground from "../../assets/images/catBackground.png";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../../global/store";
import { useEffect } from "react";
import { updateFilter } from "../../global/states/filter";
import { motion } from "framer-motion";
import HeroSection from "../../components/public/home/Hero.section";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateFilter({ type: "all" }));
  }, []);

  return (
    <motion.main className="flex-1 flex-col overflow-y-auto overflow-x-hidden bg-vio bg-black/40 relative">
      <HeroSection />
    </motion.main>
  );
}
export default Home;
