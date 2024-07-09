import defaultImg from "../../../../assets/images/defaultImg.jpg";

function PetCard() {
  return (
    <a className="flex flex-col cursor-pointer border-2 border-transparent rounded-xl drop-shadow-lg hover:border-violet-700 group">
      <picture className="w-52 h-52">
        <img
          src={defaultImg}
          alt={"Pet do not have image"}
          className="w-full h-full object-cover aspect-square rounded-t-lg "
        />
      </picture>

      <div className="flex text-center rounded-full flex-1 flex-col relative">
        <div className="bg-white rounded-t-[100%] block h-5 w-full bottom-[84%] absolute group-hover:bg-violet-800" />

        <div className="bg-white p-5 rounded-b-lg group-hover:bg-violet-800">
          <h2 className="font-bold text-xl text-violet-800 group-hover:text-white">
            Peludito
          </h2>
        </div>
      </div>
    </a>
  );
}
export default PetCard;
