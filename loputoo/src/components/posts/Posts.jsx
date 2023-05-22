import { Link } from "react-router-dom";
import Post from "../post/Post"
import "./posts.css"

function Posts() {
  const post = JSON.parse(localStorage.getItem("post")) || [];
  return (
    <div className='posts'>
      <Post />
      <div>{post.map((post, index) =>
        <Link to={"/post/" + index}>
          <div>{post}</div>
        </Link>
        )}
    </div>

     </div>
  )
}

export default Posts