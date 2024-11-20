import { motion } from "framer-motion";

import defaultImg from "../../../assets/images/defaultImg.jpg";

function PetInfo() {
  return (
    <div className="flex">
      <motion.picture className="w-20 h-56" layoutId="pet-image">
        <img
          src={defaultImg}
          alt={"Pet do not have image"}
          className="w-full h-full object-cover aspect-square rounded-t-lg"
        />
      </motion.picture>
    </div>
  );
}
export default PetInfo;
