import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserDetails,
  updateUserProfile,
} from "../Redux/Actions/userActions";

function ProfileSettings(props) {
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, userInfo } = userDetails;
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { UpdateLoading, UpdateUserInfo } = userUpdateProfile;
  const { name, setName } = useState();
  const { email, setEmail } = useState();
  const { password, setPassword } = useState();
  const { confirmPassword, setConfirmpassword } = useState();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDetails());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("password and ConfirmPassword doesnot seems same");
    } else {
      dispatch(
        updateUserProfile({
          id: userInfo._id,
          name,
          email,
          password,
          confirmPassword,
        })
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          {" "}
          <input
            className="px-5 py-3 border-2 my-10  w-full md:w-2/4  "
            placeholder="Username"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="px-5 py-3 border-2  w-full  md:w-2/4"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            className="px-5  py-3 border-2 mb-10  w-full md:w-2/4"
            placeholder="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="px-5 py-3 border-2 w-full md:w-2/4"
            placeholder="confirm password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
        </div>
        <div className="bg-green-600 py-3 px-2">
          <button> UPDATE PROFILE</button>
        </div>
      </form>
    </div>
  );
}

export default ProfileSettings;
