import Post from "../post/Post"
import "./posts.css" 

function Posts() {
  const story = JSON.parse(localStorage.getItem("story")) || [];
  return (
    <div className='posts'>
    <Post/>
    <div>{story.map(story => <div>{story}</div>)}</div>

    </div>
  )
}

export default Posts