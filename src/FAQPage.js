import React, { useState } from 'react';
import FAQPage_data from './data/FAQPage_data.js';
import styled from 'styled-components';

const DisplayAnswere = (Props) => {
  return Props.DisplayAns ? <p id="a1"> Ans: {Props.Answ} </p> : <p></p>;
};

const Button = styled.button`
  border: 0;
  background-color: white;
  padding: 5px;
  margin: 5px;
  &:hover {
    -webkit-transform: scale(1.2);
  }
`;
const FAQItem = (props) => {
  const { Ques, Answ } = props.itemData;
  const [displayAns, toggleDisplayAns] = useState(false);

  return (
    <dl>
      <dt>
        <Button
          aria-expanded="true"
          aria-controls="a1"
          onClick={() => toggleDisplayAns(!displayAns)}
        >
          {props.itemData.id}) {Ques}
        </Button>
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
      {FAQPage_data.map((data) => {
        return <FAQItem key={data.id} itemData={data} />;
      })}
    </div>
  );
};
