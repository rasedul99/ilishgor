import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import Header from "../components/profileComponents/Header";

const ProfileScreen = () => {
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
                <p>Admin Doe</p>
                <p>Joined Dec 12,2021</p>
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
            <div>
              {" "}
              <input
                className="px-5 py-3 border-2 my-10  w-full md:w-2/4  "
                placeholder="Username"
              />
              <input
                className="px-5 py-3 border-2  w-full  md:w-2/4"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                className="px-5  py-3 border-2 mb-10  w-full md:w-2/4"
                placeholder="password"
              />
              <input
                className="px-5 py-3 border-2 w-full md:w-2/4"
                placeholder="confirm password"
              />
            </div>
            <div className="bg-green-600 py-3 px-2">
              <button> UPDATE PROFILE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
