import { useNavigate } from "react-router-dom";
import catIcon from "../../../assets/icons/cat.png";
import dogIcon from "../../../assets/icons/dog.png";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between py-2 px-40 text-violet-800 z-10 drop-shadow-lg border-b border-violet-800">
        {/* LOGO REGION */}
        <a
          className="flex flex-row items-end gap-4 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <picture className="aspect-square flex-none w-12 h-12 ">
            <img
              src={dogIcon}
              className="w-full h-full rounded-lg shadow-inner object-cover"
            />
          </picture>

          <h1 className="text-4xl font-extrabold "> Pet Shelter </h1>
        </a>

        {/* USER REGION */}
        <div className="flex gap-4 items-center">
          <a
            className="text-[1.150rem] font-bold cursor-pointer"
            onClick={() => navigate("/Login")}
          >
            Login
          </a>

          <div className="border-l h-[70%] border-violet-700 flex-grow" />

          <a
            className="text-[1.150rem] font-bold cursor-pointer"
            onClick={() => navigate("/SingUp")}
          >
            Sing up
          </a>
        </div>
      </div>

      <div className="flex justify-center gap-28 bg-violet-700 py-2 text-white drop-shadow-lg">
        <button className="text-sm font-semibold hover:underline hover:scale-105 transition-all duration-150">
          ABOUT ADOPTION
        </button>
        <button className="text-sm font-semibold hover:underline hover:scale-105 transition-all duration-150">
          DOGS & PUPPIES
        </button>
        <button className="text-sm font-semibold hover:underline hover:scale-105 transition-all duration-150">
          CATS & KITTENS
        </button>
        <button className="text-sm font-semibold hover:underline hover:scale-105 transition-all duration-150">
          OTHER TYPE OF PETS
        </button>
      </div>
    </div>
  );
}
export default Navbar;
