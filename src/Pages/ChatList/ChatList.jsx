import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import "./ChatList.css";

const ChatList = () => {
  const [user, loading] = useAuthState(auth);

  const chatID = () => {
    alert();
  };
  return (
    <>
      <div className="bg-warning p-6 rounded shadow">
        <div className="chat-top py-2">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-14 rounded-full">
                <img src={user?.photoURL} alt="user" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="chat-list">
          <ul>
            <li
              onClick={chatID}
              className="list-none flex justify-left items-center  hover:bg-gray-200 p-4 rounded hover:shadow"
            >
              <div className="w-14 rounded-full mr-6 avatar offline">
                <img className="rounded-full" src={user?.photoURL} alt="user" />
              </div>
              <div>
                <h1 className="text-xl font-semibold font-sans ">
                  Tabibur Rahman
                </h1>
                <p className="text-gray-500 font-mono text-sm">
                  You: HI are you there? <span>.1h</span>{" "}
                </p>
              </div>
            </li>
            <li className="list-none flex justify-left items-center  hover:bg-gray-200 p-4 rounded hover:shadow">
              <div className="w-14 rounded-full mr-6 avatar online">
                <img className="rounded-full" src={user?.photoURL} alt="user" />
              </div>
              <div>
                <h1 className="text-xl font-semibold font-sans ">
                  Tabibur Rahman
                </h1>
                <p className="text-gray-500 font-mono text-sm">
                  You: HI are you there? <span>.1h</span>{" "}
                </p>
              </div>
            </li>
            <li className="list-none flex justify-left items-center  hover:bg-gray-200 p-4 rounded hover:shadow">
              <div className="w-14 rounded-full mr-6 avatar offline">
                <img className="rounded-full" src={user?.photoURL} alt="user" />
              </div>
              <div>
                <h1 className="text-xl font-semibold font-sans ">
                  Tabibur Rahman
                </h1>
                <p className="text-gray-500 font-mono text-sm">
                  You: HI are you there? <span>.1h</span>{" "}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ChatList;
