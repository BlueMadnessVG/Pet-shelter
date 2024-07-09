import { useNavigate } from "react-router-dom";

function SingUpForm() {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl p-2 flex flex-col items-center w-full max-w-[45%] h-full max-h-[64%] drop-shadow-2xl">
      <h1 className="text-4xl font-extrabold text-violet-700 pt-4">Sing up</h1>
      <h4 className="text-md text-zinc-400 pt-1">
        ¡Join our great family now!
      </h4>

      <div className="flex flex-col w-[95%] pt-8 gap-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="peer drop-shadow-md border border-zinc-300 rounded-md p-2 pt-4 font-semibold text-xl text-violet-700 w-full"
            />
            <label
              htmlFor="name"
              className="absolute left-0 ml-4 -translate-y-3 bg-white px-1 font-semibold ease-linear text-zinc-500"
            >
              Name
            </label>
          </div>

          <div className="relative ">
            <input
              type="text"
              name="lastName"
              placeholder="Your last name"
              className="peer drop-shadow-md border border-zinc-300 rounded-md p-2 pt-4 font-semibold text-xl text-violet-700 w-full"
            />
            <label
              htmlFor="lastName"
              className="absolute left-0 ml-4 -translate-y-3 bg-white px-1 font-semibold ease-linear text-zinc-500"
            >
              Last name
            </label>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 items-center">
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="peer drop-shadow-md border border-zinc-300 rounded-md p-2 pt-4 font-semibold text-xl text-violet-700 w-full"
            />
            <label
              htmlFor="email"
              className="absolute left-0 ml-4 -translate-y-3 bg-white px-1 font-semibold ease-linear text-zinc-500"
            >
              Email
            </label>
          </div>

          <h4 className="text-sm text-zinc-700 italic">
            You will use your email <br /> address to log in
          </h4>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="peer drop-shadow-md border border-zinc-300 rounded-md p-2 pt-4 font-semibold text-xl text-violet-700 w-full"
            />
            <label
              htmlFor="password"
              className="absolute left-0 ml-4 -translate-y-3 bg-white px-1 font-semibold ease-linear text-zinc-500"
            >
              Password
            </label>
          </div>

          <div className="relative ">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Repeat your password"
              className="peer drop-shadow-md border border-zinc-300 rounded-md p-2 pt-4 font-semibold text-xl text-violet-700 w-full"
            />
            <label
              htmlFor="confirmPassword"
              className="absolute left-0 ml-4 -translate-y-3 bg-white px-1 font-semibold ease-linear text-zinc-500"
            >
              Confirm password
            </label>
          </div>
        </div>
      </div>

      <button className="bg-violet-700 text-white font-bold rounded-full p-2 w-[93%] mt-10  transition-all duration-300 hover:scale-105">
        SING UP
      </button>

      <div className="relative flex py-6 items-center w-[80%]">
        <div className="flex-grow border-t border-zinc-300"></div>
        <span className="font-semibold flex-shrink mx-4 text-zinc-500">
          or log in
        </span>
        <div className="flex-grow border-t border-zinc-300" />
      </div>

      <div className="flex gap-2">
        <h3 className="font-semibold text-zinc-600">
          Already have and account?
        </h3>
        <a
          className="underline text-violet-700 hover:text-violet-950 cursor-pointer"
          onClick={() => navigate("/Login")}
        >
          Log in
        </a>
      </div>
    </div>
  );
}
export default SingUpForm;
