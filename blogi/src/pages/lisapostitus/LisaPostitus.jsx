import React, { useEffect, useRef, useState } from 'react'
import "./lisapostitus.css"
import config from "../../data/config.json"
import FileUpload from '../../components/FileUpload';

function LisaPostitus() {
  const [postitus, setPostitus] = useState([]);
  // const [imageUrl, setImageUrl]=useState("")


  const [s6num, uuendaS6num] = useState("");
  const pealkiriRef = useRef();
  const sisuRef = useRef();
  const piltRef = useRef();



  useEffect(() => {
    fetch(config.postitusedDbUrl)
      .then(res => res.json())
      .then(json => setPostitus(json || []));
  }, []);

  const addNewPost = () => {
    if (pealkiriRef.current.value === "") {
      uuendaS6num("Tühja pealkirjaga ei saa sisestada")
      return;
    }
    if (sisuRef.current.value === "") {
      uuendaS6num("Tühja pealkirjaga ei saa sisestada")
      return;
    }
    uuendaS6num("Postitus " + pealkiriRef.current.value + " lisatud!");
    postitus.push({
      "pealkiri": pealkiriRef.current.value,
      "sisu": sisuRef.current.value,
      "pilt": piltRef.current.value,
      // "pilt":imageUrl,
      "aeg": new Date()
    })
    fetch(config.postitusedDbUrl,
      { "method": "PUT", "body": JSON.stringify(postitus) }
    )
  }


  return (
    <div className='write'>
      <img className="writeImg" src="https://thumbs.dreamstime.com/b/panoramic-autumn-landscape-wooden-path-fall-nature-backgro-sunset-background-97979511.jpg" alt="" />
      <form className='writeForm'>
        <div className='writeFormGroup'>
          <div>{s6num}</div><br />
          {/* <label htmlFor="fileInput">
      <i className="writeIcon fa-solid fa-plus"></i>
      </label> */}
          {/* <input type="file" id="fileInput" style={{display:"none"}}/> */}



          <input ref={piltRef} type="text" placeholder='Pilt' className='lisa-pilt' /><br />
          {/* <FileUpload onSendPictureUrl={setImageUrl}/> */}
          <input ref={pealkiriRef} type="text" placeholder='Pealkiri' className='writeInput' autoFocus={true} /><br />

          <div>
            <textarea ref={sisuRef} placeholder='Kirjuta siia' type="text" className='writeInput writeText'>
            </textarea>
          </div>
        </div>
        <button onClick={addNewPost} className='writeSubmit'>Lisa</button>
      </form>
    </div>
  )
}

export default LisaPostitus