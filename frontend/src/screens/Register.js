import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/profileComponents/Header";
import { register } from "../Redux/Actions/userActions";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);

  const { loading, userInfo, error } = userRegister;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  };
  if (userInfo) {
    navigate("/");
  }
  return (
    <div>
      <>
        <Header />
        <div className=" flex items-center justify-center h-screen">
          <form onSubmit={submitHandler}>
            <p className="text-center mb-2">SIGN UP</p>
            <div className="mb-5 border-2  border-stone-800">
              <input
                value={name}
                className=" py-2"
                placeholder="Please input your name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-5 border-2  border-stone-800">
              <input
                value={email}
                className=" py-2"
                placeholder="Please input your Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-5 border-2   border-stone-800">
              <input
                className="py-2 "
                value={password}
                required
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="py-2 bg-green-700">
              <button type="submit">SIGN UP</button>
            </div>
            <p>
              <Link to="/login">Already have an Account</Link>
            </p>
          </form>
        </div>
      </>
    </div>
  );
};

export default Register;
