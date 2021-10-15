import React from 'react';
import './Popup.css'

function Popup({ isOpened, onClose, card }) {
  return (
    <div className={`popup ${isOpened && 'popup_opened'}`} onClick={(e) => { if (e.target.classList.contains('popup')) onClose() }}>
      ({card &&
        <div className="popup__container">
          <button type="button" className="popup__button" onClick={onClose}></button>
          <div className="popup__info">
            <img src={card.avatar} alt={card.name} className="popup__avatar" />
            <div className="popup__description">
              <p className="popup__heading">{card.name}</p>
              <p className="popup__birthday">Дата рождения: {card.birthday}</p>
              {!!card.grandparents.length &&
                <>
                  <p className="popup__title">Бабушки и дедушки: </p>
                  {card.grandparents.map((element) => {
                    return <p key={element.id} className="popup__text">{element.name}</p>
                  })
                  }
                </>
              }
              {!!card.parents.length &&
                <>
                  <p className="popup__title">Родители: </p>
                  {card.parents.map((element) => {
                    return <p key={element.id} className="popup__text">{element.name}</p>
                  })
                  }
                </>
              }
              {!!card.bro.length &&
                <>
                  <p className="popup__title">Братья и сестры: </p>
                  {card.bro.map((element) => {
                    return <p key={element.id} className="popup__text">{element.name}</p>
                  })
                  }
                </>
              }
              {!!card.married.length &&
                <>
                  <p className="popup__title">В браке: </p>
                  {card.married.map((element) => {
                    return <p key={element.id} className="popup__text">{element.name}</p>
                  })
                  }
                </>
              }
              {!!card.children.length &&
                <>
                  <p className="popup__title">Дети: </p>
                  {card.children.map((element) => {
                    return <p key={element.id} className="popup__text">{element.name}</p>
                  })
                  }
                </>
              }
              {!!card.grandchildren.length &&
                <>
                  <p className="popup__title">Внуки и внучки: </p>
                  {card.grandchildren.map((element) => {
                    return <p key={element.id} className="popup__text">{element.name}</p>
                  })
                  }
                </>
              }
            </div>
          </div>
        </div>
      })
    </div>
  );
}

export default Popup;
