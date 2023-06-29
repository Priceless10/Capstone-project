import React, { useContext } from "react";
import {
  useGooglePopUp,
  useGitHubPopUp,
  useEmailAndPassword,
} from "../../hooks";
import { AuthContext } from "../../context/AuthContext";
import { Link, NavLink } from "react-router-dom";

// RegEx for inputs
// const matchEmail = new RegExp("^([\\w]+)\@[\\w]+\.[\\w]+$")

// SignUp component
const Signup = () => {
  const { state, dispatch } = useContext(AuthContext);
  const { popUp } = useGooglePopUp();
  const { githubPopUp } = useGitHubPopUp();
  const { emailAndPassword } = useEmailAndPassword();

  // handle form submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailAndPassword(
      state.user.email,
      state.user.password,
      `${[state.user.displayName.first, state.user.displayName.last].join(" ")}`
    );

    // alert(state.email + " " + state.password)
    // console.log("submitted");
    // console.log(matchEmail.test(state.email))
    // console.log(state.email.match(matchEmail))
  };

  return (
    <>
      <div className="my-10">
        <h2 className="text-3xl font-semibold text-center">
         Sign Up for an account
        </h2>
        <br />
        <form onSubmit={handleSubmit}>
          <section className="flex justify-between w-[520px]">
            <div className="w-[49%]">
              <label htmlFor="first-name" className="text-lg ">
                First name
              </label>
              <br />
              <input
                onChange={(e) =>
                  dispatch({ type: "SET_FNAME", payload: e.target.value })
                }
                className="w-full py-[10px] px-[14px] border border-gray-200 shadow-sm shadow-gray-200 mt-2 rounded-md "
                type="text"
                name="firstname"
                id="first-name"
                placeholder="John"
                autoComplete="on"
              />
            </div>
            <div className="w-[49%]">
              <label htmlFor="last-name" className="text-lg ">
                Last name
              </label>
              <br />
              <input
                onChange={(e) =>
                  dispatch({ type: "SET_LNAME", payload: e.target.value })
                }
                className="w-full py-[10px] px-[14px] border border-gray-200 shadow-sm shadow-gray-200 mt-2 rounded-md "
                type="text"
                name="lastname"
                id="last-name"
                placeholder="Doe"
                autoComplete="on"
              />
            </div>
          </section>
          <br />
          {/* <section>
            <label htmlFor="user-mode" className="text-lg ">
              You are joining as?
            </label>
            <br />
            <select
              className="w-[520px] py-[10px] px-[14px] border border-gray-200 shadow-sm shadow-gray-200 mt-2 rounded-md "
              name="user-moode"
              id="user-mode"
            >
              <option className="border-white border" value="Writer">
                Writer
              </option>
              <option value="Reader">Reader</option>
            </select> 
          </section> */}
          <br />
          <label htmlFor="email" className="text-lg ">
            Email address
          </label>
          <br />
          <input
            className="w-[520px] py-[10px] px-[14px] border border-gray-200 shadow-sm shadow-gray-200 mt-2 rounded-md "
            type="email"
            name="email"
            id="email"
            placeholder="johndoe@mail.com"
            autoComplete="on"
            onChange={(e) =>
              dispatch({ type: "SET_EMAIL", payload: e.target.value })
            }
          />
          <br />
          <br />
          <label htmlFor="password" className="text-lg ">
            Password
          </label>
          <br />

          <input
            className="w-[520px] py-[10px] px-[14px] border border-gray-200 shadow-sm shadow-gray-200 mt-2 rounded-md "
            type="password"
            name="email"
            id="password"
            placeholder="********"
            onChange={(e) =>
              dispatch({ type: "SET_PASSWORD", payload: e.target.value })
            }
          />
          <br />
          <br />
          <label htmlFor="confirm-password" className="text-lg ">
            Confirm Password
          </label>
          <br />

          <input
            className="w-[520px] py-[10px] px-[14px] border border-gray-200 shadow-sm shadow-gray-200 mt-2 rounded-md "
            type="password"
            name="email"
            id="confirm-password"
            placeholder="********"
          />
          <br />
          <br />
          <button className="w-[520px] text-center bg-blue-700 text-white font-bold py-[10px] px-[14px] rounded-md">
            Create account
          </button>
        </form>
        <section className="my-6">
          <button
            onClick={popUp}
            className="w-[520px] text-center bg-white text-black border border-gray-200 shadow-sm shadow-gray-200 font-semibold py-[10px] px-[14px] rounded-md"
          >
            Continue with google
          </button>
          <br />
          <br />
          <button
            onClick={githubPopUp}
            className="w-[520px] text-center bg-white text-black border border-gray-200 shadow-sm shadow-gray-200 font-semibold py-[10px] px-[14px] rounded-md"
          >
            Continue with GitHub
          </button>
        </section>
      </div>
    </>
  );
};

export default Signup;
