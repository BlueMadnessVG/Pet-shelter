import { motion } from "framer-motion";

function HeroSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-full relative overflow-hidden">
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

      <div className="flex justify-center  p-4">
        <div className="flex flex-col">
          <span> Adopt, love, and make a Difference. </span>
          <h1 className="text-7xl font-extrabold">
            Find Your{" "}
            <span className="underline decoration-violet-800">
              Furry Friend
            </span>{" "}
            Today!
          </h1>
          <span className="mt-4 text-justify">
            At FurEver, we believe every pet deserves a loving home. Explore our
            available animals and discover how you can give a shelter pet a
            second chance at happiness.
          </span>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
