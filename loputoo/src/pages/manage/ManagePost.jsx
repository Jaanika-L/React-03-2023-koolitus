import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function ManagePost() {
    const [post, setPost] =useState(JSON.parse(localStorage.getItem("post")) || []);

    const kustuta = (index) => {
        post.splice(index,1);
        setPost(post.slice());
        localStorage.setItem("post", JSON.stringify(post));
    }

  return (
    <div>
        <div>{post.map((post,index) =>
        <div>
            <div>{post}</div>
            <button onClick={()=>kustuta(index)}>x</button>
            <Link to={'/change/' + index}>
               <button>Change</button>
            </Link>
        </div>
        )}</div>
    </div>)
  
}

export default ManagePost