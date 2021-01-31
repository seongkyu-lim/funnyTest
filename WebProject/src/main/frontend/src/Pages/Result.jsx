import React from "react";
import styled from "styled-components";

<<<<<<< HEAD
const Result = (props) => {
  const answer = props.match.params.answer;
  return (
    <Answer>
      <h1>Your developing level is `${LEVEL}`</h1>
=======
const Result = () => {
  return (
    <Answer>
      <h1>Right!</h1>
>>>>>>> ee323a3... [Test1] frontend
    </Answer>
  );
};

const Answer = styled.div`
  text-align: center;
  margin-top: 300px;
<<<<<<< HEAD
  color: #642efe;
`;

=======
`;
>>>>>>> ee323a3... [Test1] frontend
export default Result;
