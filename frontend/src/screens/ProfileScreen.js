import moment from "moment";
import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import Header from "../components/profileComponents/Header";

const ProfileScreen = () => {
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, userInfo } = userDetails;
  console.log(userInfo);
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { UpdateLoading, UpdateUserInfo } = userUpdateProfile;

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
              <Link to="setting">
                <div className="bg-green-200">
                  <p className="ml-3 py-3 ">PROFILE SETTINGS</p>
                </div>
              </Link>
              <Link to="order-list">
                <div className="flex justify-between ml-3 py-3">
                  <p> ORDER LIST</p>
                  <p className="mr-2"> 0</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="grow-[2]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
