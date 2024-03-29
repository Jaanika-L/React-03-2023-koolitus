import React, { useEffect, useRef, useState } from 'react'
import "./lisapostitus.css"
import config from "../../data/config.json"
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
// import { Link } from 'react-router-dom';
// import FileUpload from '../../components/FileUpload';

function LisaPostitus() {
  const [postitus, setPostitus] = useState([]);
  // const [imageUrl, setImageUrl]=useState("")


  // const [s6num, uuendaS6num] = useState("");
  const pealkiriRef = useRef();
  const sisuRef = useRef();
  const piltRef = useRef();
  const kategooriaRef = useRef()
  const { t } = useTranslation();



  useEffect(() => {
    fetch(config.postitusedDbUrl)
      .then(res => res.json())
      .then(json => setPostitus(json || []));
  }, []);

  const addNewPost = () => {
    if (pealkiriRef.current.value === "") {
      toast.error("Tühja pealkirjaga ei saa sisestada")
      return;
    }
    if (sisuRef.current.value === "") {
      toast.error("Tühja sisuga ei saa sisestada")
      return;
    }

    const newPost = {
      "pealkiri": pealkiriRef.current.value,
      "sisu": sisuRef.current.value,
      "pilt": piltRef.current.value,
      "kategooria": kategooriaRef.current.value,
      "aeg": new Date()
      // "pilt":imageUrl,

    };

    setPostitus([newPost, ...postitus]); //Lisab postituse esimeseks, mitte viimaseks.

    fetch(config.postitusedDbUrl,
      {
        "method": "PUT", "body": JSON.stringify([newPost, ...postitus])
      } //lisab postituse esimeseks mitte viimaseks
    )
    toast.success("Postitus " + pealkiriRef.current.value + " lisatud!");

  }

  // postitus.push({
  //   "pealkiri": pealkiriRef.current.value,
  //   "sisu": sisuRef.current.value,
  //   "pilt": piltRef.current.value,
  //   // "pilt":imageUrl,
  //   "aeg": new Date()
  // })


  return (
    <div className='write'>
      <img className="writeImg" src="https://cdn.pixabay.com/photo/2016/07/21/20/56/anemone-1533515_1280.jpg" alt="" />
      <form className='writeForm'>
        <div className='writeFormGroup'>
          {/* <div>{s6num}</div><br /> */}
          {/* <label htmlFor="fileInput">
      <i className="writeIcon fa-solid fa-plus"></i>
      </label> */}
          {/* <input type="file" id="fileInput" style={{display:"none"}}/> */}

          <input ref={piltRef} type="text" placeholder={t("img")} className='lisa-pilt' autoFocus={true} /><br />
          <select ref={kategooriaRef} className="vali-kategooria">
            <option>{t("category")}</option>
            <option value="Linnud">{t("birds")}</option>
            <option value="Loodus">{t("nature")}</option>
            <option value="Loomad">{t("animals")}</option>
            <option value="Putukad">{t("creatures")}</option>
          </select>
          {/* <FileUpload onSendPictureUrl={setImageUrl}/> */}
          <input ref={pealkiriRef} type="text" placeholder={t("title")} className='writeInput' /><br />

          <div>
            <textarea ref={sisuRef} placeholder={t("write")} type="text" className='writeInput writeText'>
            </textarea>
          </div>
        </div>
        <button onClick={addNewPost} className='writeSubmit'>{t("add")}</button>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" />
    </div>
  )
}

export default LisaPostitus