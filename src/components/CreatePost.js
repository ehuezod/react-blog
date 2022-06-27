import React from "react";
import { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

export default function CreatePost({ isAuth }) {
    const [title, setTitle] = useState();
    const [postText, setPostText] = useState();
    const postsCollection = collection(db, "posts");
    let navigate = useNavigate();

    const createPost = async() => {
        await addDoc(postsCollection, {
            title: title,
            postText: postText,
            author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
        });
        navigate("/");
    };

    useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        }
    }, []);

    return ( <
        div className = "create-post-page" >
        <
        div className = "create-post-container" >
        <
        h1 > Create a new post < /h1> <
        div className = "create-post-input" >
        <
        label > Title < /label>{" "} <
        input placeholder = "what is this about?"
        onChange = {
            (event) => {
                setTitle(event.target.value);
            }
        }
        /> <
        /div> <
        div className = "create-post-input" >
        <
        label > Post < /label>{" "} <
        textarea placeholder = "Give me the details"
        onChange = {
            (event) => {
                setPostText(event.target.value);
            }
        }
        /> <
        /div> <
        button onClick = { createPost } > Create Post < /button> <
        /div> <
        /div>
    );
}