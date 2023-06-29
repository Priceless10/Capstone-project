import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase-config";

export const FeedPersonalizedData = () => {
    const navigate = useNavigate()
  const { state, dispatch } = useContext(AuthContext);
  const [buttonSelected, setButtonSelected] = useState<string[]>([]);

  const topics: string[] = [
    "HTML",
    "CSS",
    "Javascript",
    "REACT",
    "NextJs",
    "GIT",
    "VUE",
    "NODE",
    "Python",
    "EXPRESS",
    "POSTGRESS",
    "SQL",
    "NOSQL",
  ];

  useEffect(() => {
    console.log(buttonSelected);
  }, [buttonSelected]);

  const selectedTopics = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { innerText } = e.currentTarget;
      setButtonSelected((prev) => [...prev, innerText]);
      console.log(buttonSelected);
  };

  const UserPreference = async (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("interest")
    if (buttonSelected.length >= 5) {
        console.log("dispatching")
      dispatch({ type: "SET_FEED_DATA", payload: buttonSelected });
      await updateDoc(
        doc(
          db,
          "users",
          `${[state.user.displayName.first, state.user.displayName.last].join(
            "-"
          )}`
        ),
        { post: buttonSelected }
        
      );
      navigate("/")
    }

    
  };

  return (
    <>
      <div className="flex flex-wrap gap-10 justify-between p-4">
        {topics.map((topic) => {
          return (
            <button
              key={topic}
              onClick={selectedTopics}
              className="w-[20%] p-4 border-2 border-blue-500 shadow-md shadow-white/25"
            >
              {topic}
            </button>
          );
        })}
      </div>

      <button
        onClick={UserPreference}
        className="w-[20%] p-4 bg-green-600 border-2 border-green-600 shadow-md shadow-white/25"
      >
        select
      </button>
    </>
  );
};
