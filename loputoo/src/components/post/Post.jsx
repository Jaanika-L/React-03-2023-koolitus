

// import { useEffect, useRef, useState } from "react"

import "./post.css"
// "https://loputoo-fa0f0-default-rtdb.europe-west1.firebasedatabase.app/"

function Post() {
 

  // const [post, setPost] = useState([]);
  // const titleRef = useRef();
  // const storyRef = useRef();

  // useEffect(() => {
  //   fetch("https://loputoo-fa0f0-default-rtdb.europe-west1.firebasedatabase.app/post.json")
  //   .then (res => res.json())
  //   .then (json => setPost(json || []));
  // }, []);

  // const addPost = () => {
  //   post.push({"title": titleRef.current.value, "story": storyRef.current.value });
  //   setPost(post.slice())
  //   fetch("https://loputoo-fa0f0-default-rtdb.europe-west1.firebasedatabase.app/post.json", 
  //   {"method": "PUT","body": JSON.stringify(post)})

      
  // }

  return (

    // <div>
    //   <label>Title</label>
    //   <input  ref={titleRef} type="text" />
    //   <label>Story</label>
    //   <input  ref={storyRef} type="text" />
    //   <button onClick={addPost} >Add</button>
    //   {post.map(element => <div>{element.title} <br />{element.story}</div>)}
    // </div>


    


    <div className="post">
            
    <img  className="post" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Javascript.jpg/640px-Javascript.jpg" alt="" />
        
        <div className="postInfo">
            <span
            className="postTitle">Peakiri pealehel olevatele postitustele 
          
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc" >Siin on post.jsx. Siia tuleb info, mis on kirjutatud
        write.jsx'is</p>
        </div>
  )
}

export default Post