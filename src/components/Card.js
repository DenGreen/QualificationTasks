import React, { useState } from "react";
import { nanoid } from "nanoid";
function Card({ date }) {
  const [selectedArr, setSelectedArr] = useState([]);

  const handlerClick = (e) => {
    const parent = e.target.closest(".card-box");

    if (parent.classList.contains("selected")) {
      const newSelectedArr = selectedArr.filter((value) => value !== parent.id);

      setSelectedArr(newSelectedArr);
      parent.classList.remove("selected");
    } else {
      setSelectedArr([...selectedArr, parent.id]);
      parent.classList.add("selected");
    }
  };

  const searchSelected = (id) => {
    const index = selectedArr.findIndex((valueId) => id === valueId);

    if (index !== -1) return true;
    return false;
  };

  const dateMap = date.map((value) => {
    return (
      <div className='card-box' key={value.id} id={value.id}>
        <div className={`card ${!value.disabled ? '' : "disabled"}`} onClick={value.disabled ? null : handlerClick}>
          <span className="card__text">{value.text}</span>
          <title className="card__title">{value.title}</title>
          <span className="card__description">{value.description}</span>
          <span className="card__info-portions">{value.infoPortions}</span>
          {value.infoGift.map((text) => {return (<span className="card__info-gift" key={nanoid()}>{text}</span>)})}
          
          <img className="card__img" src={`./img/${value.img}`} alt="cat"/>
          <div className="card__volume">
            <span className="volume-text">{value.volume}</span>
            <span className="volume-text__measurement">
              {value.measurement}
            </span>
          </div>
        </div>
        {
          value.disabled ? 
          <span className="card-box__footer card-box__footer--disabled">{value.disabledInfo}</span> 
          :
          <span className="card-box__footer">
          {searchSelected(value.id) ? (
            value.selectedInfo
          ) : (
            <>
              Чего сидишь? Порадуй котэ, <a href="#0" onClick={handlerClick}>купи.</a>
            </>
          )}
        </span>
        }
        
      </div>
    );
  });

  return dateMap;
}

export default Card;