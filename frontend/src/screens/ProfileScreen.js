import moment from "moment";
import React, { useEffect, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/profileComponents/Header";
import {
  getUserDetails,
  updateUserProfile,
} from "../Redux/Actions/userActions";

const ProfileScreen = () => {
  const { name, setName } = useState();
  const { email, setEmail } = useState();
  const { password, setPassword } = useState();
  const { confirmPassword, setConfirmpassword } = useState();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDetails());
  }, [dispatch]);
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, userInfo } = userDetails;
  console.log(userInfo);
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { UpdateLoading, UpdateUserInfo } = userUpdateProfile;

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
      <Header />
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-wrap ">
          <div className="shadow-md mr-5 mb-5 grow">
            <div className="">
              <div className="h-16 bg-[url('https://png.pngtree.com/thumb_back/fh260/back_our/20190620/ourmid/pngtree-test-test-test-test-test-test-test-test-test-image_166486.jpg')]"></div>
              <div className="ml-3 -mt-8">
                {" "}
                <FaRegUserCircle size={60} color="#03fcec" />
              </div>
              <div className="pt-2 pb-5 pl-28 pr-8">
                <p>{userInfo?.name}</p>
                <p>Joined {moment(userInfo?.createdAt).format("LL")}</p>
              </div>
              <div className="bg-green-200">
                <p className="ml-3 py-3 ">PROFILE SETTINGS</p>
              </div>
              <div className="flex justify-between ml-3 py-3">
                <p> ORDER LIST</p>
                <p className="mr-2"> 0</p>
              </div>
            </div>
          </div>
          <div className="grow-[2]">
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
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
