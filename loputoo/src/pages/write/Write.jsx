import { useRef } from "react"
import "./write.css"

function Write() {
  const writeTitleRef = useRef();
  const writePostRef = useRef();

  const addNewPost = () => {
    const post = JSON.parse(localStorage.getItem("post")) || []; //Siin vist peab olema nii "title" kui "postil" võti
    post.push(writeTitleRef.current.value)
    post.push(writePostRef.current.value)
    localStorage.setItem("post",JSON.stringify(post));
  }
   
  //   const newPost = {
  //   "title": writeTitleRef.current.value,
  //   "post": writePostRef.current.value
  // }
  //   post.push(newPost);
   
    


  return (
    <div className='write'>
        <img className="writeImg" src="https://image.shutterstock.com/image-photo/high-mountain-morning-time-beautiful-260nw-1384588922.jpg" alt="" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
                <input ref={writeTitleRef} type="text" placeholder="title" className="writeInput"  autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
<textarea ref={writePostRef} placeholder="Tell your story..." type="text" className="writeInput writeText">

</textarea>

            </div>
            <button onClick={addNewPost} className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}

export default Write