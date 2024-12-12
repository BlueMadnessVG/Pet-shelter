import { motion, stagger, useAnimate } from "framer-motion";

import bg from "../../../assets/images/catBackground.png";
import Dog_paw from "../../../assets/icons/dog_paw.icon";
import DogIcon from "../../../assets/icons/dog.icon";
import Right_icon from "../../../assets/icons/right.icon";

const arrow = {
  initial: { x: 0, scale: 1 },
  animate: { x: 7, scale: 1.2 },
};
function HeroSection() {
  return (
    <div className="flex justify-center h-full relative overflow-hidden w-full">
      <picture>
        <img src={bg} alt="" className="w-full h-full absolute -z-10 right-0" />
      </picture>

      <div className="flex p-4">
        <div className="flex flex-col items-center pt-32 text-white">
          <span className="text-lg font-semibold text-white bg-violet-800/80 text-center px-10 py-1 mb-2 rounded-full ">
            Adopt, love, and make a Difference.
          </span>
          <h1 className="text-7xl font-[1000] my-6">
            Find Your{" "}
            <span className="underline decoration-violet-800">
              Furry Friend
            </span>{" "}
            Today!
          </h1>
          <span className="mt-4 text-center text-lg px-40 font-bold">
            Explore our available animals and discover how you can give a
            shelter pet a second chance at happiness.
          </span>

          <motion.button
            className="px-8 py-3 rounded-full relative radial-gradient mt-12"
            initial={{ "--x": "100%", scale: 1 }}
            animate={{ "--x": "-100%" }}
            whileTap={{ scale: 0.97 }}
            whileHover="animate"
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 1,
              type: "spring",
              stiffness: 20,
              damping: 15,
              mass: 2,
              scale: {
                type: "spring",
                stiffness: 10,
                damping: 5,
                mass: 0.1,
              },
            }}
          >
            <span className="linear-mask flex text-neutral-100 tracking-wide text-xl font-bold h-full w-full relative">
              Browse pets
              <motion.span variants={arrow}>
                <Right_icon />
              </motion.span>
            </span>
            <span className="block absolute inset-0 rounded-full p-[2px] linear-overlay" />
          </motion.button>
        </div>
      </div>

      <div className="absolute bottom-0 w-full h-8 bg-violet-900 ">
        <Dog_paw style="absolute w-20 h-20 text-violet-900 -left-10 -top-16 rotate-[17deg]" />
        <Dog_paw style="absolute w-20 h-20 text-violet-900 left-[1.6rem] -top-[3rem] rotate-[-12deg]" />
        <Dog_paw style="absolute w-20 h-20 text-violet-900 left-[5.8rem] -top-[3.3rem] rotate-[10deg] " />
        <Dog_paw style="absolute w-20 h-20 text-violet-900 left-[10.2rem] -top-[3rem] rotate-[-17deg]" />
        <Dog_paw style="absolute w-20 h-20 text-violet-900 left-[14.4rem] -top-[3.3rem] rotate-[30deg]" />
        <Dog_paw style="absolute w-20 h-20 text-violet-900 left-[18.8rem] -top-[3rem] rotate-[-22deg]" />
        <Dog_paw style="absolute w-20 h-20 text-violet-900 left-[22.2rem] -top-[3.3rem] rotate-[18deg]" />
        <Dog_paw style="absolute w-20 h-20 text-violet-900 left-[26.6rem] -top-[3rem] rotate-[-22deg]" />
        <Dog_paw style="absolute w-20 h-20 text-violet-900 left-[30.2rem] -top-[3.3rem] rotate-[18deg]" />
        <Dog_paw style="absolute w-20 h-20 text-violet-900 left-[34.8rem] -top-[3rem] rotate-[-22deg]" />
        <Dog_paw style="absolute w-20 h-20 text-violet-900 left-[38.2rem] -top-[3.3rem] rotate-[18deg]" />
        <Dog_paw style="absolute w-20 h-20 text-violet-900 left-[42.8rem] -top-[3rem] rotate-[-22deg]" />
        <Dog_paw style="absolute w-20 h-20 text-violet-900 left-[46.2rem] -top-[3.3rem] rotate-[18deg]" />
        <Dog_paw style="absolute w-20 h-20 text-violet-900 left-[50.8rem] -top-[3rem] rotate-[-22deg]" />
        <Dog_paw style="absolute w-20 h-20 text-violet-900 left-[54.2rem] -top-[3.3rem] rotate-[18deg]" />
        <Dog_paw style="absolute w-20 h-20 text-violet-900 left-[58.8rem] -top-[3rem] rotate-[-22deg]" />
        <Dog_paw style="absolute w-20 h-20 text-violet-900 left-[62.2rem] -top-[3.3rem] rotate-[18deg]" />
        <Dog_paw style="absolute w-20 h-20 text-violet-900 left-[66.8rem] -top-[3rem] rotate-[-22deg]" />
        <Dog_paw style="absolute w-20 h-20 text-violet-900 left-[70.2rem] -top-[3.3rem] rotate-[18deg]" />
        <Dog_paw style="absolute w-20 h-20 text-violet-900 left-[74.8rem] -top-[3rem] rotate-[-22deg]" />
        <Dog_paw style="absolute w-20 h-20 text-violet-900 left-[78.2rem] -top-[3.3rem] rotate-[18deg]" />
        <Dog_paw style="absolute w-20 h-20 text-violet-900 left-[82.8rem] -top-[3rem] rotate-[-22deg]" />
        <Dog_paw style="absolute w-20 h-20 text-violet-900 left-[86.2rem] -top-[3.3rem] rotate-[18deg]" />
        <Dog_paw style="absolute w-20 h-20 text-violet-900 left-[90.8rem] -top-[3rem] rotate-[-22deg]" />
        <Dog_paw style="absolute w-20 h-20 text-violet-900 left-[94.2rem] -top-[3.3rem] rotate-[18deg]" />
        <Dog_paw style="absolute w-20 h-20 text-violet-900 left-[98.8rem] -top-[3rem] rotate-[-22deg]" />
        <Dog_paw style="absolute w-20 h-20 text-violet-900 left-[102.2rem] -top-[3.3rem] rotate-[18deg]" />
        <Dog_paw style="absolute w-20 h-20 text-violet-900 left-[106.8rem] -top-[3rem] rotate-[-22deg]" />
        <Dog_paw style="absolute w-20 h-20 text-violet-900 left-[110.2rem] -top-[3.3rem] rotate-[18deg]" />
        <Dog_paw style="absolute w-20 h-20 text-violet-900 left-[112.8rem] -top-[3rem] rotate-[-22deg]" />
        <Dog_paw style="absolute w-20 h-20 text-violet-900 left-[78.8rem] -top-16 rotate-[-18deg]" />
      </div>
    </div>
  );
}
export default HeroSection;
