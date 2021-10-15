import React from 'react';
import { familyMembers } from './constants';

function createNodeLabel(id) {
  const familyMember = familyMembers.find((m) => m.id === id);
  return (
    <>
      <strong>{familyMember.name}</strong>
      <p className="birthday">Дата рождения: {familyMember.birthday}</p>
    </>
  );
};

export {
  createNodeLabel,
}