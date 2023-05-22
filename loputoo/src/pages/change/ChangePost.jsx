import React, { useRef } from 'react'
import { useParams } from 'react-router-dom'

function ChangePost() {
    const {index} = useParams();
    const post = JSON.parse(localStorage.getItem("post")) || [];
    const foundPost = post[index];
    const postRef = useRef();

    const change = () => {
        post[index] = postRef.current.value;
        localStorage.setItem("post", JSON.stringify(post));
    }
  return (
    <div>
        <label>Post</label><br />
        <input ref={postRef} type="text" defaultValue={foundPost} /> <br />
        <button onClick={change}>Change</button>
    </div>
  )
}

export default ChangePost