import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/Actions/userActions";

const Header = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logout());
  };
  return (
    <div>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
};

export default Header;
