import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl p-2 flex flex-col items-center w-full max-w-[36%] h-full max-h-[52%] drop-shadow-2xl">
      <h1 className="text-4xl font-extrabold text-violet-700 pt-4"> Log In </h1>
      <h4 className="text-md text-zinc-400 pt-1">
        ¡We are happy to have you back!
      </h4>

      <div className="flex flex-col w-[80%] pt-8 gap-6">
        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder="Email@gmail.com"
            className="peer drop-shadow-md border border-zinc-300 rounded-md p-2 pt-4 font-semibold text-xl text-violet-700 w-full"
          />
          <label
            htmlFor="email"
            className="absolute left-0 ml-4 -translate-y-3 bg-white px-1 font-semibold ease-linear text-zinc-500"
          >
            Email
          </label>
        </div>

        <div className="relative pt-2">
          <input
            type="password"
            name="password"
            placeholder="Your password"
            className="peer drop-shadow-md border border-zinc-300 rounded-md p-2 pt-4 font-semibold text-xl text-violet-700 w-full"
          />
          <label
            htmlFor="password"
            className="absolute left-0 ml-4 -translate-y-3 bg-white px-1 font-semibold ease-linear text-zinc-500"
          >
            Password
          </label>
        </div>
      </div>

      <button className="bg-violet-700 text-white font-bold rounded-full p-2 w-[76%] mt-6  transition-all duration-300 hover:scale-105">
        LOG IN
      </button>

      <div className="relative flex py-6 items-center w-[80%]">
        <div className="flex-grow border-t border-zinc-300"></div>
        <span className="font-semibold flex-shrink mx-4 text-zinc-500">
          or sing in
        </span>
        <div className="flex-grow border-t border-zinc-300" />
      </div>

      <div className="flex gap-2">
        <h3 className="font-semibold text-zinc-600"> Need an account? </h3>
        <a
          className="underline text-violet-700 hover:text-violet-950 cursor-pointer"
          onClick={() => navigate("/SingUp")}
        >
          Sing up
        </a>
      </div>
    </div>
  );
}
export default LoginForm;
