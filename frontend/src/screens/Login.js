import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/profileComponents/Header";
import { login } from "../Redux/Actions/userActions";

const Login = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;
  const navigate = useNavigate();
  useEffect(() => {
    if (userInfo) {
      console.log(userInfo);
      navigate("/");
    }
  }, [userInfo]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <div>
      <>
        <Header />
        <div className=" flex items-center justify-center h-screen">
          <form onSubmit={submitHandler}>
            <p className="text-center mb-2">SIGN IN</p>
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
              <button type="submit">LOGIN</button>
            </div>
            <p>
              <Link to="/register">Create a new Account</Link>
            </p>
          </form>
        </div>
      </>
    </div>
  );
};

export default Login;
