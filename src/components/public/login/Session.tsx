import { useEffect, useState } from "react";
import { getPets } from "../../../services";
import { useDispatch } from "react-redux";
import { createUser } from "../../../global/states/user";
import { useNavigate, useLocation } from "react-router-dom";

import catBackGround from "../../../assets/images/catBackground.png";
import LoginForm from "./forms/Login.form";
import SingUpForm from "./forms/SingUp.form";

function Session() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchPets = async () => {
    const result = await getPets();
    dispatch(createUser(result.data));
  };

  useEffect(() => {
    //fetchPets();
  }, []);

  return (
    <div className="relative flex-1 ">
      {/* LOGIN DISPLAY REGION */}
      <div className="flex items-center ml-20 h-full">
        {location.pathname == "/Login" ? <LoginForm /> : <SingUpForm />}
      </div>

      {/* BACKGROUND PICTURE REGION  */}
      <picture className=" absolute aspect-auto w-full h-full inset-0 -z-10">
        <img
          src={catBackGround}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </picture>
    </div>
  );
}
export default Session;
