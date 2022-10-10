import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import ChatList from "../ChatList/ChatList";
import ChatSideBar from "../ChatSideBar/ChatSideBar";

const Messenger = () => {
  const [user] = useAuthState(auth);
  console.log("user", user);
  return (
    <div className="">
      <div className="container mx-auto px-4">
        <div className="md:flex flex-row gap-4">
          <div className="basis-1/3">
            <ChatList />
          </div>

          <div className="basis-2/3">
            <ChatSideBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
