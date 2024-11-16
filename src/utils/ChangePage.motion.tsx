import { motion, useIsPresent } from "framer-motion";

function ChangePage() {
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: [0, "-100vw"] }}
      exit={{ x: ["100vw", 0] }}
      transition={{ duration: 0.8, ease: "circInOut" }}
      className="absolute w-full h-full bg-amber-500 m-auto left-0 right-0 top-0 bottom-0 z-20"
    >
      <motion.img src="8ixKaobip.gif" alt="gif image" className="m-auto " />
    </motion.div>
  );
}
export default ChangePage;
