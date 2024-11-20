import { useNavigate } from "react-router-dom";
import defaultImg from "../../../../assets/images/defaultImg.jpg";
import mexic_flag from "../../../../assets/icons/mexico_flag.svg";
import cat_icon from "../../../../assets/icons/cat.svg";
import { motion, useSpring, useTransform } from "framer-motion";
import { MouseEventHandler } from "react";

const cardRotation = 15;
const cardScale = 1.07;

function PetCard() {
  const navigate = useNavigate();

  const card_X = useSpring(0, { bounce: 0 });
  const card_Y = useSpring(0, { bounce: 0 });
  const scale = useSpring(1, { bounce: 0 });

  const rotateX = useTransform(
    card_X,
    [-0.5, 0.5],
    [`-${cardRotation}deg`, `${cardRotation}deg`]
  );
  const rotateY = useTransform(
    card_Y,
    [-0.5, 0.5],
    [`-${cardRotation}deg`, `${cardRotation}deg`]
  );

  const getMousePosition = (e: React.MouseEvent<Element, MouseEvent>) => {
    const { width, height, left, top } =
      e.currentTarget.getBoundingClientRect();

    const currentMouseX = e.clientX - left;
    const currentMouseY = e.clientY - top;

    return {
      currentMouseX,
      currentMouseY,
      containerWidth: width,
      containerHeight: height,
    };
  };

  const handleMouseMove: MouseEventHandler = (e) => {
    const { currentMouseX, currentMouseY, containerWidth, containerHeight } =
      getMousePosition(e);

    card_X.set(currentMouseX / containerWidth - 0.5);
    card_Y.set(currentMouseY / containerHeight - 0.5);
  };

  const handleMouseEnter: MouseEventHandler = (_e) => {
    scale.set(cardScale);
  };
  const handleMouseLeave: MouseEventHandler = (_e) => {
    scale.set(1);
    card_X.set(0);
    card_Y.set(0);
  };

  return (
    <motion.a
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => navigate(`/Pet/1`)}
      className="flex flex-col cursor-pointer border-2 border-transparent rounded-xl drop-shadow-lg w-64 h-[22rem] hover:border-violet-700 group relative"
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
        scale,
      }}
    >
      <motion.picture className="w-full h-56" layoutId="pet-image">
        <img
          src={defaultImg}
          alt={"Pet do not have image"}
          className="w-full h-full object-cover aspect-square rounded-t-lg"
        />
      </motion.picture>

      <div className="flex rounded-full flex-1 flex-col relative">
        <div className="bg-white rounded-t-[100%] block h-5 w-full -top-2 absolute group-hover:bg-violet-800" />

        <div className="bg-white px-3 capitalize py-2 rounded-b-lg  group-hover:bg-violet-800 flex flex-col items-start justify-between h-full">
          <div>
            <h2 className="font-extrabold text-2xl leading-7 text-violet-800 group-hover:text-white">
              Name
            </h2>
            <h3 className="font-bold text-lg leading-3 text-gray-500 group-hover:text-gray-200">
              Race
            </h3>
          </div>

          <div className="flex w-full justify-between">
            <span className="bg-gray-100 border flex gap-2 items-center border-gray-500 text-gray-500 rounded-md font-bold text-sm  px-1 ">
              <img src={cat_icon} alt="pet icon" className="w-6 h-6" />
              Young
            </span>
            <picture className="w-8 h-8">
              <img
                src={mexic_flag}
                alt="location"
                className="w-full h-full object-cover aspect-square"
              />
            </picture>
          </div>
        </div>
      </div>
    </motion.a>
  );
}
export default PetCard;
