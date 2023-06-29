import { Link } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase-config";

export const Home = () => {
  const [displayName, setDisplayName] = useState("");  

  useEffect(() => {
  getUser();
   
  }, [])
  const getUser = async () => {
    const docRef = doc(db, "users", "user");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setDisplayName(docSnap.data().name);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
    
  };

  


  return (
    <div>
      <header className="flex px-12 py-4 justify-between items-center font-semibold">
        <h2 className="text-3xl text-blue-700">CHATTER</h2>
        <nav className="flex w-3/4 justify-between items-center">
          <ul className="flex gap-6">
            <li>Home</li>
            <li>About us</li>
            <li>Contact</li>
            <li>Blogs</li>
          </ul>
          <div className="flex gap-4">
            <Link
              to="/signin"
              className="border border-blue-500 px-7 py-2 rounded-lg"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="bg-blue-700 text-white border border-blue-700 px-7 py-2 rounded-lg"
            >
              Sign up
            </Link>
          </div>
        </nav>
      </header>
      <main>
        <section className="bg-red-500 min-h-[600px] flex items-center justify-start ">
          <div className=" flex flex-col justify-between items-start gap-8 text-white relative left-40">
            <h1 className="text-4xl font-semibold">
              Welcome {displayName && displayName} to Chatter: A Haven for Text-
              <br />
              Based Content
            </h1>
            <p className="text-lg">
              Unleash the power of Words, Connect with Like-minded Readers{" "}
              <br />
              and Writers
            </p>
            <Link
              to="/signup"
              className="bg-blue-800 text-white border border-blue-800 px-7 py-3 rounded-lg"
            >
              Get started
            </Link>
          </div>
        </section>
        <section className="py-16">
          <div className="flex justify-between items-start px-12 pb-10 gap-10">
            <div className="w-3/5">
              <h2 className="font-semibold text-3xl mb-8">About Chatter</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                totam sunt qui quod dolor numquam voluptatibus praesentium,
                labore ipsa blanditiis, sit tenetur optio natus, repellendus
                animi? Temporibus fugiat qui explicabo.
              </p>
            </div>
            <div className="w-2/5 h-[300px] border-2 border-red-700"></div>
          </div>
          <div className="py-10">
            <div className="w-3/4 mx-auto">
              <h2 className="text-3xl font-semibold text-center mb-5">
                Why you should join chatter
              </h2>
              <p className="mb-12">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim,
                omnis a? Ipsa corporis nobis sapiente ab ea rem? Expedita illo
                libero quos maiores odio culpa neque in veniam voluptates.
                Repellendus.
              </p>
              <div className="flex justify-between flex-wrap">
                <div className="w-[31%] border-2 border-gray-300 rounded-md p-4">
                  <h3 className="font-semibold text-2xl my-4">Analytics</h3>
                  <p className="text-gray-900">
                    Analytics to track the number of views, likes and comment
                    and also analyze the performance of your article over a
                    period of time
                  </p>
                </div>
                <div className="w-[31%] border-2 border-gray-300 rounded-md p-4">
                  <h3 className="font-semibold text-2xl my-4">
                    Social interactions
                  </h3>
                  <p className="text-gray-900">
                    Users on the platform can interact with posts they like,
                    comment and engage in discussioons.
                  </p>
                </div>
                <div className="w-[31%] border-2 border-gray-300 rounded-md p-4">
                  <h3 className="font-semibold text-2xl my-4">
                    Content creation
                  </h3>
                  <p className="text-gray-900">
                    Write nice and appealing with our in-built markdown, a rich
                    text editor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex pt-20 pb-28 items-center px-16 gap-16 bg-yellow-100 ">
          <div className="border-2 border-blue-500 h-[220px] w-1/4 rounded-full"></div>
          <div className="w-3/4">
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, aut suscipit? Laboriosam ipsa odit ullam esse modi
              sequi dolore totam dolorem culpa ad explicabo, aliquam voluptate
              perspiciatis ipsam facere quisquam."
            </p>
            <h3 className="mt-10 mb-5 text-xl font-semibold">
              John Doe,{" "}
              <span className="text-base text-gray-700">
                software developer @AltSchool_Africa
              </span>
            </h3>
            <br />
            <Link
              to="/signup"
              className="bg-blue-800 text-white border border-blue-800 px-7 py-3 rounded-lg"
            >
              {" "}
              Join chatter
            </Link>
          </div>
        </section>
        <section className="flex p-20 gap-16">
          <div className="w-1/3">
            <div className="border-2 border-blue-500 h-[130px] w-[130px] rounded-full"></div>
            <div className="border-2 border-blue-500 h-[130px] w-[130px] rounded-full relative left-[170px] -top-6"></div>
            <div className="border-2 border-blue-500 h-[130px] w-[130px] rounded-full relative -top-12"></div>
          </div>
          <div className="w-1/2 pr-6">
            <h2 className="text-3xl leading-[50px] font-semibold">
              Write, read and connect <br /> with great minds on chatter
            </h2>
            <p className="my-5">
              Share your great ideas, and also read write-ups based on your
              interests. connect with people of same interest and goals
            </p>
            <br />
            <Link
              to="/signup"
              className="bg-blue-800 text-white border border-blue-800 px-7 py-3 rounded-lg"
            >
              Get started
            </Link>
          </div>
        </section>
      </main>
      <footer className="flex px-16 justify-between bg-yellow-100 pt-12 pb-20">
        <h2 className="text-3xl text-blue-700 relative top-5">CHATTER</h2>
        <div className="w-3/4">
          <ul className="flex justify-around">
            <li className="flex flex-col gap-5 text-lg font-semibold">
              Explore
              <ul className="flex flex-col gap-2 text-sm font-normal">
                <li>Community</li>
                <li>Trending blogs</li>
                <li>Chattter for teams</li>
              </ul>
            </li>
            <li className="flex flex-col gap-5 text-lg font-semibold">
              Support
              <ul className="flex flex-col gap-2 text-sm font-normal">
                <li>Support docs</li>
                <li>Join slack</li>
                <li>Contact</li>
              </ul>
            </li>
            <li className="flex flex-col gap-5 text-lg font-semibold">
              Official blog
              <ul className="flex flex-col gap-2 text-sm font-normal">
                <li>Official blog</li>
                <li>Engineering bog</li>
              </ul>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};
