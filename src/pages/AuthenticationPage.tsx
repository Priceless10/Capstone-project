import { useEffect, useState } from "react";
import { Login, Register } from "../components/Authentication";
import { Link, useLocation } from "react-router-dom";

export const AuthLayout = () => {
  const [user, setUser] = useState({});

  const userId = useLocation();

  useEffect(() => {
    console.log(userId.pathname);
  }, []);

  return (
    <div>
      <div className="lg:flex h-[1024px]">
        <section className="relative z-20 bg-cyan-500 w-full flex items-center justify-center border-2 lg:w-1/2 px-5 h-[500px] lg:h-full">
          <div className="lg:absolute lg:top-[30%]">
            <h2 className="text-3xl font-bold mb-8 text-center -tracking-tighter">
              CHATTER
            </h2>
            <p className="text-lg">
              Unleash the power of Words, Connect with Like-minded Readers and
              Writers
            </p>
          </div>
        </section>
        <section className={["pt-10 relative -shadow-xl shadow-white-500 -top-[100px] bg-white border-2 border-white rounded-t-[50px] z-50 w-full lg:w-1/2 flex flex-col items-center", [userId.pathname === "/signin" ? "h-[800px]" : "h-auto"]].join(" ")}>
          <div className="mt-10 font-bold flex w-[520px]">
            <Link
              to="/signup"
              className={[
                "w-2/4 py-2 border-b-8",
                [userId.pathname === "/signup" ? "border-b-blue-600" : null],
              ].join(" ")}
            >
              REGISTER
            </Link>
            <Link
              to="/signin"
              className={[
                "w-2/4 py-2 text-right border-b-8",
                [userId.pathname === "/signin" ? "border-b-blue-600" : null],
              ].join(" ")}
            >
              LOG IN
            </Link>
          </div>
          {userId.pathname === "/signup" ? <Register /> : <Login />}
        </section>
      </div>
    </div>
  );
};
