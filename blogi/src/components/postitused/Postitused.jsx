import React, { useEffect, useRef, useState } from 'react'
import config from "../../data/config.json"
import { Link } from 'react-router-dom';
import "./postitused.css"
// import Sidebar from '../sidebar/Sidebar';
import { formatDistanceToNow } from 'date-fns';
import { useTranslation } from 'react-i18next';
function Postitused() {

  const [postitused, muudaPostitused] = useState([]); //alati pannakse siia tühi array, kui oodatakse vastust
  const [filteredPostitused, setFilteredPostitused] = useState(postitused)
  const [klikitudPostitus, uuendaKliklitudPostitus] = useState("");
  const searchedRef = useRef();
  const { t } = useTranslation();


  const formatDate = (date) => {
    const parsedDate = new Date(date);
    if (isNaN(parsedDate)) {
      return ''; // Return empty string for invalid dates
    }
    return formatDistanceToNow(parsedDate, { addSuffix: true });
  }

  useEffect(() => {
    fetch(config.postitusedDbUrl)
      .then(res => res.json())
      .then(json => {
        muudaPostitused(json)
        setFilteredPostitused(json);
      })

  }, []);



  const kuvaPostitus = (postitus) => {
    uuendaKliklitudPostitus(postitus.pealkiri);
  }

  const Loomad = () => {
    const tulem = postitused.filter(postitus => postitus.kategooria.includes("Loomad"));
    setFilteredPostitused(tulem);
  }

  const Putukad = () => {
    const tulem = postitused.filter(postitus => postitus.kategooria.includes("Putukad"));
    setFilteredPostitused(tulem);
  }
  const Linnud = () => {
    const tulem = postitused.filter(postitus => postitus.kategooria.includes("Linnud"));
    setFilteredPostitused(tulem);
  }
  const Loodus = () => {
    const tulem = postitused.filter(postitus => postitus.kategooria.includes("Loodus"));
    setFilteredPostitused(tulem);
  }

  const showAllPosts = () => {
    setFilteredPostitused(postitused)
  }

  const searchFromPosts = () => {
    const searchValue = searchedRef.current.value.toLowerCase();
    if (searchValue === "") {
      setFilteredPostitused(postitused);
    } else {


      const result = postitused.filter(element =>
        element.pealkiri.toLowerCase().includes(searchValue)
      );
      setFilteredPostitused(result);
    }
  }

  const handleClickScroll = () => {
    const element = document.getElementById('section-1');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (

    <div  >
      {/* <Sidebar /> */}
      <div id="section-1">{klikitudPostitus}</div>
      <div className='filtri-nupud'>
        <button className='filtri-nupp' onClick={Loomad}>{t("animals")}</button>
        <button className='filtri-nupp' onClick={Putukad}>{t("creatures")}</button>
        <button className='filtri-nupp' onClick={Linnud}>{t("birds")}</button>
        <button className='filtri-nupp' onClick={Loodus}>{t("nature")}</button>
        <button className='filtri-nupp' onClick={showAllPosts} disabled={filteredPostitused.length === postitused.length}>{t("all-posts")}</button>
        <input className='search' placeholder={t("find")} type="text" ref={searchedRef} onChange={searchFromPosts} />
      </div>
      <div className='postitused'>
        {filteredPostitused.length === postitused.length ? (
          postitused.map((postitus, index) => (
            <div className='postitus' key={index}>
              <Link to={"/yks-postitus/" + index} onClick={() => kuvaPostitus(postitus)}>
                {postitus.pilt && <img className='postituse-pilt' src={postitus.pilt} alt="Postituse pilt" />}
                <div className='postituse-pealkiri'>{postitus.pealkiri}</div>
                <div className='postituse-kategooria'>{postitus.kategooria}</div>
                <div className='postituse-sisu'>{postitus.sisu}</div>
                <div className='postituse-aeg'>{formatDate(postitus.aeg)}</div>
              </Link>
            </div>
          ))
        ) : (
          filteredPostitused.map((postitus, index) => (
            <div className='postitus' key={index}>
              <Link to={"/yks-postitus/" + index} onClick={() => kuvaPostitus(postitus)}>
                {postitus.pilt && <img className='postituse-pilt' src={postitus.pilt} alt="Postituse pilt" />}
                <div className='postituse-pealkiri'>{postitus.pealkiri}</div>
                <div className='postituse-kategooria'>{postitus.kategooria}</div>
                <div className='postituse-sisu'>{postitus.sisu}</div>
                <div className='postituse-aeg'>{formatDate(postitus.aeg)}</div>
              </Link>
            </div>
          ))
        )}
      </div>
      <div className='hero-section' id="hero-section">
        <button className="btn-scroll" onClick={handleClickScroll}>
          {t("scroll")}
        </button>
      </div>

    </div>
  );

}


export default Postitused