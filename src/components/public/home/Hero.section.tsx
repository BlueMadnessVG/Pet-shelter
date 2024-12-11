import { motion } from "framer-motion";

import bg from "../../../assets/images/catBackground.png";

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
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
