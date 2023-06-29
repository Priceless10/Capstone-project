import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetPost } from "../hooks/useGetPost";
import { DocumentData, QuerySnapshot, collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../firebase-config";
import { Article } from "./Article";
import {Timestamp} from "firebase/firestore"

export interface PostFeedProps {
  id?: string,
  title: string,
  author: {
    name: string;
    uid: string;
    profilePhoto: string;
  };
  content: string;
  coverPhoto: string;
  date: string;
}

export const PostFeed = () => {
  const [article, setArticle] = useState<PostFeedProps[]>([])

  useEffect(() => {
      const postCollectionRef = collection(db, "posts");
      onSnapshot(postCollectionRef, (snapshot: QuerySnapshot<DocumentData>)=> {
        setArticle(
            snapshot.docs.map((doc)=> {
              const data = doc.data()
              console.log(data)
              return {
                id: doc.id,
                title: data.title,
                author: {
                  name: data.author.name, 
                  uid: data.uid,
                  profilePhoto: data.author.photoURL
                },
                content: data.content,
                coverPhoto: data.coverPhoto,
                date: data.date.toDate().toLocaleString("en-US", {month:"short", day:"numeric", year:"numeric"}),
              }
            }))
            
        })
        console.log(article)
        
    },[]);

  return (
    <section className="mt-4">
      <div className="w-4/4 lg:w-4/5 z-10 mx-auto relative md:p-4">
        <Link
          to="/edit-new-post"
          className="w-[150px] font-semibold rounded-md relative md:left-[80%] left-[70%] top-[20px] md:top-[10px] text-sm p-2 border border-green-500 bg-green-500"
        >
          New article
        </Link>
        <div className=" w-[90%] ml-[5%]">
          <ul className="mt-8 flex justify-around text-sm  md:text-base font-semibold">
            <li>Personalized</li>
            <li>Featured</li>
            <li>Following</li>
          </ul>
        </div>
        <section className="p-4 border w-full md:w-[90%] mx-auto mt-4">
           {article && article.map((post: PostFeedProps) => {
            return (
              <Article key={post.id} title={post.title} coverPhoto={post.coverPhoto} content={post.content} author={post.author} date={post.date} />
            );
          })}
          
        </section>
      </div>
    </section>
  );
};
