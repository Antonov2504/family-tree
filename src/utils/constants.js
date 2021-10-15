import ifs from './../images/IFS.jpg';
import iam from './../images/IAM.jpg';
import spa from './../images/SPA.jpg';
import sla from './../images/SLA.jpg';
import inf from './../images/INF.jpeg';
import sop from './../images/SOP.jpg';
import imn from './../images/IMN.jpg';
import itn from './../images/ITN.jpg';
import { createNodeLabel } from './utils';

const familyMembers = [
  {
    id: '1',
    name: 'Иванов Федор Степанович',
    gender: 'male',
    avatar: ifs,
    birthday: '12.05.1946',
    grandparents: [],
    parents: [],
    bro: [],
    married: [2],
    children: [5],
    grandchildren: [7, 8],
  },
  {
    id: '2',
    name: 'Иванова Анна Михайловна',
    gender: 'female',
    avatar: iam,
    birthday: '22.03.1948',
    grandparents: [],
    parents: [],
    bro: [],
    married: [1],
    children: [5],
    grandchildren: [7, 8],
  },
  {
    id: '3',
    name: 'Сидоров Петр Алексеевич',
    gender: 'male',
    avatar: spa,
    birthday: '03.11.1948',
    grandparents: [],
    parents: [],
    bro: [],
    married: [4],
    children: [6],
    grandchildren: [7, 8],
  },
  {
    id: '4',
    name: 'Сидорова Лариса Анатольевна',
    gender: 'female',
    avatar: sla,
    birthday: '07.12.1950',
    grandparents: [],
    parents: [],
    bro: [],
    married: [3],
    children: [6],
    grandchildren: [7, 8],
  },
  {
    id: '5',
    name: 'Иванов Николай Федорович',
    gender: 'male',
    avatar: inf,
    birthday: '07.09.1969',
    grandparents: [],
    parents: [1, 2],
    bro: [],
    married: [6],
    children: [7, 8],
    grandchildren: [],
  },
  {
    id: '6',
    name: 'Сидорова Ольга Петровна',
    gender: 'female',
    avatar: sop,
    birthday: '01.07.1968',
    grandparents: [],
    parents: [3, 4],
    bro: [],
    married: [5],
    children: [7, 8],
    grandchildren: [],
  },
  {
    id: '7',
    name: 'Иванов Михаил Николаевич',
    gender: 'male',
    avatar: imn,
    birthday: '03.09.1991',
    grandparents: [1, 2, 3, 4],
    parents: [5, 6],
    bro: [8],
    married: [],
    children: [],
    grandchildren: [],
  },
  {
    id: '8',
    name: 'Иванова Татьяна Николаевна',
    gender: 'female',
    avatar: itn,
    birthday: '08.03.1993',
    grandparents: [1, 2, 3, 4],
    parents: [5, 6],
    bro: [7],
    married: [],
    children: [],
    grandchildren: [],
  },
];

const initialElements = [
  {
    id: '1',
    type: 'input',
    data: {
      label: createNodeLabel('1'),
    },
    position: { x: 0, y: 50 },
  },
  {
    id: '2',
    type: 'input',
    data: {
      label: createNodeLabel('2'),
    },
    position: { x: 100, y: 50 },
  },
  {
    id: '3',
    type: 'input',
    data: {
      label: createNodeLabel('3'),
    },
    position: { x: 300, y: 50 },
  },
  {
    id: '4',
    type: 'input',
    data: {
      label: createNodeLabel('4'),
    },
    position: { x: 400, y: 50 },
  },
  {
    id: '5',
    data: {
      label: createNodeLabel('5'),
    },
    position: { x: 50, y: 150 },
  },
  {
    id: '6',
    data: {
      label: createNodeLabel('6'),
    },
    position: { x: 350, y: 150 },
  },
  {
    id: '7',
    type: 'output',
    data: {
      label: createNodeLabel('7'),
    },
    position: { x: 150, y: 250 },
  },
  {
    id: '8',
    type: 'output',
    data: {
      label: createNodeLabel('8'),
    },
    position: { x: 250, y: 250 },
  },
  {
    id: 'e1-5',
    source: '1',
    target: '5',
    type: 'smoothstep',
  },
  {
    id: 'e2-5',
    source: '2',
    target: '5',
    type: 'smoothstep',
  },
  {
    id: 'e3-6',
    source: '3',
    target: '6',
    type: 'smoothstep',
  },
  {
    id: 'e4-6',
    source: '4',
    target: '6',
    type: 'smoothstep',
  },
  {
    id: 'e5-7',
    source: '5',
    target: '7',
    type: 'smoothstep',
  },
  {
    id: 'e5-8',
    source: '5',
    target: '8',
    type: 'smoothstep',
  },
  {
    id: 'e6-7',
    source: '6',
    target: '7',
    type: 'smoothstep',
  },
  {
    id: 'e6-8',
    source: '6',
    target: '8',
    type: 'smoothstep',
  },
];

export {
  familyMembers,
  initialElements,
};