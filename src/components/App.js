import React, { useState, useEffect } from 'react';
import Main from './Main.js';
import Popup from './Popup.js';
import './App.css';
import { familyMembers } from '../utils/constants.js';

function App() {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [selectedCard, setSelectedCard] = useState();

  // Функция закрытия всех попапов
  function closePopup() {
    setIsPopupOpened(false);
    setSelectedCard(null);
  }

  // Обработчик клика по картинке карточки
  function handleCardClick(card) {
    const familyMember = familyMembers.find(m => m.id === card.id);
    const copyFamilyMember = Object.assign({}, familyMember);
    // grandparents: [],
    if (familyMember.grandparents.length) {
      copyFamilyMember.grandparents = familyMembers.filter(element => familyMember.grandparents.indexOf(+element.id) !== -1);
    }
    // parents: [],
    if (familyMember.parents.length) {
      copyFamilyMember.parents = familyMembers.filter(element => familyMember.parents.indexOf(+element.id) !== -1);
    }
    // bro: [],
    if (familyMember.bro.length) {
      copyFamilyMember.bro = familyMembers.filter(element => familyMember.bro.indexOf(+element.id) !== -1);
    }
    // married: [2, 6, 8],
    if (familyMember.married.length) {
      copyFamilyMember.married = familyMembers.filter(element => familyMember.married.indexOf(+element.id) !== -1);
    }
    // children: [5],
    if (familyMember.children.length) {
      copyFamilyMember.children = familyMembers.filter(element => familyMember.children.indexOf(+element.id) !== -1);
    }
    // grandchildren: [7, 8],
    if (familyMember.grandchildren.length) {
      copyFamilyMember.grandchildren = familyMembers.filter(element => familyMember.grandchildren.indexOf(+element.id) !== -1);
    }
    setIsPopupOpened(true);
    setSelectedCard(copyFamilyMember);
  }

  useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === 'Escape') {
        closePopup();
      };
    }

    isPopupOpened && document.addEventListener('keydown', handleEscClose);

    return () => {
      document.removeEventListener('keydown', handleEscClose);
    }
  }, [isPopupOpened, closePopup]);

  return (
    <>
      <Main
        onCardClick={handleCardClick}
      />
      <Popup
        isOpened={isPopupOpened}
        onClose={closePopup}
        card={selectedCard}
      />
    </>
  );
}

export default App;
