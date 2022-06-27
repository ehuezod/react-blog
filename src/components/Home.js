import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase-config";

export default function Home() {
    const postsCollection = collection(db, "posts");
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        const getPosts = async() => {
            const data = await getDocs(postsCollection);
            setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id }))); //accessing documents from responses
        };
        getPosts();
    });

    return ( <
        div className = "home-page" > { " " } {
            postList.map((post) => {
                return ( <
                    div className = "post" >
                    <
                    h1 > { post.title } < /h1> <p> {post.postText} </p > { " " } <
                    q > { post.author.name } < /q>{" "} <
                    /div>
                );
            })
        } { " " } <
        /div>
    );
}