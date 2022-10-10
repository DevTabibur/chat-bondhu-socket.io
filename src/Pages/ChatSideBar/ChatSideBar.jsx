import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../Firebase/firebase.init";
import "./ChatSidebar.css";

const ChatSideBar = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="bg-warning p-6 rounded shadow">
        <div className="chat-top-bar bottom-2">
          <div className="md:flex justify-between">
            <div className="avatar flex justify-center items-center">
              <div className="w-14 rounded-full mr-6">
                <img src={user?.photoURL} alt="user" />
              </div>
              <h1 className="text-3xl">{user?.displayName}</h1>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="chat-box mt-4 relative">
          <ul>
            <li className="list-none flex justify-left items-center ">
              <div className="w-14 rounded-full mr-6 avatar">
                <img className="rounded-full" src={user?.photoURL} alt="user" />
              </div>
              <div>
                <p className="text-gray-500 font-mono text-sm">
                  You: HI are you there? <span>.1h</span>{" "}
                </p>
              </div>
            </li>
          </ul>

          {/* form */}
          <div className=" absolute bottom-0 left-0 w-full">
            <form onSubmit={handleSubmit(onSubmit)}>

              <div className="form-control max-w-ws">
                <textarea
                  type="text"
                  placeholder="Aa"
                  className="textarea textarea-bordered max-w-ws"
                  {...register("message")}
                />
                
              </div>
              <div className="form-control max-w-xs">
                <input className="btn btn-success" type="submit" value="SEND" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatSideBar;
