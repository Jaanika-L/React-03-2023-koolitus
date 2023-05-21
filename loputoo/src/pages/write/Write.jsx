import { useRef } from "react"
import "./write.css"

function Write() {
  const writeTitleRef = useRef();
  const writeStoryRef = useRef();

  const addNewStory = () => {
    const story = JSON.parse(localStorage.getItem("story")) || [];
    story.push(writeStoryRef.current.value);
    story.push(writeTitleRef.current.value);
    localStorage.setItem("story",JSON.stringify(story));
    }


  return (
    <div className='write'>
        <img className="writeImg" src="https://image.shutterstock.com/image-photo/high-mountain-morning-time-beautiful-260nw-1384588922.jpg" alt="" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
                <input ref={writeStoryRef} type="text" placeholder="title" className="writeInput"  autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
<textarea ref={writeTitleRef} placeholder="Tell your story..." type="text" className="writeInput writeText">

</textarea>

            </div>
            <button onClick={addNewStory} className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}

export default Write