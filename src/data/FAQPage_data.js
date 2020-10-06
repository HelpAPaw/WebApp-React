import React from 'react';

const FAQ_LIST = [
  {
    id: 1,
    Ques: 'How does this app work?',
    Answ:
      'If you see a stray animal that needs help but for some reason cannot provide the help yourself you can submit a signal that marks the place and describes the situation. Other people that are nearby will receive a notification about it. Hopefully someone will react to the signal and help the animal.',
  },
  {
    id: 2,
    Ques: 'Who are the people that will help those animals?',
    Answ:
      'Help A Paw connects a network of volunteers that care about animals - just like you!',
  },
  {
    id: 3,
    Ques: 'How does the status of the signal change?',
    Answ:
      "When a signal is submitted it starts with status 'Help needed'. When somebody decides to answer the signal he/she changes the status to 'Somebody on the way' so that other people know. If for example the person arrives at the place but needs some assistance the status can be changed back to 'Help needed'. When the animal finally receives the needed help the signal is marked as 'Solved'. Signals are color-coded in red, orange and green according to their status.",
  },
  {
    id: 4,
    Ques: 'Does this app track my location?',
    Answ:
      'No. Your location is obtained and used only locally on your device. It will not be recorded on a server or used with any other purpose beside notifying you of animals in need in your area.',
  },
];

export default FAQ_LIST;
