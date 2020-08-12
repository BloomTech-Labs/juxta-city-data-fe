import styled from 'styled-components';

export const Heading = styled.h1`
  font-weight: bold;
  font-size: 36px;
  margin: 25px 0 90px 0;
  color: #212121;

  @media (max-width: 600px) {
    font-size: 24px;
    margin-bottom: 60px;
  }
`;

export const SubmitButton = styled.button`
  padding: 10px 15px;
  background: #0074cc;
  color: white;
  font-size: 14px;
  border-radius: 4px;
  float: right;
  text-transform: uppercase;
  border: none;
  outline: none;
  cursor: pointer;
  margin-bottom: 50px;
`;

export const Form = styled.form``;
