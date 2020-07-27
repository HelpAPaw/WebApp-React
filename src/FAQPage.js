import React, { useState } from 'react';
import FAQPage_data from './data/FAQPage_data.js';

const DisplayAnswere = (Props) => {
  return Props.DisplayAns ? <p id="a1"> {Props.Answ} </p> : <p></p>;
};

const FAQItem = (props) => {
  const { Ques, Answ } = props.itemData;
  const [displayAns, toggleDisplayAns] = useState(false);

  return (
    <dl>
      <dt>
        <button
          aria-expanded="true"
          aria-controls="a1"
          onClick={() => toggleDisplayAns(!displayAns)}
        >
          {Ques}{' '}
        </button>
      </dt>

      <dd>
        <DisplayAnswere DisplayAns={displayAns} Answ={Answ} />
      </dd>
    </dl>
  );
};

export const FAQPage = () => {
  return (
    <div>
      <h2>FAQ Page </h2>
      FAQPage_data.map((data) => {<FAQItem key={id} itemData={data} />})
    </div>
  );
};
